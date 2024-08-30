import React from 'react';
import closingImg from '../../assets/header_bg.jpg';

const ClosingPage = () => {
    return (
        <div className="text-[#5b3d2c] my-[72px] mx-auto w-[70%] md:w-[85%]">
            <hr className="border-3 rounded-lg" />
            <p className="my-[60px] text-[24px] leading-[100px] font-poppins md:my-[30px] md:text-[14px] md:leading-[30px]">
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
                merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
                sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
                tanda-tanda (kebesaran Allah) bagi kaum yang berpikir” (QS. Ar Rum ayat
                21)
            </p>
            <hr className="border-3 rounded-lg" />
            <div className="my-[72px] grid grid-cols-3 gap-x-[40px] md:grid-cols-1 md:gap-y-[40px]">
                <p className="text-[72px] leading-[120px] font-playfair md:text-[24px] md:leading-[30px]">
                    Bismillah~ <br /> <br />
                    Mohon doanya yaa semua...
                </p>
                <div>
                    <img src={closingImg} alt="Closing Prewed" />
                </div>
            </div>
        </div>
    );
};

export default ClosingPage;
