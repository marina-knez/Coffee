const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function(){
    if(searchBox.style.top == '72px',
    searchBox.style.opacity == '1') {
        searchBox.style.top = '24px';
        searchBox.style.pointerEvents ='none';
        searchBox.style.opacity = '0';
    } else {
        searchBox.style.top ='72px';
        searchBox.style.pointerEvents = 'auto';
        searchBox.style.opacity = '1';
    };
});

menuIcon.addEventListener('click', function(){
    if(slideoutMenu.style.opacity == '1') {
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    } else {
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    };
});
  