import { MemberProps } from '@/store/store';

const IMAGE_SINGLE_HEIGHT = 700;
const IMAGE_DOUBLE_HEIGHT = 500;
const TEXT_X = 25;
const TEXT_NAME_Y = 25;
const TEXT_POSITION_Y = 60;
const TEXT_CROWN_Y = 135;

const findDevidingPoint = (length: number): number => {
  if (length < 6) {
    return 0;
  } else if (length === 7) {
    return Math.ceil(length / 2);
  } else if (length === 9) {
    return Math.floor(length / 2);
  } else {
    return length / 2;
  }
};

const findRowCount = (idx: number, dividingPoint: number): number => {
  if (!dividingPoint || idx < dividingPoint) {
    return 1;
  } else {
    return 2;
  }
};

interface drawProps {
  debutGroupCanvas: CanvasRenderingContext2D;
  member: MemberProps;
  img: HTMLImageElement;
  memberWidth: number;
  imgSx: number;
  imgDx: number;
  imgDy: number;
  rowCount: number;
}

const drawMembers = async (canvas: HTMLCanvasElement, members: MemberProps[]) => {
  const debutGroupCanvas = canvas.getContext('2d');

  members.forEach((member, idx) => {
    const img = new Image();
    if (member.longImageUrl) {
      img.src = member.longImageUrl;
      img.crossOrigin = 'anonymous';
    }

    img.onload = () => {
      const dividingPoint = findDevidingPoint(members.length);
      const memberWidth =
        idx < dividingPoint
          ? canvas.width / dividingPoint
          : canvas.width / (members.length - dividingPoint);
      const imgSx = (img.width - memberWidth) / 2;
      const imgDx = idx < dividingPoint ? idx * memberWidth : (idx - dividingPoint) * memberWidth;
      const imgDy = !dividingPoint ? IMAGE_SINGLE_HEIGHT : IMAGE_DOUBLE_HEIGHT;
      const rowCount = findRowCount(idx, dividingPoint);

      if (debutGroupCanvas) {
        drawMemberImg({ debutGroupCanvas, img, memberWidth, imgSx, imgDx, imgDy, rowCount });
        drawText({ debutGroupCanvas, member, imgDx, imgDy, rowCount });
      }
    };
  });
};

const drawMemberImg = ({
  debutGroupCanvas,
  img,
  memberWidth,
  imgSx,
  imgDx,
  imgDy,
  rowCount,
}: Omit<drawProps, 'member'>) => {
  debutGroupCanvas?.drawImage(
    img,
    imgSx,
    0,
    memberWidth,
    imgDy,
    0 + imgDx,
    (rowCount - 1) * imgDy,
    memberWidth,
    imgDy,
  );
};

const drawText = ({
  debutGroupCanvas,
  member,
  imgDx,
  imgDy,
  rowCount,
}: Omit<drawProps, 'memberWidth' | 'imgSx' | 'img'>) => {
  if (member.isCenter) {
    debutGroupCanvas.strokeStyle = '#ffffff';
    debutGroupCanvas.fillStyle = '#f64280';

    const img = new Image();
    img.src = 'images/crown.png';
    img.onload = () => {
      debutGroupCanvas?.drawImage(
        img,
        0,
        0,
        img.width,
        img.width,
        TEXT_X + imgDx,
        imgDy * rowCount - TEXT_CROWN_Y,
        56,
        56,
      );
    };
  } else {
    debutGroupCanvas.strokeStyle = '#000000';
    debutGroupCanvas.fillStyle = '#ffffff';
  }

  debutGroupCanvas.lineWidth = 5;
  debutGroupCanvas.font = '30px pretandard';
  debutGroupCanvas.strokeText(member.name, TEXT_X + imgDx, imgDy * rowCount - TEXT_NAME_Y);
  debutGroupCanvas.fillText(member.name, TEXT_X + imgDx, imgDy * rowCount - TEXT_NAME_Y);

  debutGroupCanvas.font = '20px pretandard';
  member.position &&
    debutGroupCanvas.strokeText(
      member.position,
      TEXT_X + imgDx,
      imgDy * rowCount - TEXT_POSITION_Y,
    );
  member.position &&
    debutGroupCanvas.fillText(member.position, TEXT_X + imgDx, imgDy * rowCount - TEXT_POSITION_Y);
};

export default drawMembers;
