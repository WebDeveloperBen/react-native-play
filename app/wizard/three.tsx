import { SafeAreaView, ImageBackground } from "react-native"
import BottomSheet from "../../components/wizard/BottomSheet"
export default function WizardOne() {
  return (
    <ImageBackground
      className={"h-full"}
      resizeMode="cover"
      source={require("../../assets/verticalPlaceHolder.png")}
    >
      <SafeAreaView className={"flex-1 justify-between"}>
        {/* Placeholder to shift draw down */}
        <BottomSheet
          buttonText="Start Training"
          description="Create and save your own custom workouts. Name your workouts, save them, and they’ll automatically appear when you’re ready to workout"
          nextRoute="/"
          step={3}
          title="Custom Workouts"
        />
      </SafeAreaView>
    </ImageBackground>
  )
}
