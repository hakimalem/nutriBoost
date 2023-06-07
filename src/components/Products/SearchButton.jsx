import { useState } from 'react';
import search from '../../assets/search.svg';
function SearchButton({ text, onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    onPress();
  };

  return (
    <button
      className="bg-green2 hover:bg-primary active:bg-opacity-60 active:bg-primary rounded-r-md text-sm font-medium text-gray-700 h-[30px] w-[30px] flex justify-center items-center"
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
      onMouseDown={handlePressIn}
      onMouseUp={handlePressOut}
      onMouseLeave={() => setIsPressed(false)}
    >
      <img className="h-[70%] w-auto" src={search} alt="S" />
    </button>
  );
}
export default SearchButton;
