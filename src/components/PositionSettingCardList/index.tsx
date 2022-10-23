import PositionSettingCard from '../PositionSettingCard';

import { SelectedMemberStore } from '@/store/store';

const PositionSettingCardList = () => {
  const { selectedMembers } = SelectedMemberStore();
  return (
    <div className="w-full flex flex-wrap gap-2">
      {selectedMembers.map((item, idx) => (
        <PositionSettingCard key={item.memberId} idx={idx} {...item} />
      ))}
    </div>
  );
};

export default PositionSettingCardList;
