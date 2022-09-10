import type { NextPage } from 'next';

import Header from '@/components/Header';
import Sample from '@/components/Sample';

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      bemyidol 입니당sdf
      <Sample />
      <Header></Header>
    </div>
  );
};

export default Home;
