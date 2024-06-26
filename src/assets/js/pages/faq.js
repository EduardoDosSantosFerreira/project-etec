// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
  <main>
  <br>
  <div class="unidade-introducao" data-aos="fade-up">
    <div class="sc_content_container">
      <div id="sc_title_1459963616" class="sc_title sc_title_default">
        <br>
        <div class="livro" data-aos="fade-down">
          <i class="fa fa-book" style="font-size:48px;"></i>
        </div>
        <div class="bemvindo" data-aos="fade-left">
          <h1><strong class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">Seja bem-vindo ao
              FAQ</strong></h1>
        </div>
        <div class="sc_item_descr sc_title_descr sc_align_center" data-aos="fade-right">
          <p>Aqui estão algumas das perguntas mais frequentes sobre a ETEC</p>
        </div>
      </div>
    </div>
    <br>
  </div>
  <br>
  <br>
  <br>
  <div id="unidade-sumario" class="container" data-aos="fade-right">
    <br>
    <div class="red">
      <h5 id="logs">Sobre a Etec :</h5>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              O que a Etec de Itanhaém Oferece?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Ensino médio, cursos técnicos e base para o mercado de trabalho.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Quais cursos a Etec de Itanhaém oferece?
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Ao todo 5 cursos técnicos sendo 2 deles exclusivos do ensino médio (ETIM, M-Tec,
              M-TEC-PI)</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              A Etec é boa para vestibulares?
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Estudantes da ETEC têm alguns benefícios dos vestibulares como à isenção da taxa
              da prova do ENEM.</div>
          </div>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Quais modalidades existem na Etec?
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Ensino Técnico Integrado ao Médio (ETIM), Ensino Médio integrado ao técnico em
                período integral (M-Tec-PI), Ensino Médio
                integrado ao técnico em período integral (M-Tec).</div>
            </div>
          </div>
          <div class="accordion-item" id="flush-headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
              Existe encaminhamento para vagas de emprego?
            </button>
          </div>
          <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Fazer um curso técnico na Escola Técnica Estadual (Etec) aumenta as chances de emprego na área escolhida. Segundo um
            relatório de 2012 da Fundação de Apoio à Tecnologia (FAT) para o Centro Paula Souza, 16% dos aprovados já estavam
            trabalhando na mesma área do curso escolhido durante a inscrição. Após um ano da formatura, 42% estavam empregados na
            área, um aumento de 26%. Além disso, 34% buscaram o curso para melhorar o desempenho profissional e 32% visavam a
            ascensão na carreira.</div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                Vale a pena fazer etec para ingressar no mercado de trabalho?
              </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">A formação nas Escolas Técnicas Estaduais (Etecs) garante emprego para 80% dos
                alunos. A cada cinco pessoas que
                completam os cursos, quatro saem empregadas.</div>
            </div>
          </div>
        <br>
        <br>
      </div>
    </div>
    <div class="blue">
      <h5 id="logs">Funcionalidade e Funcionamento :</h5>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading1">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
              Quem pode fazer a prova da ETEC?
            </button>
          </h2>
          <div id="flush-collapse1" class="accordion-collapse collapse" aria-labelledby="flush-heading1"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Para ingressar no Ensino Técnico Integrado ao Ensino Médio na ETEC, o estudante
              precisa comprovar a conclusão no ensino
              fundamental I e II (1º ao 9º Ano) e realizar a prova para ingresso. caso contrário uma alternativa válida:
              cursar a EJA (Educação de Jovens e Adultos na ETEC). Ainda que queira já fazer
              o ensino médio junto com o técnico, a modalidade EJA oferece essa possibilidade.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
              Como Funciona a prova da Etec?
            </button>
          </h2>
          <div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="flush-heading2"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">A prova do Vestibulinho ETEC é composta por 50 questões objetivas de múltipla
              escolha, abrangendo diversas áreas do conhecimento, como Matemática, Língua Portuguesa, História,
              Geografia,
              Ciências, Inglês e questões interdisciplinares.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading3">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
              Como funciona o Centro paula souza?
            </button>
          </h2>
          <div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="flush-heading3"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">O ingresso nas unidades do Centro Paula Souza se dá através de processos
              seletivos,
              o Vestibulinho para as Etecs e o Vestibular para as Fatecs. Para cursar o ensino superior nas Fatecs o
              interessado deverá ter concluído o ensino médio.</div>
          </div>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading4">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                Como funciona a dinâmica de notas na Etec?
              </button>
            </h2>
            <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">As menções da ETEC servem para mensurar o desempenho dos estudantes com base
                em
                seu aprendizado de diversas formas. Provas teóricas, provas práticas, atividades, seminários e trabalhos
                são
                levados em consideração.

                O nível máximo de desempenho é chamado de MB, que significa muito bom. Logo abaixo dele, há o nível B,
                que
                representa um bom desempenho. Alunos que ficam “na média” recebem a menção R, ou seja, regular. Por fim,
                há
                o I, que serve para demonstrar um desempenho insatisfatóriosrc</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading5">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                Qual a diferença entre Etec e Fatec?
              </button>
            </h2>
            <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">A ETEC é Escola Técnica, oferece cursos de nível médio - técnico. A FATEC é
                Faculdade, oferece cursos de nível superior,
                graduação e pós-graduação.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading6">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                Vale a pena fazer etec para ingressar no mercado de trabalho?
              </button>
            </h2>
            <div id="flush-collapse6" class="accordion-collapse collapse" aria-labelledby="flush-heading6"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">A formação nas Escolas Técnicas Estaduais (Etecs) garante emprego para 80% dos
                alunos. A cada cinco pessoas que
                completam os cursos, quatro saem empregadas.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="black">
      <h5 id="logs">Processo Seletivo e Atividade :</h5>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading01">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapse01" aria-expanded="false" aria-controls="flush-collapse01">
              Como é seleção da Etec?
            </button>
          </h2>
          <div id="flush-collapse01" class="accordion-collapse collapse" aria-labelledby="flush-heading01"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">O Vestibulinho das Etecs para o segundo semestre de 2023 oferece mais de
              44 mil vagas para cursos técnicos, especializações técnicas e vagas remanescentes de segundo módulo,
              na modalidade presencial, semipresencial e online, disponíveis em todo o Estado de São Paulo.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading02">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapse02" aria-expanded="false" aria-controls="flush-collapse02">
              Como Funciona a prova da Etec?
            </button>
          </h2>
          <div id="flush-collapse02" class="accordion-collapse collapse" aria-labelledby="flush-heading02"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">A prova do Vestibulinho ETEC é composta por 50 questões objetivas de
              múltipla
              escolha, abrangendo diversas áreas do conhecimento, como Matemática, Língua Portuguesa, História,
              Geografia,
              Ciências, Inglês e questões interdisciplinares.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading03">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapse03" aria-expanded="false" aria-controls="flush-collapse03">
              Como ingressar na Etec?
            </button>
          </h2>
          <div id="flush-collapse03" class="accordion-collapse collapse" aria-labelledby="flush-heading03"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Para ingressar no Ensino Técnico Integrado ao Ensino Médio na ETEC, o
              estudante precisa comprovar a conclusão no ensino fundamental I e II (1º ao 9º Ano) e realizar a
              prova para ingresso. As inscrições para o Vestibulinho ETEC acontecem a cada semestre e o valor da
              taxa de realização geralmente é de R$30,00.</div>
          </div>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading04">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapse04" aria-expanded="false" aria-controls="flush-collapse04">
                Posso fazer mais de um curso?
              </button>
            </h2>
            <div id="flush-collapse04" class="accordion-collapse collapse" aria-labelledby="flush-heading04"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Sim, você pode fazer dois cursos de uma só vez, mas isso é possível
                somente em uma instituição particular, ou pode ser uma graduação na faculdade privada e a outra em
                universidade pública. O que não é permitido é ocupar duas vagas públicas.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading05">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapse05" aria-expanded="false" aria-controls="flush-collapse05">
                Quanto tempo dura um curso na Etec?
              </button>
            </h2>
            <div id="flush-collapse05" class="accordion-collapse collapse" aria-labelledby="flush-heading05"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">A duração dos cursos técnicos oferecidos nas Etecs varia de 3 a 4
                semestres.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading06">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapse06" aria-expanded="false" aria-controls="flush-collapse06">
                Onde acompanho os processos seletivos e as inscrições para o vestibulinho?</button>
            </h2>
            <div id="flush-collapse06" class="accordion-collapse collapse" aria-labelledby="flush-heading06"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">O acompanhamento dos processos podem ser feitos pelo site do
                vestibulinho.</div>
            </div>
          </div>
          <br>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  <br>
</main>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();