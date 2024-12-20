import React from 'react';
import { useGetUserData } from 'src/hooks/useGetUserData';

export const UserPic = () => {
  const { user } = useGetUserData();
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full border-2 border-primary w-32 h-32 overflow-hidden">
        <img src={user.img} alt="user pic" className="" />
      </div>

      <p className="text-center text-primaryDark font-bold text-2xl mt-5 block p-2 border-2 border-primary">
        Ruslan Kolibabchuk
      </p>
    </div>
  );
};
