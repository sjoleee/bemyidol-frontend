import MemberCard from '../MemberCard';

import { MemberStore, SearchTextStore } from '@/store/store';
import useDebounce from '@/hooks/useDebounce';

const MemberCardList = () => {
  const { members } = MemberStore();
  const { searchText } = SearchTextStore();

  const debouncedSearchText = useDebounce(searchText, 200);

  const filteredMembers = [...members].filter(
    (item) =>
      item.name.includes(debouncedSearchText) || item.groupName.includes(debouncedSearchText),
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
