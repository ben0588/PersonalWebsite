import { useContext } from 'react';
import DataContext from './DataContext';
import { AiOutlineClose } from 'react-icons/ai';

const BounceVideo = ({ mediaName, isModalOpen, setIsModalOpen }) => {
    return (
        <div className='fixed-top d-flex justify-content-center align-items-center bg bg-dark bg-opacity-50 vh-100 vw-100 '>
            <div className='container position-relative d-flex flex-column align-items-center '>
                <AiOutlineClose
                    role='button'
                    tabIndex='0'
                    style={{ width: `50px`, height: `50px` }}
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className='link-primary-fill-hover position-absolute top-0 end-0 '
                />
                <video width='900' height='500' controls autoPlay muted className='mt-5 mw-100'>
                    <source src={mediaName} type='video/mp4' />
                </video>
            </div>
        </div>
    );
};
export default BounceVideo;
