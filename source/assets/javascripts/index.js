require('../stylesheets/application.css.scss');
require('imports?jQuery=jquery!bootstrap');

$(function(){
    var $container = $(".instagram");
    var html = "";

    $.ajax({
        url: "common/instagram.php",//PHPファイルURL
        type:"POST",
        dataType: "json"
    }).done(function(data){
        //通信成功時の処理
        $.each(data.data,function(i,item){
            var imgurl = item.images.low_resolution.url; //低解像度の画像のURLを取得
            var link = item.link; //リンクを取得
            html += "<li><a href='" + link + "' target='_blank'><img src='" + imgurl + "'></a></li>";
        });
    }).fail(function(){
        //通信失敗時の処理
        html = "<li>画像を取得できません。</li>";
    }).always(function(){
        //通信完了時の処理
        $container.html(html);
    });
});