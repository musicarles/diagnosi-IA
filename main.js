const PREGUNTES_DATA = {
  "ambits": [
    {
      "id": "practica_docent",
      "titol": "Pràctica docent amb IA",
      "preguntes": [
        { "id": "pd_01", "text": "El professorat utilitza eines d'IA per generar materials didàctics (activitats, textos, exemples o recursos per a l'aula)." },
        { "id": "pd_02", "text": "El professorat utilitza eines d'IA per adaptar activitats o explicacions a diferents nivells de l'alumnat dins d'un mateix grup." },
        { "id": "pd_03", "text": "El professorat utilitza IA per revisar, corregir o millorar produccions de l'alumnat." },
        { "id": "pd_04", "text": "El professorat utilitza IA com a suport en la planificació de situacions d'aprenentatge." },
        { "id": "pd_05", "text": "El professorat revisa, edita o adapta el contingut generat per IA abans d'utilitzar-lo amb l'alumnat." },
        { "id": "pd_06", "text": "El professorat identifica errors, biaixos o limitacions en les respostes generades per sistemes d'IA abans d'utilitzar-les." },
        { "id": "pd_07", "text": "El professorat comparteix amb altres docents experiències, exemples o pràctiques d'ús d'IA educativa." }
      ]
    },
    {
      "id": "us_alumnat",
      "titol": "Ús de l'alumnat",
      "preguntes": [
        { "id": "ua_01", "text": "L'alumnat utilitza eines d'IA per elaborar o completar tasques assignades pel professorat." },
        { "id": "ua_02", "text": "L'alumnat utilitza eines d'IA durant activitats d'aprenentatge dins de l'aula amb supervisió docent." },
        { "id": "ua_03", "text": "L'alumnat utilitza eines d'IA de manera autònoma fora de l'aula per fer tasques." },
        { "id": "ua_04", "text": "L'alumnat utilitza IA per resumir, simplificar o explicar continguts treballats a classe." },
        { "id": "ua_05", "text": "L'alumnat utilitza IA per generar textos, presentacions o altres produccions." },
        { "id": "ua_06", "text": "L'alumnat utilitza IA com a suport per resoldre problemes o activitats." },
        { "id": "ua_07", "text": "L'alumnat contrasta, revisa o verifica la informació generada per eines d'IA abans de donar-la per vàlida." },
        { "id": "ua_08", "text": "L'alumnat rep orientació explícita per part del professorat sobre com utilitzar la IA de manera crítica i responsable." }
      ]
    },
    {
      "id": "transformacio_pedagogica",
      "titol": "Transformació pedagògica",
      "preguntes": [
        { "id": "tp_01", "text": "S'han modificat activitats o tasques d'aprenentatge del centre a causa de la incorporació de la IA." },
        { "id": "tp_02", "text": "S'han dissenyat noves activitats específiques que incorporen explícitament l'ús d'eines d'IA." },
        { "id": "tp_03", "text": "S'han adaptat, eliminat o substituït activitats per reduir usos inadequats o poc significatius de la IA." },
        { "id": "tp_04", "text": "S'han incorporat activitats específiques per desenvolupar el pensament crític sobre la informació generada per IA." },
        { "id": "tp_05", "text": "S'han revisat o modificat criteris d'avaluació a causa de la incorporació de la IA en les activitats d'aprenentatge." },
        { "id": "tp_06", "text": "S'han dut a terme activitats específiques per ensenyar a l'alumnat a verificar o contrastar resultats generats per IA." },
        { "id": "tp_07", "text": "S'han treballat explícitament amb l'alumnat els límits, riscos i errors possibles dels sistemes d'IA." }
      ]
    },
    {
      "id": "avaluacio",
      "titol": "Avaluació",
      "preguntes": [
        { "id": "av_01", "text": "El centre ha revisat els criteris d'avaluació per adaptar-los a l'ús d'eines d'IA en les activitats." },
        { "id": "av_02", "text": "Els criteris d'avaluació tenen en compte explícitament el procés d'elaboració i no només el producte final." },
        { "id": "av_03", "text": "L'ús d'eines d'IA per part de l'alumnat es considera explícitament en la valoració de les activitats." },
        { "id": "av_04", "text": "El professorat disposa d'orientacions compartides sobre com avaluar activitats en què s'ha utilitzat IA." },
        { "id": "av_05", "text": "S'han adaptat instruments d'avaluació (rúbriques, proves o tasques) a la presència d'eines d'IA." },
        { "id": "av_06", "text": "S'inclou l'autoreflexió de l'alumnat sobre l'ús d'IA dins del procés d'avaluació." }
      ]
    },
    {
      "id": "etica_privacitat",
      "titol": "Ètica i privacitat",
      "preguntes": [
        { "id": "ep_01", "text": "El centre disposa de criteris o orientacions per garantir un ús responsable de les eines d'IA." },
        { "id": "ep_02", "text": "El centre treballa amb l'alumnat aspectes relacionats amb la privacitat i protecció de dades en l'ús d'IA." },
        { "id": "ep_03", "text": "Les eines d'IA utilitzades al centre són revisades o validades abans de ser introduïdes en context educatiu." },
        { "id": "ep_04", "text": "El professorat coneix els principals riscos associats a l'ús de sistemes d'IA (errors, biaixos, privacitat)." },
        { "id": "ep_05", "text": "El centre estableix limitacions o restriccions sobre l'ús d'eines d'IA no autoritzades." },
        { "id": "ep_06", "text": "El centre promou explícitament un ús segur, ètic i responsable de les eines d'IA." }
      ]
    },
    {
      "id": "organitzacio_centre",
      "titol": "Organització del centre",
      "preguntes": [
        { "id": "oc_01", "text": "El centre disposa d'una estratègia o línia de treball explícita sobre la incorporació de la IA." },
        { "id": "oc_02", "text": "L'ús de la IA està recollit o integrat en els documents del centre." },
        { "id": "oc_03", "text": "El professorat del centre rep formació específica o orientació sobre l'ús educatiu de la IA." },
        { "id": "oc_04", "text": "El centre disposa de criteris compartits sobre l'ús de la IA per part del professorat i l'alumnat." },
        { "id": "oc_05", "text": "Hi ha una persona, equip o referent que coordina o orienta l'ús de la IA al centre." },
        { "id": "oc_06", "text": "El centre comparteix de manera sistemàtica bones pràctiques sobre l'ús de la IA entre el professorat." }
      ]
    }
  ]
};

