import { AiOutlineArrowUp } from 'react-icons/ai';

function GoTopButton({ onClick }) {
    return (
        <>
            {/* 因為 swiper 運行會導致 window.scroll 受影響，可能按下當好處發時回到頂部會失效 */}
            <span role='button' className='goTop-btn' onClick={onClick}>
                <AiOutlineArrowUp style={{ width: `25px`, height: `25px`, userSelect: 'none' }} />
                <span style={{ userSelect: 'none' }}>TOP</span>
            </span>
        </>
    );
}

export default GoTopButton;
