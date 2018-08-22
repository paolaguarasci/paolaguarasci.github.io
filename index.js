require("normalize.css");
import "./src/scss/main.scss";

function requireAll(r) {
  r.keys().forEach(r);
}

// Import all IMG files
const img = requireAll(require.context("./src/img", true, /\.(png|jpg|gif)$/));

// Import all HTML files
requireAll(require.context("./src/", true, /\.(html|htm|)$/));
