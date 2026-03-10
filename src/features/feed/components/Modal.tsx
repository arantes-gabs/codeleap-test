import type { PropsWithChildren } from "react";
import { cn } from "../../../utils/cn";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  panelClassName?: string;
}

export function Modal({ isOpen, panelClassName, children }: ModalProps) {
  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 transition-opacity duration-300 ease-in-out",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <div
        role="dialog"
        aria-modal={isOpen ? "true" : undefined}
        className={cn(
          "w-full rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-2 scale-[0.985] opacity-0",
          panelClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
