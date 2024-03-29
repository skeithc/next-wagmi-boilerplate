'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useSessionStorageState } from 'ahooks';

export type ThemeType = 'light' | 'dark';

export const ThemeContext = createContext({
  theme: 'light' as ThemeType,
  setThemeOverride: (() => {}) as (theme: ThemeType) => void,
});

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [themeOverride, setThemeOverride] = useSessionStorageState<ThemeType>('theme', {
    defaultValue: undefined,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const initialTheme = mediaQuery.matches ? 'dark' : 'light';

    setTheme(initialTheme);

    mediaQuery.addEventListener('change', ({ matches }) => setTheme(matches ? 'dark' : 'light'));
  }, []);

  const value = useMemo(
    () => ({ theme: themeOverride ?? theme, setThemeOverride }),
    [theme, themeOverride, setThemeOverride]
  );

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(value.theme);
  }, [value]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
