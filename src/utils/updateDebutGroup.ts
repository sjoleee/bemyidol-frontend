import postDebutMembers from '@/apis/postDebutMembers';
import { MemberProps } from '@/store/store';

const updateLongImageUrl = (prevData: MemberProps[], newData: MemberProps[]) => {
  newData.forEach((member) => {
    prevData.forEach((item) => {
      member.memberId === item.memberId ? (item.longImageUrl = member.longImageUrl) : null;
    });
  });
  return prevData;
};

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

const updateDebutGroup = async (resource: MemberProps[]) => {
  const DebutMembersIdList = resource.map((member) => member.memberId).sort((a, b) => a - b);
  return (async () => (await postDebutMembers(DebutMembersIdList)) as MemberProps[])()
    .then((res) => updateLongImageUrl([...resource], res))
    .then((res) => sortCenter(res, resource.length));
};

export default updateDebutGroup;
