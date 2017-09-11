var feed = new Instafeed({
    clientId: '{5f60399a79cf4c68859397f132aadc5d}',
    get: 'user',
    userId: '{sendaiitfes}',
    accessToken:'{5902518086.5f60399.af8a274d6ace4bf7a160de986ff83a44}',
    links: true ,
    limit: 8,// 取得件数
    resolution:'standard_resolution', // thumbnail (default) - 150x150 | low_resolution - 306x306 | standard_resolution - 612x612
    template: '', // 画像URL：{{image}} リンク：{{link}} キャプションテキスト{{caption}} いいね数：{{likes}} コメント数：{{comments}}

    success: function(){
      //取得完了時のコールバック
    }
  });
feed.run();