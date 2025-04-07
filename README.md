# 🎵 System of a Down

Explora el universo lírico de **System of a Down** con nuestra colección completa de letras de todas sus canciones. Desde su debut homónimo hasta *Toxicity*, *Steal This Album!*, *Hypnotize* y *Mezmerize*, aquí encontrarás cada verso, coro y estrofa de la banda, organizado cuidadosamente por álbum.

---

## 🚀 Primeros pasos

Este es un proyecto [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### 📦 Instalación y ejecución

Para iniciar el servidor de desarrollo:

```bash
pnpm install
pnpm dev
```
## 📁 Estructura del Proyecto

Este proyecto está organizado de forma modular para mantener una separación clara de responsabilidades entre componentes, estilos y lógica de negocio.

```bash
src/
├── app/
│   ├── favicon.ico          # Icono del sitio
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal de la app
│   └── page.tsx             # Página principal
│
├── components/
│   ├── albums/              # Componentes relacionados a los álbumes
│   │   ├── background/      # Fondo visual para la sección de álbumes
│   │   ├── details/         # Detalles individuales del álbum
│   │   │   ├── description/ # Descripción del álbum
│   │   │   ├── lyrics/      # Letras de las canciones
│   │   │   ├── release/     # Información de lanzamiento
│   │   │   ├── title/       # Título del álbum
│   │   │   ├── tracks/      # Lista de canciones
│   │   │   └── AlbumDetails.tsx # Componente principal de detalles
│   │   ├── list/                # Vista o lista de todos los álbumes
│   │   └── AlbumsSection.tsx    # Sección de álbumes en la interfaz
│
│   ├── hero/                # Componente del Hero principal
│   │   └── Hero.tsx
│
├── store/                   # Lógica de estado (Zustand)
│
├── ui/                      # Fuente
│
└── types.d.ts               # Definiciones de tipos globales  
```