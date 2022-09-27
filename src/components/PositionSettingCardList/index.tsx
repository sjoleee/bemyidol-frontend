import PositionSettingCard from '../PositionSettingCard';

import { SelectedMemberStore } from '@/store/store';

const PositionSettingCardList = () => {
  const { selectedMembers } = SelectedMemberStore();
  return (
    <div className="w-full">
      {selectedMembers.map((item) => (
        <PositionSettingCard key={item.memberId} {...item} />
      ))}
    </div>
  );
};

export default PositionSettingCardList;
