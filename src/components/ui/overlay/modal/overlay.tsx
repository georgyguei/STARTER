import Box from '@/components/ui/layout/box';
import { cn } from '@/lib/utils';
import type { UIComponent } from '../../type';

const ModalOverlay: UIComponent<'div', object> = props => {
  const { className, ...rest } = props;
  return (
    <Box
      className={cn(
        'fixed top-0 left-0 z-modal h-screen w-screen bg-blackAlpha-600',
        className
      )}
      data-aria-hidden="true"
      aria-hidden="true"
      {...rest}
    />
  );
};

ModalOverlay.displayName = 'ModalOverlay';

export default ModalOverlay;
