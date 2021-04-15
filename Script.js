speed = 3 //The speed variable
video = document.querySelector('video') //video variable that as video selected as the queryselector
Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set.call(video, speed) //object that sets the speed and queryselector which is the video
Object.defineProperty(video, 'playbackRate', { writable: false }) //puts it into action!
