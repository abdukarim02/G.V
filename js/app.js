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
  
  const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Add active class to the clicked tab and corresponding content
        tab.classList.add('active');
        const target = document.getElementById(tab.dataset.tab);
        target.classList.add('active');
      });
    });