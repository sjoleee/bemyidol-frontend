import styles from '@/components/Input/index.module.css';
import { DebutGroupStore } from '@/store/store';

const Input = () => {
  const { debutGroup, setDebutGroupName } = DebutGroupStore();

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setDebutGroupName(value);
  };

  return (
    <input
      className={styles.groupNameInput}
      value={debutGroup.groupName}
      onChange={onInputChange}
      placeholder="그룹명을 입력해주세요"
    />
  );
};

export default Input;
