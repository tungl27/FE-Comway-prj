
export default function staffTypeConvert(typeId) {
    // 0: staff , 1: partner
    switch (typeId) {
      case 0:
        return "社員";
      case 1:
        return "パートナー";
      default:
        return "";
    }
  }
