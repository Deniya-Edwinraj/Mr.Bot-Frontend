import './App.css';
import './assets/bootstrap/css/bootstrap.min.css';
import model from './assets/model.gif';

function Home() {
  return (
    <div classNameName="Home">
      
  <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container head position-relative d-flex align-items-center justify-content-between">

    <a href="/" className="logo d-flex align-items-center me-auto me-xl-0" style={{ textDecoration: 'none' }}>
      <h1 className="sitename">Mr.Bot</h1>
    </a>


      <nav id="navmenu" className="navmenu" >
        <ul>
          <li><a href="#hero" className="active" style={{ textDecoration: 'none' }}>Home<br/></a></li>
          <li><a href="#about" style={{ textDecoration: 'none' }}>About</a></li>
          <li><a href="#menu" style={{ textDecoration: 'none' }}>Explore</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <button className="btn-get-started" role="button">Sign In</button>

    </div>
  </header>

  {/* <main className="main"> */}

    {/* <!-- Hero Section --> */}
    <section id="hero" className="hero section light-background">

      <div className="container">
        <div className="row gy-4 justify-content-center justify-content-lg-between">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Enjoy Your Healthy<br/>Delicious Food</h1>
            <p data-aos="fade-up" data-aos-delay="100">We are team of talented designers making websites with Bootstrap</p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="get-started" className="btn-get-started" style={{ textDecoration: 'none' }}>Get Started</a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 hero-img test-animate" data-aos="zoom-out">
  <img src={model} className="img-fluid animated" alt=""/>
</div>

        </div>
      </div>

    </section>
    {/* </main> */}


  <footer id="footer" className="footer dark-background">
    <div className="container copyright text-center ">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Mr.Bot  </strong> <span>All Rights Reserved.</span></p>
      <div className="credits">
        Designed by <a href="#" className='credit'>Deniya</a>
      </div>
    </div>
  </footer>

    
    </div>
  );
}

export default Home;
