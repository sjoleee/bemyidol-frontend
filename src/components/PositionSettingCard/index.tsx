import { H3, H4 } from '../Text';

import { CenterStore, MemberProps } from '@/store/store';

const PositionSettingCard = ({ id, name, groupName, squreImageUrl }: MemberProps) => {
  const { center, setCenter } = CenterStore();

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
                checked={center === id}
                onChange={() => {
                  setCenter(id);
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
