const input = document.getElementById('input');

const addToInput = (value) => {
    input.value += value;
}

const clearInput = () => {
    input.value = "";
}

const backspace = () => {
    input.value = input.value.slice(0, -1);
}

const calculate = () => {
    try {
        input.value = eval(input.value)
    } catch (error) {
        input.value = "ERROR"
    }
}