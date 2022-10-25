import { useState } from 'react';

import Modal from '../Modal';

import QuestionMark from '@/assets/questionMark.svg';

type Props = {
  contents: string;
};

const ModalHandler = ({ contents }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={() => handleModal()}>
        <QuestionMark />
      </button>
      {isOpen ? <Modal contents={contents} handleModal={handleModal} /> : null}
    </>
  );
};

export default ModalHandler;
