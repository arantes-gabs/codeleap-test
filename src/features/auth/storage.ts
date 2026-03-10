const usernameStorageKey = "codeleap:username";

function canUseStorage() {
  return typeof window !== "undefined" && Boolean(window.localStorage);
}

export function getStoredUsername() {
  if (!canUseStorage()) {
    return "";
  }

  try {
    return window.localStorage.getItem(usernameStorageKey)?.trim() ?? "";
  } catch {
    return "";
  }
}

export function saveStoredUsername(username: string) {
  if (!canUseStorage()) {
    return;
  }

  try {
    window.localStorage.setItem(usernameStorageKey, username);
  } catch {
    return;
  }
}

export function clearStoredUsername() {
  if (!canUseStorage()) {
    return;
  }

  try {
    window.localStorage.removeItem(usernameStorageKey);
  } catch {
    return;
  }
}
