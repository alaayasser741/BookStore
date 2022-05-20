function getBooks() {
    let myRequset = new XMLHttpRequest(),
        url = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor';

    myRequset.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let myData = JSON.parse(this.responseText);
            let books = myData.items;

            //  books in Home section
            let standBooksRow = document.querySelector('.books-stand');
            let sectionhome = '';
            //  books in featured section

            let stanRow = document.querySelector('.featerd-books');
            let sectionfeatured = '';

            // arrivals section
            let row = document.querySelector('.book-get');
            let row2 = document.querySelector('.book-get2');
            let section = "";
            for (i = 0; i < books.length; i++) {
                let img = books[i].volumeInfo.imageLinks.smallThumbnail;
                let title = books[i].volumeInfo.title;
                let link = books[i].volumeInfo.infoLink;

                // 
                section += `
                <a href="${link}" class="swiper-slide box">
                    <div class="image">
                        <img src="${img}" alt="book">
                    </div>
                    <div class="content">
                        <h3>${title}</h3>
                        <div class="price">$15.99 <span>$20.99</span></div>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </a>
                `;


                sectionfeatured += `
                <div class="swiper-slide box">
                    <div class="icons">
                        <a href="#"><i class="fas fa-search"></i></a>
                        <a href="#"><i class="fas fa-heart"></i></a>
                        <a href="#"><i class="fas fa-eye"></i></a>
                    </div>
                    <div class="image">
                        <img src="${img}" alt="book">
                    </div>
                    <div class="content">
                        <h3>${title}</h3>
                        <div class="price">$15.00 <span>$20.99</span></div>
                        <a href="${link}" class="Btn text-decoration-none">add to cart</a>
                    </div>
                </div>
                `;

                sectionhome += `
                    <a href="${link}" class="swiper-slide"><img src="${img}" alt="book-1"></a>
                `
            }

            row.innerHTML = section;
            row2.innerHTML = section;
            stanRow.innerHTML = sectionfeatured;
            standBooksRow.innerHTML = sectionhome;
        }else if(this.readyState === 4){
            row.innerHTML = "Thanks for visit our site We work now to fix this problem";
            row2.innerHTML = "Thanks for visit our site We work now to fix this problem";
            stanRow.innerHTML = "Thanks for visit our site We work now to fix this problem";
            standBooksRow.innerHTML = "Thanks for visit our site We work now to fix this problem";
        }
    }
    myRequset.open('GET', url, true);
    myRequset.send();
}
getBooks();