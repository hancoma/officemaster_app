 function display_number() {
    console.log("전화번호");
window.plugins.sim.getSimInfo(successCallback, errorCallback);
}

function successCallback(result) {
  alert(result.phoneNumber);
}

function errorCallback(error) {
  alert(error);
}


 // Android only: check permission
function hasReadPermission() {
  window.plugins.sim.hasReadPermission(successCallback, errorCallback);
}

// Android only: request permission
function requestReadPermission() {
  window.plugins.sim.requestReadPermission(successCallback, errorCallback);
}