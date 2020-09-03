const formDelete = document.getElementById('form-delete');
formDelete.addEventListener('submit', () => {
    const confirmation = confirm("Tem certeza de que deseja deletar esse usuário ?");
    if (!confirmation) {
        event.preventDefault();
    }
});
