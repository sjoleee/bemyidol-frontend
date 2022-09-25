import { H3, H4 } from '../Text';

import { MemberProps, SelectedMemberStore } from '@/store/store';

const PositionSettingCard = ({ id, name, groupName, squreImageUrl, isCenter }: MemberProps) => {
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

  const onCenterChange = () => {
    const centerUpdateMembers = [...selectedMembers].map((item) => {
      return item.id === id ? { ...item, isCenter: !item.isCenter } : { ...item, isCenter: false };
    });
    console.log(centerUpdateMembers);
    setSelectedMembers(centerUpdateMembers);
  };

  return (
    <div className="flex w-full">
      <img className="w-1/5 h-1/5" src={squreImageUrl} alt={name} />
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <H3>{name}</H3>
          <div>
            <label>
              <input
                type="checkbox"
                value={id}
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
        <select>
          <option value="메인보컬">메인보컬</option>
        </select>
      </div>
    </div>
  );
};

export default PositionSettingCard;
