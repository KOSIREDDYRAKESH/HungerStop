import Header from "../Header";
import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import appStore from "../../ReduxStore/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

it("should render Heading component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByText("LOGIN");

    expect(loginButton).toBeInTheDocument();
});