import React, { FC, ReactNode, useState } from 'react';
import { UserPic } from 'src/components/userPic';
import { Navigations } from 'src/components/navigations';
import { Link } from 'react-router';
import { useGetUserData } from 'src/hooks/useGetUserData';
import { SlideMenu } from '../slideMenu';
import { MenuIcon } from '../icons';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const { user } = useGetUserData();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="layout md:flex h-screen">
      <div className="hidden md:flex w-[320px] lg:w-[380px] bg-white border-r items-center flex-col justify-between pt-10 pb-10 h-screen overflow-auto flex-none">
        <UserPic />
        <Navigations />
        <div>
          <div className="mb-5 flex items-center justify-center gap-5">
            {user.social.map((social, index) => (
              <Link key={index} to={social.link} className="social-link" target="__blank">
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="text-center text-base text-main">Copyright © 2025 Ruslan Kolibabchuk.</p>
          <p className="text-center text-base text-main">All rights reserved.</p>
        </div>
      </div>
      <div className="flex-grow bg-teal-50 h-screen overflow-auto">
        <div className="w-full bg-white h-20 md:hidden flex items-center px-4 justify-between sticky top-0">
          <div className="font-bold text-primary text-2xl">Ruslan K.</div>
          <div onClick={() => setOpenMenu(true)}>
            <MenuIcon className="" />
          </div>
        </div>
        {children}
      </div>

      <SlideMenu isOpen={openMenu} onClose={() => setOpenMenu(false)} position="right" width={300}>
        <div className="flex md:hidden w-full bg-white border-r items-center flex-col justify-between pt-10 pb-10 h-full">
          <UserPic />
          <Navigations />
          <div>
            <div className="mb-5 flex items-center justify-center gap-5">
              {user.social.map((social, index) => (
                <Link
                  key={index}
                  to={social.link}
                  className="social-link text-4xl"
                  target="__blank"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <p className="text-center text-base text-main">Copyright © 2025 Ruslan Kolibabchuk.</p>
            <p className="text-center text-base text-main">All rights reserved.</p>
          </div>
        </div>
      </SlideMenu>
    </div>
  );
};
