import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Entrance = ({ setQuestions }) => {
  const navigate = useNavigate();
  const selectRef = useRef();
  const goQuiz = () => {
    const value = selectRef.current.value;
    if (value != "") {
      navigate("/quiz");
      const getQuestions = async () => {
        const res = await fetch(`https://questions-vksc.onrender.com/${value}`);
        const data = await res.json();
        setQuestions(data);
      };
      getQuestions();
    }
  };
  return (
    <>
      <div className="quiz-container entrace">
        <select ref={selectRef} className="select">
          <option value="">Choose UNIT</option>
          <option value="unit1">UNIT 1</option>
          <option value="unit2">UNIT 2</option>
          <option value="unit3">UNIT 3</option>
          <option value="unit4">UNIT 4</option>
          <option value="unit5">UNIT 5</option>
          <option value="unit6">UNIT 6</option>
          <option value="unit7">UNIT 7</option>
          <option value="unit8">UNIT 8</option>
          <option value="unit9">UNIT 9</option>
          <option value="unit10">UNIT 10</option>
          <option value="unit11">UNIT 11</option>
          <option value="unit12">UNIT 12</option>
          <option value="unit13">UNIT 13</option>
          <option value="unit14">UNIT 14</option>
          <option value="unit15">UNIT 15</option>
          <option value="unit16">UNIT 16</option>
        </select>
        <button onClick={() => goQuiz()}>Select</button>
      </div>
    </>
  );
};

export default Entrance;
