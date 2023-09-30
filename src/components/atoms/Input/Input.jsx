const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="border py-2 px-4 w-full border-green-500 rounded-md focus:outline-none focus:border-green-600"
      placeholder={placeholder}
    />
  );
};

export default Input;
