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

  if (debutGroup.groupMembers.length < 6) {
    return (
      <div className="flex h-72 max-w-xl">
        {debutGroup.groupMembers.map((item) => (
          <DebutMemberPhoto key={item.memberId} {...item} />
        ))}
      </div>
    );
  } else {
    if (debutGroup.groupMembers.length === 7) {
      return (
        <>
          <div className="flex h-72 max-w-xl">
            {debutGroup.groupMembers.map((item, idx) =>
              idx < Math.ceil(debutGroup.groupMembers.length / 2) ? (
                <DebutMemberPhoto key={item.memberId} {...item} />
              ) : null,
            )}
          </div>
          <div className="flex h-72 max-w-xl">
            {debutGroup.groupMembers.map((item, idx) =>
              idx >= Math.ceil(debutGroup.groupMembers.length / 2) ? (
                <DebutMemberPhoto key={item.memberId} {...item} />
              ) : null,
            )}
          </div>
        </>
      );
    } else if (debutGroup.groupMembers.length === 9) {
      return (
        <>
          <div className="flex h-72 max-w-xl">
            {debutGroup.groupMembers.map((item, idx) =>
              idx < Math.floor(debutGroup.groupMembers.length / 2) ? (
                <DebutMemberPhoto key={item.memberId} {...item} />
              ) : null,
            )}
          </div>
          <div className="flex h-72 max-w-xl">
            {debutGroup.groupMembers.map((item, idx) =>
              idx >= Math.floor(debutGroup.groupMembers.length / 2) ? (
                <DebutMemberPhoto key={item.memberId} {...item} />
              ) : null,
            )}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex h-72 max-w-xl">
            {debutGroup.groupMembers.map((item, idx) =>
              idx < debutGroup.groupMembers.length / 2 ? (
                <DebutMemberPhoto key={item.memberId} {...item} />
              ) : null,
            )}
          </div>
          <div className="flex h-72 max-w-xl">
            {debutGroup.groupMembers.map((item, idx) =>
              idx >= debutGroup.groupMembers.length / 2 ? (
                <DebutMemberPhoto key={item.memberId} {...item} />
              ) : null,
            )}
          </div>
        </>
      );
    }
  }
};

export default DebutGroupPhoto;
