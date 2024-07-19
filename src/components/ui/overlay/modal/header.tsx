import { cn } from '@/lib/utils';
import Box from '../../layout/box';
import type { UIComponent } from '../../type';

const ModalHeader: UIComponent<'header', object> = props => {
  const { className, ...rest } = props;
  return (
    <Box
      as="header"
      className={cn('flex-[0] py-4 ps-6 pe-6 font-semibold text-xl', className)}
      {...rest}
    />
  );
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
