/**
 * 作成処理
 * ゲームにアセットを追加するなどの生成処理を行う
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
var dude;
//配列に変更
//// JavaScriptの配列は、範囲が必要ない。後で増やすことができる

// グループに変更
var stars;
// var star = array();

function create() {

    // 新規のグループを作成して、そのインスタンスをstarsに代入
    stars = game.add.group();

    // グループ内のオブジェクトに物理挙動を有効にする
    stars.enableBody = true;

    // 配列の最後に追加
    for(let i=0 ; i<100;i++){
        let star = stars.create(game.rnd.integerInRange(80,560), game.rnd.integerInRange(80, 280), 'star');

    star.body.bounce.x = 1;
    star.body.bounce.y = 1;
    star.inputEnabled = true; // 入力を受け取る

    star.body.velocity.x = game.rnd.realInRange(-200, 200);
    star.body.velocity.y = game.rnd.realInRange(-200, 200);

    star.body.collideWorldBounds = true;

}
// 関数型現言語の繰り返しの形
/*
    star.forEach(function(st,index,ar){
        game.physics.arcade.enable(st);

        st.body.collideWorldBounds = true;
        st.body.bounce.x = 1;
        st.body.bounce.y = 1;
        st.inputEnabled = true; // 入力を受け取る

        st.body.velocity.x = game.rnd.realInRange(-200, 200);
        st.body.velocity.y = game.rnd.realInRange(-200, 200);
    });
    */

    dude = game.add.sprite(0,0,'dude');

    dude.frame = 4;
    dude.animations.add('left',[0,1,2,3],10,true);
    dude.animations.add('right',[5,6,7,8],10,true);

    // アンカー=いかり=基準点
    // 0=左,　上
    // 0.5=中央
    // 1=右, 下
    dude.anchor = new Phaser.Point(0.5, 1);

    // 物理エンジンをdudeが使う
    // ARCADE物理エンジン=簡易なもの。速度が早い
    game.physics.arcade.enable(dude);

    // 物理エンジンを有効にすると、bodyというプロパティーが使えるようになる
    // velocity=速度。秒速？ピクセルで指定


    // dude.body.velocity.x = 200;
    // dude.body.velocity.y = 200;
    dude.body.bounce.x = 1;
    dude.body.bounce.y = 1;

    dude.body.collideWorldBounds = true;







}
