import { useHistory } from "react-router-dom";

export default function NavBar({ onLogout }) {
  const history = useHistory();
  function handleClick() {

    onLogout();

    history.push("/login");
  }

  return (
    <nav>
      <button onClick={handleClick}>Logout</button>
    </nav>
  );
}