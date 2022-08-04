import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault;
  };

  return (
    <div>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </FormStyle>
    </div>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;