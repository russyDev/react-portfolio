import React from 'react';
import { Layout } from 'src/components/layout';
import { useGetUserData } from '../../hooks/useGetUserData';
import img from 'src/assets/user-removebg.png';
import { Links } from './components/LInks';
import { Details } from './components/Details';

export const HomePage = () => {
  const { user } = useGetUserData();
  return (
    <Layout>
      <div className="min-h-full pl-10 pr-10 flex items-center justify-center">
        <div className="container">
          <div className="xl:flex gap-8 items-center justify-center w-full">
            <div className="min-h-full">
              <Details />
              <Links />
            </div>
            <div className="hidden xl:block grow p-20">
              <img src={img} alt="" className="max-w-[500px] w-full opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
