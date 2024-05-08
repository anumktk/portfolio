import React from "react";

const Bot = () => {
  return (
    <div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="PortfolioAgent"
        agent-id="b77a740f-fb52-4b1c-919c-5372fd3a2c30"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Bot;
