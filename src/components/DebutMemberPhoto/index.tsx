import { DebutGroupStore } from '@/store/store';
import style from '@/components/DebutMemberPhoto/index.module.css';

const DebutMemberPhoto = ({ ...item }) => {
  const { debutGroup } = DebutGroupStore();

  return (
    <div className={`w-[calc(100%/${debutGroup.groupMembers.length})] h-full overflow-hidden`}>
      <img className={style.widthAuto} src={item.longImageUrl} alt={item.name} />
    </div>
  );
};

export default DebutMemberPhoto;
