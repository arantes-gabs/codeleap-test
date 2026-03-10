import type {
  CreateFeedPostInput,
  FeedPost,
  PaginatedFeedPostsResponse,
  UpdateFeedPostInput,
} from "../types";
import { careersApiClient } from "./client";

type FeedPostsResponse = PaginatedFeedPostsResponse | FeedPost[];

function normalizePosts(response: FeedPostsResponse): PaginatedFeedPostsResponse {
  if (Array.isArray(response)) {
    return {
      count: response.length,
      next: null,
      previous: null,
      results: [...response].sort((left, right) => {
        const leftTime = new Date(left.created_datetime).getTime();
        const rightTime = new Date(right.created_datetime).getTime();

        return rightTime - leftTime;
      }),
    };
  }

  const posts = response.results;

  return {
    ...response,
    results: [...posts].sort((left, right) => {
      const leftTime = new Date(left.created_datetime).getTime();
      const rightTime = new Date(right.created_datetime).getTime();

      return rightTime - leftTime;
    }),
  };
}

export async function getFeedPosts() {
  const { data } = await careersApiClient.get<FeedPostsResponse>("");
  return normalizePosts(data).results;
}

export async function createFeedPost(input: CreateFeedPostInput) {
  const { data } = await careersApiClient.post<FeedPost>("", input);
  return data;
}

export interface UpdateFeedPostVariables {
  id: number;
  input: UpdateFeedPostInput;
}

export async function updateFeedPost({ id, input }: UpdateFeedPostVariables) {
  const { data } = await careersApiClient.patch<FeedPost>(`${id}/`, input);
  return data;
}

export async function deleteFeedPost(id: number) {
  await careersApiClient.delete(`${id}/`);
}
