import { Frag } from '../../../runtime/vhtml/index';
import Logo from '../../components/logo';
const SignIn = () => {


    return (
        <div id="create" class="section__content">
            <div class="center screen gap air">
                <div class="unit row gap">
                    <a href="#home"><Logo size={100}/></a>
                </div>

                <form id="signup">
                    <input class='center unit max row' id='alias' placeholder='Who are you?' />
                    <div class='unit row gap'>
                        <input class="act primary" type="submit" value="Get Started" />
                    </div>
                </form>

                <div class='unit row gap'>
                    <a href='#auth' class='act surface'>Already have an account</a>
                </div>

            </div>
        </div>
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
JOY.route.page("create", function () {
    if (JOY.key) {
        JOY.route("home");
    }
    // JOY.head("Join", true);
    var name = $("#alias");
    name.focus();
    var $form = $("#signup");
    $form.submit(async function (e) {
        // e.preventDefault();
console.log('clicked')
        gun.user().auth(
            null,
            async (ack) => {
                var avatar = await SEA.work(JOY.key.pub, null, null, {
                    name: "SHA-256",
                });
                console.log(avatar, "AVATAR");
                console.log(name.val());
                JOY.user.get("epub").put(JOY.key.epub);
                JOY.user.get("profile").get("name").put(name.val());
                JOY.user.get("profile").get("avatar").put(avatar);
                // history.back();
                JOY.route("home");
            },
            true
        );
    });
});

export default SignIn;
