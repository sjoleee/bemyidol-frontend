import selectParams from '@/types/selectParams';

const deselect = ({
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

  setSearchedMembers(newSearchedMembers);
  setMembers(newMembers);

  const newSelectedMembers = selectedMembers.filter((item) => item.memberId !== memberId);
  setSelectedMembers(newSelectedMembers);
};

export default deselect;
