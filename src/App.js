import React from "react";

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

function App() {

  return (
    <>
      <TheLayout />
    </>
  );

}

export default App;
