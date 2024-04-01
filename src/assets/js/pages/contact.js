// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
  <main>
  <div class="../pages/contact">
    <div class="container">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne">
              <div class="telefone-unidade"><i class="fa fa-phone" aria-hidden="true" style="font-size: 20px;"></i>ㅤ
                <strong>Tel/Fax:</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <a href=" https://api.whatsapp.com/send?phone=551334264926"><strong>(13) 3426-4926</strong></a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo">
              <div class="emails-unidade"><i class="fa fa-envelope" style="font-size:18px"></i>ㅤ
                <strong>E-mails:</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">

              <ul class="list-group">
                <li class="list-group-item">Diretoria: e158dir@cps.sp.gov.br</li>
                <li class="list-group-item">Diretoria ../pages/administrativa: e158../pages/adm@cps.sp.gov.br</li>
                <li class="list-group-item">Diretoria Acadêmica: e158acad@cps.sp.gov.br</li>
              </ul>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                <i class="fa fa-map-marker" aria-hidden="true" title="Localização"></i>ㅤ
                <strong> Localização:</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                <strong>Av. José Batista Campos, 1431 - Anchieta - Itanhaém/SP - CEP: 11740-000</strong>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="map">
          <div class="container-fluid">
            <iframe loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.0822602432677!2d-46.787713685526796!3d-24.168847690189686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce2a634639f1ad%3A0x880cccc8530ba600!2sETEC%20de%20Itanha%C3%A9m!5e0!3m2!1spt-BR!2sbr!4v1603373108880!5m2!1spt-BR!2sbr"
              width="100%" height="800px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
              tabindex="0"></iframe>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</main>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();