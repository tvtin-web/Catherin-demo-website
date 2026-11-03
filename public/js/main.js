var year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

var toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.addEventListener("click", function () {
    var root = document.documentElement;
    var current = root.getAttribute("data-theme");
    if (!current) {
      current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

var printBtn = document.getElementById("print-cv");
if (printBtn) printBtn.addEventListener("click", function () { window.print(); });
