import DebutMemberPhoto from '../DebutMemberPhoto';

import { DebutGroupStore } from '@/store/store';

const PhotoTempleteDualRow = () => {
  const { debutGroup } = DebutGroupStore();

  const comparisonStandard = () => {
    const membersLength = debutGroup.groupMembers.length;

    if (membersLength === 7) {
      return Math.ceil(membersLength / 2);
    } else if (membersLength === 9) {
      return Math.floor(membersLength / 2);
    } else {
      return membersLength / 2;
    }
  };

  return (
    <>
      <div className="flex h-72 max-w-xl">
        {debutGroup.groupMembers.map((item, idx) =>
          idx < comparisonStandard() ? <DebutMemberPhoto key={item.memberId} {...item} /> : null,
        )}
      </div>
      <div className="flex h-72 max-w-xl">
        {debutGroup.groupMembers.map((item, idx) =>
          idx >= comparisonStandard() ? <DebutMemberPhoto key={item.memberId} {...item} /> : null,
        )}
      </div>
    </>
  );
};

export default PhotoTempleteDualRow;
