import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { T2, T5 } from '../Text';

import styles from '@/components/MemberCard/index.module.css';
import { MemberProps, SelectedMemberStore } from '@/store/store';

const MemberCard = ({ memberId, groupId, groupName, name, thumbnailImgUrl }: MemberProps) => {
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedMembers.some((item) => item.memberId === memberId)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedMembers]);

  const onMemberCardClick = () => {
    setIsSelected((prev) => !prev);

    const targetMemberIdx = selectedMembers.findIndex((member) => member.memberId === memberId);
    if (targetMemberIdx >= 0) {
      const newSelectedMembers = [...selectedMembers];
      newSelectedMembers.splice(targetMemberIdx, 1);
      setSelectedMembers(newSelectedMembers);
    } else {
      setSelectedMembers([
        ...selectedMembers,
        { memberId, groupId, groupName, name, thumbnailImgUrl },
      ]);
    }
  };

  return (
    <>
      <div
        className={clsx(styles.baseStyle, {
          [styles.selected]: isSelected,
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
export default React.memo(MemberCard);
