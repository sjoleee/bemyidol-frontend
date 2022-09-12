import style from '@/components/Search/index.module.css';

const Search = () => {
  return <input placeholder="그룹 명 또는 이름으로 검색" className={style.search}></input>;
};

export default Search;
