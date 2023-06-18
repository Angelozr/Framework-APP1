<template>
    <body>
        <form action="" class="form-register" id="formulario-registro">
            <h2 class="form__titulo">
                <center>Crea tu Cuenta</center>
            </h2>
            <div class="contenedor-input">
                <label><b>Nombres:</b></label><br />
                <input type="text" id="nombres" name="nombres" placeholder="Ingrese sus nombres" class="input-48" /><br />
                <label><b>Apellidos:</b></label><br />
                <input type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos"
                    class="input-48" /><br />
                <label><b>Cédula I.:</b></label><br />
                <input type="text" id="cedula" name="cedula" placeholder="Ingrese su número de cédula" class="input-100"
                    required /><br />
                <label><b>Teléfono :</b></label><br />
                <input type="text" id="telefono" name="teléfono" placeholder="Teléfono" class="input-100" required /><br />
                <label for="correo"><b>Correo electrónico:</b></label>
                <input type="email" id="correo" name="correo" placeholder="Correo Electrónico" class="input-110" required
                    onfocusout="validarCorreo()" />
                <label><b> Contraseña: </b></label>
                <input type="password" id="password" name="contraseña" tipo="contraseña" placeholder="Contraseña"
                    class="input-50" required />
                <label><b> Repetir contraseña:</b></label>
                <input type="password" id="confirm_password" name="repetircontraseña" placeholder="Repetir Contraseña"
                    class="input-50" required /><span id="message"></span>
                <label><b>Área:</b></label>
                <select id="area" name="area" class="input-100" required>
                    <option value="">Seleccione un área</option>
                    <option value="bioquimica">Bioquímica</option>
                    <option value="biologia-molecular">Biología Molecular</option>
                    <option value="citogenetica">Citogenética</option>
                    <option value="microbiologia">Microbiología</option>
                    <option value="inmunologia">Inmunología</option>
                    <option value="otros">Otros</option>
                </select>

                <label class="radio">Sexo:
                    <center>
                        <input type="radio" name="sexo" value="hombre" required /> Masculino
                    </center>
                </label>
                <center>
                    <br />
                    <input type="radio" name="sexo" value="mujer" required /> Femenino
                </center>
                <br />
                <input type="submit" value="Registrarse" class="btn-enviar" id="boton" />
            </div>
            <center>
                <p class="form__link">
                    ¿Ya tienes cuenta?
                    <a class="link" href="../inicio de sesion/Inicio.html">Inicia Sesión</a>
                </p>
            </center>
            <div>
                <center>
                    <a href="../principa/principal.html" class="button1"><b>VOLVER A PÁGINA PRINCIPAL</b></a>
                </center>
            </div>
        </form>

        <img src="../assets/registro.jpg" alt="" />
    </body>
</template>
    
<script>
export default {
    name: "FormularioRegistro",
    props: {
        msg: String,
    },
    data: () => ({
        nombres: "", // Letras y espacios, pueden llevar acentos.
        apellidos: "", // Letras y espacios, pueden llevar acentos.
        cedula: "", // 8 caracters, una letra mayuscula y minuscula.
        telefono: "", // 8 caracters, una letra mayuscula y minuscula.
        correo: "",
        contrasena: "", // 8 caracters, una letra mayuscula y minuscula.
        contrasena2: "", // 8 caracters, una letra mayuscula y minuscula.
        sexo: "", // Valor de sexo: "M" o "F"
    }),
    methods: {
        Registrar: function (e) {
            this.errors = [];
            if (!this.nombres) {
                alert("El nombre es obligatorio.");
            } else if (!this.validapellidos(this.nombres)) {
                this.errors.push("El nombre debe ser válido.");
            }
            if (!this.apellidos) {
                alert("El Apellido es obligatorio.");
            } else if (!this.validapellidos(this.apellidos)) {
                this.errors.push("El apellidos debe ser válido.");
            }
            if (!this.cedula) {
                alert("La cedula es obligatorio.");
            } else if (!this.validCedula(this.cedula)) {
                this.errors.push("La cedula debe ser válida.");
            }
            if (!this.correo) {
                alert("El correo electrónico es obligatorio.");
            } else if (!this.validEmail(this.correo)) {
                this.errors.push("El correo electrónico debe ser válido.");
            }

            if (!this.contrasena) {
                alert("contraseña es obligatorio.");
            } else if (!this.validcontrasena(this.contrasena)) {
                this.errors.push("contraseña debe ser válido.");
            }
            if (!this.contrasena2) {
                alert("contraseña es obligatorio.");
            } else if (!this.validcontrasena2(this.contrasena2)) {
                this.errors.push("El correo electrónico debe ser válido.");
            }
            if (!this.sexo) {
                alert("sexo es obligatorio.");
            } else if (!this.validsexo(this.sexo)) {
                this.errors.push("sexo debe ser válido.");
            }
            if (!this.errors.length) {
                return true;
            }
            e.preventDefault();
        },
        validEmail: function (correo) {
            var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            return re.test(correo);
        },
        validSexo: function (sexo) {
            var re = /^[MF]$/i; // Expresión regular que acepta solo "M" o "F" (insensible a mayúsculas/minúsculas)
            return re.test(sexo);
        },

        validapellidos: function (apellidos, nombres) {
            var re1 = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
            return re1.test(apellidos, nombres);
        },
        validcontrasena: function (contrasena, contrasena2) {
            var re2 = /^[a-zA-Z0-9]$/;

            return re2.test(contrasena, contrasena2);
        },
        validCedula: function (cedula) {
            var re = /^\d{10}$/; // Expresión regular que acepta solo 10 dígitos
            return re.test(cedula);
        },
    },
};
</script>
    
<style scoped>
body {
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
}

form {
    max-width: 700px;
    margin: 50px auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
}

label {
    display: inline-block;
    width: 120px;
    margin-right: 10px;
    text-align: right;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"],
input[type="tel"],
textarea {
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
    padding: 5px 10px;
    margin-bottom: 10px;
    width: 220px;
    box-sizing: border-box;
}

input[type="radio"],
input[type="checkbox"] {
    margin-right: 5px;
}

.btn-enviar {
    background-color: #4CAF50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;
    display: block;
    margin-left: 70px;
    margin-right: auto;
}

   

.btn-enviar:hover {
    background-color: #3e8e41;
}

.contenedor-input {
    display: flex;
    flex-wrap: wrap;
}

.contenedor-input div {
    flex-basis: 50%;
    padding-right: 10px;
}

.contenedor-input div:nth-child(2n) {
    padding-right: 0;
    padding-left: 10px;
}

.form__link {
    margin-top: 30px;
    color: #333;
}

.form__link a {
    color: #4CAF50;
    text-decoration: none;
}

.form__link a:hover {
    text-decoration: underline;
}

.button1 {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    
}

.button1:hover {
    background-color: #3e8e41;
}
select {
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
    padding: 5px 10px;
    margin-bottom: 10px;
    width: 220px;
    box-sizing: border-box;
}

option {
    font-size: 14px;
}

img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>