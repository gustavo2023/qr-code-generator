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

// Function to get the QR code as a Base64 image
const getQrCodeImage = () => {
  const qrCanvas = qrCodeContainer.querySelector("canvas");
  if (qrCanvas) {
    return qrCanvas.toDataURL("image/png"); // Convert the canvas to a Base64 image
  }
  return null;
};

const generateQrCode = () => {
  inputContainer.style.display = "none";
  btnsContainer.style.display = "flex";
  qrCodeContainer.style.display = "flex";
  qrCode.makeCode(urlInput.value);

  setTimeout(() => {
    const qrImage = getQrCodeImage();
    if (qrImage) {
      downloadBtn.href = qrImage;
      downloadBtn.download = "qr-code.png";
    }
  }, 100);
};

const copyQrCodeToClipboard = () => {
  const qrImage = getQrCodeImage();
  if (qrImage) {
    // Create a temporary input element to hold the Base64 string
    const tempInput = document.createElement("textarea");
    tempInput.value = qrImage;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("QR code copied to clipboard!");
  } else {
    alert("No QR code available to copy.");
  }
};

generateQrBtn.addEventListener("click", generateQrCode);
shareBtn.addEventListener("click", copyQrCodeToClipboard);
