import { colorSchemes } from '@/lib/theme/colors';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import Box from '../layout/box';
import type { UIComponent } from '../type';

/**
 * The sizes for the beat loader component.
 */
const BEAT_LOADER_SIZES = {
  xs: 'text-[0.25rem]',
  sm: 'text-[0.375rem]',
  md: 'text-[0.5rem]',
  lg: 'text-[0.75rem]',
};

/**
 * The variants for the beat loader component.
 */
const BeatLoaderVariants = cva(
  'flex items-center justify-center gap-1 leading-normal',
  {
    variants: {
      size: BEAT_LOADER_SIZES,
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * The props for the beat loader component.
 */
type BeatLoaderProps = VariantProps<typeof BeatLoaderVariants> & {
  colorScheme?: keyof typeof colorSchemes;
};

/**
 * BeatLoader component provide a visual cue that an action is processing awaiting a course of change or a result.
 *
 * @example
 * <BeatLoader />
 *
 * @param props - The props for the beat loader component.
 *
 * @returns The beat loader component.
 */
const BeatLoader: UIComponent<'div', BeatLoaderProps> = props => {
  const { className, children, style, colorScheme, size, ...rest } = props;

  const beatLoaderStyle: object = {
    ...(colorScheme && {
      '--beat-loader-color': colorSchemes[colorScheme][500],
    }),
    ...style,
  };

  return (
    <Box
      className={cn(
        colorScheme ? 'text-[color:var(--beat-loader-color)]' : 'text-white',
        BeatLoaderVariants({ size, className })
      )}
      style={beatLoaderStyle}
      {...rest}
    >
      <span className=" inline-block size-[1em] animate-beat-loader-1 rounded-full bg-current" />
      <span className=" inline-block size-[1em] animate-beat-loader-2 rounded-full bg-current" />
      <span className=" inline-block size-[1em] animate-beat-loader-1 rounded-full bg-current" />
    </Box>
  );
};

BeatLoader.displayName = 'BeatLoader';

export default BeatLoader;
