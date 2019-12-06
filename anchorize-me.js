// anchorize me!
inp = "hello https://404desing.app"
inp_spl = inp.split(" ")
format = `${inp_spl[0]} <a href="${inp_spl[1]}">${inp_spl[1]}</a>`
console.log(format)