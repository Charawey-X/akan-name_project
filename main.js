let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let yourday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getBirthday() {
    let dateInput = document.getElementById("date").value;
    let date = new Date(dateInput);

    if (!!date.valueOf()) {
        let year = date.getFullYear().toString();
        // let MM = date.getMonth()+1;
        // let DD = date.getDate();
        // let CC = parseInt(year.slice(0,2));
        // let YY = parseInt(year.slice(2,4));
        // let dayOfWeek = (((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7;
        let dayOfWeek = date.getDay();
        return dayOfWeek;
    } else {
        alert("Date is invalid.");
        return;
    }
}

function getGender() {
    let gender;
    if ((form.gender[0].checked == true) || (form.gender[1].checked == true)) {
        if (form.gender[0].checked == true) {
            gender = 0;
        } else if (form.gender[1].checked == true) {
            gender = 1;
        }
        return gender;
    } else {
        alert("Please select gender.");
        return;
    }
}

function computeName() {
    let selectedGender = getGender();
    let dayOfWeek = getBirthday();
    if ((!!dayOfWeek.valueOf() === true) || (dayOfWeek == 0))  {
        if (selectedGender === 0) {
            let result = "Your day is " + yourday[dayOfWeek] + "." + "\n Your Akan name is " + maleNames[dayOfWeek] + ".";
            document.getElementById("result").innerHTML = result;
        } else if (selectedGender === 1) {
            let result = "Your  day is " + yourday[dayOfWeek] + "." + "\n Your Akan name is " +  femaleNames[dayOfWeek] + ".";
            document.getElementById("result").innerHTML = result;
        }
    }else{
        return;
    }
}
//Clear output when date of birth or gender is changed.
function clearOutput(){
    document.getElementById("result").innerHTML = " ";
}
