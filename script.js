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

  setTimeout(() => {
    const qrCanvas = qrCodeContainer.querySelector("canvas");
    if (qrCanvas) {
      const qrImage = qrCanvas.toDataURL("image/png"); // Get the QR code as a Base64 image
      downloadBtn.href = qrImage;
      downloadBtn.download = "qr-code.png";
    }
  }, 100);
};

const copyQrCodeToClipboard = () => {
  const qrCanvas = qrCodeContainer.querySelector("canvas");
  if (qrCanvas) {
    // Convert the canvas to a Base64 image
    const qrImage = qrCanvas.toDataURL("image/png");

    // Create a temporary input element to hold the Base64 string
    const tempInput = document.createElement("textarea");
    tempInput.value = qrImage; // Set the Base64 string as the value
    document.body.appendChild(tempInput); // Append the input to the DOM

    // Select the text and execute the copy command
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optional: Provide feedback to the user
    alert("QR code copied to clipboard!");
  } else {
    alert("No QR code available to copy.");
  }
};

generateQrBtn.addEventListener("click", generateQrCode);
shareBtn.addEventListener("click", copyQrCodeToClipboard);
