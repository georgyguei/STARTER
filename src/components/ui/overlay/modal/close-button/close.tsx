'use client';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Box from '../../../layout/box';
import type { UIComponent } from '../../../type';

const CloseButton: UIComponent<'button', object> = props => {
  const { className, onClick, ...rest } = props;

  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Box
      as="button"
      className={cn(
        'absolute top-2 right-2 flex size-8 shrink-0 items-center justify-center rounded-md outline-none transition-all hover:bg-blackAlpha-100 focus-visible:shadow-outline active:bg-blackAlpha-200',
        className
      )}
      type="button"
      aria-label="Close"
      onClick={onClick ?? handleClose}
      {...(rest as object)}
    >
      <span>X</span>
    </Box>
  );
};

export default CloseButton;
