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
          <img src="../assets/img/mae/mae-img-01.jpg" class="d-block w-100 c-img zoom-effect" alt="Slide 1">
          <div class="carousel-caption">
            <h2>Meio ambiente</h2>
          </div>
        </div>
        <div class="carousel-item c-item">
          <img src="../assets/img/mae/mae-img-02.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 2">
          <div class="carousel-caption">
            <h2>Ecologia</h2>
          </div>
        </div>
        <div class="carousel-item c-item">
          <img src="../assets/img/mae/mae-img-03.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 3">
          <div class="carousel-caption">
            <h2>Responsabilidade socioambiental</h2>
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
          <h2 class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">Meio ambiente</h2>
          <div id="tex" class="sc_item_descr sc_title_descr sc_align_center">
            <p>O curso tem base em duas disciplinas principais: biologia e
              química. A primeira, para aprender sobre a diversidade da vida, compreensão de ecossistema, as relações
              entre os seres vivos e ciclo da matéria no ambiente. A segunda, para compreensão de métodos de separação de
              matéria. O aluno também aprenderá interpretação de texto para entender normas técnicas, resoluções,
              portarias e decretos. Também fazem parte da grade aulas direcionadas a equipamentos de laboratórios, coletas
              padronizadas, poluição atmosférica e mudanças climáticas.</p>
          </div>
        </div>
      </div>
      <br>
      <div class="unidade-cursos" data-aos="fade-up">
        <br>
        <i class="fa fa-clock-o" style="font-size:48px;"></i>
        <h3> Carga Horária</h3>
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
        <h4>Ambiente e Saúde</h4>
        <br>
      </div>
      <br>
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
              <img id="img-border" width="560" height="315" src="../assets/img/mae/mae-img-04.jpeg">
            </aside>
            <div>
              <h2 class="home-intro__title">
                Conheça
                <strong style="color: #0587a8;">Biologia</strong>
              </h2>
              <p class="home-intro__text">
                Biologia é uma ciência que estuda a vida em todas as suas formas, desde organismos unicelulares até
                ecossistemas inteiros. Ela engloba uma ampla variedade de tópicos, desde a estrutura e função celular até
                a ecologia e a evolução.O estudo da Biologia é importante para entendermos a vida em suas diversas formas
                e para o desenvolvimento de tecnologias que possam beneficiar a humanidade e o meio ambiente. Além disso,
                a Biologia é fundamental para a compreensão de problemas globais, como mudanças climáticas, desmatamento,
                poluição, entre outros, permitindo que sejam desenvolvidas soluções para esses problemas de forma
                sustentável.
              </p>
            </div>
          </div>
        </section>
        <br>
        <br>
        <section class="home-intro" data-aos="fade-left">
          <div class="home-intro__wrapper">
            <aside class="embed">
              <img id="img-border" width="560" height="315" src="../assets/img/mae/mae-img-05.jpeg">
            </aside>
            <div>
              <h2 class="home-intro__title">
                Conheça
                <strong style="color: #a839b0;">Química</strong>
              </h2>
              <p class="home-intro__text">
                A Química é uma ciência fundamental para o desenvolvimento de tecnologias que podem beneficiar a
                humanidade e o meio ambiente, como a produção de medicamentos, materiais mais resistentes, novas fontes de
                energia, entre outros. Além disso, a Química é importante para a compreensão de problemas globais, como a
                poluição do ar, água e solo, permitindo que sejam desenvolvidas soluções para esses problemas de forma
                sustentável.Além disso, os alunos também estudam a ética na pesquisa científica, bem como a comunicação
                científica e a divulgação científica.
              </p>
            </div>
          </div>
        </section>
        <br>
        <br>
        <section class="home-intro" data-aos="fade-right">
          <div class="home-intro__wrapper">
            <aside class="embed">
              <img id="img-border" width="560" height="315" src="../assets/img/mae/mae-img-06.jpeg">
            </aside>
            <div>
              <h2 class="home-intro__title">
                Conheça
                <strong style="color: #1e8613;">Ecologia</strong>
              </h2>
              <p class="home-intro__text">
                Ecologia é a ciência que estuda as relações entre os seres vivos e o ambiente em que vivem. Ela estuda
                como os organismos interagem entre si e com o ambiente físico e químico ao seu redor. A ecologia engloba
                uma ampla variedade de tópicos, desde a biologia de populações e comunidades até a dinâmica de
                ecossistemas e a biologia da conservação.A ecologia é uma disciplina importante para a compreensão dos
                processos ecológicos que sustentam a vida no planeta e para o desenvolvimento de soluções sustentáveis
                para os desafios ambientais enfrentados pela humanidade. Ela é fundamental para a conservação da
                biodiversidade, a gestão de recursos naturais e a mitigação das mudanças climáticas.
              </p>
            </div>
        </section>
        <br>
        <br>
        <section class="home-intro" data-aos="fade-left">
          <div class="home-intro__wrapper">
            <aside class="embed">
              <img id="img-border" width="560" height="315" src="../assets/img/mae/mae-img-07.jpeg">
            </aside>
            <div>
              <h2 class="home-intro__title">
                Conheça
                <strong style="color:#a61322da ;">Agronomia</strong>
              </h2>
              <p class="home-intro__text">
                Agronomia é a ciência que estuda a produção agrícola e os processos biológicos, físicos e químicos
                relacionados ao cultivo de plantas, à criação de animais e à gestão do solo. Os profissionais formados em
                Agronomia são conhecidos como agrônomos e têm como objetivo desenvolver técnicas e tecnologias para
                melhorar a produtividade agrícola, garantindo a sustentabilidade e preservação ambiental.
  
                Os agrônomos são responsáveis por planejar, coordenar e executar projetos relacionados à agricultura,
                pecuária e agroindústria, desde a seleção das culturas mais adequadas para determinada região até a
                implementação de técnicas de irrigação, adubação, manejo de pragas e doenças, controle de qualidade e
                pós-colheita.
  
                Além disso, os agrônomos também atuam em áreas como pesquisa, consultoria, ensino e extensão rural,
                contribuindo para o desenvolvimento sustentável do setor agropecuário e para o bem-estar social. </p>
            </div>
          </div>
        </section>
        <br>
        <br>
        <section class="home-intro" data-aos="fade-right">
          <div class="home-intro__wrapper">
            <aside class="embed">
              <img id="img-border" width="560" height="315" src="../assets/img/mae/mae-img-08.jpeg">
            </aside>
            <div>
              <h2 class="home-intro__title">
                Conheça
                <strong style="color: #c55c05;">Pecuária</strong>
              </h2>
              <p class="home-intro__text">
                A pecuária é a atividade econômica que envolve a criação de animais para fins de produção de alimentos,
                como carne, leite, ovos, entre outros produtos de origem animal. A pecuária é uma das atividades mais
                antigas do mundo, e é essencial para o fornecimento de proteína animal para a alimentação humana.A
                pecuária pode ter um grande impacto no meio ambiente, especialmente quando praticada de forma intensiva. A
                criação de animais em grande escala pode levar à degradação do solo, poluição da água e emissão de gases
                de efeito estufa. Por isso, muitos produtores estão adotando práticas mais sustentáveis, como a criação de
                animais em sistemas agroflorestais, uso de técnicas de manejo integrado, e redução do uso de insumos
                químicos.
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