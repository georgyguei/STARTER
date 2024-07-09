import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import Flex from './flex';
import type { UILayoutComponent } from './type';

/**
 * Defines direction options for the Stack component.
 */
const STACK_DIRECTIONS = {
  /**
   * Vertical stack.
   */
  column: 'flex-col',

  /**
   * Horizontal stack.
   */
  row: 'flex-row',
};

/**
 * Configures variants for the Stack component, allowing for customizable direction and spacing.
 */
const stackVariants = cva('gap-2', {
  variants: {
    direction: STACK_DIRECTIONS,
  },
  defaultVariants: {
    direction: 'column',
  },
});

/**
 * Type definition for StackProps, derived from stackVariants to ensure type safety for props.
 */
type StackProps = VariantProps<typeof stackVariants>;

/**
 * Stack is a layout component used to group elements together and apply a space between them.
 *
 * @example
 * <Stack direction="row">
 *  <Box>1</Box>
 *  <Box>2</Box>
 *  <Box>3</Box>
 * </Stack>
 *
 * @param {object} props - The props of the component
 *
 * @returns {JSX.Element} - The Stack component
 */
const Stack: UILayoutComponent<'div', StackProps> = props => {
  const { direction, className, ...rest } = props;

  return (
    <Flex className={cn(stackVariants({ direction, className }))} {...rest} />
  );
};

Stack.displayName = 'Stack';

export default Stack;
