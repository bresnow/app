import { Template } from ".";

export  function BlogDetail(params) {
    return (
    <section class="blog_details_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="blog_single_info" name="blogpost" contentEditable="true">
                        <img class="single_post_one" src="/img/blog/blog_single.jpg" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laborum velit deserunt, maxime, qui vel beatae ratione non odio aut labore natus doloribus repellendus porro fugit. Ullam quasi aut animi? </p>
                            <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar
                                custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e
                                plu commun paroles. </p>
                            <blockquote class="text-white">
                               This application is currently under construction. Thanks for your patience.
                                <div class="name">Bresnow</div>
                            </blockquote>
                            <p>Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari
                                quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari
                                quam li existent Europan lingues. It va esser tam simplic quam</p>
                            <p>Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat
                                Angles, quam un skeptic Cambridge amico dit me que Occidental es. Pretium class
                                phasellus netus porta conubia habitasse.</p>
                            <img class="single_post_two" src="/img/blog/blog_single2.jpg" alt="" />
                                <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por
                                    scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe
                                    solmen in li grammatica, li pronunciation e li plu commun vocabules. </p>
                                <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar
                                    custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e
                                    plu commun paroles. </p>
                                <div class="post_share">
                                    Shared:
                                    <ul class="list-unstyled">
                                        <li><a href="#"><i class="social_facebook"></i></a></li>
                                        <li><a href="#"><i class="social_twitter"></i></a></li>
                                        <li><a href="#"><i class="social_linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <div class="recent_post">
                                    <h2 class="blog_post_title">You may also like</h2>
                                    <div class="recent_post_info">
                                        <div class="recent_blog_item">
                                            <img src="/img/recent_post_img1.jpg" alt="" />
                                                <a href="#">
                                                    <h3>Tools available to find design issues</h3>
                                                </a>
                                        </div>
                                        <div class="recent_blog_item">
                                            <img src="/img/recent_post_img2.jpg" alt="" />
                                                <a href="#">
                                                    <h3>Alternative colors that match
                                                        perfectly</h3>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="s_comment_list">
                                    <h2 class="blog_post_title">Comments (03)</h2>
                                    <ul class="list-unstyled s_comment_list_inner">
                                        <li class="s_comment">
                                            <div class="media">
                                                <div class="c_img"><img src="/img/blog/comments_1.png" alt="" /></div>
                                                <div class="media-body">
                                                    <h3>Stamp Cohel</h3>
                                                    <div class="date">May 28, 2020 at 11:30 pm</div>
                                                    <p>Pretium class phasellus netus porta conubia habitasse libero risus
                                                        mauris fames aenean faucibus ligula, himenaeos nec tortor lacus
                                                        sociosqu
                                                        suspendisse aliquam ullamcorper.
                                                    </p>
                                                    <a href="#"><i class="fas fa-reply"></i> Reply</a>
                                                </div>
                                            </div>
                                            <ul class="list-unstyled">
                                                <li class="s_comment">
                                                    <div class="media replay_comment">
                                                        <div class="c_img"><img src="/img/blog/comments_2.png" alt="" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h3>Cristel Stiveens</h3>
                                                            <div class="date">May 28, 2020 at 11:30 pm</div>
                                                            <p>Habitasse libero risus mauris fames aenean faucibus ligula,
                                                                himenaeos nec tortor lacus socios.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="s_comment">
                                            <div class="media">
                                                <div class="c_img"><img src="/img/blog/comments_1.png" alt="" /></div>
                                                <div class="media-body">
                                                    <h3>Stamp Cohel</h3>
                                                    <div class="date">May 28, 2020 at 11:30 pm</div>
                                                    <p>Pretium class phasellus netus porta conubia habitasse libero risus
                                                        mauris fames aenean faucibus ligula, himenaeos nec tortor lacus
                                                        sociosqu
                                                        suspendisse aliquam ullamcorper.
                                                    </p>
                                                    <a href="#"><i class="fas fa-reply"></i> Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
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
                            </div>
                    </div>
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
                    </div>
                </div>
            </div>
    </section>)
};
