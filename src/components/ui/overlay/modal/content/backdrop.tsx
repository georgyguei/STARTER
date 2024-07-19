'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import type { UIComponent } from '../../../type';

const ModalBackdrop: UIComponent<'div', object> = props => {
  const { className, onClick, ...rest } = props;

  const router = useRouter();

  const handleClose = () => {
    // router.back();
  };

  return (
    <div
      className={cn(
        'fixed top-0 left-0 z-modal flex h-dvh w-screen items-start justify-center overflow-auto',
        className
      )}
      tabIndex={-1}
      onClick={onClick ?? handleClose}
      {...rest}
    />
  );
};

ModalBackdrop.displayName = 'ModalBackdrop';

export default ModalBackdrop;
