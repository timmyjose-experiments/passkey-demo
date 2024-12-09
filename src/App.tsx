import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import WebAuthnDemo from './screens/WebAuthnDemo'

export type RootStackParamList = {
  Home: undefined
  WebAuthnDemo: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='WebAuthnDemo' component={WebAuthnDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
