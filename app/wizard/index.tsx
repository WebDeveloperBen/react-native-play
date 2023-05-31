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
          height={"h-3/5"}
          topPadding={"pt-20"}
          buttonText="Get Started"
          description="FitFooZone has workouts on demand that you can find based on how much time you have"
          nextRoute="/wizard/two"
          step={1}
          title="Welcome to FitFooZone"
        />
      </SafeAreaView>
    </ImageBackground>
  )
}
