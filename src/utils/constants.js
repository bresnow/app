export const scripts = [{ src: "js/bootstrap.min.js" }, { src: "js/main.min.js" }, { src: "js/slick.min.js" }]
export const peers = ["http://0.0.0.0:3000/gun"];

export const imgGenStyles = {
    ".card": { color: "#fff" },
    "#hero": {
        marginBottom: "2rem",
        display: "flex",
        gap: "2rem",
        justifyContent: "space-between"
    },
    "#hero img": { width: "328px", height: "339px", borderRadius: "1rem" },
    ".info": { paddingTop: "2rem" },
    "#prompt": { height: "25px", width: "200px" },
    button: { height: "30px" },
    ".lds-ring": {
        display: "inline-block",
        position: "relative",
        width: "80px",
        height: "80px"
    },
    ".lds-ring div": {
        boxSizing: "border-box",
        display: "block",
        position: "absolute",
        width: "64px",
        height: "64px",
        margin: "8px",
        border: "8px solid #fff",
        borderRadius: "50%",
        animation: "lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        borderColor: "#fff transparent transparent transparent"
    },
    ".lds-ring div:nth-child(1)": { animationDelay: "-0.45s" },
    ".lds-ring div:nth-child(2)": { animationDelay: "-0.3s" },
    ".lds-ring div:nth-child(3)": { animationDelay: "-0.15s" },
    "@keyframes lds-ring": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" }
    }
}
