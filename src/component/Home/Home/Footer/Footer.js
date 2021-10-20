import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-primary py-2">
            <Container>
            <div class="container">
             <div class="row">
                 
                <div className="col footer text-white">
                <h3>Your Website</h3>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
                 </div>
                <div className="col recognition">
                    <h3 className="mt-2 text-white">Recognition</h3>
                 <img src="https://www.cherrycreekpeds.com/images/5280_TopDocsLogo-2021-4C-WEB-LG.png" alt="" />
                 <img src="https://lh3.googleusercontent.com/proxy/PAZ1WJHh1bPZ2XXF_YCSnor9kfwM0e0nwfF2dlQTbt8i7km72gAHSetSn_8dBHpKulS5Ulmt5RzbnDj9Sx-n6R_5c95e6gGkWLkoAgZozGt4bl0vudNPQUeFIMp9PdglciY" alt="" />
                 <img src="https://raed.academy/wp-content/uploads/2019/03/logo-World-Law-Congress-dstNtc.jpg" alt="" />
                </div>
                 <div className="col img text-white">
                     <h3 className="mt-2">Shimla hospital</h3>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHRc0PdDCEePdwwRKReiRxDAcg1xmpz31mXrZGDZn5eTUJAl2_co23GySiSYdpkZg8fI&usqp=CAU" alt="" />
                </div>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;