function changeNavOnScroll() {
    if (this.scrollY >= 150) {
        document.getElementById("navbar").classList.remove("navbar-top");
        document.getElementById("navbar").classList.add("navbar-not-top");
    } else {
        document.getElementById("navbar").classList.remove("navbar-not-top");
        document.getElementById("navbar").classList.add("navbar-top");
    }
}

window.addEventListener("scroll", changeNavOnScroll);