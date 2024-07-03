import { colorSchemes } from '@/lib/theme/colors';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import Box from '../layout/box';
import type { UIComponent } from '../type';

// Calculate the circumference for the SVG circle
const radius = 42; // Adjust this value to change the size of the circle
const circumference = 2 * Math.PI * radius;

// Calculate the stroke-dashoffset for the SVG circle
const offset = 66;

/**
 * The sizes for the circular progress component.
 */
const CIRCULAR_PROGRESS_SIZES = {
  xs: 'text-[12px]',
  sm: 'text-[24px]',
  md: 'text-[48px]',
  lg: 'text-[64px]',
};

/**
 * The variants for the circular progress component.
 */
const circularProgressVariants = cva('relative inline-block align-middle', {
  variants: {
    size: CIRCULAR_PROGRESS_SIZES,
  },
  defaultVariants: {
    size: 'md',
  },
});

/**
 * The props for the circular progress component.
 */
type CircularProgressProps = VariantProps<typeof circularProgressVariants> & {
  colorScheme?: keyof typeof colorSchemes;
  capIsRound?: boolean;
  isIndeterminate?: boolean;
  min?: number;
  max?: number;
  value?: number;
  thickness?: number | string;
};

/**
 * Circular Progress is used to indicates the progress for determinate and indeterminate processes.
 *
 * @example
 * <CircularProgress value={value} />
 *
 * @param props - The props for the circular progress component.
 *
 * @returns The circular progress component.
 */
const CircularProgress: UIComponent<'svg', CircularProgressProps> = props => {
  const {
    className,
    children,
    style,
    colorScheme,
    size,
    capIsRound,
    isIndeterminate,
    thickness = 10,
    value = 0,
    min = 0,
    max = 100,
    ...rest
  } = props;

  // Calculate the dash and gap ratios based on value, min, and max
  const dashRatio = (value - min) / (max - min);
  const gapRatio = 1 - dashRatio;

  // Calculate the stroke-dasharray for the SVG circle
  const strokeDasharray = `${circumference * dashRatio} ${circumference * gapRatio}`;

  const circularProgressStyle: object = {
    ...(colorScheme && {
      '--circular-progress-color': colorSchemes[colorScheme][500],
      '--circular-progress-bg': colorSchemes[colorScheme][100],
    }),
    ...style,
  };

  return (
    <Box
      className={cn(
        colorScheme
          ? 'stroke-[color:var(--circular-progress-bg)] text-[color:var(--circular-progress-color)]'
          : 'stroke-gray-100 text-blue-500',
        circularProgressVariants({ size, className })
      )}
      style={circularProgressStyle}
      role="progressbar"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={isIndeterminate ? undefined : value}
      data-indeterminate={isIndeterminate}
    >
      <svg
        viewBox="0 0 100 100"
        className={cn(
          'size-[1em]',
          isIndeterminate && 'animate-circular-progress-indeterminate'
        )}
        {...rest}
      >
        <title>Circular Progress Indicator</title>
        <circle
          className="fill-transparent"
          r={radius}
          cx={50}
          cy={50}
          strokeWidth={thickness}
        />
        <circle
          className={cn(
            'fill-transparent stroke-current transition-[stroke-dasharray_stroke] duration-[0.6s] ease-[ease]',
            isIndeterminate && 'animate-circular-progress-indeterminate-stroke'
          )}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={offset}
          strokeLinecap={capIsRound ? 'round' : undefined}
          r={radius}
          cx={50}
          cy={50}
          strokeWidth={thickness}
        />
      </svg>
      {children && (
        <Box className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 transform text-[length:0.28125em]">
          {children}
        </Box>
      )}
    </Box>
  );
};

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
