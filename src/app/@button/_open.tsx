'use client';

import { useRouter } from 'next/navigation';

export default function OpenButton() {
  const router = useRouter();

  const onOpen = () => router.push('/?modal-r=1');

  return (
    <button
      className="rounded-md bg-blue-500 px-4 py-2 text-white"
      type="button"
      onClick={onOpen}
    >
      Open Modal
    </button>
  );
}
