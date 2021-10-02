function DNAStrand(dna) {
    let res = ''
    for (i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                res += 'T';
                break;
            case 'T':
                res += 'A';
                break;
            case 'G':
                res += 'C';
                break;
            case 'C':
                res += 'G';
                break;
        }
    }
    return res;
}

// use dictionary
function DNAStrand(dna) {
    pairs = { 'T': 'A', 'A': 'T', 'G': 'C', 'C': 'G' };
    return dna.split('').map(e => { return pairs[e] }).join('');
}
DNAStrand("ATTGC")

// A -> T
// C -> G