import DebutMemberPhoto from '../DebutMemberPhoto';

import { DebutGroupStore } from '@/store/store';

const PhotoTempleteSingleRow = () => {
  const { debutGroup } = DebutGroupStore();

  return (
    <div className="flex h-72 max-w-xl">
      {debutGroup.groupMembers.map((item) => (
        <DebutMemberPhoto key={item.memberId} {...item} />
      ))}
    </div>
  );
};

export default PhotoTempleteSingleRow;
