import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

function App() {
  // Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
const putData = () => {
  set(ref(db, 'users/john'), {
    username: 'Prithwijit Banerjee',
    email: 'prithwijit98@gmail.com',
    gender: 'male',
    age: 26,
    countryOfOrigin: 'India'
  });
}
  return (
    <div>
      <h2>Firebase-React Project</h2>
      <button onClick={putData}>Post and Put Data in Firebase DB</button>
    </div>
  );
}

export default App;
