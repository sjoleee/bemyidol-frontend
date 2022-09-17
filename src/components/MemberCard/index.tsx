import clsx from 'clsx';

import style from '@/components/MemberCard/index.module.css';
import { MemberProps, MemberStore, SelectedMemberStore } from '@/store/store';

const MemberCard = ({ id, groupName, name, squreImageUrl, debutDate, isSelected }: MemberProps) => {
  const { members, setMembers } = MemberStore();
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

  const handleSelect = (id: number) => {
    const newSelectedMembers = members.filter((item) => item.id === id);
    setSelectedMembers([...selectedMembers, ...newSelectedMembers]);

    const selectUpdateMembers = [...members].map((item) => {
      return item.id === id ? { ...item, isSelected: !isSelected } : item;
    });
    setMembers(selectUpdateMembers);
  };

  const handleDeselect = (id: number) => {
    const newSelectedMembers = selectedMembers.filter((item) => item.id !== id);
    setSelectedMembers(newSelectedMembers);

    const selectUpdateMembers = [...members].map((item) => {
      return item.id === id ? { ...item, isSelected: !isSelected } : item;
    });
    setMembers(selectUpdateMembers);
  };

  const onMemberCardClick = () => {
    isSelected ? handleDeselect(id) : handleSelect(id);
  };

  return (
    <div
      className={clsx(style.container, {
        [style.selected]: isSelected,
      })}
      onClick={onMemberCardClick}
    >
      <img src={squreImageUrl} alt={name} />
      <span>{name}</span>
      <span>{groupName}</span>
      <span>{debutDate}</span>
    </div>
  );
};
export default MemberCard;
