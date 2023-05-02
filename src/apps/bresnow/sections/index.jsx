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
    <div name="offcanvas" class="offcanvas_menu overflow-y-scroll" >
      <div className="blog_right_sidebar ">
        <div class="sidebar_widget instagram_widget">
          <ul class="list-unstyled">
            <li>
              <div class="media">
                <img src="/img/blog/sidebar_post_3.jpg" alt="" />
                <div class="media-body pl-2">
                  <a href="#" class="theme_btn">Project Portfolio</a>
                  <div class="date text-primary">3 mins ago</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        </div>
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
                  <blockquote class="text-white" data-animation="fadeInUp" data-delay="0.2s"><h2>Bresnow<br />
                    <span class="small text-secondary">Interface Designer</span></h2>
                  </blockquote>
                  <div class="flex-col">
                    <div class="blog_single_info" name="description" contentEditable="false">
                      <p name>As an interface designer, Bresnow is responsible for the planning and creation of interactive products and services. 
                          with network of creatives and organizations that forms The Floating Mammoth Collective.</p>
                      </div>
                  <a href="#" class="theme_btn btn_white" data-animation="fadeInUp"
                    data-delay="0.5s">More Info</a>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="slider_img_info">
                  <div class="slider_img pr" data-animation="fadeInRight" data-delay="0.2s">
                    {/* <video id="videoPlayer" width="640" height="360" controls>
                      <source id="video_source" src="/img/card_transparent.gif" type="video/mp4" />
                    </video> */}
                    <img src="/img/card_transparent.gif" alt="" />
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
  return (
  <section class="portfolio_area_three">
    <div class="container">
      <div class="row" id="portfolio_masonry">
        <div class="col-md-2 wow fadeInDown">
          <div class="sec_title">
            <h2>Portfolio</h2>
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
                <div class="category" contenteditable="true">Branding</div>
              <a >
                  <h3 >Natural and creative cover<br /> for Boots</h3>
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
            <p>Cups of coffee</p>
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
  return (
    <section class="contact_area black_bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 wow fadeInDown" data-wow-delay="0.2s">
            <div class="contact_info">
              <h2>920 N Church St. Wilmington, De 19801, USA.</h2>

            </div>
          </div>
          <div class="col-lg-6 offset-lg-1 wow fadeInDown" data-wow-delay="0.3s">
            <form action="#" class="row contact_form">
              <div class="col-lg-6 form-group">
                <input type="text" class="form-control" placeholder="Your email *" />
              </div>
              <div class="col-lg-6 form-group">
                <input type="text" class="form-control" placeholder="Phone *" />
              </div>
              <div class="col-lg-12 form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>I need to do marketing for my brand</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="col-md-6">
                <button type="submit" class="submit_btn">
                  Send Message
                </button>
              </div>
              <div class="col-md-6">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    I agree to receive information
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="border_bottom"></div>
      </div>
    </section>)
}


export const Footer = () => {
  return (
    <footer class="black_bg">
      <div class="footer_top">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-delay="0.1s">
              <div class="f_widget about-widget">
                <a href="#" class="f_logo"><img src="img/bresnow_logo.png" width={50} alt="" /></a>
                <p>Our main objective is to help people achieve their business goals and make their
                  business an efficient organization from all sides.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-delay="0.3s">
              <div class="f_widget social_widget">
                <h3 class="f_title">Follow Us On</h3>
                <ul class="list-unstyled">
                  <li><a href="">Instagram</a></li>
                  <li><a href="">Twitter</a></li>
                  <li><a href="">Linkedin</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 wow fadeInDown" data-wow-delay="0.5s">
              <div class="f_widget contact_widget">
                <h3 class="f_title">Contact Me</h3>
                <ul class="list-unstyled">
                  <li>Phone:
                    <a href="tel:13024084628">+1 302 408 4628</a>
                  </li>
                  <li>Email: <a href="mailto:bresnow@fltngmmth.com">bresnow@fltngmmth.com</a></li>
                  <li>Address: 920 N Church St. Wilmington, De 19810</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-sm-9">
              <p>©2023<a href="#">FloatingMammoth</a></p>
            </div>
            <div class="col-md-5 col-sm-3 text-right">
              <a href="#" class="go_top">go back up <i class="arrow_up"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>)
};
export const Video = () => {

  return (
    <section >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="">

            </div>
          </div>
        </div>
      </div>
    </section>)
}
export const BurgerMenu = () => 
<div class="burger_menu">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
export const Header = () => {
  return (
    <header class="header_area">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <a href="#" class="logo">
            <img width={60} src="img/bresnow_logo.png" alt="" />
            <img width={60} src="img/fm_logo.jpg" alt="" />
          </a>
          <div class="right_item">
            <a href="mailto:bresnow@fltngmmth.com" class="h_contact_info">bresnow@fltngmmth.com</a>
  <BurgerMenu/>
          </div>
        </div>
      </div>
    </header>)
}
export function Template({ name }) {
  return "%-- " + name + " --%";
}
