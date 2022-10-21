import { useCallback, useEffect, useRef, useState } from 'react';

import MemberCard from '../MemberCard';

import { MemberProps, MemberStore, SearchedMemberStore, SelectedMemberStore } from '@/store/store';
import getMembers from '@/apis/getMembers';

const MemberCardList = () => {
  const { searchedMembers } = SearchedMemberStore();
  const { selectedMembers } = SelectedMemberStore();
  const { members, setMembers, loadMembers } = MemberStore();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const preventRef = useRef(true);
  const obsRef = useRef(null);

  useEffect(() => {
    return () => {
      setMembers([]);
    };
  }, []);

  const obsHandler = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (!isLoading && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 1 });
    if (obsRef.current) {
      observer.observe(obsRef.current);
    }
  }, [obsRef.current]);

  const get = useCallback(async () => {
    setIsLoading(true);
    const res = await getMembers(page);

    if (selectedMembers.length > 0) {
      const update = res.map((item: MemberProps) =>
        selectedMembers.some((member) => member.memberId === item.memberId)
          ? selectedMembers.find((member) => member.memberId === item.memberId)
          : item,
      );
      loadMembers(update);
    } else {
      loadMembers(res);
    }
    preventRef.current = true;
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    get();
  }, [page]);

  return (
    <div className=" flex relative h-[calc(100%-140px)] flex-wrap gap-4 overflow-scroll mt-2 pb-[40px] md:pb-[80px] scrollbar-none">
      {searchedMembers.length > 0 ? (
        searchedMembers.map((item) => <MemberCard key={item?.memberId} {...item} />)
      ) : (
        <>
          {members.map((item) => (
            <MemberCard key={item.memberId} {...item} />
          ))}
          <div className=" w-full h-8" ref={obsRef}>
            {searchedMembers.length === 0 ? '' : null}
          </div>
        </>
      )}
    </div>
  );
};

export default MemberCardList;
