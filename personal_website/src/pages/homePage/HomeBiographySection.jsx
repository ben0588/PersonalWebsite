import FramerMotion from '../../components/common/FramerMotion';

const HomeBiographySection = () => {
    const biographyTitleList = [
        { id: 1, title: '【 關於我 】' },
        { id: 2, title: '【 求學經歷 】' },
        { id: 3, title: '【 兵役經歷 】' },
        { id: 4, title: '【 工作經歷 】' },
        { id: 5, title: '【 未來規劃 】' },
    ];
    const biographyTextList = [
        {
            id: 1,
            text: '出生於1992年，南投人，天蠍座O型，個性慢熱，興趣聽音樂、影集',
        },
        {
            id: 2,
            text: '高中就讀夜校半工半讀，大學就讀南開科技大學資管系，參加網球社擔任副社長，大四擔任團隊專題組長，了解溝通協調重要性',
        },
        {
            id: 3,
            text: '於2015年8月完成一年兵役，在期間經歷過新訓、通訊專長訓、下基地等多種體驗，學習到對於所負責的項目要保持責任心，也要全心全力完成目標，及獨立面對問題時要勇敢面對，並且尋找解決方式，約束自我行為，以及與同袍間相處及互助。',
        },
        {
            id: 4,
            text: '退伍後前後經歷製造業、服務業，2017進入客服工作，協助用戶解決操作問題及各式疑難雜症，2019年更有機會接觸其他部門( RD、PM、MIS )，接觸API相關問題，使用 postman 協助確認問題，也對網頁開發有了更多興趣',
        },
        {
            id: 5,
            text: '於2022年進入「資策會-全端網站開發養成班」，從零開始學習當前開發網站技術：HTML、CSS、JavaScript、jQuery、React，後端: PHP、node.js、Laravel，資料庫：MySQL，在長達約四個月全職學習後，與團隊開發作品，為了更加強自我技術，開始接觸更多線上教學，更專精於前端開發技術，也透過 Udemy、Youtube 教學，並且挑戰從零開始架設個人專案，期許未來進入職場更強化不足的部分，學習更多不同的技術',
        },
    ];

    return (
        <div className="mt-3 mt-sm-5">
            {/* <FramerMotion>
                <h3 className='fw-bolder mb-3'>
                    自傳<span className='text-primary fs-4 ms-2'>Biography</span>
                </h3>
            </FramerMotion>
            <div className='w-100 border border-2 p-3'>
                <FramerMotion>
                    {biographyTitleList.map((items, index) => (
                        <p key={index} className='mt-2'>
                            {biographyTextList.map((item, i) => (
                                <span key={i}>
                                    {items.id === item.id ? (
                                        <>
                                            <span className='d-block mb-1'>{items.title}</span>
                                            <span>{item.text}</span>
                                        </>
                                    ) : null}
                                </span>
                            ))}
                        </p>
                    ))}
                </FramerMotion>
            </div> */}
        </div>
    );
};
export default HomeBiographySection;
