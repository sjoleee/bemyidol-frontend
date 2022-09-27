import MemberCard from '../MemberCard';

import { MemberStore, SearchedMemberStore } from '@/store/store';

const MemberCardList = () => {
  const { members } = MemberStore();
  const { searchedMembers } = SearchedMemberStore();

  return (
    <div className="flex flex-wrap gap-3">
      {searchedMembers.length > 0
        ? searchedMembers.map((item) => <MemberCard key={item?.memberId} {...item} />)
        : members.map((item) => <MemberCard key={item.memberId} {...item} />)}
    </div>
  );
};

export default MemberCardList;
