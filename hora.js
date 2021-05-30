var moment = require ('moment-timezone')

hora()
function hora (){
    
    let cuiaba = moment().tz("America/Cuiaba").format("DD/MM/YYYY HH:mm:ss");
    let horaCuiaba = Number (moment().tz("America/Cuiaba").format("HH"));

    let imgDiaTarde = document.getElementById("icon")

    if (horaCuiaba >= 5 && horaCuiaba < 17 ){
        imgDiaTarde.src = `/imgs/png/016-sun.png`
        console.log ("manhã")
    }
    
    if (horaCuiaba >= 17 && horaCuiaba < 19){
        imgDiaTarde.src = `/imgs/png/011-cloudy.png`
        console.log ("tarde")

    }

    if (horaCuiaba >= 19){
        imgDiaTarde.src = `/imgs/png/004-moon.png`
        console.log ("noite")

    }

    console.log(cuiaba)
    document.getElementById("hora").innerText = cuiaba;
}

setInterval(hora, 1000)