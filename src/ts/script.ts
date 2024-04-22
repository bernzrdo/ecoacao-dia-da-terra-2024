import JSConfetti from 'js-confetti';

interface Question {
    nome: string;
    material: 'metal' | 'plástico' | 'madeira' | 'outros' | 'papel/cartão' | 'cartão para alimentos líquidos' | 'vidro';
    ecoponto: 'amarelo' | 'azul' | 'verde' | 'indiferenciado' | 'outros';
    artigo: 'o' | 'a' | 'os' | 'as';
    nota?: string;
}

const QUESTIONS: Question[] = [
    {
        nome: 'Caixa de faqueiro de madeira',
        material: 'madeira',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'É deixado num ecocentro. Consulta o ecocentro mais próximo em www.centroreciclar.com'
    },
    {
        nome: 'Caixa de horto-frutícolas',
        material: 'madeira',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'É deixado num ecocentro. Consulta o ecocentro mais próximo em www.centroreciclar.com'
    },
    {
        nome: 'Computador',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'É colocado no ponto eletrão de acordo com as regras da Amb3E e da ERP. Para mais informação consulta em www.amb3e.pt'
    },
    {
        nome: 'Grande electrodoméstico',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'É deixado num ecocentro. Consulta o ecocentro mais próximo em www.centroreciclar.com'
    },
    {
        nome: 'Lâmpada',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'É colocado no ponto eletrão de acordo com as regras da Amb3E e da ERP. Para mais informação consulta em www.amb3e.pt'
    },
    {
        nome: 'Móvel',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'É deixado num ecocentro. Consulta o ecocentro mais próximo em www.centroreciclar.com'
    },
    {
        nome: 'Óleo alimentar',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'A AMI tem uma parceria para recolha destes óleos. Podes encontrar contentores em quase todos os supermercados e na rua em alguns pontos do país.'
    },
    {
        nome: 'Óleo lubrificante',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'A Ecolub é a entidade gestora. Podes entregar óleos lubrificantes usados em oficinas. Para mais informação consulta em www.ecolub.pt'
    },
    {
        nome: 'Palete de madeira',
        material: 'madeira',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'É deixado num ecocentro. Consulta o ecocentro mais próximo em www.centroreciclar.com'
    },
    {
        nome: 'Pequeno electrodoméstico',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'É colocado no ponto eletrão de acordo com as regras da Amb3E e da ERP. Para mais informação consulta em www.amb3e.pt'
    },
    {
        nome: 'Restos de jardim',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'os',
        nota: 'É deixado num ecocentro. Consulta o ecocentro mais próximo em www.centroreciclar.com'
    },

    {
        nome: 'Aerossól',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Anilha de uma lata de bebida',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Bandeja descartável',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Batatas fritas de esferovite',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'as'
    },
    {
        nome: 'Bico de um frasco',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Bisnaga de mostarda',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Bisnaga de ketchup',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Cabide de plástico',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Cabide metálico',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Caixa de carros de linha',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Caixa de lâminas de barbear',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Caixa de plástico rijo',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Caixa transparente descartável',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Carica',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Chave para abrir lata de sardinhas',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Chávena descartável',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Copo medida de detergente',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Copo de plástico',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Dispensador de edulcorante',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Dispensador de sabonete líquido',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Embalagem de iogurte líquido',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Embalagem de iogurte sólido',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Embalagem de um produto de higiene',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Embalagem de batatas fritas ou outros aperitivos',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Embalagem de detergente',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Embalagem de manteigas ou margarinas',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Esferovite',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Frasco de champô',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Garrafa de água',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Garrafa de lixívia',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Garrafa de óleos alimentares',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Garrafa de sumo',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Garrafa de vinagre',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Garrafão de água',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Garrafão de óleo de motor',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Lata de refrigerante',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Lata de conserva',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Lata de fruta em calda',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Lata de leite condensado',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Lata de leite em pó',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Pacote de leite',
        material: 'cartão para alimentos líquidos',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Pacote de natas',
        material: 'cartão para alimentos líquidos',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Pacote de polpa de tomate',
        material: 'cartão para alimentos líquidos',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Pacote de sumo',
        material: 'cartão para alimentos líquidos',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Pacote de vinho',
        material: 'cartão para alimentos líquidos',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Porta fatos',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Prato descartável',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Saco de congelados',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Saco de cozer arroz',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Saco de plástico',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Saco de ráfia',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Saco do lixo',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Tabuleiro de alumínio',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Tampa de plástico',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Tampa metálicas de champanhe',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'a'
    },
    {
        nome: 'Tubo de cola',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Tubo de pasta de dentes',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Tubo de pasta de dentes',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Tubo metálico de pasta de dentes',
        material: 'metal',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Vaso de plantas de plástico',
        material: 'plástico',
        ecoponto: 'amarelo',
        artigo: 'o'
    },
    {
        nome: 'Brochura de instruções',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Caixa de faqueiro',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Caixa de fósforos',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Caixa de jogo',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Caixa de pizza sem gordura',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Caixa dispensadora de lenços de papel',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Caixa para ovos',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Caixa de bolachas',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Caixa de cereais',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Caixa de mudanças de casa',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Carta',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Envelope',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'o'
    },
    {
        nome: 'Interior do rolo de papel de cozinha',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'o'
    },
    {
        nome: 'Interior do rolo de papel higiénico',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'o'
    },
    {
        nome: 'Lista telefónica',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'a'
    },
    {
        nome: 'Maço de tabaco',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'o'
    },
    {
        nome: 'Papel de embrulho',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'o'
    },
    {
        nome: 'Papel de escrita',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'o'
    },
    {
        nome: 'Papel de impressão',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'o'
    },
    {
        nome: 'Saco de papel para o pão',
        material: 'papel/cartão',
        ecoponto: 'azul',
        artigo: 'o'
    },
    {
        nome: 'Boião de vidro',
        material: 'vidro',
        ecoponto: 'verde',
        artigo: 'o'
    },
    {
        nome: 'Frasco de azeitonas',
        material: 'vidro',
        ecoponto: 'verde',
        artigo: 'o'
    },
    {
        nome: 'Frasco de doce',
        material: 'vidro',
        ecoponto: 'verde',
        artigo: 'o'
    },
    {
        nome: 'Frasco de perfume',
        material: 'vidro',
        ecoponto: 'verde',
        artigo: 'o'
    },
    {
        nome: 'Frasco de pickles',
        material: 'vidro',
        ecoponto: 'verde',
        artigo: 'o'
    },
    {
        nome: 'Frasco descartável de especiarias',
        material: 'vidro',
        ecoponto: 'verde',
        artigo: 'o'
    },
    {
        nome: 'Garrafa de cerveja',
        material: 'vidro',
        ecoponto: 'verde',
        artigo: 'a'
    },
    {
        nome: 'Garrafa de vinho',
        material: 'vidro',
        ecoponto: 'verde',
        artigo: 'a'
    },
    {
        nome: 'Agrafo',
        material: 'metal',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Alfinetes',
        material: 'metal',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Aplicador de cola',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Balde',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Tupperware',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Caixa de CD',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Caixa de jogo de computador',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Caixa de pizza com gordura',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Caneta',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Cápsula de café',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Cassete de áudio',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Cassetes de vídeo',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'CD',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Cera que envolve o queijo',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Chávena de porcelana',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Colher de medida de medicamentos',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Colher de medida para café',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Copo de medida',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Copo de vidro',
        material: 'vidro',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Cristal',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'DVD',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Elástico',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Embalagem de cartão com gordura',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Embalagem de produtos químicos',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Espelho',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Espuma de enchimento',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Etiqueta',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Etiqueta auto-adesiva',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Ferramenta',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Fita adesiva',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Folha dos autocolantes',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Fralda',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Garrafão de combustível',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Guardanapo de papel',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Isqueiro descartável',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Isqueiro recarregável',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Janela',
        material: 'vidro',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Jarra',
        material: 'vidro',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Lenço de papel sujo',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Material de construção civil',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Palhinha',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Papel autocolante',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Papel de alumínio',
        material: 'metal',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Papel de cozinha',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Papel plastificado',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Pau de chupa-chupa',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Pau de espetadas',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Pincel de maquilhagem',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Prato',
        material: 'vidro',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Recargas para isqueiros',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Saco de chá',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Tote bag',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Saco de sílica-gel',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Saco de cimento',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Tábua de queijos',
        material: 'madeira',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Tacho',
        material: 'metal',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Panela',
        material: 'metal',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Talher de metal',
        material: 'metal',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Talher de plástico',
        material: 'plástico',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Toalhete',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Triângulo de cartão para as fatias de pizza',
        material: 'papel/cartão',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Tubo de ensaio',
        material: 'vidro',
        ecoponto: 'indiferenciado',
        artigo: 'o'
    },
    {
        nome: 'Vidraça',
        material: 'outros',
        ecoponto: 'indiferenciado',
        artigo: 'a'
    },
    {
        nome: 'Bateria',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'A Ecopilhas é a entidade gestora. Podes entregar as baterias em lojas e supermercados.'
    },
    {
        nome: 'Embalagem de medicamentos',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'A Valormed é a entidade gestora. Podes entregar as embalagens vazias de medicamentos na farmácia. Para mais informações consulta www.valormed.pt'
    },
    {
        nome: 'Pilha',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'A Ecopilhas é a entidade gestora. Podes entregar as pilhas nos pilhões junto aos ecopontos de rua ou em lojas e supermercados.'
    },
    {
        nome: 'Pipeta',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'A Valormed é a entidade gestora. Podes entregar as embalagens vazias de medicamentos na farmácia. Para mais informações consulta www.valormed.pt'
    },
    {
        nome: 'Pneu',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'A Valorpneu é a entidade gestora. Pesquisa a rede de recolha em www.valorpneu.pt'
    },
    {
        nome: 'Rolha de cortiça',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'Existe a recolha de rolhas através do canal Horeca. Para mais informação consulta em www.quercus.pt'
    },
    {
        nome: 'Roupa',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'a',
        nota: 'Podes depositar a roupa em contentores próprios, distribuídos por todo o pais.'
    },
    {
        nome: 'Telemóvel',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'Telemóveis são colocados no ponto eletrão de acordo com as regras da Amb3E e da ERP. Para mais informação consulta em www.amb3e.pt'
    },
    {
        nome: 'Tinteiro para a impressora',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'A AMI e Operadores Licenciados recolhem estes tinteiros e toners em lojas e empresas.'
    },
    {
        nome: 'Veículo',
        material: 'outros',
        ecoponto: 'outros',
        artigo: 'o',
        nota: 'A Valorcar é a entidade gestora. Para mais informação consulta em www.valorcar.pt'
    }

];

