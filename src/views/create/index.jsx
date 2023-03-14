import { Frag } from '../../../runtime/vhtml/index';
const SignIn = () => {


    return (
        <div id="create" className="section__content">
            <div  class="back"></div>
            <div class="registration-form">
                <header>
                    <h1>Sign Up</h1>
                    <p>Fill in all informations</p>
                </header>
                <form>
                    <div class="input-section email-section">
                        <input class="email" type="email" placeholder="ENTER YOUR E-MAIL HERE" autocomplete="off" />
                        <div class="animated-button"><span class="icon-paper-plane"><i class="fa fa-envelope-o"></i></span><span class="next-button email"><i class="fa fa-arrow-up"></i></span></div>
                    </div>
                    <div class="input-section password-section folded">
                        <input class="password" type="password" placeholder="ENTER YOUR PASSWORD HERE" />
                        <div class="animated-button"><span class="icon-lock"><i class="fa fa-lock"></i></span><span class="next-button password"><i class="fa fa-arrow-up"></i></span></div>
                    </div>
                    <div class="input-section repeat-password-section folded">
                        <input class="repeat-password" type="password" placeholder="REPEAT YOUR PASSWORD HERE" />
                        <div class="animated-button"><span class="icon-repeat-lock"><i class="fa fa-lock"></i></span><span class="next-button repeat-password"><i class="fa fa-paper-plane"></i></span></div>
                    </div>
                    <div class="success">
                        <p>ACCOUNT CREATED</p>
                    </div>
                </form>
            </div></div>
    )
}

const stylesUno = {
    // body: { fontFamily: '"Roboto"' },
    ".back": {
        background: "linear-gradient(120grad, #643986, #98aed5)",
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    ".registration-form": {
        width: "400px",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: "15%",
        background: "transparent"
    },
    ".registration-form header": {
        position: "relative",
        zIndex: 4,
        background: "white",
        padding: "20px 40px",
        borderRadius: "15px 15px 0 0"
    },
    ".registration-form header h1": {
        fontWeight: 900,
        letterSpacing: "1.5px",
        color: "#333",
        fontSize: "23px",
        textTransform: "uppercase",
        margin: "0"
    },
    ".registration-form header p": {
        wordSpacing: "0px",
        color: "#9facb6",
        fontSize: "17px",
        margin: "0",
        marginTop: "5px"
    },
    ".registration-form form": { position: "relative" },
    ".registration-form .input-section": {
        width: "100%",
        position: "absolute",
        display: "flex",
        left: "50%",
        transform: "translate(-50%, 0)",
        height: "75px",
        borderRadius: "0 0 15px 15px",
        overflow: "hidden",
        zIndex: 2,
        boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2s ease-in"
    },
    ".registration-form .input-section.folded": {
        width: "95%",
        marginTop: "10px",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: 1
    },
    ".registration-form .input-section.folded input": {
        backgroundColor: "#e9e2c0"
    },
    ".registration-form .input-section.folded span": {
        backgroundColor: "#e9e2c0"
    },
    ".registration-form .input-section.folded + .folded": {
        width: "90%",
        marginTop: "20px",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: 0
    },
    ".registration-form .input-section.folded + .folded input": {
        backgroundColor: "#e1bcef"
    },
    ".registration-form .input-section.folded + .folded span": {
        backgroundColor: "#e1bcef"
    },
    ".registration-form .input-section.fold-up": { marginTop: "-75px" },
    ".registration-form form input": {
        background: "white",
        color: "#8f8fd6",
        width: "80%",
        border: "0",
        padding: "20px 40px",
        margin: "0"
    },
    ".registration-form form input:focus": { outline: "none" },
    ".registration-form form input::-moz-placeholder": {
        color: "#8f8fd6",
        fontWeight: 100
    },
    ".registration-form form input:-ms-input-placeholder": {
        color: "#8f8fd6",
        fontWeight: 100
    },
    ".registration-form form input::placeholder": {
        color: "#8f8fd6",
        fontWeight: 100
    },
    ".animated-button": { width: "20%", backgroundColor: "#d4d4ff" },
    ".animated-button span": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        lineHeight: "75px",
        textAlign: "center",
        height: "75px",
        transition: "all 0.2s ease-in"
    },
    ".animated-button span i": { fontSize: "25px", color: "#9999f8" },
    ".animated-button .next-button": {
        background: "transparent",
        color: "#9999f8",
        fontWeight: 100,
        width: "100%",
        border: "0"
    },
    ".next": { marginTop: "-75px" },
    ".success": {
        width: "100%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        left: "50%",
        transform: "translate(-50%, 0)",
        height: "75px",
        borderRadius: "0 0 15px 15px",
        overflow: "hidden",
        zIndex: 2,
        boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2s ease-in",
        background: "limegreen",
        marginTop: "-75px"
    },
    ".success p": {
        color: "white",
        fontWeight: 900,
        letterSpacing: "2px",
        fontSize: "18px",
        width: "100%",
        textAlign: "center"
    }
}

JOY.css(stylesUno)
// JOY.css(suno1)
JOY.route.page('create', ()=> {
    gun.get("main_section").get("section_header").put({
        title: "Sign In",
        subtitle: "Authorization component under construction. Thanx.", username: "Bresnow"
    })
    $('.email').on("change keyup paste",
        function () {
            if ($(this).val()) {
                $('.icon-paper-plane').addClass("next");
            } else {
                $('.icon-paper-plane').removeClass("next");
            }
        }
    );

    $('.next-button').hover(
        function () {
            $(this).css('cursor', 'pointer');
        }
    );

    $('.next-button.email').click(
        function () {
            console.log("Something");
            $('.email-section').addClass("fold-up");
            $('.password-section').removeClass("folded");
        }
    );

    $('.password').on("change keyup paste",
        function () {
            if ($(this).val()) {
                $('.icon-lock').addClass("next");
            } else {
                $('.icon-lock').removeClass("next");
            }
        }
    );

    $('.next-button').hover(
        function () {
            $(this).css('cursor', 'pointer');
        }
    );

    $('.next-button.password').click(
        function () {
            console.log("Something");
            $('.password-section').addClass("fold-up");
            $('.repeat-password-section').removeClass("folded");
        }
    );

    $('.repeat-password').on("change keyup paste",
        function () {
            if ($(this).val()) {
                $('.icon-repeat-lock').addClass("next");
            } else {
                $('.icon-repeat-lock').removeClass("next");
            }
        }
    );

    $('.next-button.repeat-password').click(
        function () {
            console.log("Something");
            $('.repeat-password-section').addClass("fold-up");
            $('.success').css("marginTop", 0);
        }
    );
})
export default SignIn;
