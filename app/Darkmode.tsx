'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon } from './icon/moon';
import { Sun } from './icon/sun';

interface IDarkMode {}

const DarkMode = ({}: IDarkMode) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClick = (mode: string) => () => {
    setTheme(mode);
  };

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="bg-darkModeBg cursor-pointer rounded-[50%] p-1">
      {currentTheme === 'dark' ? (
        <div onClick={onClick('light')}>
          <Sun />
        </div>
      ) : (
        <div onClick={onClick('dark')}>
          <Moon />
        </div>
      )}
    </div>
  );
};

export default DarkMode;
