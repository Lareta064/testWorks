document.addEventListener('DOMContentLoaded', function(){
    // показать/скрыть мобильное меню
    const headerMenu = document.querySelector('#header-menu');
    const toggleIcon = document.querySelector('#nav-icon');
    const bodyLock = document.body;

    toggleIcon.addEventListener('click', function () {
        if(this.classList.contains('nav-icon--active')) {
            this.classList.remove('nav-icon--active');
            headerMenu.classList.remove('open');
            bodyLock.classList.remove('lock');
        } else {
            this.classList.add('nav-icon--active');
            headerMenu.classList.add('open');
            bodyLock.classList.add('lock');
        }
    });

    headerMenu.addEventListener('click', function(){
        this.classList.remove('open');
        toggleIcon.classList.remove('nav-icon--active');
        bodyLock.classList.remove('lock');
    })
});