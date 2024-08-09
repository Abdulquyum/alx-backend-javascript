export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var _task = true;
    var _task2 = false;
  }

  return [task, task2];
}
