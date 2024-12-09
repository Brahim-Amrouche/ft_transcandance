import Ura from "ura";
import Navbar from "../utils/Navbar/Navbar.jsx";
// Ura.loadCSS("./home.css")
// import style from "./home.css"
// console.log(style);
function Home() {
    const [render, State] = Ura.init();
    const [getter, setter] = State(0);
    // if (!Ura.store.get("user")) {
    //   Ura.navigate("/login")
    //   window.location.reload();
    // }
    // else
    return render(() => (Ura.element("div", { className: "home" },
        Ura.element(Navbar, null),
        Ura.element("div", { id: "center" },
            Ura.element("h1", null,
                "Join Your ",
                Ura.element("b", null, "Friends")),
            Ura.element("h1", null, "and"),
            Ura.element("h1", null,
                Ura.element("o", null, "Beat"),
                " them")),
        Ura.element("div", { id: "bottom" },
            Ura.element("button", { onclick: () => Ura.navigate("/user") },
                Ura.element("h3", null, "Enter the Arena"))))));
}
export default Home;