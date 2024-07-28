# Calculadora de IMC

## Introdução

Bem-vindo ao projeto Calculadora de IMC! Este é o meu primeiro aplicativo em React Native, desenvolvido para fornecer uma maneira simples e intuitiva de calcular o Índice de Massa Corporal (IMC) com base nos dados fornecidos pelo usuário. O aplicativo é projetado com uma interface amigável e permite que os usuários insiram seu gênero e idade antes de calcular o IMC.

## Recursos

- 📊 Seleção de gênero com indicadores de cor.
- 📅 Entrada de idade com um teclado numérico personalizado.
- 📱 Interface de usuário responsiva e interativa.
- 🔄 Navegação simples e tratamento de erros.

## Capturas de Tela

![home](https://cdn.discordapp.com/attachments/775454358783524885/1267240270039089184/Oneplus-Nord-2-localhost.png?ex=66a810f8&is=66a6bf78&hm=db66cdb95d05b89d1958725dcb48e67269ba91c364304ab8831ecbd3dee1a5c4&,)
![Seleção de Gênero](https://cdn.discordapp.com/attachments/775454358783524885/1267240270701920407/Oneplus-Nord-2-localhost_1.png?ex=66a810f8&is=66a6bf78&hm=4b5a105711dc9d03a05b05d612f5210ee27170ad80fc9fcd9bb6ca3b3a3d0c8c&)
![Entrada de Idade](https://cdn.discordapp.com/attachments/775454358783524885/1267240271515484201/Oneplus-Nord-2-localhost_3.png?ex=66a810f8&is=66a6bf78&hm=787bfb78fca39fad11d6a55f95ebc21ea57e747c2329b0f2fbca78130c483a9b&)
![Tela de Resultado](https://cdn.discordapp.com/attachments/775454358783524885/1267240271054377153/Oneplus-Nord-2-localhost_2.png?ex=66a810f8&is=66a6bf78&hm=4dc19c0748ba0c80516c6e46e33f072ffd36a9607d1e3f45b45ef9f61b735d26&)

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/kaiketorres/Calculadora-imc-React-native.git
   cd Calculadora-imc-React-native
   ```

2. **Clone o repositório:**
   ```bash
   npm install
   ```
3. **Inicie a aplicação:**

   ```bash
   npm start
   ```

4. **Execute a aplicação em um emulador ou dispositivo físico:**
   ```bash
   npm run android
   #ou 
   npm run ios

5. **Para visualizar o aplicativo usando o Expo:**
   ```bash
   Abra o Expo Go em seu dispositivo móvel.

   Escaneie o QR code exibido no terminal após o comando npm start.
## Introdução

Selecione seu gênero tocando no ícone correspondente (masculino ou feminino).
Digite sua idade usando o teclado numérico fornecido.
Toque no botão 'GO' para navegar até a tela de cálculo do IMC.
Veja seu resultado de IMC junto com as recomendações de saúde relevantes.

## Tecnologias Utilizadas

React Native: Para construção do aplicativo móvel.
Expo: Para facilitar o desenvolvimento e testes.
React Navigation: Para gerenciar a navegação dentro do aplicativo.
react-native-modal: Para criar modais de alerta personalizados.
react-native-vector-icons: Para adicionar ícones ao aplicativo.

## Estrutura do Projeto
```

IMC-Calculator/
├── assets/
│   └── images/
│       └── ... (imagens usadas no app)
├── components/
│   └── CustomAlert.js
├── screens/
│   ├── HomeScreen.js
│   └── GeneroScreen.js
│   └── CalcScreen.js
│   └── ResultScreen.js
├── styles/
│   └── styles.js
├── App.js
├── package.json
└── README.md
```
## Melhorias Futuras

🌐 Adicionar suporte a múltiplos idiomas.

🩺 Implementar recomendações de saúde mais detalhadas com base no IMC.

🎨 Adicionar animações para melhorar a experiência do usuário.

🔗 Integrar com APIs de saúde para resultados mais precisos e personalizados.

## Contribuições

Contribuições são bem-vindas! Se você tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Contato

Para qualquer dúvida ou consulta, por favor entre em contato:

Nome: Kaike Torres da Silva
Email: kaiketorresdasilva@gmail.com

Muito obrigado por conferir meu projeto! 😊
