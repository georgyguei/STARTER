'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function CloseButton() {
  const router = useRouter();

  const onClose = () => router.back();

  return (
    <button
      className={cn(
        'm-3 rounded-md bg-blue-500 px-4 py-2 text-white outline-none focus-visible:shadow-outline'
      )}
      type="button"
      onClick={onClose}
    >
      Close
    </button>
  );
}
