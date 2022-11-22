import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import Button from '@/components/Button';
import ConfettiHandler from '@/components/ConfettiHandler';
import Header from '@/components/Header';
import { H1, T5 } from '@/components/Text';
import { DebutGroupStore } from '@/store/store';
import drawMembers from '@/utils/drawMembers';
import downloadImg from '@/utils/downloadImg';
import Seo from '@/components/Seo';
import updateDebutGroup from '@/utils/updateDebutGroup';
import Modal from '@/components/Modal';

const Debut: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { debutGroup, setDebutGroupMembers, setDebutGroup } = DebutGroupStore();
  const canvas = useRef<HTMLCanvasElement>(null);
  const crowdRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (debutGroup.groupMembers.length === 0 && localStorage.getItem('debutGroup')) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      const data = JSON.parse(localStorage.getItem('debutGroup') as string);
      updateDebutGroup(data.groupMembers).then((res) => {
        setDebutGroup(res, data.groupName, data.groupDescription);
        setIsReady(true);
      });
    } else if (debutGroup.groupMembers.length === 0 && !localStorage.getItem('debutGroup')) {
      setIsEmpty(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      updateDebutGroup(debutGroup.groupMembers).then((res) => {
        setDebutGroupMembers(res);
        localStorage.setItem('debutGroup', JSON.stringify({ ...debutGroup, groupMembers: res }));
        setIsReady(true);
      });
    }
  }, []);

  useEffect(() => {
    if (isReady && canvas.current) {
      drawMembers(canvas.current, debutGroup.groupMembers);
      console.log(debutGroup);
    }
  }, [isReady]);

  const handleDownload = async () => {
    if (canvas.current) {
      downloadImg({ canvas: canvas.current, groupName: debutGroup.groupName });
    }
  };

  return (
    <div className="flex flex-col items-center">
      {isEmpty ? (
        <Modal
          contents="잘못된 접근입니다."
          handleModal={() => {
            location.pathname = '/';
          }}
        />
      ) : null}
      <Seo title="Debut" />
      <Header title="데뷔">
        <ConfettiHandler />
      </Header>
      <div
        className="flex flex-col md:w-[50%] p-4 py-[68px] md:items-center"
        style={{ paddingBottom: `${crowdRef.current?.offsetHeight}px` }}
      >
        <div className="w-full">
          <div className="flex bg-PRIMARY w-[86px] h-[20px] mb-1 rounded-full justify-center items-center">
            <T5 className="text-white">HOT DEBUT!</T5>
          </div>
          <H1>{debutGroup.groupName}</H1>
          <div className="w-full rounded-lg overflow-hidden">
            <canvas
              ref={canvas}
              width={1000}
              height={debutGroup.groupMembers.length < 6 ? 700 : 1000}
              className="w-full"
            />
          </div>
          <div className="relative w-full bg-PRIMARY_LIGHT my-4 p-4 rounded-lg">
            <span className="absolute -top-3 left-5">🙋‍♀️🙋‍♀️🙋‍♀️</span>
            <T5 className="text-center whitespace-pre-wrap ">{debutGroup.groupDescription}</T5>
          </div>
        </div>
        <div className="flex w-full gap-[8px]">
          <Link href="/">
            <Button halfWidth={true}>다시 만들기</Button>
          </Link>
          <Button halfWidth={true} onClick={() => handleDownload()}>
            저장/공유하기
          </Button>
        </div>
      </div>
      <img className="fixed bottom-0 w-full" src="images/crowd.png" alt="관중" ref={crowdRef} />
      {isLoading ? (
        <div className="fixed w-full h-full top-0 left-0 bg-black flex justify-center items-center z-20">
          <span className="text-6xl">🥁</span>
        </div>
      ) : null}
    </div>
  );
};

export default Debut;
