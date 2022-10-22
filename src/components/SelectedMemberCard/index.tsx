import { T5 } from '../Text';

import { MemberProps, MemberStore, SearchedMemberStore, SelectedMemberStore } from '@/store/store';
import Close from '@/assets/close.svg';
import deselect from '@/utils/deselect';

const SelectedMemberCard = ({ name, memberId }: MemberProps) => {
  const { members, setMembers } = MemberStore();
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();
  const { searchedMembers, setSearchedMembers } = SearchedMemberStore();

  const params = {
    memberId,
    members,
    setMembers,
    selectedMembers,
    setSelectedMembers,
    searchedMembers,
    setSearchedMembers,
  };

  return (
    <div
      className="flex justify-center items-center text-center bg-PRIMARY h-[30px] px-[12px] py-2 rounded-full whitespace-nowrap gap-1"
      onClick={() => deselect(params)}
    >
      <T5 className="text-white">{name}</T5>
      <Close />
    </div>
  );
};

export default SelectedMemberCard;
