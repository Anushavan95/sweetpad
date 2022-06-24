import CalculatorDragonVideo from "../assets/BlurOrinak.webm";

export default function CalculatorDragon() {
  return (
    <video className="calculator-dragon-video">
      <source src={CalculatorDragonVideo} type="video/mp4" />
    </video>
  );
}
