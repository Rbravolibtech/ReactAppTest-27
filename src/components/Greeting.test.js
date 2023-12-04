import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe("Greeting component", () => {
    test('renders HELLO WORLD AS A TEXT', () => {
        //Arrange
        render (<Greeting/>);
    
        //Act
        //..nothing
    
        //Assert
    const helloWorldElement = screen.getByText('HELLO WORLD')
    expect( helloWorldElement).toBeInTheDocument()
    });

test("renders good to see you if the buttons was not clicked", () => {
    render(<Greeting/>);

    const outputElement = screen.getAllByText('good to see you', {exact: false})
    expect(outputElement).toBeInTheDocument();
});

test('renders changed! if the button was clicked', () => {
    //Arrange
    render(<Greeting/>)
    
    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

//Assert

const outputElement = screen.queryByText('good to see you', {exact: false})
expect(outputElement).toBeNull();

});



});

