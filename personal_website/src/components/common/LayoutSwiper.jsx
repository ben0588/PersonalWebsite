import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // 導入 Swiper 各指定功能模板
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const LayoutSwiper = ({ listData }) => {
    return (
        <div className="h-100">
            <Swiper
                // 更改兩側箭頭顏色 + 底部分頁顏色
                style={{
                    '--swiper-navigation-color': '#0984e3',
                    '--swiper-navigation-size': '30px',
                    '--swiper-pagination-color': '#0984e3',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: `500px`,
                }}
                modules={[Autoplay, Navigation, Pagination]} // 引入動畫模組
                autoplay={{
                    delay: 4000, // 延遲時間
                    disableOnInteraction: false, // 手動滑動後，自動播放仍有效
                    pauseOnMouseEnter: true, // 滑鼠懸停時停止
                }}
                grabCursor={true} // 支持拖曳移動
                navigation={true} // 顯示左右導航按鈕
                pagination={{ clickable: true }} // 開啟下方小圓圈
                slidesPerView={1} // 起始可以看到幾張
                spaceBetween={20} // 每塊間隔
            >
                {listData.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="mySwiper ">
                            <img
                                src={item.img}
                                className="swiper-demo-img"
                                alt={item.alt}
                                // style={{ height: `500px` }}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
export default LayoutSwiper;
