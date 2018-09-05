var handleSuccess = function(stream) {
  var context = new AudioContext();
  var source = context.createMediaStreamSource(stream);
  var processor = context.createScriptProcessor(1024, 1, 1);
  
  source.connect(processor);
  processor.connect(context.destination);

  processor.onaudioprocess = function(e) {
    // Do something with the data, i.e Convert this to WAV
    console.log(context.createBuffer(32, 3072000, 96000).getChannelData(1));
    debugger;
  };
};

  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(handleSuccess);