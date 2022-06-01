import { Input } from "@chakra-ui/react";

interface Dprops {
  setDiscordName: (value: string) => void;
  discordName: string;
  allMessage: string;
}

export default function DiscordModal({
  setDiscordName,
  discordName,
  allMessage
}: Dprops) {
  return (
    <div className="twitter-modal-section section-modal">
      <h2 className="title-modal">Task to Collect Your Sweets</h2>
      <ul>
        <li>
          Follow our{" "}
          <a href="https://discord.gg/T3R4MECCAG" className="link-modal">
            Discord Channel
          </a>
        </li>
        <li>Write your Discord username here to complete the task.</li>
      </ul>
      <Input
        type={"text"}
        placeholder="@your_username"
        value={discordName}
        onChange={(e) => setDiscordName(e.target.value)}
      />
      <span className="error-message-telegram">{allMessage}</span>
    </div>
  );
}
