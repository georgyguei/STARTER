import { cn } from '@/lib/utils';
import Box from '../../layout/box';
import type { UIComponent } from '../../type';

const ModalBody: UIComponent<'div', object> = props => {
  const { className, ...rest } = props;
  return <Box className={cn('flex-1 py-2 ps-6 pe-6', className)} {...rest} />;
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
