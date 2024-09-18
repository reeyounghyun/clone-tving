import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // 변경된 경로로 수정
import { useEffect } from 'react';
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

  useEffect(() => {
    // Swiper가 마운트된 후 DOM 요소를 참조하여 네비게이션 버튼을 연결
    const nextButton = document.querySelector('.custom-next');
    const prevButton = document.querySelector('.custom-prev');

    // Swiper가 렌더링 후에 네비게이션 버튼을 참조하도록 해줌
    if (nextButton && prevButton) {
      nextButton.classList.add('swiper-button-next');
      prevButton.classList.add('swiper-button-prev');
    }
  }, []); // 컴포넌트가 마운트될 때만 실행

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
        modules={[Navigation, Pagination]}  // 네비게이션과 페이지네이션 모듈 추가
        slidesPerView={1}                  // 한 번에 하나의 슬라이드만 보이게 설정
        spaceBetween={-10}  
        speed={600}                 // 슬라이드 사이 간격
        pagination={{
          clickable: true,                 // 페이지네이션 클릭 가능
          el: '.custom-pagination',        // 커스텀 페이지네이션 선택자
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet">${index + 1}</span>`;
          },
        }}
        navigation={{
          nextEl: '.custom-next',          // 커스텀 Next 버튼
          prevEl: '.custom-prev',          // 커스텀 Prev 버튼
        }}                                 // 커스텀 네비게이션 버튼 지정
        className="topListSlider"
        centeredSlides={true}              // 슬라이드를 가운데로 정렬
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
