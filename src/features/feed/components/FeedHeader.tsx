interface FeedHeaderProps {
  currentUsername: string;
  isLoggingOut: boolean;
  onLogout: () => void;
}

export function FeedHeader({
  currentUsername,
  isLoggingOut,
  onLogout,
}: FeedHeaderProps) {
  return (
    <header className="flex h-20 items-center justify-between bg-[#7695EC] px-4 md:px-7">
      <h1 className="text-[22px] font-bold leading-[26px] text-white">
        CodeLeap Network
      </h1>

      <div className="flex items-center gap-3">
        <span className="hidden text-sm font-normal leading-4 text-white/90 sm:inline">
          @{currentUsername}
        </span>

        <button
          type="button"
          onClick={onLogout}
          disabled={isLoggingOut}
          className="inline-flex h-8 items-center justify-center rounded-lg border border-white/80 px-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
    </header>
  );
}
