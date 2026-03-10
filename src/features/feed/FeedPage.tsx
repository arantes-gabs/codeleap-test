import {
  DeletePostModal,
  EditPostModal,
  FeedHeader,
  FeedStateCard,
  PostCard,
  PostComposer,
} from "./components";
import { useFeedPageController } from "./hooks/useFeedPageController";

interface FeedPageProps {
  currentUsername: string;
  isLoggingOut: boolean;
  onLogout: () => void;
}

export function FeedPage({
  currentUsername,
  isLoggingOut,
  onLogout,
}: FeedPageProps) {
  const {
    posts,
    isInitialLoading,
    hasLoadError,
    isEmpty,
    retryLoadPosts,
    composer,
    deleteModal,
    editModal,
    openDeleteModal,
    openEditModal,
  } = useFeedPageController({ currentUsername });

  const {
    title: postTitle,
    content: postContent,
    isCreateDisabled,
    isSubmitting: isCreatingPost,
    onTitleChange: onPostTitleChange,
    onContentChange: onPostContentChange,
    onCreate: onCreatePost,
  } = composer;

  const {
    isOpen: isDeleteModalOpen,
    isDeleting,
    onCancel: onCancelDelete,
    onDelete: onDeletePost,
  } = deleteModal;

  const {
    isOpen: isEditModalOpen,
    title: editingTitle,
    content: editingContent,
    isSaveDisabled,
    isSubmitting: isSavingPost,
    onTitleChange: onEditingTitleChange,
    onContentChange: onEditingContentChange,
    onCancel: onCancelEdit,
    onSave: onSaveEdit,
  } = editModal;

  return (
    <>
      <main className="min-h-screen bg-[#DDDDDD]  lg:px-4">
        <div className="mx-auto min-h-screen w-full max-w-[800px] border-x border-[#999999] bg-white">
          <FeedHeader
            currentUsername={currentUsername}
            isLoggingOut={isLoggingOut}
            onLogout={onLogout}
          />

          <div className="space-y-6 px-4 py-6 md:px-5">
            <PostComposer
              title={postTitle}
              content={postContent}
              onTitleChange={onPostTitleChange}
              onContentChange={onPostContentChange}
              isCreateDisabled={isCreateDisabled}
              isSubmitting={isCreatingPost}
              onCreate={onCreatePost}
            />

            <div className="space-y-6 pb-6">
              {isInitialLoading ? (
                <FeedStateCard message="Loading posts..." />
              ) : null}

              {hasLoadError ? (
                <FeedStateCard
                  message="Could not load posts right now."
                  actionLabel="Try again"
                  onAction={retryLoadPosts}
                />
              ) : null}

              {isEmpty ? (
                <FeedStateCard message="No posts yet. Be the first to publish one." />
              ) : null}

              {!isInitialLoading && !hasLoadError
                ? posts.map((post) => {
                    return (
                      <PostCard
                        key={post.id}
                        post={post}
                        canManage={post.username === currentUsername}
                        onDelete={() => openDeleteModal(post)}
                        onEdit={() => openEditModal(post)}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </main>

      <DeletePostModal
        isOpen={isDeleteModalOpen}
        isDeleting={isDeleting}
        onCancel={onCancelDelete}
        onDelete={onDeletePost}
      />

      <EditPostModal
        isOpen={isEditModalOpen}
        title={editingTitle}
        content={editingContent}
        isSaveDisabled={isSaveDisabled}
        isSubmitting={isSavingPost}
        onTitleChange={onEditingTitleChange}
        onContentChange={onEditingContentChange}
        onCancel={onCancelEdit}
        onSave={onSaveEdit}
      />
    </>
  );
}
