import style from '@/components/Textarea/index.module.css';
import { DebutGroupStore } from '@/store/store';

const Textarea = () => {
  const { debutGroup, setDebutGroupDescription } = DebutGroupStore();

  const onTextareaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setDebutGroupDescription(value);
  };

  return (
    <textarea
      className={style.groupDescriptionTextarea}
      value={debutGroup.groupDescription}
      onChange={onTextareaChange}
    />
  );
};

export default Textarea;
