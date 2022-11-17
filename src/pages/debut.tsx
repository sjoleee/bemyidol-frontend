import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as htmlToImage from 'html-to-image';
import { toBlob } from 'html-to-image';
import { saveAs } from 'file-saver';

import Button from '@/components/Button';
import ConfettiHandler from '@/components/ConfettiHandler';
import DebutGroupPhoto from '@/components/DebutGroupPhoto';
import Header from '@/components/Header';
import { H1, T5 } from '@/components/Text';
import { DebutGroupStore } from '@/store/store';

const Debut = () => {
  const { debutGroup } = DebutGroupStore();
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLDivElement>(null);
  const justRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleDownload = () => {
    const isShareSupported = () => navigator.share ?? false;
    if (imgRef.current) {
      htmlToImage.toBlob(imgRef.current).then((blob) => {
        if (blob) {
          if (isShareSupported()) {
            const file = new File([blob], 'myIdol.png', { type: blob.type });
            navigator.share({
              title: 'Hello',
              text: 'Check out this image!',
              files: [file],
            });
          } else {
            saveAs(blob, 'my-node.png');
          }
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Header title="데뷔">
        <ConfettiHandler />
      </Header>
      <div className="flex flex-col md:w-[50%] p-4 py-[68px] md:items-center">
        <div className="w-full">
          <div className="flex bg-PRIMARY w-[86px] h-[20px] mb-1 rounded-full justify-center items-center">
            <T5 className="text-white">HOT DEBUT!</T5>
          </div>
          <H1>{debutGroup.groupName}</H1>
          <div ref={imgRef}>
            <DebutGroupPhoto />
          </div>
          <div className="relative w-full bg-PRIMARY_LIGHT my-4 p-4 rounded-lg">
            <span className="absolute -top-3 left-5">🙋‍♀️🙋‍♀️🙋‍♀️</span>
            <T5 className="text-center whitespace-pre-wrap ">{debutGroup.groupDescription}</T5>
          </div>
        </div>
        <div ref={justRef}></div>
        <div className="flex w-full gap-[8px]">
          <Link href="/">
            <Button halfWidth={true}>다시 만들기</Button>
          </Link>
          <Button halfWidth={true} onClick={() => handleDownload()}>
            공유하기
          </Button>
        </div>
      </div>
      <img className="fixed bottom-0 w-full" src="images/crowd.png" alt="관중" />
      {isLoading ? (
        <div className="fixed w-full h-full top-0 left-0 bg-black flex justify-center items-center z-20">
          <span className="text-6xl">🥁</span>
        </div>
      ) : null}
    </div>
  );
};

export default Debut;
