console.clear();
import "./style/fluid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "./assets/Bebas-Neue/fonts.css";
import "./assets/Poppins/fonts.css";
import "./index.scss";

// dymanicall import and add page
const path = window.location.pathname !== "/" ? window.location.pathname : "/home";
import(`./views${path}.js`).then((page) => page.load());
