import { T3, T5 } from '../Text';

import { DebutGroupStore } from '@/store/store';
import styles from '@/components/DebutMemberPhoto/index.module.css';

const DebutMemberPhoto = ({ ...item }) => {
  const { debutGroup } = DebutGroupStore();

  return (
    <div
      className={` relative w-[calc(100%/${debutGroup.groupMembers.length})] h-full overflow-hidden`}
    >
      <img className={styles.widthAuto} src={item.longImageUrl} alt={item.name} />
      {item.isCenter ? (
        <img
          className={`absolute bottom-[42px] left-1 w-[24px] h-[24px]`}
          src="images/crown.png"
          alt="센터"
        />
      ) : null}
      <T5
        className={`absolute bottom-6 left-1 ${
          item.isCenter ? styles.centerText : styles.defaultText
        }`}
      >
        {item.position}
      </T5>
      <T3
        className={`absolute bottom-1 left-1 text-white ${
          item.isCenter ? styles.centerText : styles.defaultText
        }`}
      >
        {item.name}
      </T3>
    </div>
  );
};

export default DebutMemberPhoto;
