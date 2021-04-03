import { Title } from "../../../components";
import QRCode from "qrcode.react";

const View = ({ id, ...props }) => {
  const link = `http://192.168.1.92:3000/601ccb4a53d8b42df0f04dd9?tableNumber=${id}`;
  return (
    <div>
      <Title>View({id})</Title>
      <QRCode fgColor="#CC313d" value={link} />
    </div>
  );
};

export default View;
