import { cn } from '@/lib/utils';
import Box from '../layout/box';
import type { UILayoutComponent } from './type';

/**
 * The props for the Container component.
 */
type ContainerProps = {
  /**
   * If true, container will center its children regardless of their width.
   */
  centerContent?: boolean;
};

/**
 * Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid.
 *
 * @example
 * <Container>
 *  There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production
 * </Container>
 */
const Container: UILayoutComponent<'div', ContainerProps> = props => {
  const { centerContent, className, ...rest } = props;

  return (
    <Box
      className={cn(
        'container max-w-[60ch] ps-4 pe-4',
        centerContent ? 'flex flex-col items-center' : undefined,
        className
      )}
      {...rest}
    />
  );
};

Container.displayName = 'Container';

export default Container;
