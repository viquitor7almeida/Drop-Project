const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let userName = ''; // Variável para armazenar o nome do usuário
let quantities = {}; // Variável para armazenar as quantidades de bebidas

// Rota para processar mensagens
app.post('/chat', (req, res) => {
    let { message } = req.body;
    message = message.trim().toLowerCase(); // Converte para minúsculo e remove espaços extras
    let reply;

    // Respostas baseadas nas opções
    switch (message) {
        case 'drinks':
            reply = 'Os drinks disponíveis são: Mojito, Caipirinha e Margarita! 🍸';
            break;
        case 'horários':
            reply = 'Nosso bar funciona das 18h às 2h, de terça a domingo. ⏰';
            break;
        case 'contato':
            reply = 'Você pode nos contatar pelo número (11) 98765-4321 ou pelo email bar@exemplo.com. 📞📧';
            break;
        case 'orçamento': // Alinhado com o botão HTML
            reply = 'Claro! Vamos começar seu atendimento. Primeiro, qual é o seu nome?';
            break;
        default:
            if (userName === '') {
                userName = message.charAt(0).toUpperCase() + message.slice(1); // Armazena o nome do usuário
                reply = `Olá ${userName}, o que deseja?`;
            } else {
                reply = `Obrigado, ${userName}! Estamos processando seu orçamento. Em breve entraremos em contato.`;
            }
    }

    res.json({ reply });
});

// Rota para processar finalização do pedido
app.post('/finalize', (req, res) => {
    quantities = req.body.quantities;
    let reply = 'Ok, você vai querer ';

    const drinks = quantities
        .filter(item => item.quantity > 0)
        .map(item => `${item.quantity} ${item.drinkName}${item.quantity > 1 ? 's' : ''}`)
        .join(' e ');

    reply += `${drinks}, correto?`;

    res.json({ reply });
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});