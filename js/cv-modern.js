(function () {
  function initPdfCvGenerator() {
    var btn = document.getElementById("download-cv-pdf");
    if (!btn) return;
    var modal = document.getElementById("pdf-lang-modal");
    var btnEs = document.getElementById("pdf-lang-es");
    var btnEn = document.getElementById("pdf-lang-en");
    var closeTriggers = modal
      ? Array.prototype.slice.call(modal.querySelectorAll("[data-close-pdf-modal]"))
      : [];

    function buildPdfHtmlEs() {
      return `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CV - Jos&eacute; Manuel Jacobo Urz&uacute;a</title>
  <style>
    @page { size: A4; margin: 0; }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    body {
      margin: 0;
      font-family: "Segoe UI", Arial, sans-serif;
      color: #10233d;
      background: #ffffff;
      line-height: 1.36;
      font-size: 11.5px;
    }
    html, body {
      width: 100%;
      height: 100%;
    }
    .sheet {
      background: #fff;
      border: 0;
      border-radius: 0;
      overflow: hidden;
      width: 100%;
      min-height: 100%;
    }
    .header {
      background: linear-gradient(125deg, #0c2650 0%, #144179 55%, #0f2d5f 100%);
      color: #f3f8ff;
      padding: 11px 12px 9px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 9px;
      align-items: center;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    h1 {
      margin: 0;
      font-size: 24px;
      letter-spacing: 0.2px;
      line-height: 1.1;
    }
    .role {
      margin: 3px 0 0;
      font-size: 13px;
      font-weight: 700;
      color: #96ceff;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .role-sub {
      margin: 2px 0 0;
      font-size: 11.5px;
      color: #cfe4ff;
      font-weight: 600;
    }
    .tagline {
      margin: 4px 0 0;
      font-size: 10px;
      color: #d8e9ff;
      font-weight: 600;
    }
    .meta {
      margin-top: 5px;
      display: flex;
      flex-wrap: wrap;
      gap: 4px 8px;
      font-size: 9.4px;
      color: #d8e9ff;
    }
    .body { padding: 8px 12px 10px; }
    .section { margin-bottom: 7px; }
    .title {
      margin: 0 0 4px;
      color: #0f766e;
      font-size: 13px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-weight: 800;
    }
    p { margin: 0; color: #243a5a; font-size: 11.5px; line-height: 1.36; }
    .exp-item {
      border: 1px solid #d7e5fb;
      border-radius: 7px;
      padding: 6px 7px;
      background: #f9fbff;
      margin-bottom: 5px;
    }
    .exp-head {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: baseline;
      margin-bottom: 2px;
    }
    .exp-role { font-size: 11.5px; font-weight: 700; color: #122f55; }
    .date { font-size: 9.5px; color: #486083; font-weight: 700; white-space: nowrap; }
    ul { margin: 0; padding-left: 12px; }
    li { margin-bottom: 0; color: #1f3658; font-size: 11px; line-height: 1.35; }
    .cols {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .box {
      border: 1px solid #d7e5fb;
      border-radius: 7px;
      padding: 6px;
      background: #f9fbff;
    }
    .kpis {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 4px;
      margin-bottom: 6px;
    }
    .kpi {
      border: 1px solid #d7e5fb;
      border-radius: 7px;
      background: #f9fbff;
      padding: 5px 6px;
    }
    .kpi strong {
      display: block;
      color: #0d3c71;
      font-size: 10.8px;
      line-height: 1;
      margin-bottom: 2px;
    }
    .kpi span {
      font-size: 9px;
      color: #476287;
      line-height: 1.2;
    }
    .impact-list {
      margin: 0;
      padding-left: 12px;
    }
    .impact-list li {
      font-size: 9.1px;
      margin-bottom: 1px;
      color: #1f3658;
    }
    .projects {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px;
    }
    .project {
      border: 1px solid #d7e5fb;
      border-radius: 7px;
      padding: 6px;
      background: #f9fbff;
    }
    .project h3 {
      margin: 0;
      font-size: 11.5px;
      color: #12335f;
      line-height: 1.2;
    }
    .project p {
      margin-top: 2px;
      font-size: 11px;
      color: #2c466c;
    }
    .chips { display: flex; flex-wrap: wrap; gap: 4px; }
    .chip {
      padding: 1px 5px;
      border-radius: 999px;
      border: 1px solid #c9dcfb;
      background: #ffffff;
      color: #143967;
      font-size: 8.4px;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="sheet">
    <section class="header">
      <div>
        <h1>Jos&eacute; Manuel Jacobo Urz&uacute;a</h1>
        <p class="role">Senior Software Engineer | Full-Stack | Backend Specialist</p>
        <p class="role-sub">Backend | APIs | Sistemas en Producci&oacute;n | AMS</p>
        <p class="tagline">Especializado en sistemas empresariales en producci&oacute;n y soporte de plataformas cr&iacute;ticas.</p>
        <div class="meta">
          <span>Colima, M&eacute;xico</span>
          <span>+52 312 122 1007</span>
          <span>iscjacobomanuel@gmail.com</span>
          <span>linkedin.com/in/jm-jacobo/</span>
          <span>github.com/IscJacobo19/</span>
        </div>
      </div>
    </section>

    <div class="body">
      <section class="kpis">
        <div class="kpi"><strong>9+ a&ntilde;os</strong><span>Experiencia profesional en tecnolog&iacute;a</span></div>
        <div class="kpi"><strong>AMS + Prod</strong><span>Soporte cr&iacute;tico, incidentes y evoluci&oacute;n</span></div>
        <div class="kpi"><strong>B2B / Enterprise</strong><span>Sistemas para sectores clave</span></div>
      </section>

      <section class="section">
        <h2 class="title">Impacto</h2>
        <ul class="impact-list">
          <li>Soporte y evoluci&oacute;n de +50 aplicaciones empresariales en producci&oacute;n.</li>
          <li>Experiencia en entornos AMS: resoluci&oacute;n de incidentes cr&iacute;ticos, RCA y continuidad operativa.</li>
          <li>Optimizaci&oacute;n de consultas SQL y rendimiento en bases de datos para sistemas empresariales.</li>
        </ul>
      </section>

      <section class="section">
        <h2 class="title">Perfil Profesional</h2>
        <p>Software Engineer con m&aacute;s de 9 a&ntilde;os de experiencia desarrollando y manteniendo sistemas web empresariales en producci&oacute;n. Especializado en backend con PHP, optimizaci&oacute;n de bases de datos e integraci&oacute;n de APIs. Experiencia trabajando bajo modelo AMS brindando soporte productivo, resoluci&oacute;n de incidentes cr&iacute;ticos y evoluci&oacute;n continua de plataformas orientadas a negocio.</p>
      </section>

      <section class="section">
        <h2 class="title">Experiencia Profesional</h2>
        <article class="exp-item">
          <div class="exp-head">
            <span class="exp-role">Senior Full-Stack Developer / AMS Engineer - Softtek (CRT)</span>
            <span class="date">Jul 2024 &ndash; Actualidad</span>
          </div>
          <ul>
            <li>Resoluci&oacute;n de incidentes cr&iacute;ticos y an&aacute;lisis de causa ra&iacute;z (RCA) en aplicaciones empresariales en producci&oacute;n.</li>
            <li>Mantenimiento evolutivo de sistemas web y optimizaci&oacute;n de consultas SQL en bases de datos empresariales.</li>
          </ul>
        </article>
        <article class="exp-item">
          <div class="exp-head">
            <span class="exp-role">Software Developer - Softtek (Coppel)</span>
            <span class="date">Jun 2022 &ndash; Jun 2024</span>
          </div>
          <ul>
            <li>Mantenimiento de plataformas documentales legacy.</li>
            <li>Migraci&oacute;n parcial a PHP y automatizaci&oacute;n operativa.</li>
          </ul>
        </article>
        <article class="exp-item">
          <div class="exp-head">
            <span class="exp-role">Full-Stack Developer / DBA - Witann Technologies</span>
            <span class="date">Feb 2022 &ndash; Jun 2022</span>
          </div>
          <ul>
            <li>Soluciones empresariales en Laravel.</li>
            <li>Plataforma B2B y optimizaci&oacute;n de bases de datos.</li>
          </ul>
        </article>
        <article class="exp-item">
          <div class="exp-head">
            <span class="exp-role">Full-Stack Developer - PC Express Developers</span>
            <span class="date">Feb 2021 &ndash; Feb 2022</span>
          </div>
          <ul>
            <li>Plataforma de campa&ntilde;as con mapas y m&eacute;tricas.</li>
            <li>Backend Laravel y frontend Vue.js.</li>
          </ul>
        </article>
        <article class="exp-item">
          <div class="exp-head">
            <span class="exp-role">Full-Stack Developer - Corporativo ICEP</span>
            <span class="date">Sep 2018 &ndash; Feb 2021</span>
          </div>
          <ul>
            <li>Sistema de titulaci&oacute;n electr&oacute;nica aprobado por SEP.</li>
            <li>PHP + AngularJS + MySQL y soporte institucional.</li>
          </ul>
        </article>
        <article class="exp-item">
          <div class="exp-head">
            <span class="exp-role">Software Developer - Mundo Solar</span>
            <span class="date">Feb 2016 &ndash; Jun 2018</span>
          </div>
          <ul>
            <li>Aplicaci&oacute;n C++ para c&aacute;lculo fotovoltaico.</li>
            <li>L&oacute;gica de c&aacute;lculo energ&eacute;tico e inventario.</li>
          </ul>
        </article>
      </section>

      <section class="section">
        <h2 class="title">Stack Tecnol&oacute;gico</h2>
        <div class="projects">
          <article class="project">
            <h3>Backend</h3>
            <p>PHP, Laravel, Yii2 Framework, CodeIgniter</p>
          </article>
          <article class="project">
            <h3>Frontend</h3>
            <p>JavaScript (Angular, Vue)</p>
          </article>
          <article class="project">
            <h3>Bases de datos</h3>
            <p>MySQL, PostgreSQL, Oracle, SQL Server</p>
          </article>
          <article class="project">
            <h3>Herramientas</h3>
            <p>Git, APIs REST, Insomnia, metodolog&iacute;as &aacute;giles</p>
          </article>
        </div>
      </section>

      <section class="section">
        <h2 class="title">Proyectos Personales</h2>
        <div class="projects">
          <article class="project">
            <h3>Plataforma de Invitaciones Web</h3>
            <p>Plataforma para gesti&oacute;n de invitados, confirmaci&oacute;n RSVP y control de acceso mediante c&oacute;digos QR desde un panel administrativo. Tecnolog&iacute;as: PHP, MySQL, JavaScript.</p>
          </article>
          <article class="project">
            <h3>Sistema de Gesti&oacute;n de Citas</h3>
            <p>Sistema para control de agendas, disponibilidad y reservas con panel centralizado para administraci&oacute;n. Tecnolog&iacute;as: PHP, MySQL, JavaScript.</p>
          </article>
          <article class="project">
            <h3>Sitios Web con Panel Administrativo</h3>
            <p>Sitios web din&aacute;micos con panel de administraci&oacute;n para gesti&oacute;n de contenido y secciones. Tecnolog&iacute;as: HTML, CSS, JavaScript.</p>
          </article>
        </div>
      </section>

      <section class="section cols">
        <div class="box">
          <h2 class="title">Educaci&oacute;n</h2>
          <p class="exp-role">Ingenier&iacute;a en Sistemas Computacionales</p>
          <p>Formaci&oacute;n profesional en an&aacute;lisis, dise&ntilde;o y desarrollo de software.</p>
        </div>
        <div class="box">
          <h2 class="title">Idiomas</h2>
          <p><strong>Espa&ntilde;ol</strong> &mdash; Nativo</p>
          <p><strong>Ingl&eacute;s</strong> &mdash; Intermedio (lectura t&eacute;cnica y documentaci&oacute;n)</p>
        </div>
      </section>
    </div>
  </div>
</body>
</html>`;
    }

    function buildPdfHtmlEn() {
      return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resume - Jose Manuel Jacobo Urzua</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body { margin: 0; font-family: "Segoe UI", Arial, sans-serif; color: #10233d; background: #ffffff; line-height: 1.36; font-size: 11.5px; }
    html, body { width: 100%; height: 100%; }
    .sheet { background: #fff; border: 0; border-radius: 0; overflow: hidden; width: 100%; min-height: 100%; }
    .header { background: linear-gradient(125deg, #0c2650 0%, #144179 55%, #0f2d5f 100%); color: #f3f8ff; padding: 11px 12px 9px; display: grid; grid-template-columns: 1fr; gap: 9px; align-items: center; }
    h1 { margin: 0; font-size: 24px; letter-spacing: 0.2px; line-height: 1.1; }
    .role { margin: 3px 0 0; font-size: 13px; font-weight: 700; color: #96ceff; letter-spacing: 0.06em; text-transform: uppercase; }
    .role-sub { margin: 2px 0 0; font-size: 11.5px; color: #cfe4ff; font-weight: 600; }
    .tagline { margin: 4px 0 0; font-size: 10px; color: #d8e9ff; font-weight: 600; }
    .meta { margin-top: 5px; display: flex; flex-wrap: wrap; gap: 4px 8px; font-size: 9.4px; color: #d8e9ff; }
    .body { padding: 8px 12px 10px; }
    .section { margin-bottom: 7px; }
    .title { margin: 0 0 4px; color: #0f766e; font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase; font-weight: 800; }
    p { margin: 0; color: #243a5a; font-size: 11.5px; line-height: 1.36; }
    .exp-item { border: 1px solid #d7e5fb; border-radius: 7px; padding: 6px 7px; background: #f9fbff; margin-bottom: 5px; }
    .exp-head { display: flex; justify-content: space-between; gap: 10px; align-items: baseline; margin-bottom: 2px; }
    .exp-role { font-size: 11.5px; font-weight: 700; color: #122f55; }
    .date { font-size: 9.5px; color: #486083; font-weight: 700; white-space: nowrap; }
    ul { margin: 0; padding-left: 12px; }
    li { margin-bottom: 0; color: #1f3658; font-size: 11px; line-height: 1.35; }
    .projects { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
    .project { border: 1px solid #d7e5fb; border-radius: 7px; padding: 6px; background: #f9fbff; }
    .project h3 { margin: 0; font-size: 11.5px; color: #12335f; line-height: 1.2; }
    .project p { margin-top: 2px; font-size: 11px; color: #2c466c; }
    .impact-list { margin: 0; padding-left: 12px; }
    .impact-list li { font-size: 9.1px; margin-bottom: 1px; color: #1f3658; }
    .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .box { border: 1px solid #d7e5fb; border-radius: 7px; padding: 6px; background: #f9fbff; }
  </style>
</head>
<body>
  <div class="sheet">
    <section class="header">
      <div>
        <h1>Jose Manuel Jacobo Urzua</h1>
        <p class="role">Senior Software Engineer | Full-Stack | Backend Specialist</p>
        <p class="role-sub">Backend | APIs | Production Systems | AMS</p>
        <p class="tagline">Focused on business-critical production platforms and high-reliability support.</p>
        <div class="meta">
          <span>Colima, Mexico</span>
          <span>+52 312 122 1007</span>
          <span>iscjacobomanuel@gmail.com</span>
          <span>linkedin.com/in/jm-jacobo/</span>
          <span>github.com/IscJacobo19/</span>
        </div>
      </div>
    </section>

    <div class="body">
      <section class="section">
        <h2 class="title">Impact</h2>
        <ul class="impact-list">
          <li>Supported and evolved 50+ production-grade enterprise applications.</li>
          <li>Strong AMS background: critical incident resolution, RCA, and service continuity.</li>
          <li>SQL query optimization and database performance tuning for enterprise platforms.</li>
        </ul>
      </section>

      <section class="section">
        <h2 class="title">Professional Summary</h2>
        <p>Software Engineer with 9+ years of experience building and maintaining enterprise web systems in production environments. Specialized in PHP backend development, database optimization, and API integration. Proven AMS experience delivering production support, critical incident resolution, and continuous platform evolution aligned with business goals.</p>
      </section>

      <section class="section">
        <h2 class="title">Professional Experience</h2>
        <article class="exp-item"><div class="exp-head"><span class="exp-role">Senior Full-Stack Developer / AMS Engineer - Softtek (CRT)</span><span class="date">Jul 2024 – Present</span></div><ul><li>Led critical incident handling and root cause analysis across production enterprise applications.</li><li>Drove evolutionary maintenance and SQL optimization for business-critical systems.</li></ul></article>
        <article class="exp-item"><div class="exp-head"><span class="exp-role">Software Developer - Softtek (Coppel)</span><span class="date">Jun 2022 – Jun 2024</span></div><ul><li>Maintained legacy document management platforms and improved operational stability.</li><li>Executed partial migration to PHP and automation of administrative workflows.</li></ul></article>
        <article class="exp-item"><div class="exp-head"><span class="exp-role">Full-Stack Developer / DBA - Witann Technologies</span><span class="date">Feb 2022 – Jun 2022</span></div><ul><li>Built Laravel-based business solutions and B2B platform modules.</li><li>Improved data model performance and maintainability.</li></ul></article>
        <article class="exp-item"><div class="exp-head"><span class="exp-role">Full-Stack Developer - PC Express Developers</span><span class="date">Feb 2021 – Feb 2022</span></div><ul><li>Developed campaign platform features with maps and analytics visualizations.</li><li>Implemented Laravel backend and Vue.js frontend components.</li></ul></article>
        <article class="exp-item"><div class="exp-head"><span class="exp-role">Full-Stack Developer - Corporativo ICEP</span><span class="date">Sep 2018 – Feb 2021</span></div><ul><li>Delivered SEP-approved electronic certification platform for education workflows.</li><li>Built and supported PHP + AngularJS + MySQL solutions.</li></ul></article>
        <article class="exp-item"><div class="exp-head"><span class="exp-role">Software Developer - Mundo Solar</span><span class="date">Feb 2016 – Jun 2018</span></div><ul><li>Developed C++ application for photovoltaic sizing and calculation.</li><li>Implemented core energy-calculation logic and inventory support.</li></ul></article>
      </section>

      <section class="section">
        <h2 class="title">Technology Stack</h2>
        <div class="projects">
          <article class="project"><h3>Backend</h3><p>PHP, Laravel, Yii2 Framework, CodeIgniter</p></article>
          <article class="project"><h3>Frontend</h3><p>JavaScript (Angular, Vue)</p></article>
          <article class="project"><h3>Databases</h3><p>MySQL, PostgreSQL, Oracle, SQL Server</p></article>
          <article class="project"><h3>Tools</h3><p>Git, REST APIs, Insomnia, Agile methodologies</p></article>
        </div>
      </section>

      <section class="section">
        <h2 class="title">Personal Projects</h2>
        <div class="projects">
          <article class="project"><h3>Web Invitations Platform</h3><p>Guest management, RSVP confirmation, and QR-based access control from an admin dashboard. Technologies: PHP, MySQL, JavaScript.</p></article>
          <article class="project"><h3>Appointment Management System</h3><p>Schedule control, availability handling, and booking flows in a centralized admin panel. Technologies: PHP, MySQL, JavaScript.</p></article>
          <article class="project"><h3>Dynamic Websites with Admin Panel</h3><p>Dynamic websites with content and section management from an administrative panel. Technologies: HTML, CSS, JavaScript.</p></article>
        </div>
      </section>

      <section class="section cols">
        <div class="box">
          <h2 class="title">Education</h2>
          <p class="exp-role">B.S. in Computer Systems Engineering</p>
          <p>Professional background in software analysis, design, and development.</p>
        </div>
        <div class="box">
          <h2 class="title">Languages</h2>
          <p><strong>Spanish</strong> — Native</p>
          <p><strong>English</strong> — Intermediate (technical reading and documentation)</p>
        </div>
      </section>
    </div>
  </div>
</body>
</html>`;
    }

    function openPdfWithHtml(html) {
      var w = window.open("", "_blank");
      if (!w) return;
      w.document.open();
      w.document.write(html);
      w.document.close();
      w.focus();
      w.setTimeout(function () {
        w.print();
      }, 350);
    }

    function closeLangModal() {
      if (!modal) return;
      modal.hidden = true;
    }

    function openLangModal() {
      if (!modal) return;
      modal.hidden = false;
    }

    btn.addEventListener("click", function (event) {
      event.preventDefault();
      if (modal) {
        openLangModal();
      } else {
        openPdfWithHtml(buildPdfHtmlEs());
      }
    });

    if (btnEs) {
      btnEs.addEventListener("click", function () {
        closeLangModal();
        openPdfWithHtml(buildPdfHtmlEs());
      });
    }

    if (btnEn) {
      btnEn.addEventListener("click", function () {
        closeLangModal();
        openPdfWithHtml(buildPdfHtmlEn());
      });
    }

    closeTriggers.forEach(function (el) {
      el.addEventListener("click", function () {
        closeLangModal();
      });
    });
  }

  initPdfCvGenerator();

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function typingDelayForChar(ch) {
    if (ch === "." || ch === "!" || ch === "?") return randomInt(120, 220);
    if (ch === "," || ch === ";" || ch === ":") return randomInt(80, 150);
    if (ch === " ") return randomInt(18, 40);
    return Math.random() < 0.16 ? randomInt(55, 105) : randomInt(20, 50);
  }

  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".main-nav");
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll("a")) : [];

  function closeMenu() {
    if (!nav || !menuBtn) return;
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || menuBtn.contains(event.target)) return;
      closeMenu();
    });
  }

  var revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !revealItems.length) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  function normalizePath(path) {
    if (!path) return "/";
    return path.replace(/\/+$/, "") || "/";
  }

  function getHrefPathAndHash(href) {
    try {
      var url = new URL(href, window.location.href);
      return {
        path: normalizePath(url.pathname),
        hash: url.hash || "",
      };
    } catch (e) {
      return { path: "", hash: "" };
    }
  }

  var currentPath = normalizePath(window.location.pathname);
  var hashNavLinks = navLinks.filter(function (link) {
    var parsed = getHrefPathAndHash(link.getAttribute("href") || "");
    return parsed.path === currentPath && parsed.hash.indexOf("#") === 0;
  });

  function activateByHref(matcher) {
    navLinks.forEach(function (link) {
      if (matcher(link)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  if (hashNavLinks.length) {
    var sections = hashNavLinks
      .map(function (link) {
        var parsed = getHrefPathAndHash(link.getAttribute("href") || "");
        return document.getElementById(parsed.hash.replace("#", ""));
      })
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      var activeId = sections[0].id;
      activateByHref(function (link) {
        var parsed = getHrefPathAndHash(link.getAttribute("href") || "");
        return parsed.path === currentPath && parsed.hash === "#" + activeId;
      });

      var navObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            activeId = entry.target.id;
          });
          activateByHref(function (link) {
            var parsed = getHrefPathAndHash(link.getAttribute("href") || "");
            return parsed.path === currentPath && parsed.hash === "#" + activeId;
          });
        },
        { threshold: 0.45, rootMargin: "-12% 0px -42% 0px" }
      );

      sections.forEach(function (section) {
        navObserver.observe(section);
      });
    }
  } else {
    activateByHref(function (link) {
      var parsed = getHrefPathAndHash(link.getAttribute("href") || "");
      return parsed.path === currentPath && parsed.hash === "";
    });
  }

  var typedEl = document.querySelector(".typed[data-type-seq]");
  if (typedEl) {
    var raw = typedEl.getAttribute("data-type-seq") || "";
    var shouldLoop = typedEl.getAttribute("data-type-loop") !== "false";
    var sequence = raw
      .split(";")
      .map(function (item) {
        return item.trim();
      })
      .filter(Boolean);

    var lineIndex = 0;
    var charIndex = 0;
    var erasing = false;
    var waitCounter = 0;

    function tickType() {
      if (!sequence.length) return;

      var fullText = sequence[lineIndex] || "";

      if (!erasing) {
        charIndex += 1;
        typedEl.textContent = fullText.slice(0, charIndex);
        if (charIndex >= fullText.length) {
          if (!shouldLoop) return;
          waitCounter += 1;
          if (waitCounter > 14) {
            erasing = true;
            waitCounter = 0;
          }
        }
      } else {
        charIndex -= 1;
        typedEl.textContent = fullText.slice(0, Math.max(charIndex, 0));
        if (charIndex <= 0) {
          erasing = false;
          lineIndex = (lineIndex + 1) % sequence.length;
        }
      }

      var currentChar = fullText.charAt(Math.max(charIndex - 1, 0));
      var delay = erasing ? randomInt(14, 30) : typingDelayForChar(currentChar);
      if (!erasing && charIndex >= fullText.length) {
        delay = randomInt(140, 260);
      }
      window.setTimeout(tickType, delay);
    }

    tickType();
  }

  var typedSource = document.querySelector(".typed-source[data-target]");
  if (typedSource) {
    var targetId = typedSource.getAttribute("data-target");
    var output = targetId ? document.getElementById(targetId) : null;
    var paragraphs = Array.prototype.slice
      .call(typedSource.querySelectorAll("p"))
      .map(function (p) {
        return (p.textContent || "").trim();
      })
      .filter(Boolean);

    if (output && paragraphs.length) {
      var scrollContainer = output.parentElement || output;
      var finishBtn = document.getElementById("finish-typing-btn");
      var timeoutId = null;
      var finished = false;
      var pIndex = 0;
      var cIndex = 0;
      var currentLine = null;
      var currentText = null;
      var currentCaret = null;

      function createTypingLine() {
        var line = document.createElement("p");
        line.className = "terminal-line";

        var text = document.createElement("span");
        text.className = "line-text";

        var caret = document.createElement("span");
        caret.className = "caret";

        line.appendChild(text);
        line.appendChild(caret);
        output.appendChild(line);

        currentLine = line;
        currentText = text;
        currentCaret = caret;
      }

      function completeNow() {
        finished = true;
        if (timeoutId) {
          window.clearTimeout(timeoutId);
          timeoutId = null;
        }

        output.innerHTML = "";
        paragraphs.forEach(function (text) {
          var line = document.createElement("p");
          line.className = "terminal-line";
          line.textContent = text;
          output.appendChild(line);
        });

        if (typedEl && typedEl.getAttribute("data-type-loop") === "false") {
          var seqRaw = typedEl.getAttribute("data-type-seq") || "";
          var seqList = seqRaw
            .split(";")
            .map(function (item) {
              return item.trim();
            })
            .filter(Boolean);
          if (seqList.length) {
            typedEl.textContent = seqList[seqList.length - 1];
          }
        }

        scrollContainer.scrollTop = scrollContainer.scrollHeight;

        if (finishBtn) {
          finishBtn.disabled = true;
          finishBtn.textContent = "Animacion completada";
        }
      }

      function schedule(fn, delay) {
        if (finished) return;
        timeoutId = window.setTimeout(fn, delay);
      }

      createTypingLine();

      function tickParagraphs() {
        if (finished) return;
        var text = paragraphs[pIndex] || "";
        cIndex += 1;
        currentText.textContent = text.slice(0, cIndex);
        scrollContainer.scrollTop = scrollContainer.scrollHeight;

        if (cIndex >= text.length) {
          pIndex += 1;
          cIndex = 0;
          if (pIndex >= paragraphs.length) return;

          schedule(function () {
            if (currentCaret && currentCaret.parentNode) {
              currentCaret.parentNode.removeChild(currentCaret);
            }

            createTypingLine();
            tickParagraphs();
          }, 220);
          return;
        }

        var activeChar = text.charAt(Math.max(cIndex - 1, 0));
        schedule(tickParagraphs, typingDelayForChar(activeChar));
      }

      if (finishBtn) {
        finishBtn.addEventListener("click", completeNow);
      }

      tickParagraphs();
    }
  }
})();
