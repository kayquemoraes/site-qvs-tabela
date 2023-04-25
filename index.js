const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const empresa = document.querySelector('#empresa').value;
  if (empresa === 'CDSP-DISTRIBUIDOR') {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Você será redirecionado para a página do distribuidor.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      window.location.href = 'distribuidor.html';
    });
  } else {
    Swal.fire({
      title: 'Erro!',
      text: 'Código inválido.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
});
