async function getData() {
    const popupInfo = document.querySelector(".popup__info");
    const popupName = document.querySelector(".popup__name");
    const popupAminal = document.querySelector(".popup__animal");
    const popupDescription = document.querySelector(".popup__description");
    const popupImg = document.querySelector(".popup__img");
    const popupAge = document.querySelector(".popup__age");
    const popupInooculations = document.querySelector(".popup__inooculations");
    const popupDiseases = document.querySelector(".popup__diseases");
    const popupParasites = document.querySelector(".popup__parasites");
    const ourFriendsName = document.getElementsByClassName("our-friends__name")[0].innerHTML; //временное решение
    console.log(ourFriendsName)

    function popup() {
        const cartClick = document.querySelector(".our-friends__cart");
        const cartClicks = document.querySelector(".our-friends__carts");
        const popupCenter = document.querySelector(".popup_center");
        const closePopup = document.querySelector(".popup__cls-btn");
        const bodyPage = document.querySelector("body");
        //const hiddenCls = document.querySelector(".hidden_close");

        const openPopup = () =>  {
            popupCenter.classList.toggle("hidden");
            //popupCenter.classList.toggle("hidden_close");

            (popupCenter.classList.contains("hidden") == false) ? bodyPage.style.overflow = "hidden" : bodyPage.style.overflow = "auto";
        }

        //(popupCenter.classList.contains("hidden_close") == false) ? popupCenter.addEventListener("click", openPopup) : bodyPage.style.overflow = "auto";
        closePopup.addEventListener("click", openPopup);
        cartClicks.querySelectorAll('.our-friends__cart').forEach(element => {
            element.addEventListener("click", openPopup)
        });
    };

    fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/markups/level-2/shelter/pets.json') 
        .then(res => res.json())
            .then(data => {
            console.log(data);
                
            function popupInfo(name) {
                data.forEach(el => {
                    if (el.name === name) {
                        popupImg.src = el.img;
                        popupName.textContent = el.name;
                        popupAminal.textContent = `${el.type} - ${el.breed}`;
                        popupDescription.textContent = el.description;
                        popupAge.textContent = el.age;
                        popupInooculations.textContent = el.inoculations;
                        popupDiseases.textContent = el.diseases;
                        popupParasites.textContent = el.parasites;
                    }
                });
            }

            popupInfo(ourFriendsName);
            popup();
        });
}

getData();
