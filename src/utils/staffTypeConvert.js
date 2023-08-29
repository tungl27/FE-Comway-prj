export default function staffTypeConvert(typeId) {
  // 0: staff , 1: partner
  let a = parseInt(typeId);
  switch (a) {
    case 0:
      return "社員";
    case 1:
      return "パートナー";
    default:
      return "";
  }
}
