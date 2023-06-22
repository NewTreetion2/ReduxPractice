import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/store";
import { up, down, init, com } from "../../store/counterSlice";
import { useState } from "react";

function Counter() {
  const dispatch = useDispatch();
  const [inputNumber, setInputNumber] = useState(0);
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });
  const addNumber = () => {
    dispatch(up(inputNumber));
  };
  const minusNumber = () => {
    dispatch(down(inputNumber));
  };
  const initNumber = () => {
    dispatch(init(""));
  };
  const complexNumber = () => {
    dispatch(com(inputNumber));
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumber(Number(e.target.value));
  };

  return (
    <div>
      <div>{count}</div>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={addNumber}>더하기</button>
      <button onClick={minusNumber}>빼기</button>
      <button onClick={complexNumber}>곱하기</button>
      <button onClick={initNumber}>초기화</button>
    </div>
  );
}

export default Counter;
