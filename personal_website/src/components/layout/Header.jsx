import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../images/logo/website-logo-1.png';
const Header = () => {
    const list = [
        {
            title: '首頁',
            path: '/',
        },
        {
            title: '作品集',
            path: '/workSamples',
        },
        {
            title: '關於我',
            path: '/about',
        },
    ];
    return (
        <header className='container sticky-top d-flex justify-content-between align-items-center header-bg-filter flex-column flex-sm-row  py-2 py-sm-3'>
            <h1 className='mb-0'>
                <Link to='/'>
                    <img src={logoImg} alt='logo' className='header-logo-img' />
                </Link>
            </h1>
            <nav className='mt-1 mt-sm-0'>
                <ul className='list-unstyled d-flex justify-content-around align-items-center mb-0'>
                    {list.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.path} className='link-primary text-decoration-none fs-5 fw-bolder p-3 '>
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
export default Header;
