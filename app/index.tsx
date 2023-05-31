import { SafeAreaView, View, TextInput } from "react-native"
import { useState } from "react"
import {} from "react-native-safe-area-context"
import TitleText from "../components/base/TitleText"
import LargeNavButton from "../components/base/LargeNavButton"
const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleEmailInput(text: string) {
    setEmail(text)
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="px-5">
        <TitleText title="Login" weight="bold" color="white" size="3xl" center />
        <View className={"flex gap-5 my-5"}>
          <View className={"text-xs rounded-3xl border pl-5 py-2 bg-[#2D3450]"}>
            <TextInput
              placeholderTextColor={"#F1F4F8"}
              style={{ color: "white", fontSize: 20, textDecorationColor: "white" }}
              placeholder="Email"
              value={email}
              onChangeText={(text) => handleEmailInput(text)}
            />
          </View>
          <View className={"text-xs rounded-3xl border pl-5 py-2 bg-[#2D3450]"}>
            <TextInput
              placeholderTextColor={"#F1F4F8"}
              style={{ color: "white", fontSize: 20, textDecorationColor: "white" }}
              placeholder="Password"
              value={email}
              onChangeText={(text) => handleEmailInput(text)}
            />
          </View>
        </View>
        <LargeNavButton text="Login" destination="home" />
      </View>
    </SafeAreaView>
  )
}

export default LoginPage
