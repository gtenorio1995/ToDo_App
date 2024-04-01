$(document).ready(function () {
  // Adiciona uma tarefa à lista
  $("#form").on("click", 'button[type="submit"]', function (e) {
    e.preventDefault();
    const task = $("#task").val();
    if (task) {
      // Verifica se a tarefa não está vazia
      $("ul").append(`
          <li>
            <p>${task}</p>
            <button type="reset">
              <span class="material-symbols-outlined">
                delete
              </span>
            </button>
          </li>
        `);
      $("#task").val(""); // Limpa o campo de entrada
    }
  });

  // Remove um item específico da lista
  $("ul").on("click", "button[type='reset']", function () {
    $(this).closest("li").remove();
  });

  // Esvazia a lista inteira
  $("footer").on("click", 'button[type="reset"]', function () {
    $("ul").empty();
  });
});
