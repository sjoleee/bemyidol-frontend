import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import Search from '@/components/Search/index';
import Card from '@/components/Card/index';

interface Props {
  id: number;
  groupName: string;
  name: string;
  squreImageUrl: string;
  longImageUrl: string;
  debutDate: string;
}

const Casting: NextPage = () => {
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    fetch('/data/mockdata.json')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <Head>
        <title>bemyidol</title>
      </Head>
      <Search></Search>
      <div className="flex flex-wrap gap-2">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Casting;
