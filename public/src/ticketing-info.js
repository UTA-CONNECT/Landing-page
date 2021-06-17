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

function fontLoader(fontName, url) {
    return new Promise((resolve) => {
        let f = new FontFace(fontName, `url(${url})`);
        f.load().then((font) => {
            document.fonts.add(font);
            resolve();
        })
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


    }
}

class TicketText {
    constructor(x, y, text, font, size, colorCode) {
        this.x = x;
        this.y = y;
        this.alphaX = 0;
        this.alphaY = 0;
        this.text = text;
        this.font = font;
        this.size = size;
        this.colorCode = colorCode;
    }

    draw() {
        ctx.font = `${this.size}px ${this.font}`;
        ctx.fillStyle = this.colorCode;
        ctx.fillText(this.text, this.x * pixelRatio + this.alphaX * pixelRatio, this.y * pixelRatio + this.alphaY * pixelRatio);
        if(DEBUG_MODE) {
            ctx.fillStyle = 'rgba(0, 0, 155, 0.5)';
            ctx.fillRect(this.x * pixelRatio + this.alphaX * pixelRatio, this.y * pixelRatio - this.size + this.alphaY * pixelRatio, ctx.measureText(this.text).width, this.size);
        }
    }
}

window.addEventListener('resize', (e) => {
    setCanvasBlockSize();
    render();
})
setCanvasBlockSize();

let ticketMapped = undefined;
let textDict = {};

Promise.all([
    imgLoader('./assets/img/ticketing-container.png'), 
    imgLoader('./assets/img/ticketing-container-mapped-text.png'), 
    fontLoader('GmarketSansBold', './assets/fonts/GmarketSansOTF/GmarketSansBold.otf'),
    fontLoader('GmarketSansLight', './assets/fonts/GmarketSansOTF/GmarketSansLight.otf'),
    fontLoader('GmarketSansMedium', './assets/fonts/GmarketSansOTF/GmarketSansMedium.otf')
])
.then(imgList => {
    const [ticketingContainer, ticketingContainerMapped] = imgList;
    ticketMapped = new TicketImg(0, 0, ticketingContainerMapped); 
    return true;
})
.then(() => {
    // textDict['ticket1'] = new TicketText(-150, -200, '사전예매 - 33,000₩', 'GmarketSansBold', '50', '#333333');
    // textDict['ticket1vat'] = new TicketText(360, -224, '(VAT 포함)', 'GmarketSansMedium', '18', '#000000');
    // textDict['ticket1date'] = new TicketText(-150, -150, '2021. 8. 1. ~ 9. 1.', 'GmarketSansMedium', '28', '#333333');
    // textDict['ticket1info1'] = new TicketText(-150, -100, '환불 및 취소시 수수료가 발생할 수 있습니다.', 'GmarketSansMedium', '28', '#333333');
    // textDict['ticket1info2'] = new TicketText(-150, -70, '자세한 내용은 인터파크 티켓에서 확인해주세요.', 'GmarketSansMedium', '28', '#333333');
    // textDict['ticket1buy'] = new TicketText(-150, -20, '사전 예매 하러가기 >', 'GmarketSansMedium', '24', '#333333');
    // textDict['ticket1buyInfo'] = new TicketText(80, -22, '추가 안내메시지.', 'GmarketSansMedium', '18', '#333333');


    // textDict['ticket2'] = new TicketText(-150, 75, '현장 구매 - 40,000₩', 'GmarketSansBold', '50', '#333333');
    // textDict['ticket2vat'] = new TicketText(360, 51, '(VAT 포함)', 'GmarketSansMedium', '18', '#000000');
    // textDict['ticket2date'] = new TicketText(-150, 125, '공연 당일 (2021. 10. 1.)', 'GmarketSansMedium', '28', '#333333');
    // textDict['ticket2info1'] = new TicketText(-150, 200, '사전 예매로 매진시 현장 구매가 어려울 수 있습니다.', 'GmarketSansMedium', '28', '#333333');
    // textDict['ticket2buy'] = new TicketText(-150, 250, '* 티켓의 개인간 거래를 금합니다. 적발시 법적 조치에 취해질 수 있습니다.', 'GmarketSansMedium', '20', '#333333');
    render();
})
.catch(err => {
    console.log('err', err);
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
    Object.keys(textDict).forEach(key => {
        textDict[key].alphaX = x;
        textDict[key].alphaY = y;
        textDict[key].draw(angle, canvasBoundingRect);
    })
    ctx.translate(0, 0);
    ctx.rotate(0);
}

function download() {
    const dataURL = ticketingCanvas.toDataURL();
    const a = document.createElement("a"); //Create <a>
        a.href = dataURL; //Image Base64 Goes here
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
    // document.removeChild(a);
    a.remove();
}