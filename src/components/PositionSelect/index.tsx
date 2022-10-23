import { extendedProps } from '../PositionSettingCard';

import { SelectedMemberStore } from '@/store/store';

type pickedProps = Pick<extendedProps, 'memberId' | 'idx' | 'position'>;

const PositionSelect = ({ memberId, idx, position }: pickedProps) => {
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

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

  const onPositionChange = (value: string) => {
    const positionUpdateMembers = [...selectedMembers].map((item) => {
      return item.memberId === memberId ? { ...item, position: value } : item;
    });
    setSelectedMembers(positionUpdateMembers);
  };

  return (
    <select
      className={`w-full px-[2px] py-[2px] rounded-lg focus:outline-none text-PRIMARY text-xs bg-white ${
        idx % 2 ? 'border-[1px] border-PRIMARY_LIGHT' : 'border-0'
      } ${
        idx % 4 === 1 || idx % 4 === 2 ? 'md:border-[1px] md:border-PRIMARY_LIGHT' : 'md:border-0'
      }`}
      defaultValue={position || ''}
      onChange={(e) => {
        onPositionChange(e.currentTarget.value);
      }}
    >
      <option value="" className="hidden" disabled>
        포지션을 선택해주세요
      </option>
      {positionArr.map((item) => (
        <option
          key={item}
          value={item}
          disabled={selectedMembers.some((member) => member.position === item)}
        >
          {item}
        </option>
      ))}
    </select>
  );
};

export default PositionSelect;
