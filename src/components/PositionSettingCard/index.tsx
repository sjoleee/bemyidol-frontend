import { H3, H4 } from '../Text';

import { MemberProps } from '@/store/store';

const PositionSettingCard = ({ name, groupName, squreImageUrl }: MemberProps) => {
  return (
    <div className="flex w-full">
      <img className="w-1/5 h-1/5" src={squreImageUrl} alt={name} />
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <H3>{name}</H3>
          <div>
            <input type="checkbox" id="leader" />
            <label htmlFor="leader">센터</label>
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
