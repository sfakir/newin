function nextImage() {

    // add new images
    move(true);


}

function move (toRight,$stack) {
    if (!$stack) {
        $stack = $('#stack')
    }
    var hidden = 0;
    if (toRight) {
         hidden  = 1000;
    } else {
        hidden  = -1000;
    }

    var first=1;
    var cnt = 0;

    var showNextImage= function() {
        $(this).remove();
        var $this = $(this);
        /* $stack.children('div').slice(first,parseInt(first+4)).each(
            function(i){
                var $elem = $(this);
                $elem.animate({'left': positions[i] + 'px'},800,function(){
                    ++cnt;
                    if(cnt == 4){
                        $stack.children('div:nth-child('+parseInt(first+5)+')').animate({'left': positions[cnt] + 'px','opacity':1},500,function(){
                            //$this.hide();
                            ++first;
                            if(parseInt(first + 4) < elems)
                                enableNavRight();
                            enableNavLeft();
                        });
                    }
                });
            }
        );*/

    }
    $stack.children('div:first').animate({'left': hidden + 'px','opacity':0},
            500,
            showNextImage);
}
