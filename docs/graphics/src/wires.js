// Tiny connector helper: measures boxes relative to .frame and draws hairline
// paths (with optional small arrowheads) into an <svg class="wires">.
// Each page defines window.layoutWires(api); it runs once fonts have loaded,
// then sets <body data-ready="1"> for render.mjs.
(function () {
  const NS = "http://www.w3.org/2000/svg";
  function api(frame, svg) {
    const f = frame.getBoundingClientRect();
    const r = (el) => {
      const b = (typeof el === "string" ? frame.querySelector(el) : el).getBoundingClientRect();
      const x = b.left - f.left - frame.clientLeft, y = b.top - f.top - frame.clientTop;
      return { l: x, t: y, r: x + b.width, b: y + b.height, cx: x + b.width / 2, cy: y + b.height / 2, w: b.width, h: b.height };
    };
    const path = (pts, opts = {}) => {
      const p = document.createElementNS(NS, "path");
      p.setAttribute("d", pts.map((q, i) => (i ? "L" : "M") + q[0] + " " + q[1]).join(" "));
      if (opts.dash) p.setAttribute("stroke-dasharray", opts.dash);
      svg.appendChild(p);
      if (opts.arrow) head(pts[pts.length - 2], pts[pts.length - 1]);
      if (opts.arrowStart) head(pts[1], pts[0]);
    };
    // Small filled arrowhead pointing from a to b, tip at b.
    const head = (a, b, size = 11) => {
      const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
      const w = size * 0.5;
      const bx = b[0] - Math.cos(ang) * size, by = b[1] - Math.sin(ang) * size;
      const pts = [b, [bx - Math.sin(ang) * w, by + Math.cos(ang) * w], [bx + Math.sin(ang) * w, by - Math.cos(ang) * w]];
      const t = document.createElementNS(NS, "path");
      t.setAttribute("class", "head");
      t.setAttribute("d", "M" + pts.map((q) => q.join(" ")).join(" L") + " Z");
      svg.appendChild(t);
    };
    return { r, path, head };
  }
  async function run() {
    await document.fonts.ready;
    const frame = document.querySelector(".frame");
    const svg = frame.querySelector("svg.wires");
    if (svg && window.layoutWires) {
      svg.innerHTML = "";
      window.layoutWires(api(frame, svg));
    }
    document.body.dataset.ready = "1";
  }
  window.addEventListener("load", run);
})();
