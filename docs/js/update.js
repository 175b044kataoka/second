/**
 * 更新処理
 * 1フレームごとに実行される更新処理
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
function update() {
    // dudeとstarsグループ内のすべての星が衝突するようになる
    // let hit = game.physics.arcade.collide(dude,stars);

    // dudeと星が重なったら、その星を消す処理(pickStar)を呼び出す
    game.physics.arcade.overlap(dude, stars, pickStar, null, this);


    //dude.x++;
    //dude.y++;

    /*if(dude.body.velocity.x > 0){
        dude.animations.play("right");
    }
    else{
        dude.animations.play("left");
    }*/

    //dude.x = game.input.x;
    //dude.y = game.input.y;

    /*if(dude.body.velocity.x > 0){
        dude.animations.play("right");
    }
    else{
        dude.animations.play("left");
    }*/


/*
    star.forEach(function(st,index,ar){
        let hit = game.physics.arcade.collide(dude,st);
    if(st.input.pointerOver()){
        st.kill();
    }
});
*/
//  クリックしたときのみ移動
if (game.input.mousePointer.isDown || game.input.pointer1.isDown)
{
    //  400はマウスに向かって移動する速度
    game.physics.arcade.moveToPointer(dude, 400); // 指定された表示オブジェクトを一定の速度でポインタの方に移動

    //  マウスと重なった場合に移動が止まる
    if (Phaser.Rectangle.contains(dude.body, game.input.x, game.input.y))// 指定された座標が、このRectangleオブジェクトによって定義された領域内に含まれるかどうかを判定する
    {
        dude.body.velocity.setTo(0, 0); // 速度を0にする
    }
}
else
{
    dude.body.velocity.setTo(0, 0); // 速度を0にする
}

}

// dudeに、最初に設定したスプライト、starに、次に設定したスプライトが渡される
function pickStar(dude, star){
    star.kill();
}
