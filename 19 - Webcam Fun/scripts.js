const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// get the video from the webcam and stream it to the video element
function getVideo() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  })
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(erreur => {
      console.error('oh nooooooo: ', erreur);
    });
}

//every 16ms (60fps), take a screenshot from the webcam and paint it on the canvas
function paintToCanvas() {
  const width = video.videoWidth; // different de video.width ? taille de la video, et non pas de l'�l�ment <video> ?
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  // return in case we need to stop the painting
  return setInterval(() => {
    ctx.drawImage(video, 0, 0);

    //recuperation des pixels de l'image pour faire des trucs funky
    let pixels = ctx.getImageData(0, 0, width, height);
    //Array : r,g,b,alpha,r,g,b,alpha, etc. 4 entries in the array for each pixel
    //let's mess with the pixels
    // pixels = redEffect(pixels);

    // pixels = rgbtSplit(pixels);

    // and let's put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

//prendre des screenshot
function takePhoto() {
  snap.currentTime = 0; //rewind sound every time
  snap.play();
  // get the data from the canvas. data will be a base64 string
  const data = canvas.toDataURL('image/jpeg');
  // create the download link for the snapshot
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome'); //name of the file
  link.innerHTML = `<img src="${data}" alt="handsome me"/>`;
  // insert the link
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i] = pixels.data[i + 1] + 100; // r
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // g
    pixels.data[i + 2] = pixels.data[i + 2] - 50; // b
  }
  return pixels;
}

function rgbtSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i] + 100;
    pixels.data[i + 100] = pixels.data[i + 1] - 50;
    pixels.data[i - 150] = pixels.data[i + 2] - 50;
  }
  return pixels;
}


/**
 * "main" (kindof)
 */

//get video from webcam to canvas
getVideo();
// we start painting the canvas only when the camera/video is setup
video.addEventListener('canplay', paintToCanvas);

document.querySelector('button').addEventListener('click', takePhoto);
