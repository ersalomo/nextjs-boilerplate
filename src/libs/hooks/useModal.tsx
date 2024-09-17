import { useState } from 'react';

export const useModal = (open: boolean) => {
  const [isOpen1, setIsOpen1] = useState(open);
  const [isOpen2, setIsOpen2] = useState(open);
  const toggleModal1 = () => setIsOpen1(!isOpen1);
  const toggleModal2 = () => setIsOpen2(!isOpen2);

  return { isOpen1, setIsOpen1, toggleModal1, isOpen2, setIsOpen2, toggleModal2 };
};
