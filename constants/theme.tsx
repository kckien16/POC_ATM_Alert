import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");



export const SIZES = {
    base : 10,
    radius: 20,
    width,
    height
}

const theme = {  SIZES };
export default theme;