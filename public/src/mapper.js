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

Promise.all([
    imgLoader('./assets/img/ticketing-container.png'), 
    imgLoader('./assets/img/gears.png'), 
    imgLoader('./assets/img/conne_chan_sparkle_eyes.png')
])
.then(results => {
    const [ticketInfoImg, gearsImg, conneSparkleImg] = results;
    ctx.drawImage(ticketInfoImg, 0, 0);
    ctx.drawImage(gearsImg, 1070, 115);
    ctx.drawImage(conneSparkleImg, 2290, 90);
    // console.log(results);
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