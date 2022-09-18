import Link from 'next/link';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { H2 } from '@/components/Text';
import Textarea from '@/components/Textarea';
import PositionSettingCardList from '@/components/PositionSettingCardList';

const Setting = () => {
  return (
    <div className="flex flex-col items-start">
      <H2>이 그룹의 이름은</H2>
      <Input />
      <H2>각 멤버 별 포지션을 설정해주세요</H2>
      <PositionSettingCardList />
      <H2>이 그룹을 소개해주세요</H2>
      <Textarea />
      <Link href="/debut">
        <a>
          <Button fullWidth={true} isFixed={true}>
            다음
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default Setting;
