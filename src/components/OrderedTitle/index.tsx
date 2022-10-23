import { T1, T2, T4 } from '../Text';

interface Props {
  order: string;
  title: string;
}

const OrderedTitle = ({ order, title }: Props) => {
  return (
    <div className="flex items-center pb-4">
      <div className="bg-PRIMARY w-5 h-5 flex items-center justify-center rounded-full mr-2">
        <T4 className="text-white">{order}</T4>
      </div>
      <T2>{title}</T2>
    </div>
  );
};

export default OrderedTitle;
