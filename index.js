const header = document.getElementById("header");
const burger = document.getElementById("burger");
const navList = document.getElementById("nav-list");
const slider = document.querySelector(".slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const dots = document.querySelectorAll(".pagination-btn");
const radioLabels = document.querySelectorAll(".radio-label");
const seasons = document.querySelectorAll(".favorites-season");
const checkBtn = document.querySelector(".card-btn");
const userIcon = document.querySelector(".header-icon");
const userMenuNoAuth = document.querySelector(".no-auth");
const registerBtns = document.querySelectorAll(".register-btn");
const registerMenu = document.querySelector(".register");
const modalContainer = document.querySelector(".modal__container");
const registerCloseBtn = document.querySelector(".register__close-btn");
const loginLink = document.querySelector(".login-in-register");
const signUpBtns = document.querySelectorAll(".register__sign-up");
const userFirstName = document.getElementsByName("firstName");
const userLastName = document.getElementsByName("lastName");
const userEmail = document.getElementsByName("email");
const userPassword = document.getElementsByName("password");
const profileIcon = document.querySelector(".profile-icon");
const registerForm = document.querySelector(".register__form");
const leftCardTitle = document.querySelector(".find_card-text");
const leftCardNameInput = document.querySelector(".card-input");
const leftCardNumberInput = document.querySelector(".card-number");
const cardIcons = document.querySelector(".card-icons__wrapper");
const rightCardTitle = document.querySelector(".get_card-text");
const rightCardText = document.querySelector(".get_card-description");
const signUpBtn = document.querySelector(".get-btn");
const cardLoginBtn = document.querySelector(".login-btn");
const booksCount = document.querySelectorAll(".books");
const visitsCount = document.querySelectorAll(".visits");
const profileMenuLoginBtn = document.querySelector(".menu-auth__login-btn");
const loginMenu = document.querySelector(".login");
const loginContainer = document.querySelector(".login__container");
const loginCloseBtn = document.querySelector(".login__close-btn");
const registerLink = document.querySelector(".register-in-login");
const buyBtns = document.querySelectorAll(".buy");
const authBtn = document.querySelector(".login__sign-up");
const checkEmailOrCard = document.getElementById("emailOrCard");
const checkPass = document.getElementById("password");
const userMenuAuth = document.querySelector(".auth");
const authTitle = document.querySelector(".auth-title");
const myProfileLink = document.querySelector(".my-profile__link");
const myProfileContainer = document.querySelector(".my-profile__container");
const myProfile = document.querySelector(".my-profile");
const logOutLink = document.querySelector(".log-out-link");
const myProfileCloseBtn = document.querySelector(".my-profile__close-btn");
const copyIcon = document.querySelector(".rented__copy-icon");
const squareInitials = document.querySelector(".square-initials");
const userNameText = document.querySelector(".userName-text");
const rentedUserCardNumber = document.querySelector(
  ".rented__user-card-number"
);
const buyCard = document.querySelector(".buy-card");
const buyCardContainer = document.querySelector(".buy-card__container");
const buyCardCloseBtn = document.querySelector(".buy-card__close-btn");
const bankCardInput = document.querySelector(".bank-card-number__input");
const buyCardBtn = document.querySelector(".buy-card__button");
const buyCardForm = document.querySelector(".buy-card__form");
const rentedList = document.querySelector(".rented__list");
const bookTitles = document.querySelectorAll(".book-title");

let positionLeft = 0;
let slideIndex = 0;
let userCardNumber = "";
let userInitials = "";
let ownBooks = [];
let ownButtonsIndices = [];

const nextSlide = () => {
  if (positionLeft < (dots.length - 1) * 475) {
    positionLeft += 475;
    slideIndex++;
  } else {
    positionLeft = (dots.length - 1) * 475;
    slideIndex = dots.length - 1;
  }
  slider.style.left = -positionLeft + "px";
  currentSlide(slideIndex);
};

const previousSlide = () => {
  if (positionLeft > 0) {
    positionLeft -= 475;
    slideIndex--;
  } else {
    positionLeft = 0;
    slideIndex = 0;
  }
  slider.style.left = -positionLeft + "px";
  currentSlide(slideIndex);
};

const currentSlide = (index) => {
  for (const dot of dots) {
    dot.classList.remove("brown");
  }
  dots[index].classList.add("brown");
};

const closeRegisterMenu = () => {
  modalContainer.classList.remove("modal_flex");
  modalContainer.classList.add("modal");
  registerMenu.classList.add("modal");
};

const openRegisterMenu = () => {
  modalContainer.classList.remove("modal");
  modalContainer.classList.add("modal_flex");
  registerMenu.classList.remove("modal");
  registerMenu.classList.add("season_show");
};

const changeLeftCard = () => {
  leftCardTitle.textContent = "Your Library card";
  leftCardNameInput.value = `${localStorage.getItem(
    "firstName"
  )} ${localStorage.getItem("lastName")}`;
  leftCardNameInput.classList.add("brown-color");
  leftCardNumberInput.value = `${localStorage.getItem("cardNumber")}`;
  leftCardNumberInput.classList.add("brown-color");
  checkBtn.classList.add("modal");
  cardIcons.classList.remove("modal");
  visitsCount.forEach(
    (count) => (count.innerHTML = `${localStorage.getItem("visits")}`)
  );
  booksCount.forEach(
    (count) => (count.innerHTML = `${localStorage.getItem("books")}`)
  );
};

const changeRightCard = () => {
  rightCardTitle.textContent = "Visit your profile";
  rightCardText.textContent =
    "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
  rightCardText.classList.add("max");
  signUpBtn.classList.add("modal");
  cardLoginBtn.innerHTML = "Profile";
  cardLoginBtn.classList.add("changedToProfile");
  document.querySelector(".changedToProfile").addEventListener("click", () => {
    closeLoginMenu();
    openMyProfile();
  });
};

const changeProfileIcon = () => {
  let userInitials = `${localStorage.getItem("firstName")[0]}${
    localStorage.getItem("lastName")[0]
  }`.toUpperCase();

  profileIcon.classList.add("modal");
  userIcon.innerHTML = `<span class="user-initials">${userInitials}</span>`;
};

const openLoginMenu = () => {
  userMenuNoAuth.classList.add("modal");
  loginContainer.classList.remove("modal");
  loginContainer.classList.add("modal_flex");
  loginMenu.classList.remove("modal");
  loginMenu.classList.add("season_show");
};

const closeLoginMenu = () => {
  loginContainer.classList.remove("modal_flex");
  loginContainer.classList.add("modal");
  loginMenu.classList.add("modal");
};

const openMyProfile = () => {
  userMenuAuth.classList.add("modal");
  userMenuNoAuth.classList.add("modal");
  myProfileContainer.classList.remove("modal");
  myProfileContainer.classList.add("modal_flex");
  myProfile.classList.remove("modal");
  myProfile.classList.add("season_show");
  squareInitials.innerHTML = `${userInitials}`;
  userNameText.innerHTML = `${localStorage.getItem(
    "firstName"
  )} ${localStorage.getItem("lastName")}`;
  rentedUserCardNumber.innerHTML = `${localStorage.getItem("cardNumber")}`;
  booksCount.forEach(
    (count) => (count.innerHTML = `${localStorage.getItem("books")}`)
  );
};

const closeMyProfile = () => {
  myProfileContainer.classList.remove("modal_flex");
  myProfileContainer.classList.add("modal");
  myProfile.classList.add("modal");
};

const openBuyCard = () => {
  buyCardContainer.classList.remove("modal");
  buyCardContainer.classList.add("modal_flex");
  buyCard.classList.remove("modal");
  buyCard.classList.add("season_show");
};

const closeBuyCard = () => {
  buyCardContainer.classList.add("modal");
  buyCardContainer.classList.remove("modal_flex");
  buyCard.classList.add("modal");
};

const booksArray = [];
for (const title of bookTitles) {
  booksArray.push(
    title.textContent
      .replace(" By", ",")
      .replace("\n                   ", "")
      .trim()
  );
}

const authorizeUser = () => {
  changeProfileIcon();
  changeLeftCard();
  changeRightCard();

  userInitials = `${localStorage.getItem("firstName")[0]}${
    localStorage.getItem("lastName")[0]
  }`;

  userIcon.setAttribute(
    "title",
    `${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`
  );

  userIcon.addEventListener("click", (event) => {
    userMenuNoAuth.classList.add("modal");
    userMenuAuth.classList.toggle("modal");
    event.clickOnMenuProfile = true;
  });

  userMenuAuth.addEventListener("click", (event) => {
    event.clickOnMenuProfile = true;
  });

  document.body.addEventListener("click", (event) => {
    if (event.clickOnMenuProfile) return;
    userMenuAuth.classList.add("season_fade");
    setTimeout(() => {
      userMenuAuth.classList.add("modal");
      userMenuAuth.classList.remove("season_fade");
    }, 300);
  });

  authTitle.innerHTML = `${localStorage.getItem("cardNumber")}`;
  authTitle.classList.add("smaller-font-size");

  myProfileLink.addEventListener("click", openMyProfile);

  myProfile.addEventListener("click", (event) => {
    event.clickOnMyProfile = true;
  });

  myProfileCloseBtn.addEventListener("click", (event) => {
    closeMyProfile();
    event.clickOnMyProfile = false;
  });

  myProfileContainer.addEventListener("click", (event) => {
    if (event.clickOnMyProfile) return;
    closeMyProfile();
  });

  copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(localStorage.getItem("cardNumber"));
  });

  logOutLink.addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
  });

  if (localStorage.getItem("ownBooks")) {
    let savedBooks = JSON.parse(localStorage.getItem("ownBooks"))[0];
    for (let i = 0; i < booksArray.length; i++) {
      if (savedBooks.includes(booksArray[i])) {
        buyBtns[i].setAttribute("disabled", "");
        buyBtns[i].classList.add("own");
        buyBtns[i].innerHTML = "Own";
      }
    }
  }

  buyBtns.forEach((button) => {
    button.removeEventListener("click", () => {
      if (localStorage.getItem("isLoggedIn") === "false") {
        openLoginMenu();
      }
    });

    button.addEventListener("click", () => {
      if (
        localStorage.getItem("isLoggedIn") === "true" &&
        localStorage.getItem("hasLibraryCard") === "false"
      ) {
        openBuyCard();
      }
    });
  });

  buyCard.addEventListener("click", (event) => {
    event.clickOnBuyCard = true;
  });

  buyCardCloseBtn.addEventListener("click", (event) => {
    closeBuyCard();
    event.clickOnBuyCard = false;
  });

  buyCardContainer.addEventListener("click", (event) => {
    if (event.clickOnBuyCard) return;
    closeBuyCard();
  });

  buyCardBtn.addEventListener("click", (e) => {
    if (buyCardForm.checkValidity()) {
      e.preventDefault();

      localStorage.setItem("hasLibraryCard", "true");
      closeBuyCard();
    }
  });

  buyBtns.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      if (
        localStorage.getItem("isLoggedIn") === "true" &&
        localStorage.getItem("hasLibraryCard") === "true"
      ) {
        button.setAttribute("disabled", "");
        button.classList.add("own");
        button.innerHTML = "Own";
        localStorage.setItem(
          "books",
          `${parseInt(localStorage.getItem("books")) + 1}`
        );
        booksCount.forEach(
          (count) => (count.innerHTML = `${localStorage.getItem("books")}`)
        );
        ownBooks.push(booksArray[index]);
        localStorage.setItem("ownBooks", JSON.stringify([ownBooks]));

        let listItem = document.createElement("li");
        listItem.classList.add("rented__item");
        listItem.textContent = booksArray[index];
        rentedList.appendChild(listItem);
      }
    });
  });
};