function loadImage(src: string){
    let img = new Image();
    img.addEventListener('load', ()=>img.remove());
    img.src = src;
}

for(let src of [
    'faces/default.svg',
    'faces/default-talk.svg',
    'faces/happy.svg',
    'faces/happy-talk.svg',
    'faces/sad.svg',
    'faces/sad-talk.svg',
    'speech.svg'
]) loadImage(src);

const $sun: HTMLDivElement = document.querySelector('#sun')!;
const $face: HTMLDivElement = $sun.querySelector('.face')!;

(function update(){

    $sun.style.transform = `translateY(${Math.sin(Date.now() / 500) * 5}%)`
    $face.style.transform = `translateY(${Math.sin(Date.now() / 500 - 1e3) * 10}%)`

    requestAnimationFrame(update);
})();

function changeFace(face: 'default' | 'happy' | 'sad'){
    $face.style.backgroundImage = `url('faces/${face}.svg')`;
}

const $screens = {
    start: document.querySelector('#start') as HTMLDivElement,
    intro: document.querySelector('#intro') as HTMLDivElement,
    game: document.querySelector('#game') as HTMLDivElement,
    note: document.querySelector('#note') as HTMLDivElement,
    end: document.querySelector('#end') as HTMLDivElement
}

function changeScreen(screen: 'start' | 'intro' | 'game' | 'note' | 'end'){

    for(let $screen of Object.values($screens))
        $screen.style.display = 'none';
    
    $screens[screen].removeAttribute('style');

    let $sunScreen: HTMLDivElement = $screens[screen].querySelector('.sun')!;
    let { top, left, width, height } = $sunScreen.getBoundingClientRect();
    $sun.style.top = top + 'px';
    $sun.style.left = left + 'px';
    $sun.style.width = width + 'px';
    $sun.style.height = height + 'px';

}

