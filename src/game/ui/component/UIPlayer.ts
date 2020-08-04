class UIPlayer extends eui.Component implements eui.UIComponent {
    avatar: UIAvatar;
    playerName: eui.Label;
    handsBg: eui.Rect;
    handsCnt: eui.Label;
    player: Player;
    dead: eui.Rect;
    avatarBg0: eui.Rect;
    attack: eui.Image;
    boom: eui.Image;
    bang: eui.Image;

    uiMain: UIMain;

    btnAttack: eui.Button;

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

    update(): void {
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
            this.boomBang();
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

    }

    // 炸弹闪烁的动画
    boomShaking() : void{
        // 炸弹来临时，炸弹的动画
        var the_boom = egret.Tween.get(this.boom, {loop:true});
        the_boom.to({scaleX: 1.2, scaleY: 1.2}, 100);
    }

    // 炸弹爆炸动画
    boomBang() : void{
        var the_bang = egret.Tween.get(this.bang);
        the_bang.to({scaleX: 2}, 400, egret.Ease.circIn).to({scaleY: 1.5}, 300, egret.Ease.circIn);
        // this.bang.visible = false;
    }
}
