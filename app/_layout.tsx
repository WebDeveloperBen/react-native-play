import { Slot, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
export default function Layout() {
  return (
    <>
      <SafeAreaView className={"flex-1"}>
        <StatusBar animated={true} backgroundColor="#000" translucent={true} style="light" />
        <Slot />
      </SafeAreaView>
    </>
  )
}
