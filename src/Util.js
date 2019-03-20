function worldAnalysis(str) {
  let output = "";
  let state = '0';
  let index = 0;
  let startIndex = 0;
  while (index < str.length) {
    state = '0';
    startIndex = -1;
    while (state != '3' && index < str.length) {
      switch (state) {
        case '0'://若当前状态是0状态，读入一个字母，转向1状态
        {
          let element = str.charAt(index);
          if (/[0-9]/.test(str.charAt(index))) {
            state = '1';
            startIndex = index;
          }
          if (/[a-zA-Z_]/.test(str.charAt(index))) {
            state = '2';
            startIndex = index;
          }
          break;
        }
        case '1'://若当前是1状态，读入字母或数字，仍为1状态
        {
          let element = str.charAt(index);
          if (!/[0-9]/.test(str.charAt(index))) {
            state = '3';
            index--;
          }
          break;
        }
        case '2'://若当前状态是2状态，读入字母、数字或者下划线，任然为2状态
        {
          if (!/[[a-zA-Z_0-9]/.test(str.charAt(index))) {
            state = '3';
            index--;
          }
          break;
        }
      }
      index++;
    }
    if (startIndex != -1)
      output += str.substring(startIndex, index) + "\n";
  }
  return output;
}
export default worldAnalysis;
