const imageScaleFactor = 0.50;
const flipHorizontal = false;
const outputStride = 16;

export const detectPose = (imageElement) => {

    posenet.load().then(function (net) {
        // Running the animation function
        const tick = ()=>
        {
            const pose = net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride);
            pose.then((pose) => {
                if(pose.keypoints[0].score > 0.90){
                    console.log(pose);
                }else{
                    console.log('No nose detected!');
                }
            });
            window.requestAnimationFrame(tick);
        }
        tick();
    });
}
