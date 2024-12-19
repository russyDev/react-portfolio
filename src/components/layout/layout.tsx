import React, { FC, ReactNode } from 'react';
import { UserPic } from 'src/components/userPic';
import { Navigations } from 'src/components/navigations';
import { Link } from 'react-router';
import { useGetUserData } from 'src/hooks/useGetUserData';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const { user } = useGetUserData();
  return (
    <div className="layout md:flex h-screen">
      <div className="w-[380px] bg-white border-r flex items-center flex-col justify-between pt-10 pb-10">
        <UserPic />
        <Navigations />
        <div>
          <div className="mb-5 flex items-center justify-center gap-5">
            {user.social.map((social) => (
              <Link to={social.link} className="social-link" target="__blank">
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="text-center text-base text-main">Copyright © 2025 Ruslan Kolibabchuk.</p>
          <p className="text-center text-base text-main">All rights reserved.</p>
        </div>
      </div>
      <div className="flex-grow bg-teal-50 pl-10 pr-10">{children}</div>
    </div>
  );
};
