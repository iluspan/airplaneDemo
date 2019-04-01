var gameState = cc.Enum({
    none: 0,
    start: 1,
    stop: 2,
});

var common = cc.Class({
    
    extends: cc.Component,

    properties: {
        
    },
    statics: {
        gameState
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad:function () {
        D.commonInfo = common;
        D.common = this;
    },

/*    batchInitObjPool:function(this0,objArray){
        for(var i = 0;i < objArray.length; i++){
            var objInfo = objArray[i];
            this.initObjPool(this0,objInfo);
        }
    },
    initObjPool:function(){
        var name = objInfo.name;
        var poolName = name + 'pool';
        this0[poolName] = new cc.NodePool();

        for(var j = 0;j < initPoolCount;++j){
            let node0 = cc.instanctiate(objInfo.prefab);
            this0[poolName].put(node0);
        }
    },
    getNewNode:function(pool,prefab,nodeParent){
        let newNode = null;
        if(pool.size() > 0){
            newNode = pool.get();
        }
        else{
            newNode = cc.instanctiate(prefab);
        }
        newNode.parent.addChild(newNode);
        return newNode;
    },

    backObjPool:function(nodeInfo,this0){
        var poolName = nodeInfo.name +'pool';
        this0[poolName].put(nodeInfo);
    },

    start () {

    },*/

    // update (dt) {},
});
