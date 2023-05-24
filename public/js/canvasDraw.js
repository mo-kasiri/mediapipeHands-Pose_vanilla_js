const snap = document.getElementById('snap');
const canvasElement = document.getElementById('local_canvas');
const context = canvasElement.getContext('2d');

export const TakeSnap = (videoElement) => {
    snap.addEventListener('click', () => {
        context.drawImage(videoElement, 0, 0, 640, 480);
    });
}

