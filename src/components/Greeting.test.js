import { render, screen } from "@testing-library/react"
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
});

