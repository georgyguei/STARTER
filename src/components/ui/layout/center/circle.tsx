import { cn } from '@/lib/utils';
import Center from '.';
import type { UILayoutComponent } from '../type';

/**
 * Circle is a layout component that centers its child within itself with round border-radius.
 *
 * @example
 * <Circle>
 *  <Text>Centered content</Text>
 * </Circle>
 *
 * @param props - The props of the component.
 *
 * @returns The Circle component.
 */
const Circle: UILayoutComponent<'div', object> = props => {
  const { className, ...rest } = props;
  return <Center className={cn('rounded-full', className)} {...rest} />;
};

Circle.displayName = 'Circle';

export default Circle;
