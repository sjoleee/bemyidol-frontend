import styles from './index.module.css';

type Props = {
  contents: string;
  handleModal: () => void;
};

const Modal = ({ contents, handleModal }: Props) => {
  return (
    <div
      className="fixed bg-black bg-opacity-20 z-40 left-0 top-0 h-screen w-screen flex justify-center items-center"
      onClick={() => handleModal()}
    >
      <div className="z-50 w-[65%] md:w-[30%] h-[50%] bg-white rounded-lg flex flex-col justify-center items-center p-6">
        <span className="text-4xl h-16">💬</span>
        <div className="w-full h-4 border-b-[1px] border-GREY_MEDIUM" />
        <div className="h-full flex items-center">
          <p className={`w-full p-4 text-center whitespace-pre-wrap ${styles.keepAll}`}>
            {contents}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
