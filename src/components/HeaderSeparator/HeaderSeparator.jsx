import { Favorite } from '@mui/icons-material';
import React from 'react';

const HeaderSeparator = () => {
  return (
    <div className="flex items-center p-2.5">
      <div className="bg-black h-1.5 rounded-full flex-1 max-w-[350px] sm:max-w-[200px] md:max-w-[350px]"></div>
      <Favorite className="mx-2.5 text-white text-4xl" />
      <div className="bg-black h-1.5 rounded-full flex-1 max-w-[350px] sm:max-w-[200px] md:max-w-[350px]"></div>
    </div>
  );
};

export default HeaderSeparator;
