import { MemberProps } from '@/store/store';

const updateLongImageUrl = (prevData: MemberProps[], newData: MemberProps[]) => {
  newData.forEach((member) => {
    prevData.forEach((item) => {
      member.memberId === item.memberId ? (item.longImageUrl = member.longImageUrl) : null;
    });
  });
  return prevData;
};

export default updateLongImageUrl;
