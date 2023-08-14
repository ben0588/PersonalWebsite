import FramerMotion from '../../components/common/FramerMotion';
import List from '../../components/common/List';

const HomeSkillSection = () => {
    const reactSkillList = [
        { text: '使用 Function Hook 架構開發' },
        { text: '使用 Vite、CRA 開發 React 專案' },
        { text: '使用 React-Router-Dom 管理路由與身分驗證' },
        { text: '使用 useContext & useReducer 管理全站資料狀態' },
        { text: '使用 Redux-toolkit 管理全站資料狀態' },
        { text: '使用 React-Hook-Form 管理與驗證表單資料' },
    ];

    const javaScriptSkillList = [
        { text: '了解並使用 JavaScript ES6+ 特性' },
        { text: '透過 AJAX 做 API 資料串接' },
        { text: '處理非同步 Promise、async/await' },
        { text: '使用 Axios 套件呼叫 API 取得資料' },
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
        { text: '使用 Git 版本控制' },
    ];

    return (
        <div className='mt-4 mt-sm-5'>
            <FramerMotion>
                <h3 className='fw-bolder'>
                    技能<span className='text-primary fs-4 ms-2'>Skill</span>
                </h3>
            </FramerMotion>
            <div className='row'>
                <div className='col-12 col-sm-6 '>
                    <FramerMotion>
                        <List
                            listTitle='React.js'
                            listData={reactSkillList}
                            border={true}
                            margin={'mb-3'}
                            padding={'py-2'}
                        />
                    </FramerMotion>
                </div>
                <div className='col-12 col-sm-6'>
                    <FramerMotion>
                        <List
                            listTitle='JavaScript'
                            listData={javaScriptSkillList}
                            border={true}
                            margin={'mb-3'}
                            padding={'py-2'}
                        />
                    </FramerMotion>
                </div>
                <div className='col-12 col-sm-6'>
                    <FramerMotion>
                        <List
                            listTitle='Node.js'
                            listData={nodeSkillList}
                            border={true}
                            margin={'mb-3'}
                            padding={'py-2'}
                        />
                    </FramerMotion>
                </div>
                <div className='col-12 col-sm-6'>
                    <FramerMotion>
                        <List
                            listTitle='Web Layout'
                            listData={webLayoutSkillList}
                            border={true}
                            margin={'mb-3'}
                            padding={'py-2'}
                        />
                    </FramerMotion>
                </div>
            </div>
        </div>
    );
};
export default HomeSkillSection;
