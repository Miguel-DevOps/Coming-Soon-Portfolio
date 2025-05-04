# Coming Soon Portfolio

[![License](https://img.shields.io/badge/License-[License_Name]-blue.svg?style=flat-square)](./LICENSE) [![Astro Version](https://img.shields.io/badge/Astro-vX.Y.Z-orange.svg?style=flat-square&logo=astro)](https://astro.build) 

This project is an adaptation and improvement of a web template originally built with pure HTML, CSS, and JavaScript. It was migrated to [Astro](https://astro.build/) to leverage its modern architecture, improve performance, and facilitate maintenance through the use of reusable components, layouts, and the integration of internationalization (i18n).

[**LIVE DEMO**](https://developmi.com/)

![Project Screenshot](/screenshot1.jpeg)
![Project Screenshot](/screenshot2.jpeg)
## ✨ Key Features

* **Astro Migration:** Modernized codebase using Astro, leveraging Server-Side Rendering (SSR) or Static Site Generation (SSG) for optimal performance.
* **Component Architecture:** User interface built with Astro components (`.astro`), facilitating reusability and maintenance.
* **Centralized Layouts:** Consistent page structure managed through Astro Layouts (`src/layouts/`).
* **File-Based Routing:** Intuitive organization of pages within `src/pages/`.
* **Internationalization (i18n):** Multi-language support integrated using `Astro's i18n routing` and `TypeScript`.
    * Supported languages: [Spanish (es), English (en)]
    * Default language: [es]
* **Asset Optimization:** Astro automatically handles the optimization of CSS, JS, and images.
* **Based on Original Template:** Maintains the core design and functionality of the [Knox]([https://styleshout.com/free-templates/knox/]) template .
* **Vanilla JS:** Preserves and adapts the original JavaScript logic where necessary.

## 🚀 Getting Started

Follow these steps to set up and run the project in your local environment.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm, yarn, or pnpm (your preferred package manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [GIT_REPOSITORY_URL]
    cd [PROJECT_DIRECTORY_NAME]
    ```

2.  **Install dependencies:**
    ```bash
    # Using npm
    npm install

    # Or using yarn
    yarn install

    # Or using pnpm
    pnpm install
    ```

### Running in Development

Start the Astro development server. This will enable Hot Module Replacement (HMR) for a smooth development experience.

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev

# Or using pnpm
pnpm dev
````

Open your browser and visit `http://localhost:4321` (or the port indicated in the console).

### Building for Production

Generates an optimized static (or SSR, depending on your Astro configuration) version of the site in the `dist/` directory.

```bash
# Using npm
npm run build

# Or using yarn
yarn build

# Or using pnpm
pnpm build
```

You can preview the production build locally with:

```bash
# Using npm
npm run preview

# Or using yarn
yarn preview

# Or using pnpm
pnpm preview
```

## 🔧 Technologies Used

  * **Framework:** [Astro](https://astro.build/)
  * **Styles:** CSS
  * **JavaScript:** Vanilla JS and Astro modules
  * **Internationalization (i18n):** Astro's i18n routing
  * **Package Manager:** npm
  * **Deployment:** Self-hosted

## 📂 Project Structure (Simplified)

```
.
├── public/         # Static files (images, fonts, favicons, files)
│   ├── scripts/    # Vanilla JS scripts
├── src/
│   ├── components/ # Reusable Astro components (.astro)
│   ├── layouts/    # Base layouts for pages (.astro)
│   ├── pages/      # Site pages and routing (.astro, .md)
│   │   └── [en]/   # i18n structure for English
│   │   └── [es]/   # i18n structure for Spanish
│   │   └── index.astro # Base structure for i18n (Required for Astro i18n)
│   ├── styles/     # CSS files
│   └── i18n/       # i18n configuration and utilities
├── astro.config.mjs # Astro configuration
├── package.json     # Project dependencies and scripts
├── tsconfig.json    # TypeScript configuration
└── README.md        # This file
```

## 🌐 Internationalization (i18n)

This project uses Astro's i18n routing along with TypeScript for multi-language support.

  * **Translation Files:** Translatable text strings are located in `src/i18n/ui.ts`.
  * **Add/Modify Translations:** Edit the `ui.ts` file corresponding to the language to add or change texts in each supported language.

## 🤝 Contributions

If you believe there are improvements or features to add, all contributions are welcome. If you wish to contribute, please:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/new-feature`).
3.  Make your changes and commit (`git commit -m 'Add new feature'`).
4.  Push your changes to the branch (`git push origin feature/new-feature`).
5.  Open a Pull Request.

## 🙏 Acknowledgements

  * To the original template: [Knox](https://styleshout.com/free-templates/knox/). created by [styleshout.](https://styleshout.com).
  * To the [Astro](https://astro.build/) community.

## 📜 License

This project is under the [MIT] License. See the [LICENSE](/LICENSE) file for more details.

-----

Made with ❤️ and [Astro](https://astro.build/)

```