import { T2, T5 } from '../Text';
import PositionSelect from '../PositionSelect';

import { MemberProps, SelectedMemberStore } from '@/store/store';

export interface extendedProps extends MemberProps {
  idx: number;
}

const PositionSettingCard = ({ ...props }: extendedProps) => {
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

  const onCenterChange = () => {
    const centerUpdateMembers = [...selectedMembers].map((item) => {
      return item.memberId === props.memberId
        ? { ...item, isCenter: !item.isCenter }
        : { ...item, isCenter: false };
    });
    setSelectedMembers(centerUpdateMembers);
  };

  return (
    <div
      className={`flex w-full md:w-[calc(50%-4px)] h-24 rounded-lg px-4 py-2 items-center justify-between ${
        props.idx % 2 ? 'bg-white' : 'bg-PRIMARY_LIGHT'
      } ${props.idx % 4 === 1 || props.idx % 4 === 2 ? 'md:bg-white' : 'md:bg-PRIMARY_LIGHT '}`}
    >
      <div className="flex w-16 h-16 mr-2">
        <img
          className="object-cover w-full rounded-full"
          src={props.thumbnailImgUrl}
          alt={props.name}
        />
      </div>
      <div className="flex flex-col w-[60%]">
        <T5>{props.groupName}</T5>
        <T2>{props.name}</T2>
        <PositionSelect memberId={props.memberId} idx={props.idx} position={props.position} />
      </div>
      <label className="flex items-center justify-end w-[20%]">
        <T5 className={`mr-[3px] ${props.isCenter ? 'text-PRIMARY' : 'text-GREY_HEAVY'}`}>센터</T5>
        <input
          type="checkbox"
          value={props.memberId}
          checked={props.isCenter || false}
          onChange={() => {
            onCenterChange();
          }}
          className="accent-PRIMARY outline-0"
        />
      </label>
    </div>
  );
};

export default PositionSettingCard;
