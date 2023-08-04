import { Question } from "./components";

function App() {
  return (
    <>
      <main className="w-full pt-4 pb-12 px-4">
        <div className="pt-2 sm:pt-6 flex flex-col items-center gap-y-10">
          <h1 className="text-center text-balance text-4xl sm:text-6xl font-bold">
            {"Practice for the Teoriprøve!"}
          </h1>
          <Question />
        </div>
        <p className="text-2xs fixed bottom-6 left-6">Version 1.1.1</p>
      </main>
    </>
  );
}

export default App;
