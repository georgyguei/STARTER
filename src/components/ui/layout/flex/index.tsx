import { cn } from '@/lib/utils';
import Box from '../box';
import type { UILayoutComponent } from '../type';

/**
 * Flex is Box with display set to flex.
 *
 * @example
 * <Flex>
 *  <Box>Item 1</Box>
 *  <Box>Item 2</Box>
 *  <Box>Item 3</Box>
 * </Flex>
 *
 * @param {object} props - The props of the component
 * @returns {JSX.Element} - The Flex component
 */
const Flex: UILayoutComponent<'div', object> = (props): JSX.Element => {
  const { className, ...rest } = props;
  return <Box className={cn('flex', className)} {...rest} />;
};

Flex.displayName = 'Flex';

export default Flex;
