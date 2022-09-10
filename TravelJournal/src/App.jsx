import Nav from "./components/Nav" 
import Body from "./components/Body"
import data from "./data"

function App() {
  const card = data.map(item => {
    return (
      <Body 
        key={item.title}
        {...item}
      />
    )
  })
  return (
    <div className="app">
      <Nav />
      {card}
    </div>
  )
}

export default App