let dades = carregarDades();

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnReiniciar').addEventListener('click', () => {
    if (confirm('Això esborrarà totes les respostes i anàlisis. Segur?')) {
      esborrarTotesDades();
      dades = carregarDades();
      renderitzarTot();
      renderitzarChangelog();
    }
  });

  renderitzarTot();
  configurarTabs();
  configurarCentre();
  configurarChangelog();
  renderitzarChangelog();
  configurarExport();
});

function renderitzarTot() {
  renderitzarNavegacioAmbists();
  renderitzarDiagnosi();
  renderitzarAnalisi();
  actualitzarProgres();
}

function renderitzarNavegacioAmbists() {
  const nav = document.getElementById('ambitNav');
  nav.innerHTML = `
    <div class="sidebar-title">Àmbits</div>
    <div class="sidebar-nav">
      ${PREGUNTES_DATA.ambits.map(a =>
        `<button class="sidebar-link" data-target="${a.id}">${a.titol}</button>`
      ).join('')}
    </div>
  `;

  nav.addEventListener('click', e => {
    const btn = e.target.closest('.sidebar-link');
    if (!btn) return;

    // Switch to Diagnosi tab if not already there
    const tabBtn = document.querySelector('.tab[data-tab="diagnosi"]');
    if (tabBtn && !tabBtn.classList.contains('active')) {
      tabBtn.click();
    }

    const target = document.getElementById('ambit-' + btn.dataset.target);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250);
    }
  });
}

