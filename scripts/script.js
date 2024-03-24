//---------------------------- Global styles ----------------------------
if (document.querySelector(".page")) {
    let page = document.querySelector(".page");
    if (document.querySelector(".site-header")) {
        window.addEventListener('scroll', function () {
            let scrollPosition = window.scrollY;
            if (scrollPosition > 10 && width > 767) {
                page.classList.add("page-scrolled");
            } else {
                page.classList.remove("page-scrolled");
            }
        });
    }
}