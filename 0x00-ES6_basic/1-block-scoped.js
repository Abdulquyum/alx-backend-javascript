export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    (function() {
      var task = true;
      var task2 = false;
    })();
  }

  return [task, task2];
}
