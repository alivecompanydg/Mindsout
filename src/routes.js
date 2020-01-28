import { createAppContainer, createSwitchNavigator } from "react-navigation"

import Intro from "./Pages/Intro"
import Login from "./Pages/Login"

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Intro
    })
)

export default Routes