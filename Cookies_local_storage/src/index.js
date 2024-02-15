const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

// ... (other code)

// Choose one and remove the other:
// function getCookie(name) { ... }  // Manual cookie parsing
// Cookies.get(name);              // js-cookie

function deleteCookiesAndShowForm() {
  // Use js-cookie consistently if chosen
  if (Cookies) {
    Cookies.remove('firstname');
    Cookies.remove('email');
  } else {
    // Fallback to manual cookie removal if js-cookie not available
    document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
  showForm();
}

function setCookiesAndShowWelcomeMessage() {
  // Use js-cookie consistently if chosen
  if (Cookies) {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    Cookies.set('firstname', firstName, { expires: 10, secure: true, HttpOnly: true });
    Cookies.set('email', email, { expires: 10, secure: true, HttpOnly: true });
  } else {
    // Fallback to manual cookie setting if js-cookie not available
    document.cookie = `firstname=${firstName}; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}; secure; HttpOnly`;
    document.cookie = `email=${email}; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}; secure; HttpOnly`;
  }
  showWelcomeMessageOrForm();
}

// Remove redundant call:
showWelcomeMessageOrForm();

// ... (other code)

// Consolidate availableItems declaration:
// const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

// Remove redundant calls:
// createStore();
// displayCart();

// ... (Local Storage code)

// ... (Session Storage code)

function addItemToCart(item) {
  let cart = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
  cart.push(item);
  sessionStorage.setItem('cartItems', JSON.stringify(cart));
}

// ... (other code)
