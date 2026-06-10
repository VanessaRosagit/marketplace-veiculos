// Aguarda o HTML estar totalmente carregado antes de executar qualquer coisa
document.addEventListener('DOMContentLoaded', () => {

    // Tamanho de fonte atual (começa no padrão do navegador: 16px)
    let fontSize = 16;

    // Aplica um novo tamanho de fonte no elemento <html>,
    // o que afeta todos os elementos que usam "em" ou "rem"
    const setFontSize = (value) => {
        fontSize = value;
        document.documentElement.style.fontSize = `${value}px`;
    };

    // Utilitário: vincula um clique a um elemento pelo ID.
    // Faz a verificação de existência para não quebrar em páginas
    // onde o botão não existe.
    const bindClick = (id, handler) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', handler);
        }
    };

    // Se o usuário já havia ativado o alto contraste numa visita anterior,
    // restaura o modo assim que a página carrega
    if (localStorage.getItem('contraste') === 'true') {
        document.body.classList.add('alto-contraste');
    }

    // Botão "A+" — aumenta a fonte de 2 em 2px até o máximo de 28px
    bindClick('aumentarFonte', () => {
        if (fontSize < 28) {
            setFontSize(fontSize + 2);
        }
    });

    // Botão "A-" — diminui a fonte de 2 em 2px até o mínimo de 12px
    bindClick('diminuirFonte', () => {
        if (fontSize > 12) {
            setFontSize(fontSize - 2);
        }
    });

    // Botão que reseta só a fonte para o padrão (16px)
    bindClick('resetarFonte', () => {
        setFontSize(16);
    });

    // Botão que reseta tudo: fonte + alto contraste desativado + limpa o localStorage
    bindClick('resetar', () => {
        setFontSize(16);
        document.body.classList.remove('alto-contraste');
        localStorage.setItem('contraste', 'false');
    });

    // Liga/desliga o modo de alto contraste e salva a preferência no localStorage
    // para persistir entre páginas e visitas futuras
    const toggleContrast = () => {
        const active = document.body.classList.toggle('alto-contraste');
        localStorage.setItem('contraste', String(active));
    };

    // Dois botões diferentes podem acionar o mesmo toggle de contraste
    bindClick('alternarContraste', toggleContrast);
    bindClick('contraste', toggleContrast);
});
