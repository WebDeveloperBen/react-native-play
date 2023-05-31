import { Pressable, Text, View } from "react-native"
import { useRouter } from "expo-router"

type LargeNavButtonProps = {
  text: string
  destination: string
}

const LargeNavButton = (props: LargeNavButtonProps) => {
  const router = useRouter()
  const { text, destination } = props

  return (
    <View className={`mx-auto  w-full`}>
      <Pressable
        onPress={() => router.push(`${destination}`)}
        className={`bg-violet-500 h-16 text-center flex justify-center items-center rounded-xl`}
      >
        <Text className={"text-white"}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default LargeNavButton
