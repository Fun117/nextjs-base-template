export function NetworkOffline() {
  return (
    <div
      className="flex justify-center items-center bg-white dark:bg-black w-screen h-screen m-auto transition-all duration-300 ease-in-out"
      aria-label="loading"
    >
      <div className="flex flex-col">
        <h1>Offline</h1>
      </div>
    </div>
  );
}

export function Loading() {
  return (
    <div
      className="flex justify-center items-center bg-white dark:bg-black w-screen h-screen m-auto transition-all duration-300 ease-in-out"
      aria-label="loading"
    >
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  );
}
