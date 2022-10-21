import clsx from 'clsx';

import { T2, T5 } from '../Text';

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
        className={clsx(style.baseStyle, {
          [style.selected]: isSelected,
        })}
        onClick={onMemberCardClick}
      >
        <div className="flex w-full mb-1 after:content-[''] after:pb-[100%]">
          <img className="object-cover w-full rounded-lg" src={thumbnailImgUrl} alt={name} />
        </div>
        <T2>{name}</T2>
        <T5>{groupName}</T5>
      </div>
    </>
  );
};
export default MemberCard;
