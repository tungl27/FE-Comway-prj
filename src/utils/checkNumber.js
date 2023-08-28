export default function checkNumber(numberStr) {
    try {
        parseInt(numberStr.replaceAll(',', ''))
        return true
    }
    catch (e) {
        return false;
    }
}