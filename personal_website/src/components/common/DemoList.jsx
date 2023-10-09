import { Link } from 'react-router-dom';
import List from './List';

const DemoList = ({
    demoTitle,
    demoData,
    frontEndTechList,
    description,
    backEndTechList,
    handleClickVideo,
}) => {
    return (
        <>
            <h4 className="fs-6 fw-bolder mt-3 mb-0 py-1">作品名稱：</h4>
            <h4 className="text-primary fw-bolder mb-1">{demoTitle}</h4>
            <div className="table-responsive w-100">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>項目</th>
                            <th>連結</th>
                        </tr>
                    </thead>
                    <tbody>
                        {demoData?.length
                            ? demoData.map((item, index) => (
                                  <tr key={index}>
                                      <td className="text-nowrap">
                                          {item.title}
                                      </td>
                                      <td className="text-wrap">
                                          {item.text === '本站觀看' ? (
                                              <button
                                                  className="btn btn-none p-0 link-primary"
                                                  onClick={
                                                      () =>
                                                          handleClickVideo(
                                                              item.videoPath,
                                                          ) // 打開並紀錄名稱}
                                                  }
                                              >
                                                  {item.text}
                                              </button>
                                          ) : item.path ? (
                                              <Link
                                                  to={item.path}
                                                  target="_block"
                                                  className={`text-decoration-none`}
                                              >
                                                  {item.text}
                                              </Link>
                                          ) : (
                                              <span className="text-dark">
                                                  {' '}
                                                  {item.text}
                                              </span>
                                          )}
                                      </td>
                                  </tr>
                              ))
                            : '資料不存在或異常'}
                    </tbody>
                </table>
            </div>
            {description?.length && (
                <List
                    listTitle={'網站功能介紹'}
                    listData={description}
                    border={false}
                    margin={'mb-0'}
                    fontSize={'fs-6 fw-bolder'}
                    padding={'py-1'}
                ></List>
            )}
            <List
                listTitle={'前端使用技術：'}
                listData={frontEndTechList}
                border={false}
                margin={'mb-0'}
                fontSize={'fs-6 fw-bolder'}
                padding={'py-1'}
            ></List>

            {backEndTechList.length > 0 && (
                <List
                    listTitle={'後端使用技術：'}
                    listData={backEndTechList}
                    border={false}
                    margin={'mb-0'}
                    fontSize={'fs-6 fw-bolder'}
                    padding={'py-1'}
                ></List>
            )}
        </>
    );
};
export default DemoList;
