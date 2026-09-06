import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="aera">

    <header class="topbar">
      <div>
        <h1>AERA</h1>
        <p>Gesture-Controlled Interactive Space</p>
      </div>

      <div class="status">
        <span class="status-dot"></span>
        <span>READY</span>
      </div>
    </header>

    <section class="workspace">

      <div class="camera-container">
        <div class="camera-placeholder">
          <div class="camera-icon">◉</div>
          <h2>Interactive Space</h2>
          <p>Your webcam will appear here.</p>
        </div>

        <div class="object-layer">
          <div class="shape circle"></div>
          <div class="shape square"></div>
          <div class="shape triangle"></div>
        </div>
      </div>
    </section>

    <footer class="controller">
      <div>
        Object: <strong id="gestures-status">None</strong>
      </div>

      <button id="start-button">
        START AREA
      </button>
    </footer>
  
  </main>
  `;

const startButton = document.querySelector('#start-button');
const statusText = document.querySelector('.status span:last-child');
const cameraContainer = document.querySelector('.camera-container');

startButton.addEventListener('click', async () => {
  try {
    console.log("1: Requesting camera...");
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true
    });

    console.log("2: Camera obtained!", stream);
    const video = document.createElement('video');

    console.log("3: Video element created");

    video.srcObject = stream;

    console.log("4: Stream assigned");


    video.autoplay = true;
    video.playsInline = true;

    console.log("5: Video configured");
    cameraContainer.prepend(video);
    console.log("6: Video added");

    document.querySelector('.camera-placeholder').style.display = 'none';
    console.log("7: Placeholder hidden");

    statusText.textContent = 'CAMERA ACTIVE';
    console.log("8: Status updated");
    startButton.textContent = 'AERA ACTIVE';
    console.log("9: Button updated");

  } catch (error) {
    console.error('Camera error:', error);
    statusText.textContent = 'CAMERA ERROR';
  }
});
