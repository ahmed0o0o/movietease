import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => ({
    render: function() {
      return (
        <div className="footerer">
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6 f-c">
                  <div className="f-logo">
                    <img style={{width:"100px"}} src="/images/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="logo" />
                    <span className="f-brand">MovieTease</span>
                  </div>
                </div>
                <div className="col-md-4 f-c">
                  <div className="f-icons f-link">
                    <img src="/images/fb.png" alt="facebook" />
                    <img src="/images/twitter.png" alt="Twitter" />
                    <img src="/images/linkedin.png" alt="Linkedin" />
                    <img src="/images/instagram.png" alt="Instgram" />
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6 f-c ttt">
                  <div className="links">
                    <h3>USEFULL LINKS</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/MostWatched'>Most Watched</Link>
                    <Link to='New'>New</Link>
                  </div>
                </div>
                <div className="col-md-6 f-c">
                  <div style={{textAlign:"center"}}>
                    <h3>About Us</h3>
                    <p>Our Goal is to provide the user with info about there fav movies
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="location col-md-4 l">
                  <img src="/images/location.png" alt="icon" />
                  <a href="http://www.sudan.sa">location</a>
                </div>
                <div className="Email col-md-4 l">
                  <img src="/images/mail.png" alt="icon" width={40} />
                  <a href="https://ahmedsaife6@gmail.com">ahmedsaife6@gmail.com</a>
                </div>
                <div className="calls col-md-4 l">
                  <img src="/images/call.png" alt="icon" />
                  <a href="https://+249905450201">Call +249905450201</a>
                </div>
              </div>
              <br /><br />
              <div className="row">
                <p className="cr">© 2023 All Rights Reserved</p>
              </div>
              <br /><br />
            </div>
            
          </div>
        </div>
      );
    }
  });
export default Footer
