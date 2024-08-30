import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { data } from './data';

const BrideGroom = () => {
  return (
    <div className="h-auto bg-backdrop-img-ten-flip bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto px-4 py-12 md:py-10 max-w-5xl  " >
        <p className="mt-5 mb-10 text-center text-3xl md:text-4xl text-[#412222] font-playfair">
          The Bride &amp; The Groom
        </p>
        <div className="flex flex-col md:flex-row justify-center ">
          {data.map((el, idx) => (
            <ProfileCard
              key={idx} // Adding a unique key for each card
              img={el.img}
              title={el.title}
              name={el.name}
              description={el.description}
              parent={el.parent}
            />
          ))}
        </div>
      </div >
    </div >

  );
}

export default BrideGroom;
