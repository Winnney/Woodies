import Logo from "../img/Logo.png"
import "./Footer.css"

const Footer = () => {
    return ( 
        <footer>
            <hr />
            <div>
                <img src={Logo} alt="" />
                <p>9568XXXXXX</p>
                <a href="woodies@gmail.com">woodies@gmail.com</a>
                <p>Uttar Pradesh, India</p>
            </div>
            <p className="copyright">© 2020 WOODIES</p>
        </footer>
     );
}
 
export default Footer;