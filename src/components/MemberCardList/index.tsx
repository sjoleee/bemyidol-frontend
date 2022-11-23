import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import MemberCard from '../MemberCard';

import { MemberProps, SearchedMemberStore } from '@/store/store';
import getMembers from '@/apis/getMembers';
import getPageCount from '@/apis/getPageCount';
import useObserver from 'hooks/useObserver';

const MemberCardList = () => {
  const { searchedMembers } = SearchedMemberStore();
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getTotalPage = async () => {
      const res = await getPageCount();
      setTotalPage(Number(res.pageCount));
    };
    getTotalPage();
  }, []);

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
    ['infiniteMembers'],
    ({ pageParam = 1 }) => getMembers(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return totalPage === allPages.length ? undefined : allPages.length + 1;
      },
    },
  );

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  return (
    <>
      <div className="flex relative flex-wrap gap-2 pb-24 md:pb-36">
        {searchedMembers.length > 0 ? (
          searchedMembers.map((item) => <MemberCard key={item?.memberId} {...item} />)
        ) : (
          <>
            {status === 'success' &&
              data.pages.map((page) =>
                page.map((member: MemberProps) => <MemberCard key={member.memberId} {...member} />),
              )}
          </>
        )}
      </div>
      {hasNextPage && !searchedMembers.length ? (
        <div className="w-full h-8" ref={setTarget}></div>
      ) : null}
    </>
  );
};

export default MemberCardList;
