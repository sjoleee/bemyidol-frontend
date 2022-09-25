import create from 'zustand';

export interface MemberProps {
  id: number;
  groupName: string;
  name: string;
  squreImageUrl: string;
  longImageUrl: string;
  debutDate: string;
  isSelected?: boolean;
  isCenter?: boolean;
}

interface MembersProps {
  members: MemberProps[];
  setMembers: (members: MemberProps[]) => void;
}
interface SelectedMembersProps {
  selectedMembers: MemberProps[];
  setSelectedMembers: (members: MemberProps[]) => void;
}

export const MemberStore = create<MembersProps>((set) => ({
  members: [],
  setMembers: (members) => set({ members: members }),
}));

export const SelectedMemberStore = create<SelectedMembersProps>((set) => ({
  selectedMembers: [],
  setSelectedMembers: (members) => set({ selectedMembers: members }),
}));

interface SearchTextProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const SearchTextStore = create<SearchTextProps>((set) => ({
  searchText: '',
  setSearchText: (text) => set({ searchText: text }),
}));
