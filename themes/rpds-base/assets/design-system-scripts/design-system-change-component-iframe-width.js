(function () {
    //Node.prototype.forEach polyfill
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    var dsDeviceIcons = document.querySelectorAll('.design-system-mq-link');
    if (dsDeviceIcons.length < 1) {
        return;
    } else {
        // dsDeviceIcons = Array.from(dsDeviceIcons);

        dsDeviceIcons.forEach(function (device) {
            device.addEventListener('click', adjustDsIFrame, false);

        });

        function adjustDsIFrame(evt) {
            let deviceWidth = this.dataset.mqvalue;
            let compIframe = document.querySelector(".design-system-component--iframe");
            evt.preventDefault();
            compIframe.style.width = deviceWidth;
        }
    }
})();