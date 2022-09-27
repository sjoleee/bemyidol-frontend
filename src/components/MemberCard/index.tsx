import clsx from 'clsx';

import style from '@/components/MemberCard/index.module.css';
import { MemberProps, MemberStore, SearchedMemberStore, SelectedMemberStore } from '@/store/store';

const MemberCard = ({ memberId, groupName, name, thumbnailImgUrl, isSelected }: MemberProps) => {
  const { members, setMembers } = MemberStore();
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();
  const { searchedMembers, setSearchedMembers } = SearchedMemberStore();

  const handleSelect = (memberId: number) => {
    const newMembers = [...members].map((item) =>
      item.memberId === memberId ? { ...item, isSelected: !item.isSelected } : item,
    );

    const newSearchedMembers = [...searchedMembers].map((item) =>
      item.memberId === memberId ? { ...item, isSelected: !item.isSelected } : item,
    );

    newMembers.forEach((item) =>
      item.memberId === memberId ? setSelectedMembers([...selectedMembers, item]) : null,
    );

    setSearchedMembers(newSearchedMembers);
    setMembers(newMembers);
  };

  const handleDeselect = (memberId: number) => {
    const newMembers = [...members].map((item) =>
      item.memberId === memberId ? { ...item, isSelected: !item.isSelected } : item,
    );

    const newSearchedMembers = [...searchedMembers].map((item) =>
      item.memberId === memberId ? { ...item, isSelected: !item.isSelected } : item,
    );

    setSearchedMembers(newSearchedMembers);
    setMembers(newMembers);

    const newSelectedMembers = selectedMembers.filter((item) => item.memberId !== memberId);
    setSelectedMembers(newSelectedMembers);
  };

  const onMemberCardClick = () => {
    isSelected ? handleDeselect(memberId) : handleSelect(memberId);
  };

  return (
    <>
      <div
        className={clsx(style.container, {
          [style.selected]: isSelected,
        })}
        onClick={onMemberCardClick}
      >
        <img src={thumbnailImgUrl} alt={name} />
        <span>{name}</span>
        <span>{groupName}</span>
      </div>
    </>
  );
};
export default MemberCard;
