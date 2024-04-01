// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
  <main>
  <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="../assets/img/ipi/ipi-img-01.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 1">
        <div class="carousel-caption">
          <h2>Programação</h2>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="../assets/img/ipi/ipi-img-02.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 2">
        <div class="carousel-caption">
          <h2>Segurança na internet</h2>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="../assets/img/ipi/ipi-img-03.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 3">
        <div class="carousel-caption">
          <h2>Banco De Dados</h2>
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
  <div class="unidade-introducao" data-aos="fade-up">
    <div class="sc_content_container">
      <div id="sc_title_1459963616" class="sc_title sc_title_default">
        <br>
        <h2 class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">Informática para Internet
        </h2>
        <div id="tex" class="sc_item_descr sc_title_descr sc_align_center">
          <p>Informática para internet é um curso técnico ou tecnólogo que
            prepara os estudantes para trabalhar com tecnologias e ferramentas voltadas para a internet. O curso aborda
            programação, design e gestão de conteúdo para a web, desenvolvimento de sistemas web, segurança na internet,
            redes de computadores, entre outros temas.O curso de Informática para internet é voltado para profissionais
            que desejam trabalhar no desenvolvimento e gestão de sistemas e aplicativos para a web, tanto em empresas de
            tecnologia quanto em organizações que utilizam a internet como meio de comunicação e negócios. O mercado de
            trabalho para profissionais com esse tipo de formação é bastante amplo, com oportunidades em empresas de
            tecnologia, agências de publicidade e marketing digital, instituições de ensino, entre outras áreas.</p>
        </div>
      </div>
    </div>
    <br>
    <div class="unidade-cursos" data-aos="fade-up">
      <br>
      <i class="fa fa-clock-o" style="font-size:48px;"></i>
      <h3>Carga Horária</h3>
      <h4>1200 hrs</h4>
      <br>
    </div>
    <br>
    <div class="unidade-cursos" data-aos="fade-up">
      <br>
      <i class="fa fa-calendar" style="font-size:48px;"></i>
      <h3>Duração</h3>
      <h4>3 semestres</h4>
      <br>
    </div>
    <br>
    <div class="unidade-cursos" data-aos="fade-up">
      <br>
      <i class="fa fa-bullseye" style="font-size:48px;"></i>
      <h3> Eixo Tecnológico</h3>
      <h4>Informação e Comunicação</h4>
      <br>
    </div>
    <br>
    <br>
    <br>
  </div>
  <div class="container-wrapper">
    <div class="container">
      <br>
      <section class="home-intro" data-aos="fade-right">
        <div class="home-intro__wrapper">
          <aside class="embed">
            <img id="img-border" width="560" height="315" src="../assets/img/ipi/ipi-img-04.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color: #00758f;">Segurança na internet</strong>
            </h2>
            <p class="home-intro__text">
              Segurança na internet é uma área que se preocupa em proteger sistemas, redes, dispositivos e informações
              de ameaças e ataques online. Isso envolve uma série de práticas e medidas preventivas para garantir a
              integridade, a confidencialidade e a disponibilidade das informações que circulam pela rede.A segurança na
              internet é uma preocupação crescente, à medida que mais informações e atividades são realizadas online.
              Profissionais de segurança na internet são demandados para desenvolver soluções e práticas de segurança,
              além de identificar e mitigar riscos e vulnerabilidades em sistemas e redes.
            </p>
          </div>
        </div>
      </section>
      <br>
      <br>
      <section class="home-intro" data-aos="fade-left">
        <div class="home-intro__wrapper">
          <aside class="embed">
            <img id="img-border" width="560" height="315" src="../assets/img/ipi/ipi-img-05.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color: #3947b0;">Banco De Dados</strong>
            </h2>
            <p class="home-intro__text">
              Banco de dados é uma matéria que aborda conceitos e técnicas para gerenciamento de informações em bancos
              de dados. O objetivo é ensinar a projetar, criar, manipular e manter bancos de dados eficientes e seguros.
              Os tópicos incluem modelagem de dados, normalização, SQL, programação de aplicativos de banco de dados,
              ../pages/administração de bancos de dados, entre outros. A disciplina é importante para áreas como TI e negócios,
              onde bancos de dados são usados para gerenciar informações em diversos contextos. O conhecimento em banco
              de dados é essencial para garantir a integridade dos dados e a segurança das informações armazenadas. Ao
              final da matéria, os alunos devem ser capazes de projetar e implementar bancos de dados eficientes e
              utilizar as ferramentas disponíveis para manipulação e análise de dados.
            </p>
          </div>
        </div>
      </section>
      <br>
      <br>
      <section class="home-intro" data-aos="fade-right">
        <div class="home-intro__wrapper">
          <aside class="embed">
            <img id="img-border" width="560" height="315" src="../assets/img/ipi/ipi-img-06.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color: #a71d2a;">Programação Web</strong>
            </h2>
            <p class="home-intro__text">
              A programação web é uma área de programação que se concentra no desenvolvimento de aplicativos e sites que
              funcionam na internet. Os desenvolvedores da web usam uma variedade de linguagens de programação,
              incluindo HTML, CSS, JavaScript, PHP e outras, para criar sites interativos, aplicativos web e outras
              soluções de TI para a web.s desenvolvedores da web também são responsáveis pela manutenção e atualização
              de sites e aplicativos, incluindo o gerenciamento de bancos de dados e a integração com outras tecnologias
              e serviços da web. O conhecimento em programação web é essencial para os profissionais de TI que desejam
              trabalhar no desenvolvimento de soluções para a web, incluindo desenvolvedores de front-end, back-end e
              full-stack.
            </p>
          </div>
      </section>
      <br>
      <br>
      <section class="home-intro" data-aos="fade-left">
        <div class="home-intro__wrapper">
          <aside class="embed">
            <img id="img-border" width="560" height="315" src="../assets/img/ipi/ipi-img-07.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color:#a61322da ;">Operação de software e aplicativos</strong>
            </h2>
            <p class="home-intro__text">
              A operação de software e aplicativos envolve o gerenciamento, manutenção e atualização de softwares e
              aplicativos em um sistema ou rede de computadores. O processo inclui a instalação e configuração de
              softwares e aplicativos, monitoramento de desempenho, solução de problemas, aplicação de patches de
              segurança e atualizações, backup e recuperação de dados, entre outras atividades.Os aplicativos são
              softwares específicos que são projetados para executar uma tarefa específica ou para atender a uma
              necessidade específica de um usuário. Eles podem ser criados para uso em desktops, laptops, tablets e
              dispositivos móveis, como smartphones. A operação de aplicativos envolve a instalação e configuração de
              aplicativos, testes de funcionalidade, atualização e manutenção, gerenciamento de licenças, gerenciamento
              de dados do usuário e suporte ao usuário.
            </p>
          </div>
        </div>
      </section>
      <br>
      <br>
      <section class="home-intro" data-aos="fade-right">
        <div class="home-intro__wrapper">
          <aside class="embed">
            <img id="img-border" width="560" height="315" src="../assets/img/ipi/ipi-img-08.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color: #0040ffaa;">Programação e Algoritmo</strong>
            </h2>
            <p class="home-intro__text">
              Programação é a habilidade de criar software ou programas de computador para executar uma tarefa
              específica. Essa habilidade é alcançada por meio da escrita de códigos de programação que são
              interpretados por um computador. Os programas podem ser criados para uma ampla variedade de fins, como
              automação de tarefas, criação de sites, jogos, aplicativos móveis, softwares empresariais, entre outros. A
              programação requer conhecimento em linguagens de programação, que são utilizadas para codificar as
              instruções que um computador precisa seguir para realizar uma tarefa específica. Algumas das linguagens de
              programação mais populares incluem Java, Python, C++, JavaScript, Ruby e PHP.
            </p>
          </div>
        </div>
      </section>
      <br>
      <br>
    </div>
    <div style=" text-align: center;" class="ins">
      <a href="https://www.vestibulinhoetec.com.br/candidato/">
        <button class="comic-button">Inscreva-se</button>
    </div>
    </a>
  </div>
  <br>
  <br>
  <br> 
</div>
</main>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();