document.addEventListener("DOMContentLoaded", function () {
    let acc = document.querySelectorAll(".accordion");

    acc.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});

