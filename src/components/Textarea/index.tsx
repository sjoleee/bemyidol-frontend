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
      placeholder="그룹 소개를 입력해주세요"
      onChange={onTextareaChange}
    />
  );
};

export default Textarea;
