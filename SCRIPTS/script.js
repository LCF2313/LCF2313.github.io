/*Js for toggle menu*/

var menuItems = document.getElementById("menu-items");
menuItems.style.maxHeight = "0px";
        function menutoggle() {
            if (menuItems.style.maxHeight == "0px") {
                menuItems.style.maxHeight = "250px"
            }
            else {
                menuItems.style.maxHeight = "0px"
            }
        }