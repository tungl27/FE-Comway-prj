export default function addComma(number) {
    number = number.toString().replaceAll(',','')
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}