// Бургер меню
burger.addEventListener("click", (event) => {
  header.classList.toggle("active");
  event.clickOnMenu = true;
});

navList.addEventListener("click", (event) => {
  event.clickOnMenu = true;
});

[...navList.children].forEach((child) =>
  child.addEventListener("click", () => {
    if (header.classList.contains("active")) {
      header.classList.remove("active");
    }
  })
);

document.body.addEventListener("click", (event) => {
  if (event.clickOnMenu) return;
  header.classList.remove("active");
});

// LIBRARY#3

// Этап 1: Пользователь не зарегистрирован

localStorage.setItem("isLoggedIn", "false");

// Ограниченная карусель в блоке About
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

dots.forEach((dot, index) =>
  dot.addEventListener("click", () => {
    positionLeft = 475 * index;
    slider.style.left = -positionLeft + "px";
    slideIndex = index;
    currentSlide(slideIndex);
  })
);

// Слайдер в блоке Favorites
radioLabels.forEach((radio, i) =>
  radio.addEventListener("click", () => {
    for (const season of seasons) {
      season.classList.add("season_fade");
      setTimeout(() => {
        season.classList.add("season_hidden");
        seasons[i].classList.remove("season_hidden");
        seasons[i].classList.remove("season_fade");
        seasons[i].classList.add("season_show");
      }, 300);
    }
  })
);

