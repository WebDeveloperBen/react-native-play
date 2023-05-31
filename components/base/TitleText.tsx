import { View, Text } from "react-native"

type TitleTextProps = {
  title: string
  weight: "light" | "regular" | "medium" | "bold" | "semi"
  color:
    | "white"
    | "black"
    | "violet-600"
    | "blue-600"
    | "green-600"
    | "yellow-600"
    | "red-600"
    | "neutral-100"
  size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"
  center?: boolean
}

const TitleText = (props: TitleTextProps) => {
  const { title, weight, color, size, center } = props
  const classes = `text-${color ?? "black"} text-${weight ?? "regular"} text-${size ?? "base"}`
  return (
    <View className={`${center ? "mx-auto" : ""}`}>
      <Text className={classes}>{title}</Text>
    </View>
  )
}

export default TitleText
