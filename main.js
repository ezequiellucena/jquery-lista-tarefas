$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault()
        const campoTarefa = $('#campo-digitar-tarefa').val()
        const novaTarefa = $(`<li>${campoTarefa}</li>`);

        $(novaTarefa).appendTo('ul');
        $('#campo-digitar-tarefa').val('');

        $(novaTarefa).click(function(){
            $(novaTarefa).toggleClass("tachado")
        });
    })
})