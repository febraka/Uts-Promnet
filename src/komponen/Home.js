import React from 'react';
import './Home.css';
import bg from '../asset/fotosaya.jpeg'

const Home = () => {
    return(
        <section id='Intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Febra Karunia Akbar</span> <br /></span>
                <p className='introPara'>Pendidikan Ilmu Komputer 2022</p>
                <p className='introPara'>Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam</p>
                <p className='introPara'>Universitas Pendidikan Indonesia</p>
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>
    );
}

export default Home;
