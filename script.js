const blacklistMap = {
    'A': '*-',
    'B': '+#',
    'C': '@!',
    'D': '&$',
    'E': '%=',
    'F': '^#',
    'G': '/*',
    'H': '//',
    'I': '+*',
    'J': '#>',
    'K': '^+',
    'L': '@>',
    'M': '+!',
    'N': '^>',
    'O': '*/',
    'P': '=! ',
    'Q': '~^',
    'R': '$>',
    'S': '=>',
    'T': '>@',
    'U': '#+',
    'V': '-%',
    'W': '<!',
    'X': '!=',
    'Y': '>+',
    'Z': '#^',
    ' ': '/|/', // Espaço também tem um mapeamento
};

// Função para traduzir do texto para o código Blacklist
function translateTextToCode() {
    const inputText = document.getElementById('input-text').value.toUpperCase();
    let translatedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (blacklistMap[char]) {
            translatedText += blacklistMap[char];
        } else {
            translatedText += char;
        }
    }

    document.getElementById('output-text').value = translatedText;
}

// Função para traduzir do código Blacklist para o texto
function translateCodeToText() {
    const inputCode = document.getElementById('input-code').value;
    let translatedText = '';
    let temp = '';
    
    // Quebra o código Blacklist em pedaços de dois caracteres e traduz
    for (let i = 0; i < inputCode.length; i++) {
        temp += inputCode[i];
        
        // Se encontramos um código completo, buscamos a letra correspondente
        for (const [letter, code] of Object.entries(blacklistMap)) {
            if (temp === code) {
                translatedText += letter;
                temp = ''; // Reinicia a variável temp para o próximo código
                break;
            }
        }
    }

    document.getElementById('output-code').value = translatedText;
}

// Eventos para tradução em tempo real
document.getElementById('input-text').addEventListener('input', translateTextToCode);
document.getElementById('input-code').addEventListener('input', translateCodeToText);