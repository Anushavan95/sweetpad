import { Input } from "@chakra-ui/react";

interface Rprops {
  instagarmName: string;
  setaInstagramName: (value: string) => void;
  allMessage: string
}

export default function InstagramModal({ instagarmName, setaInstagramName, allMessage }: Rprops) {
  return (
    <div className="twitter-modal-section section-modal">
      <h2 className="title-modal">Task to Collect Your Sweets</h2>
      <ul>
        <li>
          Follow our
          <a href="https://instagram.com/sweetpad.io?utm_medium=copy_link" target={"_blank"}>
            <span className="link-modal"> Instagram Account</span>
          </a>
        </li>
        <li>Write your Instagram  username here to complete the task..</li>
      </ul>
      <Input
        type={"text"}
        placeholder="@your_username"
        onChange={(e) => setaInstagramName(e.target.value)}
        value={instagarmName}
      />
        <span className="error-message-telegram">{allMessage}</span>
    </div>
  );
}