function renderitzarDiagnosi() {
  const container = document.getElementById('diagnosiContainer');
  container.innerHTML = PREGUNTES_DATA.ambits.map(ambit => {
    const respostesAmbit = ambit.preguntes.filter(p => dades.respostes[p.id]).length;
    return `
      <div class="ambit-card" id="ambit-${ambit.id}">
        <div class="ambit-header">
          <h2 class="ambit-titol">${ambit.titol}</h2>
          <span class="ambit-comptador">${respostesAmbit}/${ambit.preguntes.length}</span>
        </div>
        <div class="ambit-body">
          ${ambit.preguntes.map(p => {
            const valor = dades.respostes[p.id] || '';
            return `
              <div class="pregunta" data-id="${p.id}">
                <p class="pregunta-text">${p.text}</p>
                <div class="respostes">
                  ${['si', 'no', 'no_aplica'].map(v => `
                    <div class="resposta-opcio">
                      <input type="radio" id="${p.id}_${v}" name="${p.id}" value="${v}"
                        ${valor === v ? 'checked' : ''}>
                      <label class="resposta-label" data-value="${v}" for="${p.id}_${v}">
                        ${v === 'si' ? 'SÍ' : v === 'no' ? 'NO' : 'NO APLICA'}
                      </label>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.addEventListener('change', e => {
    if (e.target.matches('input[type="radio"]')) {
      desarResposta(e.target.name, e.target.value);
      dades = carregarDades();
      actualitzarProgres();
      actualitzarComptadorsAmbits();
    }
  });
}

function actualitzarComptadorsAmbits() {
  PREGUNTES_DATA.ambits.forEach(ambit => {
    const card = document.getElementById('ambit-' + ambit.id);
    if (!card) return;
    const comptador = card.querySelector('.ambit-comptador');
    const respostesAmbit = ambit.preguntes.filter(p => dades.respostes[p.id]).length;
    if (comptador) comptador.textContent = `${respostesAmbit}/${ambit.preguntes.length}`;
  });
}

function actualitzarProgres() {
  const total = PREGUNTES_DATA.ambits.reduce((s, a) => s + a.preguntes.length, 0);
  const respostes = Object.keys(dades.respostes).length;
  const pct = Math.round((respostes / total) * 100);

  document.getElementById('progressBarFill').style.width = Math.min(pct, 100) + '%';
  document.getElementById('progressText').textContent = `${respostes} / ${total} respostes`;
}

function renderitzarAnalisi() {
  const container = document.getElementById('analisiContainer');
  const respostesNo = [];

  PREGUNTES_DATA.ambits.forEach(ambit => {
    ambit.preguntes.forEach(p => {
      if (dades.respostes[p.id] === 'no') {
        respostesNo.push({ ...p, ambit: ambit.titol });
      }
    });
  });

  const total = PREGUNTES_DATA.ambits.reduce((s, a) => s + a.preguntes.length, 0);
  const respostesOk = Object.keys(dades.respostes).length;

  if (respostesNo.length === 0) {
    container.innerHTML = `
      <div class="analisi-header ${respostesOk === total ? 'complet' : ''}">
        ${respostesOk === total
          ? '<div class="analisi-header-icon">&#x2705;</div><h2>Cap resposta negativa</h2><p>No hi ha preguntes amb resposta "NO". El centre té un bon nivell en tots els àmbits.</p>'
          : '<div class="analisi-header-icon">&#x1F4CB;</div><h2>Respon les preguntes primer</h2><p>Ves a la pestanya Diagnosi i respon totes les preguntes per veure l\'anàlisi de millora.</p>'
        }
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="analisi-header">
      <div class="analisi-header-icon">&#x1F50D;</div>
      <h2>Anàlisi de millora</h2>
      <p>${respostesNo.length === 1 ? '1 àrea de millora detectada' : respostesNo.length + ' àrees de millora detectades'}. Ompliu els camps per a cada proposta.</p>
    </div>
    ${respostesNo.map(p => {
      const a = dades.analisi[p.id] || {};
      return `
        <div class="analisi-item" data-id="${p.id}">
          <div class="analisi-item-header">
            <p class="pregunta-text">${p.text}</p>
            <span style="font-size:0.78rem;color:var(--gray-500)">${p.ambit}</span>
          </div>
          <div class="analisi-item-body">
            <div class="camp-analisi">
              <label for="analisi_prioritat_${p.id}">Prioritat de la millora</label>
              <select id="analisi_prioritat_${p.id}" data-camp="prioritat" class="select-prioritat">
                <option value="">Seleccioneu...</option>
                <option value="molt_alt" ${a.prioritat === 'molt_alt' ? 'selected' : ''}>Molt alt</option>
                <option value="alt" ${a.prioritat === 'alt' ? 'selected' : ''}>Alt</option>
                <option value="baix" ${a.prioritat === 'baix' ? 'selected' : ''}>Baix</option>
                <option value="molt_baix" ${a.prioritat === 'molt_baix' ? 'selected' : ''}>Molt baix</option>
              </select>
            </div>
            <div class="camp-analisi">
              <label for="analisi_assolible_${p.id}">De quina manera és assolible?</label>
              <textarea id="analisi_assolible_${p.id}" data-camp="assolible">${a.assolible || ''}</textarea>
            </div>
            <div class="camp-analisi">
              <label for="analisi_dificultat_${p.id}">Grau de dificultat per dur-ho a terme</label>
              <div class="camp-dificultat">
                <span style="font-size:0.78rem;color:var(--gray-400)">1 (difícil)</span>
                <input type="range" id="analisi_dificultat_${p.id}" data-camp="dificultat"
                  min="1" max="10" value="${a.dificultat || 5}">
                <span class="dificultat-valor" id="dificultat_valor_${p.id}">${a.dificultat || 5}</span>
                <span style="font-size:0.78rem;color:var(--gray-400)">10 (fàcil)</span>
              </div>
            </div>
            <div class="camp-analisi">
              <label for="analisi_proposta_${p.id}">Proposta de millora</label>
              <textarea id="analisi_proposta_${p.id}" data-camp="proposta">${a.proposta || ''}</textarea>
            </div>
          </div>
        </div>
      `;
    }).join('')}
  `;

  container.addEventListener('input', e => {
    const el = e.target;
    if (el.matches('textarea, input[type="range"], select')) {
      const item = el.closest('.analisi-item');
      if (!item) return;
      const id = item.dataset.id;
      const camp = el.dataset.camp;
      const camps = { ...(dades.analisi[id] || {}), [camp]: el.value };
      desarAnalisi(id, camps);
      dades = carregarDades();

      if (el.type === 'range') {
        const valorSpan = document.getElementById('dificultat_valor_' + id);
        if (valorSpan) valorSpan.textContent = el.value;
      }
    }
  });
}

function configurarTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');

      if (tab.dataset.tab === 'analisi') {
        dades = carregarDades();
        renderitzarAnalisi();
      }
      if (tab.dataset.tab === 'exporta') {
        dades = carregarDades();
        document.getElementById('centreNom').value = dades.centre?.nom || '';
        document.getElementById('centrePersona').value = dades.centre?.persona || '';
        renderitzarChangelog();
      }
    });
  });
}

function configurarCentre() {
  const nomInput = document.getElementById('centreNom');
  const personaInput = document.getElementById('centrePersona');
  if (!nomInput || !personaInput) return;

  nomInput.value = dades.centre?.nom || '';
  personaInput.value = dades.centre?.persona || '';

  nomInput.addEventListener('input', () => {
    desarCentre(nomInput.value, personaInput.value);
    dades = carregarDades();
  });
  personaInput.addEventListener('input', () => {
    desarCentre(nomInput.value, personaInput.value);
    dades = carregarDades();
  });
}

function renderitzarChangelog() {
  const container = document.getElementById('changelogTableContainer');
  if (!container) return;
  const dades = carregarDades();
  const changelog = dades.changelog || [];

  if (changelog.length === 0) {
    container.innerHTML = '<p class="changelog-buit">No hi ha entrades al full de canvis.</p>';
    return;
  }

  container.innerHTML = `
    <table class="changelog-taula">
      <thead>
        <tr><th>Versió</th><th>Data</th><th>Descripció dels canvis</th><th>Persona</th></tr>
      </thead>
      <tbody>
        ${changelog.map(e => `
          <tr>
            <td>${e.versio}</td>
            <td>${e.data}</td>
            <td>${e.descripcio}</td>
            <td>${e.autor}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function configurarChangelog() {
  const btnNova = document.getElementById('btnNovaEntrada');
  const descContainer = document.getElementById('changelogDescContainer');
  const descText = document.getElementById('changelogDesc');
  const btnGuardar = document.getElementById('btnGuardarEntrada');
  const btnCancel = document.getElementById('btnCancelarEntrada');

  if (!btnNova || !descContainer || !descText || !btnGuardar || !btnCancel) return;

  btnNova.addEventListener('click', () => {
    descContainer.style.display = 'block';
    btnNova.style.display = 'none';
    descText.value = '';
    descText.focus();
  });

  btnCancel.addEventListener('click', () => {
    descContainer.style.display = 'none';
    btnNova.style.display = '';
    descText.value = '';
  });

  btnGuardar.addEventListener('click', () => {
    const desc = descText.value.trim();
    if (!desc) { alert('Cal escriure una descripció dels canvis.'); return; }
    afegirEntradaChangelog(desc);
    dades = carregarDades();
    renderitzarChangelog();
    descContainer.style.display = 'none';
    btnNova.style.display = '';
    descText.value = '';
  });
}

function configurarExport() {
  document.getElementById('btnExportCSV').addEventListener('click', exportarCSV);
  document.getElementById('btnExportPDF').addEventListener('click', () => {
    exportarPDF();
    dades = carregarDades();
    renderitzarChangelog();
  });
}
