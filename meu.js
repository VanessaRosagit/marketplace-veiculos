document.addEventListener('DOMContentLoaded', () => {
    let fontSize = 16;

    const setFontSize = (value) => {
        fontSize = value;
        document.documentElement.style.fontSize = `${value}px`;
    };

    const bindClick = (id, handler) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', handler);
        }
    };

    if (localStorage.getItem('contraste') === 'true') {
        document.body.classList.add('alto-contraste');
    }

    bindClick('aumentarFonte', () => {
        if (fontSize < 28) {
            setFontSize(fontSize + 2);
        }
    });

    bindClick('diminuirFonte', () => {
        if (fontSize > 12) {
            setFontSize(fontSize - 2);
        }
    });

    bindClick('resetarFonte', () => {
        setFontSize(16);
    });

    bindClick('resetar', () => {
        setFontSize(16);
        document.body.classList.remove('alto-contraste');
        localStorage.setItem('contraste', 'false');
    });

    const toggleContrast = () => {
        const active = document.body.classList.toggle('alto-contraste');
        localStorage.setItem('contraste', String(active));
    };

    bindClick('alternarContraste', toggleContrast);
    bindClick('contraste', toggleContrast);
});