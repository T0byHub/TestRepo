async function startCamera() {
  const video = document.getElementById("video");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });
    video.srcObject = stream;
  } catch (err) {
    console.error("Kamera-Zugriff fehlgeschlagen:", err);
    alert("Zugriff verweigert oder nicht verfügbar.");
  }
}
