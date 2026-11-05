import './foter.css'
import e1 from "../../img/E1.png";
import e2 from "../../img/E2.png";
import e3 from "../../img/E3.png";


export default function Footer() {
  return (
    <div>
        <footer class="footer">

            <div class="footer-container">

                
                <div class="footer-brand">
                    <div class="logo">Rivo</div>

                    <h3 class="social-title">Social Media</h3>

                    <div class="social-icons">
                        <a href="#" aria-label="Facebook">
                            <img src={e1} alt="" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <img src={e2} alt="" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <img src={e3} alt="" />
                        </a>
                    </div>
                </div>

                <div class="footer-column">
                    <h3>SHOP</h3>
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Releases</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3>COMPANY</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                <div class="newsletter">
                    <h3>STAY UP TO DATE</h3>

                    <form class="subscribe">
                        <input type="email" placeholder="Enter your email" required/>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>

            </div>

        
            <div class="footer-bottom">
                <div class="footer-line"></div>

                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
            </div>

        </footer>
    </div>
  )
}
