import { T5 } from '../Text';

import { MemberProps, MemberStore, SelectedMemberStore } from '@/store/store';
import Close from '@/assets/close.svg';

const SelectedMemberCard = ({ name, memberId }: MemberProps) => {
  const { members, setMembers } = MemberStore();
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

  const handleDeselect = (memberId: number) => {
    const selectUpdateMembers = [...members].map((item) => {
      return item.memberId === memberId ? { ...item, isSelected: !item.isSelected } : item;
    });

    setMembers(selectUpdateMembers);

    const newSelectedMembers = selectedMembers.filter((item) => item.memberId !== memberId);
    setSelectedMembers(newSelectedMembers);
  };

  const onSelectedMemberCardClick = () => {
    handleDeselect(memberId);
  };

  return (
    <div
      className="flex justify-center items-center text-center bg-PRIMARY h-[30px] px-[12px] py-2 rounded-full whitespace-nowrap gap-1"
      onClick={onSelectedMemberCardClick}
    >
      <T5 className="text-white">{name}</T5>
      <Close />
    </div>
  );
};

export default SelectedMemberCard;
