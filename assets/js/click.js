let myWindow;

function openWin() {
    myWindow = window.open("https://nikky-pedia-r.netlify.app/home", "name", "width=500, height=500");
}

function closeWin() {
    myWindow.close();
    // myWindow = window.close("https://www.w3schools.com", "_blank", "width=500, height=500");
}

// Endless Cycle:
function runTheInfiniteLoopFunction() {
    // (function open() {
    //     openWin()
    //     console.log("Site is Opened")
    //     setTimeout(open, 200000)
    // })()
    // setTimeout(() => {
    //     (function close() {
    //         closeWin()
    //         console.log("Site is Closed")
    //         setTimeout(close, 200000)
    //     })()
    // }, 150000)
    console.log("Running Infinite")
}

function stopInfiniteLoopFunction() {
    // closeWin()
    console.log("Stopped Running Infinite")
}

function handleUserChoice(userChoice) {
    switch (userChoice) {
        case 'stop':
            stopInfiniteLoopFunction()
            break
        case 'run':
            runTheInfiniteLoopFunction()
            break
        default:
            break
    }
}

// function runOneTimeOnlyLoopFunction() {
//     // Open the window
//     setTimeout(() => {
//         openWin()
//         // document.getElementById('open').click()
//     }, 3000)
//     // Close the window
//     setTimeout(() => {
//         closeWin()
//     }, 10000)
// }


let infiniteRunButton = document.getElementById('infiniteRun');
infiniteRunButton.innerText = 'Run Infinite Loop'
let infiniteRunButtonControlVariable = false

infiniteRunButton.addEventListener('click', function () {
    if (!infiniteRunButtonControlVariable) {
        handleUserChoice('run')
        infiniteRunButton.innerText = 'Stop Infinite Loop'
        infiniteRunButtonControlVariable = true
    } else {
        handleUserChoice('stop')
        infiniteRunButton.innerText = 'Run Infinite Loop'
        infiniteRunButtonControlVariable = false
    }
})