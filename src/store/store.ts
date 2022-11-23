import create from 'zustand';
import { devtools } from 'zustand/middleware';

export interface MemberProps {
  memberId: number;
  groupId: number;
  groupName: string;
  name: string;
  thumbnailImgUrl: string;
  longImageUrl?: string;
  isCenter?: boolean;
  position?: string;
}

interface SearchedMemberProps {
  searchedMembers: MemberProps[];
  setSearchedMembers: (searchedMembers: MemberProps[]) => void;
}

interface SelectedMembersProps {
  selectedMembers: MemberProps[];
  setSelectedMembers: (members: MemberProps[]) => void;
}

export interface DebutGroupProps {
  debutGroup: {
    groupMembers: MemberProps[];
    groupName: string;
    groupDescription: string;
  };
  setDebutGroup: (members: MemberProps[], input: string, description: string) => void;
  setDebutGroupMembers: (members: MemberProps[]) => void;
  setDebutGroupName: (input: string) => void;
  setDebutGroupDescription: (description: string) => void;
}

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

export const DebutGroupStore = create<DebutGroupProps>()(
  devtools((set) => ({
    debutGroup: { groupName: '', groupMembers: [], groupDescription: '' },

    setDebutGroup: (members, input, description) =>
      set({
        debutGroup: {
          groupMembers: members,
          groupName: input,
          groupDescription: description,
        },
      }),

    setDebutGroupMembers: (members) =>
      set((state) => {
        const newState = {
          debutGroup: {
            groupMembers: members,
            groupName: state.debutGroup.groupName,
            groupDescription: state.debutGroup.groupDescription,
          },
        };
        return newState;
      }),

    setDebutGroupName: (input: string) =>
      set((state) => {
        const newState = {
          debutGroup: {
            groupMembers: state.debutGroup.groupMembers,
            groupName: input,
            groupDescription: state.debutGroup.groupDescription,
          },
        };
        return newState;
      }),

    setDebutGroupDescription: (description) =>
      set((state) => {
        const newState = {
          debutGroup: {
            groupMembers: state.debutGroup.groupMembers,
            groupName: state.debutGroup.groupName,
            groupDescription: description,
          },
        };
        return newState;
      }),
  })),
);
