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
        ufoPre:{
            default:null,
            type:cc.Prefab,
        },
        bombNum:cc.Label,
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

    onLoad () {
        this.startAction();
        this.num = 0;
    },

    start () {

    },
    startAction:function(){
        this.schedule(
            function(){
                this.spawmNewUfo();
            },5,30);
    },
    spawmNewUfo:function(){
        var new_ufo = cc.instantiate(this.ufoPre);
        this.node.addChild(new_ufo);
        new_ufo.setPosition((Math.random()-0.5) * this.node.parent.width/2,this.node.parent.height/2);
    },
    getBomb:function(){
        console.log('yes');
        if (parseInt(this.bombNum.string) < 5){
            this.num += 1;
            this.bombNum.string = this.num.toString();
        }
    },

    // update (dt) {},
});
