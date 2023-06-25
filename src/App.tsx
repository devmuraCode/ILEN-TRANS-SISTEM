import { useAppDispatch } from "./hooks/hooks";
import MainPage from "./pages/MainPage";
import { useEffect } from "react";
import { getUsers } from "./services/userServices";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
