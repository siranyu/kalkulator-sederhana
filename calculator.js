const screen = document.querySelector("#screen");

function getInputButton(button) {

    const buttonId = button.id;

    //includes
    const includesOpr = screen.value.includes('+') || screen.value.includes('-') || screen.value.includes('/') || screen.value.includes('*');

    //replace Operator
    const replaceKurang = screen.value
        .replace('+', '-')
        .replace('/', '-')
        .replace('*', '-')
        .replace('-', '-');

    const replaceTambah = screen.value
        .replace('+', '+')
        .replace('/', '+')
        .replace('*', '+')
        .replace('-', '+');

    const replaceKali = screen.value
        .replace('+', '*')
        .replace('/', '*')
        .replace('*', '*')
        .replace('-', '*');

    const replaceBagi = screen.value
        .replace('+', '/')
        .replace('/', '/')
        .replace('*', '/')
        .replace('-', '/');


    //condition btn

    switch (buttonId) {
        case '1':
            if (screen.value != '0') {
                screen.value += '1';
            } else {
                screen.value = screen.value.replace('0', '1');
            }
            break;

        case '2':
            if (screen.value != '0') {
                screen.value += '2';
            } else {
                screen.value = screen.value.replace('0', '2');
            }
            break;

        case '3':
            if (screen.value != '0') {
                screen.value += '3';
            } else {
                screen.value = screen.value.replace('0', '3');
            }
            break;

        case '4':
            if (screen.value != '0') {
                screen.value += '4';
            } else {
                screen.value = screen.value.replace('0', '4');
            }
            break;

        case '5':
            if (screen.value != '0') {
                screen.value += '5';
            } else {
                screen.value = screen.value.replace('0', '5');
            }
            break;

        case '6':
            if (screen.value != '0') {
                screen.value += '6';
            } else {
                screen.value = screen.value.replace('0', '6');
            }
            break;

        case '7':
            if (screen.value != '0') {
                screen.value += '7';
            } else {
                screen.value = screen.value.replace('0', '7');
            }
            break;

        case '8':
            if (screen.value != '0') {
                screen.value += '8';
            } else {
                screen.value = screen.value.replace('0', '8');
            }
            break;

        case '9':
            if (screen.value != '0') {
                screen.value += '9';
            } else {
                screen.value = screen.value.replace('0', '9');
            }
            break;

        case 'widen-0':
            if (screen.value == '0') {
                screen.value = '0';
            } else {
                screen.value += '0';
            }
            break;

        case 'tambah':
            if (includesOpr) {
                screen.value = replaceTambah;
            } else {
                screen.value += '+';
            }
            break;

        case 'kurang':
            if (includesOpr) {
                screen.value = replaceKurang;
            } else {
                screen.value += '-';
            }
            break;

        case 'kali':
            if (includesOpr) {
                screen.value = replaceKali;
            } else {
                screen.value += '*';
            }
            break;

        case 'bagi':
            if (includesOpr) {
                screen.value = replaceBagi;
            } else {
                screen.value += '/';
            }
            break;

        case 'clear':
            screen.value = '';
            break;

        case 'titik':
            if (screen.value.includes('.')) {
                screen.value = screen.value.replace('.', '.');
            } else {
                screen.value += '.';
            }
            break;

        case 'delete':
            screen.value = screen.value.substring(0, screen.value.length - 1)
            break;
    }
}

function equal() {
    try {
        if (eval(screen.value) == undefined) {
            alert("Tolong lakukan operasi bilangan terlebih dahulu!");
        } else {
            screen.value = eval(screen.value);
        }
    }
    catch (error) {
        alert('Tolong lakukan operasi dengan benar!')
    }

}

