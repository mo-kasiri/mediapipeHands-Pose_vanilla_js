export const detectBlazePose3DTF = (imageElement) => {

    const detectPose = async ()=> {
        console.log(poseDetection);
        const model = poseDetection.SupportedModels.BlazePose;
        const detectorConfig = {
            runtime: 'tfjs',
            solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/pose'
            // or 'base/node_modules/@mediapipe/pose' in npm.
        };
        const detector = await poseDetection.createDetector(model, detectorConfig);
        console.log(detector);
        await detector.estimatePoses(imageElement).then((poses)=>{
            const tick = ()=>{
                //console.log('hello from tick blaze pose')
                console.log(poses);
                window.requestAnimationFrame(tick);
            }
            tick();
        });
    }
    detectPose();
}

