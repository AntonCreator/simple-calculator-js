insert = (num) => {
    document.form.textview.value = document.form.textview.value + num
}

clean = () => {
    document.form.textview.value = ""
}

back = () => {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.slice(0,exp.length - 1)
}

equal = () => {
    let exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp)
    }
}


