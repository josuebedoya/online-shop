import './Button.css';

function Button() {
    return (
        <div className="flex items-center justify-center">
            <input
                className="border border-gray-300 bg-white h-10 px-4 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 input-search"
                type="text"
                placeholder="Search"
            />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 ml-2 rounded-full shadow-md button-search"
            >
                Clear
            </button>
            <h1>colornjb</h1>
        </div>
    );
};

export { Button };
