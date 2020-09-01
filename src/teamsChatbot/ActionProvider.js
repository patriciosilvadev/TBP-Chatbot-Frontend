class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleCarouselExamle = () => {
    const message = this.createChatBotMessage(
      "This will have a Carousel.",
      {
        withAvatar: true,
        widget: "overview",
        delay: 500,
      }
    );

    this.addMessageToBotState(message);
  };

  handleButtonExamle = () => {
    const message = this.createChatBotMessage(
      "This will have a button.",
      {
        withAvatar: true,
        widget: "overview",
        delay: 500,
      }
    );

    this.addMessageToBotState(message);
  };

  // handleDefault = () => {
  //   const message = this.createChatBotMessage(
  //     "How can I help?",
  //     {
  //       withAvatar: true,
  //       delay: 500,
  //     }
  //   );
  //
  //   this.addMessageToBotState(message);
  // };

  handleHelp = () => {
    const message = this.createChatBotMessage(
      "How can I help?",
      {
        withAvatar: true,
        delay: 500,
      }
    );

    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;
