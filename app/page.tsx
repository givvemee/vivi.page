'use client';
import { useRouter } from 'next/navigation';
import { Arrow } from './icon/arrow';

export default function Home() {
  const { push } = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-main font-bold py-10 text-4xl">
          Web Frontend Engineer, Gibbeum Yoon
        </p>
      </div>

      <div className="flex gap-10">
        <button
          onClick={() => push('/resume')}
          className="w-32 text-left flex justify-between items-center p-2 hover:border-b"
        >
          <span>Résumé</span>
          <Arrow />
        </button>
        <button
          onClick={() => push('/portfolio')}
          className="w-32 text-left flex justify-between items-center p-2 hover:border-b"
        >
          <span>Portfolio</span>
          <Arrow />
        </button>
      </div>
    </main>
  );
}
