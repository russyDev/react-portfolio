import React from 'react';
import { Layout } from 'src/components/layout';
import { Link } from 'react-router';
import { useGetUserData } from 'src/hooks/useGetUserData';
import { ServicesList } from './components/servicesList';

export const ServicesPage = () => {
  const { user } = useGetUserData();
  return (
    <Layout>
      <div className="flex flex-col h-full overflow-scroll">
        <div className="container-row bg-white flex">
          <div className="container">
            <p className="uppercase text-main font-medium mb-5">- Services</p>
            <div className="flex-col lg:flex-row flex justify-between items-center gap-1 mb-10">
              <h1 className="text-4xl font-extrabold text-primaryDark">My Services</h1>
              <Link
                to={`mailto:${user.email}`}
                className="text-primaryDark font-bold text-base link hover:text-orange-400 underline"
              >
                {user.email}
              </Link>
            </div>

            <ServicesList />
          </div>
        </div>
      </div>
    </Layout>
  );
};