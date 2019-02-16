(function(DrawerApi) {

    /**
     * Sets background image from given url.
     *
     * @param {String}   imageUrl
     * @param {Function} callback callback on success
     */
    DrawerApi.prototype.addImageFromUrl = function(imageUrl, options) {
        this.drawer.api.checkIsActive();
        var tool = this.drawer.getPluginInstance('ImageFromUrl');
        console.log('addImageFromUrl2', imageUrl);
        tool.loadImageFromUrl(imageUrl);
    };

    /**
     * Sets background image from given image object.
     *
     * @param {Image}   image
     * @param {Object}   options
     * @param {Function} callback callback on success
     */
    DrawerApi.prototype.addImage = function(image, options) {
        this.drawer.api.checkIsActive();
        var tool = this.drawer.getPluginInstance('ImageFromUrl');
        tool.addImage(image, options);
    };

})(DrawerJs.DrawerApi);
