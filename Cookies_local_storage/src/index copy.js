const setCookiesBtn = document.getElementById('set-cookies-btn');
const showCookiesBtn = document.getElementById('show-cookies-btn');
const cookieMessagesDiv = document.getElementById('cookie-messages');

setCookiesBtn.addEventListener('click', () => {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    // Set cookies with appropriate expiration date and secure/HttpOnly flags
    document.cookie = `firstname=${firstName}; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}; secure; HttpOnly`;
    document.cookie = `email=${email}; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}; secure; HttpOnly`;

    displayMessage('Cookies set successfully!');
});

showCookiesBtn.addEventListener('click', () => {
    const firstNameCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('firstname='));
    const emailCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('email='));

    if (firstNameCookie && emailCookie) {
        const firstName = firstNameCookie.split('=')[1].trim();
        const email = emailCookie.split('=')[1].trim();

        displayMessage(`Cookies: firstName=${firstName}, email=${email}`);
    } else {
        displayMessage('No cookies found.');
    }
});

function displayMessage(message) {
    const p = document.createElement('p');
    p.textContent = message;
    cookieMessagesDiv.appendChild(p);
}

// ... (same code as before)

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) {
            return value;
        }
    }
    return ''; // Return empty string if cookie not found
}

showCookiesBtn.addEventListener('click', () => {
    const firstName = getCookie('firstname');
    const email = getCookie('email');

    if (firstName && email) {
        displayMessage(`Email: ${email} - Firstname: ${firstName}`);
    } else {
        displayMessage('No cookies found.');
    }
});

// ... (same code for setCookiesBtn and displayMessage)

// ... (other functions remain the same)

function showForm() {
    const welcomeMessage = document.querySelector('h1');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';
}

function hideForm() {
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'none';
}

function deleteCookiesAndShowForm() {
    document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    showForm();
}

function showWelcomeMessageOrForm() {
    const firstName = getCookie('firstname');
    if (firstName) {
        const body = document.body;
        body.innerHTML = `
            <h1>Welcome ${firstName} <a href="#" style="font-weight: normal; font-style: italic; margin-left: 10px;">(logout)</a></h1>
        `;
        const logoutLink = body.querySelector('a');
        logoutLink.addEventListener('click', () => {
            deleteCookiesAndShowForm();
            hideForm(); // Hide the welcome message
        });
    } else {
        showForm();
    }
}

// Call showWelcomeMessageOrForm initially to check for login status
showWelcomeMessageOrForm();

// ... (other functions remain the same)

// Remove unnecessary getCookie function

function deleteCookiesAndShowForm() {
    Cookies.remove('firstname');
    Cookies.remove('email');
    showForm();
  }
  
  function setCookiesAndShowWelcomeMessage() {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
  
    // Set cookies with appropriate expiration date and secure/HttpOnly flags
    Cookies.set('firstname', firstName, { expires: 10, secure: true, HttpOnly: true });
    Cookies.set('email', email, { expires: 10, secure: true, HttpOnly: true });
  
    showWelcomeMessageOrForm();
  }
  
  // Call showWelcomeMessageOrForm initially to check login status
  showWelcomeMessageOrForm();
  
  const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

  if (!localStorage) {
      alert('Sorry, your browser does not support Web storage. Try again with a better one');
  } else {
      createStore();
      displayCart();
  }
  
  function addItemToCart(item) {
      localStorage.setItem(item, true);
  }
  
  function createStore() {
      const cartContainer = document.getElementById('cart-container');
      const ul = document.createElement('ul');
      cartContainer.appendChild(ul);
  
      availableItems.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          li.addEventListener('click', () => addItemToCart(item));
          ul.appendChild(li);
      });
  }
  
  function displayCart() {
      const cartCount = Object.keys(localStorage).length;
      if (cartCount > 0) {
          const p = document.createElement('p');
          p.textContent = `You previously had ${cartCount} items in your cart`;
          document.body.appendChild(p);
      }
  }
  
