import { Row, Col,Container} from 'react-bootstrap';
import logo1 from "../assets/logo1.png";
import { FaTwitter, FaFacebook, FaPinterest, FaInstagram, FaMapMarker, FaPhoneSquare, FaEnvelope } from 'react-icons/fa';
import { PiMapPinArea } from "react-icons/pi";

function Footer(){
    return(
        <div className='footerbg'>
        <div className="footer">
               <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                    <div className='f1'>
                        <img src={logo1} alt=""  className='footerlogo'/>
                        <p className='footerp1'>We’re providing every day fresh and quality products for you.</p>
                        <div>
                            <ul className='footerul'>
                                <li className='ficon1'>
                                    <FaTwitter/></li>
                                <li className='ficon1'>
                                    <FaFacebook /></li>
                                <li className='ficon1'><FaPinterest/></li>
                                <li className='ficon1'><FaInstagram/></li>
                            </ul>
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                    <div className='f2'>
                        <ul>
                            <li className='footerp2'>Customer Care</li>
                            <li className='footerp3'>About Us</li>
                            <li className='footerp3'>Our Services</li>
                            <li className='footerp3'>Cancellation & Refund</li>
                            <li className='footerp3'>Terms & Conditions</li>
                            <li className='footerp3'>Contact Us</li>
                        </ul>
                    </div>
                     </Col>
                     <Col sm={12} md={6} lg={3}>
                     <div className='f3'>
                         <PiMapPinArea className='map'/>
                        <ul className='ad1'>
                            <li>Sevalpatti vizhakku</li>
                            <li>Kooraikundu-626003</li>
                            <li>Tamil Nadu </li>
                            <li>Mobile:1234567890</li>
                            <button className='footerbtn'>View Map</button>
                        </ul>
                     </div>
                     </Col>
                     <Col sm={12} md={6} lg={3}>
                        <div className="f4">
                            <PiMapPinArea className='map'/>
                        <ul className='ad2'>
                            <li> Pethanatchi Nagar</li>
                            <li>Main Road</li>
                            <li>Virudhunagar-626001</li>
                            <li>Mobile:1234567890</li>
                            <button className='footerbtn'>View Map</button>
                        </ul>
                        </div>
                     </Col>
                </Row>
                <div >
                    <hr className='footerhr'/>
                    <p className='footerp7'>© Copyright reserved by aila cakes & cafe</p>
                </div>
               </Container>
           
        </div>
        </div>
    )
}
export default Footer;




