import { Button } from "@devohda/design-system";
import {
  getDummyStoreCount,
  getDummyStoreIncrement,
  useDummyStore,
} from "./store/useDummyStore";

function App() {
  const alertCount = useDummyStore((state) => state.count);

  return (
    <>
      <Button label="Click me" onClick={() => alert(getDummyStoreCount())}>
        Click me
      </Button>
      <Button
        label="Increment"
        onClick={() => getDummyStoreIncrement(alertCount + 1)}
      >
        Increment
      </Button>

      <div>
        <p>Count: {alertCount}</p>
      </div>
    </>
  );
}

export default App;
