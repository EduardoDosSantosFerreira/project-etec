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
        <img src="../assets/img/adm/adm-img-01.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 1">
        <div class="carousel-caption">
          <h2>Administração</h2>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="../assets/img/adm/adm-img-02.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 2">
        <div class="carousel-caption">
          <h2>Gestão De Negócios</h2>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="../assets/img/adm/adm-img-03.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 3">
        <div class="carousel-caption">
          <h2>Empreendedorismo</h2>
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
        <h2 class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">Administração</h2>
        <div id="tex" class="sc_item_descr sc_title_descr sc_align_center">
          <p>Como funcionam as organizações, desde empresas privadas até
            ONGs, passando por órgãos públicos, comércio e indústria. O estudante vai precisar de conhecimentos de
            língua portuguesa, matemática, história e geografia para compreender os principais assuntos do curso, como
            história da administração, evolução das organizações ao longo do tempo, contabilidade, leis que regulam o
            funcionamento das empresas e redação de documentos.

            O aluno vai aprender ainda a analisar as chances de um negócio ou produto ser bem-sucedido e o comportamento
            do consumidor. Estudará também técnicas de atendimento ao cliente, empreendedorismo (iniciativas para
            realizar novos negócios) e como uma organização planeja alcançar seus objetivos e define suas metas para o
            futuro.
          </p>
        </div>
      </div>
    </div>
    <br>

    <div class="unidade-cursos" data-aos="fade-up">
      <br>
      <i class="fa fa-clock-o" style="font-size:48px;"></i>
      <h4> Carga Horária</h4>
      <h5>1200 hrs</h5>
      <br>

    </div>
    <br>
    <div class="unidade-cursos" data-aos="fade-up">
      <br>
      <i class="fa fa-calendar" style="font-size:48px;"></i>
      <h4>Duração</h4>
      <h5>3 semestres</h5>
      <br>

    </div>
    <br>
    <div class="unidade-cursos" data-aos="fade-up">
      <br>
      <i class="fa fa-bullseye" style="font-size:48px;"></i>
      <h4> Eixo Tecnológico</h4>
      <h5>Gestão de Negócios</h5>

      <br>
    </div>
    <br>
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
            <img id="img-border" width="560" height="315" src="../assets/img/adm/adm-img-03.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color: #00758f;">Gestão De Negócios</strong>
            </h2>

            <p class="home-intro__text">
              A gestão de negócios é o conjunto de atividades e práticas que visam administrar, planejar, organizar,
              liderar e controlar as operações de uma empresa ou organização, com o objetivo de alcançar resultados
              eficientes e eficazes. Envolve a tomada de decisões estratégicas, a gestão de recursos e pessoas, o
              monitoramento de processos e a busca pela inovação e competitividade.A gestão de negócios abrange diversas
              áreas, como finanças, marketing, recursos humanos, operações, estratégia, empreendedorismo, entre outras.
              É um campo multidisciplinar que exige conhecimentos em diversas áreas do mundo dos negócios, e a
              habilidade de integrar e aplicar esses conhecimentos de forma estratégica.
            </p>
          </div>
        </div>
      </section>
      <br>
      <br>
      <section class="home-intro" data-aos="fade-left">
        <div class="home-intro__wrapper">
          <aside class="embed">
            <img id="img-border" width="560" height="315" src="../assets/img/adm/adm-img.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color: #3947b0;">Administração</strong>
            </h2>

            <p class="home-intro__text">
              O curso de ../pages/administração é uma formação voltada para o desenvolvimento de habilidades gerenciais
              e
              estratégicas em organizações. Os estudantes aprendem sobre planejamento, organização, direção e controle
              de recursos para alcançar objetivos corporativos. O currículo abrange temas como gestão de pessoas,
              finanças, marketing, operações, ética e estratégia. Os graduados em ../pages/administração podem atuar em
              diversas
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
            <img id="img-border" width="560" height="315" src="../assets/img/adm/adm-img-04.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color: #146917;">Empreendedorismo</strong>
            </h2>

            <p class="home-intro__text">
              O empreendedorismo é uma abordagem e mentalidade que envolve a identificação, criação e gestão de
              oportunidades de negócios com o objetivo de inovar, criar valor e obter resultados positivos. Os
              empreendedores são indivíduos que assumem riscos, buscam oportunidades, desenvolvem novas ideias, criam
              produtos ou serviços e implementam estratégias para alcançar o sucesso empresarial.Os empreendedores podem
              atuar em diferentes áreas, desde startups e pequenos negócios até empresas de grande porte. Eles estão
              constantemente em busca de soluções criativas e inovadoras para problemas e necessidades do mercado, e
              muitas vezes assumem riscos financeiros e operacionais para transformar suas ideias em empreendimentos
              bem-sucedidos. </p>
          </div>
        </div>
      </section>
      <br>
      <br>
      <section class="home-intro" data-aos="fade-left">
        <div class="home-intro__wrapper">
          <aside class="embed">
            <img id="img-border" width="560" height="315" src="../assets/img/adm/adm-img-05.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color:#c5a217 ;">Economia</strong>
            </h2>

            <p class="home-intro__text">
              A economia é uma ciência social que estuda como as pessoas, empresas e governos utilizam os recursos
              limitados para produzir e distribuir bens e serviços. Ela é dividida em duas áreas principais: a
              microeconomia, que se concentra no comportamento dos indivíduos e empresas em relação aos mercados
              específicos, e a macroeconomia, que analisa o comportamento da economia como um todo. A compreensão dos
              princípios econômicos pode ajudar as pessoas a tomar decisões mais informadas e eficazes em relação ao
              dinheiro e ao investimento, bem como a entender as forças que moldam a economia global.
            </p>
          </div>
        </div>
      </section>
      <br>
      <br>
      <section class="home-intro" data-aos="fade-right">
        <div class="home-intro__wrapper">
          <aside class="embed">
            <img id="img-border" width="560" height="315" src="../assets/img/adm/adm-img-06.jpeg">
          </aside>
          <div>
            <h2 class="home-intro__title">
              Conheça
              <strong style="color: #a15e01;">Marketing</strong>
            </h2>
            <p class="home-intro__text">
              Marketing é uma disciplina que busca identificar e satisfazer as necessidades dos clientes por meio da
              criação, oferta e promoção de produtos e serviços que atendam a essas necessidades. O objetivo é gerar
              valor para o cliente e receita para a empresa, entendendo as necessidades do público-alvo, desenvolvendo
              produtos e serviços, definindo preços, distribuindo e promovendo produtos e serviços de maneira eficaz. As
              estratégias de marketing incluem publicidade, promoções, relações públicas, marketing de conteúdo,
              marketing de mídia social e outras táticas para aumentar a conscientização e a demanda pelos produtos e
              serviços da empresa. O marketing é fundamental para o sucesso de uma empresa, pois ajuda a construir uma
              base de clientes leais e satisfeitos que geram receita e lucro para a empresa. </p>
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