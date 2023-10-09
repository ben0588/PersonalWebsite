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
        {
            title: 'GitHub',
            path: 'https://github.com/ben0588',
            icon: <BsGithub />,
            text: 'GitHub連結',
        },
        {
            title: 'Email',
            path: 'energy9527z@gmail.com',
            icon: <BiLogoGmail />,
            text: '聯絡信箱',
        },
        {
            title: '筆記目錄',
            path: 'https://hackmd.io/@bGZ4YNduQJmEb3VN_d3Vng/SkDQJqmm3',
            icon: <HiDocumentText />,
            text: '個人筆記目錄',
        },
        {
            title: 'CodePen',
            path: 'https://codepen.io/energy95272z',
            icon: <FaCodepen />,
            text: '更多練習範本',
        },
    ];
    return (
        <div className="d-flex flex-column  align-items-center mt-4">
            <img
                src={personal_photos2}
                alt=""
                className="personal-photos-img border border-2 border-secondary rounded-circle"
            />
            <h2 className="fs-2 my-2">
                張勝翔 <span className="text-secondary fs-3">Ben</span>
            </h2>
            <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row col col-sm-6 mx-auto">
                <motion.ul
                    className="list-unstyled me-3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                >
                    {list.map((item, index) => (
                        <li key={index}>
                            <Link
                                // 判斷若是 email 點擊等同發送郵件
                                to={
                                    item.title === 'Email'
                                        ? `mailto:${item.path}`
                                        : item.path
                                }
                                className="d-flex align-items-center text-decoration-none link-dark"
                                target="_blank"
                                title={item.text}
                            >
                                <span className="d-flex align-items-center pe-2">
                                    {item.icon}
                                </span>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
                <motion.p
                    className="border p-3 "
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                >
                    Hi，我叫張勝翔(Ben)，南投人現居台中，擁有細心、耐心的特質，2022年轉職挑戰前端工程師，曾參加過實體課程、線上課程、閱讀相關書籍，並通過個人專案來應用所學知識，也持續學習不同技能。
                </motion.p>
            </div>
        </div>
    );
};
export default HomePersonalInfoSection;
