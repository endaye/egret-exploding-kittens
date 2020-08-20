class UIPlayer extends eui.Component implements eui.UIComponent {
    avatar: UIAvatar;
    playerName: eui.Label;
    handsBg: eui.Rect;
    handsCnt: eui.Label;
    player: Player;
    dead: eui.Rect;
    avatarBg0: eui.Rect;    // 等待状态
    avatarBg1: eui.Rect;    // 闪烁状态
    attack: eui.Image;
    boom: eui.Image;
    bang: eui.Image;

    uiMain: UIMain;

    btnAttack: eui.Button;


    // 定义动画，为了在下个回合开始取消之前的动画
    playTween: any;     // 出牌动画
    bangTween: any;     // 死亡爆炸动画

    constructor() {
        super();
        this.skinName = 'yui.Player';
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.createChildren();
        this.onInit();
    }

    onInit(): void {
        this.handsCnt.visible = this.handsBg.visible = this.playerName.visible = false;
        this.initListeners();
    }

    private initListeners(): void {
        this.btnAttack.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnAttackClick,
            this
        );
    }

    setPlayer(player: Player, isUser: boolean = false): void {
        this.player = player;
        this.playerName.text = player.nickname;
        this.seAvatarUrl(player.avatar);
        this.playerName.visible = !isUser;
        this.update();
    }


    // 头像环闪烁动画
    // 表示正在出牌的玩家
    playAnim() : void{
        this.playTween = egret.Tween.get(this.avatarBg1, {loop:true});
        this.playTween.to({visible: true}, 500).to({visible:false},500);
    }
    
    // 取消上一个玩家可能存在的动画
    cancelAnim() : void{
        if (this.playTween){
            egret.Tween.removeTweens(this.avatarBg1);
            this.avatarBg1.visible = false;
        }
        // if (this.bangTween){
        //     egret.Tween.removeTweens(this.bang);
        //     this.bang.visible = false;
        // }
    }

    update(): void {
        this.cancelAnim();
        if (this.player.state == PlayerState.ACTION){
            this.playAnim();
        } 
        this.updateHandsCnt();
        this.updateState();
    }

    updateHandsCnt(): void {
        this.handsCnt.visible = this.handsBg.visible =
            this.player.state !== PlayerState.DEAD;
        this.handsCnt.text = this.player ? this.player.handsCnt.toString() : '';
    }

    updateState(): void {
        // console.log(`${this.player.nickname} ${this.player.state}`)
<<<<<<< Updated upstream
=======
        if (this.player.state === this.cacheState) {
            // 确保只有state变更的时候才会执行之后的代码
            return;
        }

        // 检查Action状态
        if (this.player.state === PlayerState.ACTION && this.player.state != this.cacheState) {
            this.actionAnim();
        } else {
            this.clearActionAnim();
        }

        // 检查Boom状态
>>>>>>> Stashed changes
        if (this.player.state === PlayerState.DEFUSE) {
            this.boom.visible = true;
            // 只会有一个玩家在defuse状态
            this.boomShaking();
            this.bang.visible = false;
            this.attack.visible = false;
        } else if (this.player.state === PlayerState.DEAD) {
            this.dead.visible = true;
            this.avatarBg0.strokeColor = 0xcccccc;
            this.attack.visible = false;
            this.boom.visible = false;
            this.bang.visible = true;
            // 先检查死亡列表是否存在，如果存在，则无动作，否则播放动画并将其加入死亡列表
            if (UIMain.deadList.indexOf(this.player) == -1){
                this.boomBang();
                UIMain.deadList.push(this.player);
            }
            this.handsBg.visible = false;
            this.handsCnt.visible = false;
        } else if (this.player.attackMark > 0) {
            this.boom.visible = false;
            this.attack.visible = true;
        } else {
            this.bang.visible = false;
            this.attack.visible = false;
            this.boom.visible = false;
        }
    }

    showBtnAttack(show: boolean): void {
        this.btnAttack.visible = show;
    }

    setAvatar(avatar: string): void {
        this.avatar.setAvatar(avatar);
    }

    seAvatarUrl(avatarUrl: string): void {
        this.avatar.setAvatarUrl(avatarUrl);
    }

    setHandsCnt(handsCnt: number): void {
        this.handsCnt.text = handsCnt.toString();
    }

    onBtnAttackClick(): void {
        User.inst.attack(this.player.uid);
        if (this.uiMain) {
            this.uiMain.userAttack(false);
        }

        // 攻击动画
        this.attackAnima();

    }

    // 炸弹闪烁的动画
    boomShaking() : void{
        // 炸弹来临时，炸弹的动画
        var the_boom = egret.Tween.get(this.boom, {loop:true});
        the_boom.to({scaleX: 1.2, scaleY: 1.2}, 100);
    }

    // 炸弹爆炸动画
    boomBang() : void{
        this.bangTween = egret.Tween.get(this.bang);
        this.bangTween.to({scaleX: 2}, 400, egret.Ease.circIn).to({scaleY: 1.5}, 300, egret.Ease.circIn).to({visible: false}, 800);
    }

    // 攻击动画
    attackAnima() : void{
        var the_attack = egret.Tween.get(this.attack);
        the_attack.to({scaleX: 1.8}, 1000, egret.Ease.circOut).to({scaleX: 1}, 500, egret.Ease.circOut);
    }
}
