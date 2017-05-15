import React, {Component} from "react";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigator } from "react-navigation";
import { NativeRouter, Route, Link } from "react-router-native";
import createMemoryHistory from "history/createMemoryHistory";
import { Switch } from "react-router";
import App from "./components/App.js";
import Dash from "./components/routes/Dash.js";
import PlanogramOverviewRoute from "./components/routes/PlanogramOverviewRoute.js";
import PlanogramEditorRoute from "./components/routes/PlanogramEditorRoute.js";
import ProductListRoute from "./components/routes/ProductListRoute.js";
import ProductDetailRoute from "./components/routes/ProductDetailRoute.js";
import NewDirectoryRoute from "./components/routes/NewDirectoryRoute.js";
import SignUpRoute from "./components/routes/SignUpRoute.js";
import NavBar from "./components/shared/NavBar.js";
import { AppRegistry, View, StyleSheet, StatusBar } from "react-native";
import { Alert } from "react-native";
import UserService from "./services/UserService.js";
import { Provider } from "react-redux";
import configureStore from  "./store/createStore";

let history = createMemoryHistory({
  initialEntries: [ "/" ],
  initialIndex: 0,
  keyLength: 6,
  getUserConfirmation: null
});

export default class Companion2 extends Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar
                backgroundColor = "blue"
                barStyle = "light-content"
            />
            <Provider store={configureStore()}>
                <NativeRouter addressBar history={history}>
                    <View style={{flex: 1}}>
                        <Switch>
                            <Route exact path="/" component={App}/>
                            <Route path="/signup" component={SignUpRoute}/>
                            <Route path="/dash" component={Dash}/>
                            <Route path="/planogramoverview" component={PlanogramOverviewRoute}/>
                            <Route path="/planogrameditor" component={PlanogramEditorRoute}/>
                            <Route path="/newdirectory" component={NewDirectoryRoute}/>
                        </Switch>
                        <NavBar />
                    </View>
                </NativeRouter>
            </Provider>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
});

AppRegistry.registerComponent("spaceage", () => Companion2);
