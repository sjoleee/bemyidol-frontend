import React, { useEffect, useState } from 'react';

import getSearchedMembers from '@/apis/getSearchedMembers';
import style from '@/components/Search/index.module.css';
import { MemberProps, SearchedMemberStore, SelectedMemberStore } from '@/store/store';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const { setSearchedMembers } = SearchedMemberStore();
  const { selectedMembers, setSelectedMembers } = SelectedMemberStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchText);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  useEffect(() => {
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
    <input
      placeholder="그룹 명 또는 이름으로 검색"
      className={style.search}
      value={searchText}
      onChange={onTextChange}
    />
  );
};

export default Search;
