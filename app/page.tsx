'use client';
import { useRouter } from 'next/navigation';

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
        <button onClick={() => push('/resume')}>Résumé</button>
        <button onClick={() => push('/portfolio')}>Portfolio</button>
      </div>
    </main>
  );
}
