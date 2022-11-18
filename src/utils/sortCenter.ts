import { MemberProps } from '@/store/store';

const sortCenter = (data: MemberProps[], length: number) => {
  const centerIdx = data.findIndex((item) => item.isCenter);

  if (length < 6) {
    const centerMember = data.splice(centerIdx, 1);
    data.splice(Math.floor(length * 0.5), 0, centerMember[0]);
  } else {
    const centerMember = data.splice(centerIdx, 1);
    data.splice(Math.floor(length * 0.75), 0, centerMember[0]);
  }
  return data;
};

export default sortCenter;
