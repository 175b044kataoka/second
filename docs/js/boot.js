/**
 * 起動処理
 * Phaserを簡易な構成で実行開始する
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
window.onload = function() {
	//	Create your Phaser game and inject it into the gameContainer div.
	//	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
	window.game = new Phaser.Game(640, 360, Phaser.AUTO, 'gameContainer',
		{
			preload: preload,
			create: create,
			update: update,
			render: render
		});
};
