import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import {
  useCreateFeedPostMutation,
  useDeleteFeedPostMutation,
  useFeedPostsQuery,
  useUpdateFeedPostMutation,
} from "./useFeedPosts";
import type { FeedPost } from "../types";

interface UseFeedPageControllerParams {
  currentUsername: string;
}

export function useFeedPageController({
  currentUsername,
}: UseFeedPageControllerParams) {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [editingPost, setEditingPost] = useState<FeedPost | null>(null);
  const [deletingPost, setDeletingPost] = useState<FeedPost | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingContent, setEditingContent] = useState("");

  const feedPostsQuery = useFeedPostsQuery();
  const createPostMutation = useCreateFeedPostMutation();
  const updatePostMutation = useUpdateFeedPostMutation();
  const deletePostMutation = useDeleteFeedPostMutation();

  const posts = useMemo(() => feedPostsQuery.data ?? [], [feedPostsQuery.data]);

  const isCreateDisabled =
    postTitle.trim().length === 0 || postContent.trim().length === 0;
  const isSaveDisabled =
    editingTitle.trim().length === 0 || editingContent.trim().length === 0;

  const handleOpenEditModal = (post: FeedPost) => {
    setEditingPost(post);
    setEditingTitle(post.title);
    setEditingContent(post.content);
  };

  const handleCloseEditModal = () => {
    setEditingPost(null);
    setEditingTitle("");
    setEditingContent("");
  };

  const handleOpenDeleteModal = (post: FeedPost) => {
    setDeletingPost(post);
  };

  const handleCloseDeleteModal = () => {
    setDeletingPost(null);
  };

  const handleCreatePost = () => {
    const title = postTitle.trim();
    const content = postContent.trim();

    if (!title || !content) {
      return;
    }

    createPostMutation.mutate(
      {
        username: currentUsername,
        title,
        content,
      },
      {
        onSuccess: () => {
          setPostTitle("");
          setPostContent("");
          toast.success("Post created.");
        },
        onError: () => {
          toast.error("Could not create post. Try again.");
        },
      },
    );
  };

  const handleDeletePost = () => {
    if (!deletingPost) {
      return;
    }

    deletePostMutation.mutate(deletingPost.id, {
      onSuccess: () => {
        handleCloseDeleteModal();
        toast.success("Post deleted.");
      },
      onError: () => {
        toast.error("Could not delete post. Try again.");
      },
    });
  };

  const handleSavePost = () => {
    if (!editingPost) {
      return;
    }

    const title = editingTitle.trim();
    const content = editingContent.trim();

    if (!title || !content) {
      return;
    }

    updatePostMutation.mutate(
      {
        id: editingPost.id,
        input: {
          title,
          content,
        },
      },
      {
        onSuccess: () => {
          handleCloseEditModal();
          toast.success("Post updated.");
        },
        onError: () => {
          toast.error("Could not update post. Try again.");
        },
      },
    );
  };

  const isInitialLoading = feedPostsQuery.isPending;
  const hasLoadError = feedPostsQuery.isError;
  const isEmpty =
    !feedPostsQuery.isPending && !feedPostsQuery.isError && posts.length === 0;

  return {
    posts,
    currentUsername,
    isInitialLoading,
    hasLoadError,
    isEmpty,
    retryLoadPosts: () => {
      void feedPostsQuery.refetch();
    },
    composer: {
      title: postTitle,
      content: postContent,
      isCreateDisabled,
      isSubmitting: createPostMutation.isPending,
      onTitleChange: setPostTitle,
      onContentChange: setPostContent,
      onCreate: handleCreatePost,
    },
    deleteModal: {
      isOpen: Boolean(deletingPost),
      isDeleting: deletePostMutation.isPending,
      onCancel: handleCloseDeleteModal,
      onDelete: handleDeletePost,
    },
    editModal: {
      isOpen: Boolean(editingPost),
      title: editingTitle,
      content: editingContent,
      isSaveDisabled,
      isSubmitting: updatePostMutation.isPending,
      onTitleChange: setEditingTitle,
      onContentChange: setEditingContent,
      onCancel: handleCloseEditModal,
      onSave: handleSavePost,
    },
    openDeleteModal: handleOpenDeleteModal,
    openEditModal: handleOpenEditModal,
  };
}
