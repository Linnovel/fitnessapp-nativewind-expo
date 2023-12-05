import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WorkoutScreen from './src/screens/WorkoutScreen';
import TimerScreen from './src/screens/TimerScreen';
import CalculationScreen from './src/screens/CalculationScreen';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import Colors from './components/styles/Colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

export default function App() {
  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Workout":
                iconName = 'dumbbell'
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              case 'Timer':
                iconName = 'timer-outline'
                return (
                  <Ionicons name={iconName} size={size} color={color} />
                );
              case 'Calculation':
                iconName = 'calculator-outline'
                return (
                  <Ionicons name={iconName} size={size} color={color} />
                );
            }
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.secondary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingVertical: 5
          },
          tabBarActiveTintColor: Colors.aqua,
          tabBarInactiveTintColor: Colors.primary,
        })}
      >
        <Tab.Screen name='Workout' component={WorkoutScreen} />
        <Tab.Screen name='Timer' component={TimerScreen} />
        <Tab.Screen name='Calculation' component={CalculationScreen} />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabNav' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

