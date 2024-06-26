// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
  <main>
  <!-- inicio do carrossel -->
  <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img id="sld1" src="../assets/img/hme/carrosel-img-01.jpg" class="d-block w-100 c-img zoom-effect"
          alt="Boas Vindas a Etec de Itanhaém!">
        <div class="carousel-caption top-0 mt-0">
          <h1 style="color: #095000;" id="low"><strong
              class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">Seja bem-vindo a
              Etec de Itanhaém</strong></h1>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="../assets/img/hme/5 Cursos.png" class="d-block w-100 c-img zoom-effect" alt="Slide 2" id="sld2">
        <div class="carousel-caption top-1 mt-0">
        </div>
      </div>
      <div class="carousel-item c-item">
        <img id="sld2" src="../assets/img/hme/Ensino Médio & Técnico.png" class="d-block w-100 c-img zoom-effect" alt="Slide 3">
        <div class="carousel-caption top-1 mt-0">
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- fim do carrosel -->
  <br>
  <!-- inicio da unidade de introdução -->
  <div class="unidade-introducao">
    <div class="sc_content_container">
      <div id="sc_title_1459963616" class="sc_title sc_title_default">
        <br>
        <h6 class="sc_item_subtitle sc_title_subtitle sc_align_center sc_item_title_style_default">Olá, tudo bem!</h6>
        <h1><strong class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">Seja bem-vindo a
            Etec de Itanhaém</strong></h1>
        <div class="sc_item_descr sc_title_descr sc_align_center">
          <p>Nossa escola está envolvidas em várias atividades que melhoram e aprimoram as capacidades críticas e
            técnicas de nossos alunos, venha e faça-nos uma visita.</p>
        </div>
      </div>
    </div>
    <br>
  </div>
  <!-- fim da introdução -->
  <!-- inicio da unidade de cursos -->
  <div class="unidade-cursos" data-aos="fade-up">
    <br>
    <i class="fa fa-graduation-cap" style="font-size:48px" id="cap"></i>
    <strong>
      <h2> Cursos Oferecidos</h2>
    </strong>
    <h5>Cursos Técnicos - Modalidade Presencial</h5>
    <p>
      <a id="und-txt" href="../pages/adm.html">Administração</a><br>
      <a id="und-txt" href="../pages/dds.html">Desenvolvimento de Sistemas</a><br>
      <a id="und-txt" href="../pages/fma.html">Farmácia</a><br>
    </p>
    <h5>Ensino Médio integrado ao técnico (M-Tec)</h5>
    <p>
      <a id="und-txt" href="../pages/adm.html">Administração</a><br>
      <a id="und-txt" href="../pages/ipi.html">Informática para Internet</a><br>
      <a id="und-txt" href="../pages/mae.html">Meio Ambiente</a><br>
    </p>
    <br>
  </div>
  <div id="m-tec"></div>
  <!-- fim da unidade de cursos -->
  <div class="space"></div>
  <!--icones-->
  <div id="container01" class="container" style="align-items: center; text-align: center;">
    <div class="row">
      <div class="col-lg">
        <a href="../pages/adm.html"><img src="../assets/img/hme/fafaadm.png" width="140" height="140" alt="icone de ../pages/administração"
            title="Curso de ../pages/administração"></a>
        <h2 class="fw-normal">Administração</h2>
      </div>
      <br>
      <div class="col-lg">
        <a href="../pages/fma.html"><img src="../assets/img/hme/fafafma.png" width="140" height="140" alt="icone de farmácia"
            title="Curso de Farmácia"></a>
        <h2 class="fw-normal">Farmácia</h2>
      </div>
      <br>
      <div class="col-lg">
        <a href="../pages/dds.html"><img src="../assets/img/hme/fafadds.png" width="140" height="140"
            alt="icone de desenvolvimento de sistemas" title="Curso de desenvolvimento de sistemas"></a>
        <h2 class="fw-normal">Desenvolvimento de Sistemas</h2>
      </div>
      <br>
      <div class="col-lg">
        <a href="../pages/ipi.html"><img src="../assets/img/hme/fafaipi.png" width="140" height="140"
            alt="icone de Informática para internet" title="Curso de informática para internet"></a>
        <h2 class="fw-normal">Informática para Internet</h2>
      </div>
      <br>
      <div class="col-lg">
        <a href="../pages/mae.html"><img src="../assets/img/hme/fafamae.png" width="140" height="140" alt="icone de Meio-ambiente"
            title="Curso de meio-ambiente"></a>
        <h2 class="fw-normal">Meio Ambiente</h2>
      </div>
      <br>
    </div>
  </div>
  <!--fim dos icones-->
  <div class="space"></div>
  <!-- unidade de introdução ao m-tec -->
  <div id="m-tec-intro" class="container" data-aos="fade-up">
    <img id="introgirl" width="880" height="700" src="../assets/img/hme/img-girl-01.jpeg" class="img-fluid text-justify">
    <div class="ioa" data-aos="fade-left">
      <h4>
        Ensino Médio integrado ao técnico (M-Tec)
      </h4>
      <p id="textgirl" data-aos="fade-left">
        O Ensino Técnico Integrado ao Ensino Médio é uma das três modalidades de formação a nível técnico no Brasil,
        sendo as outras duas o curso técnico concomitante e o curso técnico profissionalizante.
        Nessa modalidade, foco do nosso artigo, o estudante realiza o Técnico ao mesmo tempo em que cursa o Ensino
        Médio. Assim, quando termina o 3º ano e encerra o ensino básico, o aluno recebe dois certificados: o diploma de
        técnico que lhe dará o direito de exercer a habilitação profissional e o diploma de formação a nível médio, que
        permite que ele possa prosseguir os estudos no nível da educação superior.
        Quanto ao conteúdo dos cursos, nada muda! Os cursos abrangem, concomitantemente, habilidades específicas do
        ensino técnico e do Ensino Médio, buscando a interdisciplinaridade. Desta forma, os estudantes seguem as mesmas
        diretrizes curriculares de quem faz o Ensino Médio e Técnico separadamente. Para atender a esse requisito,
        normalmente os alunos precisam ter aulas no turno oposto, ou seja, de manhã e à tarde, ou à tarde e à noite.
      </p>
    </div>
  </div>
  <!-- fim da introdução ao m-tec -->
  <br>
  <br>
  <!-- unidade de tributos -->
  <div class="cards" data-aos="fade-up">
    <br>
    <h2>
      <div class="tb" data-aos="fade-right">
        <p id="char01"> Tributo as Personalidades
      </div>
    </h2>
    <br>
    <main class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <section class="col-sm-4">
            <article class="card" data-aos="fade-left">
              <a href="https://pt.wikipedia.org/wiki/Paulo_Freire"><img src="../assets/img/hme/paulofreire.png"
                  class="card-img-top" alt="Paulo Freire" title="Paulo Freire"></a>
              <div class="card-body">
                <h5 class="card-title">Paulo Freire</h5>
                <p class="card-text">Paulo Freire foi um educador e filósofo brasileiro. É considerado um
                  dos pensadores mais notáveis na história da pedagogia mundial, tendo influenciado o movimento chamado
                  pedagogia crítica. É também o Patrono da Educação Brasileira. Freire acredita que "a educação faz
                  sentido porque mulheres e homens aprendem que através da aprendizagem podem fazerem-se e refazerem-se,
                  porque mulheres e homens são capazes de assumirem a responsabilidade sobre si mesmos como seres
                  capazes de conhecerem."ㅤ</p>
              </div>
            </article>
          </section>
          <section class="col-sm-4">
            <article class="card" data-aos="fade-down">
              <a
                href="https://www.poli.usp.br/institucional/diretoria/galeria-de-diretores/prof-dr-antonio-francisco-de-paula-souza"><img
                  src="../assets/img/hme/paulosouza.jpg" class="card-img-top" alt="Paula Souza" title="Paula Souza"></a>
              <div class="card-body">
                <h5 class="card-title"> Paula Souza</h5>
                <p class="card-text">Paula Souza era reconhecidamente um homem à frente de seu tempo e caracterizou-se
                  como um educador que sempre defendeu o papel da escola como meio de formação de profissionais e não
                  somente um local para discussões acadêmicas. Mais de 50 anos após sua morte, os princípios idealizados
                  por Paula Souza começaram se concretizar com a criação do Centro Estadual de Educação Tecnológica de
                  São Paulo, em 6 de outubro de 1969, que posteriormente foi rebatizado como Centro Paula Souza, em
                  homenagem ao professor.</p>
              </div>
            </article>
          </section>
          <section class="col-sm-4">
            <article class="card" data-aos="fade-right">
              <a href="https://pt.wikipedia.org/wiki/José_Serra"><img id="ft" src="../assets/img/hme/joseserra.jpeg"
                  class="card-img-top" alt="José Serra" title="José Serra"></a>
              <div class="card-body" id="serra">
                <h5 class="card-title">José Serra</h5>
                <p class="card-text">Em 2007 o então Governador Eleito Excelentíssimo Sr. José Serra assinou seu
                  primeiro decreto como Governador, criando a ETEC de Itanhaém como unidade própria e independente, em
                  24/01/07, decreto nº 51.500.
                  No segundo semestre de 2007, implantamos mais dois cursos Técnicos em administração e Web Design ambos
                  com quarenta alunos, o último no período vespertino. No final de 2007, não compartilhávamos o prédio
                  da escola, nos possibilitando a ampliar nossos cursos.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                </p>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
    <div id="unidade-cursos"></div>
    <br>
  </div>
  <!-- fim da unidade de tributos -->
  <br>
  <!-- introdução aos cursos técnicos -->
  <div class="container-wrapper" data-aos="fade-left">
    <h2>
      <p id="char02"> Introdução aos Cursos Técnicos
    </h2>
  </div>
  <div class="spacex"></div>
  <section id="seck02">
  </section>
  <div class="container">
    <br>
    <section class="home-intro" data-aos="fade-right">
      <div class="home-intro__wrapper">
        <aside class="embed">
          <a href="../pages/dds.html"><img id="radius-img" class="img-fluid" width="560" height="315" src="../assets/img/hme/dev-img.jpeg"
              alt="operação em computador e celular" title="Curso de desenvolvimento de sistemas"></a>
        </aside>
        <div>
          <h2 class="home-intro__title">
            Conheça
            <a href="../pages/dds.html">
              <strong style="color: #00758f;">Desenvolvimento de Sistemas</strong></a>
          </h2>
          <p class="home-intro__text">
            O curso de desenvolvimento de sistemas é uma formação que prepara os estudantes para projetar, desenvolver
            e implementar sistemas de software. Os alunos aprendem a programar em várias linguagens, como Java, C++,
            Python, entre outras, e também estudam banco de dados, arquitetura de sistemas, engenharia de software e
            desenvolvimento web. O currículo abrange técnicas de programação, análise de requisitos, testes de
            software e gestão de projetos. Os graduados em desenvolvimento de sistemas podem atuar em empresas de TI,
            startups, consultorias ou até mesmo empreender seu próprio negócio na área de tecnologia. Eles estão
            preparados para criar soluções de software eficientes e inovadoras, lidar com as demandas do mercado e
            contribuir para o avanço da tecnologia da informação.
          </p>
        </div>
      </div>
    </section>
    <br>
    <br>
    <section class="home-intro" data-aos="fade-right">
      <div class="home-intro__wrapper">
        <aside class="embed">
          <a href="../pages/adm.html"><img id="radius-img" width="560" class="img-fluid" height="315" src="../assets/img/hme/adm-img.jpeg"
              alt="gráficos e diagramas" title="Curso de administração"></a>
        </aside>
        <div>
          <h2 class="home-intro__title">
            Conheça
            <a href="../pages/adm.html">
              <strong style="color: #3947b0;">Administração</strong></a>
          </h2>
          <p class="home-intro__text">
            O curso de administração é uma formação voltada para o desenvolvimento de habilidades gerenciais e
            estratégicas em organizações. Os estudantes aprendem sobre planejamento, organização, direção e controle
            de recursos para alcançar objetivos corporativos. O currículo abrange temas como gestão de pessoas,
            finanças, marketing, operações, ética e estratégia. Os graduados em administração podem atuar em diversas
            áreas, como empresas privadas, organizações sem fins lucrativos, governo e empreendedorismo, e estão
            preparados para liderar equipes, tomar decisões estratégicas e enfrentar os desafios do mundo corporativo.
          </p>
        </div>
      </div>
    </section>
    <br>
    <br>
    <section class="home-intro" data-aos="fade-right">
      <div class="home-intro__wrapper">
        <aside class="embed">
          <a href="../pages/fma.html"><img id="radius-img" width="560" class="img-fluid" height="315" src="../assets/img/hme/fma-img.jpeg"
              alt="farmacêuticos construindo remédio" title="Curso de farmácia"></a>
        </aside>
        <div>
          <h2 class="home-intro__title">
            Conheça
            <a href="../pages/fma.html">
              <strong style="color: #a71d2a;">Farmácia</strong></a>
          </h2>
          <p class="home-intro__text">
            O curso de farmácia é uma formação voltada para o estudo e a aplicação de conhecimentos na área de saúde e
            medicamentos. Os estudantes aprendem sobre a produção, dispensação, controle, armazenamento e uso correto
            de medicamentos e produtos farmacêuticos. O currículo abrange disciplinas como química farmacêutica,
            farmacologia, toxicologia, farmacotécnica, bioquímica, microbiologia e legislação farmacêutica. Além
            disso, os alunos são preparados para realizar atividades clínicas, orientar pacientes, gerenciar farmácias
            e atuar em laboratórios de análises clínicas. Os graduados em farmácia podem trabalhar em farmácias
            comunitárias, hospitais, indústrias farmacêuticas, órgãos regulatórios, pesquisa científica e outras áreas
            relacionadas à saúde, contribuindo para a promoção do uso seguro e eficaz de medicamentos e a melhoria da
            qualidade de vida dos pacientes.
          </p>
        </div>
      </div>
    </section>
  </div>
  <!-- fim da introdução aos cursos técnicos -->
  <div class="space"></div>
  <!-- introdução aos cursos m-tec  -->
  <div style="background-color: #000000;" class="container-fluid" class="img-fluid">
    <br>
    <div class="intro-mtec-cursos" data-aos="fade-right">
      <h2>
        <p id="char"> Cursos do Ensino Médio integrado ao técnico (M-Tec)
      </h2>
      <h6>
        <p id="char03">Cursos únicos e exclusivos para os alunos do ensino integrado e técnico</p>
      </h6>
    </div>
    <div class="spacex"></div>
    <div style="background-color: #000000;" class="container-wrapper">
      <section style="background-color: #000000;" class="home-intro" data-aos="fade-left">
        <div style="background-color: #000000;" class="home-intro__wrapper">
          <div>
            <h2 style="color: #ffffff; background-color: #000000;" class="home-intro__title">
              Conheça
              <a href="../pages/mae.html">
                <strong style="color:#a61322da ;">Meio-Ambiente</strong></a>
            </h2>
            <p style="background-color: #000000; color: #ffffff;" class="home-intro__text">
              O curso tem base em duas disciplinas principais: biologia e química. A primeira, para aprender sobre a
              diversidade da vida, compreensão de ecossistema, as relações entre os seres vivos e ciclo da matéria no
              ambiente. A segunda, para compreensão de métodos de separação de matéria. O aluno também aprenderá
              interpretação de texto para entender normas técnicas, resoluções, portarias e decretos. Também fazem
              parte da grade aulas direcionadas a equipamentos de laboratórios, coletas padronizadas, poluição
              atmosférica e mudanças climáticas.
            </p>
          </div>
          <aside style="background-color: #000000;" class="embed">
            <br>
            <a href="../pages/mae.html"><img id="radius-img" width="560" height="315" src="../assets/img/hme/mae-img.jpeg "
                alt="linda planta em ambiente de outono" title="Curso de meio-ambiente"></a>
          </aside>
        </div>
      </section>
      <br>
      <br>
      <section style="background-color: #000000;" class="home-intro" data-aos="fade-left">
        <div style="background-color: #000000;" class="home-intro__wrapper">
          <div>
            <h2 style="color: #ffffff; background-color: #000000;" class="home-intro__title">
              Conheça
              <a href="../pages/ipi.html">
                <strong style="color: #0040ffaa;">Informática para Internet</strong></a>
            </h2>
            <p style="background-color: #000000; color: #ffffff;" class="home-intro__text">
              Informática para internet é um curso técnico ou tecnólogo que prepara os estudantes para trabalhar com
              tecnologias e ferramentas voltadas para a internet. O curso aborda programação, design e gestão de
              conteúdo para a web, desenvolvimento de sistemas web, segurança na internet, redes de computadores,
              entre outros temas. O curso de Informática para internet é voltado para profissionais que desejam
              trabalhar no desenvolvimento e gestão de sistemas e aplicativos para a web, tanto em empresas de
              tecnologia quanto em organizações que utilizam a internet como meio de comunicação e negócios. O mercado
              de trabalho para profissionais com esse tipo de formação é bastante amplo, com oportunidades em empresas
              de tecnologia, agências de publicidade e marketing digital, instituições de ensino, entre outras áreas.
            </p>
          </div>
          <aside style="background-color: #000000;" class="embed">
            <a href="../pages/ipi.html"><img id="radius-img" width="560" height="315" src="../assets/img/hme/ipi.jpeg"
                alt="operando computador" title="Curso de informática para internet"></a>
          </aside>
        </div>
      </section>
    </div>
    <!-- fim da introdução  dos cursos m-tec  -->
    <!-- background all class  -->
    <div style="background-color: #000000;" class="class br">
      <div class="space"></div>
    </div>
    <!-- background final class  -->
  </main>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();