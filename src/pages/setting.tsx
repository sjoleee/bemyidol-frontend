import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { T1, T4 } from '@/components/Text';
import Textarea from '@/components/Textarea';
import PositionSettingCardList from '@/components/PositionSettingCardList';
import { DebutGroupStore, SelectedMemberStore } from '@/store/store';
import OrderedTitle from '@/components/OrderedTitle';

const Setting = () => {
  const { selectedMembers } = SelectedMemberStore();
  const { debutGroup, setDebutGroupMembers } = DebutGroupStore();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    setDebutGroupMembers([...selectedMembers]);
  };

  useEffect(() => {
    const isCenterSelected = selectedMembers.some((item) => item.isCenter);
    const isPositionSelected = selectedMembers.every((item) => item.position);
    if (
      isCenterSelected &&
      isPositionSelected &&
      debutGroup.groupName &&
      debutGroup.groupDescription
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedMembers, debutGroup]);

  return (
    <>
      <div className="fixed w-full bg-white h-12 z-10 p-4">
        <T1>데뷔할 그룹에 대해 알려주세요 👀</T1>
      </div>
      <div className="relative p-4 flex flex-col items-start pt-12 pb-[72px] md:pb-28">
        <div className="pt-4 w-full ">
          <div className="w-full bg-GREY_LIGHT rounded-lg p-4 mb-4">
            <OrderedTitle order="1" title="그룹의 이름을 지어주세요 ✏️" />
            <Input />
          </div>
          <div className="w-full bg-GREY_LIGHT rounded-lg p-4 mb-4">
            <OrderedTitle order="2" title="멤버들의 포지션을 설정해주세요 🙋‍♀️" />
            <PositionSettingCardList />
          </div>
          <div className="w-full bg-GREY_LIGHT rounded-lg p-4 mb-4">
            <OrderedTitle order="3" title="그룹에 대해 간단히 소개해주세요 ✨" />
            <Textarea />
          </div>
        </div>
        <Link href="/debut">
          <Button isFixed={true} disabled={isDisabled} onClick={handleClick}>
            데뷔시키기
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Setting;
