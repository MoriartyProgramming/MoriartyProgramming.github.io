document.getElementsByClassName("main-title")[0].style.color = "red";

document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("confirm-form-button").onclick = function () {
    let burgerInput = document.getElementById("burger-input");
    let nameInput = document.getElementById("name-input");
    let phoneInput = document.getElementById("phone-input");
    let hasError = false;

    [burgerInput, nameInput, phoneInput].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    })

    if (!hasError) {
        [burgerInput, nameInput, phoneInput].forEach(item => {
            item.value = "";
        })
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!")
    }
}

let prices = document.getElementsByClassName("products-item-price");
document.getElementById("currency-button").onclick = function (e) {
    let currentCurrency = e.target.innerText;
    let coefficient = 1.0;

    if (currentCurrency === "$") {
        currentCurrency = "₽";
        coefficient = 77.0;
    } else if (currentCurrency === "₽") {
        currentCurrency = "BYN";
        coefficient = 2.5;
    } else if (currentCurrency === 'BYN') {
        currentCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        currentCurrency = '¥';
        coefficient = 6.9;
    } else {
        currentCurrency = "$";
    }

    e.target.innerText = currentCurrency;
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = parseInt(+(prices[i].getAttribute("data-base-price")) * coefficient) + " " + currentCurrency;
    }
}
