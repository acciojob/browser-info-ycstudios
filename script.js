//your JS code here. If required.
function getBrowserInfo() {
    let userAgent = navigator.userAgent;
    let browserName, version;

    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
        version = userAgent.match(/Chrome\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
        version = userAgent.match(/Firefox\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
        browserName = "Apple Safari";
        version = userAgent.match(/Version\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
        version = userAgent.match(/Edg\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
        version = userAgent.match(/(MSIE|rv:)([\d.]+)/)[2];
    } else {
        browserName = "Unknown Browser";
        version = "Unknown Version";
    }

    document.getElementById("browser-info").textContent = `You are using ${browserName} version ${version}`;
}

getBrowserInfo();
