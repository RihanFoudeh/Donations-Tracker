"use strict";

let parsedarray = [];
function Donation(name, amount, age) {

    this.name = name;
    this.amount = amount;
    this.age = age;


    Donation.all.push(this);

}

Donation.all = [];

function getRandomage(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let formDonations = document.getElementById('formDonations')
formDonations.addEventListener('submit', handsubmit);
function handsubmit(event) {
    event.preventDefault();


    let fname = event.target.fname.value;

    let amount = event.target.amount.value;

    let age = getRandomage(20, 60);

    let newDonation = new Donation(fname, amount, age);

    console.log(newDonation);
    savetolocal();
    newDonation.render();
}


let table = document.getElementById('table');

function Thead() {

    let trow = document.createElement('tr')

    table.appendChild(trow);

    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
   


    trow.appendChild(th1)
    trow.appendChild(th2)
    trow.appendChild(th3)
  

    th1.textContent = "Donator Name"
    th2.textContent = "Donation Amount"
    th3.textContent = "Age"


}
Thead();


Donation.prototype.render = function () {


    let donatorrow = document.createElement('tr');

    table.appendChild(donatorrow);

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    donatorrow.appendChild(td1)
    donatorrow.appendChild(td2)
    donatorrow.appendChild(td3)


    td1.textContent = this.name;
    td2.textContent = this.amount;
    td3.textContent = this.age;

}


function tbody() {

    for (let i = 0; i < parsedarray.length; i++) {


        let trow2 = document.createElement('tr');

        table.appendChild(trow2);

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        trow2.appendChild(td1)
        trow2.appendChild(td2)
        trow2.appendChild(td3)


        td1.textContent = parsedarray[i].name;
        td2.textContent = parsedarray[i].amount;
        td3.textContent = parsedarray[i].age;
    }
}


let clear =document.getElementById('clear')
clear.addEventListener('click',Remove);

function Remove(event){
event.preventDefault();
localStorage.clear();
location.reload();
// savetolocal();
}
function savetolocal() {
    localStorage.setItem('Donar', JSON.stringify(Donation.all))
}
function getfromlocal() {
    let convert = localStorage.getItem('Donar')
    if (convert != null) {
        Donation.all = [];
        parsedarray = JSON.parse(convert);
        for (let i = 0; i < parsedarray.length; i++) {
            new Donation(parsedarray[i].name, parsedarray[i].amount, parsedarray[i].age)
        }
        tbody();
    }
} 
getfromlocal();