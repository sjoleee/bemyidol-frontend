import SelectedMemberCard from '../SelectedMemberCard';

import { SelectedMemberStore } from '@/store/store';

const SelectedMemberCardList = () => {
  const { selectedMembers } = SelectedMemberStore();
  return (
    <div className="fixed flex p-4 bottom-0 w-full h-[134px] md:h-[170px] left-0 bg-GREY_LIGHT rounded-t-lg">
      <div className="flex gap-2 w-full overflow-x-scroll scrollbar-none">
        {selectedMembers.map((item) => (
          <SelectedMemberCard key={item.memberId} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SelectedMemberCardList;
