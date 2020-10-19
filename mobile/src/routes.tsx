import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator()

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanagesDetails from "./pages/OrphanagesDatails"

import SelectMapPosition from "./pages/createOrphanages/SelectMapPosition"
import OrphanagesData from "./pages/createOrphanages/OphanagesData";
import Header from "./components/Header";

export default function Router() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{headerShown: false, cardStyle: {backgroundColor: "#f2f3f5"}}}>
                <Screen name="OrphanagesMap" component={OrphanagesMap}/>
                <Screen name="OrphanagesDetails" component={OrphanagesDetails} options={{
                    headerShown: true,
                    header: () => <Header showCancel={false} title={"Orfanato"}/>
                }}/>

                <Screen name="SelectMapPosition" component={SelectMapPosition} options={{
                    headerShown: true,
                    header: () => <Header title={"selecione no mapa"}/>
                }}/>
                <Screen name="OrphanagesData" component={OrphanagesData} options={{
                    headerShown: true,
                    header: () => <Header title={"informe os dados"}/>
                }}/>
            </Navigator>
        </NavigationContainer>
    )


}
