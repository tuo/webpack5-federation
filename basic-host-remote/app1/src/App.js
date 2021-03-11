import React, { useState } from "react";
import Slides from "./Slides";
import { camelCase } from "lodash-es";
const RemoteButton = React.lazy(() => import("app2/Button"));
import NewsList from "app2/NewsList";
const AppOld1 = () => (
    <div>
        <h1>Basic Host-Remote</h1>
        <h2>App 1</h2>
        <i>camelCase: {camelCase("hello world")}</i>
        <Slides />
        <React.Suspense fallback={<h1>Loading ...</h1>}>
            <RemoteButton />
        </React.Suspense>
    </div>
);

function App() {
    const [shown, setShown] = useState(false);
    return (
        <div>
            <h1>Basic Host-Remote</h1>
            <h2>App 1</h2>
            <Slides />
            {!shown && (
                <button onClick={() => setShown(!shown)}>
                    Click to load button from app2
                </button>
            )}
            {shown && (
                <React.Suspense fallback={<h1>Loading ...</h1>}>
                    <RemoteButton onClick={() => setShown(!shown)} />
                </React.Suspense>
            )}
            <NewsList />
        </div>
    );
}
export default App;
