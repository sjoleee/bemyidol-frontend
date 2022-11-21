import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import PositionSettingCardList from '@/components/PositionSettingCardList';
import { DebutGroupStore, SelectedMemberStore } from '@/store/store';
import OrderedTitle from '@/components/OrderedTitle';
import Header from '@/components/Header';
import ModalHandler from '@/components/ModalHandler';
import Seo from '@/components/Seo';

const Setting: NextPage = () => {
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
      <Seo title="Setting" />
      <Header title="그룹 설정">
        <ModalHandler
          contents={`데뷔를 위해서 모든 항목을 채워주세요 🙏\n\n한 포지션에는 한 멤버만 배정할 수 있습니다 🙋‍♀️\n\n센터는 그룹에서 한 명만 선택 가능합니다 ⭐️`}
        />
      </Header>
      <div className="relative p-4 flex flex-col items-start pt-[54px] pb-[72px] md:pb-28 scrollbar-hide">
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
      </div>
      <Link href="/debut">
        <Button isFixed={true} disabled={isDisabled} onClick={handleClick}>
          데뷔시키기
        </Button>
      </Link>
    </>
  );
};

export default Setting;
