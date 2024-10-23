var shop_pass = true
var body = document.querySelector('body');
var buy = document.getElementById("Buy_a");
var sec_1 = document.getElementById("sec_1");
var buy_show = document.getElementById("show_buy");
var all = document.getElementById("All");
var toy1 = document.getElementById("Toys1");
var toy2 = document.getElementById("Toys2");
var pens = document.getElementById("Pens");
var search = document.getElementById("Search");
var S_S = document.getElementById("Submit_Search");
var nav2 = document.getElementById("nav2");
var food1 = document.getElementById("Food1");
var food2 = document.getElementById("Food2");
var cart = document.getElementById("Cart");
var hr = document.getElementById("hr");
var cart_main = document.getElementById("main_cart");
var in_cart = document.querySelector(".Cart div");
var toCopy = document.getElementById("toCopy");
var shop = document.getElementById("shop");
// in use_shop
var used_shop = document.getElementById("used_shop");
var sec_2 = document.getElementById("sec_2");
var toy1 = document.getElementById("Toys1");
var toy2 = document.getElementById("Toys2");

// uses start

function show(element1, element2 = "", element3 = "") {
    element1.style = "visibility: visible;"
    element2.style = "visibility: visible;"
    element3.style = "visibility: visible;"
}

function hide(element1, element2 = "", element3 = "") {
    element1.style = "display: none;"
    element2.style = "display: none;"
    element3.style = "display: none;"
}

function use(btn) {
    btn.style = "background-color: white;color: black;"
}

function un_use(btn) {
    btn.style = "background-color: black;color: white;border: 2px solid white;"
}

function say_cleer(product) {
    alert(`There is no ${product}`)
}

// uses end

// shop btns start

function shop_(element) {
    show(element, sec_1)
    hide(sec_2)
    use(shop)
    un_use(used_shop)
    shop_pass = true
}

function us_sh(element) {
    hide(element, sec_1)
    show(sec_2)
    use(used_shop)
    un_use(shop)
    shop_pass = false;
}

// shop btns start

// cart start

function Put_cart(img, name, price, left, right) {
    var chosen_card = `
    <section style="display: flex;overflow: hidden;">
        <div style="display: inline; overflow: hidden; border: 1px solid black; padding: 0px; margin: 50px; height: auto; width: 40%; border-radius: 20px; background-color: white; text-align: center; font-family: serif;" id="Food1" class="card">
            <img style="height: 100%; width: 100%; border-top-left-radius: 20px; border-top-right-radius: 20px;" class="scale" src="${img}" alt="">
        </div>
        <div style="display: inline; width: 80%; text-align: center; font-size: 30px;overflow: hidden;">
            <button class="copyButton">Copy to buy then paste it in the text area.</button>
            <label id="inp" for=""> > Product_buy: ></label>
            <input type="number" value="1" style="width: 50px; margin-top: 20px;">
            <h2> > ${name} <</h2>
            <h2> > Price: ${price} EGP <</h2>
            <p>For each</p>
            <button onclick="Delete(this)" style="margin: 0px 0px 8px; width: 100%; background-color: red; color: white; font-family: serif; padding: 10px 30% 10px 30%; border: none; margin-bottom: 40px;" class="b2" id="buy">Remove</button>
            <h3 style="font-size: 30px; margin: 0px 0px 10px 190px; display: flex;">${left}<span style="font-size: 30px; margin-left: 35%; color: rgb(62, 58, 58);">product:<span style="font-size: 30px; padding-left: 2px; color: black; font-size: 25px;">${right}</span></h3>
        </div>
    </section>
    `;

    var div = document.createElement("div");
    div.innerHTML = chosen_card;
    in_cart.appendChild(div);
    buy.style = "width: 100%; height: 40px; border: none; background-color: rgb(85, 200, 5); font-size: 20px;";
    hide(buy_show);
}

function Delete(button) {
    // Find the parent section of the button and remove it
    var section = button.closest('section');
    section.remove();
}

function Cart() {
    cart.style = `
        visibility: visible;
        background-color: white;
    `
}

function exit_cart() {
    hide(cart, buy)
}

// cart end

// product start

function All() {
    if (shop_pass == true) {
        show(pens, food1, food2)
    } else {
        show(sec_2)
    }
    console.log("Done")
}

function offers() {
    if (shop_pass == true) {
        // hide(pens, food1, food2)
        say_cleer("offers")
    } else {
        say_cleer("offers")
    }
    console.log("Done")
}

function Toys() {
    if (shop_pass == true) {
        // hide(pens, food1, food2)
        say_cleer("toys")
        console.log("No toys")
    } else {
        show(toy1, toy2)
    }
}

function Pens() {
    if (shop_pass == true) {
        show(document.getElementById("Pens"))
        hide(food1, food2)
    } else {
        say_cleer("pens")
    }
    console.log("Done")
}

function Food() {
    hide(pens)
    show(food1, food2)
    console.log("Done")
}

// product end