import "./style.css";
import { InputSwitch, InputSwitchProps } from "primereact/inputswitch";

export default function Switch(props: InputSwitchProps) {
  return <InputSwitch {...props} className="scale-90"></InputSwitch>;
}
