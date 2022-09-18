import { MemberProps, MemberStore, SelectedMemberStore } from '@/store/store';

const SelectedMemberCard = ({ name, groupName, id, isSelected }: MemberProps) => {
  const { members, setMembers } = MemberStore();
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

  const handleDeselect = (id: number) => {
    const selectUpdateMembers = [...members].map((item) => {
      return item.id === id ? { ...item, isSelected: false } : item;
    });
    setMembers(selectUpdateMembers);

    const newSelectedMembers = selectedMembers.filter((item) => item.id !== id);
    setSelectedMembers(newSelectedMembers);
  };

  const onSelectedMemberCardClick = () => {
    handleDeselect(id);
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
