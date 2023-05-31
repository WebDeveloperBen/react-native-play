import { View } from "react-native"

type ProgressDotsProps = {
  currentStep: number
}

const ProgressDots = (props: ProgressDotsProps) => {
  const { currentStep } = props
  return (
    <View className={"flex justify-center my-auto flex-row gap-5 items-center align-middle p-5"}>
      <View
        className={`w-2.5 h-2.5 rounded-full ${
          currentStep === 1 ? "bg-violet-500" : "bg-neutral-600"
        }`}
      />
      <View
        className={`w-2.5 h-2.5 rounded-full ${
          currentStep === 2 ? "bg-violet-500" : "bg-neutral-600"
        }`}
      />
      <View
        className={`w-2.5 h-2.5 rounded-full ${
          currentStep === 3 ? "bg-violet-500" : "bg-neutral-600"
        }`}
      />
    </View>
  )
}

export default ProgressDots
