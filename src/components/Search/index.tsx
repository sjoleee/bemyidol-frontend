import React, { useEffect, useState } from 'react';

import styles from '@/components/Search/index.module.css';
import { MemberProps, SearchedMemberStore, SelectedMemberStore } from '@/store/store';
import { getSearchedMembers } from '@/apis';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const { setSearchedMembers } = SearchedMemberStore();
  const { selectedMembers } = SelectedMemberStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchText);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  useEffect(() => {
    if (searchText) {
      const get = async () => {
        const result = await getSearchedMembers(debouncedValue);
        if (selectedMembers.length > 0) {
          const update = result.map((item: MemberProps) =>
            selectedMembers.some((member) => member.memberId === item.memberId)
              ? selectedMembers.find((member) => member.memberId === item.memberId)
              : item,
          );
          setSearchedMembers(update);
        } else setSearchedMembers(result);
      };
      get();
    }
  }, [debouncedValue]);

  const onTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSearchText(value);
    if (value === '') {
      setSearchedMembers([]);
    }
  };

  return (
    <div className="bg-white">
      <input
        placeholder="그룹명 또는 이름을 검색해주세요"
        className={styles.search}
        value={searchText}
        onChange={onTextChange}
      />
    </div>
  );
};

export default Search;
