console.clear();
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/fluid.css";
import "remixicon/fonts/remixicon.css";
// import "@popperjs/core"
import "bootstrap/dist/js/bootstrap.bundle"
import "./assets/Bebas-Neue/fonts.css";
import "./assets/Poppins/fonts.css";
import "./index.scss";

// dymanicall import and add page
const path = window.location.pathname !== "/" ? window.location.pathname : "/home";
console.log(window.location);
import(`./views${path}.js`)
  .then((page) => page.load())
  .catch((error) => {
    console.error(error);
    import(`./views/notfound`).then((page) => page.load());
  });
