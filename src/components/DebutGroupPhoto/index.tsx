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
          member.memberId === item.memberId ? (item.longImageUrl = member.longImageUrl) : null;
        });
      });
      const centerIdx = newData.findIndex((item) => item.isCenter);

      if (debutGroup.groupMembers.length < 6) {
        const centerMember = newData.splice(centerIdx, 1);
        newData.splice(Math.floor(debutGroup.groupMembers.length * 0.5), 0, centerMember[0]);
      } else {
        const centerMember = newData.splice(centerIdx, 1);
        newData.splice(Math.floor(debutGroup.groupMembers.length * 0.75), 0, centerMember[0]);
      }

      setDebutGroupMembers(newData);
    });
  }, []);

  return (
    <div className="my-2 rounded-lg overflow-hidden">
      {debutGroup.groupMembers.length < 6 ? <PhotoTempleteSingleRow /> : <PhotoTempleteDualRow />}
    </div>
  );
};

export default DebutGroupPhoto;
