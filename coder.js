
// Random Password Generator

let randompassword;
let add = " ";

const generatepass = () => {

    let capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallAlpha = "abcdefghijklmnopqrstuvwxyz";
    let numbers0 = "0123456789";
    let special = "`~!@#$%^&*-_=+?'.,";
    let addAll = capAlpha + smallAlpha + numbers0 + special;

    let length = prompt("Please Enter the length of random password");
    if (!length){
        alert ("Please Enter Length To Generate Password");
        return;
    }

    for (let i = 1; i <= length ; i++ ){
        let randNum = Math.random();
        let mix = randNum * addAll.length;
        let conString = String(mix);
        let a = conString.slice(0,2);
        add += addAll.charAt(a);
    }

    randompassword = add;
    document.getElementById ("spn1").innerHTML = "Random Password : " + " " + randompassword;
    getttime();
    add = '';

}

// Print Cities

let Cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Peshawar", "Quetta" , "Multan"];
let txt = " ";

const printcities = () => {

    for (let i=0 ; i<Cities.length; i++){
        txt += i+1 + ")"+" "+Cities[i]+"<br>";
    }

    document.getElementById("spn1").innerHTML = txt;
    getttime();
    txt = '';

}

// Add City

let city;
const addcity = () => {

    let inputval = document.getElementById("inp1").value;

    if (!inputval){
        alert ("Please Enter City Name To Add!");
        return;
    }

    if (inputval.length < 4){
        alert ("Please Enter City Name Properly");
        return;
    }

    let firstWord = inputval.slice(0,1).toUpperCase();
    let Words = inputval.slice(1).toLowerCase();
    let compWord = firstWord + Words;

    for (let i=0; i<Cities.length; i++){
        city = Cities[i];

        if (compWord === city){
            document.getElementById("spn1").innerHTML =  compWord + " " + "Already Exists in List";
            break;
        }

    }

    if (compWord !== city){
        Cities.push(compWord);
        document.getElementById("spn1").innerHTML = compWord + " " + "Successfully Added in List";
    }

    getttime ();

}

// Calculate GST

const gstcalculator = () => {

    let input1 = document.getElementById ("inp1").value;

    if(!input1){
        alert ("Please Enter Amount To Calculate GST");
        return;
    }

    let promptval = prompt("Please Enter GST");

    if(!promptval){
        alert ("Please Enter GST");
        return;
    }

    let tax = (input1*promptval)/100;
    let convert = Number(input1);
    let totalgst = convert + tax;

    document.getElementById("spn1").innerHTML = "Bill :" + " " + input1+ " "+"Rs" + "<br>" + "GST :" + " " + promptval+"%" + "<br>"+"Total Payable Amount :"+" "+totalgst+ " "+"Rs";
    getttime();

}

// Time of Button Clicked

function getttime () {
    let v = new Date();
    let gettime = v.getHours() + ":" + v.getMinutes();
    if (v.getHours() < 9){
       let gettime0 = "0"+v.getHours() + ":" +v.getMinutes();
       document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime0;
    }

    else if (v.getMinutes() < 9){
        let gettime1 = v.getHours() + ":" +"0"+v.getMinutes();
        document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime1;
    }

    else if (v.getHours() && v.getMinutes() < 9){
        let gettime2 = "0"+v.getHours() + ":" +"0"+v.getMinutes();
        document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime2;
     }

    else {
        document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime;
    }
}