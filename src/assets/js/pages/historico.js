// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
  <main>
    <!-- inicio da unidade de introdução -->
    <div id="unit" class="container-fluid">
      <div class="unidade-introducao" data-aos="fade-up">
        <div class="sc_content_container">
          <div id="sc_title_1459963616" class="sc_title sc_title_default">
            <br>
            <div class="introc" data-aos="fade-right">
              <h1><strong class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">Histórico
                  da
                  Etec de Itanhaém</strong>
              </h1>
            </div>
            <div class="sc_item_descr sc_title_descr sc_align_center" data-aos="fade-left">
              <p>Esta é a história da construção e fundação da escola técnica de Itanhaém e seus
                colaboradores.</p>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
    <!-- fim da introdução -->
  
    <!-- unidade de introdução ao m-tec -->
    <div class="container-fluid" id="seck" data-aos="fade-up">
    </div>
    <br>
    <div class="container" data-aos="fade-right">
      <p id="textgirl" data-aos="fade-left">
        A ETEC de Itanhaém iniciou suas atividades em 01/08/2006, como Classe Descentralizada da ETEC “Adolpho
        Berezin” de
        Mongaguá, através de um convênio do Governo do Estado de São Paulo com a atual administração da Prefeitura
        Municipal de
        Itanhaém.
        O convênio foi assinado em 2006 pelo Excelentíssimo Governador Sr. Geraldo Alkimin e Excelentíssimo Prefeito
        Sr. José
        Carlos Forssell, esta parceria viabilizou o prédio da Unidade Escolar, que era ocupado por alunos da Rede
        Municipal de
        Ensino.
  
        No início, compartilhamos o mesmo prédio com os alunos da Rede Municipal e tínhamos apenas dois cursos
        Técnicos em
        Recursos Hídricos e Saneamento, ambos com 40 alunos, no período noturno.
  
        Na ocasião, esses dois cursos foram escolhidos pelo Prefeito da cidade, para suprir futuras necessidades de
        um Projeto
        de Saneamento Básico em toda Região Metropolitana da Baixada Santista.
  
        Em 2007 o então Governador Eleito Excelentíssimo Sr. José Serra assinou seu primeiro decreto como
        Governador, criando a
        ETEC de Itanhaém como unidade própria e independente, em 24/01/07, decreto nº 51.500.
        No segundo semestre de 2007, implantamos mais dois cursos Técnicos em administração e Web Design ambos com
        quarenta
        alunos, o último no período vespertino. No final de 2007, não compartilhávamos o prédio da escola, nos
        possibilitando a
        ampliar nossos cursos.
  
        Em 2008 a escola ganhou uma nova cara, uma nova identidade, iniciaram as aulas do Ensino Médio, com oitenta
        alunos no
        período diurno.
  
        Assim, desde 2008 temos a escola em funcionamento manhã, tarde e noite.
  
        Em fevereiro de 2009 iniciamos mais um curso no período da tarde, Técnico em Secretariado, com quarenta
        alunos. Ganhamos
        uma Classe Descentralizada de Peruíbe com dois cursos Técnicos em Contabilidade e Logística. Em 2010,
        tivemos início
        também do curso Modelagem de Vestuário.
  
        Em 2012, alguns cursos Técnicos foram para o período noturno, possibilitando que os cursos técnicos de
        Secretariado e
        Informática para Internet, pudessem atender as pessoas que só tem o período noturno para se atualizar
        profissionalmente.
  
        Também no ano de 2012, iniciaram o nosso Ensino Médio Integrado em administração e Informática para
        Internet,
  
        onde possibilitou que os Jovens da Região tivessem uma formação mais completa, pois ao mesmo tempo que estão
        fazendo o
        Ensino Médio, também estão complementando com uma formação técnica profissionalizante.
  
        Em 2013 iniciamos com o Curso Técnico em Meio Ambiente.
  
        Em 2016 iniciamos com o ETIM - Ensino Médio Integrado com Meio Ambiente.
      </p>
    </div>
    <br>
    <br>
  </main>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();