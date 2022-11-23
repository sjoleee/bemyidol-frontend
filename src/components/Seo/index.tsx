import Head from 'next/head';

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  const appTitle = `${title} | BeMyIdol`;
  return (
    <Head>
      <title>{appTitle}</title>
      <meta name="description" content="BeMyIdol⭐️ | 나만의 아이돌 만들기" />
      <link rel="icon" href="/images/logo.png" />
    </Head>
  );
};

export default Seo;
