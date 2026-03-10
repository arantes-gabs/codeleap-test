export interface FeedPost {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface PaginatedFeedPostsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: FeedPost[];
}

export interface CreateFeedPostInput {
  username: string;
  title: string;
  content: string;
}

export interface UpdateFeedPostInput {
  title: string;
  content: string;
}
