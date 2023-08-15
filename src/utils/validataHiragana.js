export default function isHiragana(fullStr) {
    let hiragana = false
    for (let i = 0; i < fullStr.length; i++) {
        if (fullStr[i] >= '\u3040  ' && fullStr[i] <= '\u9faf') {
            hiragana = true
            console.log(fullStr[i], hiragana)
        } else {
            return false;
        }
    }
    return hiragana
}