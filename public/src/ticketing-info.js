const ticketingCanvas = document.getElementById('ticketing-info-canvas');
const ctx = ticketingCanvas.getContext('2d');
ctx.imageSmoothingEnabled = true;

const pixelRatio = window.devicePixelRatio;
console.log(`pixelRatio: ${pixelRatio}`);

function setCanvasBlockSize() {
    const rect = document.querySelector('div.ticketing-info').getBoundingClientRect();
    // console.log(ticketingCanvas);
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

// y = ax, what is a ?
function getLinearFuncAlpha(deg) {
    const theta = -1 * deg * Math.PI / 180;
    // (1, y), what is y?
    const y = Math.sin(theta);
    const x = Math.cos(theta);
    //          (y - 0)
    //  alpha = -------
    //          (x - 0)
    const alpha = (y - 0) / (x - 0);
    // console.log(theta, x, y, alpha);
    return alpha === Infinity ? 0 : alpha;
}

// calc y = ax + beta
function minMaxY(deg, minX, maxX, beta) {
    // console.log(minX, maxX);
    return [getLinearFuncAlpha(deg) * minX + (beta || 0), getLinearFuncAlpha(deg) * maxX - (beta || 0)]
}

class TicketImg {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.originImg = img;
        this.scale = 1;
    }
    
    // y = ax, what is a ?
    getLinearFuncAlpha(deg) {
        const theta = -1 * deg * Math.PI / 180;
        // (1, y), what is y?
        const y = Math.sin(theta);
        const x = Math.cos(theta);
        //          (y - 0)
        //  alpha = -------
        //          (x - 0)
        const alpha = (y - 0) / (x - 0);
        // console.log(theta, x, y, alpha);
        return alpha === Infinity ? 0 : alpha;
    }

    // calc y = ax + beta
    minMaxY(deg, minX, maxX, beta) {
        // console.log(minX, maxX);
        return [getLinearFuncAlpha(deg) * minX + (beta || 0), getLinearFuncAlpha(deg) * maxX - (beta || 0)]
    }

    update(degree, rect) {
        const [leftY, rightY] = minMaxY(degree, -rect.width / 2, rect.width / 2, 0);
        const rotatedImgHeight = this.originImg.height + Math.abs(leftY) + Math.abs(rightY);
        this.scale = rect.height / rotatedImgHeight;
        console.log(this.scale, rotatedImgHeight, this.originImg.height, 'w', -rect.width / 2, rect.width / 2);
    }

    draw(degree, rect) {
        console.log(rect);

        console.log(this.x, this.y, this.scale);
        const [renderX, renderY] = [-(this.img.width * this.scale) / 2, -(this.img.height * this.scale) / 2];
        console.log('render', renderX, renderY);
        ctx.translate(rect.width / 2, rect.height / 2);
        ctx.rotate(degree * Math.PI / 180);
        // ctx.drawImage(this.img, (-rect.width) * this.scale, (-rect.height / 2) * this.scale, this.img.width * this.scale, this.img.height * this.scale);
        ctx.drawImage(this.img, renderX, renderY, this.img.width * this.scale, this.img.height * this.scale);
        ctx.fillStyle = 'rgba(155, 0, 0, 0.5)';
        ctx.fillRect(renderX, renderY, this.img.width * this.scale, this.img.height * this.scale);
        ctx.fillStyle = 'rgba(155, 155, 155, 0.5)'
        ctx.fillRect(renderX + this.img.width * this.scale / 2 - 10 + this.x, renderY + this.img.height * this.scale / 2 - 10 + this.y, 20, 20)
        console.log(minMaxY(degree, -rect.width / 2, rect.width / 2, 0), getLinearFuncAlpha(degree));
    }
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
    const degree = -3;
    const [ticketingContainer, ticketingContainerMapped] = imgList;
    const ticketMapped = new TicketImg(0, 0, ticketingContainerMapped);
    const rect = ticketingCanvas.getBoundingClientRect();
    rect.width = rect.width * pixelRatio;
    rect.height = rect.height * pixelRatio;
    ticketMapped.update(degree, rect);
    ticketMapped.draw(degree, rect);
})