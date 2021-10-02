function validParentheses(parens) {
    let parensSpt = parens.split('');
    let parensEdt = [];
    let res;
    if (parensSpt[0] === ")" || parensSpt[parensSpt.length - 1] === "(") {
        res = false;
    } else {
        parensSpt.forEach(function (e, i) {
            if (e === "(") {
                for (j = i; j < parensSpt.length; j++) {
                    if (parensSpt[j] === ")") {
                        delete parensSpt[j];
                        delete parensSpt[i];
                        parensEdt.push("(", ")");
                        break;
                    }
                }
            }
        });
    }
    res = (parensEdt.length === parensSpt.length) ? true : false;
    return res;
}




// bestAnswer
function validParentheses(parens) {
    var indent = 0;

    for (var i = 0; i < parens.length && indent >= 0; i++) {
        indent += (parens[i] == '(') ? 1 : -1;
    }

    return (indent == 0);
}

// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string) {
    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0,           // pretty useless if they're not grouping *something*
        token;
    while (token = tokenizer.exec(string), token !== null) {
        if (token == "(") {
            count++;
        } else if (token == ")") {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count == 0;
}

validParentheses("(())((()())())");