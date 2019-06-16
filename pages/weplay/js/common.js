document.addEventListener('DOMContentLoaded', function(){

    var dropLink = document.querySelector('.header-lang-link'),
        dropList = document.querySelector('.header-lang-list'),
        dropItem = document.querySelectorAll('.header-lang-item'),
        cookiePopup = document.querySelector('.line'),
        cookieClose = document.querySelector('.line-close'),
        menuItem = document.querySelectorAll('.left-list-link'),
        popupLink = document.querySelector('.header-btn'),
        popup = document.querySelector('.popup'),
        popupClose = document.querySelector('.popup-close'),
        chatBtn = document.querySelector('.right-top'),
        chat = document.querySelector('.right'),
        menuBtn = document.querySelector('.header-lines');
        menu = document.querySelector('.left');

    //open lang list
    dropLink.addEventListener("click", function(e){
        e.preventDefault();
        dropList.classList.toggle("active");
    });

    //click lang item
    for (var i = 0; i < dropItem.length; i++) {
        dropItem[i].addEventListener("click", function(e){
            e.preventDefault();
            dropLink.innerHTML = this.innerText;
        });
    }

    //close lang list (some document click)
    document.addEventListener('click', function(event) {
        if (!dropLink.contains(event.target)) {
            dropList.classList.remove("active");
        }
    });

    //close cookie popup
    cookieClose.addEventListener("click", function(e){
        e.preventDefault();
        cookiePopup.classList.remove("active");
    });

    //open / close lang list
    popupLink.addEventListener("click", function(e){
        e.preventDefault();
        popup.classList.add("active");
    });
    popupClose.addEventListener("click", function(e){
        e.preventDefault();
        popup.classList.remove("active");
    });

    //open / close chat
    chatBtn.addEventListener("click", function(e){
        e.preventDefault();
        chat.classList.toggle("active");
    });

    //mobile menu open / close

    menuBtn.addEventListener("click", function(e){
        e.preventDefault();
        this.classList.toggle("active");
        menu.classList.toggle("active");
    });

    //menu item click
    for (var i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener("click", function(e) {
            e.preventDefault();
            var current = document.querySelectorAll('.left-list-link.active');
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

});
