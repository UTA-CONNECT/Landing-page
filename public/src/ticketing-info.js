const ticketingCanvas = document.getElementById('ticketing-info-canvas');
const ctx = ticketingCanvas.getContext('2d');
ctx.imageSmoothingEnabled = true;

const pixelRatio = window.devicePixelRatio;

function setCanvasBlockSize() {
    const rect = document.querySelector('div.ticketing-info').getBoundingClientRect();
    console.log(ticketingCanvas);
    ticketingCanvas.style.width = `${rect.width}px`;
    ticketingCanvas.style.height = `${rect.height}px`;
    ticketingCanvas.width = rect.width * pixelRatio;
    ticketingCanvas.height = rect.height * pixelRatio;
}

function imgLoader(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => {
            resolve(img);
        }
        img.src = url;
    })
}

window.addEventListener('resize', (e) => {
    setCanvasBlockSize();
})
setCanvasBlockSize();

Promise.all([
    imgLoader('./assets/img/ticketing-container.png'), 
    imgLoader('./assets/img/ticketing-container-mapped.png'), 
])
.then(imgList => {
    const [ticketingContainer, ticketingContainerMapped] = imgList;
    ctx.translate(ticketingCanvas.width / 2, ticketingCanvas.height / 2);
    ctx.rotate(-3 * Math.PI / 180);
    ctx.drawImage(ticketingContainerMapped, (-ticketingContainerMapped.width) / 2, -ticketingContainerMapped.height / 2);
})