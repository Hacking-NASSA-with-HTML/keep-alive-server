let myWindow

function openWin() {
    myWindow = window.open("https://nikky-pedia-r.netlify.app/home", "name", "width=500, height=500")
}

function closeWin() {
    myWindow.close()
    // myWindow = window.close("https://www.w3schools.com", "_blank", "width=500, height=500")
}

// Endless Cycle:
let setToutOpen
let delayTout
let setToutClose

function runInfiniteLoopFunction() {
    (function open() {
        openWin()
        console.log("Site is Opened")
        setToutOpen = setTimeout(open, 200000)
    })()
    delayTout = setTimeout(() => {
        (function close() {
            closeWin()
            console.log("Site is Closed")
            setToutClose = setTimeout(close, 200000)
        })()
    }, 150000)
    // console.log("Running Infinite")
}

function stopInfiniteLoopFunction() {
    clearTimeout(setToutOpen)
    clearTimeout(delayTout)
    clearTimeout(setToutClose)
    closeWin()
    // console.log("Stopped Running Infinite")
}

function handleUserChoice(userChoice) {
    switch (userChoice) {
        case 'stop':
            stopInfiniteLoopFunction()
            break
        case 'run':
            runInfiniteLoopFunction()
            break
        default:
            break
    }
}


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