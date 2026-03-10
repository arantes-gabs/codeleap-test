import type { FeedPost } from "../types";
import { formatRelativeTime } from "../utils/formatRelativeTime";

interface PostCardProps {
  post: FeedPost;
  canManage: boolean;
  onDelete?: () => void;
  onEdit?: () => void;
}

export function PostCard({ post, canManage, onDelete, onEdit }: PostCardProps) {
  const paragraphs = post.content.split("\n\n");

  return (
    <article className="overflow-hidden rounded-2xl border border-[#999999] bg-white">
      <header className="flex items-center justify-between gap-4 bg-[#7695EC] px-6 py-5">
        <h3 className="text-[22px] font-bold leading-[26px] text-white">
          {post.title}
        </h3>

        {canManage ? (
          <div className="flex items-center gap-4 text-white">
            <button
              type="button"
              aria-label="Delete post"
              onClick={onDelete}
              className="inline-flex items-center justify-center rounded p-0.5 transition-colors hover:bg-white/15"
            >
              <img
                src="/ic-delete.svg"
                alt=""
                aria-hidden="true"
                className="h-7.75 w-7.75"
              />
            </button>

            <button
              type="button"
              aria-label="Edit post"
              onClick={onEdit}
              className="inline-flex items-center justify-center rounded p-0.5 transition-colors hover:bg-white/15"
            >
              <img
                src="/ic-edit.svg"
                alt=""
                aria-hidden="true"
                className="h-7.75 w-7.75"
              />
            </button>
          </div>
        ) : null}
      </header>

      <div className="space-y-4 px-6 py-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold leading-[21px] text-[#777777]">
            @{post.username}
          </span>
          <span className="text-lg font-normal leading-[21px] text-[#777777]">
            {formatRelativeTime(post.created_datetime)}
          </span>
        </div>

        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={`${post.id}-paragraph-${index}`}
              className="text-lg font-normal leading-[21px] text-black"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
