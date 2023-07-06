import List from '../../components/common/List';

const HomeSkillSection = () => {
    const reactSkillList = [
        { text: '使用 function Hook 架構開發' },
        { text: '使用 create-react-app 開發專案' },
        { text: '使用 react-layout 設置網站佈局' },
        { text: '使用 react-router-dom 管理路由與身分驗證' },
        { text: '使用 useContext & useReducer 管理全站狀態' },
        { text: '使用 react-hook-form 管理與驗證表單資料' },
        { text: '使用 styled-components - CSS in Js 管理元件樣式' },
    ];

    const javaScriptSkillList = [
        { text: '了解並使用 JavaScript ES6+ 特性' },
        { text: '透過 AJAX 做 API 資料串接' },
        { text: '處理非同步 Promise、async/await' },
        { text: '使用 Axios 套件呼叫 API 取得資料' },
        { text: '使用 Aos 套件設置視差滾動' },
    ];

    const nodeSkillList = [
        { text: '使用 express.js 建立 Web Server 應用' },
        { text: '設置 RESTful API 風格開發 Route 接口' },
        { text: '使用 jsonwebtoken 設置 JWT 用戶權限驗證' },
        { text: '使用 express-session 驗證管理者權限' },
        { text: '使用 express 連接 MySQL 資料庫操作 CRUD' },
        { text: '使用 swagger-ui-express 產生線上 API 文件' },
    ];

    const webLayoutSkillList = [
        { text: '瞭解 HTML5 / CSS3 網站設計' },
        { text: '手刻 RWD 響應式網站' },
        { text: '使用 SCSS  開發網站樣式管理' },
        { text: '了解 SMACSS / OOCSS 開發設計模式' },
        { text: '具備 Bootstrap 5 使用經驗' },
        { text: '使用 Prettier 優化 Coding Style' },
        { text: '使用 Postman 測試 API' },
        { text: '部屬 GitHub Pages 靜態網頁' },
    ];
    return (
        <div className='mt-4 mt-sm-5'>
            <h3 className='fw-bolder'>
                技能<span className='text-primary fs-4 ms-2'>Skill</span>
            </h3>
            <div className='row'>
                <div className='col-12 col-sm-6 '>
                    <List
                        listTitle='React.js'
                        listData={reactSkillList}
                        border={true}
                        margin={'mb-3'}
                        padding={'py-2'}
                    />
                </div>
                <div className='col-12 col-sm-6'>
                    <List
                        listTitle='JavaScript'
                        listData={javaScriptSkillList}
                        border={true}
                        margin={'mb-3'}
                        padding={'py-2'}
                    />
                </div>
                <div className='col-12 col-sm-6'>
                    <List listTitle='Node.js' listData={nodeSkillList} border={true} margin={'mb-3'} padding={'py-2'} />
                </div>
                <div className='col-12 col-sm-6'>
                    <List
                        listTitle='Web Layout'
                        listData={webLayoutSkillList}
                        border={true}
                        margin={'mb-3'}
                        padding={'py-2'}
                    />
                </div>
            </div>
        </div>
    );
};
export default HomeSkillSection;
