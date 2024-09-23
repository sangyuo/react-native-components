import {useState} from 'react';

export default function useStateVisible(valueDefault = false) {
  const [isVisible, setVisible] = useState(valueDefault);
  const onClose = () => setVisible(false);
  const onOpen = () => setVisible(true);

  return {isVisible, setVisible, onOpen, onClose};
}
