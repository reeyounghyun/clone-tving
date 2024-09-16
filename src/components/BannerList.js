import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper'; // 네비게이션 모듈 제거
import 'swiper/css';
import './ReviewList.css';
import './common.css';

function BannerItem({ item, index }) {
  return (
    <div className="ReviewTopItem relative">
      <div className="relative flex flex-row-reverse items-end">
        <img className="ReviewTopItem-img" src={item.imgUrl} alt={item.title} />
      </div>
      <div className="absolute z-[100] left-[30px] bottom-[60px]">
        <img className="ReviewTopItem-img w-[494px]" src={item.titleImgUrl} alt={item.title} />
        <div class="mt-[1.33rem] font-normal leading-normal line-clamp-2">
          <p>{item.content}</p>
          <p>{item.content1}</p>
        </div>
      </div>
    </div>
  );
}

function BannerList({ items }) {
  return (
    <div className="ReviewTopList lists pt-[1.333rem] pb-[1.333rem] relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        className="topListSlirder"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <BannerItem item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerList;
