/**
 * Created by hWX229431 on 2015/5/20.
 */
var QiZi = (function(){
    var WIDTH = 20;
    return function($parent, width){
        this.$parentEle = $parent;
        this.width = width || WIDTH;
        this.qiZiObj = null;

        this.init = function(){
            this.$parentEle.empty();
            this.qiZiObj = $('<span class="qiZi">').css({
                'width': this.width + 'px',
                'height': this.width + 'px',
                'display': 'block',
                'border': '1px solid #000',
                'background': '#000',
                'border-radius': this.width + 'px',
                'margin-top': '50%',
                'margin-bottom': '50%',
                '-webkit-transform': 'translate3d(25%,-50%,0)',
                'transform': 'translate3d(25%,-50%,0)'
            }).appendTo(this.$parentEle);
            return this.qiZiObj;
        };
    }
})();
