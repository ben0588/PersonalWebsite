import FramerMotion from '../../components/common/FramerMotion';
import List from '../../components/common/List';

const HomeWorkExperienceSection = () => {
    const workExperienceValue1 = [
        { text: '與客戶進行即時文字溝通，解決客戶的問題或提供相關資訊。' },
        { text: '分析客戶的問題，並協助他們解決技術或產品相關的問題。' },
        {
            text: ' 與其他部門（如技術支援、銷售、商品等）進行有效溝通，以處理客戶問題。',
        },
    ];

    const workExperienceValue2 = [
        { text: '及時回應客戶的查詢、問題和要求，提供有用的信息和解決方案。' },
        { text: ' 維護客戶關係，提供優質的客戶服務，以提高客戶滿意度。' },
    ];

    const workExperienceValue3 = [
        { text: '線上即時文字處理客戶訂單、查詢及處理一般事宜。' },
        {
            text: '協助客戶解決在使用產品或服務中遇到的問題，並及時跟進問題的解決情況。',
        },
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
        <div className="mt-5 mt-sm-5 ">
            <h3 className="fw-bolder mb-3">
                <FramerMotion>
                    工作經歷
                    <span className="text-primary fs-4 ms-2">
                        Work Experience
                    </span>
                </FramerMotion>
            </h3>
            <div>
                {workExperienceList.map((item, index) => (
                    <div key={index} className="border-top border-2">
                        <FramerMotion>
                            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mt-3 mb-1 ">
                                <h5 className="d-inline-block fw-bolder mb-0 me-2">
                                    {item.company}
                                </h5>
                                <span className="fw-bolder fs-6 me-2">
                                    {' '}
                                    | {item.position}{' '}
                                </span>
                                <small className="text-muted">
                                    {item.during} {item.duringSum}
                                </small>
                            </div>
                        </FramerMotion>
                        <FramerMotion>
                            <ul className="mb-4">
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
