const getTheTitles = function(books) {
    let titles = [];
    for(const book of books)
        titles.push(book.title);
    
        return titles;
};

module.exports = getTheTitles;
