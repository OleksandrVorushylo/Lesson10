'use strict';

const books = document.querySelectorAll('.books'),
      book = document.querySelectorAll('.book'),
      title = document.querySelectorAll('a'),
      ul = document.querySelectorAll('ul'),
      book2Chapter = book[0].childNodes[3].querySelectorAll('li'),
      book5Chapter = book[5].childNodes[3].querySelectorAll('li'),
      adv = document.querySelector('.adv');
      // console.log('books: ', books);
      // console.log('book: ', book);
      // console.log('title: ', title);
      // console.log('book2Chapter: ', book2Chapter);
      // console.log('book5Chapter: ', book5Chapter);
      

adv.remove(); // Удалил рекламу


  // Изменение расположения
books[0].prepend(book[1]);
books[0].append(book[2]);
book[3].before(book[4]);
// .after

  // Исправление заголовка

title[4].textContent = 'Книга 3. this и Прототипы Объектов';

  // Порядок глав 2й книги

book2Chapter[3].after(book2Chapter[6]);
book2Chapter[6].after(book2Chapter[8]);
book2Chapter[10].before(book2Chapter[2]);

  // Порядок глав 5й книги 

book5Chapter[3].before(book5Chapter[9]);
book5Chapter[6].before(book5Chapter[2]);
book5Chapter[8].before(book5Chapter[5]);

  // Добавление новой главы

const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
book[2].childNodes[3].append(newChapter);

  // Замена фона

document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';