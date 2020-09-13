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
    btnSwap: eui.Button;

    // 缓存
    cacheState: PlayerState;
    cacheAttackMark: number;

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
        this.btnSwap.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnSwapClick,
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
        this.updateAttackMark();
        this.updateState();
    }

    updateHandsCnt(): void {
        this.handsCnt.visible = this.handsBg.visible =
            this.player.state !== PlayerState.DEAD;
        this.handsCnt.text = this.player ? this.player.handsCnt.toString() : '';
    }

    updateAttackMark(): void {
        if (this.player.attackMark === this.cacheAttackMark) {
            return;
        }
        // 检查是否被攻击
        this.attack.visible = this.player.attackMark > 0;

        // 刚刚被攻击
        if (this.player.attackMark > this.cacheAttackMark) {
            this.attackAnim();
        }

        this.cacheAttackMark = this.player.attackMark;
    }

    updateState(): void {
        // console.log(`${this.player.nickname} ${this.player.state}`)
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
        if (this.player.state === PlayerState.DEFUSE) {
            this.boom.visible = true;
            // 只会有一个玩家在defuse状态
            this.boomAnim();
            this.boom.visible = true;
        } else {
            this.clearBoomAnim();
        }

        // 检查死亡状态
        if (this.player.state === PlayerState.DEAD) {
            this.dead.visible = true;
            this.avatarBg0.strokeColor = 0xcccccc;
            this.attack.visible = false;
            this.boom.visible = false;
            this.bang.visible = true;
            this.bangAnim();
            this.handsBg.visible = false;
            this.handsCnt.visible = false;
        } else {
            this.bang.visible = false;
            this.handsBg.visible = false;
            this.handsCnt.visible = false;
        }

        this.cacheState = this.player.state;
    }

    showBtnAttack(show: boolean): void {
        this.btnAttack.visible = show;
    }

    showBtnSwap(show: boolean): void {
        this.btnSwap.visible = show;
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
    }

    onBtnSwapClick(): void {
        User.inst.swap(this.player.uid);
        if (this.uiMain) {
            this.uiMain.userSwap(false);
        }

        // 交换手牌动画
        this.uiMain.swapAnim(this.player.uid, User.inst.player.uid);
    }

    // 头像环闪烁动画，表示正在出牌的玩家
    actionAnim(): void {
        // loop动画之后需要remove
        const tw = egret.Tween.get(this.avatarBg1, { loop: true });
        tw.to({ visible: true }, 500).to({ visible: false }, 500);
    }

    // 清除玩家身上的Action动画
    clearActionAnim(): void {
        egret.Tween.pauseTweens(this.avatarBg1);
        this.avatarBg1.visible = false;
    }

    // 炸弹闪烁的动画
    boomAnim(): void {
        // 炸弹来临时，炸弹的动画，
        // loop动画之后需要remove
        const tw = egret.Tween.get(this.boom, { loop: true });
        tw.to({ scaleX: 1.2, scaleY: 1.2 }, 100);
        egret.Tween.resumeTweens(this.boom);
    }

    // 清除玩家身上的Boom动画
    clearBoomAnim(): void {
        egret.Tween.pauseTweens(this.boom);
        this.boom.visible = false;
    }

    // 炸弹爆炸动画
    bangAnim(): void {
        const tw = egret.Tween.get(this.bang);
        tw.to({ scaleX: 2 }, 400, egret.Ease.circIn)
            .to({ scaleY: 1.5 }, 300, egret.Ease.circIn)
            .to({ visible: false }, 800)
            .call(() => {
                egret.Tween.pauseTweens(this.bang);
            });
    }

    // 攻击动画
    attackAnim(): void {
        const tw = egret.Tween.get(this.attack);
        tw.to({ scaleX: 1.8 }, 1000, egret.Ease.circOut)
            .to({ scaleX: 1 }, 500, egret.Ease.circOut)
            .call(() => {
                egret.Tween.pauseTweens(this.attack);
            });
    }
}
