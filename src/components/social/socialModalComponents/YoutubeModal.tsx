import React from "react";
import { Input } from "@chakra-ui/react";

interface Yprops {
  youtubeName: string;
  setYoutubeName: (value: string) => void;
  allMessage: string
}
export default function YoutubeModal({ youtubeName, setYoutubeName, allMessage }: Yprops) {
  return (
    <div className="youtube-modal-section section-modal">
      <h2 className="title-modal">Task to Collect Your Sweets</h2>
      <ul>
        <li>
          Subscribe our{" "}
          <a
            href="https://youtube.com/channel/UCVlg4Abe1XIWbXYyD6aMixA"
            className="link-modal"
          >
            Youtube Channel
          </a>
        </li>
        <li>Write your youtube gmail address.</li>
      </ul>
      <Input
        type={"email"}
        placeholder="example@gmail.com"
        value={youtubeName}
        onChange={(e) => setYoutubeName(e.target.value)}
      />
        <span className="error-message-telegram">{allMessage}</span>
    </div>
  );
}
