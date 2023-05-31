import { View, Text } from "react-native"
import ProgressDots from "../base/ProgressDots"
import LargeNavButton from "../base/LargeNavButton"
type BottomSheetProps = {
  nextRoute: string
  title: string
  description: string
  buttonText: string
  step: number
  height?: "h-1/5" | "h-2/5" | "h-3/5" | "h-4/5" | "h-1/2" | "h-1/3" | "h-2/3" | "h-1/4" | "h-3/4"
  topPadding?: "pt-5" | "pt-10" | "pt-20" | "pt-32"
}

const BottomSheet = (props: BottomSheetProps) => {
  const { nextRoute, title, description, buttonText, step, height, topPadding } = props
  return (
    <>
      <View></View>
      <View
        className={`align-bottom bg-black rounded-t-3xl ${height ? height : "h-1/2"} px-5 ${
          topPadding ? topPadding : "pt-5"
        }`}
      >
        <Text className={"text-white text-3xl text-center"}>{title}</Text>
        <Text className={"text-white text-sm text-center mt-5"}>{description}</Text>
        <View className={"flex-1"}></View>
        <ProgressDots currentStep={step} />
        {/* Placeholder three dots */}
        <View className={"pb-10 space-y-2"}>
          {/* Button Slot */}
          <LargeNavButton text={buttonText} destination={nextRoute} />
          {/* End Button Slot */}
          <Text className={"text-white text-base text-center "}>
            Already have an account? <Text className={"text-violet-600 text-base"}>Sign In</Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default BottomSheet
