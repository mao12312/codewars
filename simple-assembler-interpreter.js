const simple_assembler = (program) => {
    const mem = {}
    for (let i = 0; i < program.length; ++i) {
        const [op, reg, val] = program[i].split(" ")
        if (op === "mov") {
            mem[reg] = isNaN(val) ? mem[val] : +val
        } else if (op === "inc") {
            mem[reg] = (mem[reg] || 0) + 1
        } else if (op === "dec") {
            mem[reg] = (mem[reg] || 0) - 1
        } else if (op === "jnz") {
            if (mem[reg] !== 0) {
                i += val - 1
            }
        }
    }
    return mem
}
simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a'])
// 1