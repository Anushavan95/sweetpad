import React from "react"

import { Input } from "@chakra-ui/react";
interface Fprops {
  facebookName: string;
  setFacebookName: (value: string) => void;
  allMessage: string
}

export default function FacebookModal({
  facebookName,
  setFacebookName,
   allMessage
}: Fprops) {
  return (
    <div className="twitter-modal-section section-modal">
      <h2 className="title-modal">Follow our Facebook Page</h2>
      <ul>
        <li>
          Follow our
          <a href="https://www.facebook.com/SweetPad-official-111890581352736">
            <span className="link-modal"> Facebook Page</span>
          </a>
        </li>
        <li>
          Write your facebook Personal Profile URL here to complete the task.
        </li>
      </ul>
      <Input
        type={"text"}
        placeholder="facebook.com/example"
        value={facebookName}
        onChange={(e) => setFacebookName(e.target.value)}
      />
        <span className="error-message-telegram">{allMessage}</span>
    </div>
  );
}
