import "./src/scss/main.scss";

function requireAll(r) {
  r.keys().forEach(r);
}

// // Import all IMG files
// const img = requireAll(require.context("./src/img", true, /\.(png|jpg|gif)$/));

// Import all HTML files
requireAll(require.context("./src/", true, /\.(html|htm|)$/));

// Font Awesome TEST Stuff
const icon = document.createElement("i");
const cl = ["fas", "fa-asd", "fa-5x"];
for (let i in cl) {
  icon.classList.add(cl[i]);
}

const icons = document.querySelector(".icons");
const link = document.createElement("a");
link.href = "#!";
link.appendChild(icon);
icons.appendChild(link);

// _____________________ //