// Нажатие на кнопку Check the card ни к чему не приведёт.
checkBtn.addEventListener("click", (e) => e.preventDefault());

// Этап 2: Пользователь на этапе регистрации

// Меню авторизации при нажатии на иконку пользователя
userIcon.addEventListener("click", (event) => {
  userMenuNoAuth.classList.toggle("modal");
  userMenuNoAuth.classList.add("season_show");
  event.clickOnMenuProfile = true;
});

userMenuNoAuth.addEventListener("click", (event) => {
  event.clickOnMenuProfile = true;
});

document.body.addEventListener("click", (event) => {
  if (event.clickOnMenuProfile) return;
  userMenuNoAuth.classList.add("season_fade");
  setTimeout(() => {
    userMenuNoAuth.classList.add("modal");
    userMenuNoAuth.classList.remove("season_fade");
  }, 300);
});

// Модальное окно REGISTER
registerBtns.forEach((button) =>
  button.addEventListener("click", () => {
    userMenuNoAuth.classList.add("modal");
    openRegisterMenu();
  })
);

registerMenu.addEventListener("click", (event) => {
  event.clickOnMenuRegister = true;
});

registerCloseBtn.addEventListener("click", (event) => {
  closeRegisterMenu();
  event.clickOnMenuRegister = false;
});

