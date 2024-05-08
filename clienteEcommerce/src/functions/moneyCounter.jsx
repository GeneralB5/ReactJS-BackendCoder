function addDotEveryThreeCharac(num) {
    let str = JSON.stringify(num)
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[str.length- 1 - i];
        if ((i + 1) % 3 === 0 && i !== str.length - 1) {
            result += '.';
        }
    }
    return result.split('').reverse().join('');;
}
export default addDotEveryThreeCharac