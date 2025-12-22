import { useState } from 'react'
import emsiLogo from './assets/logoEmsi.png'
import './App.css'

function Header() {
  return (
    <header className="header">
      <img src={emsiLogo} className="logo-emsi" alt="EMSI Logo" />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  )
}

function Content() {
  const [count, setCount] = useState(0)
  return (
    <main className="main-content">
      Ici, nous afficherons des informations interessantes :)
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer">
      Tous droits réservés - Rim HASSANE
    </footer>
  )
}

function App() {
  return (
    <div id="root">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
