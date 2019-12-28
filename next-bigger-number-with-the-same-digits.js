// unfinished
const permutation = ({ result = [], pre = [], post, n = post.length }) => {
    if (n > 0) {
        post.forEach((_, i) => {
            const rest = [...post];
            const elem = rest.splice(i, 1);
            permutation({ result, pre: [...pre, ...elem], post: rest, n: n - 1 });
        });
    } else {
        result.push(pre);
    }
    return result;
};

const array = [1, 2, 3];
const results = permutation({ post: array });
console.log(results);