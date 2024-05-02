import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Landing from '../screens/Landing';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();


export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Landing'
                component={Landing}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='SignIn'
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}