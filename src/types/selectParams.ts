import { MemberProps } from '@/store/store';

interface Params {
  memberId: number;
  members: MemberProps[];
  setMembers: (item: MemberProps[]) => void;
  selectedMembers: MemberProps[];
  setSelectedMembers: (item: MemberProps[]) => void;
  searchedMembers: MemberProps[];
  setSearchedMembers: (item: MemberProps[]) => void;
}

export default Params;
