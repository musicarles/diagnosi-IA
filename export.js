function getDadesExport() {
  const d = carregarDades();
  const files = [];

  PREGUNTES_DATA.ambits.forEach(ambit => {
    ambit.preguntes.forEach(p => {
      const resposta = d.respostes[p.id] || '';
      const a = d.analisi[p.id] || {};
      const prioritatLabels = { molt_alt: 'Molt alt', alt: 'Alt', baix: 'Baix', molt_baix: 'Molt baix' };
      files.push({
        ambit: ambit.titol,
        pregunta: p.text,
        resposta: resposta === 'si' ? 'SÍ' : resposta === 'no' ? 'NO' : resposta === 'no_aplica' ? 'NO APLICA' : '',
        prioritat: prioritatLabels[a.prioritat] || a.prioritat || '',
        assolible: a.assolible || '',
        dificultat: a.dificultat || '',
        proposta: a.proposta || ''
      });
    });
  });

  return files;
}

/* ==================== CSV ==================== */
function exportarCSV() {
  const files = getDadesExport();
  const BOM = '\uFEFF';

  const encapçalaments = [
    'Àmbit',
    'Pregunta',
    'Resposta',
    'Prioritat de la millora',
    'De quina manera és assolible?',
    'Grau de dificultat (1-10)',
    'Proposta de millora'
  ];

  const fila = r => ([
    r.ambit, r.pregunta, r.resposta,
    r.prioritat, r.assolible, r.dificultat, r.proposta
  ]).map(val => {
    if (val == null) return '';
    const text = String(val).replace(/"/g, '""');
    return /[,"\n]/.test(text) ? `"${text}"` : text;
  });

  const csv = [
    encapçalaments.join(','),
    ...files.map(f => fila(f).join(','))
  ].join('\r\n');

  const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8;' });
  descarregarBlob(blob, 'diagnosi_ia.csv');
}

/* ==================== PDF ==================== */
function exportarPDF() {
  if (typeof jspdf === 'undefined') {
    alert('La llibreria jsPDF no s\'ha carregat. Prova a recarregar la pàgina.');
    return;
  }

  const { jsPDF } = jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const dades = carregarDades();
  const margin = 20;
  const pageW = 210;
  const pageH = 297;
  const usable = pageW - margin * 2;

  const colors = {
    primary: [37, 99, 235],
    primaryDark: [29, 78, 216],
    green: [22, 163, 74],
    greenBg: [240, 253, 244],
    red: [220, 38, 38],
    redBg: [254, 242, 242],
    amber: [217, 119, 6],
    amberBg: [255, 251, 235],
    grayBg: [248, 250, 252],
    grayBorder: [226, 232, 240],
    grayText: [100, 116, 139],
    dark: [30, 41, 59]
  };

  function addPageIfNeeded(y, needed) {
    if (y + needed > pageH - margin) {
      doc.addPage();
      return margin;
    }
    return y;
  }

  let y = margin;

  /* ============ PORTADA ============ */
  // Fons blau degradat (simulat)
  doc.setFillColor(...colors.primary);
  doc.rect(0, 0, pageW, 140, 'F');

  doc.setFillColor(...colors.primaryDark);
  doc.rect(0, 140, pageW, 12, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.text('Diagnosi d\'ús de la IA', pageW / 2, 55, { align: 'center' });
  doc.setFontSize(22);
  const centreNom = dades.centre?.nom?.trim();
  doc.text(centreNom || 'al centre educatiu', pageW / 2, 75, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(13);
  doc.text('Informe de diagnosi', pageW / 2, 110, { align: 'center' });

  doc.setFontSize(11);
  doc.text(new Date().toLocaleDateString('ca-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  }), pageW / 2, 126, { align: 'center' });

  // Caixa de resum a la portada
  const totalPreg = PREGUNTES_DATA.ambits.reduce((s, a) => s + a.preguntes.length, 0);
  const respostesFetes = Object.keys(dades.respostes).length;
  const noCount = Object.values(dades.respostes).filter(v => v === 'no').length;

  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, 165, usable, 50, 4, 4, 'F');
  doc.setDrawColor(...colors.grayBorder);
  doc.roundedRect(margin, 165, usable, 50, 4, 4, 'S');

  doc.setTextColor(...colors.dark);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Resum', margin + 8, 183);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...colors.grayText);
  doc.text(`Total preguntes: ${totalPreg}`, margin + 8, 199);
  doc.text(`Respostes: ${respostesFetes}/${totalPreg}`, margin + 8, 212);
  doc.text(`Respostes "NO" (millora): ${noCount}`, margin + 8, 225);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...colors.primary);
  doc.text('www.eina-diagnosi-ia.cat', pageW / 2, 270, { align: 'center' });

  y = margin + 50;

  /* ============ ESTADÍSTIQUES ============ */
  doc.addPage();
  y = margin;

  doc.setFillColor(...colors.primary);
  doc.rect(margin, y, usable, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Resum per àmbits', margin + 5, y + 9);

  y += 20;

  const ambitStats = PREGUNTES_DATA.ambits.map(ambit => {
    const si = ambit.preguntes.filter(p => dades.respostes[p.id] === 'si').length;
    const no = ambit.preguntes.filter(p => dades.respostes[p.id] === 'no').length;
    const na = ambit.preguntes.filter(p => dades.respostes[p.id] === 'no_aplica').length;
    const tot = ambit.preguntes.length;
    const fetes = si + no + na;
    return [ambit.titol, `${fetes}/${tot}`, `${si}`, `${no}`, `${na}`];
  });

  const siTotal = ambitStats.reduce((s, r) => s + parseInt(r[2]), 0);
  const noTotal = ambitStats.reduce((s, r) => s + parseInt(r[3]), 0);
  const naTotal = ambitStats.reduce((s, r) => s + parseInt(r[4]), 0);

  doc.autoTable({
    head: [['Àmbit', 'Respostes', 'SÍ', 'NO', 'NO APLICA']],
    body: [
      ...ambitStats,
      ['TOTAL', `${Object.keys(dades.respostes).length}/${PREGUNTES_DATA.ambits.reduce((s, a) => s + a.preguntes.length, 0)}`, `${siTotal}`, `${noTotal}`, `${naTotal}`]
    ],
    startY: y,
    margin: { left: 25, right: 25 },
    headStyles: {
      fillColor: colors.primary,
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 9,
      cellPadding: 2
    },
    bodyStyles: {
      fontSize: 9,
      textColor: colors.dark
    },
    footStyles: {
      fillColor: [241, 245, 249],
      textColor: colors.dark,
      fontStyle: 'bold',
      fontSize: 9
    },
    alternateRowStyles: {
      fillColor: colors.grayBg
    },
    didParseCell: function (data) {
      if (data.section === 'body' && data.column.index >= 2) {
        const val = parseInt(data.cell.raw);
        if (data.column.index === 2 && val > 0) data.cell.styles.textColor = colors.green;
        if (data.column.index === 3 && val > 0) data.cell.styles.textColor = colors.red;
        if (data.column.index === 4 && val > 0) data.cell.styles.textColor = colors.amber;
      }
    },
    tableLineColor: colors.grayBorder,
    tableLineWidth: 0.5
  });

  y = doc.lastAutoTable.finalY + 15;

  /* ============ DETALL PER ÀMBITS ============ */
  PREGUNTES_DATA.ambits.forEach(ambit => {
    y = addPageIfNeeded(y, 25);

    doc.setFillColor(...colors.primary);
    doc.rect(margin, y, usable, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(ambit.titol, margin + 5, y + 7);
    y += 16;

    const bodyRows = ambit.preguntes.map((p, i) => {
      const r = dades.respostes[p.id] || '';
      const label = r === 'si' ? 'SÍ' : r === 'no' ? 'NO' : r === 'no_aplica' ? 'NO APLICA' : '—';
      return [i + 1, p.text, label];
    });

    doc.autoTable({
      head: [['#', 'Pregunta', 'Resposta']],
      body: bodyRows,
      startY: y,
      margin: { left: 30, right: 30 },
      headStyles: {
        fillColor: [51, 65, 85],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
        cellPadding: 3
      },
      bodyStyles: {
        fontSize: 8.5,
        textColor: colors.dark,
        lineHeight: 1.3
      },
      alternateRowStyles: {
        fillColor: colors.grayBg
      },
      didParseCell: function (data) {
        if (data.section === 'body' && data.column.index === 2) {
          const val = data.cell.raw;
          if (val === 'SÍ') { data.cell.styles.fillColor = colors.greenBg; data.cell.styles.textColor = colors.green; }
          if (val === 'NO') { data.cell.styles.fillColor = colors.redBg; data.cell.styles.textColor = colors.red; }
          if (val === 'NO APLICA') { data.cell.styles.fillColor = colors.amberBg; data.cell.styles.textColor = colors.amber; }
        }
      },
      tableLineColor: colors.grayBorder,
      tableLineWidth: 0.5
    });

    y = doc.lastAutoTable.finalY + 10;
  });

  /* ============ ANÀLISI DE MILLORA ============ */
  const respostesNo = [];
  PREGUNTES_DATA.ambits.forEach(ambit => {
    ambit.preguntes.forEach(p => {
      if (dades.respostes[p.id] === 'no') {
        respostesNo.push({ ...p, ambit: ambit.titol });
      }
    });
  });

  if (respostesNo.length > 0) {
    y = addPageIfNeeded(y, 25);

    doc.addPage();
    y = margin;

    doc.setFillColor(220, 38, 38);
    doc.rect(margin, y, usable, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Anàlisi de millora', margin + 5, y + 9);
    y += 20;

    const prioritatLabels = { molt_alt: 'Molt alt', alt: 'Alt', baix: 'Baix', molt_baix: 'Molt baix' };
    const prioritatColors = { molt_alt: [220, 38, 38], alt: [234, 88, 12], baix: [234, 179, 8], molt_baix: [34, 197, 94] };

    // Group NO answers by ambit
    const noPerAmbit = {};
    PREGUNTES_DATA.ambits.forEach(ambit => {
      const noAmbit = ambit.preguntes.filter(p => dades.respostes[p.id] === 'no');
      if (noAmbit.length > 0) {
        noPerAmbit[ambit.titol] = noAmbit.map(p => {
          const a = dades.analisi[p.id] || {};
          const prio = a.prioritat || '';
          const prioLabel = prioritatLabels[prio] || '—';
          let dificLabel = a.dificultat ? `${a.dificultat}/10` : '—';
          return [
            p.text,
            { content: prioLabel, styles: { textColor: prioritatColors[prio] || [156, 163, 175], fontStyle: 'bold' } },
            a.assolible || '—',
            dificLabel,
            a.proposta || '—'
          ];
        });
      }
    });

    const ambitEntries = Object.entries(noPerAmbit);
    ambitEntries.forEach(([ambitNom, rows], ambitIdx) => {
      y = addPageIfNeeded(y, 25);

      doc.setFillColor(...colors.red);
      doc.rect(margin, y, usable, 10, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text(ambitNom, margin + 5, y + 7);
      y += 14;

      doc.autoTable({
        head: [['Pregunta', 'Prioritat', 'Com és assolible?', 'Dific.', 'Proposta']],
        body: rows,
        startY: y,
        margin: { left: 20, right: 20 },
        headStyles: {
          fillColor: [51, 65, 85],
          textColor: 255,
          fontStyle: 'bold',
          fontSize: 8,
          cellPadding: 3
        },
        bodyStyles: {
          fontSize: 7.5,
          textColor: colors.dark,
          lineHeight: 1.2,
          valign: 'top'
        },
        alternateRowStyles: {
          fillColor: colors.grayBg
        },
        columnStyles: {
          0: { cellWidth: 52 },
          1: { cellWidth: 20, halign: 'center' },
          2: { cellWidth: 40 },
          3: { cellWidth: 16, halign: 'center' },
          4: { cellWidth: 42 }
        },
        tableLineColor: colors.grayBorder,
        tableLineWidth: 0.5
      });

      y = doc.lastAutoTable.finalY + 10;
    });
  }

  /* ============ FULL DE CANVIS ============ */
  const changelog = dades.changelog || [];
  if (changelog.length > 0) {
    doc.addPage();
    y = margin;

    doc.setFillColor(...colors.primary);
    doc.rect(margin, y, usable, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Full de canvis', margin + 5, y + 9);
    y += 20;

    doc.autoTable({
      head: [['Versió', 'Data', 'Descripció dels canvis', 'Persona']],
      body: changelog.map(e => [e.versio, e.data, e.descripcio, e.autor || '—']),
      startY: y,
      margin: { left: 25, right: 25 },
      headStyles: {
        fillColor: colors.primary,
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
        cellPadding: 3
      },
      bodyStyles: {
        fontSize: 8.5,
        textColor: colors.dark,
        valign: 'top'
      },
      alternateRowStyles: {
        fillColor: colors.grayBg
      },
      tableLineColor: colors.grayBorder,
      tableLineWidth: 0.5
    });

    y = doc.lastAutoTable.finalY + 10;
  }

  /* ============ PEU ============ */
  y = addPageIfNeeded(y, 20);
  doc.setDrawColor(...colors.grayBorder);
  doc.line(margin, y, pageW - margin, y);
  y += 6;
  doc.setTextColor(...colors.grayText);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('Informe generat automàticament per l\'Eina de Diagnosi IA', pageW / 2, y, { align: 'center' });
  y += 4;
  doc.text(new Date().toLocaleDateString('ca-ES', {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
  }), pageW / 2, y, { align: 'center' });

  // Auto-registrar al full de canvis
  afegirEntradaChangelog('Exportació a PDF');

  doc.save('diagnosi_ia.pdf');
}

/* ====== UTILITAT ====== */
function descarregarBlob(blob, nomFitxer) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nomFitxer;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
