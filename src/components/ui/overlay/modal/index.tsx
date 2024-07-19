import Portal from '@/components/ui/portal';
import { type VariantProps, cva } from 'class-variance-authority';
import { Children, cloneElement, isValidElement } from 'react';
import type { UIComponent } from '../../type';

const MODAL_SIZES = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
  '3xl': '',
  '4xl': '',
  '5xl': '',
  '6xl': '',
  full: '',
};

const modalVariants = cva('', {
  variants: {
    size: MODAL_SIZES,
  },
  defaultVariants: {
    size: 'md',
  },
});

export type ModalProps = VariantProps<typeof modalVariants> & {
  isOpen: boolean;
  onClose: (() => void) | undefined;
  autoFocus?: boolean;
  blockScrollOnMount?: boolean;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
  finalFocusRef?: React.RefObject<HTMLElement>;
  useInert?: boolean;
};

const Modal: UIComponent<'div', ModalProps> = props => {
  const {
    id,
    children,
    isOpen,
    onClose,
    autoFocus = true,
    blockScrollOnMount = true,
    closeOnEsc = true,
    closeOnOverlayClick = true,
    initialFocusRef,
    finalFocusRef,
    useInert,
    ...rest
  } = props;

  if (!isOpen) return <>{null}</>;

  const prepareChildren = Children.map(children, child => {
    if (isValidElement(child)) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      switch ((child.type as any).displayName) {
        case 'ModalContent':
          return cloneElement(child as React.ReactElement, {
            id: id,
            blockScrollOnMount: blockScrollOnMount,
            initialFocusRef: initialFocusRef,
            finalFocusRef: finalFocusRef,
            onClose: closeOnOverlayClick ? onClose : undefined,
          });
        case 'ModalOverlay':
          return child;
      }
    }
    return null;
  });

  return <Portal {...rest}>{prepareChildren}</Portal>;
};

Modal.displayName = 'Modal';

export default Modal;
