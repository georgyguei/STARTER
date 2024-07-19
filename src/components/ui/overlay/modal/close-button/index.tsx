import type { UIComponent } from '../../../type';
import CloseButton from './close';

const ModalCloseButton: UIComponent<'button', object> = props => {
  return <CloseButton {...props} />;
};

ModalCloseButton.displayName = 'ModalCloseButton';

export default ModalCloseButton;
