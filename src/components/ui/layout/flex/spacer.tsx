import { cn } from '@/lib/utils';
import Box from '../box';
import type { UILayoutComponent } from '../type';

/**
 * The props of the Spacer component.
 */
type SpacerProps = {
  /**
   * Enforces that no children can be passed to the Spacer component.
   */
  children?: never;
};

/**
 * Spacer is a Box that creates an adjustable, empty space that can be used to tune the spacing between child elements within Flex.
 *
 * @example
 * <Flex>
 *  <Box>Item 1</Box>
 *  <Spacer />
 *  <Box>Item 2</Box>
 * </Flex>
 *
 * @param {object} props - The props of the component
 *
 * @returns {JSX.Element} - The Spacer component
 */
const Spacer: UILayoutComponent<'div', SpacerProps> = (props): JSX.Element => {
  const { className, children, ...rest } = props;
  return <Box className={cn('flex-1 self-stretch', className)} {...rest} />;
};

Spacer.displayName = 'Spacer';

export default Spacer;
