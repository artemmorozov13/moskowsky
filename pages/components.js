import Acordion from "UI/Acordion/Acordion";
import CustomInput from "UI/CustomInput/CustomInput";

const Components = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CustomInput label="Как к вам обращаться?" />

      <Acordion
        title="Заголовок акордиона"
      >Текст акордиона</Acordion>
    </div>
    
  );
};

export default Components;
