async function sliderMain() {
                const popupСenter = document.querySelector(".popup_center");
            const popupName = document.querySelector(".popup__name");
            const popupAminal = document.querySelector(".popup__animal");
            const popupDescription = document.querySelector(".popup__description");
            const popupImg = document.querySelector(".popup__img");
            const popupAge = document.querySelector(".popup__age");
            const popupInooculations = document.querySelector(".popup__inooculations");
            const popupDiseases = document.querySelector(".popup__diseases");
            const popupParasites = document.querySelector(".popup__parasites");
            const closePopup = document.querySelector(".popup__cls-btn");
            const sliderBtn = document.querySelectorAll(".our-friends__button-arrows");
            const bodyPage = document.querySelector("body");
            //const lockPadding = document.querySelectorAll(".lock-padding");

            //const lockPaddingValue = window.innerWidth - document.querySelector(".wraper").offsetWidth + "px";

            /*fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/markups/level-2/shelter/pets.json') 
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


            function openPopup(slide) {
                if (lockPadding.length > 0) {
                    for (let i = 0; i < lockPadding.length; i++) {
                        lockPadding[i].style.paddingRight = lockPaddingValue;
                    }
                }
                body.style.paddingRight = lockPaddingValue;
                insertPopapInfo(slide.dataset.petName);
                infoPopap.classList.add("active");
                document.body.classList.add("lock");
            }

            function closePopap() {
                for (let i = 0; i < lockPadding.length; i++) {
                    lockPadding[i].style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                infoPopap.classList.remove("active");
                document.body.classList.remove("lock");
            }


            export const switchPopap = () => {
                const slides = document.querySelectorAll(".pet-item");
                slides.forEach(slide => {
                    slide.addEventListener("click", () => {
                        showPopap(slide);
                    });
                });
                btnPopapClose.addEventListener("click", closePopap);

                document.addEventListener("mousedown", (e) => {
                    if (!e.target.closest(".menu") && !e.target.closest(".info-popap__content")) {
                        closePopap();
                    }
                });
            }

            sliderBtns.forEach(btn => {
                btn.addEventListener("click", switchPopap);
            });

});/*
}


