
function mainPageContent() {
    const renderMainPageContent =
        `
            <div id="wrap" class="wrapper">
                <p class="paragraph">
                    Wake Up Server app
                </p>
                <p class="paragraph">
                    <a id="myAnchor" class="link" title="do not sleep, lazy az" href="https://nikky-pedia-r.netlify.app/home/">Targeted Site</a>
                </p>
                <h1>The Window Object</h1>
                <h2>The open() and close() Methods</h2>

                <button id="open" onclick="openWin()" class="button">Open "myWindow"</button>
                <button id="close" onclick="closeWin()" class="button">Close "myWindow"</button>
                <div><button id="infiniteRun" class="styled"></button></div>
            </div>
        `
    return renderMainPageContent
}

const newDiv = document.createElement("div")
newDiv.innerHTML = mainPageContent()
document.body.appendChild(newDiv)
