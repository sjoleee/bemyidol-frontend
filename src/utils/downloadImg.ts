interface downloadImgProps {
  canvas: HTMLCanvasElement;
  groupName: string;
}

const downloadImg = async ({ canvas, groupName }: downloadImgProps) => {
  if (navigator.share) {
    const blob = await (await fetch(canvas.toDataURL())).blob();
    const file = new File([blob], `${groupName}.png`, { type: blob.type });
    navigator.share({
      title: 'BeMyIdol | 나만의 아이돌 만들기',
      text: `BeMyIdol ⭐️ | 나만의 아이돌 만들기\n\n제 최애돌만 모아서 만들어본 [${groupName}] 라는 걸그룹이에요🥰\n\n아이돌 만들러가기👉https://bemyidol.vercel.app`,
      files: [file],
    });
  } else {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = `${groupName}`;
    link.click();
  }
};

export default downloadImg;
