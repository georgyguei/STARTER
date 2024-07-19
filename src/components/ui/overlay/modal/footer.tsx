import { cn } from '@/lib/utils';
import Box from '../../layout/box';
import type { UIComponent } from '../../type';

const ModalFooter: UIComponent<'footer', object> = props => {
  const { className, ...rest } = props;
  return (
    <Box
      as="footer"
      className={cn('flex items-center justify-end py-4 ps-6 pe-6', className)}
      {...rest}
    />
  );
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
