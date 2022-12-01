import Head from 'next/head';

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  const appTitle = `${title} | BeMyIdol`;
  return (
    <Head>
      <title>{appTitle}</title>
      <meta
        name="description"
        content="BeMyIdol⭐️ | 비마이아이돌에서 최애만 모은 나만의 아이돌을 만들고 공유해보세요! Create and share your own idol group with your favorite members from BeMyIdol⭐️"
      />
      <link rel="icon" href="/images/logo.png" />
    </Head>
  );
};

export default Seo;
