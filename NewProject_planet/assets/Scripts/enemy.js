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
    properties:()=>({
    	speedX:0,
        speedY:0,
        HP:0,
        enemyMusic:{
            default:null,
            type:cc.AudioClip,
        },
        score:0,

/*        main: {
            default: null,
            type: require('main'),
        },*/
    }),

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        cc.director.getCollisionManager().enabled = true;
        this.enemyGroup = this.node.parent.getComponent('enemyGroup');
        var anim = this.getComponent(cc.Animation);
        var s = this.score;
    },
    onCollisionEnter: function(other,self){
        cc.audioEngine.playEffect(this.enemyMusic,false);
/*        var anim = this.getComponent(cc.Animation);
        anim.play();*/
        if(this.HP > 0){
        	this.HP -= 1;
            this.getComponent(cc.Animation).play();
        }else{
            console.log('destroy');
            this.node.destroy();
            this.enemyGroup.getScore();
 /*           var anim = this.getComponent(cc.animation);
            anim.play(enemy3ani);*/
        	//this.node.destroy();
        }
    },
    update: function(dt) {
        this.node.y -= dt * this.speedY;
        this.node.x -= dt * this.speedX;
    },
});
