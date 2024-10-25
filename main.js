


document.addEventListener('DOMContentLoaded', async () => {
    const booksContainer = document.getElementById('books-container');
    const selectedBooks = []; // Array to store selected book details

    // Load books from books.json
    const booksData = await fetch('books.json').then(res => res.json());

    // Display books in the container
    booksData.forEach((book, index) => {

        // console.log("book console", book)
        const bookCard = document.createElement('div');
        bookCard.classList.add('col-md-3', 'mb-4');
        bookCard.innerHTML = `
            <div class="card" style="width: 202px; border-style: none; background: transparent;">
                <img src="${book.image}" class="card-img-top" alt="${book.title}" style="width: 200px; height: 280px;">
                <div class="card-body p-0">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.price}</p>
                    <button class="btn btn-primary add-to-cart-btn" data-book-index="${index}">Add to Cart</button>
                </div>
            </div>
        `;
        booksContainer.appendChild(bookCard);
    });

    // ADD TO CART BUTTON'S FUNCTIONALITY
    booksContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const bookIndex = e.target.getAttribute('data-book-index');
            const selectedBook = booksData[bookIndex];
            
            // SELECTED BOOK PUSHED TO ARR
            selectedBooks.push({ title: selectedBook.title, price: selectedBook.price });

            // Stroring data to send 
            const modalContent = selectedBooks.map(book => `Book Title: ${book.title}, Price: ${book.price}`);

            // 
            document.getElementById('modalBookTitle').innerHTML = modalContent;

            
            
            // Show modal
            const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
            cartModal.show();
        }
    });
});

  



