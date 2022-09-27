import SelectedMemberCard from '../SelectedMemberCard';

import { SelectedMemberStore } from '@/store/store';

const SelectedMemberCardList = () => {
  const { selectedMembers } = SelectedMemberStore();
  return (
    <>
      {selectedMembers.map((item) => (
        <SelectedMemberCard key={item.memberId} {...item} />
      ))}
    </>
  );
};

export default SelectedMemberCardList;
