import React from "react";

export default function TelegramModal({ token, errorMessageGroup, errorMessageChannel }: any) {
  return (
    <div className="telegram-modal-section section-modal">
      <h2 className="title-modal">First Task to Collect Your Sweets</h2>
      <div className="tele-text-content">
        <ul>
          <li>
            <p className="text">
              <span className="join"> Join our</span>
              <a className="join-telegram"  href="https://t.me/sweetpadofficial" target="_blank">Telegram Channel</a>
            </p>
            <a className="link-telegram" href="https://t.me/sweetpadofficial" target="_blank">
              SweetPad_official
            </a>
            <div className="error-message-telegram">{errorMessageChannel}</div>
          </li>
          <li>
            <p className="text">
              <span className="join"> Join our</span>
              <a className="join-telegram" href="https://t.me/+VoNkJjqAuyRjOTEy" target="_blank">Telegram Group</a>
            </p>
            <a className="link-telegram" href="https://t.me/+7sm5GRt8HLo3NGVi" target="_blank">
              Sweet Pad official
            </a>
            <div className="error-message-telegram">{errorMessageGroup}</div>
          </li>
          <li>
            <p className="text">
              Copy the code below and send into any of the groups for
              verification.
            </p>
          </li>
        </ul>
      </div>
      <div className="buttons-section">
        <div className="code">{token}</div>
      </div>
    </div>
  );
}
