
const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.querySelector('#generate')
const downloadBtn = document.querySelector('#download');

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    isEmptyInput()
})

function isEmptyInput() {
   /* if(qrText.value.length > 0){
        generateQRCode();
    }
    else {
        alert("Enter the Input")
    }*/

    qrText.value.length > 0 ?  generateQRCode() :  alert("Enter the Input")
}

sizes.addEventListener('change', (e) => {
    size = e.target.value;
   // generateQRCode();
    isEmptyInput();
})

function generateQRCode() {
    qrContainer.innerHTML = "";
    qrText.textContent = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        
    })
}

downloadBtn.addEventListener('click', () => {
    let image = document.querySelector('.qr-body img');
    if(image !== null){
        imgAtt = image.getAttribute('src');
        downloadBtn.setAttribute('href', imgAtt);
    }
    else{
        downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`)
    }
})

/*
    canvas = 

*/