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
let str = null, p = 0, ch = '', error = false, m = 0, info = '';
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
      expression.set(ex.slice(0, 1), {expression: ex.slice(3, ex.length)});
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
  },
  arithmeticAnalysis: function (strs) {
    str = strs;
    info = '';
    p = 0;
    ch = '';
    error = false;
    let flag = true;
    m = str.length;
    debugger;
    while (flag) {
      ch = str.substring(p, p + 1);
      if (ch == "#" || error) {
        flag = false;
        break;
      }
      plusandminus();
    }
    if (error) {
      return info?info:"表达式错误";
    } else {
      return "表达式正确";
    }
  },
  booleanAnalysis: function (str) {
    let index = 0;
    let state = 0;
    let hasOpe = false;
    let parentheses = [];
    while(index < str.length) {
      let ch = str[index];
      if(ch == ' ') {
        index++;
        continue;
      }
      if(/[A-Za-z0-9]/.test(ch)) {
        state = 0;
      }
      if (ch == '>' || ch == '<') {
        if (/[1,2]/.test(state + '') || /[()]/.test(str[index + 1])) {
          return '语法错误，请检查 \' < \' 或者 \' > \'';
        }
        hasOpe = true;
      }
      if(ch == '&') {
        if(str[index + 1] != '&' || /[()]/.test(str[index - 1]))
          return '表达式错误, 请检查&&左侧';
        index ++;
        state = 1;
        hasOpe = true;
      }
      if(ch == '|') {
        if(str[index + 1] != '|' || /[()]/.test(str[index - 1]))
          return '表达式错误, 请检查||左侧';
        index++;
        state = 2;
        hasOpe = true;
      }
      if(ch == '(') {
        parentheses.push('(');
      }
      if (ch == ')') {
        if(parentheses.pop() != '(')
          return '缺少左括号';
      }
      index++;
    }
    if (parentheses.length > 0 ) {
      return '括号错误';
    }
    if (state != 0) {
      return '结尾语法错误';
    }
    if (hasOpe)
      return '语法正确';
    else {
      return '无布尔表达式';
    }
  },
  ifStatementsAnalysis: function (str) {
    debugger;
    let index = 0;
    let state = 0;
    let booleanStatement = '';
    let kuohao = 0;
    let isboolean = false;
    while (index < str.length) {
      let ch = str[index];
      if (state == 4) {
        if (ch == '}') {
          state = 5;
          break;
        } else {
          continue;
        }
      }
      if (state == 3) {
        if (ch == ' ') {
          index++;
          continue;
        }
        if (ch == '{') {
          state = 4;
        }
      }
      if (state == 2) {
        if (ch == '(') {
          kuohao++;
        }
        if (ch == ')') {
          kuohao--;
        }
        booleanStatement += ch;
        if (kuohao == -1) {
          isboolean = Util.booleanAnalysis(booleanStatement.slice(0, booleanStatement.length - 1));
          if (isboolean == '语法正确') {
            state = 3;
          } else {
            return isboolean;
          }
        }
      }
      if (state == 1 || state == 0) {
        if (ch == ' ') {
          index++;
          continue;
        }
        if (ch == 'i') {
          if (str[index + 1] != 'f') {
            return '语法错误';
          }
          state = 1;
          index++;
        }
        if (ch == '(') {
          state = 2;
        }
      }
      index++;
    }
    if (state == 5) {
      return '语法正确';
    }
    return '语法错误';
  }
}

export default Util;








function plusandminus() {
  multiplyanddivide();//*号和/号的判断
  if(ch == ("+") || ch == ("-"))
  {
    p++;
    ch = str.substring(p,p+1);
    plusandminus();
  }
}

function multiplyanddivide() {
  brackets();//字符和（）的判断
  if (ch == "*" || ch == "/") {
    p++;
    ch = str.substring(p, p + 1);
    multiplyanddivide();
  }
}

function brackets() {
  if (/[A-Za-z]/.test(ch)) {
    p++;
    ch = str.substring(p, p + 1);
  } else if (ch == "(")//是否为“（”符号
  {
    p++;
    ch = str.substring(p, p + 1);
    plusandminus();//判断括号里的表达式是否正确
    if (ch == ")")//是否有配对的“）”
    {
      p++;
      ch = str.substring(p, p + 1);
    } else {
      error = true;
      info = '缺少括号';
    }
  } else {
    error = true;
    info = '运算符前后缺少变量';
  }
}
