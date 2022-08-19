import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import info from "./data.json";
import DataContext from "./context/data-context";


function App() {
  const [data, setData] = useState(info.data)
  const [board, setBoard] = useState(0)
  const [burger, setBurger] = useState(false)
  useEffect(() => {
    console.log(burger)
  }, [burger])
  return (
    <div className="App">
      <DataContext.Provider value={{data: data, setData: setData, board: board, setBoard: setBoard, burger: burger, setBurger: setBurger}}>
        <Header />
        <div className="flex">
          <Sidebar />
          <Content />
        </div>
      </DataContext.Provider>
    </div>
  );
}

export default App;
