const dayInp = document.getElementById("dd");
const monthInp = document.getElementById("mm");
const yearInp = document.getElementById("yyyy");

const dayOtp = document.getElementById("ddOTP");
const monthOtp = document.getElementById("mmOTP");
const yearOtp = document.getElementById("yyOTP");



const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
let newYear = toString(year);

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate(){
  const inputs = document.querySelectorAll(".inputs");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if(!i.value){
      i.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("small").innerText = "This field is required";
      parent.querySelector("small").style.color = "hsl(0, 100%, 67%)";
      validator = false;
    }
    else if (dayInp.value > 31){
      i.style.borderColor = "hsl(0, 100%, 67%)";
      dayInp.parentElement.querySelector("small").innerText = "Must be a valid day";
      parent.querySelector("small").style.color = "hsl(0, 100%, 67%)";
      validator = false;
    }
    else if (monthInp.value > 12){
      i.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("small").style.color = "hsl(0, 100%, 67%)";
      monthInp.parentElement.querySelector("small").innerText = "Must be a valid month";
      validator = false;
    }
    else if (yearInp.value > year.toString){
      i.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("small").style.color = "hsl(0, 100%, 67%)";
      yearInp.parentElement.querySelector("small").innerText = "Must be a valid year";
      validator = false;
    }
    else{
      i.style.borderColor = "hsl(0, 0%, 86%)";
      parent.querySelector("small").innerText = "";
      parent.querySelector("small").style.color = "hsl(0, 0%, 86%)";
      validator = true;
    }
  })
  return validator;
};

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}

const form = document.querySelector("form")
form.addEventListener("submit", handleSubmit);;