import { copiarProtocolo, copiarAtendimento, toggleModoDesk } from './modules/copy-functions.js';
import { apagar, transferir, titular } from './modules/form-actions.js';
import { limparDoc, validarDoc } from './modules/document-validation.js';
import { abrirModalMP, fecharModalMP, inserirTextoComTooltip } from './modules/modal-mp.js';
import { abrirModalFatura, fecharModalFatura, copiarFaturas, transferirFaturasParaRegistro } from './modules/modal-fatura.js';
import { criarTooltip, removerTooltip } from './modules/tooltip.js';

document.addEventListener("DOMContentLoaded", () => {
  // Botões de fatura
  document.querySelectorAll(".btn-limpar-fatura").forEach(btn => {
    btn.addEventListener("click", () => {
      const linha = btn.parentElement;
      linha.querySelectorAll("input").forEach(input => input.value = "");
    });
  });

  // Substituir titulo da aba pelo nome do cliente
  document.title = document.getElementByd("cliente-nome").value;
  
  // Botões principais
  document.getElementById("btn-copiar-protocolo")?.addEventListener("click", copiarProtocolo);
  document.getElementById("btn-copiar-atendimento")?.addEventListener("click", copiarAtendimento);
  document.getElementById("btn-apagar")?.addEventListener("click", apagar);
  document.getElementById("btn-transferir")?.addEventListener("click", transferir);
  document.getElementById("btn-limpar")?.addEventListener("click", limparDoc);
  document.getElementById("btn-validar")?.addEventListener("click", validarDoc);
  document.getElementById("btn-titular")?.addEventListener("click", titular);

  // 💡 Tema claro/escuro
  document.getElementById("btn-tema")?.addEventListener("click", () => {
    document.body.classList.toggle("tema-claro");
  });

  // 🔁 Alternância entre Faster e Desk
  document.getElementById("btn-faster-desk")?.addEventListener("click", toggleModoDesk);

  // 🟣 Modal M.P.
  document.getElementById("btn-mp")?.addEventListener("click", abrirModalMP);

  // Fechar modal ao clicar no overlay (fora do conteúdo)
  document.getElementById("modal-mp")?.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      fecharModalMP();
    }
  });

  // Fechar modal com tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fecharModalMP();
    }
  });

  // Event listeners para tooltips nos botões do modal
  document.addEventListener("mouseover", (e) => {
    if (e.target.matches(".categoria button[data-texto]")) {
      const texto = e.target.getAttribute("data-texto");
      criarTooltip(e.target, texto);
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.matches(".categoria button[data-texto]")) {
      removerTooltip();
    }
  });

  // Event listeners para os botões de categoria do modal M.P.
  document.querySelectorAll(".categoria button").forEach(button => {
    button.addEventListener("click", () => inserirTextoComTooltip(button));
  });

  // 💲 Botão de Fatura
  document.getElementById("btn-fatura")?.addEventListener("click", abrirModalFatura);

  // Fechar modal de fatura ao clicar no overlay (fora do conteúdo)
  document.getElementById("modal-fatura")?.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      fecharModalFatura();
    }
  });

  // Fechar modal de fatura com tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fecharModalFatura();
    }
  });

  // Botão de copiar faturas
  document.getElementById("btn-copiar-faturas")?.addEventListener("click", copiarFaturas);
  // Botão de transferir faturas para o registro
  document.getElementById("btn-transferir-faturas")?.addEventListener("click", transferirFaturasParaRegistro);
});
