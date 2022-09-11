import type { NextPage } from 'next';
import Head from 'next/head';

import { H1 } from '@/components/Text';

const Casting: NextPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>bemyidol</title>
      </Head>
      <H1>아이돌 메이커</H1>
    </div>
  );
};

export default Casting;
