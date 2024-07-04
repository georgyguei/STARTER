import { cn } from '@/lib/utils';
import type { UIComponent } from '../type';
import Text from './text';

/**
 * ContrastText component renders text with enhanced contrast using CSS filters.
 * It dynamically adjusts the text color for optimal readability against various backgrounds.
 *
 * @example
 * <Box className="text-blue-500 bg-current">
 *  <ContrastText>White text on blue background</ContrastText>
 * </Box>
 *
 * @param props - The props of the component.
 *
 * @returns The ContrastText component.
 */
const ContrastText: UIComponent<'p', object> = props => {
  const { className, style, ...rest } = props;

  const ContrastTextStyle = {
    filter:
      'var(--tw-invert) var(--tw-grayscale) var(--tw-brightness) var(--tw-contrast)',
    ...style,
  };

  return (
    <Text
      className={cn(
        'text-inherit opacity-95 mix-blend-luminosity brightness-[1.5] contrast-[9000] grayscale-[1] invert-[1]',
        className
      )}
      style={ContrastTextStyle}
      {...rest}
    />
  );
};

ContrastText.displayName = 'Text';

export default ContrastText;
