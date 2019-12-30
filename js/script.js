$( document).ready(function(){

    $('#members').click(function(){

        $('.member-list').slideToggle(500);
    });


    /*$('#goTop').click(function(){

        $('html.body').animate({scrollTop:0} , 900);

        return false;

    });*/

    $('event-photos-item').mouseenter(function(){
       
        var title = $(this).parent('li').data('title');

        var desc = $(this).parent('li').data('desc');

        if (!$(this).children("div").length){
            $(this).append('<div class = "overlay"></div>');
        }

        var overlay = $(this).children('.overlay');

        overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>')

        overlay.fadeIn(800);
    });


    $('event-photos-item').mouseleave(function(){
       
        var overlay = $(this).children('.overlay');

        overlay.fadeOut(800);
    });

    //獨角獸
    var canvas = document.getElementById("mycanvas")
    var ctx = canvas.getContext("2d")


    canvas.width= 400

    canvas.height= 300

    var time=0
    function draw(){
    time++
    ctx.clearRect(0,0,600,400) //清除畫布上的軌跡
    //人面獅身
        ctx.fillStyle="#ffffff"
        let carx = time%440-40
        
    ctx.moveTo(carx+20,200)
    ctx.lineTo(carx+30,220)
        ctx.lineTo(carx+60,220)
        ctx.lineTo(carx+65,150)
        ctx.lineTo(carx+70,150)
        ctx.lineTo(carx+75,100)
    ctx.lineTo(carx+90,150)
        ctx.lineTo(carx+100,150)
        ctx.lineTo(carx+120,165)
    ctx.lineTo(carx+100,175)
    ctx.lineTo(carx+100,260)
    ctx.lineTo(carx+80,260)
    ctx.lineTo(carx+80,240)
    ctx.lineTo(carx+50,240)
    ctx.lineTo(carx+50,260)
    ctx.lineTo(carx+30,260)
    ctx.lineTo(carx+30,240)
    ctx.lineTo(carx+25,230)
    ctx.lineTo(carx+10,250)
        ctx.lineTo(carx,240)
    ctx.lineTo(carx+5,240)
    ctx.closePath()
    ctx.fillStyle="#ffffff"
        ctx.fill()
    ctx.strokeStyle="purple"
        ctx.stroke()
    
    ctx.fillStyle = "black"
        ctx.fillRect(carx+80,160,5,10)
    
        ctx.fillStyle = "black"
        ctx.moveTo(carx+95,160)
    ctx.lineTo(carx+100,167)
    ctx.lineTo(carx+105,160)
    ctx.closePath()
    ctx.strokeStyle="purple"
        ctx.stroke()
    
        //確認滑鼠事件有抓取到
        ctx.beginPath()
        ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
        ctx.fillStyle="black"
        ctx.fill()
    }
    // draw()

    //設定連續繪製
    setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

    //滑動效果
    

});

