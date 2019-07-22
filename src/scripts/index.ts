var handleSuccess = function(stream: MediaStream) {
 const recorder = new MediaRecorder(stream);
};

function init() {
  navigator
    .mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(handleSuccess)
    .catch(handleDenied);
}

document.getElementById('record').addEventListener('click', init, false);

