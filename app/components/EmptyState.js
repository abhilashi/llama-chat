export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-gray-400 text-base mx-8 sm:mx-4 sm:text-2xl leading-12">
      <p>
        {" "}
        Customize SocraticMind by clicking the{" "}
        <button
          className="prompt-button inline-flex items-center "
          onClick={() => setOpen(true)}
        >
          settings{" "}
        </button>{" "}
        button.
      </p>
      <p>
        I can teach you a programming concept like{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Teach me redux (from react native)"
            )
          }
        >
          redux
        </button>
        ; make better decisions while {" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt("I'm buying UNI token.")
          }
        >
          investing
        </button>{" "}
       ; critically analyse your ideas {" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "I'm building a P2P lending app"
            )
          }
        >
          ideas 
        </button>
        ; find gaps in your {" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "I want to run three businesses at once with a single person team."
            )
          }
        >
          thinking
        </button>
        ; improve your decision making or even{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Recipe for happy relationships are novel experiences."
            )
          }
        >
          have fun.
        </button>{" "}
      </p>
      <p>Send me a message.</p>
    </div>
  );
}
