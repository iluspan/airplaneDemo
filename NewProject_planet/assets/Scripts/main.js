cc.Class({
    extends: cc.Component,
    properties:{
    	player:cc.Node,
    	gameMusic:{
    		default:null,
    		type:cc.AudioClip,
    	},
        enemyGroup:{
    	    default:null,
            type:require('enemyGroup'),
        },
        timeEnemy:{
    	    default:null,
            type:require('timeEnemy')
        },
        bombNum:cc.Label,
    },
    onload:function(){
    	cc.audioEngine.playEffect(this.gameMusic,false);
    },
/*    pause:function(){
        cc.director.pause();
    },
    resume:function(){
        cc.director.resume();
    },*/
    onClick :function(){
        if(this.eState == D.commonInfo.gameState.start){
            this.eState = D.commonInfo.gameState.pause;
            cc.director.resume();
        }else if(this.eState == D.commonInfo.gameState.pause) {
            this.eState = D.commonInfo.gameState.start;
            cc.director.pause();
            console.log('no');
        }
    },
    bombOnClick:function () {
        if(this.bombNum.string > 0){
            this.enemyGroup.node.removeAllChildren();
            this.timeEnemy.node.removeAllChildren();
            this.bombNum.string -= 1;
         }else {
            console.log('没有子弹');
        }
});
