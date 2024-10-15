import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MenuOutlined, CloseOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';

const Header: React.FC = () => {
  const router = useRouter();
  const collapseMenuRef = useRef<HTMLDivElement | null>(null);
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  const handleClick = () => {
    if (collapseMenuRef.current) {
      collapseMenuRef.current.style.display =
        collapseMenuRef.current.style.display === 'block' ? 'none' : 'block';
    }
  };

  const showSearchModal = () => {
    setIsSearchModalVisible(true);
  };

  const handleSearchModalClose = () => {
    setIsSearchModalVisible(false);
  };

  useEffect(() => {
    document.body.style.paddingTop = '70px';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 flex border-b bg-white font-sans min-h-[70px] tracking-wide z-50'>
      <div className='flex flex-wrap items-center justify-between px-4 py-3 gap-4 w-full lg:px-10'>
        <a href="javascript:void(0)">
          <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-24 lg:w-36' />
        </a>

        <div className='flex-grow flex justify-center'>
          <div
            ref={collapseMenuRef}
            className='hidden lg:block lg:!block max-lg:fixed max-lg:bg-white max-lg:w-full max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'
            style={{ display: 'none' }}
          >
            <Button onClick={handleClick} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
              <CloseOutlined />
            </Button>

            <ul className='lg:flex lg:gap-x-10 max-lg:space-y-3'>
              <li className='max-lg:border-b max-lg:py-3'>
                <a href='/' className={`hover:text-[#FFA726] text-[15px] font-bold block ${router.pathname === '/' ? 'text-[#FFA726]' : 'text-gray-600'}`}>Anasayfa</a>
              </li>
              <li className='max-lg:border-b max-lg:py-3'>
                <a href='/services' className={`hover:text-[#FFA726] text-[15px] font-bold block ${router.pathname === '/services' ? 'text-[#FFA726]' : 'text-gray-600'}`}>Hizmetlerimiz</a>
              </li>
              <li className='group max-lg:border-b max-lg:py-3 relative'>
                <a href='#' className='flex items-center hover:text-[#FFA726] text-gray-600 text-[15px] font-bold block cursor-pointer'>
                  Ürünlerimiz <DownOutlined style={{ fontSize: '14px', marginLeft: '5px' }} />
                </a>
                <ul className='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[150px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                  <li className='border-b py-2 '><a href='/products' className='hover:text-[#FFA726] text-gray-600 text-[15px] font-bold block'>Product 1</a></li>
                  <li className='border-b py-2 '><a href='/products' className='hover:text-[#FFA726] text-gray-600 text-[15px] font-bold block'>Product 2</a></li>
                  <li className='border-b py-2 '><a href='/products' className='hover:text-[#FFA726] text-gray-600 text-[15px] font-bold block'>Product 3</a></li>
                </ul>
              </li>
              <li className='max-lg:border-b max-lg:py-3'>
                <a href='/about' className={`hover:text-[#FFA726] text-[15px] font-bold block ${router.pathname === '/about' ? 'text-[#FFA726]' : 'text-gray-600'}`}>Hakkımızda</a>
              </li>
              <li className='max-lg:border-b max-lg:py-3'>
              <a href='/contact' className={`hover:text-[#FFA726] text-[15px] font-bold block ${router.pathname === '/contact' ? 'text-[#FFA726]' : 'text-gray-600'}`}>İletişim</a>
              </li>
            </ul>
          </div>
        </div>

        <Button id="toggleOpen" className='lg:hidden' onClick={handleClick}>
          <MenuOutlined style={{ fontSize: '24px', color: '#000' }} />
        </Button>

        <div className='flex border-2 focus-within:border-gray-400 rounded-full px-4 py-2 overflow-hidden max-w-full lg:max-w-52'>
          <input type='text' placeholder='Bir şey ara...' className='w-full text-sm bg-transparent outline-none pr-2' />
          <SearchOutlined style={{ fontSize: '16px', color: '#000', cursor: 'pointer' }} onClick={showSearchModal} />
        </div>
      </div>
      <Modal
        title="Arama"
        visible={isSearchModalVisible}
        onCancel={handleSearchModalClose}
        footer={null}
      >
        <input type='text' placeholder='Bir şey ara...' className='w-full text-sm bg-transparent outline-none pr-2' />
      </Modal>
    </header>
  );
};

export default Header;
