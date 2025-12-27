import { useState } from "react";

const Parent = ({ children, number }) => {
  return (
    <div className="p-4 m-4 border-2 border-gray-300 rounded-lg bg-gray-50">
      <h2 className="text-lg font-bold mb-4">Parent {number}</h2>
      <div className="flex gap-4">{children}</div>
    </div>
  );
};

const Child = ({ type, content }) => {
  const [show, setShow] = useState(false);

  const renderContent = () => {
    if (type === "image") {
      return (
        <img
          src="../src/images/react.png"
          alt="react icon"
          className="mt-2 rounded w-50 h-50"
        />
      );
    }

    if (type === "text") {
      return <p className="mt-2 text-blue-600">{content}</p>;
    }

    if (type === "odd") {
      const odds = content.filter((n) => n % 2 !== 0);
      return (
        <ul className="mt-2 list-disc list-inside">
          {odds.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      );
    }

    if (type === "even") {
      const evens = content.filter((n) => n % 2 === 0);
      return (
        <ul className="mt-2 list-disc list-inside">
          {evens.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {show ? "Hide" : "Show"}
      </button>
      {show && renderContent()}
    </div>
  );
};

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Parent number="1">
        <Child type="image" />
        <Child type="text" content="Hello from Child 2!" />
      </Parent>

      <Parent number="2">
        <Child type="odd" content={numbers} />
        <Child type="even" content={numbers} />
      </Parent>
    </div>
  );
};

export default App;
