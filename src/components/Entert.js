import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper'; // 네비게이션 모듈 제거
import 'swiper/css';
import './ReviewList.css';
import './common.css';

function EntertItem({ item, index }) {
  return (
    <div className="ReviewTopItem relative">
      <div className="relative flex flex-row-reverse items-end">
        <img className="ReviewTopItem-img" src={item.imgUrl} alt={item.title} />
        {/* <p className="text-[4rem] italic pr-[7px] num">{index + 1}</p> */}
      </div>
      <div className="absolute z-[100] left-[10px] top-[10px]">
        {item.isNew && (
          <svg
            className="w-[30px] h-[20px]"
            viewBox="0 0 33 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        )}
      </div>
      {/* <div className="ReviewTopItem-title">
        <p>{item.title}</p>
      </div> */}
    </div>
  );
}

function EntertList({ items }) {
  return (
    <div className="ReviewList lists pt-[1.333rem] pb-[1.333rem] relative">
      <h3 class="text-white text-[1.333rem] font-bold mt-[0.666rem] lg:text-[1.666rem] leading-normal h-[2.416rem]">지금 방영 중인 인기 예능</h3>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        className="topListSlirder"
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
            <EntertItem item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default EntertList;
