cc.Class({
    extends: cc.Component,

    properties:{
        enemyPre:{
            default:null,
            type: cc.Prefab,
        },
        canvas:{
            default:null,
            type:cc.Node,
        },
        scoreDisplay:cc.Label,
        pauseButton:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function () {
    	this.score = 0;
        this.schedule(function(){
            this.spawnNewEnemy();
        },2);
        this.state = true;
    },

/*    startAction: function() {
        this.spawnNewEnemy();
    },*/
    spawnNewEnemy:function(){
        var newEnemy = cc.instantiate(this.enemyPre);
        this.node.addChild(newEnemy);
        newEnemy.setPosition((Math.random()-0.5) * this.node.parent.width/2,this.node.parent.height/2);
    },
    getScore:function(){
    	this.score += 25;
    	this.scoreDisplay.string = this.score.toString();
    },

    saveScore:function(){
    	return this.scoreDisplay.string;
    },
    updateScore:function(){
    	var cScore = this.scoreDisplay.string;
    	cc.sys.localStorage.setItem('cScore', cScore);
    },
    update:function(){
    	this.updateScore();
    },

});
