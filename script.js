async function startCamera() {
  const constraints = {
    video: {
      facingMode: { exact: "environment" }
    },
    audio: false
  };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const video = document.getElementById("video");
    video.srcObject = stream;
  } catch (err) {
    console.error("Kamera konnte nicht gestartet werden:", err);
    alert("Zugriff auf die Kamera wurde verweigert oder ist nicht verfügbar.");
  }
}

startCamera();
