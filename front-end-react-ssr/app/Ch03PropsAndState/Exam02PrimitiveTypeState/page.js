"use client";

import { useState } from "react";

function Exam02PrimitiveTypeState() {
  // 상태 정의
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("#000000");

  // 이벤트 처리 함수
  const addNumber = function () {
    setNumber(number + 1);
  };
  const changeColor = () => {
    setColor(getRandomColor());
  };

  const getRandomColor = function () {
    return "#" + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
  };

  console.log("자꾸 실행돼?");

  return (
    <div className="card mt-2">
      <div className="card-header">Exam02PrimaryTypeState</div>
      <div className="card-body">
        <button onClick={addNumber} className="btn btn-info btn-sm me-2">
          숫자 증가
        </button>
        <button onClick={changeColor} className="btn btn-info btn-sm me-2">
          색깔 변경
        </button>
        <hr/>
        <h3 style={{ color: color }}>{number}</h3>
      </div>
    </div>
  );
}

export default Exam02PrimitiveTypeState;