// START

changeScreen('start');

const $startBtn: HTMLButtonElement = $screens.start.querySelector('button')!;
$startBtn.addEventListener('click', ()=>changeScreen('intro'));

// INTRO

const $letsGoBtn: HTMLButtonElement = $screens.intro.querySelector('button')!;
$letsGoBtn.addEventListener('click', ()=>startGame());

// GAME

const $round: HTMLDivElement = $screens.game.querySelector('.round')!;
const $question: HTMLDivElement = $screens.game.querySelector('.question')!;

const ROUNDS = 15;

let i: number;
let round: number;
let points: number;

function startGame(){
    changeFace('default');
    round = 0;
    points = 0;
    nextQuestion();
    changeScreen('game');
}

function nextQuestion(){

    $options.classList.remove('disabled');
    $options.querySelector('.correct')?.classList.remove('correct');
    $options.querySelector('.wrong')?.classList.remove('wrong');

    if(round == ROUNDS) return endGame();

    i = Math.floor(Math.random() * QUESTIONS.length);

    // TODO: adicionar ao historico de perguntas

    let { artigo, nome } = QUESTIONS[i];

    $round.textContent = `Pergunta ${++round} de ${ROUNDS}`;
    $question.textContent = `Para onde vai ${artigo} ${nome.toLowerCase()}?`;

    changeScreen('game');

}

