export default function statusConvert(statusId) {
  // 0: active, 1: inactive, 2: pending, 3: completed, 4: cancelled

  switch (statusId) {
    case "0":
      return "実行中";
    case "1":
      return "非活性";
    case "2":
      return "保留";
    case "3":
      return "完了";
    case "4":
      return "キャンセル";
    default:
      return "";
  }
}
