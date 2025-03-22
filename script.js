const qrCodeContainer = document.querySelector(".qr-code");
const btnsContainer = document.querySelector(".buttons-container");
const downloadBtn = document.getElementById("download-btn");
const shareBtn = document.getElementById("share-btn");
const inputContainer = document.querySelector(".input-button-box");
const urlInput = document.getElementById("url-input");
const generateQrBtn = document.getElementById("generate-qr-btn");

const qrCode = new QRCode(qrCodeContainer, {
  width: 150,
  height: 150,
  text: urlInput.value,
});

const generateQrCode = () => {
  inputContainer.style.display = "none";
  btnsContainer.style.display = "flex";
  qrCodeContainer.style.display = "flex";
  qrCode.makeCode(urlInput.value);
};

generateQrBtn.addEventListener("click", generateQrCode);
