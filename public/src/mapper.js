const canvas = document.getElementById('canvas1');
canvas.width = 3719;
canvas.height = 513;

const ctx = canvas.getContext('2d');

const ticketInfoImg = new Image();
ticketInfoImg.onload = () => {
    ctx.drawImage(ticketInfoImg, 0, 0);
}

ticketInfoImg.src = './assets/img/ticketing-container.png'

const gearsImg = new Image();
gearsImg.onload = () => {
    ctx.drawImage(gearsImg, 0, 0);
}

gearsImg.src = './assets/img/gears.png';

const conneSparkleImg = new Image();

conneSparkleImg.onload = () => {
    ctx.drawImage(conneSparkleImg, 0, 0);
}

conneSparkleImg.src = './assets/img/conne_chan_sparkle_eyes.png'


function download() {
    const dataURL = canvas.toDataURL();
    const a = document.createElement("a"); //Create <a>
        a.href = dataURL; //Image Base64 Goes here
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
    // document.removeChild(a);
    a.remove();
}