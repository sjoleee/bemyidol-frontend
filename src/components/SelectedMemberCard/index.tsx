import { MemberProps, MemberStore, SelectedMemberStore } from '@/store/store';

const SelectedMemberCard = ({ name, groupName, memberId }: MemberProps) => {
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
    <div className="border-2" onClick={onSelectedMemberCardClick}>
      <span>
        {groupName} - {name}
      </span>
    </div>
  );
};

export default SelectedMemberCard;
