import create from 'zustand';

interface MemberProps {
  id: number;
  groupName: string;
  name: string;
  squreImageUrl: string;
  longImageUrl: string;
  debutDate: string;
  isSelected?: boolean;
}

interface MembersProps {
  members: MemberProps[];
  setMembers: (member: MemberProps[]) => void;
}

export const MemberStore = create<MembersProps>((set) => ({
  members: [],
  setMembers: (members) => set({ members: members }),
}));

interface SearchTextProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const SearchTextStore = create<SearchTextProps>((set) => ({
  searchText: '',
  setSearchText: (text) => set({ searchText: text }),
}));
