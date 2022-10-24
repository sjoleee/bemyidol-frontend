import { useRouter } from 'next/router';

import ChevronLeft from '@/assets/chevronLeft.svg';

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <ChevronLeft />
    </button>
  );
};

export default BackButton;
