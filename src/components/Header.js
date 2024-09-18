import React from 'react';

function Header() {
  const navItems = ['시리즈', '영화', '라이브', 'KBO'];  // 문자열 배열로 수정

  return (
    <div>
      <header className='relative'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center h-[64px]'>
            <div className='mr-[2rem]'>
              <img src='https://github.com/reeyounghyun/clone-tving/blob/main/public/img/logo.png?raw=true' width={117} height={48} alt="Logo" />
            </div>
            <nav className='nav'>
              <ul className='flex items-center gap-3'>
                {navItems.map((item, index) => (
                  <li 
                    key={index}
                    className='cursor-pointer'
                  >
                    {item}
                  </li>  // map을 사용하여 li 태그 생성
                ))}
              </ul>
            </nav>
          </div>
          <div className='flex items-center gap-6'>
            <div>
              <img src='/icon_search.svg' width={36} height={36} alt="search" />
            </div> 
            <div>
              <img src='https://github.com/reeyounghyun/clone-tving/blob/main/public/img/profile.png?raw=true' width={36} height={36} alt="profile" />
            </div> 
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
