import React, { useEffect } from 'react';

import PhotoTempleteSingleRow from '../PhotoTempleteSingleRow';
import PhotoTempleteDualRow from '../PhotoTempleteDualRow';

import { DebutGroupStore, MemberProps } from '@/store/store';
import postDebutMembers from '@/apis/postDebutMembers';

const DebutGroupPhoto = () => {
  const { debutGroup, setDebutGroupMembers } = DebutGroupStore();

  useEffect(() => {
    const DebutMembersIdList = debutGroup.groupMembers
      .map((member) => member.memberId)
      .sort((a, b) => a - b);

    const post = async () => {
      const res = await postDebutMembers(DebutMembersIdList);
      return res as MemberProps[];
    };

    post().then((data) => {
      const newData = [...debutGroup.groupMembers];
      data.forEach((member) => {
        newData.forEach((item) => {
          member.memberId === item.memberId
            ? (item.longImageUrl = `https://idol-service.com/img/${item.memberId}.jpg`)
            : null;
        });
      });
      setDebutGroupMembers(newData);
    });
  }, []);

  return (
    <>
      {debutGroup.groupMembers.length < 6 ? <PhotoTempleteSingleRow /> : <PhotoTempleteDualRow />}
    </>
  );
};

export default DebutGroupPhoto;
