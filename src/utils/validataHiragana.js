export default function isHiragana(fullStr) {
    let hiragana = false
    for (let i = 0; i < fullStr.length; i++) {
        if (fullStr[i] >= '\u3000  ' && fullStr[i] <= '\u303f' || fullStr[i] >= '\u3040   ' && fullStr[i] <= '\u309f'
            || fullStr[i] >= '\u30a0   ' && fullStr[i] <= '\u30ff' || fullStr[i] >= '\uff00  ' && fullStr[i] <= '\uff9f'
            || fullStr[i] >= '\u4e00  ' && fullStr[i] <= '\u9faf' || fullStr[i] >= '\u3400  ' && fullStr[i] <= '\u4dbf') {
            hiragana = true
            console.log(fullStr[i], hiragana)

        } else {
            return false;
        }
    }
    return hiragana
}