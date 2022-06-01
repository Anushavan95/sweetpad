import { Input } from "@chakra-ui/react";

interface Tprops {
  tweeterName: string;
  setTweeterName: (value: string) => void;
  allMessage: string
}

export default function TweeterModal({ tweeterName, setTweeterName, allMessage }: Tprops) {
  return (
    <div className="twitter-modal-section section-modal">
      <h2 className="title-modal">Task to Collect Your Sweets</h2>
      <ul>
        <li>
          Follow our{" "}
          <a href="https://twitter.com/SweetPad_" className="link-modal">
            Twitter Page.
          </a>{" "}
        </li>
        <li>Write your Twitter username here to complete the task.</li>
      </ul>
      <Input
        type={"text"}
        placeholder="@your_username"
        value={tweeterName}
        onChange={(e) => setTweeterName(e.target.value)}
      />
       <span className="error-message-telegram"> {allMessage}</span>
    </div>
  );
}
