import React from "react";
import axios from "axios";

const handleSubmit = (event) => {
  event.preventDefault();
  const userInput = event.target.userInput.value;
  const srcLanguage = event.target.srcLanguage.value;
  const destLanguage = event.target.destLanguage.value;

  axios
    .post("http://127.0.0.1:5000/chat", {
      user_input: userInput,
      src_language: srcLanguage,
      dest_language: destLanguage,
    })
    .then((response) => {
      console.log(response);
      // Update chat messages with response from server
    })
    .catch((error) => {
      console.log(error);
      // Handle error
    });
};

const Chatbot = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-gray-200">
        <h1 className="text-2xl font-bold">Peti Chatbot</h1>
      </div>
      <div className="flex-grow p-4 bg-white">
        {/* Chat messages go here */}
      </div>
      <div className="p-4 bg-gray-200">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your message..."
            name="userInput"
            className="w-full p-2 rounded-lg"
          />
          <input
            type="hidden"
            name="srcLanguage"
            value="en"
          />
          <input
            type="hidden"
            name="destLanguage"
            value="fr"
          />
          <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 ml-2">
            Send
          </button>
         </form>
      </div>
    </div>
  );
};

export default Chatbot;
