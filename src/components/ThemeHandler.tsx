'use client';

import { useEffect } from 'react';

export const ThemeHandler = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) => {
  useEffect(() => {
    document.body.setAttribute('data-theme', theme || 'achird-dark');
  }, [theme]);

  return <>{children}</>;
};
