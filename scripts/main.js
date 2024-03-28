new kursor ({
    type: 1,
    removeDefaultCursor:true
})

//! ext 
const ucPopups = document.querySelectorAll('.uc-popup');
const popup = document.querySelector('.popup');
const okBtn = document.querySelector('.popup button');

ucPopups.forEach(ucPopup => {
    ucPopup.addEventListener("click", () => {
        popup.classList.add("open-popup");
    });
});

okBtn.addEventListener("click", () => {
    popup.classList.remove("open-popup");
});

