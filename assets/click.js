let myWindow;

function openWin() {
    myWindow = window.open("https://nikky-pedia-r.netlify.app/home", "name", "width=500, height=500");
}

function closeWin() {
    myWindow.close();
    // myWindow = window.close("https://www.w3schools.com", "_blank", "width=500, height=500");
}

//https://render-back-end-nikky-pedia.onrender.com/
// (function cycle() {
//     document.getElementById('open').click()
//     console.log("Button is clicked")
//     setTimeout(cycle, 4000)
// })()


setTimeout(() => {
    openWin()
    // document.getElementById('open').click()
}, 3000)
