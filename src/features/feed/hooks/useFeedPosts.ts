import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createFeedPost,
  deleteFeedPost,
  getFeedPosts,
  updateFeedPost,
} from "../api/postsApi";

export const feedPostsQueryKey = ["feed-posts"] as const;

export function useFeedPostsQuery() {
  return useQuery({
    queryKey: feedPostsQueryKey,
    queryFn: getFeedPosts,
  });
}

export function useCreateFeedPostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createFeedPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: feedPostsQueryKey });
    },
  });
}

export function useUpdateFeedPostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateFeedPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: feedPostsQueryKey });
    },
  });
}

export function useDeleteFeedPostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFeedPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: feedPostsQueryKey });
    },
  });
}
