'use client';

import { useMounted } from '@/hooks/useMounted';
import { nanoid } from 'nanoid';
import { Children, cloneElement, isValidElement, useRef } from 'react';
import { createPortal } from 'react-dom';
import Box from '../layout/box';
import type { UIComponent } from '../type';

type PortalProps = {
  /**
   * The `ref` to the component where the portal will be attached to.
   */
  containerRef?: React.RefObject<HTMLElement | null>;

  /**
   * If `true`, the portal will check if it is within a parent portal
   * and append itself to the parent's portal node.
   * This provides nesting for portals.
   *
   * If `false`, the portal will always append to `document.body`
   * regardless of nesting. It is used to opt out of portal nesting.
   *
   * @default true
   */
  appendToParentPortal?: boolean;
};

/**
 * Recursively applies a container reference to all nested `Portal` components within a React component tree.
 *
 * @param children - The React component(s) to be traversed.
 * @param containerRef - The React ref object pointing to the container element where `Portal` components should be rendered.
 * @returns A new React component tree with updated `containerRef` props for all `Portal` components.
 */
const preparePortalChildren = (
  children: React.ReactNode,
  containerRef: React.RefObject<HTMLElement | null>
): React.ReactNode => {
  return Children.map(children, child => {
    if (isValidElement(child)) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      if ((child.type as any).displayName === 'Portal') {
        const { containerRef: childContainerRef, appendToParentPortal = true } =
          (child as React.ReactElement).props as PortalProps;
        return cloneElement<PortalProps>(child as React.ReactElement, {
          containerRef:
            childContainerRef ||
            (appendToParentPortal ? containerRef : childContainerRef),
        });
      }
      if (typeof (child as React.ReactElement).props.children !== 'undefined') {
        return cloneElement(child as React.ReactElement, {
          children: preparePortalChildren(
            (child as React.ReactElement).props.children,
            containerRef
          ),
        });
      }
    }
    return child;
  });
};

/**
 * Portal component renders children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * @example
 * <Portal>
 *  <div>Content</div>
 * </Portal>
 *
 * @param props - The props of the component
 *
 * @returns The Portal component
 */
const Portal: UIComponent<'div', PortalProps> = props => {
  const {
    containerRef,
    children,
    appendToParentPortal = true,
    ...rest
  } = props;

  const mounted = useMounted();
  const portalContainerRef = useRef<HTMLDivElement>(null);
  const portalId = useRef(`portal-${nanoid()}`).current;

  if (!mounted) {
    return <>{null}</>;
  }

  const portalContainer = containerRef?.current || document.body;
  const childrenArray = preparePortalChildren(children, portalContainerRef);

  return createPortal(
    <Box ref={portalContainerRef} id={portalId} {...rest}>
      {childrenArray}
    </Box>,
    portalContainer
  );
};

Portal.displayName = 'Portal';

export default Portal;
