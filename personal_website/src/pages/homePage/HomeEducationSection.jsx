const HomeEducationSection = () => {
    const educationList = [
        { schoolName: '南開科技大學', facultyName: '資訊管理系', during: '2010/6 ~ 2014/6' },
        { schoolName: '南投高商', facultyName: '資料處理科', during: '2010/6 ~ 2014/6' },
    ];

    return (
        <div className='mt-4 mt-sm-5'>
            <h3 className='fw-bolder mb-3'>
                學歷<span className='text-primary fs-4 ms-2'>Education</span>
            </h3>
            <ul className='demo-list-style row  m-0 '>
                {educationList.map((item, index) => (
                    <li key={index} className='col p-0 p-sm-2'>
                        <h5 className='fw-bolder fs-4 text-dark m-0'>{item.schoolName}</h5>
                        <p className='fw-bolder fs-5 text-dark m-0'>{item.facultyName}</p>
                        <small className='text-muted'>{item.during}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default HomeEducationSection;
