 // Called when capture operation is finished
    //
    function captureSuccess(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
          console.log(mediaFiles[i]);
                 uploadFile_audio(mediaFiles[i]);
        }
    }
    // Called if something bad happens.
    //
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }
    // A button will call this function
    //
    function captureAudio() {
        // Launch device audio recording application,
        // allowing user to capture up to 2 audio clips
        navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 1});
    }
    // Upload files to server

 
     function uploadFile_audio(mediaFile) {
          var uuid=device.uuid;
          var path = mediaFile.fullPath;
       
          var name = mediaFile.name;
             console.log(name);
         navigator.notification.activityStart("음성 등록 중", "음성 분석중입니다.");
        var options = new FileUploadOptions();
        options.fileKey="files_audio";
       

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
        params.file_name=name;
        params.uuid=uuid;
        console.log(uuid);
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(path, "http://homes1004.kr/upload_audio.php", win_audio, fail, options);
    }

    function win_audio(r) {

navigator.notification.activityStop();
console.log(r.response);
      
}