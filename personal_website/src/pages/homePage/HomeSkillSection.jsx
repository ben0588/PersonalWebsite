import FramerMotion from '../../components/common/FramerMotion';
import List from '../../components/common/List';

const HomeSkillSection = () => {
    const reactSkillList = [
        { text: '使用 Vite、CRA 開發 React 專案' },
        { text: '使用 React-Router-Dom 管理路由與身分驗證' },
        { text: '使用 Redux-toolkit 設置全站跨元件狀態管理' },
        { text: '使用 RTK Query 管理 API 數據獲取和緩存' },
        { text: '使用 React-Hook-Form 管理與驗證表單資料' },
    ];

    const javaScriptSkillList = [
        { text: '了解並使用 JavaScript ES6+ 特性' },
        { text: '使用 Axios 透過 AJAX 取得 JSON 資料' },
        { text: '處理非同步 Promise、async/await' },
        { text: '學習 TypeScript 強型別擴充' },
    ];

    const nodeSkillList = [
        { text: '使用 Express.js 建立 Web Server 應用' },
        { text: '設置 RESTful API 風格開發 Route 接口' },
        { text: '使用 jsonwebtoken 設置 JWT 用戶權限驗證' },
        { text: '使用 express 連接 MySQL 資料庫操作 CRUD' },
        { text: '使用 swagger-ui-express 產生線上 API 文件' },
    ];

    const webLayoutSkillList = [
        { text: '瞭解 HTML5 / CSS3 / 實作原生 RWD' },
        { text: '使用 SCSS 開發網站樣式管理與預處理' },
        { text: '使用 Bootstrap 5 樣式並實作 RWD 響應式' },
        { text: '學習 Tailwind.css 熱門 CSS 框架技術' },
        { text: '使用 ESLint、Prettier 管理程式法風格與品質' },
    ];

    return (
        <div className="mt-4 mt-sm-5">
            <FramerMotion>
                <h3 className="fw-bolder">
                    技能<span className="text-primary fs-4 ms-2">Skill</span>
                </h3>
            </FramerMotion>
            <div className="row">
                <div className="col-12 col-sm-6 ">
                    <FramerMotion>
                        <List
                            listTitle="React.js"
                            listData={reactSkillList}
                            border={true}
                            margin={'mb-3'}
                            padding={'py-2'}
                        />
                    </FramerMotion>
                </div>
                <div className="col-12 col-sm-6">
                    <FramerMotion>
                        <List
                            listTitle="JavaScript"
                            listData={javaScriptSkillList}
                            border={true}
                            margin={'mb-3'}
                            padding={'py-2'}
                        />
                    </FramerMotion>
                </div>
                <div className="col-12 col-sm-6">
                    <FramerMotion>
                        <List
                            listTitle="Node.js"
                            listData={nodeSkillList}
                            border={true}
                            margin={'mb-3'}
                            padding={'py-2'}
                        />
                    </FramerMotion>
                </div>
                <div className="col-12 col-sm-6">
                    <FramerMotion>
                        <List
                            listTitle="Web Layout"
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
