import { colorSchemes } from '@/lib/theme/colors';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import Box from '../layout/box';
import type { UIComponent } from '../type';

/**
 * The sizes of the Progress component.
 */
const PROGRESS_SIZES = {
  xs: 'h-1',
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
};

/**
 * The variants of the Progress component.
 */
const progressVariants = cva('relative overflow-hidden', {
  variants: {
    size: PROGRESS_SIZES,
  },
  defaultVariants: {
    size: 'md',
  },
});

/**
 * The props of the Progress component.
 */
type ProgressProps = VariantProps<typeof progressVariants> & {
  colorScheme?: keyof typeof colorSchemes;
  hasStripe?: boolean;
  isAnimated?: boolean;
  isIndeterminate?: boolean;
  min?: number;
  max?: number;
  value?: number;
};

/**
 * Progress is used to display the progress status for a task that takes a long time or consists of several steps.
 *
 * @example
 * <Progress value={50} />
 *
 * @param props - The props of the component
 *
 * @returns The Progress component
 */
const Progress: UIComponent<'div', ProgressProps> = props => {
  const {
    min = 0,
    max = 100,
    value,
    size,
    colorScheme,
    className,
    style,
    isIndeterminate,
    isAnimated,
    hasStripe,
    ...rest
  } = props;

  /**
   * The width of the progress bar.
   */
  const progressWidth = value ? ((value - min) / (max - min)) * 100 : 0;

  const progressStyle: object = {
    ...(colorScheme && {
      '--progress-color': colorSchemes[colorScheme][500],
      '--progress-bg': colorSchemes[colorScheme][100],
    }),
    ...style,
  };

  return (
    <Box
      className={cn(
        colorScheme
          ? 'bg-[color:var(--progress-bg)] text-[color:var(--progress-color)]'
          : 'bg-gray-100 text-blue-500',
        progressVariants({ size, className })
      )}
      style={progressStyle}
      {...rest}
    >
      <Box
        className={`bg-current ${cn(
          'h-full transition-common duration-slow',
          isIndeterminate &&
            'absolute min-w-[50%] animate-progress-indeterminate bg-progress-indeterminate will-change-[left]',
          hasStripe && 'bg-[size:1rem_1rem] bg-progress-striped',
          isAnimated && hasStripe && 'animate-progress-striped'
        )}`}
        style={{ width: isIndeterminate ? undefined : `${progressWidth}%` }}
        role="progressbar"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={isIndeterminate ? undefined : value}
        data-indeterminate={isIndeterminate}
      />
    </Box>
  );
};

Progress.displayName = 'Progress';

export default Progress;
