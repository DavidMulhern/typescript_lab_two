function str_len(value) {
    return value.length;
}
console.log(str_len("test 1"));
function str_len_spaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
console.log(str_len_spaces("test 1"));
function str_len_both(value, spaces) {
    var num;
    if (spaces == true) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log(str_len_both("test 1"));
console.log(str_len_both("test 1", false));
