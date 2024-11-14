const menuToggle = document.getElementById("menu-toggle")
const menuList = document.getElementById("menu-list")

menuToggle.addEventListener("click", function(){
    menuList.classList.toggle('active');
})
