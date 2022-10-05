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
      console.log('불러오기');
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
    <div className="flex flex-wrap gap-3">
      {searchedMembers.length > 0 ? (
        searchedMembers.map((item) => <MemberCard key={item?.memberId} {...item} />)
      ) : (
        <>
          {members.map((item) => (
            <MemberCard key={item.memberId} {...item} />
          ))}
          <div ref={obsRef}>{searchedMembers.length === 0 ? 'loading' : null}</div>
        </>
      )}
    </div>
  );
};

export default MemberCardList;
