import "./App.css";
import MuiTable from "./mui/Muitable";
import Mui_Tabs from "./mui/Tabs";
import Logos from "./mui/Logos";
import Mui_Buttons from "./mui/Button";
import Footer from "./mui/Footer";
import MultilineTextFields from "./mui/Tab2form";

function App() {
  return (
    <div style={{}}>
      <Logos />
      <div
        className="con"
        style={{
          width: "80",
          borderCollapse: "collapse",
          backgroundColor: "#666666",
          textcolor: "white",
          color: " white",
          fontFamily: "Calibri",
          fontSize: "10px",
          textAlign: "left",
        }}
      >
        <Mui_Tabs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
