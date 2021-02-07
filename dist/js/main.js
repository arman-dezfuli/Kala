// start nav-static script
function sabadBtn (x) {
    const sabadKaridBtn = document.getElementById("sabadKarid");
    const loginBtnv = document.getElementById("loginBtn");
    const btnLoginColor = document.getElementById("btnLoginColor");
    const btnSabadColor = document.getElementById("btnSabadColor");
    if (x == "sabadKarid") {
        if (sabadKaridBtn.style.display === "none") {
            sabadKaridBtn.style.display = "block";
            btnSabadColor.style.background = "#f8edeb";
            loginBtnv.style.display = "none";
            btnLoginColor.style.background = "#fff";
        }else {
            sabadKaridBtn.style.display = "none";
            btnSabadColor.style.background = "#fff";

        }

    }else if (x == "login") {
        if (loginBtnv.style.display === "none") {
            loginBtnv.style.display = "block";
            sabadKaridBtn.style.display = "none";
            btnSabadColor.style.background = "#fff";
            btnLoginColor.style.background = "#f8edeb";
        }else {
            loginBtnv.style.display = "none";
            btnLoginColor.style.background = "#fff";

        }
    }else {
        console.log("?");
    }
}
// end nav-static script
// start navDynamic script

// end navDynamic script