'use client';

import { useMounted } from '@/hooks/useMounted';
import { nanoid } from 'nanoid';
import { createContext, use, useRef } from 'react';
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
 * This context will hold the container element for nested portals
 */
const PortalContext = createContext<React.RefObject<HTMLElement> | null>(null);

/**
 * Portal component renders children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */
const Portal: UIComponent<'div', PortalProps> = props => {
  const { containerRef, appendToParentPortal = true, ...rest } = props;

  // Use the context
  const parentPortalContainer = use(PortalContext);
  const portalRef = useRef<HTMLDivElement>(null);

  const mounted = useMounted();

  if (!mounted) {
    return <>{null}</>;
  }

  // Determine the container for the current portal
  const currentContainer = containerRef?.current || document.body;
  const portalContainer =
    appendToParentPortal && parentPortalContainer
      ? (parentPortalContainer.current as HTMLElement)
      : currentContainer;

  // Render the portal within a PortalContext provider to pass down the current portal's container
  return createPortal(
    <PortalContext.Provider value={portalRef}>
      <Box ref={portalRef} id={`portal-${nanoid()}`} {...rest} />
    </PortalContext.Provider>,
    portalContainer
  );
};

Portal.displayName = 'Portal';

export default Portal;
