import { createAppContainer, createSwitchNavigator } from "react-navigation"

import Login from "./Pages/Login"
import Intro from "./Pages/Intro"
import Mindsout from "./Pages/Mindsout"

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Intro,
        Mindsout
    })
)

export default Routes