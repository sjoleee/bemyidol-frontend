import clsx from 'clsx';

import { H3, H4 } from '../Text';

import style from '@/components/PositionSettingCard/index.module.css';
import { MemberProps, SelectedMemberStore } from '@/store/store';

const PositionSettingCard = ({
  memberId,
  name,
  groupName,
  thumbnailImgUrl,
  isCenter,
}: MemberProps) => {
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

  const onCenterChange = () => {
    const centerUpdateMembers = [...selectedMembers].map((item) => {
      return item.memberId === memberId
        ? { ...item, isCenter: !item.isCenter }
        : { ...item, isCenter: false };
    });
    setSelectedMembers(centerUpdateMembers);
  };

  const onPositionChange = (value: string) => {
    const positionUpdateMembers = [...selectedMembers].map((item) => {
      return item.memberId === memberId ? { ...item, position: value } : item;
    });
    setSelectedMembers(positionUpdateMembers);
  };

  const positionArr = [
    '메인보컬',
    '리드보컬',
    '서브보컬',
    '메인댄서',
    '리드댄서',
    '메인래퍼',
    '리드래퍼',
    '서브래퍼',
    '올라운더',
    '프로듀서',
  ];

  return (
    <div className="flex w-full">
      <img className="w-1/5 h-1/5" src={thumbnailImgUrl} alt={name} />
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <H3>{name}</H3>
          <div>
            <label>
              <input
                type="checkbox"
                value={memberId}
                checked={isCenter || false}
                onChange={() => {
                  onCenterChange();
                }}
              />
              센터
            </label>
          </div>
        </div>
        <H4>{groupName}</H4>
        <select
          defaultValue=""
          onChange={(e) => {
            onPositionChange(e.currentTarget.value);
          }}
        >
          <option value="" className={clsx(style.isDisabled)} disabled>
            포지션을 선택해주세요
          </option>
          {positionArr.map((item) => (
            <option
              key={item}
              value={item}
              className={clsx({
                [style.isDisabled]: selectedMembers.some((member) => member.position === item),
              })}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PositionSettingCard;
