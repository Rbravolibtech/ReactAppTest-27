import { render, screen } from "@testing-library/react"
import Async from "./Async"


describe("Async", () => {
    test("render post if request succeeds",async () => {
        render(<Async/>)

     const listItemElements =  await  screen.findAllByRole("listItem");
     expect(listItemElements).not.toHaveLength(0);

    })
})