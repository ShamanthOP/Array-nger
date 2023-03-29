import { useEffect, useState } from "react";
import './App.css';
import './App_Dark.css';

import { ALGORITHM, ALGORITHM_KEY, ALGORITHM_DESC } from './imports';
import TopBar from "./components/organisms/TopBar";
import AppDrawer from "./components/organisms/AppDrawer";
import AppControls from "./components/molecules/AppControls";
import SortVisulaizer from "./components/organisms/SortVisulaizer";

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [array, setArray] = useState([]);
  const [trace, setTrace] = useState([]);
  const [arraySize, setArraySize] = useState(10);
  const [algorithm, setAlgorithm] = useState(null);
  const [appDrawerOpen, setAppDrawerOpen] = useState(false);

  const createTrace = () => {
    const nums = [...array];
    const sortingFunction = ALGORITHM[algorithm];
    if(sortingFunction) {
      const newTrace = sortingFunction(nums);
      setTrace(newTrace);
    }
  };

  const generateRandomArray = () => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
    const randomArray = [...new Array(arraySize)].map(() => getRandomInt(arraySize*5));
    setArray(randomArray);
    setTrace([]);
    createTrace();
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const handleAlgorithm = (algorithm) => {
    setAlgorithm(algorithm);
  }

  useEffect(() => {
    generateRandomArray();
  }, [algorithm]);

  const handleArraySize = (size) => {
    const newSize = Number(size);
    setArraySize(newSize);
  }

  useEffect(() => {
    generateRandomArray();
  }, [arraySize]);

  const toggleAppDrawer = () => {
    setAppDrawerOpen(!appDrawerOpen);
  }

  let theme = 'App';
  if(darkMode) theme += ' App_dark';
  if(appDrawerOpen) theme += ' App_modal_open';
  const colorKey = ALGORITHM_KEY[algorithm];
  const description = ALGORITHM_DESC[algorithm];

  const controls = (
    <AppControls 
      onGenerateRandomArray={generateRandomArray}
      algorithm={algorithm}
      onAlgorithmChange={handleAlgorithm}
      arraySize={arraySize}
      onArraySizeChange={handleArraySize}
      darkMode={darkMode}
      onToggleDarkMode={toggleDarkMode}
    />
  )

  return (
    <div className={theme}>

      <TopBar drawerOpen={appDrawerOpen} toggleDrawer={toggleAppDrawer}>{controls}</TopBar>

      <AppDrawer drawerOpen={appDrawerOpen} toggledrawer={toggleAppDrawer}>{controls}</AppDrawer>

      <main className="App__Body">
        <SortVisulaizer 
          array={array}
          trace={trace}
          colorKey={colorKey}
          desc={description}
        />
      </main>

    </div>
  );
}

export default App;
