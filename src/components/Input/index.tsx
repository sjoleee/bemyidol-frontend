import style from '@/components/Input/index.module.css';
import { DebutGroupStore } from '@/store/store';

const Input = () => {
  const { debutGroup, setDebutGroupName } = DebutGroupStore();

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setDebutGroupName(value);
    console.log(debutGroup);
  };

  return (
    <input className={style.groupNameInput} value={debutGroup.groupName} onChange={onInputChange} />
  );
};

export default Input;
