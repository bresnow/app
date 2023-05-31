import { Esc } from "../views/demo"
import HashRoute from "./joy-jsx/hash-route"

export default function ({ route }) {
    const $class = "w-full lg:w-2/3 lg:mx-auto leading-normal tracking-normal text-indigo-400 h-full bg-slate"
    JOY.route.page(route, () => {

        console.log("jkasfgjkbd")

    })

    return (
        <HashRoute route={route} class={$class}>
            <div id="body-inner">
                <div id="scroll-container">
                    <StickyHeader />
                    <ContentWrap route={route}/>
                </div>
            </div>
        </HashRoute>
    )
};
function StickyHeader() {
    return (
        <header id="tt-header" class="tt-header-fixed">
            <div class="tt-header-inner">
                {/* <!-- add/remove class "tt-wrap" to enable/disable element boxed layout (class "tt-boxed" is required in <body> tag!). Note: additionally you can use prepared helper class "max-width-*" to add custom width to "tt-wrap". Example: "max-width-1500" (class "tt-wrap" is still required!). More info about helper classes can be found in the file "helper.css". --> */}

                <div class="tt-header-col">

                    {/* <!-- Begin logo =========== --> */}
                    <div class="tt-logo">
                        <a href="#">
                            {/* <!-- Hint: You may need to change the img height to match your logo type. You can do this from the "theme.css" file (find: ".tt-logo img"). --> */}
                            <img src="assets/img/FMLogoWhite.png" class="tt-logo-light magnetic-item" alt="Logo" />
                            {/* <!-- logo light --> */}
                            <img src="assets/img/FMLogoWhite.png" class="tt-logo-dark magnetic-item" alt="Logo" />
                            {/* <!-- logo dark --> */}
                        </a>
                    </div>
                    {/* <!-- End logo --> */}

                </div>
                {/* <!-- /.tt-header-col --> */}

                <div class="tt-header-col">


                    {/* <!-- Begin overlay menu */}
                    {/* ========================
                            * Use class "tt-ol-menu-center" to align menu to center.
                            * Use class "tt-ol-menu-count" to enable menu counter.
		--> */}

                    {/* <!-- End overlay menu --> */}

                </div>
                {/* <!-- /.header-col --> */}
            </div>
            {/* <!-- /.header-inner --> */}
        </header>
    )
}
function PageHeader() {
    return (
        <div id="page-header" class="ph-full ph-cap-sm ph-image-cropped ph-image-cover-3 ph-content-parallax">
            <div class="page-header-inner tt-wrap">

                {/* <!-- Begin page header image ======================== --> */}
                <div class="ph-image">
                    <div class="ph-image-inner">
                        <img src="assets/img/page-header/ph-6.jpg" alt="Image" />
                    </div>
                </div>
                {/* <!-- End page header image --> */}

                {/* <!-- Begin page header caption */}
                {/* ===============================
                                Use class "max-width-*" to set caption max width if needed. For example "max-width-1000". More info about helper classes can be found in the file "helper.css".
		--> */}
                <div class="ph-caption max-width-1000">
                    <h1 class="ph-caption-title ph-appear font-normal"><em>Hail The Floating Mammoth!</em><br /> We are a creative design agency based in Wilmington, Delaware. We bring your <em><u>ideas</u></em> to life.</h1>
                    
                    {/* <!-- <div class="ph-caption-subtitle ph-appear">Subtitle</div> --> */}
                </div>
                {/* <!-- End page header caption --> */}

            </div>
            {/* <!-- /.page-header-inner --> */}

            {/* <!-- Begin scroll down circle (you can change "data-offset" to set scroll top offset) ======================== --> */}
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
                </div>
                {/* <!-- /.sdc-inner --> */}
            </a>
            {/* <!-- End scroll down circle --> */}

        </div>
    )
}
function Portfolio() {
    return (
        <div id="portfolio-grid" class="pgi-cap-inside pgi-hover">

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
            <div class="tt-grid ttgr-layout-creative-2 ttgr-not-cropped ttgr-gap-4">

                {/* <!-- Begin tt-Grid items wrap ============================ --> */}
                <div class="tt-grid-items-wrap isotope-items-wrap">

                    {/* <!-- Begin tt-Grid item======================= --> */}
                    <div class="tt-grid-item isotope-item people">
                        <div class="ttgr-item-inner">

                            {/* <!-- Begin portfolio grid item */}
                            {/* ===============================
                                                        * Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"! Also no effect on small screens!).
								--> */}
                            <div class="portfolio-grid-item">
                                <a href="single-project-1.html" class="pgi-image-wrap" data-cursor="View<br>Project">
                                    {/* <!-- Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". --> */}
                                    <div class="pgi-image-holder cover-opacity-2">
                                        <div class="pgi-image-inner anim-zoomin">
                                            <figure class="pgi-image ttgr-height">
                                                <img src="assets/img/portfolio/portfolio-1.jpg" alt="image" />
                                            </figure>
                                            {/* <!-- /.pgi-image --> */}
                                        </div>
                                        {/* <!-- /.pgi-image-inner --> */}
                                    </div>
                                    {/* <!-- /.pgi-image-holder --> */}
                                </a>
                                {/* <!-- /.pgi-image-wrap --> */}

                                <div class="pgi-caption">
                                    <div class="pgi-caption-inner">
                                        <h2 class="pgi-title">Victorian Girls</h2>
                                        <div class="pgi-categories-wrap">
                                            <div class="pgi-category">People</div>
                                            {/* <!-- <div class="pgi-category">Varia</div> --> */}
                                        </div>
                                        {/* <!-- /.pli-categories-wrap --> */}
                                    </div>
                                    {/* <!-- /.pgi-caption-inner --> */}
                                </div>
                                {/* <!-- /.pgi-caption --> */}
                            </div>
                            {/* <!-- End portfolio grid item --> */}

                        </div>
                        {/* <!-- /.ttgr-item-inner --> */}
                    </div>
                    {/* <!-- End tt-Grid item --> */}

                    {/* <!-- Begin tt-Grid item======================= --> */}
                    <div class="tt-grid-item isotope-item creative">
                        <div class="ttgr-item-inner">

                            {/* <!-- Begin portfolio grid item */}
                            {/* ===============================
                                                        * Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
								--> */}
                            <div class="portfolio-grid-item anim-parallax">
                                <a href="single-project-2.html" class="pgi-image-wrap" data-cursor="View<br>Project">
                                    {/* <!-- Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". --> */}
                                    <div class="pgi-image-holder cover-opacity-2">
                                        <div class="pgi-image-inner anim-zoomin">
                                            <figure class="pgi-image ttgr-height">
                                                <img src="assets/img/portfolio/portfolio-2.jpg" alt="image" />
                                            </figure>
                                            {/* <!-- /.pgi-image --> */}
                                        </div>
                                        {/* <!-- /.pgi-image-inner --> */}
                                    </div>
                                    {/* <!-- /.pgi-image-holder --> */}
                                </a>
                                {/* <!-- /.pgi-image-wrap --> */}

                                <div class="pgi-caption">
                                    <div class="pgi-caption-inner">
                                        <h2 class="pgi-title">Smithy</h2>
                                        <div class="pgi-categories-wrap">
                                            <div class="pgi-category">Creative</div>
                                            {/* <!-- <div class="pgi-category">Varia</div> --> */}
                                        </div>
                                        {/* <!-- /.pli-categories-wrap --> */}
                                    </div>
                                    {/* <!-- /.pgi-caption-inner --> */}
                                </div>
                                {/* <!-- /.pgi-caption --> */}
                            </div>
                            {/* <!-- End portfolio grid item --> */}

                        </div>
                        {/* <!-- /.ttgr-item-inner --> */}
                    </div>
                    {/* <!-- End tt-Grid item --> */}

                    {/* <!-- Begin tt-Grid item======================= --> */}
                    <div class="tt-grid-item isotope-item people">
                        <div class="ttgr-item-inner">

                            {/* <!-- Begin portfolio grid item
                                                        ===============================
                                                        * Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
								--> */}
                            <div class="portfolio-grid-item">
                                <a href="single-project-3.html" class="pgi-image-wrap" data-cursor="View<br>Project">
                                    {/* <!-- Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". --> */}
                                    <div class="pgi-image-holder cover-opacity-2">
                                        <div class="pgi-image-inner anim-zoomin">
                                            <figure class="pgi-video-wrap ttgr-height">
                                                <video class="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
                                                    <source src="assets/vids/fashion-week.mp4" type="video/mp4" />
                                                    <source src="assets/vids/fashion-week.webm" type="video/webm" />
                                                </video>
                                            </figure>
                                            {/* <!-- /.pgi-video-wrap --> */}
                                        </div>
                                        {/* <!-- /.pgi-image-inner --> */}
                                    </div>
                                    {/* <!-- /.pgi-image-holder --> */}
                                </a>
                                {/* <!-- /.pgi-image-wrap --> */}

                                <div class="pgi-caption">
                                    <div class="pgi-caption-inner">
                                        <h2 class="pgi-title">Washion Week</h2>
                                        <div class="pgi-categories-wrap">
                                            <div class="pgi-category">People</div>
                                            {/* <!-- <div class="pgi-category">Varia</div> --> */}
                                        </div>
                                        {/* <!-- /.pli-categories-wrap --> */}
                                    </div>
                                    {/* <!-- /.pgi-caption-inner --> */}
                                </div>
                                {/* <!-- /.pgi-caption --> */}
                            </div>
                            {/* <!-- End portfolio grid item --> */}

                        </div>
                        {/* <!-- /.ttgr-item-inner --> */}
                    </div>
                    {/* <!-- End tt-Grid item --> */}

                    {/* <!-- Begin tt-Grid item======================= --> */}
                    <div class="tt-grid-item isotope-item nature">
                        <div class="ttgr-item-inner">

                            {/* <!-- Begin portfolio grid item
                                                        ===============================
                                                        * Use class "pgi-image-is-light" if needed, it makes the caption visible better if you use light image (only effect if "pgi-cap-inside" is enabled on "portfolio-grid"!).
								--> */}
                            <div class="portfolio-grid-item">
                                <a href="single-project-4.html" class="pgi-image-wrap" data-cursor="View<br>Project">
                                    {/* <!-- Use class "cover-opacity-*" to set image overlay if needed. For example "cover-opacity-2". Useful if class "pgi-cap-inside" is enabled on "portfolio-grid". Note: It is individual and depends on the image you use. More info about helper classes in file "helper.css". --> */}
                                    <div class="pgi-image-holder cover-opacity-2">
                                        <div class="pgi-image-inner anim-zoomin">
                                            <figure class="pgi-image ttgr-height">
                                                <img src="assets/img/portfolio/portfolio-3.jpg" alt="image" />
                                            </figure>
                                            {/* <!-- /.pgi-image --> */}
                                        </div>
                                        {/* <!-- /.pgi-image-inner --> */}
                                    </div>
                                    {/* <!-- /.pgi-image-holder --> */}
                                </a>
                                {/* <!-- /.pgi-image-wrap --> */}

                                <div class="pgi-caption">
                                    <div class="pgi-caption-inner">
                                        <h2 class="pgi-title">Mystery Forest</h2>
                                        <div class="pgi-categories-wrap">
                                            <div class="pgi-category">Nature</div>
                                            {/* <!-- <div class="pgi-category">Varia</div> --> */}
                                        </div>
                                        {/* <!-- /.pli-categories-wrap --> */}
                                    </div>
                                    {/* <!-- /.pgi-caption-inner --> */}
                                </div>
                                {/* <!-- /.pgi-caption --> */}
                            </div>
                            {/* <!-- End portfolio grid item --> */}

                        </div>
                        {/* <!-- /.ttgr-item-inner --> */}
                    </div>
                    {/* <!-- End tt-Grid item --> */}

                </div>
                {/* <!-- End tt-Grid items wrap  --> */}

            </div>
            {/* <!-- End tt-Grid --> */}

        </div>
    )
}
function Heading({name}) {
    return (
        <div name={name+"/heading"}class="tt-heading tt-heading-lg tt-heading-center margin-bottom-10-p anim-fadeinup">
            <h3 class="tt-heading-subtitle text-gray-500"><Esc  name={"subtitle"}/></h3>
            <h2 class="tt-heading-title"><Esc name={"title"}/></h2>
        </div>
    )
}
function ContentWrap({route}) {
    gun.get("hash-route").get(route).get("WhatWeDo/heading").put({ title: "Services", subtitle:"What We Do"})
    return (
        <div id="content-wrap">


            {/* <!-- ======================== */}
            {/* ///// Begin page header /////
                        =============================
                        * Use class "ph-full" to enable fullscreen size.
                        * Use class "ph-cap-sm", "ph-cap-lg", "ph-cap-xlg" or "ph-cap-xxlg" to set caption size (no class = default size).
                        * Use class "ph-center" to enable content center position.
                        * Use class "ph-bg-image" to enable page header background image (required for a portfolio single project!).
                        * Use class "ph-bg-image-is-light" if needed, it makes the elements dark and more visible if you use a very light image (effect only with class "ph-bg-image").
                        * Use class "ph-image-shadow" to enable page header background image (effect only with class "ph-bg-image").
                        * Use class "ph-image-cropped" to crop image. It fixes image dimensions (no effect for "ph-bg-image"!).
                        * Use class "ph-image-cover-*" to set image overlay opacity. For example "ph-image-cover-2" or "ph-image-cover-2-5" (up to "ph-image-cover-9-5").
                        * Use class "ph-content-parallax" to enable content parallax.
                        * Use class "ph-stroke" to enable caption title stroke style.
--> */}
            <PageHeader />

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
                <div class="tt-section no-padding-bottom">
                    <div class="tt-section-inner">

                        {/* <!-- Begin tt-Heading */}
                        {/* ======================
                                    * Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
                                    * Use class "tt-heading-stroke" to enable stroke style.
                                    * Use class "tt-heading-center" to align tt-Heading to center.
                                    * Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
			--> */}

                        {/* <!-- End tt-Heading --> */}


                        {/* <!-- Begin portfolio grid (works combined with tt-Ggrid!) */}
                        {/* ==========================
                                    * Use class "pgi-hover" to enable portfolio grid item hover effect (behavior depends on "ttgr-gap-*" classes below!).
                                    * Use class "pgi-cap-hover" to enable portfolio grid item caption hover effect (effect only with class "pgi-cap-inside"! Also no effect on mobile devices!).
                                    * Use class "pgi-cap-center" to position portfolio grid item caption to center.
                                    * Use class "pgi-cap-inside" to position portfolio grid item caption to inside.
			--> */}

                        {/* <!-- End portfolio grid --> */}

                    </div>
                    {/* <!-- /.tt-section-inner --> */}
                </div>
                {/* <!-- End tt-section --> */}


                {/* <!-- ======================= */}
                {/* ///// Begin tt-section /////
                            ============================
                            * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
	--> */}
                <div class="tt-section padding-bottom-xlg-150 padding-left-sm-3-p padding-right-sm-3-p">
                    <div class="tt-section-inner tt-wrap max-width-1100">

                        {/* <!-- Begin tt-Heading */}
                        {/* ======================
                                    * Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
                                    * Use class "tt-heading-stroke" to enable stroke style.
                                    * Use class "tt-heading-center" to align tt-Heading to center.
                                    * Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
			--> */}
           <Heading name="WhatWeDo"/>
                        {/* <!-- End tt-Heading --> */}

                        {/* <!-- Begin accordion */}
                        {/* =====================
                                    * Use class "tt-ac-sm", "tt-ac-lg", "tt-ac-xlg" or "tt-ac-xxlg" to set accordion size.
                                    * Use class "tt-ac-borders" to enable borders.
                                    * Add class "is-open" to the "tt-accordion-content" to make this content open by default.
			--> */}
<Accordian/>
                        {/* <!-- End accordion --> */}

                    </div>
                    {/* <!-- /.tt-section-inner --> */}
                </div>
                {/* <!-- End tt-section --> */}





                {/* <!-- =======================
                            ///// Begin tt-section /////
                            ============================
                            * You can use padding classes if needed. For example "padding-top-xlg-150", "padding-bottom-xlg-150", "no-padding-top", "no-padding-bottom", etc. Note that each situation may be different and each section may need different classes according to your needs. More info about helper classes can be found in the file "helper.css".
	--> */}
                <div class="tt-section padding-top-xlg-150 padding-bottom-xlg-150 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-3">
                    <div class="tt-section-inner tt-wrap max-width-900">

                        {/* <!-- Begin tt-Heading
                                    ======================
                                    * Use class "tt-heading-xsm", "tt-heading-sm", "tt-heading-lg", "tt-heading-xlg" or "tt-heading-xxlg" to set caption size (no class = default size).
                                    * Use class "tt-heading-stroke" to enable stroke style.
                                    * Use class "tt-heading-center" to align tt-Heading to center.
                                    * Use prepared helper class "max-width-*" to add custom width if needed. Example: "max-width-800". More info about helper classes can be found in the file "helper.css".
			--> */}
                        <div class="tt-heading tt-heading-lg margin-bottom-10-p anim-fadeinup">
                            <h3 class="tt-heading-subtitle text-gray">Get in Touch</h3>
                            <h2 class="tt-heading-title">Drop Us<br /> a Line</h2>
                        </div>
                        {/* <!-- End tt-Heading --> */}

                        {/* <!-- Begin form
                                    ================
                                    * Use class "tt-form-filled" or "tt-form-minimal" to change form style.
                                    * Use class "tt-form-sm" or "tt-form-lg" to change form size (no class = default size).
				--> */}
                        <form id="tt-contact-form" class="tt-form-minimal anim-fadeinup">

                            {/* <!-- Begin hidden required fields (https://github.com/agragregra/uniMail) --> */}
                            <input type="hidden" name="project_name" value="yourwebsiteaddress.com" />
                            {/* <!-- Change value to your site name --> */}
                            <input type="hidden" name="admin_email" value="your@email.com" />
                            {/* <!-- Change value to your valid email address (where a message will be sent) --> */}
                            <input type="hidden" name="form_subject" value="Message from yourwebsiteaddress.com" />
                            {/* <!-- Change value to your own message subject --> */}
                            {/* <!-- End Hidden Required Fields --> */}

                            <div class="tt-row">
                                <div class="tt-col-md-6">

                                    <div class="tt-form-group">
                                        <label>Name <span class="required">*</span></label>
                                        <input class="tt-form-control" type="text" name="Name" placeholder="" required />
                                    </div>

                                </div>
                                {/* <!-- /.tt-col --> */}

                                <div class="tt-col-md-6">

                                    <div class="tt-form-group">
                                        <label>Email address <span class="required">*</span></label>
                                        <input class="tt-form-control" type="email" name="Email" placeholder="" required />
                                    </div>

                                </div>
                                {/* <!-- /.tt-col --> */}
                            </div>
                            {/* <!-- /.tt-row --> */}

                            <div class="tt-form-group">
                                <label>Subject <span class="required">*</span></label>
                                <input class="tt-form-control" type="text" name="Subject" placeholder="" required />
                            </div>

                            <div class="tt-form-group">
                                <label>Select an option <span class="required">*</span></label>
                                <select class="tt-form-control" name="option" required>
                                    <option value="" disabled selected>Please choose an option</option>
                                    <option value="Say Hello">Say hello</option>
                                    <option value="New Project">New project</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div class="tt-form-group">
                                <label>Message <span class="required">*</span></label>
                                <textarea class="tt-form-control" rows="6" name="Message" placeholder="" required></textarea>
                            </div>

                            <small class="tt-form-text"><em>Fields marked with an asterisk (*) are required!</em></small>

                            <div class="tt-btn tt-btn-light-outline margin-top-40">
                                <button type="submit" data-hover="Send Message">Send Message</button>
                            </div>
                        </form>
                        {/* <!-- End form --> */}

                    </div>
                    {/* <!-- /.tt-section-inner --> */}
                </div>
                {/* <!-- End tt-section --> */}


            </div>
            {/* <!-- End page content --> */}


            {/* <!-- ====================== */}
            {/* ///// Begin tt-footer /////==================== --> */}
  <Footer/>
            {/* <!-- End tt-footer --> */}


        </div>
    )
}
function Accordian (){
    const Item = ({title, subtitle})=> {
        return (
            <div class="tt-accordion-item anim-fadeinup">
                <div class="tt-accordion-heading">
                    <h3 class="tt-ac-head-title">{title ?? "UX / Research"}</h3>
                    <div class="tt-accordion-subtext">{subtitle}</div>
                    <div class="tt-accordion-caret-wrap">
                        <div class="tt-accordion-caret magnetic-item"></div>
                    </div>
                </div>
                {/* <!-- /.tt-accordion-content --> */}
            </div>
        )
    }
    return (
        <div class="tt-accordion tt-ac-xlg tt-ac-borders">

            {/* <!-- /.tt-accordion-item --> */}
<Item title={"Brand Development"}/>
<Item title={"Digital Marketing"}/>
<Item title={"Content Creation"}/>
<Item title={"Digital Product Research / Strategy"}/>
            {/* <!-- /.tt-accordion-item --> */}

        </div>
    )
}
function Footer(){
    return (<footer id="tt-footer">
        <div class="tt-footer-inner">

            {/* <!-- Begin footer column ==================== --> */}
            <div class="footer-col tt-align-center-left">
                <div class="footer-col-inner">

                    {/* <!-- You can use whatever button or link here --> */}
                    <div class="tt-btn tt-btn-link">
                        <a href="#" class="scroll-to-top" data-hover="Back to top">Back to top</a>
                    </div>

                </div>
                {/* <!-- /.footer-col-inner --> */}
            </div>
            {/* <!-- Begin footer column --> */}

            {/* <!-- Begin footer column ==================== --> */}
            <div class="footer-col tt-align-center order-m-last">
                <div class="footer-col-inner">

                    <div class="tt-copyright">
                        © Copyright - <a href="https://themetorium.net" target="_blank" rel="noopener" class="tt-link">The Floating Mammoth Collective</a>
                    </div>

                </div>
                {/* <!-- /.footer-col-inner --> */}
            </div>
            {/* <!-- Begin footer column --> */}

            {/* <!-- Begin footer column ==================== --> */}

            {/* <!-- Begin footer column --> */}

        </div>
        {/* <!-- /.tt-section-inner --> */}
    </footer>)
}
function FollowFooter(){
    return(
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
                    </div>
                    {/* <!-- /.social-buttons --> */}
                </div>
                {/* <!-- /.footer-social --> */}

            </div>
            {/* <!-- /.footer-col-inner --> */}
        </div>
    )
}
function ToggleMenu_DontUse() {
    return (
        <div id="tt-ol-menu-toggle-btn-wrap" >
            {/* <!-- Begin overlay menu toggle button --> */}
            <div class="tt-ol-menu-toggle-btn-text">
                <span class="text-menu" data-hover="Open">Menu</span>
                <span class="text-close">Close</span>
            </div>
            <div class="tt-ol-menu-toggle-btn-holder">
                <a href="#" class="tt-ol-menu-toggle-btn magnetic-item"><span></span></a>
            </div>
            {/* <!-- End overlay menu toggle button --> */}
        </div >

    )
};
function Nav_DontUse() {
    return (
        <nav class="tt-overlay-menu tt-ol-menu-center tt-ol-menu-count">
            <div class="tt-ol-menu-holder">
                <div class="tt-ol-menu-inner tt-wrap">
                    <div class="tt-ol-menu-content">

                        {/* <!-- Begin menu list --> */}
                        <ul class="tt-ol-menu-list">

                            {/* <!-- <li><a href="">Single Link</a></li> --> */}

                            {/* <!-- Begin submenu (submenu master)==================================== --> */}
                            <li class="tt-ol-submenu-wrap active">
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

                                        <li class="active"><a href="landing-page-1.html">Landing Page v.1</a></li>
                                        <li><a href="landing-page-2.html">Landing Page v.2</a></li>

                                    </ul>
                                    {/* <!-- /.tt-ol-submenu-list --> */}
                                </div>
                                {/* <!-- /.tt-ol-submenu --> */}
                            </li>
                            {/* <!-- End submenu (sub-master) --> */}

                            {/* <!-- Begin submenu (submenu master)==================================== --> */}
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

                                        {/* <!-- Begin submenu			=================== --> */}
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

                                        {/* <!-- Begin submenu			=================== --> */}
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

                                        {/* <!-- Begin submenu			=================== --> */}
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

                            {/* <!-- Begin submenu (submenu master)==================================== --> */}
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

                            {/* <!-- Begin submenu (submenu master)==================================== --> */}
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

                                        {/* <!-- Begin submenu			=================== --> */}
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

                                        {/* <!-- Begin submenu			=================== --> */}
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

                            {/* <!-- Begin submenu (submenu master)==================================== --> */}
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

                                        {/* <!-- Begin submenu			=================== --> */}
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

                                        {/* <!-- Begin submenu			=================== --> */}
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

                                        {/* <!-- Begin submenu			=================== --> */}
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

                                        {/* <!-- Begin submenu			=================== --> */}
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
    )
}