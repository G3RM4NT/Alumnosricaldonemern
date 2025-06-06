const Buttondelete = ({ type, onClick, text }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-gray-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors ms-2"
      >
        {text}
      </button>
    );
  };
  
  export default Buttondelete;
  