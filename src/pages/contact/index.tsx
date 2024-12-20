import React from 'react';
import { Layout } from 'src/components/layout';
import { useGetUserData } from '../../hooks/useGetUserData';
import { Link } from 'react-router';
import { ContactForm } from '../../components/contactForm';

export const ContactPage = () => {
  const { user } = useGetUserData();

  return (
    <Layout>
      <div className="flex flex-col h-full overflow-scroll">
        <div className="container-row bg-sky-50 flex">
          <div>
            <div className="xl:flex gap-40 container pt-28">
              <div className="mb-3 xl:w-1/2 xl:mb-0">
                <p className="text-main uppercase font-semibold text-base mb-6">- Let's connect</p>
                <p className="text-4xl font-bold text-primaryDark mb-2">Get in touch</p>
                <p className="text-base font-bold text-main">
                  I'm currently available to take on new projects, so feel free to send me a message
                  about anything that you want to run past me. You can contact anytime at 24/7
                </p>

                <ul className="pl-0 mt-10">
                  <li>
                    <Link
                      className="block text-xm text-primaryDark font-bold mb-2 underline"
                      to={`tel:${user.phone}`}
                    >
                      {user.phone}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block text-base text-primaryDark font-bold mb-3 underline"
                      to={`mailto:${user.email}`}
                    >
                      {user.email}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="xl:w-1/2">
                <ContactForm />
              </div>
            </div>

            <div className="mt-16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9152108.643875271!2d31.182437349999997!3d48.33606545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2z0KPQutGA0LDRl9C90LA!5e1!3m2!1suk!2sua!4v1734689259739!5m2!1suk!2sua"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};