modalContainer.addEventListener("click", (event) => {
  if (event.clickOnMenuRegister) return;
  closeRegisterMenu();
});

// Окончание регистрации
signUpBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (registerForm.checkValidity()) {
      e.preventDefault();

      for (let i = 1; i <= 9; i++) {
        userCardNumber += Math.floor(Math.random() * 16)
          .toString(16)
          .toUpperCase();
      }

      localStorage.setItem("firstName", userFirstName[0].value);
      localStorage.setItem("lastName", userLastName[0].value);
      localStorage.setItem("email", userEmail[0].value);
      localStorage.setItem("password", userPassword[0].value);
      localStorage.setItem("cardNumber", userCardNumber);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("visits", "1");
      localStorage.setItem("isRegistered", "true");
      localStorage.setItem("books", "0");
      localStorage.setItem("hasLibraryCard", "false");

      closeRegisterMenu();
      authorizeUser();
    }
  });
});

// При наличии регистрации, но будучи не авторизованным
leftCardNameInput.addEventListener("input", () =>
  leftCardNameInput.classList.add("brown-color")
);

leftCardNumberInput.addEventListener("input", () =>
  leftCardNumberInput.classList.add("brown-color")
);

checkBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("isRegistered") === "true") {
    if (
      leftCardNameInput.value ===
      `${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`
    ) {
      checkBtn.classList.add("modal");
      cardIcons.classList.remove("modal");
      visitsCount.forEach(
        (count) => (count.innerHTML = `${localStorage.getItem("visits")}`)
      );
      booksCount.forEach(
        (count) => (count.innerHTML = `${localStorage.getItem("books")}`)
      );
      setTimeout(() => {
        checkBtn.classList.remove("modal");
        cardIcons.classList.add("modal");
        leftCardNameInput.value = "";
        leftCardNumberInput.value = "";
      }, 10000);
    }
  }
});

// Этап 3: Пользователь на этапе входа в учётную запись после регистрации.

// Модальное окно LOGIN

profileMenuLoginBtn.addEventListener("click", openLoginMenu);
cardLoginBtn.addEventListener("click", openLoginMenu);

loginMenu.addEventListener("click", (event) => {
  event.clickOnMenuLogin = true;
});

loginCloseBtn.addEventListener("click", (event) => {
  closeLoginMenu();
  event.clickOnMenuLogin = false;
});

loginContainer.addEventListener("click", (event) => {
  if (event.clickOnMenuLogin) return;
  closeLoginMenu();
});

registerLink.addEventListener("click", (e) => {
  closeLoginMenu();
  openRegisterMenu();
});

loginLink.addEventListener("click", (e) => {
  closeRegisterMenu();
  openLoginMenu();
});

// Блок Favorites
buyBtns.forEach((button) =>
  button.addEventListener("click", () => {
    if (localStorage.getItem("isLoggedIn") === "false") {
      openLoginMenu();
    }
  })
);

// Авторизация
authBtn.addEventListener("click", (e) => {
  if (
    (checkEmailOrCard.value === localStorage.getItem("email") ||
      checkEmailOrCard.value === localStorage.getItem("cardNumber")) &&
    checkPass.value === localStorage.getItem("password")
  ) {
    e.preventDefault();

    closeLoginMenu();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "visits",
      `${parseInt(localStorage.getItem("visits")) + 1}`
    );

    if (localStorage.getItem("ownBooks")) {
      let savedBooks = JSON.parse(localStorage.getItem("ownBooks"))[0];
      for (const book of savedBooks) {
        let savedItem = document.createElement("li");
        savedItem.classList.add("rented__item");
        savedItem.textContent = book;
        rentedList.appendChild(savedItem);
      }
    }

    authorizeUser();
  }
});

console.log(`
    1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part3.md\n
    2. Deploy: https://rolling-scopes-school.github.io/nadezhdanik-JSFEPRESCHOOL2023Q2/library/\n
    3. Done 11.09.2023 / deadline 11.09.2023\n
    4. Score: 200/200`);
