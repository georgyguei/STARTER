'use client';

import type { UIComponent } from '@/components/ui/type';
import { useEffect, useRef } from 'react';
import type { ModalProps } from '..';

type FocusLockProps = Pick<
  ModalProps,
  'blockScrollOnMount' | 'initialFocusRef' | 'finalFocusRef'
>;

const FocusLock: UIComponent<'div', FocusLockProps> = props => {
  const { finalFocusRef, blockScrollOnMount, initialFocusRef, ...rest } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Block scrolling if blockScrollOnMount is true
    if (blockScrollOnMount) {
      document.body.style.overflow = 'hidden';
    }

    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    // Focus the specified initialFocusRef element if provided, else focus the first tabbable element
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else {
      const firstFocusableElement = modalRef.current?.querySelector(
        focusableElements
      ) as HTMLElement;
      firstFocusableElement?.focus();
    }

    // Trap focus within the modal
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Tab') return;

      const focusableModalElements =
        modalRef.current?.querySelectorAll(focusableElements);
      const firstElement = focusableModalElements?.[0] as HTMLElement;
      const lastElement = focusableModalElements?.[
        focusableModalElements.length - 1
      ] as HTMLElement;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      if (blockScrollOnMount) {
        // Re-enable scrolling when the modal unmounts
        document.body.style.overflow = '';
      }

      if (finalFocusRef?.current) {
        finalFocusRef.current.focus();
      }
    };
  }, [finalFocusRef, blockScrollOnMount, initialFocusRef]);

  return (
    <div
      ref={modalRef}
      data-focus-look-disabled="false"
      {...(rest as object)}
    />
  );
};

FocusLock.displayName = 'FocusLock';

export default FocusLock;
