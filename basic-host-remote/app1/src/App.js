import React from "react";
import Slides from "./Slides";
import {camelCase} from 'lodash-es'
// const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <i>camelCase: {camelCase("hello world")}</i>
   	<Slides />
  </div>
);

export default App;
