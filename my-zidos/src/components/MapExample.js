import React from "react";
import ReactDOM from "react-dom";
import Geolocation from "./Contents";


class MapExample extends React.Component {
  getCurrentPosition = () => {
    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      () => {
        console.log(new Error("Permission denied"));
      }
    );
  };

  //  <Location />
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Some magic happen!</h2>

        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) => (
            <div>
              <button onClick={getCurrentPosition}>Get Position</button>
              <br />
              <br />
              {error && <div>{error.message}</div>}
              <pre>
                latitude: {latitude}
                <br />
                <br />
                longitude: {longitude}
              </pre>
            </div>
          )}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MapExample />, rootElement);

export default MapExample