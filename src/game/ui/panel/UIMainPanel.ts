class UIMainPanel extends UIBasePanel {
    private textField: egret.TextField;
    private bgImg: egret.Bitmap;

    protected onInit(): void {
        this.bgImg = new egret.Bitmap();
        this.bgImg.texture = RES.getRes('Background_0_png');
        this.bgImg.width = this.stage.stageWidth;
        this.bgImg.height = this.stage.stageHeight;
        this.addChild(this.bgImg);

        const uiMain: UIMain = new UIMain();
        this.addChild(uiMain);
        uiMain.width = this.stage.stageWidth;
        uiMain.height = this.stage.stageHeight;
        GameMgr.inst.uiMain = uiMain;
    }
}
