import './typings/css.d.ts';
import Button from "./CustomButtonComponent";

function App() {
  return (
    <>
      <Button
        border="none"
        color="blue"
        height = "200px"
        onClick={() => "location.href='https://api.whatsapp.com/send?phone=5511964335064&text=Suporte%20UpMedal';"}
        radius = "50%"
        width = "200px"
      />
    </>
  );
}

export default App;
