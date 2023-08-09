import { Bell, Question } from "./components";

function App() {
  return (
    <>
      <main className="w-full pt-8 pb-12 px-4">
        <Bell />
        <div className="pt-2 sm:pt-6 flex flex-col items-center gap-y-6">
          <h1 className="text-center text-balance text-4xl md:text-6xl font-bold">
            {"Practice for the Teoriprøve!"}
          </h1>
          <Question />
        </div>
        <p className="text-2xs fixed bottom-6 left-6">Version 2.0.0</p>
      </main>
    </>
  );
}

export default App;
