import React from 'react';
import { Link } from 'react-router';

export const Details = () => {
  return (
    <>
      <h3 className="text-6xl text-primaryDark font-bold mb-2">
        Hi, I'm <span className="text-primary">Ruslan!</span>
      </h3>
      <h3 className="text-6xl text-primaryDark font-bold mb-2">Creative Developer</h3>
      <h3 className="text-6xl text-primaryDark font-bold">Based in Ukraine</h3>
      <p className="mt-10 text-2xl">
        I'm a Ukraine based front-end developer with
        <br />
        <span className="text-primary">10+ years</span> of experience
      </p>
      <div className="mt-10 sm:flex gap-5">
        <Link to="/" className="primary-button mb-2 mr-2 sm:mb-0 sm:mr-0">
          Got a project?
        </Link>
        <Link to="/" className="secondary-button">
          Let's talk
        </Link>
      </div>
    </>
  );
};
