import { useEffect, useRef, useState } from 'react';

import MemberCard from '../MemberCard';

import { MemberProps, MemberStore, SearchedMemberStore, SelectedMemberStore } from '@/store/store';
import getMembers from '@/apis/getMembers';
import getPageCount from '@/apis/getPageCount';

const MemberCardList = () => {
  const { searchedMembers } = SearchedMemberStore();
  const { selectedMembers } = SelectedMemberStore();
  const { members, loadMembers } = MemberStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const obsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getTotalPage = async () => {
      const res = await getPageCount();
      setTotalPage(Number(res.pageCount));
    };
    getTotalPage();
  }, []);

  useEffect(() => {
    if (!totalPage || currentPage <= totalPage) {
      const io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading) get();
      });
      if (obsRef.current) io.observe(obsRef.current);

      return () => {
        if (obsRef.current) {
          io.unobserve(obsRef.current);
        }
      };
    }
  }, [currentPage]);

  const get = async () => {
    setIsLoading(true);
    const res = await getMembers(currentPage);

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
    setCurrentPage((prev) => prev + 1);
    setIsLoading(false);
  };

  return (
    <div className=" flex relative h-[calc(100%-140px)] flex-wrap gap-4 overflow-scroll mt-2 pb-[40px] md:pb-[80px] scrollbar-none">
      {searchedMembers.length > 0 ? (
        searchedMembers.map((item) => <MemberCard key={item?.memberId} {...item} />)
      ) : (
        <>
          {members.map((item) => (
            <MemberCard key={item.memberId} {...item} />
          ))}
          <div className="w-full h-8" ref={obsRef}>
            {searchedMembers.length === 0 ? '' : null}
          </div>
        </>
      )}
    </div>
  );
};

export default MemberCardList;
