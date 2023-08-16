export default function checkNumber(numberStr) {
    let number = false
    for (let i = 0; i < numberStr.length; i++) {
        if (numberStr[i] >= '\uff00' && numberStr[i] <= '\uffef') {
            number = true
        } else {
            return false;
        }
    }
    return number
}