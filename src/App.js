// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import SignUpFormHook from "./components/form/SignUpFormHook";
// import SignUpFormFinal from "./components/form/SignUpFormFinal";
// import SignUpForm from "./components/form/SignUpForm";
// import SignUpFormV2 from "./components/form/SignUpFormV2";
// import Form from "./components/form/Form";
// import MovieSearchApp from "./components/MovieSearchApp";
// import Blog from "./components/Blog";
// import Dropdown from "./components/Dropdown";
// import SidebarMenu from "./components/SidebarMenu";
// import useClickOutSide from "./hook/useClickOutSide";
// import TextareaAutoResize from "./components/TextareaAutoResize";
// import Input from "./components/Input";
// import HackNews from "./components/news/HackNews";
// import HackNewsWithHook from "./components/news/HackNewsWithHook";
// import HackNewsWithReducer from "./components/news/HackNewsWithReducer";
// import Counter from "./components/counter/Counter";
// import Header from "./components/Header";
// import Button from "./components/button/Button";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import CardTailwind from "./components/card/CardTailwind";
// import Photos from "./components/photo/Photos";
// import Timer from "./components/Timer";
// import Toggle from "./components/toggle/Toggle";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
import "./index.scss";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };
// import Game from "./components/tictactoe/Game";

// function Feature() {
//   return (
//     <div className="feature">
//       <img src="" alt="" className="feature-image"></img>
//       <h3 className="feature-title">Title</h3>
//       <p className="feature-desc">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sit
//         recusandae, dolorem blanditiis aut error praesentium incidunt quaerat
//         laborum perspiciatis suscipit consectetur sint amet numquam quibusdam,
//         reprehenderit ullam eos laudantium.
//       </p>
//     </div>
//   );
// }

function App() {
  // const number = [1, 2, 3, 4, 5];
  // const double = number.map((item) => item * 2);
  // console.log(double);
  // const name = "Evondev Ahihi";
  // function fullname(firstName, lastName) {
  //   return `${firstName} ${lastName}`;
  // }
  // console.log(YoutubeData);
  // const name = "Evondev";
  // const countRef = React.useRef(0);
  // const hanlder = () => {
  //   console.log(countRef.current);
  //   countRef.current = 10;
  // };
  // const [count, setCount] = useState(0);
  // const countRef = useRef(0);
  // const handle = () => {
  //   const updateCount = countRef.current + 1;
  //   console.log(`Clicker ${updateCount} times`);
  //   countRef.current = updateCount;
  // };
  // console.log("Render");
  // const timerRef = useRef(null);
  // const [count, setCount] = useState(0);
  // const handleStart = () => {
  //   if (timerRef.current) return;
  //   timerRef.current = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  // const handleStop = () => {
  //   clearInterval(timerRef.current);
  //   timerRef.current = null;
  // };
  // useEffect(() => {
  //   return clearInterval(timerRef.current);
  // }, []);
  // const [show, setShow] = useState(false);
  // const { show, nodeRef, setShow } = useClickOutSide("span");
  return (
    <div>
      {/* <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div> */}
      {/* <Counter></Counter> */}
      {/* <YoutubeList>{name}</YoutubeList> */}
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      {/* <GlobalStyles></GlobalStyles> */}
      {/* <CardList>
        <Card></Card>
        <Card secondary={true}></Card>
        <Card2></Card2>
        <CardTailwind></CardTailwind>
      </CardList> */}
      {/* <Photos></Photos> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackNews></HackNews> */}
      {/* <HackNewsWithReducer></HackNewsWithReducer> */}
      {/* <button onClick={handle}>Click me</button> */}
      {/* <Input></Input> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      {/* <Dropdown></Dropdown> */}
      {/* <Blog></Blog> */}
      {/* <button onClick={() => setShow(!show)}>Toggle Button</button>
      {show && <HackNews></HackNews>} */}
      {/* <HackNewsWithHook></HackNewsWithHook> */}
      {/* <span
        className="cursor-pointer inline-block m-3 rounded-lg text-white bg-green-400"
        onClick={() => setShow(!show)}
      >
        Show menu
      </span>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu> */}
      {/* <Form></Form> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <SignUpFormV2></SignUpFormV2> */}
      {/* <SignUpFormFinal></SignUpFormFinal> */}
      <SignUpFormHook></SignUpFormHook>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1>{name === "Evondev Ahihi" ? "Huy" : "Tuan"}</h1>
  //       <h2>{fullname("Truong Quoc", "Huy")}</h2>
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
