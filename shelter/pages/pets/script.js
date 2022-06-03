//function anchor() {
//    const anchors = document.querySelectorAll('a[href*="#"]')
//
//    for (let anchor of anchors) {
//    anchor.addEventListener('click', function (e) {
//        e.preventDefault()
//        
//        const blockID = anchor.getAttribute('href').substr(1)
//        
//        document.getElementById(blockID).scrollIntoView({
//        behavior: 'smooth',
//        block: 'start'
//        })
//    })
//    }
//}

function burgerBtn() {
    const buttonClick = document.querySelector(".header__burger");
    const menuBurger = document.querySelector(".header__nav-menu_burger");
    const content = document.querySelector(".content");
    const bodyPage = document.querySelector('body');
    
    const closeBurger = () =>  {
        buttonClick.classList.toggle("header__burger-active");
        menuBurger.classList.toggle("header__nav-menu_burger-drive");
        content.classList.toggle("content-dark");

        (menuBurger.classList.contains("header__nav-menu_burger-drive") == true) ? bodyPage.style.overflow = "hidden" : bodyPage.style.overflow = "auto";
    }

    menuBurger.querySelectorAll('a').forEach(link => {
        link.addEventListener("click", closeBurger)
    });

    document.addEventListener("click", (e) => {
		if (e.target.closest(".content-dark")) {
            buttonClick.classList.remove("header__burger-active");
            menuBurger.classList.remove("header__nav-menu_burger-drive");
            content.classList.remove("content-dark");
            bodyPage.style.overflow = "auto";
		}
	});

    buttonClick.addEventListener("click", closeBurger);
}


//anchor();
burgerBtn();