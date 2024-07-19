import { cn } from '@/lib/utils';
import { Children, cloneElement, isValidElement } from 'react';
import type { ModalProps } from '..';
import Box from '../../../layout/box';
import type { UIComponent } from '../../../type';
import ModalBackdrop from './backdrop';
import FocusGuard from './focus-guard';
import FocusLock from './focus-lock';

const getRandomInteger = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

type ModalContentProps = Partial<
  Pick<
    ModalProps,
    'blockScrollOnMount' | 'onClose' | 'initialFocusRef' | 'finalFocusRef'
  >
>;

const ModalContent: UIComponent<'section', ModalContentProps> = props => {
  const {
    className,
    children,
    blockScrollOnMount,
    initialFocusRef,
    finalFocusRef,
    onClose,
    id,
    ...rest
  } = props;
  let modalHeaderId: string | undefined = undefined;
  let modalBodyId: string | undefined = undefined;
  const modalId = id || getRandomInteger();

  const contentChildren = Children.map(children, child => {
    if (isValidElement(child)) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      switch ((child.type as any).displayName) {
        case 'ModalHeader':
          modalHeaderId = `modal--header-:r${modalId}`;
          return cloneElement(child as React.ReactElement, {
            id: modalHeaderId,
          });
        case 'ModalBody':
          modalBodyId = `modal--body-:r${modalId}`;
          return cloneElement(child as React.ReactElement, {
            id: modalBodyId,
          });
        case 'ModalCloseButton':
          return cloneElement(child as React.ReactElement, {
            onClick: onClose,
          });
        case 'ModalFooter':
          return child;
      }
    }
    return null;
  });

  return (
    <>
      <FocusGuard />
      <FocusLock
        blockScrollOnMount={blockScrollOnMount}
        initialFocusRef={initialFocusRef}
        finalFocusRef={finalFocusRef}
      >
        <ModalBackdrop onClick={onClose}>
          <Box
            as="section"
            className={cn(
              'relative z-modal my-16 flex w-full max-w-md flex-col rounded-md bg-white text-inherit shadow-lg outline-none',
              className
            )}
            role="dialog"
            id={`modal-r${modalId}`}
            aria-modal="true"
            aria-labelledby={modalHeaderId}
            aria-describedby={modalBodyId}
            tabIndex={-1}
            {...rest}
          >
            {contentChildren}
          </Box>
        </ModalBackdrop>
      </FocusLock>
      <FocusGuard />
    </>
  );
};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
