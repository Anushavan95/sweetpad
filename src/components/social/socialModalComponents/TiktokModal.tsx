import { Input } from "@chakra-ui/react";

interface Tprops {
  tiktokName: string;
  setTikTokName: (value: string) => void;
  allMessage: string
}
export default function TiktokModal({ tiktokName, setTikTokName, allMessage }: Tprops) {
  return (
    <div className="twitter-modal-section section-modal">
      <h2 className="title-modal">Second Task to Collect Your Sweets</h2>
      <ul>
        <li>
          Follow our{" "}
          <a href="https://vm.tiktok.com/ZSeahCPgn/" className="link-modal">
            Tiktok Channel
          </a>
        </li>
        <li>Write your Tiktok username here to complete the task.</li>
      </ul>
      <Input
        type={"text"}
        placeholder="@your_username"
        value={tiktokName}
        onChange={(e) => setTikTokName(e.target.value)}
      />
        <span className="error-message-telegram">{allMessage}</span>
    </div>
  );
}
