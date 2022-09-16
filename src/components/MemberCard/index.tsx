import style from '@/components/MemberCard/index.module.css';

interface Props {
  id: number;
  groupName: string;
  name: string;
  squreImageUrl: string;
  longImageUrl: string;
  debutDate: string;
}

const MemberCard = ({ groupName, name, squreImageUrl, longImageUrl, debutDate }: Props) => {
  return (
    <div className="flex flex-col w-32">
      <img src={squreImageUrl} alt={name} />
      <span>{name}</span>
      <span>{groupName}</span>
      <span>{debutDate}</span>
    </div>
  );
};
export default MemberCard;