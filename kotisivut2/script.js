var users = [
    {
        firstName: "Otso",
        lastName: "Rantala"
    },
    {
        firstName: "Onni",
        lastName: "Rantala"
    },
    {
        firstName: "Oona",
        lastName: "Rantala"
    },
    {
        firstName: "Fanni",
        lastName: "Rantala"
    }
];

var cars = [
    {
        valmistaja: "Valmistaja: Ford",
        malli: "Malli: Fiesta",
        valmistusvuosi: "Valmistusvuosi: 2020",
        väri: "Väri: punainen"
    },
    {
        valmistaja: "Valmistaja: BMW",
        malli: "Malli: bmw malli",
        valmistusvuosi: "Valmistusvuosi: 2010",
        väri: "Väri: valkoinen"
    },
    {
        valmistaja: "Valmistaja: Nissan",
        malli: "Malli: nissan malli",
        valmistusvuosi: "Valmistusvuosi: 2000",
        väri: "Väri: keltainen"
    },
    {
        valmistaja: "Valmistaja: Mersu",
        malli: "Malli: mersu malli",
        valmistusvuosi: "Valmistusvuosi: 1999",
        väri: "Väri: musta"
    },
    {
        valmistaja: "Valmistaja: Volvo",
        malli: "Malli: volvo malli",
        valmistusvuosi: "Valmistusvuosi: 1995",
        väri: "Väri: ruskea"
    }
];

function nimi() {
    document.getElementById("d1").innerHTML = "Otso Rantala";
}

function pm() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById("d2").innerHTML = date;
}

function ka() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("d3").innerHTML = time;
}

function getUsers() {
    var listOfUsers = users.map(user => {
        return "<div>" + user.firstName + " " + user.lastName + "</div>"
      });
      console.log(users);
      document.getElementById("users").innerHTML = listOfUsers.join("");
}

function getCars() {
    var listOfCars = cars.map(cars => {
        return "<div>" + cars.valmistaja + "<br>" + cars.malli + "<br>" + cars.valmistusvuosi + "<br>" + cars.väri + "<br>" + "<br>" + "</div>"
      });
      console.log(cars);
      document.getElementById("cars").innerHTML = listOfCars.join("");
}