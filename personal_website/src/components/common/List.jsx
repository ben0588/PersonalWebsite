const List = ({ listTitle, listData, border, fontSize, margin, padding }) => {
    return (
        <div>
            {/* 增加判斷是否要底線 */}
            <h4 className={`${border ? 'border-bottom border-2 border-primary' : ''} ${fontSize} ${padding} ${margin}`}>
                {listTitle}
            </h4>
            <ul>
                {listData.length > 0 ? listData.map((item, index) => <li key={index}>{item.text}</li>) : '資料異常'}
            </ul>
        </div>
    );
};
export default List;
