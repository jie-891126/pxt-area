enum numOption {
    //% block="四捨五入"
    round,
    //% block="允許小數"
    float
}

/**
 * 自訂的積木
 */
//% weight=2000 color=#ba835b icon="/uf2a3" block="面積"
namespace areaQQ {
    /**
     * TODO: 在此描述函式
     * @param n 在此描述參數, eg: 5
     * @param s 在此描述參數, eg: "Hello"
     * @param e 在此描述參數
     */


    //% blockId="showAreaOfTringle" weight=100"
    //% block="get the area of triangle:base: %base|height: %height| option:%myOpt"
    //% base.min=1 base.max=100 base.defl=50  
    //% height.min=1 height.max=200 height.defl=100
    export function showAreaOfTringle(base: number, height: number, myOpt: numOption): void {
        let myNum = 0;
        myNum = base * height / 2;
        if (myOpt == numOption.round) {
            myNum = Math.round(myNum)
        }
        basic.showNumber(myNum);
    }

    //% blockId="areaOfTringle" weight=50"
    //% block="Show the area of triangle on LED: base: %base|height: %height| option:%myOpt" 
    //% base.min=1 base.max=100 base.defl=50  
    //% height.min=1 height.max=200 height.defl=100
    export function areaOfTringle(base: number, height: number, myOpt: numOption): number {
        let myNum = 0;
        myNum = base * height / 2;
        if (myOpt == numOption.round) {
            myNum = Math.round(myNum)
        }
        return myNum;
    }
}
