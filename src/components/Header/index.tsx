import React from 'react';

import BackButton from '../BackButton';
import { T1 } from '../Text';

interface Props {
  children?: React.ReactNode;
  Search?: React.ReactNode;
  title: string;
}

const Header = ({ children, Search, title }: Props) => {
  return (
    <div className="fixed w-full bg-white z-10 px-4 py-3 border-b-[1px] border-GREY_LIGHT">
      <div className="flex items-center justify-between">
        <BackButton />
        <T1>{title}</T1>
        {children}
      </div>
      {Search}
    </div>
  );
};

export default Header;
