import React, {Component} from "react";
import logo from "./logo.svg";
import "./KiwiDemo.css";
import SearchPage from "./pages/search-page/SearchPage";

class KiwiDemo extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Kiwi demo in React</h1>
                </header>
                <SearchPage/>
            </div>
        );
    }
}

export default KiwiDemo;
