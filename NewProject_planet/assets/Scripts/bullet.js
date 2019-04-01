// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    	speed: cc.Integer,
    	enemy:cc.Node,

    },

    onLoad:function () {
        cc.director.getCollisionManager().enabled=true;
    },

    onCollisionEnter: function(other,self){
        console.log(this.node.width);
        this.node.destroy();
    },


    start () {

    },

    update: function(dt) {
    	this.node.y += dt * this.speed;
        //console.log(this.node.width);
/*    	if(this.getEnemyDistance() < 100){
    		this.onShooted();
    		return;
    	}*/
    },
});
