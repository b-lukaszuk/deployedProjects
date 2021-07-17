export function randInt(minIncl, maxExcl) {
    let result = Math.floor(Math.random() * (maxExcl - minIncl)) + minIncl;
    return result;
}
