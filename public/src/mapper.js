const canvas = document.getElementById('canvas1');
canvas.width = 3719;
canvas.height = 513;

const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = true;

function imgLoader(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => {
            resolve(img);
        }
        img.src = url;
    })
}

function maskingAreaTest(pixelsOriginal, x, y, w, h) {
    return new Promise((resolve) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(pixelsOriginal, 0, 0);
        const pixels = ctx.getImageData(x, y, w, h);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(pixels, x, y);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // console.log(pixels);
        resolve(pixels);
    })
}

function pixelCombine(pixelA, pixelB, w, h) {
    return new Promise((resolve) => {
        for(let i = 0; i < h; i ++) {
            for(let t = 0; t < w; t ++) {
                // pixelA.data
                const [rA, gA, bA, aA] = [pixelA.data[i * w * 4 + t * 4], pixelA.data[i * w * 4 + t * 4 + 1], pixelA.data[i * w * 4 + t * 4 + 2], pixelA.data[i * w * 4 + t * 4 + 3]];
                const [rB, gB, bB, aB] = [pixelB.data[i * w * 4 + t * 4], pixelB.data[i * w * 4 + t * 4 + 1], pixelB.data[i * w * 4 + t * 4 + 2], pixelB.data[i * w * 4 + t * 4 + 3]];
                if (rA === 0 && gA === 0 && bA === 0 && aA === 0) {
                    // console.log(`X: ${t}, Y: ${i}`);
                    pixelA.data[i * w * 4 + t * 4] = rB;
                    pixelA.data[i * w * 4 + t * 4 + 1] = gB;
                    pixelA.data[i * w * 4 + t * 4 + 2] = bB;
                    pixelA.data[i * w * 4 + t * 4 + 3] = aB;
                } else {
                    pixelA.data[i * w * 4 + t * 4] = (rA - 15);
                    pixelA.data[i * w * 4 + t * 4 + 1] = (gA - 15);
                    pixelA.data[i * w * 4 + t * 4 + 2] = (bA - 15);
                    pixelA.data[i * w * 4 + t * 4 + 3] = 255;
                }
            }
        }
        resolve(pixelA);
    })
}

Promise.all([
    imgLoader('./assets/img/ticketing-container.png'), 
    imgLoader('./assets/img/gears.png'), 
    imgLoader('./assets/img/conne_chan_sparkle_eyes.png')
])
.then(results => {
    const [ticketInfoImg, gearsImg, conneSparkleImg] = results;
    ctx.drawImage(ticketInfoImg, 0, 0);
    ctx.drawImage(gearsImg, 1070, 115);
    const ticketInfoAndGears = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // download();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(conneSparkleImg, 2290, 90);
    const conne = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // download();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // console.log(results);
    return [ticketInfoAndGears, conne, ticketInfoImg, gearsImg, conneSparkleImg];
})
.then(canvasRenderedImgList => {
    const [ticketInfoAndGears, conne, ticketInfoImg, gearsImg, conneSparkleImg] = canvasRenderedImgList;
    // maskingAreaTest(ticketInfoAndGears, 2421, 336, 33, 23);
    return Promise.all([ticketInfoAndGears, conne, ticketInfoImg, gearsImg, conneSparkleImg,
                        maskingAreaTest(ticketInfoAndGears, 2430, 336, 36, 10), maskingAreaTest(conne, 2430, 336, 36, 10)])
})
.then(renderDataList => {
    const [ticketInfoAndGears, conne, ticketInfoImg, gearsImg, conneSparkleImg, ticketInfoAndGearsPixels, connePixels] = renderDataList;
    return Promise.all([ticketInfoAndGears, conne, ticketInfoImg, gearsImg, conneSparkleImg, ticketInfoAndGearsPixels, connePixels, pixelCombine(ticketInfoAndGearsPixels, connePixels, 33, 23)]);
})
.then(combineResultList => {
    // console.log(combineResultList);
    const [ticketInfoAndGears, conne, ticketInfoImg, gearsImg, conneSparkleImg, ticketInfoAndGearsPixels, connePixels, combinePixels] = combineResultList;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(ticketInfoImg, 0, 0);
    ctx.drawImage(gearsImg, 1070, 115);
    ctx.drawImage(conneSparkleImg, 2290, 90);
    ctx.putImageData(combinePixels, 2430, 336);

    download();
})

window.addEventListener('mousedown', (e) => {
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
})

function download() {
    const dataURL = canvas.toDataURL();
    const a = document.createElement("a"); //Create <a>
        a.href = dataURL; //Image Base64 Goes here
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
    // document.removeChild(a);
    a.remove();
}