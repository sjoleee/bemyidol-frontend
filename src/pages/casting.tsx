import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import Search from '@/components/Search/index';
import Card from '@/components/Card/index';
import Button from '@/components/Button';

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
      <div className="flex flex-wrap gap-3">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Button className="bg-green-500">다음</Button>
    </div>
  );
};

export default Casting;
