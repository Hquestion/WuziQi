/**
 * Created by hWX229431 on 2015/5/20.
 */
var QiGe = (function(){

    return function($parent, width, height){
        this.$parentEle = $parent;
        this.qiGeWidth = width;
        this.qiGeHeight = height;
        this.inner = null;
        this.qizi = null;
        this.coords = null;
        this.numbersOfQiziH = 0;
        this.numbersOfQiziS = 0;
        this.numbersOfQiziLT =0;
        this.numbersOfQiziRT = 0;

        this.init = function(){
            this.inner = $('<span class="inner">').css({
                'width': this.qiGeWidth + 'px',
                'height': this.qiGeHeight + 'px',
                'display': 'block',
                'border-right': '1px solid #ccc',
                'border-bottom': '1px solid #ccc',
                'float': 'left'
            }).appendTo(this.$parentEle);
            this.bindEvents();
            return this.inner;
        };

        this.setCss = function(obj){
            this.inner.css(obj);
            return this.inner;
        };

        this.setCoordinate = function(x, y){
            this.coords = {
                x: x,
                y: y
            };
        };

        this.getCoordinate = function(){
            return this.coords;
        };

        this.bindEvents = function(){
            //when click a qiGe, add a qiZi and check if can get clear
            var self = this;
            this.inner.unbind('click').bind('click', function(){
                var qizi = new QiZi(self.inner, 20);
                qizi.init();
                self.qizi = qizi;
                if(self._checkIsFive()){
                    alert('ok')
                }
            });
        };

        this._checkIsFive = function(){
            //横向
            if(this._checkLeft()){
                alert('ok')
            }else if(this._checkRight()){
                alert('ok');
            }
            //竖向
            if(this._checkTop()){
                alert('top ok');
            }else if(this._checkBottom()){
                alert('bottom ok');
            }
            //'\'向
            if(this._checkLeftTop()){
                alert('left top ok');
            }else if(this._checkRightBottom()){
                alert('right bottom ok');
            }
            //'/'向
            if(this._checkRightTop()){
                alert('right top ok');
            }else if(this._checkLeftBottom()){
                alert('left bottom ok');
            }
        };

        this._checkLeft = function(){
            var QiPanSingleton = QiPan.getInstance();
            if(this.coords){
                for(var i = -1; i > -5; i--){
                    var qiGe = QiPanSingleton.findQiGe(this.coords.x, this.coords.y + i);
                    if(this.numbersOfQiziH >= 4){
                        return true;
                    }else {
                        if(!qiGe || !qiGe.qizi){
                            return false;
                        }else {
                            this.numbersOfQiziH++;
                        }
                    }
                }
                if(this.numbersOfQiziH >= 4){
                    this.numbersOfQiziH = 0;
                    return true;
                }else {
                    return false;
                }
            }
        };

        this._checkRight = function(){
            var QiPanSingleton = QiPan.getInstance();
            if(this.coords){
                for(var i = 1; i < 5; i++){
                    var qiGe = QiPanSingleton.findQiGe(this.coords.x, this.coords.y + i);
                    if(this.numbersOfQiziH >= 4){
                        this.numbersOfQiziH = 0;
                        return true;
                    }else {
                        if (!qiGe || !qiGe.qizi) {
                            return false;
                        } else {
                            this.numbersOfQiziH++;
                        }
                    }
                }
                if(this.numbersOfQiziH >= 4){
                    this.numbersOfQiziH = 0;
                    return true;
                }else {
                    return false;
                }
            }
        };

        this._checkTop = function(){
            var QiPanSingleton = QiPan.getInstance();
            if(this.coords){
                for(var i = -1; i > -5; i--){
                    var qiGe = QiPanSingleton.findQiGe(this.coords.x + i, this.coords.y);
                    if(this.numbersOfQiziS >= 4){
                        this.numbersOfQiziS = 0;
                        return true;
                    }else {
                        if(!qiGe || !qiGe.qizi){
                            return false;
                        }else {
                            this.numbersOfQiziS++;
                        }
                    }
                }
                if(this.numbersOfQiziS >= 4){
                    this.numbersOfQiziS = 0;
                    return true;
                }else {
                    return false;
                }
            }
        };

        this._checkBottom = function(){
            var QiPanSingleton = QiPan.getInstance();
            if(this.coords){
                for(var i = 1; i < 5; i++){
                    var qiGe = QiPanSingleton.findQiGe(this.coords.x + i, this.coords.y);
                    if(this.numbersOfQiziS >= 4){
                        this.numbersOfQiziS = 0;
                        return true;
                    }else {
                        if (!qiGe || !qiGe.qizi) {
                            return false;
                        } else {
                            this.numbersOfQiziS++;
                        }
                    }
                }
                if(this.numbersOfQiziS >= 4){
                    this.numbersOfQiziS = 0;
                    return true;
                }else {
                    return false;
                }
            }
        };

        this._checkLeftTop = function(){
            var QiPanSingleton = QiPan.getInstance();
            if(this.coords){
                for(var i = -1; i > -5; i--){
                    var qiGe = QiPanSingleton.findQiGe(this.coords.x + i, this.coords.y + i);
                    if(this.numbersOfQiziLT >= 4){
                        this.numbersOfQiziLT = 0;
                        return true;
                    }else {
                        if(!qiGe || !qiGe.qizi){
                            return false;
                        }else {
                            this.numbersOfQiziLT++;
                        }
                    }
                }
                if(this.numbersOfQiziLT >= 4){
                    this.numbersOfQiziLT = 0;
                    return true;
                }else {
                    return false;
                }
            }
        };

        this._checkRightBottom = function(){
            var QiPanSingleton = QiPan.getInstance();
            if(this.coords){
                for(var i = 1; i < 5; i++){
                    var qiGe = QiPanSingleton.findQiGe(this.coords.x + i, this.coords.y + i);
                    if(this.numbersOfQiziLT >= 4){
                        this.numbersOfQiziLT = 0;
                        return true;
                    }else {
                        if (!qiGe || !qiGe.qizi) {
                            return false;
                        } else {
                            this.numbersOfQiziLT++;
                        }
                    }
                }
                if(this.numbersOfQiziLT >= 4){
                    this.numbersOfQiziLT = 0;
                    return true;
                }else {
                    return false;
                }
            }
        };

        this._checkRightTop = function(){
            var QiPanSingleton = QiPan.getInstance();
            if(this.coords){
                for(var i = -1; i > -5; i--){
                    var qiGe = QiPanSingleton.findQiGe(this.coords.x - i, this.coords.y + i);
                    if(this.numbersOfQiziRT >= 4){
                        this.numbersOfQiziRT = 0;
                        return true;
                    }else {
                        if(!qiGe || !qiGe.qizi){
                            return false;
                        }else {
                            this.numbersOfQiziRT++;
                        }
                    }
                }
                if(this.numbersOfQiziRT >= 4){
                    this.numbersOfQiziRT = 0;
                    return true;
                }else {
                    return false;
                }
            }
        };

        this._checkLeftBottom = function(){
            var QiPanSingleton = QiPan.getInstance();
            if(this.coords){
                for(var i = 1; i < 5; i++){
                    var qiGe = QiPanSingleton.findQiGe(this.coords.x - i, this.coords.y + i);
                    if(this.numbersOfQiziRT >= 4){
                        this.numbersOfQiziRT = 0;
                        return true;
                    }else {
                        if (!qiGe || !qiGe.qizi) {
                            return false;
                        } else {
                            this.numbersOfQiziRT++;
                        }
                    }
                }
                if(this.numbersOfQiziRT >= 4){
                    this.numbersOfQiziRT = 0;
                    return true;
                }else {
                    return false;
                }
            }
        };
    }
})();
