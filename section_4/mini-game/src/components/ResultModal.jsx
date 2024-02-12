import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(
  ({ remainingTime, targetTime, onReset }, ref) => {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const score = Math.round((1 - remainingTime / targetTime) * 100);
    const formattedRemainingTime = remainingTime.toFixed(2);
    const formattedTargetTime = targetTime.toFixed(2);
    const targetTimeUnit = targetTime > 1 ? "seconds" : "second";
    const remainingTimeUnit = remainingTime > 1 ? "seconds" : "second";

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
        <h2>
          {userLost && "You lost"}
          {!userLost && `Your Score: ${score}`}
        </h2>
        <p>
          The target time was{" "}
          <strong>
            {formattedTargetTime} {targetTimeUnit}.
          </strong>
        </p>
        <p>
          You stopped the timer at{" "}
          <strong>
            {formattedRemainingTime} {remainingTimeUnit} left.
          </strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

ResultModal.displayName = "ResultModal";
export default ResultModal;
