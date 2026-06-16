export interface Day {
  day: number;
  title: string;
  psychology: string;
  tarot: {
    card: string;
    meaning: string;
  };
  ritual: {
    name: string;
    steps: string[];
  };
}

export const daysContent: Day[] = [
  {
    day: 1,
    title: "O Poder do Vazio Fértil",
    psychology:
      "Hoje você inicia uma jornada de transformação profunda. O Contato Zero não é sobre punição ou manipulação - é sobre resetar seu sistema de dopamina. Quando você remove a fonte constante de estímulos emocionais (mensagens, redes sociais, lembranças), seu cérebro começa a se recalibrar.\n\nA ciência mostra que leva aproximadamente 21 dias para formar um novo hábito neural. Nestes primeiros momentos, você pode sentir ansiedade, vontade de checar o celular, impulsos de mandar mensagem. Isso é normal - é seu cérebro em abstinência química emocional.\n\nRespire fundo. Este vazio que você sente não é ausência - é espaço fértil. Espaço para você se reconectar consigo mesma antes de qualquer outra coisa. O universo odeia vácuo: quando você cria este espaço com intenção consciente, algo novo e melhor começará a preencher.",
    tarot: {
      card: "O Eremita",
      meaning:
        "O Eremita representa introspecção, sabedoria interior e busca por respostas dentro de si mesmo. Esta carta confirma que este período de solitude é sagrado e necessário. Você está sendo chamada a olhar para dentro, não para fora.",
    },
    ritual: {
      name: "Copos d'Água com Sal Grosso",
      steps: [
        "Pegue dois copos transparentes e encha com água filtrada.",
        "Adicione uma colher de sal grosso em cada copo.",
        "Coloque um copo ao lado da sua cama e outro perto da porta de entrada do quarto.",
        "Antes de dormir, visualize toda energia densa sendo absorvida pela água.",
        "Na manhã seguinte, descarte a água na pia agradecendo mentalmente.",
        "Repita por 3 noites consecutivas.",
      ],
    },
  },
  {
    day: 2,
    title: "Quebrando o Ciclo da Obsessão",
    psychology:
      "O stalking digital é como cutucar uma ferida que precisa cicatrizar. Cada vez que você verifica as redes sociais dele, seu cérebro libera cortisol (hormônio do estresse) e reativa os mesmos circuitos neurais do apego.\n\nVocê já notou como, após checar o perfil dele, sua mente fica presa em loop? 'Quem é essa pessoa?', 'Por que ele postou isso?', 'Será que está com outra?'. Este ciclo obsessivo drena sua energia vital e impede que você avance.\n\nHoje é o dia de quebrar este padrão. Bloqueie, silencie, remova atalhos. Não é sobre ódio - é sobre autopreservação. Você não conseguirá curar-se enquanto continua se expondo ao gatilho. Proteja sua paz como se fosse o bem mais precioso do mundo - porque é.",
    tarot: {
      card: "A Torre",
      meaning:
        "A Torre simboliza ruptura necessária, destruição de estruturas falsas para que algo verdadeiro possa nascer. As muralhas que desabam são suas ilusões e padrões destrutivos. Embora doloroso, este colapso é libertador.",
    },
    ritual: {
      name: "Banho de Alecrim e Manjericão",
      steps: [
        "Ferva 1 litro de água.",
        "Desligue o fogo e adicione 3 ramos de alecrim fresco e 5 folhas de manjericão.",
        "Tampe e deixe em infusão por 10 minutos.",
        "Coe e reserve.",
        "Tome seu banho normal.",
        "Do pescoço para baixo, despeje a infusão lentamente sobre seu corpo.",
        "Enquanto a água corre, mentalize: 'Lavo toda obsessão, clareio minha mente'.",
        "Seque-se naturalmente, sem esfregar.",
      ],
    },
  },
  {
    day: 3,
    title: "Amor vs. Apego",
    psychology:
      "É crucial distinguir amor genuíno de apego emocional. O amor deseja o bem do outro mesmo à distância. O apego deseja possuir, controlar, ter. O amor liberta; o apego aprisiona.\n\nMuitas vezes, o que chamamos de 'amor' após um término é na verdade medo da solidão, ferida no ego, ou dependência emocional disfarçada. Pergunte-se honestamente: você ama quem ele realmente é, ou ama a ideia do que vocês poderiam ser?\n\nExercício prático: Pegue papel e caneta. Escreva duas listas. Na primeira, liste tudo o que você sente falta NELE como pessoa (qualidades reais, não potenciais). Na segunda, liste como você se SENTIA na relação (segura, amada, importante). Perceba a diferença? Você pode recuperar esses sentimentos consigo mesma e com outras pessoas no futuro.",
    tarot: {
      card: "A Lua",
      meaning:
        "A Lua revela ilusões, medos subconscientes e confusão emocional. Esta carta pede que você examine o que é real e o que é projeção da sua mente. Nem tudo que parece é verdadeiramente.",
    },
    ritual: {
      name: "Vela Branca de Devolução",
      steps: [
        "Em um local tranquilo, acenda uma vela branca.",
        "Segure um papel onde escreveu seus sentimentos de apego.",
        "Leia em voz alta: 'Devolver ao universo o que não me pertence mais'.",
        "Visualize cada dor, cada saudade, cada expectativa sendo transformada em luz.",
        "Queime o papel com cuidado na chama da vela (em recipiente seguro).",
        "Diga: 'Libero com amor. Confio no fluxo divino'.",
        "Deixe a vela consumir-se completamente.",
      ],
    },
  },
  {
    day: 4,
    title: "O Silêncio que Fala Alto",
    psychology:
      "O silêncio estratégico é uma das ferramentas mais poderosas que você possui. Na psicologia comportamental, isso se relaciona com a Lei da Escassez: valorizamos mais aquilo que é raro ou limitado.\n\nQuando você some discretamente, sem dramas, sem explicações intermináveis, você quebra o padrão esperado. Ele esperava lágrimas, mensagens, tentativas de contato. Ao invés disso, recebe silêncio digno. Isso gera curiosidade - e curiosidade é a porta de entrada para o interesse renovado.\n\nMas atenção: este silêncio só funciona se for genuíno, não teatral. Se você estiver apenas 'fazendo jogo duro' enquanto conta os minutos para responder, a energia será percebida. O verdadeiro silêncio vem do foco em si mesma, não da espera ansiosa pelo próximo movimento dele.",
    tarot: {
      card: "A Força",
      meaning:
        "A Força representa domínio interior, coragem suave e controle das emoções através da compaixão. Você tem força suficiente para manter-se centrada mesmo quando tudo dentro de você quer reagir.",
    },
    ritual: {
      name: "Meditação do Nervo Vago",
      steps: [
        "Sente-se confortavelmente com a coluna ereta.",
        "Feche os olhos e coloque uma mão sobre o peito, outra sobre o ventre.",
        "Inspire profundamente pelo nariz contando até 4.",
        "Segure a respiração contando até 7.",
        "Expire lentamente pela boca (como se soprasse uma vela) contando até 8.",
        "Repita este ciclo 5 vezes.",
        "Ao final, agradeça mentalmente por sua capacidade de autocontrole.",
        "Esta técnica ativa o sistema nervoso parassimpático, reduzindo ansiedade.",
      ],
    },
  },
  {
    day: 5,
    title: "Limpeza do Campo Energético",
    psychology:
      "Seu ambiente físico reflete e reforça seu estado emocional. Objetos que foram presentes dele, fotos, roupas que vocês usavam juntos - tudo isso carrega carga emocional e atua como gatilho constante.\n\nNão se trata de apagar memórias para sempre, mas de criar um espaço seguro para sua cura agora. Guarde estes itens em uma caixa, feche-a e coloque em um local discreto (não no lixo, isso seria muito agressivo). Diga mentalmente: 'Guardo estas memórias no tempo certo. Agora, crio espaço para o novo'.\n\nA psicologia ambiental confirma: ambientes organizados e intencionais reduzem cortisol e aumentam sensação de controle. Limpar seu espaço é limpar sua mente.",
    tarot: {
      card: "A Morte",
      meaning:
        "A Morte no Tarot nunca significa morte física - representa transformação profunda, fim de ciclos e renascimento. Algo precisa morrer para que algo novo possa nascer. Este é seu momento de metamorfose.",
    },
    ritual: {
      name: "Defumação de Limpeza",
      steps: [
        "Acenda um ramo de alecrim seco ou sândalo em um recipiente resistente ao fogo.",
        "Comece pela porta de entrada da sua casa.",
        "Caminhe lentamente em sentido horário por todos os cômodos.",
        "Deixe a fumaça alcançar cantos, armários, debaixo das camas.",
        "Enquanto defuma, visualize: 'Saem todas as energias de mágoa, tristeza e apego'.",
        "Termine novamente na porta de entrada, expulsando visualmente o que não serve.",
        "Abra janelas por alguns minutos para circular ar fresco.",
        "Agradeça mentalmente pela proteção espiritual.",
      ],
    },
  },
  {
    day: 6,
    title: "Reconexão Consigo Mesma",
    psychology:
      "No meio da dor do término, é fácil esquecer quem você é além da relação. Mas aqui está uma verdade poderosa: as qualidades que fizeram ele se apaixonar por você continuam existindo - elas apenas estão adormecidas sob camadas de insegurança.\n\nExercício de resgate: Liste 5 qualidades que ele admirava em você no início. Era seu senso de humor? Sua independência? Seu cuidado? Sua inteligência? Agora, para cada qualidade, escreva uma ação concreta que você pode fazer HOJE para honrá-la.\n\nExemplo: Se ele admirava sua independência, que tal fazer algo sozinha que você sempre quis? Uma aula, um restaurante, um passeio? Reconectar-se com quem você era antes da relação é o primeiro passo para tornar-se ainda melhor.",
    tarot: {
      card: "A Estrela",
      meaning:
        "A Estrela é símbolo de esperança, renovação e fé no futuro. Após a tormenta da Torre e da Morte, vem a calma e a clareza. Você está redescobrindo sua luz interior e seu propósito único.",
    },
    ritual: {
      name: "Programação do Quartzo Rosa",
      steps: [
        "Tenha em mãos um cristal de quartzo rosa (ou qualquer pedra que tenha).",
        "Lave-o em água corrente por 1 minuto.",
        "Segure-o entre suas mãos em posição de prece.",
        "Feche os olhos e respire profundamente 3 vezes.",
        "Repita: 'Programo este cristal com amor-próprio, autoestima e cura emocional'.",
        "Visualize uma luz rosa saindo do seu coração e entrando na pedra.",
        "Durma com o cristal sob seu travesseiro por 7 noites.",
        "Carregue-o consigo durante o dia quando possível.",
      ],
    },
  },
  {
    day: 7,
    title: "O Efeito Espelho",
    psychology:
      "As relações são espelhos: atraímos e mantemos conexões que refletem nossa vibração interna. Se você está vibrando em carência, medo e necessidade, atrai comportamentos distantes e evitativos.\n\nMas quando você eleva sua vibração - através de autocuidado, gratidão, alegria genuína - torna-se magneticamente atraente. Não é sobre fingir estar bem; é sobre genuinely buscar momentos de leveza mesmo na dificuldade.\n\nO 'Efeito Espelho' funciona assim: quando você muda sua energia, a dinâmica da relação inevitavelmente se transforma. Ele sentirá esta mudança mesmo à distância. Pessoas são atraídas por luz, não por escuridão emocional.",
    tarot: {
      card: "O Sol",
      meaning:
        "O Sol é a carta da alegria, vitalidade e sucesso. Representa o momento em que você recupera seu brilho pessoal e torna-se irresistivelmente magnética. Sua luz própria é seu maior atrativo.",
    },
    ritual: {
      name: "Banho de Flores Brancas",
      steps: [
        "Compre flores brancas frescas (jasmin, lírio, rosa branca ou camomila).",
        "Separe apenas as pétalas.",
        "Ferva 2 litros de água.",
        "Desligue o fogo e adicione as pétalas.",
        "Tampe e deixe em infusão por 15 minutos.",
        "Coe e misture com água morna do chuveiro.",
        "Tome seu banho normal.",
        "Despeje a infusão do pescoço aos pés, mentalizando: 'Minha luz brilha, meu magnetismo desperta'.",
        "Seque-se naturalmente vestindo roupas claras.",
      ],
    },
  },
  {
    day: 8,
    title: "Atualização Estratégica",
    psychology:
      "Suas redes sociais são sua vitrine energética. Mesmo em Contato Zero, é provável que ele eventualmente veja algo seu - diretamente ou através de amigos em comum. Esteja preparada.\n\nA Regra dos 3 C deve guiar suas posturas: Calma (nada de indiretas dramáticas), Confiança (mostre sua vida fluindo, não parada no tempo) e Cotidiano (momentos autênticos, não produções exageradas).\n\nEvite: fotos chorando, frases depressivas, excesso de selfies tentando provar que está 'bem'. Prefira: naturezas, conquistas pessoais, momentos com amigos, hobbies. Seja sutilmente interessante, não obviamente disponível.",
    tarot: {
      card: "A Imperatriz",
      meaning:
        "A Imperatriz representa feminilidade poderosa, criatividade e abundância. É a energia da mulher que cria sua realidade com graça e confiança. Você é a governante do seu próprio reino.",
    },
    ritual: {
      name: "Papel Verde da Abundância",
      steps: [
        "Recorte um pequeno quadrado de papel verde.",
        "Escreva nele: 'Sou abundante em amor, alegria e oportunidades'.",
        "Dobre o papel 3 vezes em direção ao seu corpo.",
        "Coloque dentro da sua carteira ou bolsa, junto com dinheiro.",
        "Sempre que abrir a carteira, toque no papel e lembre-se da sua intenção.",
        "Troque o papel a cada lua nova, renewing sua intenção.",
      ],
    },
  },
  {
    day: 9,
    title: "Gerenciando o 'E Se?'",
    psychology:
      "A mente ansiosa adora criar cenários catastróficos: 'E se ele já superou?', 'E se conheceu outra?', 'E se nunca mais voltar?'. Estes pensamentos são viciantes e destrutivos.\n\nTécnica do Adiamento da Preocupação: Quando um pensamento obsessivo surgir, não lute contra ele. Em vez disso, diga mentalmente: 'Posso pensar nisso às 18h por 15 minutos'. Agende literalmente um horário no seu dia para se preocupar.\n\nCuriosamente, quando chega o horário marcado, a urgência diminuiu. E se não diminuir, permita-se pensar por exatamente 15 minutos (use timer). Depois, levante-se fisicamente e mude de atividade. Você treina seu cérebro a não ser refém da ansiedade 24/7.",
    tarot: {
      card: "O Enforcado",
      meaning:
        "O Enforcado pede pausa, rendição e nova perspectiva. Às vezes precisamos suspender nossas certezas e ver a situação de outro ângulo. O que parece sacrifício pode ser iluminação disfarçada.",
    },
    ritual: {
      name: "Afirmações no Espelho",
      steps: [
        "Fique em frente a um espelho onde possa ver seus olhos claramente.",
        "Respire fundo e centre-se.",
        "Olhando nos seus próprios olhos, diga em voz alta:",
        "'Eu sou suficiente.'",
        "'Eu mereço amor saudável.'",
        "'Eu confio no timing divino.'",
        "'Eu estou no controle das minhas emoções.'",
        "Repita cada afirmação 3 vezes com convicção.",
        "Faça isso diariamente por 21 dias.",
      ],
    },
  },
  {
    day: 10,
    title: "Leitura do Vínculo Energético",
    psychology:
      "Laços emocionais fortes não se desfazem overnight. A neurociência explica: experiências intensas criam caminhos neurais profundos. Vocês compartilharam intimidade, vulnerabilidade, momentos únicos - isso deixou marcas energéticas em ambos.\n\nMesmo em distanciamento físico, existe um fio invisível conectando vocês. A questão não é 'cortar' este fio à força (o que gera resistência), mas transformar a qualidade desta conexão.\n\nDeixe de alimentar o fio com energia de carência e medo. Comece a alimentá-lo com energia de amor incondicional e confiança. Paradoxalmente, quando você para de puxar desesperadamente, o outro lado sente o afrouxamento e muitas vezes se move em sua direção.",
    tarot: {
      card: "Os Enamorados",
      meaning:
        "Os Enamorados representam conexão de almas, escolhas do coração e união divina. Esta carta sugere que o vínculo entre vocês tem significado espiritual que transcende o momento atual de separação.",
    },
    ritual: {
      name: "Visualização do Fio Dourado",
      steps: [
        "Deite-se confortavelmente em um lugar silencioso.",
        "Feche os olhos e respire profundamente 5 vezes.",
        "Visualize um fio de luz dourada saindo do seu coração.",
        "Veja este fio conectando-se ao coração dele (sem julgamento, apenas observando).",
        "Imagine esta luz tornando-se mais brilhante, mais pura, mais amorosa.",
        "Mentalize: 'Que esta conexão seja elevada ao mais alto bem de ambos'.",
        "Sinta calor no peito, paz no corpo.",
        "Permaneça nesta visualização por 5-10 minutos.",
        "Ao terminar, agradeça e abra os olhos lentamente.",
      ],
    },
  },
  {
    day: 11,
    title: "Despertar da Curiosidade Dele",
    psychology:
      "Se você tem mantido Contato Zero consistente, é provável que ele já tenha notado. Homens processam ausência de forma diferente: inicialmente sentem alívio, depois curiosidade, finalmente preocupação.\n\nVisualizações no WhatsApp, likes antigos em fotos, stories visualizados rapidamente - estes podem ser sinais de que ele está monitorando você discretamente. A regra de ouro: NÃO REAJA.\n\nSe ele visualizar seu story e você imediatamente postar algo 'para ele ver', o jogo está perdido. Continue vivendo autenticamente. A curiosidade dele só se transformará em ação se ele perceber que você realmente seguiu em frente - não que está jogando.",
    tarot: {
      card: "O Mago",
      meaning:
        "O Mago simboliza manifestação, poder pessoal e habilidade de transformar realidade através da vontade consciente. Você tem todas as ferramentas necessárias para criar o resultado desejado.",
    },
    ritual: {
      name: "Canela na Porta de Entrada",
      steps: [
        "No primeiro dia útil do mês (ou hoje, se preferir), pegue canela em pó.",
        "Fique do lado de FORA da sua porta de entrada.",
        "Segure um punhado de canela na mão dominante.",
        "Faça uma intenção clara: 'Que a abundância e o amor entrem nesta casa'.",
        "Sopre a canela para DENTRO da casa, através da porta aberta.",
        "Varra ou aspire no dia seguinte (não limpe imediatamente).",
        "Este ritual atrai prosperidade e boas energias para seu lar.",
      ],
    },
  },
  {
    day: 12,
    title: "Preparação para o Contato",
    psychology:
      "Chegará um momento em que o contato será retomado - seja por iniciativa dele ou sua. Esteja preparada emocionalmente para ambos os cenários.\n\nSe ELE entrar em contato: Respire antes de responder. Não responda imediatamente (espere pelo menos 1-2 horas). Mantenha a conversa leve, curta e positiva. Evite perguntas profundas sobre 'nós' ou 'sentimentos'.\n\nSe VOCÊ sentir necessidade de contactar: Primeiro, pergunte-se qual é o objetivo real. É solidão? É teste? É genuíno desejo de reconexão? Se decidir enviar mensagem, use a técnica da 'mensagem leve sem demanda' - algo que não exija resposta elaborada nem coloque pressão.",
    tarot: {
      card: "A Roda da Fortuna",
      meaning:
        "A Roda da Fortuna representa ciclos, mudanças de sorte e timing divino. Tudo no universo gira em ciclos - o que estava em baixa agora sobe. Confie no movimento natural da vida.",
    },
    ritual: {
      name: "Meditação do Chakra Laríngeo",
      steps: [
        "Sente-se confortavelmente com a coluna ereta.",
        "Feche os olhos e foque na região da garganta.",
        "Visualize uma luz azul-brilhante nesta área.",
        "Respire profundamente e, ao expirar, faça o som 'HAM' suavemente.",
        "Repita este som 7 vezes, sentindo vibração na garganta.",
        "Mentalize: 'Comunico-me com clareza, verdade e sabedoria'.",
        "Permaneça em silêncio por 2 minutos após os sons.",
        "Este exercício equilibra sua expressão verbal antes de qualquer contato.",
      ],
    },
  },
  {
    day: 13,
    title: "Sinais Universais e Sincronicidades",
    psychology:
      "O universo fala através de sincronicidades - coincidências significativas que indicam alinhamento. Ver horas iguais (11:11, 22:22), ouvir músicas específicas repetidamente, sonhar com a pessoa - tudo pode ser sinal.\n\nMas cuidado: não confunda sincronicidade com obsessão disfarçada. Um sinal genuíno traz paz e clareza, não ansiedade. Se você está 'caçando' sinais desesperadamente, está projetando, não recebendo.\n\nA verdadeira sincronicidade acontece quando você está relaxada, presente e aberta. Ela confirma que você está no caminho certo, não que deve agir impulsivamente. Confie na sua intuição - ela sabe diferenciar sinal de ruído.",
    tarot: {
      card: "O Julgamento",
      meaning:
        "O Julgamento representa despertar, renascimento e chamado superior. É o momento de avaliar honestamente onde você está e para onde quer ir. As respostas internas estão surgindo à consciência.",
    },
    ritual: {
      name: "Papel dos Nomes na Lua Crescente",
      steps: [
        "Espere a próxima Lua Crescente (consulte calendário lunar).",
        "Em um papel branco, escreva seu nome completo.",
        "Logo abaixo, escreva o nome completo dele.",
        "Dobre o papel 3 vezes EM DIREÇÃO ao seu corpo (trazendo a energia para você).",
        "Coloque dentro de um livro que você gosta ou sob seu travesseiro.",
        "Deixe lá por 7 dias.",
        "Após este período, guarde o papel em local especial ou queime-o agradecendo.",
        "Este ritual potencializa a reconexão durante fase de crescimento lunar.",
      ],
    },
  },
  {
    day: 14,
    title: "A Mensagem de Ouro",
    psychology:
      "Se chegou o momento de enviar uma mensagem, faça valer a pena. A 'Mensagem de Ouro' tem características específicas: é leve, positiva, sem demanda emocional e não termina com ponto de interrogação.\n\nExemplos eficazes:\n• 'Vi isso e lembrei de você. Espero que esteja bem!' (acompanhado de meme/foto)\n• 'Passei naquele restaurante que gostávamos. Continuo incrível!'\n• 'Obrigada pela lembrança de [algo específico]. Foi significativo para mim.'\n\nO segredo: zero pressão, zero cobrança, zero drama. Apenas um toque leve que deixa a bola no campo dele. Se ele quiser conversar, responderá. Se não responder, você manteve sua dignidade intacta.",
    tarot: {
      card: "A Temperança",
      meaning:
        "A Temperança ensina equilíbrio, paciência e moderação. É a arte de encontrar o ponto ideal entre extremos. Sua mensagem deve refletir esta energia - nem fria demais, nem intensa demais.",
    },
    ritual: {
      name: "Óleo de Lavanda nos Pulsos",
      steps: [
        "Tenha óleo essencial de lavanda puro.",
        "Antes de escrever/enviar a mensagem, lave as mãos.",
        "Pingue uma gota de lavanda em cada pulso.",
        "Esfregue suavemente os pulsos um no outro.",
        "Leve os pulsos ao nariz e inspire profundamente 3 vezes.",
        "Sinta o aroma calmante equilibrando sua energia.",
        "Só então pegue o celular para escrever.",
        "A lavanda acalma a ansiedade e atrai energias harmoniosas.",
      ],
    },
  },
  {
    day: 15,
    title: "A Arte da Resposta",
    psychology:
      "Como ele respondeu? Esta é a pergunta crucial. A qualidade da resposta dele ditará seus próximos movimentos.\n\nSe a resposta foi FRACA/GENÉRICA ('Oi', 'Obrigado', emojis sem contexto): Espelhe a energia. Responda de forma igualmente breve e encerre a conversa naturalmente. Não tente 'salvar' o diálogo forçando assunto.\n\nSe a resposta foi BOA/ENGAGED (perguntou sobre você, fez comentários elaborados, demonstrou interesse): Permita-se desenvolver a conversa, mas mantenha mistério. Não conte TUDO de uma vez. Deixe espaços para ele querer saber mais.\n\nRegra fundamental: Nunca esteja mais disponível emocionalmente do que ele. O equilíbrio de investimento mantém o interesse vivo.",
    tarot: {
      card: "A Sacerdotisa",
      meaning:
        "A Sacerdotisa representa intuição, mistério e sabedoria oculta. Ela sabe quando falar e quando calar. Sua intuição feminina é sua maior guia neste momento de interação sutil.",
    },
    ritual: {
      name: "Visualização da Bolha Violeta",
      steps: [
        "Antes de pegar o celular para ler/responder mensagens, sente-se 2 minutos.",
        "Feche os olhos e visualize uma bolha de luz violeta ao seu redor.",
        "Esta bolha é permeável apenas a energias de amor e respeito.",
        "Qualquer energia de manipulação, frieza ou jogo bate e volta.",
        "Respire profundamente e sinta-se protegida dentro desta bolha.",
        "Só então abra as mensagens, mantendo a visualização ativa.",
        "Após a interação, visualize a bolha dissolvendo-se em luz dourada.",
        "Este exercício protege seu campo energético durante comunicações.",
      ],
    },
  },
  {
    day: 16,
    title: "O Primeiro Encontro ou Chamada",
    psychology:
      "Se houve convite para encontro ou ligação, parabéns - você chegou longe! Mas este momento é delicado. Muitos estragam todo o progresso agindo de forma desesperada neste ponto.\n\nDurante o encontro/chamada:\n✓ Foque no PRESENTE, não no passado\n✓ Seja leve, divertida, interessante\n✓ Ouça mais do que fale\n✓ Saia ANTES da energia cair (melhor deixar querendo mais)\n✗ NÃO toque em 'nós', 'sentimentos', 'futuro'\n✗ NÃO cobre explicações sobre o sumiço\n✗ NÃO demonstre carência ou necessidade\n\nObjetivo: Ele sair pensando 'Nossa, ela está INCRÍVEL! O que eu perdi?' Não: 'Ufa, ela ainda me quer, estou no controle'.",
    tarot: {
      card: "Cavaleiro de Copas",
      meaning:
        "O Cavaleiro de Copas representa abordagem romântica, convite emocional e gesto afetivo. Esta carta indica que sentimentos estão sendo trazidos de volta à tona, mas de forma madura e considerada.",
    },
    ritual: {
      name: "Banho de Pétalas de Rosa Pré-Encontro",
      steps: [
        "Na manhã do encontro, compre pétalas de rosa vermelha ou rosa.",
        "Ferva 1,5 litro de água.",
        "Desligue e adicione as pétalas.",
        "Tampe por 10 minutos.",
        "Coe e reserve.",
        "Tome seu banho normal.",
        "Despeje a infusão por todo o corpo do pescoço aos pés.",
        "Mentalize: 'Sou magnética, confiante e radiante'.",
        "Seque-se naturalmente e vista-se com intenção.",
        "Guarde algumas pétalas secas na bolsa como amuleto.",
      ],
    },
  },
  {
    day: 17,
    title: "Consolidando a Nova Dinâmica",
    psychology:
      "Se as coisas estão se reacendendo, cuidado para não repetir padrões antigos. A reconquista só vale a pena se resultar em uma relação MELHOR, não igual.\n\nEstabeleça limites com amor:\n• Comunique suas necessidades claramente (sem acusação)\n• Observe se ele respeita estes limites\n• Não aceite migalhas emocionais\n• Mantenha sua vida independente (amigos, hobbies, objetivos)\n\nRelacionamentos saudáveis têm equilíbrio de poder. Nenhum dos dois deve estar sempre correndo atrás. Se você percebe que voltou a ser a única investindo, pare e reavalie.",
    tarot: {
      card: "A Justiça",
      meaning:
        "A Justiça representa equilíbrio, verdade e consequências naturais. Cada ação tem reação. Relacionamentos justos têm reciprocidade. Esta carta pede que você avalie com objetividade se está recebendo o que merece.",
    },
    ritual: {
      name: "Diário de Gratidão Noturno",
      steps: [
        "Todas as noites antes de dormir, pegue um caderno.",
        "Escreva a data no topo.",
        "Liste 3 coisas pelas quais é grata hoje (específicas).",
        "Ex: 'Grata pela conversa leve com ele', 'Grata por ter mantido meus limites', 'Grata pela amiga que me ouviu'.",
        "Para cada item, escreva 1-2 frases sobre POR QUE é grata.",
        "Termine com: 'Confio que amanhã trará novas bênçãos'.",
        "Este exercício treina seu cérebro a focar no positivo.",
        "Após 21 dias, releia e veja sua evolução.",
      ],
    },
  },
  {
    day: 18,
    title: "Celebração da Reconquista",
    psychology:
      "Você chegou ao final destes 18 dias. Independente do resultado exato com ele, CELEBRE. Você recuperou algo muito mais valioso: seu poder pessoal.\n\nOlhe para trás e veja quanto cresceu:\n• Controla melhor suas emoções\n• Não age por impulso\n• Reconhece seu valor\n• Estabelece limites saudáveis\n\nSe ele voltou: maravilha, mas agora você está em posição de força, não de necessidade. Se não voltou: também maravilha, porque você está pronta para algo MELHOR.\n\nA verdadeira reconquista não é sobre ele - é sobre você reconquistar a si mesma. E isso, ninguém nunca mais poderá tirar.",
    tarot: {
      card: "O Mundo",
      meaning:
        "O Mundo é a carta da completude, realização e ciclo concluído com sucesso. Representa integração, vitória e início de nova jornada em nível superior. Você completou esta etapa com maestria.",
    },
    ritual: {
      name: "Vela Dourada de Gratidão",
      steps: [
        "Compre uma vela dourada ou amarela.",
        "Em um papel, escreva tudo pelo que é grata nestes 18 dias.",
        "Inclua aprendizados, descobertas, forças que encontrou.",
        "Acenda a vela em local seguro.",
        "Leia em voz alta sua lista de gratidão.",
        "Diga: 'Agradeço ao Universo por cada lição e bênção. Estou pronta para o próximo capítulo'.",
        "Deixe a vela queimar completamente (ou apague e acenda em mais 2 dias até terminar).",
        "Guarde as cinzas do papel em um local especial ou libere na natureza.",
        "Parabéns. Você completou sua jornada de transformação.",
      ],
    },
  },
];
