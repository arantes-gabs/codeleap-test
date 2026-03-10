import { formatDistanceToNowStrict, isValid, parseISO } from "date-fns";

export function formatRelativeTime(dateTime: string) {
  const postDate = parseISO(dateTime);

  if (!isValid(postDate) || postDate.getTime() > Date.now()) {
    return "just now";
  }

  return formatDistanceToNowStrict(postDate, {
    addSuffix: true,
    roundingMethod: "floor",
  });
}
