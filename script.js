// Theme toggle
const themeBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// On page load: if "light" was saved last time, switch to light straight away
if (localStorage.getItem("theme") === "light") {
    root.classList.add("light");
}

themeBtn.addEventListener("click", () => {
    root.classList.toggle("light");

    // Save the current choice
    const isLight = root.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Download PDF Button
const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", () => {
    window.print();
});
