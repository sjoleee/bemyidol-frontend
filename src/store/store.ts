import create from 'zustand';

export interface MemberProps {
  memberId: number;
  groupId: number;
  groupName: string;
  name: string;
  thumbnailImgUrl: string;
  longImageUrl?: string;
  isSelected?: boolean;
  isCenter?: boolean;
  position?: string;
}

interface MembersProps {
  members: MemberProps[];
  setMembers: (members: MemberProps[]) => void;
  loadMembers: (members: MemberProps[]) => void;
}

interface SearchedMemberStore {
  searchedMembers: MemberProps[];
  setSearchedMembers: (searchedMembers: MemberProps[]) => void;
}

interface SelectedMembersProps {
  selectedMembers: MemberProps[];
  setSelectedMembers: (members: MemberProps[]) => void;
}

export const MemberStore = create<MembersProps>((set) => ({
  members: [],
  setMembers: (members) => set({ members: members }),
  loadMembers: (newMembers: MemberProps[]) =>
    set((state) => ({ members: [...state.members, ...newMembers] })),
}));

export const SearchedMemberStore = create<SearchedMemberStore>((set) => ({
  searchedMembers: [],
  setSearchedMembers: (members) => set({ searchedMembers: members }),
}));

export const SelectedMemberStore = create<SelectedMembersProps>((set) => ({
  selectedMembers: [],
  setSelectedMembers: (members) => set({ selectedMembers: members }),
}));
