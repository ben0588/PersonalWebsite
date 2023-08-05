import { useState } from 'react';
import LayoutSwiper from '../../components/common/LayoutSwiper';
import demo1_Img1 from '../../images/demo1/demo1-1.webp';
import demo1_Img2 from '../../images/demo1/demo1-2.webp';
import demo1_Img3 from '../../images/demo1/demo1-3.webp';
import demo1_Img4 from '../../images/demo1/demo1-4.webp';
import demo1_Img5 from '../../images/demo1/demo1-5.webp';
import demo1_Img6 from '../../images/demo1/demo1-6.webp';
import demo1_Img7 from '../../images/demo1/demo1-7.webp';
import demo1_Mp41 from '../../images/demo1/demo1-user.mp4';
import demo1_Mp42 from '../../images/demo1/demo1-api.mp4';

// demo2 start
import demo2_Img1 from '../../images/demo2/demo2-1.webp';
import demo2_Img2 from '../../images/demo2/demo2-2.webp';
import demo2_Img3 from '../../images/demo2/demo2-3.webp';
import demo2_Img4 from '../../images/demo2/demo2-4.webp';
import demo2_Img5 from '../../images/demo2/demo2-5.webp';

// demo3 start
import demo3_Img1 from '../../images/demo3/demo3-1.webp';
import demo3_Img2 from '../../images/demo3/demo3-2.webp';
import demo3_Img3 from '../../images/demo3/demo3-3.webp';
import demo3_Img4 from '../../images/demo3/demo3-4.webp';
import demo3_Img5 from '../../images/demo3/demo3-5.webp';
import demo3_Img6 from '../../images/demo3/demo3-6.webp';
import demo3_Mp41 from '../../images/demo3/demo3.mp4';

// demo4 start
import demo4_Img1 from '../../images/demo4/demo4-1.webp';
import demo4_Img2 from '../../images/demo4/demo4-2.webp';
import demo4_Img3 from '../../images/demo4/demo4-3.webp';
import demo4_Img4 from '../../images/demo4/demo4-4.webp';
import demo4_Img5 from '../../images/demo4/demo4-5.webp';
import demo4_Img6 from '../../images/demo4/demo4-6.webp';
import demo4_Img7 from '../../images/demo4/demo4-7.webp';

// 其他元件
import BounceVideo from '../../components/common/BounceVideo';
import DemoList from '../../components/common/DemoList';

const HomeWorkSamplesSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // 管理彈跳視窗
    const [mediaName, setMediaName] = useState(''); // 控制傳入的影片檔案路徑

    // demo1 作品開始：
    const demo1ImgList = [
        { img: demo1_Img1, alt: 'demo1展示' },
        { img: demo1_Img2, alt: 'demo1展示' },
        { img: demo1_Img3, alt: 'demo1展示' },
        { img: demo1_Img4, alt: 'demo1展示' },
        { img: demo1_Img5, alt: 'demo1展示' },
        { img: demo1_Img6, alt: 'demo1展示' },
        { img: demo1_Img7, alt: 'demo1展示' },
    ];
    const demo1LinkList = [
        { title: '作品 DEMO 連結：', path: 'https://ben0588.github.io/shopping_site/', text: '跨站觀看' },
        {
            title: '會員系統展示：',
            path: 'https://www.awesomescreenshot.com/video/16645056?key=9c2238c9526bd23680646344798f8527',
            text: '本站觀看',
            videoPath: demo1_Mp41,
        },
        // { title: '前端 GitHub 連結：', path: 'https://github.com/ben0588/shopping_site/tree/main', text: '跨站觀看' },
        // { title: '後端 GitHub 連結', path: 'https://github.com/ben0588/node_shopping_site', text: '跨站觀看' },
        {
            title: 'Swagger UI 展示 API 文件：',
            path: 'https://www.awesomescreenshot.com/video/16523212?key=124967b030a390339c2130f7b9627996',
            text: '本站觀看',
            videoPath: demo1_Mp42,
        },
    ];
    const demo1FrontEndTechList = [
        { text: '使用 React Hook 架構進行開發' },
        { text: '使用 create-react-app 開發專案' },
        { text: '使用 react-hook-form 管理與驗證表單資料' },
        { text: '使用 useContext & useReducer 狀態管理' },
        { text: '- 登入狀態、購物車 CRUD、願望清單 CRUD' },
        { text: '使用 axios 串接後端 api 資料' },
        { text: '- 會員系統 CRUD、第三方登入 ( Facebook/Google/Line/Github )' },
        { text: '使用 SCSS 管理 RWD 響應式範圍' },
        { text: '- ( 1140px、768px、568px、414px、375px、320px )' },
        { text: '使用 styled-components - CSS in Js 管理元件樣式' },
    ];
    const demo1BackEndTechList = [
        { text: '使用 Node/express 建立 Web Server 應用' },
        { text: '設置 RESTful API 風格開發 Route 接口 ' },
        { text: '使用 jsonwebtoken 設置用戶權限驗證 (JWT)' },
        { text: '使用 MySQL 連接資料庫操作 CRUD' },
        { text: '使用 swagger-ui-express 產生線上 API 文件' },
    ];

    // demo2 作品開始：
    const demo2ImgList = [
        { img: demo2_Img1, alt: 'demo2展示' },
        { img: demo2_Img2, alt: 'demo2展示' },
        { img: demo2_Img3, alt: 'demo2展示' },
        { img: demo2_Img4, alt: 'demo2展示' },
        { img: demo2_Img5, alt: 'demo2展示' },
    ];
    const demo2LinkList = [
        { title: '作品 DEMO 連結：', path: 'https://ben0588.github.io/hexagon_react_finally_api/', text: '跨站觀看' },
    ];
    const demo2FrontEndTechList = [
        { text: '使用 React Hook 架構進行開發' },
        { text: '重構 React Component - 元件化' },
        { text: '使用 react-router-dom 管理路由' },
        { text: '使用 axios 套件串接整合 api 完成 CRUD 操作' },
    ];

    // demo3 作品開始：
    const demo3ImgList = [
        { img: demo3_Img1, alt: 'demo3展示' },
        { img: demo3_Img2, alt: 'demo3展示' },
        { img: demo3_Img3, alt: 'demo3展示' },
        { img: demo3_Img4, alt: 'demo3展示' },
        { img: demo3_Img5, alt: 'demo3展示' },
        { img: demo3_Img6, alt: 'demo3展示' },
    ];
    const demo3LinkList = [
        { title: '作品 DEMO 連結：', text: '本站觀看', videoPath: demo3_Mp41 },
        { title: '備註：', text: '本作品五人協力，僅負責首頁+購物車+金流', path: false },
    ];
    const demo3FrontEndTechList = [
        { text: '使用 React Class 架構進行開發' },
        { text: '使用 create-react-app 開發專案' },
        { text: '使用 react-router-dom 管理路由' },
        { text: '使用 axios 套件串接整合 api 完成 CRUD 操作' },
    ];
    const demo3BackEndTechList = [
        { text: '使用 PHP 串接 MySQL 操作 CRUD' },
        { text: '使用 PHP 串接 綠界金流 ECPay 完成付款測試' },
    ];

    // demo4 作品開始：
    const demo4ImgList = [
        { img: demo4_Img1, alt: 'demo4展示' },
        { img: demo4_Img2, alt: 'demo4展示' },
        { img: demo4_Img3, alt: 'demo4展示' },
        { img: demo4_Img4, alt: 'demo4展示' },
        { img: demo4_Img5, alt: 'demo4展示' },
        { img: demo4_Img6, alt: 'demo4展示' },
    ];
    const demo4LinkList = [
        { title: '作品 DEMO 連結：', path: 'https://ben0588.github.io/ColorsReference/', text: '跨站觀看' },
        { title: '主要功能：', text: '依照設定好的色碼，滑鼠移入按左鍵直接複製代碼', path: false },
        { title: '設定色碼：', text: '「新增」、「編輯」、「刪除單一」、「刪除全部」色碼組合。', path: false },
        { title: '注意：', text: '頁面重新整理不會丟失紀錄，但更換裝置會遺失紀錄！', path: false },
    ];
    const demo4FrontEndTechList = [
        { text: '使用 Vite/React 開發專案。' },
        { text: '使用 Redux-toolkit 完成全域狀態管理。' },
        { text: '使用 Redux-persist 完成資料本地端( LocalStorage ) 自動儲存與刪除。' },
        { text: '使用 Bootstrap5 進行開發樣式' },
        { text: '使用 react-bootstrap 模組開發' },
    ];

    // demo5 作品開始：
    // const demo5ImgList = [
    //     { img: demo5_Img1, alt: 'demo5展示' },
    //     { img: demo5_Img2, alt: 'demo5展示' },
    //     { img: demo5_Img3, alt: 'demo5展示' },
    //     { img: demo5_Img5, alt: 'demo5展示' },
    //     { img: demo5_Img5, alt: 'demo5展示' },
    //     { img: demo5_Img6, alt: 'demo5展示' },
    // ];
    const demo5ImgList = [
        {
            img: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
            alt: 'demo5展示',
        },
        {
            img: 'https://images.unsplash.com/photo-1545840716-c82e9eec6930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
            alt: 'demo5展示',
        },
    ];

    const demo5LinkList = [
        // { title: '作品 DEMO 連結：', path: 'https://ben0588.github.io/ColorsReference/', text: '跨站觀看' },
        // { title: '主要功能：', text: '依照設定好的色碼，滑鼠移入按左鍵直接複製代碼', path: false },
        { title: '作品製作中', text: '...待完成', path: false },
    ];

    // 依照點選路徑不同而開啟彈跳畫面
    const handleClickVideo = (videoPath) => {
        setIsModalOpen(!isModalOpen); // 打開彈跳視窗
        setMediaName(videoPath); // 紀錄名稱
    };

    return (
        <div className='mt-4 mt-sm-5'>
            {/* 控制是否展示影片視窗 */}
            {isModalOpen ? (
                <BounceVideo
                    mediaName={mediaName} // 傳入目標影片路徑
                    isModalOpen={isModalOpen} // 是否開啟視窗
                    setIsModalOpen={setIsModalOpen} // 更新是否開啟
                />
            ) : null}

            <h3 className='fw-bolder mb-4'>
                作品集<span className='text-primary fs-4 ms-2'>Work samples</span>
            </h3>
            <div className='row m-0 '>
                <div className='col-12'>
                    <div className='row border border-2'>
                        <div className='col-12 col-sm-5  border-end border- mt-2 mt-sm-02 '>
                            <LayoutSwiper listData={demo5ImgList} />
                        </div>
                        <div className='col-12 col-sm-7 '>
                            <DemoList
                                demoTitle={'新作品製作中'}
                                demoData={demo5LinkList}
                                handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                frontEndTechList={false}
                                backEndTechList={false}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-12'>
                    <div className='row border border-2'>
                        <div className='col-12 col-sm-5  border-end border- mt-2 mt-sm-02 '>
                            <LayoutSwiper listData={demo4ImgList} />
                        </div>
                        <div className='col-12 col-sm-7 '>
                            <DemoList
                                demoTitle={'記錄色碼'}
                                demoData={demo4LinkList}
                                handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                frontEndTechList={demo4FrontEndTechList}
                                backEndTechList={false}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-12'>
                    <div className='row border border-2'>
                        <div className='col-12 col-sm-5  border-end border- mt-2 mt-sm-02 '>
                            <LayoutSwiper listData={demo1ImgList} />
                        </div>
                        <div className='col-12 col-sm-7 '>
                            <DemoList
                                demoTitle={'源點。線上網球購物中心'}
                                demoData={demo1LinkList}
                                handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                frontEndTechList={demo1FrontEndTechList}
                                backEndTechList={demo1BackEndTechList}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-12 mt-3'>
                    <div className='row border border-2'>
                        <div className='col-12 col-sm-5  border-end border- mt-2 mt-sm-02 '>
                            <LayoutSwiper listData={demo2ImgList} />
                        </div>
                        <div className='col-12 col-sm-7 '>
                            <DemoList
                                demoTitle={'TodoList 代辦清單'}
                                demoData={demo2LinkList}
                                handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                frontEndTechList={demo2FrontEndTechList}
                                backEndTechList={false}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-12 mt-3'>
                    <div className='row border border-2'>
                        <div className='col-12 col-sm-5  border-end border-2 mt-2 mt-sm-0 '>
                            <LayoutSwiper listData={demo3ImgList} />
                        </div>
                        <div className='col-12 col-sm-7 '>
                            <DemoList
                                demoTitle={'Spost+ 運動整合平台'}
                                demoData={demo3LinkList}
                                handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                frontEndTechList={demo3FrontEndTechList}
                                backEndTechList={demo3BackEndTechList}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeWorkSamplesSection;
