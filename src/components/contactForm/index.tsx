import React from 'react';

export const ContactForm = () => {
  return (
    <div>
      <form className="">
        <input type="text" placeholder="Name" className="input mb-5" />
        <input type="email" placeholder="Email" className="input mb-5" />
        <textarea placeholder="Message" className="input min-h-44 mb-10" />
        <button type="submit" className="primary-button">
          Submit
        </button>
      </form>
    </div>
  );
};
