import {
    HandLandmarker,
    FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0";

let handLandmarker;

let configuration = {
    baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
        delegate: "GPU"
    },
    numHands: 2
}

export const detectHands = (imageElement) =>{
    const createHandLandmarker = async () => {

        const vision = await FilesetResolver.forVisionTasks(
            // path/to/wasm/root
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
        );

        // Allows you to customize the Hand Landmarker with configuration options ---
        // https://developers.google.com/mediapipe/solutions/vision/hand_landmarker/web_js
        handLandmarker = await HandLandmarker.createFromOptions(vision, configuration);
        await handLandmarker.setOptions({ runningMode: "VIDEO" });
        let lastVideoTime = -1;

        const tick = ()=>{
            if(imageElement.currentTime !== lastVideoTime)
            {
                const detections = handLandmarker.detectForVideo(imageElement,imageElement.currentTime);
                lastVideoTime = imageElement.currentTime;
                if(detections.landmarks.length)
                {
                    console.log(detections);
                }
            }
            window.requestAnimationFrame(tick);
        }

        tick();
    };
    createHandLandmarker();
}
