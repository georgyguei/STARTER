import { cn } from '@/lib/utils';
import Flex from '../flex';
import type { UILayoutComponent } from '../type';

/**
 * WrapItem is a layout component that represents an item in a wrap layout.
 *
 * @example
 * <WrapItem>Item 1</WrapItem>
 *
 * @param props The props of the wrap item component.
 *
 * @returns The wrap item component.
 */
const WrapItem: UILayoutComponent<'li', object> = (props): JSX.Element => {
  const { className, ...rest } = props;
  return <Flex as="li" className={cn('items-start', className)} {...rest} />;
};

WrapItem.displayName = 'WrapItem';

export default WrapItem;
