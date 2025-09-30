'use client';

import { useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from './button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative overflow-hidden"
    >
      <Sun className="h-[1.25rem] w-[1.25rem] rotate-0 scale-100 opacity-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0 dark:opacity-0" />
      <Moon className="absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 opacity-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100 dark:opacity-100" />
    </Button>
  );
}
