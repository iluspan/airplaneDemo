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
    	enemyPrefab:{
    		default:null,
    		type:cc.Prefab,
    	},
    	smallPrefab:{
    		default:null,
    		type:cc.Prefab,
    	},
		scoreDisplay:cc.Label,
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function () {
/*    	this.schedule(function(){
    		this.spawnTimeEnemy();
    		this.smallEnemy();
    	},1,5,10);*/
		//this.startAction();
		this.schedule(function () {
			this.startAction();
		},10,3,20);
    },
	startAction:function(){
    	this.count = 0;
    	var that = this;
    	this.callback = function () {
			if(this.count === 6){
				this.unschedule(this.callback);
			}
			this.spawnTimeEnemy();
			this.count ++;
		}
		this.schedule(this.callback,1)
	},
    spawnTimeEnemy:function(){
    	var timeEnemy = cc.instantiate(this.enemyPrefab);
    	this.node.addChild(timeEnemy);
    	timeEnemy.setPosition(-this.node.parent.width/4,this.node.parent.height/2);
    },

    smallEnemy:function(){
    	var smallEnemy = cc.instantiate(this.smallPrefab);
    	this.node.addChild(smallEnemy);
    	smallEnemy.setPosition(this.node.parent.width/2,this.node.parent.height/4);
    },
    // update (dt) {},
});
