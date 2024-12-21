import React from 'react';
import { NavLink } from 'react-router';

const links = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/services',
    text: 'Services',
  },
  /*  {
    to: '/portfolio',
    text: 'Portfolio',
  },*/
  {
    to: '/contact',
    text: 'Contact',
  },
];

export const Navigations = () => {
  return (
    <ul className="block w-full">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) => `text-base link ${isActive ? 'text-primary' : ''}`}
            >
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
