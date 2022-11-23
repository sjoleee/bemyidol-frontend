import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import { T2 } from '@/components/Text';
import Search from '@/components/Search/index';
import Button from '@/components/Button';
import MemberCardList from '@/components/MemberCardList';
import SelectedMemberCardList from '@/components/SelectedMemberCardList';
import { SearchedMemberStore, SelectedMemberStore } from '@/store/store';
import Header from '@/components/Header';
import ModalHandler from '@/components/ModalHandler';
import Seo from '@/components/Seo';

const Casting: NextPage = () => {
  const { selectedMembers } = SelectedMemberStore();
  const { setSearchedMembers } = SearchedMemberStore();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const scrollY = JSON.parse(localStorage.getItem('scrollY') as string);
    if (scrollY !== '0') window.scrollTo(0, Number(scrollY));

    return () => {
      setSearchedMembers([]);
    };
  }, []);

  useEffect(() => {
    if (selectedMembers.length > 1 && selectedMembers.length < 11) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedMembers]);

  return (
    <>
      <Seo title="Casting" />
      <Header title="캐스팅" Search={<Search />}>
        <ModalHandler contents="걸그룹 데이터는 '2022년 8월 걸그룹 브랜드평판 30위'를 바탕으로 만들어졌습니다. " />
      </Header>

      <div className="relative h-screen px-4 py-28 scrollbar-none">
        <MemberCardList />
        {selectedMembers.length ? <SelectedMemberCardList /> : null}
      </div>
      <Link href="/setting">
        <Button
          isFixed={true}
          disabled={isDisabled}
          onClick={() => {
            localStorage.setItem('scrollY', JSON.stringify(window.scrollY));
          }}
        >
          <T2 className="text-white">
            {isDisabled ? '최소 2명 ~ 최대 10명을 선택해주세요' : '캐스팅 완료 👌'}
          </T2>
        </Button>
      </Link>
    </>
  );
};

export default Casting;
