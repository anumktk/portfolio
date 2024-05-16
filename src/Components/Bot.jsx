import React from "react";
import logo4 from "../Assets/logo4.png";
import sa2 from "../Assets/sa2.png";

const Bot = () => {
  const botStyles = {
    "--df-messenger-bot-message": "#153448", //Bubble background color for agent messages.(bot response bg)
    "--df-messenger-button-titlebar-color": "#153448", // (bot button)Color for the floating button and the titlebar of the chat dialog.
    "--df-messenger-button-titlebar-font-color": "#F5EFE6", // (x button)Font color for the title in the titlebar.
    "--df-messenger-chat-background-color": "#124b81c7", //(bot bg) Color for the chat dialog background.
    "--df-messenger-font-color": "#F1F1F1", // Font color for messages.
    "--df-messenger-input-box-color": "#153448", //Background color for the text input box.
    "--df-messenger-input-font-color": "#F1F1F1", //Font color for the text input box.
    "--df-messenger-input-placeholder-font-color": "#948979", //Font color for placeholder text in text input box.
    "--df-messenger-minimized-chat-close-icon-color": "#F5EFE6", //Color of the close icon in the closed chat view.
    "--df-messenger-send-icon": "#F5EFE6", //Color of the send icon in the text input box.
    "--df-messenger-user-message": "#00215E", //Bubble background color for user messages.
    "--df-messenger-chat-bubble-icon-size": "100px",
    // "--df-messenger-chat-border": "", // Border for the dialog
    // "--df-messenger-chat-border-radius": "", //Border radius for the dialog
    // "--df-messenger-chat-window-height": "100px", //Height of the chat window
    // "--df-messenger-chat-bubble-icon-size": "",
    // "--df-messenger-chat-bubble-border": "", //Border of the chat bubble
  };
  return (
    <div style={botStyles}>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <style></style>
      <df-messenger
        intent="WELCOME"
        chat-title="PortfolioAgent"
        agent-id="b77a740f-fb52-4b1c-919c-5372fd3a2c30"
        language-code="en"
        chat-icon={sa2}
        chat-bubble-icon-colorchat-background="#FFBF65"
      ></df-messenger>
    </div>
  );
};

export default Bot;
