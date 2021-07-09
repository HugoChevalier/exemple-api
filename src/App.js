import logo from './logo.svg';
import Button from "./components/Button/Button";
import Ship from "./components/Ship/Ship";
import useApi from "./hooks/useApi";
import './App.css';
import {useEffect} from "react";

function App() {
  const {data, error, isLoading, fetchData} = useApi()

  useEffect(() => {
    fetchData()
  }, [])

    console.log(data)
    if(!data) return null
    if(!data.data) return null

  return (
      <div className="App">
        {data.data.map((item) => (
            <Ship ship={item} />
        ))}
        <Button text="Hello" />
        <Button text="Yo" />
        <Button text="Coco" />
      </div>
  );
}

export default App;
