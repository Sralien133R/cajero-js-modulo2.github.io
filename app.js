const users = {
    'Sr alien133': '12345',
    'Diego021': '02112004',
    'Emilio2233': 'Emi2334'
  };
  let currentUser = null;
  let currentBalance = Math.floor(Math.random() * 10000); /* saldo con propiedad aleatoria */

  function login() {
    const username = document.getElementById('username').value; /* evalua imput */
    const password = document.getElementById('password').value;
    if (users[username] && users[username] === password) { /* verifica si el usuario esta en array y si su contraseña coincide */
      currentUser = username;
      document.getElementById('loginForm').classList.add('hidden');
      document.getElementById('actionButtons').classList.remove('hidden');
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }

  function checkBalance() {
    document.getElementById('transactionResult').innerText = `Saldo actual: $${currentBalance}`;
  }

  function deposit() {
    const amount = prompt('Ingrese el monto a depositar:');
    if (amount && !isNaN(amount)) {
      currentBalance += parseFloat(amount);
      document.getElementById('transactionResult').innerText = `Monto ingresado: $${amount}\nNuevo saldo total: $${currentBalance}`;
    }
  }

  function withdraw() {
    const amount = prompt('Ingrese el monto a retirar:');
    if (amount && !isNaN(amount) && amount <= currentBalance) {
      currentBalance -= parseFloat(amount);
      document.getElementById('transactionResult').innerText = `Monto retirado: $${amount}\nNuevo saldo total: $${currentBalance}`;
    } else {
      alert('Fondos insuficientes o monto inválido.');
    }
    }