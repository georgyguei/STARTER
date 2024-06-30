import { cn } from '@/lib/utils';
import Flex from '../flex';
import type { UILayoutComponent } from '../type';

/**
 * Wrap is a layout component used to add space between elements and wraps automatically if there isn't enough space.
 *
 * @example
 * <Wrap>
 *  <WrapItem>Item 1</WrapItem>
 *  <WrapItem>Item 2</WrapItem>
 * </Wrap>
 *
 * @param props The props of the wrap component.
 *
 * @returns The wrap component.
 */
const Wrap: UILayoutComponent<'ul', object> = props => {
  const { className, ...rest } = props;
  return (
    <Flex
      as="ul"
      className={cn('list-none flex-wrap gap-2 p-0', className)}
      {...rest}
    />
  );
};

Wrap.displayName = 'Wrap';

export default Wrap;
