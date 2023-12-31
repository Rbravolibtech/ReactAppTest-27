import { render, screen } from "@testing-library/react"
import Async from "./Async"


describe("Async", () => {
    test("render post if request succeeds",async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
           json: async () => [{id: "p1", title: "first post"}], 
        });
        render(<Async/>)

     const listItemElements =  await  screen.findAllByRole("listItem");
     expect(listItemElements).not.toHaveLength(0);

    })
})