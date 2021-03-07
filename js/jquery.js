
// 乱数生成確認
    // var min= 0
    // var max= 8
    // var number = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    // console.log(number);

    var min= 1
    var max= 9


          


// ボタンをクリックしたら動くJS
$("#search").on("click", function(){
    // ９つの乱数を作り、それに各メニューを対応させる
    var number = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    console.log(number);
    
    // ↓各メニュー表示するJS
    
    if (number === 9) {
        $(".menu").html("ハンバーグ");
        $(".images").children('.photo').attr('src', "img/hamburg.jpeg");
        $(".comment").html("世代問わず人気");
        $(".contents").css({"background-color" : "#8b0304"});
        $(".menu").css({"color" : "#faebd7"});

    }else if (number === 1){
        $(".menu").html("お鍋");
        $(".images").children('.photo').attr('src', "img/onabe.jpeg");
        $(".comment").html("みんなでわいわい");
        $(".contents").css({"background-color" : "#260657"})
        $(".menu").css({"color" : "#faebd7"});

    }else if (number === 2){
        $(".menu").html("オイスターソース炒め");
        $(".images").children('.photo').attr('src', "img/yasaiitame.jpeg");
        $(".comment").html("ご飯に合います・・");
        $(".contents").css({"background-color" : "#8c3003"});
        $(".menu").css({"color" : "#faebd7"});

        
    }else if (number === 3){
        $(".menu").html("親子丼");
        $(".images").children('.photo').attr('src', "img/oyakodon.jpeg");
        $(".comment").html("お母さんの味");
        $(".contents").css({"background-color" : "#968d00"});
        $(".menu").css({"color" : "#faebd7"});
        
    }else if (number === 4){
        $(".menu").html("ビビンバ");
        $(".images").children('.photo').attr('src', "img/bibimbap.jpeg");
        $(".comment").html("ビビンバの素で簡単に♪");
        $(".contents").css({"background-color" : "#906000"});
        $(".menu").css({"color" : "#faebd7"});

        
    }else if (number === 5){
        $(".menu").html("餃子");
        $(".images").children('.photo').attr('src', "img/gyoza.jpeg");
        $(".comment").html("冷凍もあり");
        $(".contents").css({"background-color" : "#0b564f"});
        $(".menu").css({"color" : "#faebd7"});

    }else if (number === 6){
        $(".menu").html("外食しちゃおう！");
        $(".images").children('.photo').attr('src', "img/gaisyoku.jpeg");
        $(".comment").html("たまにはいいよ！");
        $(".contents").css({"background-color" : "#5c791b"});
        $(".menu").css({"color" : "#faebd7"});

    }else if (number === 7){
        $(".menu").html("麻婆豆腐");
        // 画像がでない
        $(".images").children('.photo').attr('src', "img/ma-bo-doufu.jpeg");
        $(".comment").html("麻婆茄子もあり");
        $(".contents").css({"background-color" : "#410155"});
        $(".menu").css({"color" : "#faebd7"});

    }else if (number === 8){
        $(".menu").html("パスタ");
        $(".images").children('.photo').attr('src', "img/pasta.jpeg");
        $(".comment").html("女性に人気？");
        $(".contents").css({"background-color" : "#022561"});
        $(".menu").css({"color" : "#faebd7"});

    }



});

