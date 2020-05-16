# Website del CEI

> Sitio web del Centro de Estudiantes de Ingeniería "La Linea Recta"

### [cei.fi.uba.ar](https://cei.fi.uba.ar)

## Para arrancar
Crear el wl *root* el archivo *next.config.js* con las variables de entorno necesarias
```js
module.exports = {
    env: {
        CeiApiKey__Academica: "api key secreta acá",
    },
}
```

### Development
```console
npm install
npm run dev
```

### Production
```console
npm install
npm run build
npm run start
```

ir a [http://localhost:3000](http://localhost:3000)


