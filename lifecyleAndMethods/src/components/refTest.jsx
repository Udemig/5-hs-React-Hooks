import React, { useRef } from 'react';

const Search = () => {
  const inputRef = useRef();

  console.log(inputRef);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Odaklan</button>
    </div>
  );
};

export default Search;
