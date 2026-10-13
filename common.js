const sb = supabase.createClient(CFG.url, CFG.key);
const $ = id => document.getElementById(id);
const KEYS = ['commande', 'recu', 'envoye'], ST = ['Commandé', 'Reçu', 'Envoyé'];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtD = d => d ? new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'À confirmer';
const fmtP = n => n == null ? '-' : Number(n).toLocaleString('fr-FR') + ' FCFA';
const route = s => '<ol class="route">' + ST.map((l, i) =>
  `<li class="${i <= s ? 'done' : ''}${i < s ? ' link' : ''}${i === s ? ' now' : ''}">${l}</li>`).join('') + '</ol>';
