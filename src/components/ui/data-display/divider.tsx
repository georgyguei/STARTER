import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import Box from '../layout/box';
import type { UIComponent } from '../type';

/**
 * The sizes of the Divider component
 */
const DIVIDER_SIZES = {
  xs: 'border-[1px]',
  sm: 'border-[2px]',
  md: 'border-[3px]',
  lg: 'border-[4px]',
};

/**
 * The orientations of the Divider component
 */
const DIVIDER_ORIENTATIONS = {
  horizontal: 'w-full border-l-0',
  vertical: 'h-full border-b-0',
};

/**
 * The variants of the Divider component
 */
const dividerVariants = cva(
  'overflow-visible border-inherit border-t-0 border-r-0 border-solid opacity-60',
  {
    variants: {
      size: DIVIDER_SIZES,
      orientation: DIVIDER_ORIENTATIONS,
    },
    defaultVariants: {
      size: 'xs',
      orientation: 'horizontal',
    },
  }
);

/**
 * The props of the Divider component
 */
type DividerProps = VariantProps<typeof dividerVariants> & {
  children?: never;
  as?: never;
};

/**
 * Dividers are used to visually separate content in a list or group.
 *
 * @example
 * <Divider orientation="horizontal" />
 *
 * @param prop - The props of the Divider component
 *
 * @returns The Divider component
 */
const Divider: UIComponent<'hr', DividerProps> = (props): JSX.Element => {
  const { as, orientation, className, size, children, ...rest } = props;
  return (
    <Box
      as="hr"
      className={cn(dividerVariants({ size, orientation, className }))}
      aria-orientation={orientation || 'horizontal'}
      {...rest}
    />
  );
};

Divider.displayName = 'Divider';

export default Divider;
