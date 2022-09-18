import Hero from "./Hero";
import Cardkegiatan from "./Cardkegiatam";
import Cardbusnis from "./Cardbusnis";
import hero1 from './../assets/hero1.jpg';
import hero2 from './../assets/scott-graham-5fNmWej4tAA-unsplash.jpg';
import hero3 from './../assets/headway-5QgIuuBxKwM-unsplash.jpg';
import hero4 from './../assets/asd (2).jpg';

const Maincontent =()=> {
    return (
        <div>
        <Hero />
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Treen Bisnis Masa Kini</h1>
                </div>
                
            </div>
            <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
                    <Cardbusnis image={hero1} judutext="Bisnis Akutansi" subtext="Disini Kita Diajarkan Bagaimana Cara Bisnis Akuntasi" />
                
               </div>
               <div className="col-lg-4 col-12">
                    <Cardbusnis image={hero2} judutext="Bisnis Menejer" subtext="Disini Kita Diajarkan Bagaimana Cara Bisnis Menejer"/>
                    
                </div>
                <div className="col-lg-4 col-12">
                    <Cardbusnis image={hero3} judutext="Bisnis Makanan" subtext="Disini Kita Diajarkan Bagaimana Cara Bisnis Makanan"/>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Kegiatan</h1>
                </div>
                <div className="col-12 my-3">
                    <Cardkegiatan image={hero4} subtext="Ini adalah Kegiatan Bisnis Online"/ >
                </div>
            </div>
        </div>
        </div>
    
    )

}

export default Maincontent;