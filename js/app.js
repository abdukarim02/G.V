// alert('hello');
document.addEventListener("DOMContentLoaded", () => {
    const menuList = document.querySelector(".bar__menu-list");
  
    menuList.addEventListener("click", () => {
      menuList.classList.toggle("active");
    });
  
    // Закрыть меню при клике вне его области
    document.addEventListener("click", (event) => {
      if (!menuList.contains(event.target)) {
        menuList.classList.remove("active");
      }
    });
  });
  
  