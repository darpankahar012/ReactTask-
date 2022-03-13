let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - 1; j++) {
        if (j <= i) {
            string += "*";
        } else {
            string += n - j;
        }
    }
    string += "<br>";
}
console.log(string);