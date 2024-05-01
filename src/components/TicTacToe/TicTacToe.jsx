import "./TicTacToe.css";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";
import { useRef, useState } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (element, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      element.target.innerHTML = ` <img src="${cross_icon}" alt="" />`;
      data[num] = "x";
      setCount((prevCount) => prevCount + 1);
    } else {
      element.target.innerHTML = ` <img src="${circle_icon}" alt="" />`;
      data[num] = "o";
      setCount((prevCount) => prevCount + 1);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      win(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      win(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      win(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      win(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      win(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      win(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      win(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      win(data[6]);
    }
  };

  const win = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations <img src="${cross_icon}" alt="" /> win`;
    } else {
      titleRef.current.innerHTML = `Congratulations <img src="${circle_icon}" alt="" /> win`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic tac toe game in<span> React</span>`;
    box_array.map((item) => {
      item.current.innerHTML = "";
    });
  };

  return (
    <>
      <div className="conatainer">
        <h1 className="title" ref={titleRef}>
          Tic tac toe game in<span> React</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              ref={box1}
              className="boxes"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              ref={box2}
              className="boxes"
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              ref={box3}
              className="boxes"
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              ref={box4}
              className="boxes"
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              ref={box5}
              className="boxes"
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              ref={box6}
              className="boxes"
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              ref={box7}
              className="boxes"
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              ref={box8}
              className="boxes"
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              ref={box9}
              className="boxes"
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button className="reset" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
