let map = new Map();
map.set("public", 101);
map.set("private", 102);
map.set("int", 130);
map.set("protected", 131);
map.set("double", 140);
map.set("float", 141);
map.set("return", 142);
map.set("void", 143);
let l = console.log;
let Util = {
  worldAnalysis: function (str) {
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
            if (!/[0-9a-zA-Z]/.test(str.charAt(index))) {
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
      if (startIndex != -1) {
        let substr = str.substring(startIndex, index);
        let code;
        if (substr.match(/^[0-9][a-zA-Z]+/))
          code = "错误";
        else
          code = map.get(substr) || "变量";
        if (substr.match(/^[1-9]\d*$/))
          code = "整数";
        output += substr + " " + code + "\n";
      }
    }
    return output;
  },
  syntaxAnalysis: function (str) {
    let expression = new Map();
    let exprss = str.split("\n");
    for (let index in exprss) {
      let ex = exprss[index];
      expression.set(ex.slice(0, 1), {expression:ex.slice(3, ex.length)});
    }
    for (let ex of expression) {
      ex[1].first = [];
      let value = expression.get(ex[0]).expression.slice(0, 1);
      while (/[A-Z]/.test(value)) {
        value = expression.get(value).expression.slice(0, 1);
      }
      ex[1].first.push(value);
    }
    let result = 'First: \n';
    for (let ex of expression) {
      result += ex[0] + ': ' + ex[1].first.toString() + '\n';
    }
    return result;
  }
}

export default Util;
