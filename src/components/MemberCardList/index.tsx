import MemberCard from '../MemberCard';

import { MemberStore, SearchTextStore } from '@/store/store';

const MemberCardList = () => {
  const { members } = MemberStore();
  const { searchText } = SearchTextStore();
  const filteredMembers = [...members].filter(
    (item) => item.name.includes(searchText) || item.groupName.includes(searchText),
  );
  return (
    <div className="flex flex-wrap gap-3">
      {filteredMembers.map((item) => (
        <MemberCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default MemberCardList;
