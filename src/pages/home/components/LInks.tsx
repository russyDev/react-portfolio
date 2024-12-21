import React from 'react';
import { Link } from 'react-router';
import { useGetUserData } from '../../../hooks/useGetUserData';

export const Links = () => {
  const { user } = useGetUserData();

  return (
    <ul className="border-l-4 border-orange-400 pl-2 mt-10 md:mt-40">
      <li>
        <Link className="block text-base text-primaryDark font-bold mb-3" to={`tel:${user.phone}`}>
          {user.phone}
        </Link>
      </li>
      <li>
        <Link
          className="block text-base text-primaryDark font-bold mb-3"
          to={`mailto:${user.email}`}
        >
          {user.email}
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          className="block text-base text-primaryDark font-bold"
          to="https://maps.app.goo.gl/gjGEKZT5rXmPHkb58"
        >
          {user.address}
        </Link>
      </li>
    </ul>
  );
};
