var yess = {}
yess.showAndroidToast = (toast) => {
    egret.log(`yess: showAndroidToast(${toast})`);
    if (typeof YessAndroid !== "undefined") {
        YessAndroid.showToast(toast);
    }
}

yess.finishAndroidPage = () => {
    egret.log('yess.finishAndroidPage()');
    if (typeof YessAndroid !== "undefined") {
        YessAndroid.finishPage();
    }
}

yess.gameBombsEnd = (gameResultJson) => {
    egret.log('yess.gameBombsEnd()');
    egret.log('gameResultJson')
    if (typeof YessAndroid !== "undefined") {
        YessAndroid.gameBombsEnd(gameResultJson);
    }
}

yess.getBombsMatchInfo = (cbName) => {
    egret.log(`yess.getBombsMatchInfo(${cbName})`);
    if (typeof YessAndroid !== "undefined") {
        YessAndroid.getBombsMatchInfo(cbName);
    }
}