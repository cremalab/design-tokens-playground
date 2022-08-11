import { render, screen } from "@testing-library/react"
import { App } from "./App"

describe("App", () => {
  it("renders expected text", () => {
    // Arrange
    const text = "Test button"

    // Act
    render(<App />)
    const received = screen.getByText(text)

    // Assert
    expect(received).toBeDefined()
  })
})
