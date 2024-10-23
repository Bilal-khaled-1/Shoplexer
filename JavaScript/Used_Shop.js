var buy = document.getElementById("buy");
var all = document.getElementById("All");
var toy1 = document.getElementById("Toys1");
var toy2 = document.getElementById("Toys2");
var pens = document.getElementById("Pens");
var search = document.getElementById("Search");
var S_S = document.getElementById("Submit_Search");
var nav2 = document.getElementById("nav2");
var cart = document.getElementById("Cart");
var in_cart = document.querySelector(".Cart div")

function Buy() {
    alert("Done")
}

function show(element1,element2="",element3="") {
    element1.style = "visibility: visible;"
    element2.style = "visibility: visible;"
    element3.style = "visibility: visible;"
}

function hide(element1,element2="",element3="") {
    element1.style = "display: none;"
    element2.style = "display: none;"
    element3.style = "display: none;"
}

function All() {
    show(toy1,toy2)
    console.log("Done")
}

function offers() {
    hide(toy1,toy2)
    console.log("Done")
}

function Toys() {
    show(toy1,toy2)
    hide(food)
    console.log("Done")
}

function Pens() {
    hide(toy1,toy2)
    show(document.getElementById("Pens"))
    console.log("Done")
}

function Put_cart(img,name,price,left="",right="") {
    var chosen_card = `
    <section style="display: flex;">
        <div style="display: inline;overflow: hidden;border: 1px solid black; padding: 0px; margin: 50px; height: auto; width: 30%; border-radius: 20px; background-color: white; text-align: center; font-family: serif;" id="Food1" class="card">
            <img style="height: 100%; width: 100%; border-top-left-radius: 20px; border-top-right-radius: 20px;" class="scale" src="${img}" alt="">
        </div>
        <div style="display: inline;width: 80%;text-align: center;font-size: 30px;">
            <label id="inp" for="">Product_buy:</label>
            <input type="number" value="1" style="width: 50px;margin-top: 20px;">
            <h2>${name}</h2>
            <h2>Price: ${price} EGP</h2>
            <p>For each</p>
            <button onclick="Delete(this)" style="margin: 0px 0px 8px;width: 100%; background-color: red;color: white; font-family: serif; padding: 10px 30% 10px 30%; border: none; margin-bottom: 40px;" onclick="" class="b2" id="buy">Delete</button>
            <h3 style="font-size: 30px;margin: 0px 0px 10px 100px;display: flex;">${left}<span style="font-size: 30px;margin-left: 35%;color: rgb(62, 58, 58);">product:<span style="font-size: 30px;padding-left: 2px;color: black;font-size: 25px;">${right}</span></h3>
        </div>
    </section>
    `
    var div = document.createElement("div");
    var inp = document.querySelector("input")
    // div.classList.add(element)
    div.innerHTML = chosen_card
    in_cart.appendChild(div)
}

function Delete(button) {
    // Find the parent section of the button and remove it
    var section = button.closest('section');
    section.remove();
}

function exit_cart() {
    hide(cart)
}

function Cart() {
    cart.style = `
        visibility: visible;
        background-color: white;
    `
}