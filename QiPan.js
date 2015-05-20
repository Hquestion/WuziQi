/**
 * Created by hWX229431 on 2015/5/20.
 */
var QiPan = (function(){
    var QiPanObj;
    var ROW_DEFAULT = 15, COL_DEFAULT = 15;
    var WIDTH = 30;


    function Constructor($parent, row, col){
        var $parentDom = $parent;
        var row = row || ROW_DEFAULT;
        var col = col || COL_DEFAULT;
        var qiGeMap = {};

        var paintQiPan = function(){
            var qiPanWidth = WIDTH * col, qiPanHeight = WIDTH * row;
            var $outer = $('<div class="outer">').css({
                'width': qiPanWidth + 'px',
                'height': qiPanHeight + 'px',
                'margin': '0 auto'
            }).appendTo($parentDom);
            for(var i =0; i < row * col; i++){
                var inner = new QiGe($outer, WIDTH, WIDTH);
                inner.init();
                if(i < col){
                    inner.setCss({
                        'border-top': '1px solid #ccc'
                    });
                }
                if(i % col === 0){
                    inner.setCss({
                        'border-left': '1px solid #ccc'
                    });
                }
                var coordinateX = Math.floor(i / col), coordinateY = i % col;
                qiGeMap[coordinateX + '_' + coordinateY] = inner;
                inner.setCoordinate(coordinateX, coordinateY);
            }
        };

        return {
            init: function(){
                paintQiPan();
            },
            findQiGe: function(x, y){
                return qiGeMap[x + '_' + y];
            }
        }
    }

    return {
        getInstance: function($parent, row, col){
            if(!QiPanObj){
                QiPanObj = new Constructor($parent, row, col);
            }
            return QiPanObj;
        }
    }
})();
