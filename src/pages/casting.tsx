import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import Search from '@/components/Search/index';
import MemberCard from '@/components/MemberCard/index';
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
          <MemberCard key={item.id} {...item} />
        ))}
      </div>
      <Link href="/setting">
        <a>
          <Button fullWidth={true} isFixed={true}>
            다음
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default Casting;
