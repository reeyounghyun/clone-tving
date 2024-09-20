import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import './ReviewList.css';
import './common.css';

function ReviewTopItem({ item, index }) {
  return (
    <div className="ReviewTopItem relative">
      <div className="relative flex flex-row-reverse items-end">
        <img className="ReviewTopItem-img" src={item.imgUrl} alt={item.title} />
        <p className="text-[4rem] italic pr-[7px] num">{index + 1}</p>
      </div>
      <div className="label-wrapper newepisode-label-wrapper absolute sm:w-[2rem] sm:h-[1.333rem] sm:top-[0.166rem] sm:left-[0.166rem] md:top-[15px] md:left-[-5px] md:w-[1.75rem] md:h-[1.833rem] z-[30]">
          <svg viewBox="0 0 33 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#label_new_svg__clip0_5239_157044)">
              <g clipPath="url(#label_new_svg__clip1_5239_157044)">
                <path fill="#FF153C" d="M0 0h33v22H0z"></path>
                <path d="M9.18 11.425l-.07-2.817V5.5h1.839v11H9.04L7.05 9.853h-.104l.07 2.503V16.5h-1.85v-11h2.129l1.768 5.925h.116zM14.608 14.835h2.71V16.5h-4.653v-11h4.618v1.665h-2.675v2.886h2.443v1.642h-2.443v3.143zM25.609 13.124h.151l.21-1.99.756-5.634h2.059l-1.769 10.988h-2.49l-.895-5.447-.29-2.072h-.117l-.268 2.072-.93 5.459h-2.478l-1.733-11h2.058l.733 5.634.221 1.979h.14l.28-1.98 1-5.633h2.117l.989 5.634.256 1.99z" fill="#fff"></path>
              </g>
            </g>
            <defs>
              <clipPath id="label_new_svg__clip0_5239_157044">
                <rect width="33" height="22" rx="3" fill="#fff"></rect>
              </clipPath>
              <clipPath id="label_new_svg__clip1_5239_157044">
                <rect width="33" height="22" rx="2.75" fill="#fff"></rect>
              </clipPath>
            </defs>
          </svg>
      </div>
      {/* <div className="ReviewTopItem-title">
        <p>{item.title}</p>
      </div> */}
    </div>
  );
}

function ReviewTopList({ items }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="custom-nav-btn lists pt-[1.333rem] pb-[1.333rem] relative"
      onMouseEnter={() => setIsHovered(true)}  // 마우스가 슬라이더에 올라가면 네비게이션 보이게
      onMouseLeave={() => setIsHovered(false)} // 마우스가 벗어나면 네비게이션 숨김
    >
      <h3 className="text-white text-[1.333rem] font-bold mb-[0.666rem] lg:text-[1.666rem] leading-normal h-[2.416rem]">
        오늘의 티빙 TOP 20
      </h3>

      {/* 커스텀 네비게이션 버튼 */}
      <div className="custom-nav-btn">
        <button 
          className={`swiper-button-prev custom-top-prev ${isHovered ? 'visible' : 'invisible'}`} 
        ></button>
        <button 
          className={`swiper-button-next custom-top-next ${isHovered ? 'visible' : 'invisible'}`} 
        ></button>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={40}
        centeredSlides={false}
        navigation={{
          nextEl: '.custom-top-next',
          prevEl: '.custom-top-prev',
        }}
        className="topSlirder"
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewTopItem item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



export default ReviewTopList;