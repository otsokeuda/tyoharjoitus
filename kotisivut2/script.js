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
      document.getElementById("users").innerHTML = listOfUsers;
}