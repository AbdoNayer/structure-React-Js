import React, { Component, Suspense } from "react";

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

class App extends Component {

  render() {
    return (
      <Suspense>
        <TheLayout />
      </Suspense>
    );
  }

}

export default App;
