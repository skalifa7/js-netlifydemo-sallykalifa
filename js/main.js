const fullMenu = document.getElementById('full-menu');

const showBtn = document.getElementById('show-menu');

const closeBtn = document.getElementById('close-btn');

showBtn.addEventListener('click', function() {
    fullMenu.classList.add('show');
});

closeBtn.addEventListener('click', function() {
    fullMenu.classList.remove('show');
})