export function slideshow(show) {

    let count = 1;

    setInterval(() => {

        let i = count % show.length;
        let prev = ((i - 1 + show.length) % show.length);

        show[prev].fadeOut(200, () => show[i].fadeIn(200));

        ++count;

    }, 8000);
}