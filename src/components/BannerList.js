import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // 변경된 경로로 수정
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ReviewList.css';
import './common.css';

function BannerItem({ item, index }) {
  return (
    <div className="ReviewTopItem relative">
      <div className="relative flex flex-row-reverse items-end">
        <img className="" src={item.imgUrl} alt={item.title} />
      </div>
      <div className="absolute z-[100] left-[30px] bottom-[60px]">
        <img className="ReviewTopItem-img w-[494px]" src={item.titleImgUrl} alt={item.title} />
        <div className="mt-[1.33rem] font-normal leading-normal line-clamp-2">
          <p>{item.content}</p>
          <p>{item.content1}</p>
        </div>
      </div>
    </div>
  );
}

function BannerList({ items }) {
  return (
    <div className="lists pt-[1.333rem] pb-[1.333rem] relative">
      {/* 커스텀 네비게이션 버튼 */}
      <div className="custom-nav-btn">
        <button className="swiper-button-prev custom-prev"></button>
        <button className="swiper-button-next custom-next"></button>
      </div>

      {/* 커스텀 페이지네이션 요소 */}
      <div className="custom-pagination"></div>

      <Swiper
        modules={[Navigation, Pagination]}  
        slidesPerView={1}                 
        spaceBetween={-10}  
        speed={600}                 
        pagination={{
          clickable: true,               
          el: '.custom-pagination',     
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet">${index + 1}</span>`;
          },
        }}
        navigation={{
          nextEl: '.custom-next',         
          prevEl: '.custom-prev',          
        }}                                 
        className="topListSlider"
        centeredSlides={true}    
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
