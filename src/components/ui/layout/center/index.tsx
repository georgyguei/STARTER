import { cn } from '@/lib/utils';
import Flex from '../flex';
import type { UILayoutComponent } from '../type';

/**
 * Center is a layout component that centers its child within itself given width and height.
 *
 * @example
 * <Center>
 *  <Text>Centered content</Text>
 * </Center>
 *
 * @param props - The props of the component.
 *
 * @returns The Center component.
 */
const Center: UILayoutComponent<'div', object> = props => {
  const { className, ...rest } = props;
  return (
    <Flex className={cn('items-center justify-center', className)} {...rest} />
  );
};

Center.displayName = 'Center';

export default Center;
