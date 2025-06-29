# 🍔 Burger Queen

**Burger Queen** es una aplicación móvil de comida rápida desarrollada como parte de un proyecto académico. Desde la pantalla principal, la app muestra un catálogo de categorías como **hamburguesas**, **postres**, **bebidas**, entre otros. Al seleccionar una categoría, se despliega una lista de platillos disponibles. Los usuarios pueden personalizar su orden con extras y añadir los platillos seleccionados a su carrito.

Además, la aplicación incluye un menú lateral que permite a los usuarios iniciar sesión, revisar su orden actual y proceder al pago mediante **tarjeta de crédito o débito**, utilizando la plataforma **Stripe**.

---

## Tecnologías utilizadas

El desarrollo del proyecto emplea las siguientes tecnologías:

###  Frontend
- [Ionic](https://ionicframework.com/) — Framework para desarrollo móvil híbrido
- [Angular](https://angular.io/) — Framework frontend basado en componentes
- Servicios y estados para la navegación y control de datos

### Backend
- [MongoDB](https://www.mongodb.com/) como base de datos NoSQL
- Contenedores con [Docker](https://www.docker.com/)
- Orquestación con `docker-compose`

### Pagos
- [Stripe](https://stripe.com/) — Plataforma de pagos para aceptar tarjetas de crédito

---

##  Instalación y ejecución

### Requisitos previos

Asegúrate de tener instalado lo siguiente:

- [Docker](https://docs.docker.com/get-docker/) y una cuenta activa
- [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Angular CLI](https://angular.io/cli)

Para levantar el contenedor y la aplicación usa estos comandos:

```bash
docker-compose -p="burger-queen" up -d
ionic serve
