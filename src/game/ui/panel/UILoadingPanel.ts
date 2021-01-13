class UILoadingPanel extends UIBasePanel implements RES.PromiseTaskReporter {
    private loadingTextField: egret.TextField;
    private noticeTextField: egret.TextField;
    private bgImg: egret.Bitmap;

    protected onInit(): void {
        const stageW = this.stage.stageWidth;
        const stageH = this.stage.stageHeight;

        this.bgImg = new egret.Bitmap();
        this.bgImg.texture = RES.getRes('Background_0_png');
        this.addChild(this.bgImg);

        this.bgImg.width = stageW;
        this.bgImg.height = stageH;

        this.loadingTextField = new egret.TextField();
        this.addChild(this.loadingTextField);
        this.loadingTextField.width = stageW;
        this.loadingTextField.y = stageH * 0.5 - 50;
        this.loadingTextField.height = 100;
        this.loadingTextField.textAlign = 'center';

        this.noticeTextField = new egret.TextField();
        this.addChild(this.noticeTextField);
        this.noticeTextField.width = stageW;
        this.noticeTextField.y = stageH * 0.5 + 300;
        this.noticeTextField.size = 20;
        this.noticeTextField.lineSpacing = 3;
        this.noticeTextField.height = 100;
        this.noticeTextField.textAlign = 'center';
        this.noticeTextField.text = '健康游戏忠告\n抵制不良游戏，拒绝盗版游戏。\n注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。\n合理安排时间，享受健康生活。';
    }

    public onProgress(current: number, total: number): void {
        this.loadingTextField.text = `Loading...${current}/${total}`;
    }
}
