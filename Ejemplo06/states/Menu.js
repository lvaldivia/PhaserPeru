Menu = function(){}
Menu.prototype = {
	create:function(){
		this.background = this.game.add.sprite(0,0,'background');
		this.cover = this.game.add.sprite(0,0,'monster-cover');
		this.cover.y =this.game.height - this.cover.height;
		this.title = this.game.add.sprite(0,0,'title');
		this.title.anchor.setTo(0.5);
		this.title.x = this.game.world.centerX;
		this.title.y = 150;
		//Para agregar botones 9 parametros
		//dos primeros ejes en X e Y
		// 3ero key 
		//4to funcion a ejecutar
		//5 contexto normalmente this
		//estado de over 
		//estado de out 
		//estado press
		//estado up (es nuestro caso no tenemos)
		//si revisan el spritesheet podemos ver que tiene 3 frames (0,1,2)
		this.btnStart = this.game.add.button(0,0,'button-start',this.goGame,this,1,0,2);
		this.btnStart.anchor.setTo(0.5);
		this.btnStart.x = 450;
		this.btnStart.y = this.game.world.centerY;

	},
	goGame:function(){
		this.game.state.start('Game');
	}
}