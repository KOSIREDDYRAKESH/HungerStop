import Body from "../Body";
import { fireEvent, render,screen } from "@testing-library/react";
import mockData from "../../utils/mockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(mockData);
        }
    })
})

it("should search restro list for cream text input with search button",async()=>{
    await act(async()=>render(
        <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);

    const serachBtn = screen.getByRole("button",{name: "Search"});

    const searchInput = screen.getByPlaceholderText("Search Restaurants...");

    fireEvent.change(searchInput,{target:{value:"cream"}});

    fireEvent.click(serachBtn);

    //screen should render cream including restroCards

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
    
})

it("should search restro list for top rated restaurants",async()=>{
    await act(async()=>render(
        <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    );

    const topRated = screen.getByText("Top Rated restaurant 🔍");

    expect(topRated.length).toBe(undefined);
    
})