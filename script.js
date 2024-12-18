// Recebe os dados do formulário via URL
const urlParams = new URLSearchParams(window.location.search);
document.getElementById("name").textContent = urlParams.get("name");
document.getElementById("email").textContent = urlParams.get("email");
document.getElementById("phone").textContent = urlParams.get("phone");

// Código Pix fornecido
const pixCode = "00020126420014BR.GOV.BCB.PIX0120bieldados1@gmail.com520400005303986540525.005802BR5925Antonio Gabriel da Concei6009SAO PAULO61080540900062250521X2uj3aDk0TSJyqld7xxdm6304D7FD";

// Gera o QR Code e exibe o código Pix
QRCode.toDataURL(pixCode, { width: 200 }, (err, url) => {
  if (!err) {
    document.getElementById("qrCode").src = url;
  } else {
    console.error("Erro ao gerar o QR Code:", err);
  }
});

document.getElementById("pixCode").textContent = pixCode;

// Timer de 30 minutos
const timerElement = document.getElementById("timer");
let timeLeft = 30 * 60; // 30 minutos em segundos

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `QR Code expira em: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    document.getElementById("qrCodeContainer").innerHTML = `
      <p class="expired">⚠️ O QR Code expirou. Por favor, gere um novo pagamento.</p>
    `;
  }
};

const timerInterval = setInterval(updateTimer, 1000);


