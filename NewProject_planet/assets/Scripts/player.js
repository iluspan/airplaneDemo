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
        jumpHeight:0,
        jumpDuration:0,
        moveSpeed:0,
        accel:0,
        bulletPre:{
            default:null,
            type:cc.Prefab,
        },
        bulletMusic:{
            default:null,
            type:cc.AudioClip,
        },
        gameMusic:{
            default:null,
            type:cc.AudioClip,
        },

    },

    onLoad: function () {
        var playerAni = this.getComponent(cc.Animation);
        playerAni.play();
        cc.audioEngine.playEffect(this.gameMusic,false);
        this.onDrag(); 
        this.schedule(function(){
            this.GenerateBullets();
            cc.audioEngine.playEffect(this.bulletMusic,false);
        },0.1);
        cc.director.getCollisionManager().enabled=true;
    },
    onCollisionEnter: function(other,self){
        if(other.node.group == 'ufo'){
            return;
        }else{
            this.node.destroy();
            cc.director.loadScene('end');
        }
    },

    //添加拖动监听
    onDrag: function(){
        this.node.on('touchmove', this.dragMove, this);
    },
    //去掉拖动监听
    offDrag: function(){ 
         this.node.off('touchmove', this.dragMove, this);
    },
    //拖动
    dragMove: function(event){ 
        var locationv = event.getLocation();
        var location = this.node.parent.convertToNodeSpaceAR(locationv);
        //飞机不移出屏幕 
        var minX = -this.node.parent.width/2+this.node.width/2;
        var maxX = -minX;
        var minY = -this.node.parent.height/2+this.node.height/2;
        var maxY = -minY;
        if (location.x< minX){
            location.x = minX;
        }
        if (location.x>maxX){
            location.x = maxX;
        }
        if (location.y< minY){
            location.y = minY;
        }
        if (location.y> maxY){
            location.y = maxY;
        }
        this.node.setPosition(location);
    },

    update:function(dt) {
        
        //this.GenerateBullets(dt);
        
    },

    GenerateBullets:function(){
        var m_bullet = cc.instantiate(this.bulletPre);
        this.node.parent.addChild(m_bullet);
        m_bullet.setPosition(this.node.x,this.node.y + this.node.height/2 + m_bullet.height/2);
    },

});
