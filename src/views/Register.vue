<template>
  <div class="register-container">
    <div id="register-form">
      <form @submit.prevent="register">
        <h2>Registrarse</h2>
        <input type="text" v-model="name" placeholder="Nombre" required>
        <input type="email" v-model="email" placeholder="Correo electrónico" required />
        <input type="password" v-model="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
    
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-if="successMessage">{{ successMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:9000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password
        });
        if (response.data.success) {
          this.successMessage = 'Registro exitoso. Ahora puede iniciar sesión.';
          this.errorMessage = '';
        } else {
          this.errorMessage = 'Error al registrar. Inténtelo de nuevo.';
          this.successMessage = '';
        }
      } catch (error) {
        this.errorMessage = 'Ocurrió un error. Por favor, inténtelo de nuevo.';
        this.successMessage = '';
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(47, 87, 133); /* Azul */
  color: #ffffff; /* Blanco */
  text-align:center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height:100%;
}

.register-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.register-container input {
  width:100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
}

.register-container button {
  width: 30%;
  padding: 10px;
  background-color: rgb(47, 87, 133);
  color: #ffffff;
  border: solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  font-size:20px;
}

.register-container button:hover {
  background-color: rgb(47, 87, 133);
}

p {
  text-align: center;
}
#register-form{
  width:50%;
  margin:auto;
  margin-top:15%;

}
</style>