const $options: HTMLDivElement = $screens.game.querySelector('.options')!;

for(let $option of $options.querySelectorAll('button')!){
    $option.addEventListener('click', async function(){

        $options.classList.add('disabled');

        let option = this.className;
        let answer = QUESTIONS[i].ecoponto;

        changeFace(answer == option ? 'happy' : 'sad');

        if(answer == option) points++;

        this.classList.add(answer == option ? 'correct' : 'wrong');
        if(answer != option) $options.querySelector(`.${answer}`)!.classList.add('correct');

        await (new Promise(r=>setTimeout(r, 2e3)));

        changeFace('default');

        if(!QUESTIONS[i].nota)
            return nextQuestion();

        $screens.note.querySelector('.speech')!.textContent = QUESTIONS[i].nota!;

        changeScreen('note');

    });
}

// NOTE

const $nextQuestionBtn: HTMLButtonElement = $screens.note.querySelector('button')!;
$nextQuestionBtn.addEventListener('click', ()=>nextQuestion());

// END

const $speech: HTMLDivElement = $screens.end.querySelector('.speech')!;
const $replayBtn: HTMLButtonElement = $screens.end.querySelector('button')!;

const confetti = new JSConfetti();

function endGame(){

    $speech.textContent = `Conseguiste ter ${points} de ${ROUNDS} perguntas! Se quiseres, podes jogar de novo e terás novas perguntas.`;

    if(points > ROUNDS * .75) changeFace('happy');

    changeScreen('end');
    
    confetti.addConfetti({
        emojis: ['♻️', '🌍', '🌎', '🌏', '🌱', '☀️'],
        confettiNumber: Math.floor(points * 40 / 15)
    });

}

$replayBtn.addEventListener('click', ()=>startGame());