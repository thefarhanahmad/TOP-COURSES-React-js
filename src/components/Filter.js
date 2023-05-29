function Filter({ data, category, setCategory }) {
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div>
      {data.map((data) => {
        return (
          <button
            onClick={() => {
              filterHandler(data.title);
            }}
            className={`text-lg px-2 py-1 mr-3 rounded-md font-medium 
                    text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                    ${
                      category === data.title
                        ? "bg-opacity-60 border-white"
                        : "bg-opacity-40 border-transparent"
                    }
                    `}
            key={data.id}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
export default Filter;
