import Button from '@/components/Button';
import DebutGroup from '@/components/DebutGroup';
import { H1, H2 } from '@/components/Text';

const Debut = () => {
  return (
    <div>
      <H2>데뷔를 축하합니다!</H2>
      <H1>그룹명</H1>
      <DebutGroup />
      <p>그룹설명</p>
      <Button fullWidth={true}>이미지로 저장하기</Button>
      <Button>다시 만들기</Button>
      <Button>공유하기</Button>
    </div>
  );
};

export default Debut;
