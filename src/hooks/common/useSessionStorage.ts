import { useState, useEffect } from 'react';

/**
 * 세션 스토리지를 state와 sync시키는 custom hook
 * @param key
 * @param initialState
 */
function useSessionStorage<T>(key: string, initialState: unknown) {
  const [sessionState, setSessionState] = useState<T>(
    () => JSON.parse(window.sessionStorage.getItem(key)!) || initialState,
  );

  useEffect(() => {
    setSessionState(JSON.parse(window.sessionStorage.getItem(key)!));
  }, [key]);

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(sessionState));
  }, [key, sessionState]);

  return { sessionState, setSessionState };
}

export default useSessionStorage;
