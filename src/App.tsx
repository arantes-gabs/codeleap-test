import { useEffect, useRef, useState } from "react";
import {
  clearStoredUsername,
  getStoredUsername,
  saveStoredUsername,
  SignupPage,
} from "./features/auth";
import { FeedPage } from "./features/feed";

const SCREEN_TRANSITION_DELAY_MS = 380;

type TransitionAction = "signup" | "logout" | null;

export default function App() {
  const [username, setUsername] = useState(() => getStoredUsername());
  const [isInFeed, setIsInFeed] = useState(() => getStoredUsername().length > 0);
  const [transitionAction, setTransitionAction] = useState<TransitionAction>(null);
  const transitionTimeoutRef = useRef<number | null>(null);

  const isTransitioning = transitionAction !== null;

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const runScreenTransition = (
    action: Exclude<TransitionAction, null>,
    callback: () => void,
  ) => {
    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
    }

    setTransitionAction(action);

    transitionTimeoutRef.current = window.setTimeout(() => {
      callback();
      setTransitionAction(null);
      transitionTimeoutRef.current = null;
    }, SCREEN_TRANSITION_DELAY_MS);
  };

  const handleSignUp = () => {
    if (isTransitioning) {
      return;
    }

    const normalizedUsername = username.trim();

    if (normalizedUsername.length === 0) {
      return;
    }

    setUsername(normalizedUsername);
    saveStoredUsername(normalizedUsername);

    runScreenTransition("signup", () => {
      setIsInFeed(true);
    });
  };

  const handleLogout = () => {
    if (isTransitioning) {
      return;
    }

    runScreenTransition("logout", () => {
      clearStoredUsername();
      setUsername("");
      setIsInFeed(false);
    });
  };

  if (!isInFeed) {
    return (
      <SignupPage
        username={username}
        isSigningUp={transitionAction === "signup"}
        onUsernameChange={setUsername}
        onSignUp={handleSignUp}
      />
    );
  }

  return (
    <FeedPage
      currentUsername={username}
      isLoggingOut={transitionAction === "logout"}
      onLogout={handleLogout}
    />
  );
}
