import React, { useEffect, useRef, useState } from 'react';

import html2canvas from 'html2canvas';

import { DebutGroupStore, MemberProps } from '@/store/store';
import postDebutMembers from '@/apis/postDebutMembers';

const DebutGroupPhoto = () => {
  const { debutGroup, setDebutGroupMembers } = DebutGroupStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const onCapture = (e: React.FormEvent<HTMLButtonElement>) => {
    {
      e.preventDefault();
      html2canvas(document.getElementById('capture') as HTMLElement).then((canvas) => {
        onSaveAs(canvas.toDataURL('image/png'), 'image-download.png');
      });
    }
  };
  const onSaveAs = (uri: string, filename: string) => {
    console.log('onSaveAs');
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    const DebutMembersIdList = debutGroup.groupMembers
      .map((member) => member.memberId)
      .sort((a, b) => a - b);

    const post = async () => {
      const res = await postDebutMembers(DebutMembersIdList);
      return res as MemberProps[];
    };
    post()
      .then((data) => {
        const newData = [...debutGroup.groupMembers];
        data.forEach((member) => {
          newData.forEach((item) => {
            member.memberId === item.memberId
              ? (item.longImageUrl = 'https://idol-service.com/img/3.jpg')
              : null;
          });
        });
        setDebutGroupMembers(newData);
      })
      .then(() => {
        console.log(debutGroup);
      })
      .then(() => {
        if (canvasRef.current && anchorRef.current && debutGroup.groupMembers[0].longImageUrl) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = debutGroup.groupMembers[0].longImageUrl;
            img.onload = () => {
              ctx.drawImage(img, 100, 100, 100, 100);
            };
          }
          anchorRef.current.href = canvasRef.current.toDataURL();
        }
      });

    //   debutGroup.groupMembers.forEach((member, idx) => {
    //     const img = new Image();
    //     img.src = member.thumbnailImgUrl;
    //     img.onload = () => {
    //       if (ctx) {
    //         ctx.drawImage(img, 100 * (idx % 3), 100 * Math.floor(idx / 3), 100, 100);
    //         // ctx.fillRect(100 * (idx % 3) + 50, 100 * (Math.floor(idx / 3) + 1) - 20, 20, 10);
    //         ctx.font = ' 10px Arial, sans-serif';
    //         ctx.textAlign = 'center';
    //         // ctx.fillStyle = 'blue';
    //         ctx.fillText(
    //           member.position || '',
    //           100 * (idx % 3) + 50,
    //           100 * (Math.floor(idx / 3) + 1) - 20,
    //           100,
    //         );
    //         ctx.font = ' bold 15px Arial, sans-serif';
    //         ctx.fillStyle = 'white';
    //         ctx.shadowColor = 'black';
    //         ctx.shadowBlur = 3;
    //         ctx.fillText(
    //           member.name,
    //           100 * (idx % 3) + 50,
    //           100 * (Math.floor(idx / 3) + 1) - 5,
    //           100,
    //         );
    //       }
    //     };
    //   }
    //   );
    // }
  }, []);

  return (
    <div id="capture">
      <canvas ref={canvasRef} width="600px" height="700px" />
      <img id="capture" src="https://idol-service.com/img/3.jpg"></img>
      <a download="my_painting.png" ref={anchorRef}>
        다운
      </a>
      <button onClick={onCapture}>이미지다운</button>
    </div>
  );
};

export default DebutGroupPhoto;
