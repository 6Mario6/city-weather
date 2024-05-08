import styles from "./App.module.css";
import { Form } from "./components/Form/Form.component";

function App() {
  return (
    <>
      <div className={styles.title}>Weather Finder</div>
      <div className={styles.container}>
        <Form />
        <p>2</p>
      </div>
    </>
  );
}

export default App;
