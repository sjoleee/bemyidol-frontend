import type { NextPage } from 'next';
import Header from '../src/components/Header';

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      bemyidol 입니당
      <Header></Header>
    </div>
  );
};

export default Home;
