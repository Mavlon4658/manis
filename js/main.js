const items = document.querySelectorAll('.item');

items.forEach((item) => {
    const header = item.querySelector('.header');
    const content = item.querySelector('.content');

    header.addEventListener('click', () => {
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    });
});