// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
    <footer style="list-style-type: none;" class="site-footer text-center "
      data-gtm-vis-recent-on-screen-36284894_45="14882" data-gtm-vis-first-on-screen-36284894_45="14882"
      data-gtm-vis-total-visible-time-36284894_45="100" data-gtm-vis-has-fired-36284894_45="1">
      <div class="l-container site-footer__container">
        <div class="site-footer__row site-footer__row--navigation">
          <div class="site-footer__menu-col">
            <h2 class="site-footer__menu-heading">ㅤㅤAluno &amp; Candidato</h2>
            <nav class="site-footer__nav" aria-label="Security &amp; Brand Navigation">
              <ul type="none" class="site-footer__nav-list">
                <li class="footer-one__item"><a href="https://www.vestibulinhoetec.com.br/candidato/"
                    class="footer-one__action" data-attribute="report-copyright-infringement-2">Área do
                    Candidato</a></li>
                <li class="footer-one__item"><a href="../docs/aluno/manual.pdf" class="footer-one__action"
                    data-attribute="report-security-issue-2">Manual do
                    Aluno</a></li>
                <li class="footer-one__item"><a href="../docs/aluno/normas.pdf" class="footer-one__action"
                    data-attribute="trademark-notice">Normas &amp;
                    Convivência</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="site-footer__menu-col">
            <h2 class="site-footer__menu-heading">ㅤㅤWebsite</h2>
            <nav class="site-footer__nav" aria-label="Website Navigation">
              <ul type="none" class="site-footer__nav-list">
                <li class="footer-two__item"><a href="#unidade-cursos" class="footer-two__action"
                    data-attribute="accessibility">Cursos</a></li>
                <li class="footer-two__item"><a href="#m-tec" class="footer-two__action"
                    data-attribute="digital-accessibility">M-TEC</a></li>
                <li class="footer-two__item"><a href="../pages/historico.html" class="footer-two__action"
                    data-attribute="9826">Histórico</a></li>
              </ul>
            </nav>
          </div>
          <div class="site-footer__menu-col">
            <h2 class="site-footer__menu-heading">ㅤㅤContato</h2>
            <nav class="site-footer__nav" aria-label="Get In Touch Navigation">
              <ul type="none" class="site-footer__nav-list">
                <li class="footer-three__item"><a href="../pages/contact.html" class="footer-three__action"
                    data-attribute="../pages/contact">Telefone &amp; Fax</a></li>
                <li class="footer-three__item"><a href="../pages/contact.html" class="footer-three__action"
                    data-attribute="maps-directions">Mapa &amp; Direção</a></li>
                <li class="footer-three__item"><a href="../pages/contact.html" class="footer-three__action"
                    data-attribute="jobs">Emails</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="site-footer__row site-footer__row--secondary">
          <div class="site-footer__copyright">
            <p class="copy" id="copy" style="color: white;">© 2023&nbsp;Eduardo S Ferreira</p>
          </div>
          <div class="site-footer__logo mx-auto ">
            <a href="">ㅤㅤ
              <img src="../assets/img/ftr/logo-white-svg.svg" alt="etec-de-itanhaem">
            </a>
          </div>
          <div class="site-footer__social mx-auto ">
            <div class="social-follow">
              <ul type="none" class="social-follow__list">
                <li class="social-follow__item social-follow__item--facebook">
                  <a href="https://www.facebook.com/etecdeitanhaem/?locale=pt_BR" class="social-follow__anchor"
                    rel="me noopener" title="Facebook" target="_blank">
                    <img src="../assets/img/ftr/fbk.png" style="height: 50px;" alt="Facebook">
                  </a>ㅤ
                  <a href="https://br.linkedin.com/company/etec-itanhaém" class="social-follow__anchor"
                    rel="me noopener" title="Linkedin" target="_blank">
                    <img src="../assets/img/ftr/in.png" style="height: 50px;" alt="Linkedin">
                  </a>ㅤ
                  <a href="https://api.whatsapp.com/send?phone=551334264926" class="social-follow__anchor"
                    rel="me noopener" title="Whatsapp" target="_blank">
                    <img src="../assets/img/ftr/wts.png" style="height: 50px;" alt="Whatsapp">
                  </a>ㅤ
                  <a href="https://www.instagram.com/etecdeitanhaem/" class="social-follow__anchor" rel="me noopener"
                    title="Instagram" target="_blank">
                    <img src="../assets/img/ftr/ins.png" style="height: 50px;" alt="Instagram">
                  </a>ㅤ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();