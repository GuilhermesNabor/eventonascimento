function exibirEventos() {
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    const eventosContainer = document.getElementById('eventosContainer');
    eventosContainer.innerHTML = '';

    if (isNaN(dataNascimento.getTime())) {
      eventosContainer.innerHTML = 'Por favor, insira uma data válida.';
      return;
    }

    const anoNascimento = dataNascimento.getFullYear();

    const eventos = [
      
      { ano: 2000, evento: 'The Sims veio ao mundo.' },
      { ano: 2000, evento: 'Estreia Caldeirão do Huck.' },
      { ano: 2000, evento: 'Bug do Milénio.' },
      { ano: 2000, evento: 'Conflitos militares envolvendo os Estados Unidos e países do Oriente Médio "Guerra ao Terror".' },
      { ano: 2000, evento: 'A era do medo.' },

      { ano: 2001, evento: 'Ataques terroristas de 11 de setembro.' },
      { ano: 2001, evento: '“Roberto Carlos - Acústico” foi o CD mais vendido do ano.' },
      { ano: 2001, evento: 'GOL realizou o primeiro voo.' },
      { ano: 2001, evento: '“Harry Potter e a Pedra Filosofal” foi líder das bilheterias no cinema.' },
      { ano: 2001, evento: 'Algumas regiões do país adotaram o racionamento de energia elétrica.' },
      
      { ano: 2002, evento: 'Foi o ano que estreou o Big Brother Brasil.' },
      { ano: 2002, evento: 'Morreu Claudinho, da dupla com Buchecha.' },
      { ano: 2002, evento: 'George W. Bush era o presidente dos Estados Unidos.' },
      { ano: 2002, evento: 'Aconteceu o caso de Suzane von Richthofen.' },
      { ano: 2002, evento: 'Começou a circular no Brasil a nota de R$ 20.' },

      { ano: 2003, evento: 'Lula inicia seu 1º mandato.' },
      { ano: 2003, evento: 'Acidente do ônibus espacial ou vaivém Columbia.' },
      { ano: 2003, evento: 'Schumacher bateu o recorde de títulos mundiais de Fórmula 1.' },
      { ano: 2003, evento: 'Eclipse lunar total visto principalmente nas Américas.' },
      { ano: 2003, evento: 'Lançado o Acústico MTV: Charlie Brown Jr. considerado um dos melhores acústicos do Brasil e ganhando certificado de Platina.' },

      { ano: 2004, evento: 'Criação do facebook.' },
      { ano: 2004, evento: 'Furacão Catarina.' },
      { ano: 2004, evento: 'Jogos Olímpicos de Verão em Atenas.' },
      { ano: 2004, evento: 'Terremoto seguido de Tsunamis destrói países no sudeste asiático.' },
      { ano: 2004, evento: 'Criação do Youtube.' },

      { ano: 2005, evento: 'A Espanha aprova o casamento homossexual e a adoção de crianças por esses casais.' },
      { ano: 2005, evento: 'Morre o príncipe Rainier 3º aos 81 anos.' },
      { ano: 2005, evento: 'Morre o papa João Paulo 2º aos 84 anos.' },
      { ano: 2005, evento: 'A população brasileira vota não pela proibição do comércio de armas de fogo no país.' },
      { ano: 2005, evento: 'Ano das catástrofes naturais.' },

      { ano: 2006, evento: 'Sob ataque (PCC).' },
      { ano: 2006, evento: 'A velocidade de apuração dos votos foi a marca do segundo turno das eleições.' },
      { ano: 2006, evento: 'Presidente Luiz Inácio Lula da Silva sanciona a Lei Maria da Penha.' },
      { ano: 2006, evento: 'Luiz Inácio Lula da Silva é reeleito presidente do Brasil com mais de 58 milhões de votos.' },
      { ano: 2006, evento: 'O voo 1907 da Gol cai no estado do Mato Grosso após ser atingido no ar pela asa de um jato Legacy da Embraer.' },

      { ano: 2007, evento: 'A Bulgária e a Roménia aderem oficialmente à União Europeia.' },
      { ano: 2007, evento: 'NASA confirma presença de lagos de metano em Titã.' },
      { ano: 2007, evento: 'Apple lança o celular iPhone.' },
      { ano: 2007, evento: 'A França abole constitucionalmente a pena de morte.' },
      { ano: 2007, evento: 'Lançado o Playstation 3 na Europa.' },

      { ano: 2008, evento: 'Crise financeira global.' },
      { ano: 2008, evento: 'Fidel Castro renuncia à presidência e o comando das forças armadas em Cuba.' },
      { ano: 2008, evento: 'O jogo Grand Theft Auto IV é lançado para PlayStation 3 e Xbox 360.' },
      { ano: 2008, evento: 'Eclipse total do Sol.' },
      { ano: 2008, evento: 'Google lança o navegador Google Chrome.' },

      { ano: 2009, evento: 'O Euro entra em circulação na Eslováquia, substituindo a coroa eslovaca.' },
      { ano: 2009, evento: 'Satélites da Rússia e dos Estados Unidos colidem no espaço, 800 km acima da Sibéria, no primeiro acidente do gênero na era espacial.' },
      { ano: 2009, evento: 'A NASA lança, com êxito, a Sonda Kepler, uma missão para encontrar exoplanetas.' },
      { ano: 2009, evento: 'Papa Bento XVI viaja pela primeira vez ao continente Africano.' },
      { ano: 2009, evento: 'A banda AC/DC retorna ao Brasil para show único no estádio do Morumbi.' },

      { ano: 2010, evento: 'EUA x China.' },
      { ano: 2010, evento: 'Terremoto mais violento da história devastou a capital do Haiti.' },
      { ano: 2010, evento: 'NASA divulga imagens inéditas da superfície do Sol.' },
      { ano: 2010, evento: 'Anunciado o primeiro transplante facial.' },
      { ano: 2010, evento: 'Argentina torna-se o primeiro país da América Latina a aprovar o casamento homossexual.' },

      { ano: 2011, evento: 'Início da Guerra Civil na Síria.' },
      { ano: 2011, evento: 'Fim do mandato de Luiz Inácio Lula da Silva como presidente do Brasil e início do mandato de Dilma Rousseff, primeira mulher a chegar a presidência do Brasil.' },
      { ano: 2011, evento: 'Steve Jobs deixa presidência da Apple.' },
      { ano: 2011, evento: 'Rede social Facebook ultrapassa o Orkut.' },
      { ano: 2011, evento: 'Microsoft apresenta a nova versão de seu sistema operacional, o Windows 8.' },

      { ano: 2012, evento: 'Japão conclui a construção da torre Tokyo Sky Tree, a mais alta do mundo.' },
      { ano: 2012, evento: 'Vladimir Putin vence eleições presidenciais na Rússia com 64% dos votos.' },
      { ano: 2012, evento: 'Psy envia pro YouTube a música Gangnam Style.' },
      { ano: 2012, evento: 'Facebook atinge um bilhão de usuários cadastrados.' },
      { ano: 2012, evento: 'Final do Calendário Maia de Contagem Longa, com o ciclo de 5125 anos, o que alguns interpretavam como o fim do mundo.' },

      { ano: 2013, evento: 'Sony descontinua a consola de video game PlayStation 2.' },
      { ano: 2013, evento: '242 pessoas morrem em um trágico incêndio ocorrido na boate Kiss.' },
      { ano: 2013, evento: 'Coreia do Norte realiza o terceiro teste nuclear de sua história.' },
      { ano: 2013, evento: 'Sony anuncia seu novo console, PlayStation 4.' },
      { ano: 2013, evento: 'Nicolás Maduro é eleito presidente da Venezuela.' },

      { ano: 2014, evento: 'Copa do Mundo.' },
      { ano: 2014, evento: 'Uma sonda espacial consegue o feito de pousar em um cometa.' },
      { ano: 2014, evento: 'Eleição presidencial de 2014 é a mais acirrada após Ditadura.' },
      { ano: 2014, evento: 'Criação do Banco dos BRICS.' },
      { ano: 2014, evento: 'Vaticano mais liberal.' },

      { ano: 2015, evento: 'O ano mais quente da história'},
      { ano: 2015, evento: 'A primavera feminista.' },
      { ano: 2015, evento: 'Estados Unidos e Cuba fazem as pazes.' },
      { ano: 2015, evento: 'A praga disseminada pelo Aedes Aegypti.' },
      { ano: 2015, evento: 'A epidemia de Ébola.' },

      { ano: 2016, evento: 'Referendo do Brexit.' },
      { ano: 2016, evento: 'Prisão de El Chapo.' },
      { ano: 2016, evento: 'Surto de Zika.' },
      { ano: 2016, evento: 'Atentados em Istambul.' },
      { ano: 2016, evento: 'Crise humanitária e guerra na Síria.' },

      { ano: 2017, evento: 'Colisão de estrelas confirma previsão de Einsten' },
      { ano: 2017, evento: 'Baleia azul.' },
      { ano: 2017, evento: 'Oumuamua.' },
      { ano: 2017, evento: 'Sete planetas como o nosso.' },
      { ano: 2017, evento: 'Um iceberg gigante se forma.' },

      { ano: 2018, evento: 'Morte de Marielle Franco, segue sem explicações.' },
      { ano: 2018, evento: 'A vitória histórica e conturbada de Bolsonaro.' },
      { ano: 2018, evento: 'Crise no sistema prisional brasileiro.' },
      { ano: 2018, evento: 'Reforma do Ensino Médio e Plano Nacional de Educação.' },
      { ano: 2018, evento: 'Prisão de Lula.' },

      { ano: 2019, evento: 'Incêndios na Floresta Amazônica.' },
      { ano: 2019, evento: 'Tragédia de Brumadinho.' },
      { ano: 2019, evento: 'Massacre de Suzano.' },
      { ano: 2019, evento: 'Lula deixa a prisão.' },
      { ano: 2019, evento: 'Prisão de Michel Temer.' },

      { ano: 2020, evento: 'Início da pandemia de COVID-19.' },
      { ano: 2020, evento: 'Primeiras mortes por coronavírus na China.' },
      { ano: 2020, evento: 'Brasil entra em quarentena. Número de mortos chega a 1.000.' },
      { ano: 2020, evento: 'Nuvem de gafanhotos na Argentina avança rumo ao Brasil.' },
      { ano: 2020, evento: 'Eleições presidenciais nos Estados Unidos: Joe Biden vence.' },

      { ano: 2021, evento: 'Vacinação em massa contra COVID-19.' },
      { ano: 2021, evento: 'Crise da falta de oxigênio atinge Manaus.' },
      { ano: 2021, evento: 'Presidente do Haiti é assassinado em casa.' },
      { ano: 2021, evento: 'Olimpíadas 2021.' },
      { ano: 2021, evento: 'Caso Lázaro.' },

      { ano: 2022, evento: 'Vigésima segunda edição dos Jogos Olímpicos de Inverno em Pequim.' },
      { ano: 2022, evento: 'Guerra da Ucrânia.' },
      { ano: 2022, evento: 'Morte da rainha Elizabeth II.' },
      { ano: 2022, evento: 'Crise política no Peru.' },
      { ano: 2022, evento: 'Surto de mpox' },

      { ano: 2023, evento: 'Tensões entre Rússia e Ucrânia.'},
      { ano: 2023, evento: 'Guerra Israel x Hamas.' },
      { ano: 2023, evento: 'Submarino desaparecido.' },
      { ano: 2023, evento: 'Posse do presidente Lula.' },
      { ano: 2023, evento: 'Prédios dos Três Poderes da República, foram invadidos.'},

      { ano: 2024, evento: 'Eleições presidenciais nos Estados Unidos.' },
      { ano: 2024, evento: 'O futuro dira.' },
      { ano: 2024, evento: 'O futuro dira.' },
      { ano: 2024, evento: 'O futuro dira.' },
      { ano: 2024, evento: 'O futuro dira.' },
    ];

    eventosContainer.innerHTML = `<h3>Eventos em ${anoNascimento}:</h3>`;
    const eventosNascimento = eventos.filter(evento => evento.ano === anoNascimento);
    if (eventosNascimento.length === 0) {
      eventosContainer.innerHTML += 'Nenhum evento significativo registrado neste ano.';
    } else {
      const listaEventos = document.createElement('ul');
      eventosNascimento.forEach(evento => {
        const itemEvento = document.createElement('li');
        itemEvento.textContent = evento.evento;
        listaEventos.appendChild(itemEvento);
      });
      eventosContainer.appendChild(listaEventos);
    }
  }