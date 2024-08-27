import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe("testing about contact us page",()=>{
    test("should load contact us page",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("should load button contact us page",()=>{
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("should load input contact us page",()=>{
        render(<Contact/>);
    
        const inputboxes = screen.getAllByRole("textbox");
    
        //console.log(inputboxes[0]);
        //Assertion
        expect(inputboxes.length).toBe(3);
    });
});
