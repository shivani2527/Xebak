document.querySelectorAll('.menu-bar ul li a').forEach(item => {
    item.addEventListener('click', function() {
        let submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('dropdown-menu')) {
            submenu.classList.toggle('active');
        }
    });
});

document.querySelectorAll('.menu-bar .dropdown-menu').forEach(item => {
    item.previousElementSibling.addEventListener('click', function(e) {
        e.preventDefault();
        let parent = this.parentElement;
        parent.classList.toggle('active');
        parent.querySelector('.dropdown-menu').classList.toggle('active');
    });
});

document.querySelector('#checkbtn').addEventListener('click', function() {
    document.querySelector('.menu-bar ul').classList.toggle('active');
});
