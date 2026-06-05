const STORAGE_KEY = 'eina_diagnosi_ia_data';

function getDefaultData() {
  return {
    respostes: {},
    analisi: {},
    centre: { nom: '', persona: '' },
    changelog: []
  };
}

function carregarDades() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultData();
    const data = JSON.parse(raw);
    return {
      respostes: data.respostes || {},
      analisi: data.analisi || {},
      centre: data.centre || { nom: '', persona: '' },
      changelog: data.changelog || []
    };
  } catch {
    return getDefaultData();
  }
}

function desarDades(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error desant dades:', e);
  }
}

function desarResposta(id, valor) {
  const data = carregarDades();
  data.respostes[id] = valor;
  desarDades(data);
}

function desarAnalisi(id, camps) {
  const data = carregarDades();
  if (!data.analisi) data.analisi = {};
  data.analisi[id] = camps;
  desarDades(data);
}

function desarCentre(nom, persona) {
  const data = carregarDades();
  data.centre = { nom, persona };
  desarDades(data);
}

function afegirEntradaChangelog(descripcio) {
  const data = carregarDades();
  if (!data.changelog) data.changelog = [];
  const versio = data.changelog.length + 1;
  data.changelog.push({
    versio,
    data: new Date().toLocaleDateString('ca-ES', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    }),
    descripcio,
    autor: data.centre?.persona || ''
  });
  desarDades(data);
}

function esborrarTotesDades() {
  localStorage.removeItem(STORAGE_KEY);
}
