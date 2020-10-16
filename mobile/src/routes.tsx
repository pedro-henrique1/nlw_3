import React from "react";

import  { NavigationContainer} from "@react-navigation/native";
import  { createNativeStackNavigator} from "react-native-screens/native-stack";

const  {Navigator, Screen } = createNativeStackNavigator()

// @ts-ignore
import  OrphanagesMap from "./pages/OrphanagesMap"

export  default  function Router() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen  name="OrphanagesMap" component={OrphanagesMap}/>
            </Navigator>
        </NavigationContainer>
    )


}
