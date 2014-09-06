// Ordine iniziale.
/* TODO: creare un tasto "mischia" e partire con un ordine casuale sempre
 * diverso, escludendo però le configurazioni impossibili. Vedi a proposito:
 * http://en.wikipedia.org/wiki/15_puzzle
 */
var gioco_del_15_tabellina = [
  [3, 1, 6, 2],
  [5, 7, 15, 13],
  [4, 11, 8, 9],
  [14, 10, 12, null]
];

(function() {
  var riga, colonna, numero;

  // Stampa la tabellina.
  document.write('<table id="gioco_del_15">');
  for (riga = 0; riga < 4; riga++) {
    document.write('<tr>');
    // Stampa una riga.
    for (colonna = 0; colonna < 4; colonna++) {
      document.write('<td>');
      if (numero = gioco_del_15_tabellina[riga][colonna]) {
        document.write(gioco_del_15_codice_bottone(riga, colonna, numero));
      }
    }
  }
  document.write('</table>');
}());

function gioco_del_15_codice_bottone(riga, colonna, numero) {
  return '<button onclick="gioco_del_15_sposta(' + riga + ',' + colonna + ')">'
    + numero + '</button>';
}

function gioco_del_15_sposta(riga, colonna) {
  var numero_da_spostare = gioco_del_15_tabellina[riga][colonna];

  function prova_direzione(incremento_riga, incremento_colonna) {
    var nuova_riga = riga + incremento_riga,
      nuova_colonna = colonna + incremento_colonna;
    if (nuova_riga >= 0 && nuova_riga < 4
        && nuova_colonna >= 0 && nuova_colonna < 4
        && gioco_del_15_tabellina[nuova_riga][nuova_colonna] == null) {
      // Trovata la casella vuota in questa direzione.

      // Aggiorna la tabellina in memoria.
      gioco_del_15_tabellina[nuova_riga][nuova_colonna] = numero_da_spostare;
      gioco_del_15_tabellina[riga][colonna] = null;

      // Aggiornala sullo schermo.
      var righe_tabella = document.getElementById('gioco_del_15').getElementsByTagName('tr');
      righe_tabella[riga].childNodes[colonna].innerHTML = '';
      righe_tabella[nuova_riga].childNodes[nuova_colonna].innerHTML
        = gioco_del_15_codice_bottone(nuova_riga, nuova_colonna, numero_da_spostare);

      return true;
    }
    return false;
  }

  return prova_direzione(+1, 0) || prova_direzione(-1, 0)
    || prova_direzione(0, +1) || prova_direzione(0, -1);
}
