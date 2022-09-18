import clsx from 'clsx';

import style from '@/components/MemberCard/index.module.css';
import { MemberProps, MemberStore, SelectedMemberStore } from '@/store/store';

const MemberCard = ({ id, groupName, name, squreImageUrl, debutDate, isSelected }: MemberProps) => {
  const { members, setMembers } = MemberStore();
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

  const handleIsSelectedChange = (id: number) => {
    const newMembers = [...members].map((item) =>
      item.id === id ? { ...item, isSelected: !isSelected } : item,
    );
    setMembers(newMembers);
  };

  const handleSelect = (id: number) => {
    members.forEach((item) =>
      item.id === id ? setSelectedMembers([...selectedMembers, item]) : null,
    );
    handleIsSelectedChange(id);
  };

  const handleDeselect = (id: number) => {
    const newSelectedMembers = selectedMembers.filter((item) => item.id !== id);
    setSelectedMembers(newSelectedMembers);
    handleIsSelectedChange(id);
  };

  const onMemberCardClick = () => {
    isSelected ? handleDeselect(id) : handleSelect(id);
  };

  return (
    <>
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
    </>
  );
};
export default MemberCard;
