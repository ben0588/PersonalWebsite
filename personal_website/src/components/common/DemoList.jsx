import { Link } from 'react-router-dom';
import List from './List';

const DemoList = ({ demoTitle, demoData, frontEndTechList, backEndTechList, handleClickVideo }) => {
    return (
        <>
            <h4 className='fs-6 fw-bolder mt-3 mb-0 py-1'>作品名稱與連結：</h4>
            <h4 className='text-primary fw-bolder mb-1'>{demoTitle}</h4>
            <ul className='demo-list-style'>
                {demoData.length > 0
                    ? demoData.map((item, index) => (
                          <li key={index}>
                              <span className='d-flex align-items-center'>
                                  <span className='text-dark'>{item.title}</span>
                                  {item.text === '本站觀看' ? (
                                      <button
                                          className='btn btn-none p-0 link-primary'
                                          onClick={
                                              () => handleClickVideo(item.videoPath) // 打開並紀錄名稱}
                                          }
                                      >
                                          {item.text}
                                      </button>
                                  ) : item.path ? (
                                      <Link to={item.path} target='_block' className={`text-decoration-none`}>
                                          {item.text}
                                      </Link>
                                  ) : (
                                      <span className='text-dark'> {item.text}</span>
                                  )}
                              </span>
                          </li>
                      ))
                    : '資料異常'}
            </ul>
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
