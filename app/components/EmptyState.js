export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-gray-400 text-base mx-8 sm:mx-4 sm:text-2xl leading-12">
      <p>
        {" "}
        Customize SafeGPT&apos;s by clicking the{" "}
        <button
          className="prompt-button inline-flex items-center "
          onClick={() => setOpen(true)}
        >
          settings{" "}
        </button>{" "}
        button.
      </p>
      <p>
        I can tell you what to check before you{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "I'm investing money in a crypto project. What should I verify?"
            )
          }
        >
          invest
        </button>
        , buy a concert{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt("I'm buying a concert ticket from a stranger. What should I check or verify?")
          }
        >
          ticket
        </button>{" "}
        or{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "I'm lending money to a stranger through a P2P lending app. What should I check or verify?"
            )
          }
        >
          lend money
        </button>
        ,{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "I'm hiring a freelance through an online website. What should I check or verify?"
            )
          }
        >
          recruit a freelancer
        </button>
        , or even{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "I'm marrying someone I met on a dating app. What should I check or verify?"
            )
          }
        >
          marrying someone.
        </button>{" "}
      </p>
      <p>Send me a message.</p>
    </div>
  );
}
