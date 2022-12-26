let myWindow;

function openWin() {
    myWindow = window.open("https://nikky-pedia-r.netlify.app/home", "name", "width=500, height=500");
}

function closeWin() {
    myWindow.close();
    // myWindow = window.close("https://www.w3schools.com", "_blank", "width=500, height=500");
}

// Endless Cycle:
(function open() {
    openWin()
    console.log("Site is Opened")
    setTimeout(open, 200000)
})()
setTimeout(() => {
    (function close() {
        closeWin()
        console.log("Site is Closed")
        setTimeout(close, 200000)
    })()
}, 150000)


// setTimeout(() => {
//     openWin()
//     // document.getElementById('open').click()
// }, 3000)
