const ticketingCanvas = document.getElementById('ticketing-info-canvas');
const ctx = ticketingCanvas.getContext('2d');
ctx.imageSmoothingEnabled = true;

const pixelRatio = window.devicePixelRatio;
console.log(`pixelRatio: ${pixelRatio}`);

const DEBUG_MODE = false;
const angle = -3;
let canvasBoundingRect = ticketingCanvas.getBoundingClientRect();

function setCanvasBlockSize() {
    const rect = document.querySelector('div.ticketing-info').getBoundingClientRect();
    // console.log(ticketingCanvas);
    ticketingCanvas.style.width = `${rect.width}px`;
    ticketingCanvas.style.height = `${rect.height}px`;
    ticketingCanvas.width = rect.width * pixelRatio;
    ticketingCanvas.height = rect.height * pixelRatio;

    canvasBoundingRect = ticketingCanvas.getBoundingClientRect();
    canvasBoundingRect.width = canvasBoundingRect.width * pixelRatio;
    canvasBoundingRect.height = canvasBoundingRect.height * pixelRatio;
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

class TicketImg {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.originImg = img;
        this.scale = 1;
        this.threshold = 40;
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
        return [this.getLinearFuncAlpha(deg) * minX + (beta || 0), this.getLinearFuncAlpha(deg) * maxX - (beta || 0)]
    }

    update(degree, rect) {
        const [leftY, rightY] = this.minMaxY(degree, -rect.width / 2, rect.width / 2, 0);
        console.log(`[leftY, rightY] ${[leftY - this.img.height / 2, rightY + this.img.height / 2]}`);
        const rotatedImgHeight = this.originImg.height + Math.abs(leftY) + Math.abs(rightY) + this.threshold;
        this.scale = rect.height / rotatedImgHeight;
        console.log(this.getLinearFuncAlpha(degree), this.scale, rotatedImgHeight, this.originImg.height, 'w', -rect.width / 2, rect.width / 2);
    }

    draw(degree, rect) {
        console.log(rect);

        console.log(this.x, this.y, this.scale);
        const [renderX, renderY] = [-(this.img.width * this.scale) / 2, -(this.img.height * this.scale) / 2];
        console.log('render', renderX, renderY);
        ctx.translate(rect.width / 2, rect.height / 2);
        ctx.rotate(degree * Math.PI / 180);
        // ctx.drawImage(this.img, (-rect.width) * this.scale, (-rect.height / 2) * this.scale, this.img.width * this.scale, this.img.height * this.scale);
        ctx.drawImage(this.img, renderX + this.x * pixelRatio, renderY + this.y, this.img.width * this.scale, this.img.height * this.scale);
        if(DEBUG_MODE) {
            ctx.fillStyle = 'rgba(155, 0, 0, 0.5)';
            ctx.fillRect(renderX + this.x * pixelRatio, renderY + this.y * pixelRatio, this.img.width * this.scale, this.img.height * this.scale);
            ctx.fillStyle = 'rgba(155, 155, 155, 0.5)'
            ctx.fillRect(renderX + this.img.width * this.scale / 2 - 10 + this.x * pixelRatio, renderY + this.img.height * this.scale / 2 - 10 + this.y * pixelRatio, 20, 20)
        }
        console.log(this.minMaxY(degree, -rect.width / 2, rect.width / 2, 0), this.getLinearFuncAlpha(degree));


        ctx.translate(0, 0);
        ctx.rotate(0);
    }
}

window.addEventListener('resize', (e) => {
    setCanvasBlockSize();
    render();
})
setCanvasBlockSize();

let ticketMapped = undefined;

Promise.all([
    imgLoader('./assets/img/ticketing-container.png'), 
    imgLoader('./assets/img/ticketing-container-mapped.png'), 
])
.then(imgList => {
    const [ticketingContainer, ticketingContainerMapped] = imgList;
    ticketMapped = new TicketImg(0, 0, ticketingContainerMapped); 
    render();
})

function responsivePosition(width) {
    console.log('w', width, 1400 <= width);
    if (0 <= width && width < 576) {
        return [-25, 0];
    } else if (576 <= width && width < 768) {
        return [0, 0];
    } else if (768 <= width && width < 992) {
        return [-35, 0];
    } else if (992 <= width && width < 1200) {
        return [0, 0];
    } else if (1200 <= width && width < 1400) {
        return [0, 0];
    } else if (1400 <= width) {
        return [0, 0];
    }
}

function render() {
    ctx.clearRect(0, 0, canvasBoundingRect.width, canvasBoundingRect.height);
    const [x, y] = responsivePosition(ticketingCanvas.getBoundingClientRect().width);
    if (ticketMapped) {
        ticketMapped.x = x;
        ticketMapped.y = y;
        ticketMapped.update(angle, canvasBoundingRect);
        ticketMapped.draw(angle, canvasBoundingRect);  
    }
}