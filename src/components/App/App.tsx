import logo from "../../assets/logo.svg"
import "./App.styles.css"

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/**   defined in variables.css-|  hint for tailwind-| */}
        {/**margin-top-▼                ▼   text-color-▼     ▼ */}
        <p className="mt-[var(--size-spacing-large)] text-[color:var(--color-base-gray-dark)]">
          Edit <code>src/components/App/index.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
