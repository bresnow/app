export const Preloader = () => {
  return (
    <div id="preloader" name="preloader">
      <div class="product_name">
        <Template name="title" />
      </div>
    </div>
  );
};
export const OffCanvasMenu = () => {
  return (
    <div name="oc-menu" class="offcanvas_menu">
      <ul class="navbar-nav side_menu">
        <li class="nav-item dropdown submenu active">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu">
            <li class="nav-item"><a class="nav-link" href="index.html">Home One</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="index-2.html">Home Two</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="index-3.html">Home
              Three</a></li>
            <li class="nav-item active"><a class="nav-link" href="index-4.html">Home Four</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio.html">
            Portfolio
          </a>
        </li>
        <li class="nav-item dropdown submenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Blogs
          </a>
          <ul class="dropdown-menu">
            <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
            <li class="nav-item"><a href="blog-details.html" class="nav-link">Blog Details</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">
            Contact
          </a>
        </li>
      </ul>
    </div>

  )
};
export const MainSlider = () => {
  return (
    <section class="main_slider_area_three">
      <div class="container">
        <div class="main_slider">
          <div class="slider_item">
            <div class="row">
              <div class="col-md-4 d-flex align-items-center">
                <div class="slider_content">
                  <h2 data-animation="fadeInUp" data-delay="0.2s">Creative Marketing & Interface
                    <span>Design</span>
                  </h2>
                  <a href="#" class="theme_btn btn_white" data-animation="fadeInUp"
                    data-delay="0.5s"></a>
                </div>
              </div>
              <div class="col-md-8">
                <div class="slider_img_info">
                  <div class="slider_img" data-animation="fadeInRight" data-delay="0.2s">
                    <img src="img/home-three/01.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="slider_nav">
          <a href="#" class="prev"><i class="arrow_left"></i></a>
          <a href="#" class="next"><i class="arrow_right"></i></a>
        </div>
      </div>
    </section>)
};
export const Portfolio = () => {
  return (<section class="portfolio_area_three">
    <div class="container">
      <div class="row" id="portfolio_masonry">
        <div class="col-md-2 wow fadeInDown">
          <div class="sec_title">
            <h2>Our <span>Portfolio</span></h2>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-delay="0.3s">
          <div class="portfolio_item_three">
            <div class="img"><img src="img/home-three/pr_1.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Branding</div>
              <a href="#">
                <h3>Brand Launching of Wom-<br />en's Sneakers</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.5s">
          <div class="portfolio_item_three pr">
            <div class="img"><img src="img/home-three/pr_2.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Branding</div>
              <a href="#">
                <h3>Natural and creative cover<br /> for Boots</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.2s">
          <div class="portfolio_item_three mt_190">
            <div class="img"><img src="img/home-three/pr_3.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Marketing</div>
              <a href="#">
                <h3>Creative campaign for<br /> healthy food</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.4s">
          <div class="portfolio_item_three mt_190">
            <div class="img"><img src="img/home-three/pr_4.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Marketing</div>
              <a href="#">
                <h3>Composition for minimal-<br /> ist brand</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.2s">
          <div class="portfolio_item_three mt_190">
            <div class="img"><img src="img/home-three/pr_5.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Branding</div>
              <a href="#">
                <h3>Creation of total corporate<br /> identity</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.4s">
          <div class="portfolio_item_three mt_190">
            <div class="img"><img src="img/home-three/pr_6.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Branding</div>
              <a href="#">
                <h3>Grobal awareness<br /> stop campaign</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <a href="#" class="theme_btn">See all projects</a>
        </div>
      </div>
    </div>
  </section>)
};
export const Fact = () => {
  return (<section class="fact_area">
    <div class="container">
      <div class="sec_title text-center wow fadeInDown">
        <h2>Some Facts <span>& Figures</span></h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6 wow fadeInDown">
          <div class="fact_item">
            <div class="counter">14</div><i class="arrow_up"></i>
            <p>Ongoing projects</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInDown" data-wow-delay="0.2s">
          <div class="fact_item">
            <div class="counter">4.2</div>K<i class="arrow_up"></i>
            <p>Cups of coffe</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInDown" data-wow-delay="0.4s">
          <div class="fact_item">
            <div class="counter">68</div><i class="arrow_up"></i>
            <p>Experts at work</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInDown" data-wow-delay="0.6s">
          <div class="fact_item">
            <div class="counter">3.7</div>K<i class="arrow_up"></i>
            <p>Happy customers</p>
          </div>
        </div>
      </div>
    </div>
  </section>)
};
export const Contact = () => {
  return null }
export const Footer = () => {
  return null};

export const Header = () => {
  return (
    <header class="header_area">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <a href="#" class="logo">
            {/* <img src="img/logo-w.png" alt=""/> */}
            {/* <img src="img/logo-b.png" alt=""/> */}
          </a>
          <div class="right_item">
            <a href="mailto:bresnow@fltngmmth.com" class="h_contact_info">bresnow@fltngmmth.com</a>
            <div class="burger_menu">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>)
}
export function Template({ name }) {
  return "%-- " + name + " --%";
}
