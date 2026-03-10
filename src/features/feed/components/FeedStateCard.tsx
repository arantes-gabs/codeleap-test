import { Button } from "../../../components/Button";

interface FeedStateCardProps {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function FeedStateCard({
  message,
  actionLabel,
  onAction,
}: FeedStateCardProps) {
  const hasAction = Boolean(actionLabel && onAction);

  return (
    <section className="rounded-2xl border border-[#999999] bg-white p-6">
      <p className="text-base text-[#555555]">{message}</p>

      {hasAction ? (
        <div className="mt-4">
          <Button variant="secondary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      ) : null}
    </section>
  );
}
