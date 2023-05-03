export function SideBar() {
    return (
        <div class="col-lg-4">
            <div class="blog_right_sidebar">
                <div class="sidebar_widget recent_post_widget">
                    <h3 class="sidebar_title">Recent post</h3>
                    <ul class="list-unstyled">
                        <li>
                            <div class="media">
                                <img src="/img/blog/sidebar_post_1.jpg" alt="" />
                                <div class="media-body">
                                    <a href="#">
                                        <h4>Ideal tools for productivity when working on the tablet</h4>
                                    </a>
                                    <div class="date">3 mins ago</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="media">
                                <img src="/img/blog/sidebar_post_2.jpg" alt="" />
                                <div class="media-body">
                                    <a href="#">
                                        <h4>How to organize our ideal workspace today</h4>
                                    </a>
                                    <div class="date">5 mins ago</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="media">
                                <img src="/img/blog/sidebar_post_3.jpg" alt="" />
                                <div class="media-body">
                                    <a href="#">
                                        <h4>Exercise as an essential stop for productivity and creativity
                                        </h4>
                                    </a>
                                    <div class="date">3 mins ago</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="media">
                                <img src="/img/blog/sidebar_post_4.jpg" alt="" />
                                <div class="media-body">
                                    <a href="#">
                                        <h4>Navigating a bit about the contrasts in the ideal photo</h4>
                                    </a>
                                    <div class="date">10 mins ago</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="sidebar_widget instragram_widget">
                    <h3 class="sidebar_title">Instagram gallery</h3>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#">
                                <img src="/img/blog/instragram1.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/blog/instragram2.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/blog/instragram3.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/blog/instragram4.jpg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="sidebar_widget category_widget">
                    <h3 class="sidebar_title">Pages widget</h3>
                    <ul class="list-unstyled">
                        <li><a href="#">Sample page</a></li>
                        <li><a href="#">About Us </a></li>
                        <li><a href="#">Conatct Us</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Shortcode Page</a></li>
                    </ul>
                </div>
            </div>
        </div>)
};


export function PageDetail() {
    return (
        <section name="page_detail" class="blog_details_area">
            <div class="container">
                <div class="row">
                    <img name="image_01" class="single_post_one w-3/4" src="/img/brand_dev/staencide_product_photo.jpg" alt="" />
                    <div class="col-lg-8">
                        <div class="blog_single_info" name="blogpost" >
                            <blockquote name="blockquote" class="text-white">
                                I collaborate with a network of creative professionals to maximize the advantage of human communication. There's an immediate leverage as there is multiple disciplined perspectives. 
                                It's done when we're all satisfied.
                                <div name="quote_name"class="name">– Bresnow</div>
                            </blockquote>
                            <p></p>
                            <h3 class="text-white">Brand Identity</h3>
                            <p>Bresnow works closely with copywriters and other content creators to develop a clear messaging strategy. 
                                This strategy is used to design logos, icons, color schemes, typography, and other visual elements that align with and communicate the brand's core values and target audience</p>
                            <h3 class="text-white">Product Development</h3>
                            <p>By partnering with developers, manufacturers, marketers, retailers, supply chain managers, and more during the conceptualization process, Bresnow thrives in the midst of fresh perspectives and expert insights into the fold. This results in attractive packaging, informative instruction manuals, innovative advertising campaigns, interactive demonstrations, smartphone apps, ecommerce sites, and loyalty programs among other assets essential for commercial success.</p>
                            <h3 class="text-white">Event Coordination</h3>
                            <p>Combining his skills with experts who excel at event execution and coordination ensures successful occasions. A well-designed event logo, promotional materials, signage, lighting displays, social media graphics, web landing pages, email invitations & reminders, and mobile apps (if relevant) harmonize under one consistent theme reflecting organizational message while providing necessary functional components. As details come together prior to launch, everyone involved reviews proposals considering practicality, budget constraints, timeliness, and visual appeal before making final selections.</p>
                            <img class="single_post_two" src="/img/brand_dev/tank_mockup.JPG" alt="" />
                            <div class="post_share">
                                Shared:
                                <ul class="list-unstyled">
                                    <li><a href="#"><i class="social_facebook"></i></a></li>
                                    <li><a href="#"><i class="social_twitter"></i></a></li>
                                    <li><a href="#"><i class="social_linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <RecentPost />
                        <Testimonial />
                    </div>
                </div>
            </div>
        </section>)
};


export function CommentArea() {
    return (
        <div class="comment_area">
            <h2 class="blog_post_title">Leave a comment</h2>
            <form action="#" class="row contact_us_form">
                <div class="col-lg-6 form-group">
                    <input type="text" id="name" class="form-control" name="name"
                        placeholder="Name *" />
                </div>
                <div class="col-lg-6 form-group">
                    <input type="email" id="email" class="form-control" name="email"
                        placeholder="Your email *" />
                </div>
                <div class="col-lg-12 form-group">
                    <textarea class="form-control" name="message" id="message" cols="30" rows="10"
                        placeholder="Write your comment"></textarea>
                </div>
                <div class="form-group col-md-12">
                    <button type="submit" value="submit" class="submit_btn">
                        Send comment
                    </button>
                </div>
            </form>
        </div>
    )
}
export function RecentPost() {
    return (
    <div class="recent_post ">
        <h2 class="blog_post_title text-white">Development</h2>
        <div class="recent_post_info">
            <div class="recent_blog_item">
                <img src="/img/wallet/avatars/avatar_2.jpg" alt="" />
                <a href="#stopwatch">
                    <h3 class="text-white">Temporary Link</h3>
                </a>
            </div>
            <div class="recent_blog_item">
                <img src="/img/wallet/avatars/avatar_3.jpg" alt="" />
                <a href="#wallet">
                    <h3 class="text-white">Temporary Link</h3>
                </a>
            </div>
        </div>
    </div>
    )
}
export function Testimonial() {
    return (<div class="s_comment_list">
        <h2 class="blog_post_title text-white">Testimonials</h2>
        <ul class="list-unstyled s_comment_list_inner">
            <li class="s_comment">
                <div class="media">
                    <div class="c_img"><img src="/img/wallet/avatars/avatar_1.jpg" alt="" /></div>
                    <div class="media-body">
                        <h3 class="secondary-50">Jessica S. – Event Coordinator</h3>
                        {/* <div class="date">May 28, 2020 at 11:30 pm</div> */}
                        <p>I recently had the pleasure of attending an event organized by the team, and I must say, everything was just perfect! The logistics management system designed by [ Bresnow ] made sure team members' schedules were easy to access and respond.  From to the fun and engaging music planned by the bands that performed, every detail was taken care of without any hassle.
                        </p>
                        <a href="#"><i class="fas fa-reply"></i> Reply</a>
                    </div>
                </div>
            </li>

        </ul>
    </div>)
}