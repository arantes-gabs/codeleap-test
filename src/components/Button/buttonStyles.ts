export const buttonBaseStyles =
  "inline-flex items-center justify-center rounded-lg font-bold transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7695EC] disabled:cursor-not-allowed disabled:opacity-70";

export const buttonVariants = {
  primary:
    "bg-[#7695EC] text-white hover:bg-[#5F7FE0] disabled:bg-[#CCCCCC] disabled:text-white",
  secondary:
    "border border-[#999999] bg-white text-black hover:bg-[#F4F4F4] disabled:border-[#CCCCCC] disabled:text-[#888888]",
  success:
    "bg-[#47B960] text-white hover:bg-[#3EA356] disabled:bg-[#CCCCCC] disabled:text-white",
  danger:
    "bg-[#FF5151] text-white hover:bg-[#E64545] disabled:bg-[#CCCCCC] disabled:text-white",
  ghost:
    "bg-transparent text-[#7695EC] hover:bg-[#F5F8FF] disabled:text-[#888888]",
} as const;

export const buttonSizes = {
  sm: "h-8 px-4 text-sm",
  md: "h-8 min-w-[111px] px-6 text-base leading-[19px]",
  lg: "h-10 px-8 text-base",
} as const;
