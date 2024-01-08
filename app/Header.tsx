'use client';

import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  console.log('🚀 ~ file: Header.tsx:8 ~ Header ~ pathname:', pathname);
  const { push } = useRouter();

  return (
    <div
      className={` ${pathname === '/' ? 'hidden' : ''} ${
        pathname.includes('resume') ? 'w-full max-w-3xl' : 'w-full max-w-5xl'
      } mx-auto py-5 text-main font-bold text-xl cursor-pointer sticky top-0 bg-white dark:bg-black flex items-center justify-between`}
    >
      {pathname !== '/' && (
        <p onClick={() => push('/')}>Vivi, Web Frontend Engineer</p>
      )}
    </div>
  );
};

export default Header;
