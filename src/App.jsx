import LineChart from "./components/LineChart/LineChart"
import Nav from "./components/Nav/Nav"
import PriceOptions from "./components/PriceOptions/PriceOptions"


function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Nav></Nav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
