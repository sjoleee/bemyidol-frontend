import create from 'zustand';
import { devtools } from 'zustand/middleware';

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

interface SearchedMemberProps {
  searchedMembers: MemberProps[];
  setSearchedMembers: (searchedMembers: MemberProps[]) => void;
}

interface SelectedMembersProps {
  selectedMembers: MemberProps[];
  setSelectedMembers: (members: MemberProps[]) => void;
}

export const MemberStore = create<MembersProps>()(
  devtools((set) => ({
    members: [],
    setMembers: (members) => set({ members: members }),
    loadMembers: (newMembers: MemberProps[]) =>
      set((state) => ({ members: [...state.members, ...newMembers] })),
  })),
);

export const SearchedMemberStore = create<SearchedMemberProps>()(
  devtools((set) => ({
    searchedMembers: [],
    setSearchedMembers: (members) => set({ searchedMembers: members }),
  })),
);

export const SelectedMemberStore = create<SelectedMembersProps>()(
  devtools((set) => ({
    selectedMembers: [],
    setSelectedMembers: (members) => set({ selectedMembers: members }),
  })),
);
