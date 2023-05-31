export default function SinglePage(params) {
    return (
                   <div id="scroll-container">

                    {/* <!-- =================== */}
                    {/* ///// Begin header /////
                    ========================
                    * Use class "tt-header-fixed" to set header to fixed position.
				--> */}
                    <header id="tt-header" class="tt-header-fixed">
                         <div class="tt-header-inner"> 
                         {/*<!-- add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag!). Note: additionally you can use prepared helper class "max-width-*" to add custom width to "tt-wrap". Example: "max-width-1500" (class "tt-wrap" is still required!). More info about helper classes can be found in the file "helper.css". --> */}

                            <div class="tt-header-col">

                                {/* <!-- Begin logo  */}
							{/* ================ --> */}
                                <div class="tt-logo">
                                    <a href="index.html">
                                        {/* <!-- Hint: You may need to change the img height to match your logo type. You can do this from the "theme.css" file (find: ".tt-logo img"). --> */}
                                        {/* <img src="assets/img/logo-light.png" class="tt-logo-light magnetic-item" alt="Logo"> <!-- logo light --> */}
                                            {/* <img src="assets/img/logo-dark.png" class="tt-logo-dark magnetic-item" alt="Logo"> <!-- logo dark --> */}
                                            </a>
                                        </div>
                                        {/* <!-- End logo --> */}

                                </div> 
                                {/* <!-- /.tt-header-col --> */}

                                <div class="tt-header-col">

                                    {/* <!-- Begin overlay menu toggle button --> */}
                                    <div id="tt-ol-menu-toggle-btn-wrap">
                                        <div class="tt-ol-menu-toggle-btn-text">
                                            <span class="text-menu" data-hover="Open">Menu</span>
                                            <span class="text-close">Close</span>
                                        </div>
                                        <div class="tt-ol-menu-toggle-btn-holder">
                                            <a href="#" class="tt-ol-menu-toggle-btn magnetic-item"><span></span></a>
                                        </div>
                                    </div>
                                    {/* <!-- End overlay menu toggle button --> */}

                                    {/* <!-- Begin overlay menu */}
                                    {/* ========================
                                    * Use class "tt-ol-menu-center" to align menu to center.
                                    * Use class "tt-ol-menu-count" to enable menu counter.
							--> */}
                                    <nav class="tt-overlay-menu tt-ol-menu-center tt-ol-menu-count">
                                        <div class="tt-ol-menu-holder">
                                            <div class="tt-ol-menu-inner tt-wrap">
                                                <div class="tt-ol-menu-content">

                                                    {/* <!-- Begin menu list --> */}
                                                    <ul class="tt-ol-menu-list">

                                                        {/* <!-- <li><a href="">Single Link</a></li> --> */}

                                                        {/* <!-- Begin submenu (submenu master) */}
												{/* ==================================== --> */}
                                                        <li class="tt-ol-submenu-wrap">
                                                            <div class="tt-ol-submenu-trigger">
                                                                <a href="#">Home</a>
                                                                <div class="tt-ol-submenu-caret-wrap">
                                                                    <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                </div> 
                                                                {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                            <div class="tt-ol-submenu">
                                                                <ul class="tt-ol-submenu-list">

                                                                    <li><a href="landing-page-1.html">Landing Page v.1</a></li>
                                                                    <li><a href="landing-page-2.html">Landing Page v.2</a></li>

                                                                </ul> 
                                                                {/* <!-- /.tt-ol-submenu-list --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu --> */}
                                                        </li>
                                                        {/* <!-- End submenu (sub-master) --> */}

                                                        {/* <!-- Begin submenu (submenu master) */}
												{/* ==================================== --> */}
                                                        <li class="tt-ol-submenu-wrap">
                                                            <div class="tt-ol-submenu-trigger">
                                                                <a href="#">Portfolio</a>
                                                                <div class="tt-ol-submenu-caret-wrap">
                                                                    <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                </div> 
                                                                {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                            <div class="tt-ol-submenu">
                                                                <ul class="tt-ol-submenu-list">

                                                                    {/* <!-- Begin submenu */}
															{/* =================== --> */}
                                                                    <li class="tt-ol-submenu-wrap">
                                                                        <div class="tt-ol-submenu-trigger">
                                                                            <a href="#" class="tt-ol-submenu-link">Portfolio List</a>
                                                                            <div class="tt-ol-submenu-caret-wrap">
                                                                                <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                            </div> 
                                                                            {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                                        <div class="tt-ol-submenu">
                                                                            <ul class="tt-ol-submenu-list">

                                                                                <li><a href="portfolio-list-classic.html">List Classic</a></li>
                                                                                <li><a href="portfolio-list-overlay.html">List Overlay</a></li>
                                                                                <li><a href="portfolio-list-compact.html">List Compact</a></li>

                                                                            </ul> 
                                                                            {/* <!-- /.tt-ol-submenu-list --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu --> */}
                                                                    </li>
                                                                    {/* <!-- End submenu --> */}

                                                                    {/* <!-- Begin submenu */}
															{/* =================== --> */}
                                                                    <li class="tt-ol-submenu-wrap">
                                                                        <div class="tt-ol-submenu-trigger">
                                                                            <a href="#" class="tt-ol-submenu-link">Portfolio Grid</a>
                                                                            <div class="tt-ol-submenu-caret-wrap">
                                                                                <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                            </div> 
                                                                            {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                                        <div class="tt-ol-submenu">
                                                                            <ul class="tt-ol-submenu-list">

                                                                                <li><a href="portfolio-grid-creative-1.html">Grid Creative v.1</a></li>
                                                                                <li><a href="portfolio-grid-creative-2.html">Grid Creative v.2</a></li>
                                                                                <li><a href="portfolio-grid-modern.html">Grid Modern</a></li>
                                                                                <li><a href="portfolio-grid-classic.html">Grid Classic</a></li>
                                                                                <li><a href="portfolio-grid-portrait-mode.html">Portrait Mode</a></li>
                                                                                <li><a href="portfolio-one-column.html">One Column</a></li>

                                                                            </ul> 
                                                                            {/* <!-- /.tt-ol-submenu-list --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu --> */}
                                                                    </li>
                                                                    {/* <!-- End submenu --> */}

                                                                    {/* <!-- Begin submenu */}
															{/* =================== --> */}
                                                                    <li class="tt-ol-submenu-wrap">
                                                                        <div class="tt-ol-submenu-trigger">
                                                                            <a href="#" class="tt-ol-submenu-link">Slider &amp; Carousel</a>
                                                                            <div class="tt-ol-submenu-caret-wrap">
                                                                                <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                            </div> 
                                                                            {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                                        <div class="tt-ol-submenu">
                                                                            <ul class="tt-ol-submenu-list">

                                                                                <li><a href="portfolio-fullscreen-slider.html">Fullscreen Slider</a></li>
                                                                                <li><a href="portfolio-carousel-overlay.html">Carousel Overlay</a></li>
                                                                                <li><a href="portfolio-carousel-center.html">Carousel Center</a></li>

                                                                            </ul> 
                                                                            {/* <!-- /.tt-ol-submenu-list --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu --> */}
                                                                    </li>
                                                                    {/* <!-- End submenu --> */}

                                                                    <li><a href="portfolio-interactive.html">Interactive</a></li>
                                                                    <li><a href="portfolio-interactive-compact.html">Interactive Compact</a></li>
                                                                    <li><a href="elements-classic-menu.html">Classic Menu</a></li>

                                                                </ul> 
                                                                {/* <!-- /.tt-ol-submenu-list --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu --> */}
                                                        </li>
                                                        {/* <!-- End submenu (sub-master) --> */}

                                                        {/* <!-- Begin submenu (submenu master) */}
												{/* ==================================== --> */}
                                                        <li class="tt-ol-submenu-wrap">
                                                            <div class="tt-ol-submenu-trigger">
                                                                <a href="#">About</a>
                                                                <div class="tt-ol-submenu-caret-wrap">
                                                                    <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                </div> 
                                                                {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                            <div class="tt-ol-submenu">
                                                                <ul class="tt-ol-submenu-list">

                                                                    <li><a href="about-us.html">About Us</a></li>
                                                                    <li><a href="about-me.html">About Me</a></li>

                                                                </ul> 
                                                                {/* <!-- /.tt-ol-submenu-list --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu --> */}
                                                        </li>
                                                        {/* <!-- End submenu (sub-master) --> */}

                                                        {/* <!-- Begin submenu (submenu master) */}
												{/* ==================================== --> */}
                                                        <li class="tt-ol-submenu-wrap">
                                                            <div class="tt-ol-submenu-trigger">
                                                                <a href="#">Blog</a>
                                                                <div class="tt-ol-submenu-caret-wrap">
                                                                    <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                </div> 
                                                                {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                            <div class="tt-ol-submenu">
                                                                <ul class="tt-ol-submenu-list">

                                                                    {/* <!-- Begin submenu */}
															{/* =================== --> */}
                                                                    <li class="tt-ol-submenu-wrap">
                                                                        <div class="tt-ol-submenu-trigger">
                                                                            <a href="#" class="tt-ol-submenu-link">Blog List</a>
                                                                            <div class="tt-ol-submenu-caret-wrap">
                                                                                <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                            </div> 
                                                                            {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                                        <div class="tt-ol-submenu">
                                                                            <ul class="tt-ol-submenu-list">

                                                                                <li><a href="blog-interactive.html">Interactive List</a></li>
                                                                                <li><a href="blog-list.html">Compact List</a></li>
                                                                                <li><a href="blog-classic.html">Classic List</a></li>
                                                                                <li><a href="blog-classic-sidebar.html">Classic Sidebar</a></li>

                                                                            </ul> 
                                                                            {/* <!-- /.tt-ol-submenu-list --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu --> */}
                                                                    </li>
                                                                    {/* <!-- End submenu --> */}

                                                                    {/* <!-- Begin submenu */}
															{/* =================== --> */}
                                                                    <li class="tt-ol-submenu-wrap">
                                                                        <div class="tt-ol-submenu-trigger">
                                                                            <a href="#" class="tt-ol-submenu-link">Blog Post</a>
                                                                            <div class="tt-ol-submenu-caret-wrap">
                                                                                <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                            </div> 
                                                                            {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                                        <div class="tt-ol-submenu">
                                                                            <ul class="tt-ol-submenu-list">

                                                                                <li><a href="blog-post.html">Single Post</a></li>
                                                                                <li><a href="blog-post-classic-sidebar.html">Classic Sidebar</a></li>

                                                                            </ul> 
                                                                            {/* <!-- /.tt-ol-submenu-list --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu --> */}
                                                                    </li>
                                                                    {/* <!-- End submenu --> */}

                                                                </ul> 
                                                                {/* <!-- /.tt-ol-submenu-list --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu --> */}
                                                        </li>
                                                        {/* <!-- End submenu (sub-master) --> */}

                                                        {/* <!-- Begin submenu (submenu master) */}
												{/* ==================================== --> */}
                                                        <li class="tt-ol-submenu-wrap">
                                                            <div class="tt-ol-submenu-trigger">
                                                                <a href="#">Shop</a>
                                                                <div class="tt-ol-submenu-caret-wrap">
                                                                    <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                </div> 
                                                                {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                            <div class="tt-ol-submenu">
                                                                <ul class="tt-ol-submenu-list">

                                                                    {/* <!-- Begin submenu */}
															{/* =================== --> */}
                                                                    <li class="tt-ol-submenu-wrap">
                                                                        <div class="tt-ol-submenu-trigger">
                                                                            <a href="#" class="tt-ol-submenu-link">Product Lists</a>
                                                                            <div class="tt-ol-submenu-caret-wrap">
                                                                                <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                            </div> 
                                                                            {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                                        <div class="tt-ol-submenu">
                                                                            <ul class="tt-ol-submenu-list">

                                                                                <li><a href="shop-list.html">Sliding Sidebar</a></li>
                                                                                <li><a href="shop-list-classic.html">Classic Sidebar</a></li>

                                                                            </ul> 
                                                                            {/* <!-- /.tt-ol-submenu-list --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu --> */}
                                                                    </li>
                                                                    {/* <!-- End submenu --> */}

                                                                    {/* <!-- Begin submenu */}
															{/* =================== --> */}
                                                                    <li class="tt-ol-submenu-wrap">
                                                                        <div class="tt-ol-submenu-trigger">
                                                                            <a href="#" class="tt-ol-submenu-link">Product Pages</a>
                                                                            <div class="tt-ol-submenu-caret-wrap">
                                                                                <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                            </div> 
                                                                            {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                                        <div class="tt-ol-submenu">
                                                                            <ul class="tt-ol-submenu-list">

                                                                                <li><a href="shop-single.html">Product Page</a></li>
                                                                                <li><a href="shop-single-simple.html">Simple Product Page</a></li>

                                                                            </ul> 
                                                                            {/* <!-- /.tt-ol-submenu-list --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu --> */}
                                                                    </li>
                                                                    {/* <!-- End submenu --> */}

                                                                    {/* <!-- Begin submenu */}
															{/* =================== --> */}
                                                                    <li class="tt-ol-submenu-wrap">
                                                                        <div class="tt-ol-submenu-trigger">
                                                                            <a href="#" class="tt-ol-submenu-link">Product Ordering</a>
                                                                            <div class="tt-ol-submenu-caret-wrap">
                                                                                <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                            </div> 
                                                                            {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                                        <div class="tt-ol-submenu">
                                                                            <ul class="tt-ol-submenu-list">

                                                                                <li><a href="shop-cart.html">Shopping Cart</a></li>
                                                                                <li><a href="shop-checkout.html">Checkout</a></li>
                                                                                <li><a href="shop-order-details.html">Order Details</a></li>

                                                                            </ul> 
                                                                            {/* <!-- /.tt-ol-submenu-list --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu --> */}
                                                                    </li>
                                                                    {/* <!-- End submenu --> */}

                                                                    {/* <!-- Begin submenu */}
															{/* =================== --> */}
                                                                    <li class="tt-ol-submenu-wrap">
                                                                        <div class="tt-ol-submenu-trigger">
                                                                            <a href="#" class="tt-ol-submenu-link">More Pages</a>
                                                                            <div class="tt-ol-submenu-caret-wrap">
                                                                                <div class="tt-ol-submenu-caret magnetic-item"></div>
                                                                            </div> 
                                                                            {/* <!-- /.tt-ol-submenu-caret-wrap --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu-trigger --> */}
                                                                        <div class="tt-ol-submenu">
                                                                            <ul class="tt-ol-submenu-list">

                                                                                <li><a href="shop-wishlist.html">Wishlist</a></li>
                                                                                <li><a href="shop-login.html">Login Page</a></li>
                                                                                <li><a href="shop-register.html">Register Account</a></li>
                                                                                <li><a href="shop-reset-password.html">Reset Password</a></li>

                                                                            </ul> 
                                                                            {/* <!-- /.tt-ol-submenu-list --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-ol-submenu --> */}
                                                                    </li>
                                                                    {/* <!-- End submenu --> */}

                                                                </ul> 
                                                                {/* <!-- /.tt-ol-submenu-list --> */}
                                                            </div> 
                                                            {/* <!-- /.tt-ol-submenu --> */}
                                                        </li>
                                                        {/* <!-- End submenu (sub-master) --> */}

                                                        <li><a href="contact.html">Contact</a></li>

                                                    </ul>
                                                    {/* <!-- End menu list --> */}

                                                </div> 
                                                {/* <!-- /.tt-ol-menu-content --> */}
                                            </div> 
                                            {/* <!-- /.tt-ol-menu-inner --> */}
                                        </div> 
                                        {/* <!-- /.tt-ol-menu-holder --> */}

                                        {/* <!-- Begin noise background --> */}
                                        <div class="bg-noise"></div>
                                        {/* <!-- End noise background --> */}

                                    </nav>
                                    {/* <!-- End overlay menu --> */}

                                 </div> {/* <!-- /.header-col --> */}
                             </div> {/* <!-- /.header-inner --> */}
                        </header>
                            {/* <!-- End header --> */}


                            {/* <!-- ************************************* */}
                            {/* *********** Begin content wrap *********** 
				************************************** --> */}
                            <div id="content-wrap">


                                {/* <!-- ======================== */}
                                {/* ///// Begin page header /////
                                =============================
                                * ATENTION: This page header is slightly different from the default page header!
                                It contains some extra elements and classes specifically for a portfolio single project.
                                =============================
                                * Use class "ph-full" to enable fullscreen size.
                                * Use class "ph-cap-sm", "ph-cap-lg", "ph-cap-xlg" or "ph-cap-xxlg" to set caption size (no class = default size).).
                                * Use class "ph-center" to enable content center position.
                                * Use class "ph-bg-image" to enable page header background image (required for a portfolio single project!).
                                * Use class "ph-bg-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image (effect only with class "ph-bg-image").
                                * Use class "ph-image-shadow" to enable page header background image (effect only with class "ph-bg-image").
                                * Use class "ph-image-cropped" to crop image. It fixes image dimensions (no effect for "ph-bg-image"!).
                                * Use class "ph-image-cover-*" to set image overlay opacity. For example "ph-image-cover-2" or "ph-image-cover-2-5" (up to "ph-image-cover-9-5").
                                * Use class "ph-content-parallax" to enable content parallax.
                                * Use class "ph-stroke" to enable caption title stroke style.
                                * Use class "ph-inline" to enable content inline position (for a single project page only! No effect with class "ph-center"!).
					--> */}
                                <div id="page-header" class="ph-full ph-bg-image ph-image-shadow ph-image-cover-5 ph-content-parallax">
                                    <div class="page-header-inner tt-wrap">

                                        {/* <!-- Begin page header image  */}
							{/* ============================= --> */}
                                        <div class="ph-image">
                                            <div class="ph-image-inner">
                                                <img src="assets/img/page-header/project-ph/project-ph-1.jpg" alt="Image"/>
                                            </div>
                                        </div>
                                        {/* <!-- End page header image --> */}

                                        {/* <!-- Begin page header caption */}
                                        {/* ===============================
                                        Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
							--> */}
                                        <div class="ph-caption">
                                            <div class="ph-categories ph-appear">
                                                <div class="ph-category" style="">People</div>
                                                {/* <!-- <div class="ph-category">Varia</div> --> */}
                                             </div> {/* <!-- /.ph-categories --> */}

                                            {/* <h2 class="ph-caption-title ph-appear">Victorian Girls</h2> <!-- You can use <br class="hide-from-lg"> to break a text line if needed --> */}
                                                {/* <!-- <h4 class="ph-caption-subtitle ph-appear">Subtitle</h4> --> */}
                                        </div>
                                        {/* <!-- End page header caption --> */}

                                        {/* <!-- Begin project info list */}
                                        {/* =============================
                                        * You can use the project info list as a standalone element outside of the page header if you want.
							--> */}
                                        <div class="project-info-list anim-fadeinup margin-top-60">
                                            <ul>
                                                <li>
                                                    <div class="pi-list-heading">Client</div>
                                                    <div class="pi-list-cont">Themetorium</div>
                                                </li>
                                                <li>
                                                    <div class="pi-list-heading">Year</div>
                                                    <div class="pi-list-cont">2021</div>
                                                </li>
                                                <li>
                                                    <div class="pi-list-heading">Role</div>
                                                    {/* <div class="pi-list-cont">Branding</div> <!-- Describe in a few words --> */}
                                                </li>
                                                <li>
                                                    <div class="pi-list-heading">Website</div>
                                                    <div class="pi-list-cont"><a href="https://themetorium.net" target="_blank" rel="noopener">Visit site<span class="pi-list-icon"><i class="fas fa-arrow-right"></i></span></a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- End project info list --> */}

                                     </div> {/* <!-- /.page-header-inner --> */}

                                    {/* <!-- Begin scroll down circle (you can change "data-offset" to set scroll top offset)  */}
						{/* ============================== --> */}
                                    <a href="#page-content" class="scroll-down-circle" data-offset="30">
                                        <div class="sdc-inner ph-appear">
                                            <div class="sdc-icon"><i class="fas fa-chevron-down"></i></div>
                                            <svg viewBox="0 0 500 500">
                                                <defs>
                                                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
                                                </defs>
                                                <text dy="30">
                                                    <textPath xlink:href="#textcircle">Scroll down - Scroll down -</textPath>
                                                </text>
                                            </svg>
                                         </div> {/* <!-- /.sdc-inner --> */}
                                    </a>
                                    {/* <!-- End scroll down circle --> */}

                                    {/* <!-- Begin made with love  */}
						{/* ========================== --> */}
                                    <div class="made-with-love ph-appear">
                                        <div class="mwl-inner">
                                            <div class="mwl-text">Made with</div>
                                            <div class="mwl-icon"><i class="far fa-heart"></i></div>
                                        </div>
                                    </div>
                                    {/* <!-- End made with love --> */}

                                    {/* <!-- Begin page header share (share buttons are for design purposes only!)  */}
						{/* ============================= --> */}
                                    <div class="ph-share">
                                        <div class="ph-share-trigger ph-appear">
                                            <div class="ph-share-text">Share</div>
                                            <div class="ph-share-icon magnetic-item"><i class="fas fa-share-alt"></i></div>
                                         </div>{/* <!-- /.ph-share-trigger --> */}

                                        <div class="ph-share-content">
                                            <div class="ph-share-close cursor-close"><div class="bg-noise"></div></div>
                                            <div class="ph-share-inner">
                                                <h1 class="ph-share-title ph-share-appear">Spread the Word!</h1>
                                                <div class="ph-share-subtitle ph-share-appear">Share this project with your friends</div>

                                                <div class="social-buttons ph-share-appear">
                                                    <ul>
                                                        <li><a href="#0" class="magnetic-item" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#0" class="magnetic-item" title="Share on Twitter"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a href="#0" class="magnetic-item" title="Share on Pinterest"><i class="fab fa-pinterest"></i></a></li>
                                                    </ul>
                                                 </div> {/*<!-- /.social-buttons --> */}

                                             </div> {/* <!-- /.ph-share-inner --> */}

                                            <div class="ph-share-ghost ph-share-appear">Share</div>
                                         </div> {/* <!-- /.ph-share-content --> */}
                                    </div>
                                    {/* <!-- End page header share --> */}

                                </div>
                                {/* <!-- End page header --> */}


                                {/* <!-- ************************************* */}
                                {/* *********** Begin page content *********** 
					************************************** --> */}
                                <div id="page-content">


                                    {/* <!-- ======================= */}
                                    {/* ///// Begin tt-section /////
                                    ============================
                                    * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
						--> */}
                                    <div class="tt-section padding-top-xlg-180 padding-left-sm-3-p padding-right-sm-3-p">
                                        <div class="tt-section-inner tt-wrap">

                                            <div class="tt-row">
                                                <div class="tt-col-lg-4 padding-right-md-5-p">

                                                    {/* <!-- Begin tt-Heading */}
                                                    {/* ======================
                                                    * Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
                                                    * Use class "tt-heading-stroke" to enable stroke style.
                                                    * Use class "tt-heading-center" to align tt-Heading to center.
                                                    * Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
										--> */}
                                                    <div class="tt-heading tt-heading-xsm margin-bottom-60 anim-fadeinup">
                                                        <h2 class="tt-heading-title">About</h2>
                                                        {/* <!-- <h3 class="tt-heading-subtitle text-gray">Subtitle</h3> --> */}
                                                    </div>
                                                    {/* <!-- End tt-Heading --> */}

                                                </div> 
                                                {/* <!-- /.tt-col --> */}

                                                <div class="tt-col-lg-8">

                                                    <div class="anim-fadeinup text-gray">
                                                        <p>Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering favourite you the continual. Mrs civil nay least means tried drift. Natural end law whether but and towards certain. Furnished unfeeling his sometimes see day promotion. Quitting informed concerns can men now informed.</p>

                                                        {/* <!-- <div class="tt-btn tt-btn-link no-margin"> */}
                                                            <a href="dummy-page.html" data-hover="Explore More">Explore More</a>
                                                        </div> 
                                                    </div>

                                                </div> 
                                                {/* <!-- /.tt-col --> */}
                                            </div> 
                                            {/* <!-- /.tt-row --> */}

                                        </div> 
                                        {/* <!-- /.tt-section-inner --> */}
                                    </div>
                                    {/* <!-- End tt-section --> */}


                                    {/* <!-- ======================= */}
                                    {/* ///// Begin tt-section /////
                                    ============================
                                    * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
						--> */}
                                    <div class="tt-section">
                                        <div class="tt-section-inner">

                                            {/* <!-- Begin tt-image */}
                                            {/* ====================
                                            * Use class "tti-fixed-height" to enable image fixed height (no effect on small screens!).
                                            * Use class "anim-image-parallax" on <img> tag to enable parallax effect.
                                                * Use class "margin-bottom-*" to enable bottom margins. For example "margin-bottom-100". More info about helper classes can be found in the file "helper.css".
								--> */}
                                                <div class="tt-image tti-fixed-height">
                                                    <figure>
                                                        <img class="anim-image-parallax tt-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/portfolio/single-project/project-1/project-1-1.jpg" alt="image"/>
                                                            <figcaption>
                                                                Image Caption
                                                            </figcaption>
                                                    </figure>
                                                </div>
                                                {/* <!-- End tt-image --> */}

                                        </div> 
                                        {/* <!-- /.tt-section-inner --> */}
                                    </div>
                                    {/* <!-- End tt-section --> */}


                                    {/* <!-- ======================= */}
                                    {/* ///// Begin tt-section /////
                                    ============================
                                    * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
						--> */}
                                    <div class="tt-section padding-left-sm-3-p padding-right-sm-3-p">
                                        <div class="tt-section-inner tt-wrap">

                                            <div class="tt-row">
                                                <div class="tt-col-lg-8">

                                                    {/* <!-- Begin tt-Heading */}
                                                    {/* ======================
                                                    * Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
                                                    * Use class "tt-heading-stroke" to enable stroke style.
                                                    * Use class "tt-heading-center" to align tt-Heading to center.
                                                    * Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
											--> */}
                                                    <div class="tt-heading tt-heading-xsm anim-fadeinup">
                                                        <h2 class="tt-heading-title">The Vision</h2>
                                                        {/* <!-- <h3 class="tt-heading-subtitle text-gray">Subtitle</h3> --> */}
                                                    </div>
                                                    {/* <!-- End tt-Heading --> */}

                                                    <div class="anim-fadeinup text-gray">
                                                        <p>Was justice improve age article between. No projection as up preference reasonably delightful celebrated. Preserved and abilities assurance tolerably breakfast use saw. And painted letters forming far village elderly compact. Her rest west each spot his and you knew. Estate gay wooded depart six far her.</p>
                                                    </div>

                                                </div> 
                                                {/* <!-- /.tt-col --> */}

                                                <div class="tt-col-lg-4">
                                                </div> 
                                                {/* <!-- /.tt-col --> */}
                                            </div> 
                                            {/* <!-- /.tt-row --> */}

                                        </div> 
                                        {/* <!-- /.tt-section-inner --> */}
                                    </div>
                                    {/* <!-- End tt-section --> */}


                                    {/* <!-- ======================= */}
                                    {/* ///// Begin tt-section /////
                                    ============================
                                    * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
						--> */}
                                    <div class="tt-section no-padding-bottom">
                                        <div class="tt-section-inner tt-wrap">

                                            {/* <!-- Begin tt-Gallery (works combined with tt-Ggrid!)
                                            ======================
                                            * Use class "ttga-hover" to enable gallery item hover effect (behavior depends on "ttgr-gap-*" classes below).
								--> */}
                                            <div class="tt-gallery">

                                                {/* <!-- Begin tt-Grid */}
                                                {/* ===================
                                                * Use class "ttgr-layout-2", "ttgr-layout-3", "ttgr-layout-4" to set grid layout (columns). No class = one column.
                                                * Use class "ttgr-layout-1-2", "ttgr-layout-2-1", "ttgr-layout-2-3", "ttgr-layout-3-2", "ttgr-layout-3-4" or "ttgr-layout-4-3" to set grid mixed layout (columns).
                                                * Use class "ttgr-layout-creative-1" or "ttgr-layout-creative-2" to set grid creative mixed layout (no effect with classes "ttgr-portrait", "ttgr-portrait-half", "ttgr-not-cropped" and "ttgr-shifted").
                                                * Use class "ttgr-portrait" or "ttgr-portrait-half" to enable portrait mode (no effect with classes "ttgr-layout-creative-1", "ttgr-layout-creative-2" and "ttgr-not-cropped").
                                                * Use class "ttgr-gap-1", "ttgr-gap-2", "ttgr-gap-3", "ttgr-gap-4", "ttgr-gap-5" or "ttgr-gap-6" to add space between items.
                                                * Use class "ttgr-not-cropped" to enable not cropped mode (effect only with classes "ttgr-layout-2", "ttgr-layout-3" and "ttgr-layout-4").
                                                * Use class "ttgr-shifted" to enable shifted layout (effect only with classes "ttgr-layout-2", "ttgr-layout-3" and "ttgr-layout-4").
									--> */}
                                                <div class="tt-grid ttgr-not-cropped ttgr-shifted ttgr-gap-5">

                                                    {/* <!-- Begin tt-Grid items wrap  */}
										{/* ============================== --> */}
                                                    <div class="tt-grid-items-wrap isotope-items-wrap lightgallery">

                                                        {/* <!-- Begin tt-Grid item */}
											{/* ======================== --> */}
                                                        <div class="tt-grid-item isotope-item">
                                                            <div class="ttgr-item-inner">

                                                                {/* <!-- Begin tt-Gallery item  */}
													{/* =========================== --> */}
                                                                <a href="assets/img/portfolio/single-project/project-1/project-1-2.jpg" class="tt-gallery-item lg-trigger" data-cursor="View">
                                                                    <div class="tt-gallery-item-inner">
                                                                        <div class="tt-gallery-image-wrap">
                                                                            <figure class="tt-gallery-image ttgr-height">
                                                                                <img class="anim-image-parallax" src="assets/img/portfolio/single-project/project-1/project-1-2.jpg" alt="image"/>
                                                                            </figure> 
                                                                            {/* <!-- /.tt-gallery-image --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-gallery-image-wrap --> */}
                                                                    </div> 
                                                                    {/* <!-- /.tt-gallery-item-inner --> */}
                                                                </a>
                                                                {/* <!-- End tt-Gallery item --> */}

                                                            </div> 
                                                            {/* <!-- /.ttgr-item-inner --> */}
                                                        </div>
                                                        {/* <!-- End tt-Grid item --> */}

                                                        {/* <!-- Begin tt-Grid item */}
											{/* ======================== --> */}
                                                        <div class="tt-grid-item isotope-item">
                                                            <div class="ttgr-item-inner">

                                                                {/* <!-- Begin tt-Gallery item */}
													{/* =========================== --> */}
                                                                <a href="assets/img/portfolio/single-project/project-1/project-1-3.jpg" class="tt-gallery-item lg-trigger" data-cursor="View">
                                                                    <div class="tt-gallery-item-inner">
                                                                        <div class="tt-gallery-image-wrap">
                                                                            <figure class="tt-gallery-image ttgr-height">
                                                                                <img class="anim-image-parallax" src="assets/img/portfolio/single-project/project-1/project-1-3.jpg" alt="image"/>
                                                                            </figure> 
                                                                            {/* <!-- /.tt-gallery-image --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-gallery-image-wrap --> */}
                                                                    </div> 
                                                                    {/* <!-- /.tt-gallery-item-inner --> */}
                                                                </a>
                                                                {/* <!-- End tt-Gallery item --> */}

                                                            </div> 
                                                            {/* <!-- /.ttgr-item-inner --> */}
                                                        </div>
                                                        {/* <!-- End tt-Grid item --> */}

                                                        {/* <!-- Begin tt-Grid item */}
											{/* ======================== --> */}
                                                        <div class="tt-grid-item isotope-item">
                                                            <div class="ttgr-item-inner">

                                                                {/* <!-- Begin tt-Gallery item  */}
													{/* =========================== --> */}
                                                                <a href="assets/img/portfolio/single-project/project-1/project-1-4.jpg" class="tt-gallery-item lg-trigger" data-cursor="View" data-sub-html="Yes, you can use image captions. :)">
                                                                    <div class="tt-gallery-item-inner">
                                                                        <div class="tt-gallery-image-wrap">
                                                                            <figure class="tt-gallery-image ttgr-height">
                                                                                <img class="anim-image-parallax" src="assets/img/portfolio/single-project/project-1/project-1-4.jpg" alt="image"/>
                                                                            </figure> 
                                                                            {/* <!-- /.tt-gallery-image --> */}
                                                                        </div> 
                                                                        {/* <!-- /.tt-gallery-image-wrap --> */}
                                                                    </div> 
                                                                    {/* <!-- /.tt-gallery-item-inner --> */}
                                                                </a>
                                                                {/* <!-- End tt-Gallery item --> */}

                                                            </div> 
                                                            {/* <!-- /.ttgr-item-inner --> */}
                                                        </div>
                                                        {/* <!-- End tt-Grid item --> */}

                                                    </div>
                                                    {/* <!-- End tt-Grid items wrap  --> */}

                                                </div>
                                                {/* <!-- End tt-Grid --> */}

                                            </div>
                                            {/* <!-- End tt-Gallery --> */}

                                        </div> 
                                        {/* <!-- /.tt-section-inner --> */}
                                    </div>
                                    {/* <!-- End tt-section --> */}


                                    {/* <!-- ======================= */}
                                    {/* ///// Begin tt-section /////
                                    ============================
                                    * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
						--> */}
                                    <div class="tt-section padding-bottom-xlg-150">
                                        <div class="tt-section-inner tt-wrap">

                                            {/* <!-- Begin page nav */}
                                            {/* ====================
                                            * Use class "tt-pn-stroke" to enable title stroke style.
                                            * Use class "tt-pn-scroll" to enable hover title scroll. Note: If "tt-pn-hover-title" text is wider than "tt-pn-link" then it scrolls by default. The longer the text, the faster it scrolls.
								--> */}
                                            <div class="tt-page-nav tt-pn-scroll">
                                                <a href="single-project-2.html" class="tt-pn-link anim-fadeinup">
                                                    <div class="tt-pn-title">Next Project</div>
                                                    <div class="tt-pn-hover-title">Smithy</div>
                                                </a> 
                                                {/* <!-- /.tt-pn-link --> */}

                                                <div class="tt-pn-subtitle anim-fadeinup">Explore More</div>

                                                {/* <!-- Use if destination page contains page header image --> */}
                                                <div class="tt-pn-image">
                                                    <img src="assets/img/portfolio/portfolio-2.jpg" alt="image"/>
                                                </div>
                                            </div>
                                            {/* <!-- End page nav --> */}

                                        </div> 
                                        {/* <!-- /.tt-section-inner --> */}
                                    </div>
                                    {/* <!-- End tt-section --> */}


                                </div>
                                {/* <!-- End page content --> */}


                                {/* <!-- ====================== */}
					{/* ///// Begin tt-footer ///// */}
					{/* =========================== --> */}
                                <footer id="tt-footer">
                                    <div class="tt-footer-inner">

                                        {/* <!-- Begin footer column  */}
							{/* ========================= --> */}
                                        <div class="footer-col tt-align-center-left">
                                            <div class="footer-col-inner">

                                                {/* <!-- You can use whatever button or link here --> */}
                                                <div class="tt-btn tt-btn-link">
                                                    <a href="#" class="scroll-to-top" data-hover="Back to top">Back to top</a>
                                                </div>

                                             </div> {/* <!-- /.footer-col-inner --> */}
                                        </div>
                                        {/* <!-- Begin footer column --> */}

                                        {/* <!-- Begin footer column  */}
							{/* ========================= --> */}
                                        <div class="footer-col tt-align-center order-m-last">
                                            <div class="footer-col-inner">

                                                <div class="tt-copyright">
                                                    © Copyright - <a href="https://themetorium.net" target="_blank" rel="noopener" class="tt-link">Themetorium.net</a>
                                                </div>

                                             </div> {/* <!-- /.footer-col-inner --> */}
                                        </div>
                                        {/* <!-- Begin footer column --> */}

                                        {/* <!-- Begin footer column  */}
							{/* ========================= --> */}
                                        <div class="footer-col tt-align-center-right">
                                            <div class="footer-col-inner">

                                                <div class="footer-social">
                                                    <div class="footer-social-text"><span>Follow</span><i class="fas fa-share-alt"></i></div>
                                                    <div class="social-buttons">
                                                        <ul>
                                                            <li><a href="https://www.facebook.com/themetorium" class="magnetic-item" target="_blank" rel="noopener">Fb.</a></li>
                                                            <li><a href="https://twitter.com/Themetorium" class="magnetic-item" target="_blank" rel="noopener">Tw.</a></li>
                                                            <li><a href="https://www.youtube.com/" class="magnetic-item" target="_blank" rel="noopener">Yt.</a></li>
                                                            <li><a href="https://dribbble.com/Themetorium" class="magnetic-item" target="_blank" rel="noopener">Dr.</a></li>
                                                            <li><a href="https://www.behance.net/Themetorium" class="magnetic-item" target="_blank" rel="noopener">Be.</a></li>
                                                        </ul>
                                                     </div> {/* <!-- /.social-buttons --> */}
                                                 </div> {/* <!-- /.footer-social --> */}

                                             </div> {/* <!-- /.footer-col-inner --> */}
                                        </div>
                                        {/* <!-- Begin footer column --> */}

                                    </div> 
                                    {/* <!-- /.tt-section-inner --> */}
                                </footer>
                                {/* <!-- End tt-footer --> */}


                            </div>

    )
};
