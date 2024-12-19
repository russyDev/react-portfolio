import img from 'src/assets/user.png';
import { FacebookIcon, LinkedinIcon, XIcon } from 'src/components/icons';

export const useGetUserData = () => {
  const user = {
    name: 'Ruslan Kolibabchuk',
    img,
    social: [
      {
        name: 'Linkedin',
        icon: <LinkedinIcon className="w-full h-full" />,
        link: 'https://www.linkedin.com/in/ruslan-kolibabchuk-b3341372/',
      },
      {
        name: 'Facebook',
        icon: <FacebookIcon className="w-full h-full" />,
        link: 'https://www.facebook.com/ruslan.kolibabcuk/',
      },
      {
        name: 'X',
        icon: <XIcon className="w-full h-full" />,
        link: 'https://x.com/r_kodev/',
      },
    ],
  };

  return {
    user,
  };
};
