# El Rey de Frutos Secos

¡Bienvenido a "El Rey de Frutos Secos"! 🥜🍫 Somos una tienda en línea especializada en la venta de garrapiñadas, frutos secos, pan de higo y membrillo. Este proyecto incluye una página web para vender nuestros productos directamente y a través de Amazon.

[Visita nuestro sitio](https://elreydefrutossecos.com)

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

"El Rey de Frutos Secos" es una plataforma de comercio electrónico que permite a los usuarios comprar productos deliciosos como garrapiñadas, frutos secos, pan de higo y membrillo. El proyecto incluye un carrito de compras propio y una integración para vender productos en Amazon. El objetivo principal es ofrecer una experiencia de compra fácil y conveniente para nuestros clientes.

El repositorio incluye tanto el backend desarrollado en Node.js y Express, como el frontend construido con React.

## Características

- Listado de productos con detalles y precios.
- Carrito de compras para gestionar pedidos.
- Integración con Amazon para redireccionar compras.
- Backend robusto con Node.js y Express.
- Base de datos con MongoDB para la gestión de productos y pedidos.
- Frontend interactivo con React.

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tuusuario/elreydefrutossecos.git
    cd elreydefrutossecos
    ```

2. Navega al directorio `backend` y configura el entorno:

    ```bash
    cd backend
    npm install
    ```

3. Crea un archivo `.env` en el directorio `backend` y añade la siguiente configuración:

    ```plaintext
    MONGO_URI=tu-cadena-de-conexion-a-mongodb
    PORT=3000
    ```

4. Inicia el servidor backend:

    ```bash
    npx nodemon server.js
    ```

5. Navega al directorio `frontend`, instala dependencias y arranca el frontend:

    ```bash
    cd ../frontend
    npm install
    npm start
    ```

6. Accede a la aplicación en tu navegador en `http://localhost:3000`.

## Uso

- Navega a la página de productos para ver la lista completa de artículos disponibles.
- Añade productos al carrito de compras y revisa tu pedido.
- Procede a la compra en nuestra plataforma o redirige tu compra a Amazon.

## Estructura del Proyecto

```plaintext
elreydefrutossecos/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── store/
│   │   ├── App.js
│   │   └── index.js
└── README.md

## Política de Seguridad

Por favor, revisa nuestra [Política de Seguridad](./SECURITY.md) para conocer cómo reportar vulnerabilidades de seguridad.

