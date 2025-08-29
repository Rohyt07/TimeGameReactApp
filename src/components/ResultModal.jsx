import {forwardRef, useImperativeHandle, useRef} from 'react';
const ResultModal =  forwardRef(
function ResultModal({ result, targetTime }, ref) { // ref as a parameter not a prop
    const dialog = useRef();
 
    useImperativeHandle(ref, () => { // This is for understanding for other developer who is working on this component. using this hook we can declare our method like showModal right here.
    return {
        open() {
        dialog.current.showModal();
    }
 };
 });

  return (
    <dialog ref={dialog} className="result-modal" >
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stop the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}); 
export default ResultModal;