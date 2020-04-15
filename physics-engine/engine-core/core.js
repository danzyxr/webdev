var engine = engine || {};
engine.core = (function() {})();

let x_w = 800;
let y_h = 450;
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.x_w = x_w;
canvas.y_h = y_h;

let public = {
  x_w: x_w,
  y_h: y_h,
  context: context,
};
return public;
