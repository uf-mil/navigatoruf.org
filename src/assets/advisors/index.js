// assets/members/index.js
const images = {};

function importAll(r) {
  r.keys().forEach((key) => (images[key.replace("./", "")] = r(key)));
}

importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

export default images;
