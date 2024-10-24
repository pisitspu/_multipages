import './home.css'

function Home() {
    return (
        <div className="home-container">
            <div className='home-items-container'>
                <img src="./human.jpg" alt="" className='user-img' />
                <span style={{color: 'black'}} className='title-main '><h1> <b>MY PROFILE</b>
                    &nbsp;
                    <span className='bi bi-person-fill'></span>
                </h1>
                    <span className='persona'>
                        <span>
                            <p>SPU-SIT-CSI 66</p>
                            <h3>ชื่อ : พิสิษฐ์ จารุเลิศไมตรี</h3>
                            <h3>อายุ : 21 ปี</h3>
                            <h3>รหัสนักศึกษา : 66014855</h3>
                            <h3>ลำดับการศึกษา : ปริญญาตรี</h3>
                        </span>
                        <span>
                            <h2>
                                <b>
                                    ประวัติการศึกษา &nbsp;
                                    <span className='bi bi-book-half'></span>
                                </b>
                            </h2>
                            <p>educational record</p>
                            <h3 style={{ textAlign: 'center' }}>ประถมศึกษา</h3>
                            <h5 style={{ textAlign: 'center' }}>โรงเรียน ชัยพิทยพัฒน์</h5>
                            <h3 style={{ textAlign: 'center' }} className='bi bi-arrow-down'></h3>
                            <h3 style={{ textAlign: 'center' }}>มัธยมศึกษา</h3>
                            <h5 style={{ textAlign: 'center' }}>โรงเรียน ทวีธาภิเศก</h5>
                            <h3 style={{ textAlign: 'center' }} className='bi bi-arrow-down'></h3>
                            <h3 style={{ textAlign: 'center' }}>อุดมศึกษา</h3>
                            <h5 style={{ textAlign: 'center' }}>มหาวิทยาลัย ศรีปทุม</h5>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    );
}

export default Home;