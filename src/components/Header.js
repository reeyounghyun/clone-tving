import React from 'react';
import Logo from './img/logo.png';
import Search from './img/icon_search.svg';
import Profile from './img/profile.png';

function Header() {
  const navItems = ['시리즈', '영화', '라이브', 'KBO'];  // 문자열 배열로 수정

  return (
    <div>
      <header className='relative'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center h-[64px]'>
            <div className='mr-[2rem]'>
              <img src={Logo} width={117} height={48} alt="Logo" />
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
          <div className='flex items-center'>
            <div className=''>
              <img src={Search} width={25} height={25} alt="search" />
            </div> 
            <div className=''>
              <img src={Profile} width={25} height={25} alt="profile" />
            </div> 
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
