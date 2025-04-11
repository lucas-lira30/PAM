import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Importação das telas
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import GradesScreen from '../screens/GradesScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Criando os navegadores
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Função para definir ícones das abas
const getTabIcon = (route: string, focused: boolean) => {
  let iconName = '';

  switch (route) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Schedule':
      iconName = focused ? 'calendar' : 'calendar-outline';
      break;
    case 'Grades':
      iconName = focused ? 'book' : 'book-outline';
      break;
    case 'Profile':
      iconName = focused ? 'person' : 'person-outline';
      break;
  }

  return <Ionicons name={iconName as any} size={24} color={focused ? '#0066CC' : '#888'} />;
};

// Componente das abas principais
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getTabIcon(route.name, focused),
        tabBarActiveTintColor: '#0066CC',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Grades" component={GradesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Componente principal (🔥 NÃO precisa de outro NavigationContainer aqui!)
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
