import FramerMotion from '../../components/common/FramerMotion';
import List from '../../components/common/List';

const HomeWorkExperienceSection = () => {
    const workExperienceValue1 = [
        { text: '完成上級待辦事項' },
        { text: '即時處理客戶提問、客訴案件' },
        { text: '定期追蹤待處理案件' },
        { text: '協助測試待上線案件並提交建議' },
        { text: '與各部門溝通完成客戶提案' },
        { text: '定期製作報表' },
    ];

    const workExperienceValue2 = [
        { text: '線上即時文字處理客戶訂單、查詢及處理一般事宜' },
        { text: '每日統計數據製作分析' },
        { text: '派發網站活動獎勵' },
        { text: '優惠活動構想排版' },
        { text: '監控系統運作情況' },
        { text: 'PC/H5官網用戶體驗優化建議' },
        { text: 'PC/處理客戶客訴專案' },
    ];

    const workExperienceValue3 = [
        { text: '線上即時文字處理客戶訂單、查詢及處理一般事宜' },
        { text: '每日統計數據製作分析' },
        { text: '派發網站活動獎勵' },
        { text: '優惠活動構想排版' },
        { text: '監控系統運作情況' },
        { text: 'PC/H5官網用戶體驗優化建議' },
        { text: 'PC/處理客戶客訴專案' },
    ];

    const workExperienceList = [
        {
            company: '長青資訊股份有限公司',
            during: '2019/6 ~ 2022/3',
            duringSum: '( 2年10個月 )',
            position: '系統客服',
            dataList: workExperienceValue1,
        },
        {
            company: '酷番茄娛樂',
            during: '2018/10 ~ 2019/3',
            duringSum: '( 6個月 )',
            position: '在線客服',
            dataList: workExperienceValue2,
        },
        {
            company: '炘樂有限公司',
            during: '2017/4 ~ 2018/9',
            duringSum: '( 1年6個月 )',
            position: '在線客服',
            dataList: workExperienceValue3,
        },
    ];

    return (
        <div className='mt-5 mt-sm-5 '>
            <h3 className='fw-bolder mb-3'>
                <FramerMotion>
                    工作經歷<span className='text-primary fs-4 ms-2'>Work Experience</span>
                </FramerMotion>
            </h3>
            <div>
                {workExperienceList.map((item, index) => (
                    <div key={index} className='border-top border-2'>
                        <FramerMotion>
                            <div className='d-flex flex-column flex-sm-row align-items-start align-items-sm-center mt-3 mb-1 '>
                                <h5 className='d-inline-block fw-bolder mb-0 me-2'>{item.company}</h5>
                                <span className='fw-bolder fs-6 me-2'> | {item.position} </span>
                                <small className='text-muted'>
                                    {item.during} {item.duringSum}
                                </small>
                            </div>
                        </FramerMotion>
                        <FramerMotion>
                            <ul className='mb-4'>
                                {item.dataList.map((items, i) => (
                                    <li key={i}>{items.text}</li>
                                ))}
                            </ul>
                        </FramerMotion>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default HomeWorkExperienceSection;
