import { Input } from "@chakra-ui/react";

interface Mprops {
  mediumName: string;
  setMediumName: (value: string) => void;
    allMessage: string
}
export default function MediumModal({ mediumName, setMediumName, allMessage }: Mprops) {
  return (
    <div className="twitter-modal-section section-modal">
      <h2 className="title-modal">Second Task to Collect Your Sweets</h2>
      <ul>
        <li>
          Follow our
          <a href="https://medium.com/@sweetpad.io.official">
            <span className="link-modal"> Medium.com Channel</span>
          </a>
        </li>
        <li>Write your Medium username here to complete the task.</li>
      </ul>
      <Input
        type={"text"}
        placeholder="@your_username"
        value={mediumName}
        onChange={(e) => setMediumName(e.target.value)}
      />
        <span className="error-message-telegram">{allMessage}</span>
    </div>
  );
}
