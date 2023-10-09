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

// demo5 start
import demo5_Img1 from '../../images/demo5/demo5-1.webp';
import demo5_Img2 from '../../images/demo5/demo5-2.webp';
import demo5_Img3 from '../../images/demo5/demo5-3.webp';
import demo5_Img4 from '../../images/demo5/demo5-4.webp';
import demo5_Img5 from '../../images/demo5/demo5-5.webp';
import demo5_Img6 from '../../images/demo5/demo5-6.webp';
import demo5_Img9 from '../../images/demo5/demo5-9.webp';
import demo5_Img10 from '../../images/demo5/demo5-10.webp';
import demo5_Img11 from '../../images/demo5/demo5-11.webp';
import demo5_Img12 from '../../images/demo5/demo5-12.webp';

// demo6 start
import demo6_Img1 from '../../images/demo6/demo6-1.webp';
import demo6_Img2 from '../../images/demo6/demo6-2.webp';
import demo6_Img3 from '../../images/demo6/demo6-3.webp';
import demo6_Img4 from '../../images/demo6/demo6-4.webp';
import demo6_Img5 from '../../images/demo6/demo6-5.webp';
import demo6_Img6 from '../../images/demo6/demo6-6.webp';
import demo6_Img7 from '../../images/demo6/demo6-7.webp';

