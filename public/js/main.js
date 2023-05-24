import * as canvas from './canvasDraw.js';
import { detectHands } from './mediapipeHands.js';


const defaultConstraints = {
    audio: true,
    video: true,
};

const localVideo = document.getElementById("local_video");

navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream) => {
        window.stream = stream;
        localVideo.srcObject = stream;
        canvas.TakeSnap(localVideo);
        //detectPose(localVideo);
        detectHands(localVideo);
        //detectBlazePose3DMediapipe(localVideo);
    });

