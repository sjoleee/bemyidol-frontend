import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { T2 } from '@/components/Text';
import Search from '@/components/Search/index';
import Button from '@/components/Button';
import MemberCardList from '@/components/MemberCardList';
import SelectedMemberCardList from '@/components/SelectedMemberCardList';
import { SelectedMemberStore } from '@/store/store';
import Header from '@/components/Header';
import ModalHandler from '@/components/ModalHandler';

const Casting: NextPage = () => {
  const { selectedMembers } = SelectedMemberStore();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (selectedMembers.length > 1 && selectedMembers.length < 11) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedMembers]);
  return (
    <>
      <Head>
        <title>bemyidol</title>
      </Head>
      <Header title="캐스팅" Search={<Search />}>
        <ModalHandler contents="걸그룹 데이터는 '2022년 8월 걸그룹 브랜드평판 30위'를 바탕으로 만들어졌습니다. " />
      </Header>

      <div className="relative h-screen px-4 py-28 scrollbar-none">
        <MemberCardList />
        {selectedMembers.length ? <SelectedMemberCardList /> : null}
      </div>
      <Link href="/setting">
        <Button isFixed={true} disabled={isDisabled}>
          <T2 className="text-white">
            {isDisabled ? '최소 2명 ~ 최대 10명을 선택해주세요' : '캐스팅 완료 👌'}
          </T2>
        </Button>
      </Link>
    </>
  );
};

export default Casting;
