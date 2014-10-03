var getDeviceID = function (success, fail) {
  // 5th param is NOT optional. must be at least empty array
  cordova.exec(success, fail, "DeviceID", "getDeviceID", []);
};

module.exports = getDeviceID;