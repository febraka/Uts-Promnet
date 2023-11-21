import React from 'react';
import './Home.css';
import bg from '../asset/fotosaya.jpeg'

const Home = () => {
    return(
        <section id='Home_intro'>
            <div className='Home_content'>
                <span className='hello'>Hello,</span>
                <span className='Home_text'>I'm <span className='Home_name'>Febra Karunia Akbar</span> <br /></span>
                <p className='Home_def'>Pendidikan Ilmu Komputer 2022</p>
                <p className='Home_def'>Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam</p>
                <p className='Home_def'>Universitas Pendidikan Indonesia</p>
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>
    );
}

export default Home;
