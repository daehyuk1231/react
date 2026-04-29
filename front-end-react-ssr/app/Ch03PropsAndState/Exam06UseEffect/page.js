"use client";

import { useEffect, useState } from "react";

function Exam06UseEffect() {
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

  // 상태가 변경이 되면 자동 콜백되는 함수를 등록
  useEffect(() => {
    console.log("상태 변경 완료: ", number, color);
  });

  useEffect(() => {
    console.log("상태 변경 완료2: ", number, color);
  });

  return (
    <div className="card mt-2">
      <div className="card-header">Exam06UseEffect</div>
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

export default Exam06UseEffect;
