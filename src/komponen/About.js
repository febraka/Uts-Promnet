import React from "react";
import './About.css';
import foto from '../asset/Foto Saya.jpeg'

const About=()=>{
    return(
        <section className="about_section" id = "about">
            <h2 className="section_title">About Me</h2>

            <div className="about_container">
                <img src={foto} alt="" className="about_img" />

                <div className="about_data">
                    <p className="about_description">
                    Nama saya Febra Karunia Akbar dari Pendidikan Ilmu Komputer Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam 
                    Universitas Pendidikan Indonesia. Saya lahir di Sukabumi pada tanggal 14 Februari 2004 dan sekarang saya berumur 
                    19 tahun. Hobi saya adalah bermain game. Keterampilan saya adalah bermain gitar solo. Saya masuk ke
                    universitas ini melalui jalur sbmptn. Saya belajar berbulan-bulan untuk bisa masuk ke universitas ini dan alhamdulilah
                    saya sedang menjalankan pendidikan di semester 3
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;