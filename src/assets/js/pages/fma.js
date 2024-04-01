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
          <img src="../assets/img/fma/fma-img-01.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 1">
          <div class="carousel-caption">
            <h2>Bioquímica</h2>
          </div>
        </div>
        <div class="carousel-item c-item">
          <img src="../assets/img/fma/fma-img-02.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 2">
          <div class="carousel-caption">
            <h2>Biossegurança</h2>
          </div>
        </div>
        <div class="carousel-item c-item">
          <img src="../assets/img/fma/fma-img-03.jpeg" class="d-block w-100 c-img zoom-effect" alt="Slide 3">
          <div class="carousel-caption">
            <h2>Farmacotécnica</h2>
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
          <h2 class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">Farmácia</h2>
          <div id="tex" class="sc_item_descr sc_title_descr sc_align_center">
            <p>O curso de farmácia tem
              como objetivo formar profissionais capacitados a atuar em diferentes áreas relacionadas à produção,
              controle, distribuição e dispensação de medicamentos e outros produtos de saúde.
  
              Durante o curso, os alunos estudam disciplinas básicas como química, biologia, anatomia, fisiologia e
              bioquímica, bem como disciplinas específicas da área farmacêutica, como farmacologia, farmacotécnica,
              toxicologia, microbiologia, imunologia, entre outras.
  
              Os alunos também aprendem sobre a legislação e regulamentação da área farmacêutica, a ética profissional, a
              gestão da qualidade e dos processos farmacêuticos, e as técnicas de atendimento e orientação ao paciente.
  
              Além disso, o curso de farmácia oferece estágios supervisionados em diferentes áreas de atuação, como
              farmácias comunitárias, hospitais, indústrias farmacêuticas, laboratórios de análises clínicas e pesquisa
              científica.</p>
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
              <img id="img-border" width="560" height="315" src="../assets/img/fma/fma-img-04.jpeg">
            </aside>
            <div>
              <h1 class="home-intro__title">
                Conheça
                <strong style="color: #00758f;">Bioquímica</strong>
              </h1>
  
              <p class="home-intro__text">
                A bioquímica é uma ciência multidisciplinar que combina conceitos e técnicas da química, biologia,
                biologia molecular, genética, fisiologia e outras áreas afins. Ela estuda os processos químicos e
                bioquímicos que ocorrem nos organismos vivos em níveis celular, molecular e metabólico, e como esses
                processos estão relacionados com a fisiologia, metabolismo, reprodução, crescimento, desenvolvimento,
                resposta a estímulos e outras funções biológicas. A bioquímica é uma disciplina essencial para a
                compreensão dos processos biológicos e sua aplicação em áreas como a medicina, farmácia, biotecnologia,
                indústria de alimentos, pesquisa científica, entre outras.
              </p>
            </div>
          </div>
        </section>
        <br>
        <br>
        <section class="home-intro" data-aos="fade-left">
          <div class="home-intro__wrapper">
            <aside class="embed">
              <img id="img-border" width="560" height="315" src="../assets/img/fma/fma-img-05.jpeg">
            </aside>
            <div>
              <h1 class="home-intro__title">
                Conheça
                <strong style="color: #3947b0;">Biossegurança</strong>
              </h1>
  
              <p class="home-intro__text">
                Biossegurança é uma área do conhecimento que busca prevenir, controlar e minimizar riscos à saúde humana,
                animal e ao meio ambiente, associados a atividades que envolvem agentes biológicos, como microrganismos
                (bactérias, vírus, fungos, parasitas), materiais biológicos, organismos geneticamente modificados (OGMs),
                produtos biotecnológicos e outras atividades relacionadas à biotecnologia, saúde, pesquisa científica,
                produção de alimentos, manipulação de organismos vivos e outras atividades que possam representar riscos
                biológicos.Em resumo, a biossegurança é uma área multidisciplinar que busca garantir a segurança na
                manipulação de agentes biológicos, proteger a saúde humana, animal e ambiental. </p>
            </div>
          </div>
        </section>
        <br>
        <br>
        <section class="home-intro" data-aos="fade-right">
          <div class="home-intro__wrapper">
            <aside class="embed">
              <img id="img-border" width="560" height="315" src="../assets/img/fma/fma-img-06.jpeg">
            </aside>
            <div>
              <h1 class="home-intro__title">
                Conheça
                <strong style="color: #a71d2a;">Farmacotécnica</strong>
              </h1>
  
              <p class="home-intro__text">
                A farmacotécnica é a área da farmácia que se concentra na preparação de medicamentos, ou seja, no
                desenvolvimento, formulação e produção de formas farmacêuticas. Isso inclui a escolha de ingredientes
                ativos, recipientes e outras substâncias utilizadas na formulação de medicamentos, bem como a seleção do
                método de preparação e a embalagem dos produtos acabados. A farmacotécnica envolve o conhecimento de
                várias áreas, como a química, a física, a biologia e a tecnologia de materiais, para desenvolver
                formulações seguras e eficazes. Os farmacêuticos que trabalham nesta área precisam conhecer as
                propriedades físico-químicas dos medicamentos e as interações com o corpo humano, além de estar
                atualizados sobre as técnicas e equipamentos mais recentes para a preparação de medicamentos.
              </p>
        </section>
        <br>
        <br>
        <section class="home-intro" data-aos="fade-left">
          <div class="home-intro__wrapper">
            <aside class="embed">
              <img id="img-border" width="560" height="315" src="../assets/img/fma/fma-img-07.jpeg">
            </aside>
            <div>
              <h1 class="home-intro__title">
                Conheça
                <strong style="color:#a61358da ;">Farmacologia</strong>
              </h1>
  
              <p class="home-intro__text">
                A farmacologia é a ciência que estuda os efeitos dos medicamentos no organismo humano, animal ou vegetal.
                Ela envolve o
                estudo da ação dos medicamentos, sua interação com o corpo, sua absorção, metabolismo e eliminação, bem
                como seus
                efeitos terapêuticos e colaterais.
  
                Os farmacologistas usam técnicas e métodos científicos para investigar como os medicamentos funcionam e
                como podem ser
                usados para tratar doenças e melhorar a saúde. Eles também estudam os efeitos dos medicamentos no
                desenvolvimento e
                crescimento do corpo, bem como suas interações com outras substâncias.
  
                A farmacologia é uma disciplina interdisciplinar que envolve conhecimentos de química, biologia,
                fisiologia, patologia,
                entre outras áreas. Seus estudos são aplicados na indústria farmacêutica, no desenvolvimento de novos
                medicamentos, na
                pesquisa clínica e na prática médica, ajudando a melhorar a qualidade de vida das pessoas e animais.
              </p>
            </div>
          </div>
        </section>
        <br>
        <br>
        <section class="home-intro" data-aos="fade-right">
          <div class="home-intro__wrapper">
            <aside class="embed">
              <img id="img-border" width="560" height="315" src="../assets/img/fma/fma-img-08.jpeg">
            </aside>
            <div>
              <h1 class="home-intro__title">
                Conheça
                <strong style="color: #065806;">Microbiologia</strong>
              </h1>
  
              <p class="home-intro__text">
                A Microbiologia é a área da biologia que estuda os micro-organismos, como bactérias, vírus, fungos e
                protozoários. Ela é
                fundamental para diversas áreas da ciência, como a medicina, a biotecnologia, a indústria de alimentos e a
                indústria
                farmacêutica.
                Os microbiologistas estudam a estrutura, fisiologia, metabolismo, genética e ecologia dos
                micro-organismos. Eles também
                investigam como os micro-organismos interagem com outros seres vivos e com o ambiente em geral.A
                microbiologia é uma área essencial para a compreensão e prevenção de doenças infecciosas, além de ser
                fundamental para
                o desenvolvimento de novos medicamentos, vacinas e terapias. Além disso, a microbiologia também tem um
                papel importante
                na produção de alimentos e bebidas, na biotecnologia e na proteção ambiental.
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
    <script src="../assets/js/components/footer01.js"></script>
    </div>
  </main>
      `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();