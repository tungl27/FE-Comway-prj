export default function iskanji(fullStr){
    let kanji = false
        for (let i = 0; i < fullStr.length; i++) {
            if ((fullStr[i] >= '\u4e00' && fullStr[i] <= '\u9faf') ||  (fullStr[i] >= '\u3500' && fullStr[i] <= '\u4dbf')) {
                kanji = true
                console.log(fullStr[i], kanji)
            }else {
                return false;
            }
        }
        return kanji
}
