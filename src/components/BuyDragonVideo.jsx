import buy from "../assets/buy.webm";

export default function BuyDragonVideo() {
  return (
    <video autoPlay loop muted className="buy-dragon-video">
      <source src={buy} type="video/mp4" />
    </video>
  );
}
