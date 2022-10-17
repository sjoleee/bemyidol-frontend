import React, { useLayoutEffect } from 'react';

import DebutMemberPhoto from '../DebutMemberPhoto';

import { DebutGroupStore, MemberProps } from '@/store/store';
import postDebutMembers from '@/apis/postDebutMembers';

const DebutGroupPhoto = () => {
  const { debutGroup, setDebutGroupMembers } = DebutGroupStore();

  useLayoutEffect(() => {
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
    <div className="flex h-72 max-w-screen-lg">
      {debutGroup.groupMembers.map((item) => (
        <DebutMemberPhoto key={item.memberId} {...item} />
      ))}
    </div>
  );
};

export default DebutGroupPhoto;
