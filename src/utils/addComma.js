export default function addComma(number) {
    console.log(number)
    if(!number) return number
    number = number.toString().replaceAll(',','')
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}