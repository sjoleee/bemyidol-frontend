import React from 'react';

import style from '@/components/Search/index.module.css';
import { SearchTextStore } from '@/store/store';

const Search = () => {
  const { searchText, setSearchText } = SearchTextStore();

  const onTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSearchText(value);
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
