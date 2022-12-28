
function mainPageContent() {
    const renderMainPageContent =
        `
            <div id="wrap" class="wrapper">
                <p class="paragraph">
                    Wake Up Server app
                </p>
                <p class="paragraph">
                    <a id="myAnchor" class="link" title="do not sleep, lazy az" href="https://render-back-end-nikky-pedia.onrender.com/">It must be clicked</a>
                </p>
                <h1>The Window Object</h1>
                <h2>The open() and close() Methods</h2>

                <button id="open" onclick="openWin()">Open "myWindow"</button>
                <button id="close" onclick="closeWin()">Close "myWindow"</button>
                <div><button id="infiniteRun"></button></div>
            </div>
        `
    return renderMainPageContent
}

const newDiv = document.createElement("div")
newDiv.innerHTML = mainPageContent()
document.body.appendChild(newDiv)
