import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { FaCodepen } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import personal_photos2 from '../../images/personal/personal-photos-2.jpg';
import Modal from '../../components/common/Modal';
import { motion } from 'framer-motion';
const HomePersonalInfoSection = () => {
    const list = [
        { title: 'Github', path: 'https://github.com/ben0588', icon: <BsGithub /> },
        { title: 'Email', path: 'energy9527z@gmail.com', icon: <BiLogoGmail /> },
        { title: 'CodePen', path: 'https://codepen.io/energy95272z', icon: <FaCodepen /> },
        { title: 'HackMD', path: 'https://hackmd.io/@bGZ4YNduQJmEb3VN_d3Vng/SkDQJqmm3', icon: <HiDocumentText /> },
    ];
    return (
        <div className='d-flex flex-column  align-items-center mt-4'>
            <img
                src={personal_photos2}
                alt=''
                className='personal-photos-img border border-2 border-secondary rounded-circle'
            />
            <h2 className='fs-2 my-2'>
                張勝翔 <span className='text-secondary fs-3'>Ben</span>
            </h2>
            <div className='d-flex justify-content-center align-items-center flex-column flex-sm-row col col-sm-6 mx-auto'>
                <motion.ul
                    className='list-unstyled me-3'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                >
                    {list.map((item, index) => (
                        <li key={index}>
                            <Link
                                // 判斷若是 email 點擊等同發送郵件
                                to={item.title === 'Email' ? `mailto:${item.path}` : item.path}
                                className='d-flex align-items-center text-decoration-none link-dark'
                                target='_blank'
                            >
                                <span className='d-flex align-items-center pe-2'>{item.icon}</span>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
                <motion.p className='border p-3 ' initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                    Hi，我叫張勝翔(Ben)，南投人現居台中，個性慢熱，MBTI人格：INFJ，過去從事客服相關工作，2022年轉職挑戰前端工程師，歷經政府實體課程及持續自學。
                </motion.p>
            </div>
        </div>
    );
};
export default HomePersonalInfoSection;
