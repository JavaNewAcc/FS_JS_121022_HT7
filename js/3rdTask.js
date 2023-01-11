window.onload = () => {
    let filmArr = [];
    let currentYear = new Date().getFullYear();

    class filmItem {
        constructor(filmName, year, genre, views) {
            this.filmName = filmName;
            this.year = year;
            this.genre = genre;
            this.views = views;
        }

        filmInfo() { return `Назва фільму "${this.filmName}". Він був випущений у ${this.year} році. Жанр фільму: ${this.genre}. Кількість переглядів: ${this.views}` }

        filmAddToArr(filmArrElement) {
            filmArr.push(filmArrElement);
        }

        ratingCalc(obj) {
            let filmRating = obj.views / (currentYear - obj.year);
            return filmRating;
        };
    };

    let film1 = new filmItem(`Термінатор`, 1984, `бойовик`, 9999999);
    console.log(film1.filmInfo());
    film1.filmAddToArr(film1);
    console.log(`Поточни рейтинг фільму: ${film1.ratingCalc(film1)}`);

    let film2 = new filmItem(`Тітанік`, 1997, `фільм-катастрофа`, 7777777);
    console.log(film2.filmInfo());
    film2.filmAddToArr(film2);
    console.log(`Поточни рейтинг фільму: ${film1.ratingCalc(film2)}`);

    let film3 = new filmItem(`Один вдома`, 1990, `комедія`, 8888888);
    console.log(film3.filmInfo());
    film3.filmAddToArr(film3);
    console.log(`Поточний рейтинг фільму: ${film1.ratingCalc(film3)}`);

    function filmSort(filmA, filmB) {
        if (filmA.year < filmB.year) return -1;
        if (filmA.year > filmB.year) return 1;
        return 0;
    }

    filmArr.sort(filmSort)

    for (filmYearElem of filmArr) {
        const { year } = filmYearElem;
        console.log(year);
    }

}