class UIAvatar extends eui.Component implements eui.UIComponent {
    avatar: eui.Image;
    mask: eui.Rect;

    public constructor() {
        super();
        this.skinName = 'yui.Avatar';
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    setAvatar(avatar: string): void {
        this.avatar.source = RES.getRes(avatar);

        // test only
        // this.setAvatarUrl('https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3172565372,658841133&fm=85&s=3AAB6184CC020155C87FA6830300608F')
    }

    setAvatarUrl(avatarUrl: string) {
        egret.log(avatarUrl)
        let imgLoader = new egret.ImageLoader();
        imgLoader.crossOrigin = '*'; // 跨域请求
        imgLoader.load(avatarUrl); // 去除链接中的转义字符‘\’
        imgLoader.once(
            egret.Event.COMPLETE,
            (evt: egret.Event) => {
                if (evt.currentTarget.data) {
                    // egret.log('加载头像成功: ' + evt.currentTarget.data);
                    let texture = new egret.Texture();
                    texture.bitmapData = evt.currentTarget.data;
                    let bitmap = new egret.Bitmap(texture);
                    // TODO: 处理长方形的头像，判断长宽比
                    bitmap.width = bitmap.height = 100;
                    bitmap.x = bitmap.y = 0;
                    this.avatar.source = texture;
                }
            },
            this
        );
    }
}