// 其他元件
import BounceVideo from '../../components/common/BounceVideo';
import DemoList from '../../components/common/DemoList';
import FramerMotion from '../../components/common/FramerMotion';

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
        {
            title: '作品 DEMO 連結：',
            path: 'https://ben0588.github.io/shopping_site/',
            text: '跨站觀看',
        },
        {
            title: '會員系統展示：',
            path: 'https://www.awesomescreenshot.com/video/16645056?key=9c2238c9526bd23680646344798f8527',
            text: '本站觀看',
            videoPath: demo1_Mp41,
        },
        {
            title: '前端 GitHub 連結：',
            path: 'https://github.com/ben0588/shopping_site/tree/main',
            text: '跨站觀看',
        },
        {
            title: '後端 GitHub 連結',
            path: 'https://github.com/ben0588/node_shopping_site',
            text: '跨站觀看',
        },
        {
            title: 'Swagger UI 展示 API 文件：',
            path: 'https://www.awesomescreenshot.com/video/16523212?key=124967b030a390339c2130f7b9627996',
            text: '本站觀看',
            videoPath: demo1_Mp42,
        },
    ];
    // const demo1FrontEndTechList = [
    //     { text: '使用 React Hook 架構進行開發' },
    //     { text: '使用 create-react-app 開發專案' },
    //     { text: '使用 react-hook-form 管理與驗證表單資料' },
    //     { text: '使用 useContext & useReducer 狀態管理' },
    //     { text: '使用 axios 串接後端 api 資料' },
    //     { text: '使用支持第三方登入 ( Facebook/Google/Line/Github )' },
    //     { text: '使用 SCSS 手刻 RWD 響應式 1140~320px' },
    // ];
    // const demo1BackEndTechList = [
    //     { text: '使用 Node/express 建立 Web Server 應用' },
    //     { text: '設置 RESTful API 風格開發 Route 接口 ' },
    //     { text: '使用 jsonwebtoken 設置用戶權限驗證 (JWT)' },
    //     { text: '使用 MySQL 連接資料庫操作 CRUD' },
    //     { text: '使用 swagger-ui-express 產生線上 API 文件' },
    // ];
    // const demo1FunctionDescription = [
    //     { text: '使用者可使用官網註冊或者第三方登入' },
    //     { text: '使用者登入之後可以編輯個人資料與刪除帳戶存在' },
    //     { text: '使用者可使用忘記密碼功能' },
    //     { text: '使用者可使用新增商品至購物車，且可編輯購物車數量與刪除商品' },
    //     { text: '使用者可使用新增商品至願望清單，且可編輯願望清單與刪除商品' },
    // ];
    const demo1FrontEndTechList = [{ text: 'React、Sass、Express、MySQL' }];
    const demo1BackEndTechList = false;
    const demo1FunctionDescription = [
        {
            text: '這是一個網球電商平台，使用者可以註冊或第三方登入，編輯個人資料，刪除帳戶，重設密碼。可以新增商品至願望清單 、購物車，編輯商品數量或刪除商品。',
        },
    ];

    // demo2 (todoList) 作品開始：
    const demo2ImgList = [
        { img: demo2_Img1, alt: 'demo2展示' },
        { img: demo2_Img2, alt: 'demo2展示' },
        { img: demo2_Img3, alt: 'demo2展示' },
        { img: demo2_Img4, alt: 'demo2展示' },
        { img: demo2_Img5, alt: 'demo2展示' },
    ];
    const demo2LinkList = [
        {
            title: '作品 DEMO 連結：',
            path: 'https://ben0588.github.io/hexagon_react_finally_api/',
            text: '跨站觀看',
        },
    ];
    const demo2FrontEndTechList = [
        { text: '使用 React Hook 架構進行開發' },
        { text: '重構 React Component - 元件化' },
        { text: '使用 react-router-dom 管理路由' },
        { text: '使用 axios 套件串接整合 api 完成 CRUD 操作' },
    ];

    // demo3 (資策會作品) 作品開始：
    const demo3ImgList = [
        { img: demo3_Img1, alt: 'demo3展示' },
        { img: demo3_Img2, alt: 'demo3展示' },
        { img: demo3_Img3, alt: 'demo3展示' },
        { img: demo3_Img4, alt: 'demo3展示' },
        { img: demo3_Img5, alt: 'demo3展示' },
        { img: demo3_Img6, alt: 'demo3展示' },
    ];
    const demo3LinkList = [
        { title: '作品連結：', text: '本站觀看', videoPath: demo3_Mp41 },
        {
            title: '備註：',
            text: '本作品五人協力，個人負責首頁+購物車+金流',
            path: false,
        },
    ];
    // const demo3FrontEndTechList = [
    //     { text: '使用 React Class 架構進行開發' },
    //     { text: '使用 create-react-app 開發專案' },
    //     { text: '使用 react-router-dom 管理路由' },
    //     { text: '使用 axios 套件串接整合 api 完成 CRUD 操作' },
    // ];
    // const demo3BackEndTechList = [
    //     { text: '使用 PHP 串接 MySQL 操作 CRUD' },
    //     { text: '使用 PHP 串接 綠界金流 ECPay 完成付款測試' },
    // ];
    const demo3FunctionDescription = [
        {
            text: '這是一個運動教練和場館搜尋平台，旨在讓民眾更容易尋找適合的教練和場館，同時讓教練方和場館方更容易有曝光的機會，創造消費者、教練、場館三贏的局面。',
        },
    ];
    const demo3FrontEndTechList = [{ text: 'React、Bootstrap5、PHP' }];
    const demo3BackEndTechList = false;
    // demo4 (色碼紀錄) 作品開始：
    const demo4ImgList = [
        { img: demo4_Img1, alt: 'demo4展示' },
        { img: demo4_Img2, alt: 'demo4展示' },
        { img: demo4_Img3, alt: 'demo4展示' },
        { img: demo4_Img4, alt: 'demo4展示' },
        { img: demo4_Img5, alt: 'demo4展示' },
        { img: demo4_Img6, alt: 'demo4展示' },
    ];
    const demo4LinkList = [
        {
            title: '作品連結：',
            path: 'https://ben0588.github.io/ColorsReference/',
            text: '跨站觀看',
        },
        {
            title: 'GitHub連結：',
            path: 'https://github.com/ben0588/ColorsReference/',
            text: '跨站觀看',
        },
    ];
    // const demo4FrontEndTechList = [
    //     { text: '使用 Vite/React 開發專案。' },
    //     { text: '使用 Redux-toolkit 完成全域狀態管理。' },
    //     { text: '使用 Redux-persist 完成資料本地端自動儲存與刪除。' },
    //     { text: '使用 Bootstrap5 進行開發樣式' },
    //     { text: '使用 react-bootstrap 模組開發' },
    // ];
    // const demo4FunctionDescription = [
    //     { text: '使用者可新增一組五個色碼設定' },
    //     { text: '色碼設定完畢之後會依照顏色區塊顯示' },
    //     { text: '支持滑鼠左鍵點擊後複製顏色代碼' },
    //     { text: '使用者可新增編輯刪除色碼之設定' },
    //     { text: '支持頁面重新整理不會丟失紀錄，但更換裝置會遺失紀錄' },
    // ];
    const demo4FrontEndTechList = [
        { text: 'React、Redux、Bootstrap5、Redux-persist' },
    ];
    const demo4FunctionDescription = [
        {
            text: '這是一個色碼設定工具，可以新增、編輯和刪除色碼，並以顏色區塊方式顯示。用戶可以使用滑鼠左鍵點擊以複製顏色代碼，更換裝置會遺失紀錄。',
        },
    ];

    // demo5 (香水電商網站) 作品開始：
    const demo5ImgList = [
        { img: demo5_Img1, alt: 'demo5展示' },
        { img: demo5_Img2, alt: 'demo5展示' },
        { img: demo5_Img3, alt: 'demo5展示' },
        { img: demo5_Img4, alt: 'demo5展示' },
        { img: demo5_Img5, alt: 'demo5展示' },
        { img: demo5_Img6, alt: 'demo5展示' },
        { img: demo5_Img9, alt: 'demo5展示' },
        { img: demo5_Img10, alt: 'demo5展示' },
        { img: demo5_Img11, alt: 'demo5展示' },
        { img: demo5_Img12, alt: 'demo5展示' },
    ];

    const demo5LinkList = [
        {
            title: '作品連結：',
            path: 'https://ben0588.github.io/react-fragrance-dawn/#/',
            text: '跨站觀看',
        },
        {
            title: 'GitHub連結：',
            path: 'https://github.com/ben0588/react-fragrance-dawn',
            text: '跨站觀看',
        },
    ];

    // const demo5FrontEndTechList = [
    //     { text: '使用 Vite / React 開發專案' },
    //     { text: '使用 React-Router-Dom 設置路由 Router ' },
    //     { text: '使用 Redux-toolkit 完成全域狀態管理' },
    //     { text: '使用 RTK Query 管理 API 數據獲取和緩存' },
    //     { text: '使用 Redux-persist 完成資料本地端自動儲存與刪除' },
    //     { text: '使用 Axios 透過 AJAX 呼叫後端 API 取得 JSON 資料' },
    //     { text: '使用 Bootstrap5 進行開發樣式，且支持 RWD 響應式' },
    //     { text: '使用 SCSS 完成部分客製化 CSS 樣式' },
    //     { text: '使用 React-Bootstrap 模組開發' },
    //     { text: '使用 Framer-Motion 完成視差滾動效果' },
    // ];

    // const demo5FunctionDescription = [
    //     { text: '使用者可在首頁中使用眾多功能' },
    //     { text: '使用者可在商品列表中使用類別、關鍵字搜尋，支持商品排序' },
    //     { text: '使用者可將心儀商品加入追蹤清單，並支持刪除功能' },
    //     { text: '使用者可將心儀商品加入購物車，並支持編輯商品數量與刪除' },
    //     { text: '使用者可輸入活動提供的優惠碼，結帳時後輸入並獲得現金折扣' },
    //     { text: '使用者填寫付款資訊後將建立訂單，並可選擇付款方式，完成購買' },
    //     { text: '使用者付款與未付款訂單資訊，可隨時追蹤訂單進度' },
    //     {
    //         text: '使用者可設定首頁是否接收通知訊息，以便收到關於促銷等活動通知',
    //     },
    //     { text: '使用者可前往文章專欄查看近期優質文章' },
    //     { text: '使用者可前往優惠頁查看近期舉辦活動資訊' },
    //     { text: '管理者可登入或登入後台' },
    //     { text: '管理者可使用後台管理商品資訊，並依照產品類別進行搜尋' },
    //     {
    //         text: '管理者可新增、編輯、刪除商品資訊，並且前台商品資訊也一併更動',
    //     },
    //     { text: '管理者可使用後台管理優惠卷資訊' },
    //     {
    //         text: '管理者可新增、編輯、刪除優惠卷資訊，並且前台優惠碼資訊也一併更動',
    //     },
    //     { text: '管理者可使用後台管理訂單資訊' },
    //     { text: '管理者可編輯訂單資訊，並且前台訂單資訊也一併更動' },
    //     { text: '管理者可使用後台管理文章資訊' },
    //     {
    //         text: '管理者可新增、編輯、刪除文章資訊，並且前台文章資訊也一併更動',
    //     },
    // ];

    const demo5BackEndTechList = false;

    const demo5FrontEndTechList = [{ text: 'React、Redux、Bootstrap5、Sass' }];

    const demo5FunctionDescription = [
        {
            text: '這是一個香水電商網站專案，旨在提供用戶瀏覽和購買香水產品的平台，擁有前後台功能，擁有動態網站特性，具備前後端分離。',
        },
    ];

    // demo6 (todolist待辦清單) 作品開始：

    const demo6ImgList = [
        { img: demo6_Img1, alt: 'demo6展示' },
        { img: demo6_Img2, alt: 'demo6展示' },
        { img: demo6_Img3, alt: 'demo6展示' },
        { img: demo6_Img4, alt: 'demo6展示' },
        { img: demo6_Img5, alt: 'demo6展示' },
        { img: demo6_Img6, alt: 'demo6展示' },
        // { img: demo6_Img7, alt: 'demo6展示' },
    ];

    const demo6LinkList = [
        {
            title: '作品連結：',
            path: 'https://ben0588.github.io/react-todolist/#/',
            text: '跨站觀看',
        },
        {
            title: 'GitHub連結：',
            path: 'https://github.com/ben0588/react-todolist',
            text: '跨站觀看',
        },
    ];

    // const demo6FrontEndTechList = [
    //     { text: '使用 Vite / React 開發專案' },
    //     { text: '使用 React-Router-Dom 設置路由 Router ' },
    //     { text: '使用 useContext + useReducer 跨元件狀態管理' },
    //     { text: '使用 Axios 透過 AJAX 呼叫後端 API 取得 JSON 資料' },
    //     { text: '使用 Bootstrap5 進行開發樣式，且支持 RWD 響應式' },
    //     { text: '使用 SCSS 完成部分客製化 CSS 樣式' },
    // ];

    // const demo6FunctionDescription = [
    //     { text: '使用者可以使用登入與註冊功能(資料會在每日凌晨 1:15 清除)' },
    //     { text: '使用者可查看待辦清單列表' },
    //     { text: '使用者可依照待完成、已完成篩選清單列表' },
    //     { text: '使用者可編輯清單項目內容' },
    //     { text: '使用者可更改清單完成狀態' },
    //     { text: '使用者可刪除單一清單項目與全部已完成清單內容' },
    // ];

    const demo6FrontEndTechList = [{ text: 'React、Bootstrap5、Axios、Sass' }];

    const demo6FunctionDescription = [
        {
            text: '這是一個待辦清單專案，用戶可以使用登入與註冊功能，建立屬於自己的代辦清單，可新增、編輯、刪除項目，並且更改清單內容',
        },
    ];
    const demo6BackEndTechList = false;

    // 依照點選路徑不同而開啟彈跳畫面
    const handleClickVideo = (videoPath) => {
        setIsModalOpen(!isModalOpen); // 打開彈跳視窗
        setMediaName(videoPath); // 紀錄名稱
    };

    return (
        <div className="mt-4 mt-sm-5">
            {/* 控制是否展示影片視窗 */}
            {isModalOpen ? (
                <BounceVideo
                    mediaName={mediaName} // 傳入目標影片路徑
                    isModalOpen={isModalOpen} // 是否開啟視窗
                    setIsModalOpen={setIsModalOpen} // 更新是否開啟
                />
            ) : null}

            <FramerMotion>
                <h3 className="fw-bolder mb-4">
                    作品集
                    <span className="text-primary fs-4 ms-2">Work samples</span>
                </h3>
            </FramerMotion>
            <div className="row align-items-center m-0 ">
                <div className="col-12 mt-3">
                    <div className="row align-items-center border border-2">
                        <div className="col-12 col-sm-5  border-end border- mt-2 mt-sm-02 ">
                            <FramerMotion>
                                <LayoutSwiper listData={demo5ImgList} />
                            </FramerMotion>
                        </div>
                        <div className="col-12 col-sm-7 ">
                            <FramerMotion>
                                <DemoList
                                    demoTitle={'香氛晨光'}
                                    demoData={demo5LinkList}
                                    handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                    frontEndTechList={demo5FrontEndTechList}
                                    backEndTechList={demo5BackEndTechList}
                                    description={demo5FunctionDescription}
                                />
                            </FramerMotion>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-3">
                    <div className="row align-items-center border border-2">
                        <div className="col-12 col-sm-5  border-end border- mt-2 mt-sm-02 ">
                            <FramerMotion>
                                <LayoutSwiper listData={demo6ImgList} />
                            </FramerMotion>
                        </div>
                        <div className="col-12 col-sm-7 ">
                            <FramerMotion>
                                <DemoList
                                    demoTitle={'TODOLIST 代辦清單'}
                                    demoData={demo6LinkList}
                                    handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                    frontEndTechList={demo6FrontEndTechList}
                                    backEndTechList={demo6BackEndTechList}
                                    description={demo6FunctionDescription}
                                />
                            </FramerMotion>
                        </div>
                    </div>
                </div>

                <div className="col-12  mt-3">
                    <div className="row align-items-center border border-2">
                        <div className="col-12 col-sm-5  border-end border- mt-2 mt-sm-02 ">
                            <FramerMotion>
                                <LayoutSwiper listData={demo4ImgList} />
                            </FramerMotion>
                        </div>
                        <div className="col-12 col-sm-7 ">
                            <FramerMotion>
                                <DemoList
                                    demoTitle={'記錄色碼'}
                                    demoData={demo4LinkList}
                                    handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                    frontEndTechList={demo4FrontEndTechList}
                                    backEndTechList={false}
                                    description={demo4FunctionDescription}
                                />
                            </FramerMotion>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-3">
                    <div className="row align-items-center border border-2">
                        <div className="col-12 col-sm-5 border-end border- mt-2 mt-sm-02 ">
                            <FramerMotion>
                                <LayoutSwiper listData={demo1ImgList} />
                            </FramerMotion>
                        </div>
                        <div className="col-12 col-sm-7 ">
                            <FramerMotion>
                                <DemoList
                                    demoTitle={'源點。線上網球購物中心'}
                                    demoData={demo1LinkList}
                                    handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                    frontEndTechList={demo1FrontEndTechList}
                                    backEndTechList={demo1BackEndTechList}
                                    description={demo1FunctionDescription}
                                />
                            </FramerMotion>
                        </div>
                    </div>
                </div>

                {/* <div className='col-12 mt-3'>
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
                </div> */}

                <div className="col-12 mt-3">
                    <div className="row  align-items-center border border-2">
                        <div className="col-12 col-sm-5  border-end border-2 mt-2 mt-sm-0 ">
                            <FramerMotion>
                                <LayoutSwiper listData={demo3ImgList} />
                            </FramerMotion>
                        </div>
                        <div className="col-12 col-sm-7 ">
                            <FramerMotion>
                                <DemoList
                                    demoTitle={'Spost+ 運動整合平台'}
                                    demoData={demo3LinkList}
                                    handleClickVideo={handleClickVideo} // 控制打開及記錄影片路徑
                                    frontEndTechList={demo3FrontEndTechList}
                                    backEndTechList={demo3BackEndTechList}
                                    description={demo3FunctionDescription}
                                />
                            </FramerMotion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeWorkSamplesSection;
