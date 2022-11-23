import { T5 } from '../Text';

import { MemberProps, SelectedMemberStore } from '@/store/store';
import Close from '@/assets/close.svg';

const SelectedMemberCard = ({ name, memberId }: MemberProps) => {
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

  const onClick = () => {
    const targetMemberIdx = selectedMembers.findIndex((member) => member.memberId === memberId);
    const newSelectedMembers = [...selectedMembers];
    newSelectedMembers.splice(targetMemberIdx, 1);
    setSelectedMembers(newSelectedMembers);
  };

  return (
    <div
      className="flex justify-center items-center text-center bg-PRIMARY h-[30px] px-[12px] py-2 rounded-full whitespace-nowrap gap-1"
      onClick={() => {
        onClick();
      }}
    >
      <T5 className="text-white">{name}</T5>
      <Close />
    </div>
  );
};

export default SelectedMemberCard;
