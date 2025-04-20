import "./App.css";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] center ">
        <div className="p-4 border rounded-md w-[fit-content] h-[fit-content]">
          <h1 className="text-[2rem] text-center">
            Introduction to Shopify-API
          </h1>
          <p>
            With this project I want to learn the basics of Shopify, while
            perfecting my skills of tailwind and adding some animations 🤖
          </p>
          <div className="mt-2">
            <p>This are the basic queries I'll learn here:</p>
            <ul className="list-disc ms-2">
              <li>List products</li>
              <li>Get products by ID</li>
              <li>Add to cart</li>
              <li>Create checkout</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
