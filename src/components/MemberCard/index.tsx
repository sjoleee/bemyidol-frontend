import clsx from 'clsx';

import { T2, T5 } from '../Text';

import style from '@/components/MemberCard/index.module.css';
import { MemberProps, MemberStore, SearchedMemberStore, SelectedMemberStore } from '@/store/store';
import select from '@/utils/select';
import deselect from '@/utils/deselect';

const MemberCard = ({ memberId, groupName, name, thumbnailImgUrl, isSelected }: MemberProps) => {
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

  const onMemberCardClick = () => {
    isSelected ? deselect(params) : select(params);
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
