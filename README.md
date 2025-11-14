# Desarrollo Frontend II - Experiencia 2 Semana 1
## 🏥 Clínica VitaSalud - Sistema de Gestión de Pacientes

Una aplicación web desarrollada con React, pensada para trabajar con Mock Service Worker y consumir con datos 'dummy'.

## 🚀 Características

- **Lista de Pacientes**: Visualización completa de todos los pacientes registrados
- **Detalle de Paciente**: Información detallada individual de cada paciente
- **Menú de Navegación**: Interfaz de usuario responsive.
- **Carga Asíncrona**: Estados de carga y manejo de datos dinámicos
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19.2.0 con hooks modernos
- **Routing**: React Router 7.9.5 para navegación SPA
- **Estilos**: Tailwind CSS 3.4.18 para diseño responsivo
- **Build Tool**: Vite 7.2.2 para desarrollo rápido
- **Mocking**: MSW (Mock Service Worker) 2.12.1 para simulación de API

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/          # Componentes reutilizables
│   └── loading/         # Componente de carga
├── layout/
│   ├── Header.jsx       # Cabecera con navegación
│   └── Footer.jsx       # Pie de página
├── pages/
│   ├── HomePage.jsx     # Página de inicio
│   ├── PatientsPage.jsx # Lista de pacientes
│   ├── PatientDetailPage.jsx # Detalle de paciente
│   └── AboutUsPage.jsx  # Página acerca de
├── routes/
│   └── AppRoutes.jsx    # Configuración de rutas
└── mocks/
    ├── handlers.js      # Manejadores de API mock
    └── browser.js       # Configuración MSW
```

## 📊 Funcionalidades por Página

### 🏠 Página de Inicio
- Imagen de portada de la clínica
- Presentación visual de la institución

### 👥 Lista de Pacientes (`/patients`)
- Tabla con información de pacientes:
  - Número de paciente
  - Nombre completo
  - Edad
  - Fecha de consulta
  - Médico asignado
  - Enlace para ver detalles
- Estado de carga con indicador visual
- Navegación directa a detalles individuales

### 👤 Detalle de Paciente (`/patients/:id`)
- Información completa del paciente seleccionado
- Historial de atenciones médicas
- Datos de especialidades y médicos

### ℹ️ Acerca de Nosotros (`/about-us`)
- Información institucional de la clínica

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm, yarn o bun

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/nisiara/dfe2_exp2_s1.git
cd dfe2_exp2_s1
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```


## 🗃️ Datos de Prueba

La aplicación incluye un conjunto de datos mock con 16 pacientes de prueba, cada uno con:
- Información personal (nombre, edad, número de paciente)
- Historial de atenciones médicas
- Especialidades médicas variadas
- Costos de atención
- Fechas de consulta


## 🎨 Diseño y UX

- **Colores**: Paleta basada en grises slate para aspecto médico profesional
- **Tipografía**: Fuentes sistema optimizadas para legibilidad
- **Responsive**: Diseño que se adapta desde móviles hasta desktop
- **Accesibilidad**: Enlaces y navegación semánticamente correctos
- **Estados de Carga**: Feedback visual durante operaciones asíncronas

## 🔧 Configuración Técnica

### Herramientas de Desarrollo
- **Vite**: Build tool y servidor de desarrollo
- **ESLint**: Análisis estático de código
- **PostCSS + Autoprefixer**: Procesamiento de CSS
- **MSW**: Mock de APIs para desarrollo

### Arquitectura
- **SPA (Single Page Application)**: Navegación del lado del cliente
- **Component-Based**: Arquitectura basada en componentes reutilizables  
- **Hooks Pattern**: Uso de React hooks para gestión de estado
- **Lazy Loading**: Carga diferida de componentes de página


---

*Desarrollado con* ❤️ 🤪 🫠 🤯 😎 *usando React y tecnologías modernas*
