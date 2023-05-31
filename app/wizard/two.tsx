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
          description="Workout categories will help you gain strength, get in better shape and embrace a healthy lifestyle"
          nextRoute="/wizard/three"
          step={2}
          title="Workout Categories"
        />
      </SafeAreaView>
    </ImageBackground>
  )
}
