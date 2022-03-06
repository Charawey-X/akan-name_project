//html linking:
let form = document.getElementById("form");
let my-date = document.getElementById("date");
let my-month = document.getElementById("month");
let my-year = document.getElementById("year");


let akan-name = document.querySelector(".akanname");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userGender = form.gender.value;

//calculating my-day:
    if (my-date.value === ""){
        alert("Please enter the day you were born");
    }else{
        if(my-date.value <= 0 || my-date.value >31){
            alert("Enter a valid date")
        }
    }

    if (my-month.value === ""){
        alert("Please enter the Month you were born");
    }else{
        if(my-month.value <= 0 || my-month.value >12){
            alert("Enter a valid Month")
        }
    }
    if (my-year.value === ""){
        alert("Please enter the Year you were born");
    }else{
        if(theYear.value <= 0000 || theYear.value >2100){
            alert("Enter a valid year between 0000 and 2100")
        }
    }
    if (userGender === ""){
        alert("Please check your gender");
    }




    var akanname = compareNames(theYear.value, theMonth.value, theDay.value, userGender)

    akan-name.innerHTML = `Your Akan name is: ${akanname}`;
});


function compareNames(year, month, day, gender){
    var wkday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    if (gender === "male"){
        var date = new Date(parseInt(year), (parseInt(month)-1), parseInt(day))

        var dayofweek = wkday[date.getDay()];

     return male[date.getDay()]
    }else{
        var date = new Date(parseInt(year), (parseInt(month)-1), parseInt(day))
        var dayofWeek = wkday[date.getDay()];
        return female[date.getDay()]
    }

}
