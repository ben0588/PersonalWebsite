import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import GoTopButton from '../common/GoTopButton';
import { useEffect } from 'react';

const Layout = () => {
    const [isScrolling, setIsScrolling] = useState(false); // 控制是否顯示 TOP 按鈕
    // 處理 回到頂端 按鈕
    useEffect(() => {
        // 監控往下滾動到一定距離才會顯示Top按鈕
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        });
    }, [isScrolling]);

    // 處理回到首頁滑動效果
    const handlerGoTop = () => {
        console.log('觸發');
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 移動效果
        });
    };

    return (
        <div>
            {isScrolling && <GoTopButton onClick={handlerGoTop} />}
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default Layout;
