document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.imageRow').forEach(row => {
        row.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                row.scrollBy({
                    left: e.deltaY < 0 ? -100 : 100, // прокручиваем влево или вправо
                    behavior: 'smooth' // плавный скроллинг
                });
            }
        });
    });
});
