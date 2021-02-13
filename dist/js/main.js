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
let Kdcon = document.getElementById('Kdcon');
let Ktcon = document.getElementById('Ktcon');
let mpCon = document.getElementById('mpCon');
let aknCon = document.getElementById('aknCon');
let kaCon = document.getElementById('kaCon');
let zsCon = document.getElementById('zsCon');
let haCon = document.getElementById('haCon');
let wsCon = document.getElementById('wsCon');
const menuHover = (x,y) => {
    if (y  === true) {
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
};
// end navDynamic script