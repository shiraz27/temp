import Toast from "react-native-toast-message";

export function showToastInfo(message) {
  return Toast.show({
    type: "info",
    position: "top",
    text1: "Info",
    text2: message,
    visibilityTime: 8000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
  });
}
export function showToastError(title, message) {
  return Toast.show({
    type: "error",
    position: "top",
    text1: title,
    text2: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    props: {
      text1NumberOfLines: 2,
      text2NumberOfLines: 3,
    },
    text1NumberOfLines: 3,
    text2NumberOfLines: 3,
    onShow: () => {},
    onHide: () => {},
  });
}
export function showToastSuccess(title, message) {
  return Toast.show({
    type: "success",
    position: "top",
    text1: title,
    text2: message,
    visibilityTime: 2000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
  });
}
export function showLongToastError(title, message) {
  return Toast.show({
    type: "error",
    position: "top",
    text1: title,
    text2: message,
    visibilityTime: 4000,
    autoHide: false,
    topOffset: 30,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
  });
}
