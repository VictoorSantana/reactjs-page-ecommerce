


export const phoneMask = (value) => {
    if (value) {
        var v = value.replace(/\D/g, "");
        v = v.replace(/^0/, "");
        if (v.length > 12) {
            v = v.replace(/^(\d\d)(\d{2})(\d{5})(\d{4}).*/, "+$1 ($2) $3-$4");
        } else if (v.length > 11) {
            v = v.replace(/^(\d\d)(\d{2})(\d{4})(\d{4}).*/, "+$1 ($2) $3-$4");
        } else if (v.length > 10) {
            v = v.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (v.length > 5) {
            v = v.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (v.length > 2) {
            v = v.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            v = v.replace(/^(\d*)/, "($1");
        }
        return v;
    } else {
        return '';
    }
};
export const moneyMask = (value) => {
    if (value) {
        var v = value + '';
        v = v.replace(/[^0-9\,]/g, '');
        //v = v.replace('R$ ', '');
        v = v.trim();
        //v = v.replace('.', '');
        v = v.replace(',', '.');
        return (isNaN(Number(v)) ? 0 : Number(v)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    } else {
        return '0,00';
    }
};
export const timeMask = (value) => {
    if (value) {
        var v = value + '';

        v = v.slice(0, 4);
        v = v.padStart(4, '0');

        var hour = v.slice(0, 2);
        var min = v.slice(2, 4);

        if (Number(hour) > 24) {
            hour = '24';
        }

        if (Number(min) > 59) {
            min = '59';
        }

        v = (hour + min).replace(/^(\d{0,2})(\d{0,2})/, "$1:$2");
        return v;
    } else {
        return '00:00';
    }
};
export const dateMask = (value) => {
    if (value) {
        var v = value + '';

        v = v.slice(0, 8);
        v = v.padStart(8, '0');

        var day = v.slice(0, 2);
        var month = v.slice(2, 4);
        var year = v.slice(4, 8);

        if (Number(day) > 31 || Number(day) === 0) {
            day = '24';
        }

        if (Number(month) > 12 || Number(month) === 0) {
            month = '12';
        }

        v = (day + month + year).replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, "$1/$2/$3");
        return v;
    } else {
        return '01/01/2000';
    }
};
export const cpfMask = (value) => {
    if (value) {
        let v = value + '';
        return v
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    } else {
        return '';
    }

}
export const cnpjMask = (value) => {
    if (value) {
        let v = value + '';
        return v
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{2})(\d{3})/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1/$2')
            .replace(/(\d{4})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    } else {
        return '';
    }
}
export const zipCodeMask = (value) => {
    if (value) {
        let v = '' + value;
        return v
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{5})(\d{3})/, '$1-$2')  // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(-\d{3})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    } else {
        return '';
    }
}
export const licensePlateMask = (value) => {
    return value
        .replace(/(\w{3})(\w{4})/, '$1-$2')  // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(-\w{4})\w+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}
export const creditCardMask = (value) => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{4})(\d{1})/, '$1 $2')  // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{4})(\d{1})/, '$1 $2')
        .replace(/(\d{4})(\d{1})/, '$1 $2')
}
export const floatMask = (value) => {
    if (value) {
        var v = value + '';
        v = v.replace(/[^0-9\,]/g, '');
        return v;
    }
    return '';
};
export const numberMask = (value) => {
    if (value) {
        var v = value.replace(/\D/g, "");
        return v;
    }
    return '';
};