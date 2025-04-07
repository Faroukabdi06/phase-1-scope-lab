// Write your solution in this file!
var customerName = "bob";
let bestCustomer ;
const leastFavoriteCustomer = "could be bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;

}
// console.log(upperCaseCustomerName())

function setBestCustomer(){
    window.bestCustomer = "not bob"
    return bestCustomer;


}
// console.log(setBestCustomer())

function overwriteBestCustomer(){
    window.bestCustomer = "maybe bob"
    return bestCustomer;

}
// console.log(overwriteBestCustomer())

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "it's bob"
}
// console.log(changeLeastFavoriteCustomer())