function run(inputContent, inputType, userLanguage) {
    return getSelectedMenuOption(inputContent, inputType, userLanguage);
}

function getSelectedMenuOption(inputContent, inputType, userLanguage) {
    let options = [
        {
            regex: {
                'en-US': /^(apple)$/,
                'pt-BR': /^(maça)$/
            },
            value: 'apple'
        },
        {
            regex: {
                'en-US': /^(pineapple)$/,
                'pt-BR': /^(abacaxi)$/
            },
            value: 'pineapple'
        },
        {
            regex: {
                'en-US': /^(strawberry)$/,
                'pt-BR': /^(morango)$/
            },
            value: 'strawberry'
        }
    ];
    let props = {
        input: inputContent,
        inputType,
        options,
        userLanguage
    };
    let config = {
        isNumberMenu: true,
        isReversed: false,
        shouldRemoveSpecialCharacters: true,
        shouldRemoveWhiteSpaces: false
    };
    let selectedMenuOption = validateInputOptions(props, config);

    return selectedMenuOption;
}