console.clear();
import "./index.scss";

const path = window.location.pathname !== "/" ? window.location.pathname : "/home";

const page = require(`./views${path}.js`);
// Add html in page
document.getElementById("root").innerHTML = page.html;
// Add run page script
if (page.script) page.script();
