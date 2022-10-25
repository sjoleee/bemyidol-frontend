import selectParams from '@/types/selectParams';

const select = ({
  memberId,
  members,
  setMembers,
  selectedMembers,
  setSelectedMembers,
  searchedMembers,
  setSearchedMembers,
}: selectParams) => {
  const newMembers = [...members].map((item) =>
    item.memberId === memberId ? { ...item, isSelected: !item.isSelected } : item,
  );

  const newSearchedMembers = [...searchedMembers].map((item) =>
    item.memberId === memberId ? { ...item, isSelected: !item.isSelected } : item,
  );

  newMembers.forEach((item) =>
    item.memberId === memberId ? setSelectedMembers([...selectedMembers, item]) : null,
  );

  newSearchedMembers.forEach((item) =>
    item.memberId === memberId ? setSelectedMembers([...selectedMembers, item]) : null,
  );

  setSearchedMembers(newSearchedMembers);
  setMembers(newMembers);
};

export default select;
