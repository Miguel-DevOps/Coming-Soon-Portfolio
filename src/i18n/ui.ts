import { LANGUAGES } from './languages';

export const DEFAULT_LANG = 'es';
export const ui = {
  // Spanish translations
  es: {
    // Intro Component
    'intro.logoAlt': 'Página de Inicio', // Alt text for the logo
    'intro.pretitle': 'Encantado de conocerte.', // Subtitle displayed in the intro section
    'intro.mainTitle': 'Estoy creando <br> algo innovador <br> y único para ti.', // Main title in the intro section
    'intro.launchingLabel': 'Lanzamiento en', // Label for the countdown timer
    'intro.daysLabel': 'Días', // Days label for the countdown
    'intro.hoursLabel': 'Horas', // Hours label for the countdown
    'intro.minutesLabel': 'Minutos', // Minutes label for the countdown
    'intro.secondsLabel': 'Segundos', // Seconds label for the countdown
    'intro.followLabel': 'Sígueme en', // Label for the social media section
    'intro.linkedinAriaLabel': 'Visita mi perfil en LinkedIn', // Accessibility label for LinkedIn link
    'intro.whatsappAriaLabel': 'Contáctame por WhatsApp', // Accessibility label for WhatsApp link
    'intro.scrollLabel': 'Desliza para descubrir más', // Label for the scroll-down button

    // Details Component
    'details.mainTitle': 'Hola, Soy Miguel Lozano.', // Main title for the details section
    'details.tabNavAriaLabel': 'Navegación de Secciones', // Accessibility label for the tab navigation
    'details.tabAboutLabel': 'Sobre Mí', // Label for the "About Me" tab
    'details.tabServicesLabel': 'Servicios', // Label for the "Services" tab
    'details.tabContactLabel': 'Contacto', // Label for the "Contact" tab
    'details.aboutTitle': 'Mi Trayectoria.', // Title for the "About Me" section
    'details.aboutContent': `<p class="lead">Soy Miguel Lozano, un Desarrollador Full Stack con experiencia avanzada en tecnologías modernas. Estoy certificado por Google y Meta, lo que respalda mi compromiso con la excelencia técnica y la innovación. Mi enfoque está en crear soluciones digitales escalables, seguras y de alto rendimiento que transformen ideas en realidades funcionales.</p><p>Con una sólida base en desarrollo Front-End y Back-End, combino habilidades técnicas con una visión estratégica para ofrecer aplicaciones completas que optimizan la experiencia del usuario y la eficiencia operativa.</p>`, // Content for the "About Me" section

    'details.servicesTitle': 'Lo Que Ofrezco.', // Title for the "Services" section
    'details.servicesContent': `<p>Como desarrollador independiente, brindo servicios personalizados para usuarios técnicos y no técnicos, incluyendo:</p><ul>
      <li><strong>Desarrollo Front-End:</strong> Interfaces modernas e interactivas con tecnologías como Next.js, Nuxt.js, TypeScript y Livewire.</li>
      <li><strong>Desarrollo Back-End:</strong> Soluciones robustas y seguras con Laravel, Symfony, Node.js y NestJS.</li>
      <li><strong>Integración de APIs:</strong> RESTful APIs, GraphQL y soluciones en tiempo real con WebSockets.</li>
      <li><strong>Infraestructura y DevOps:</strong> Contenerización con Docker, despliegues en AWS, Google Cloud y Azure, y pipelines CI/CD con GitHub Actions y GitLab CI.</li>
      <li><strong>Gestión de Bases de Datos:</strong> Diseño, optimización y administración de bases de datos relacionales como MySQL y PostgreSQL, así como bases de datos NoSQL como MongoDB y Firebase.</li>
      <li><strong>Almacenamiento y Gestión en la Nube:</strong> Configuración y administración de soluciones de almacenamiento en la nube, incluyendo S3, Google Cloud Storage y Azure Blob Storage, asegurando escalabilidad y alta disponibilidad.</li>
      <li><strong>Gestión de Servidores:</strong> Configuración, monitoreo y mantenimiento de servidores Linux y Windows, garantizando un rendimiento óptimo y seguridad.</li>
      <li><strong>Sistemas Operativos:</strong> Implementación y soporte en entornos basados en Linux (Ubuntu, Debian, CentOS) y Windows Server, adaptados a las necesidades del usuario.</li>
      <li><strong>Ciberseguridad:</strong> Implementación de autenticación avanzada (JWT, OAuth2), protección contra amenazas (XSS, CSRF, SQL Injection) y cifrado de datos.</li>
      <li><strong>Testing Automatizado:</strong> Garantía de calidad con PHPUnit, Pest, Jest y Cypress.</li>
    </ul>`, // Content for the "Services" section

    'details.contactTitle': 'Contáctame.', // Title for the "Contact" section
    'details.contactContent': `<p>¿Tienes un proyecto en mente? Estoy aquí para ayudarte a convertir tus ideas en soluciones digitales excepcionales. Escríbeme y trabajemos juntos para crear algo increíble.</p><p><strong>Teléfono:</strong> +57 313 469 2221<br><strong>Email:</strong> desarrollo@developmi.com<br><strong>Ubicación:</strong> Bogotá, Colombia</p>`, // Content for the "Contact" section
    'details.footerCopyright': '© 2025 Developmi. Todos los derechos reservados.', // Copyright text for the footer
    'details.backToTop': 'Volver Arriba', // Label for the "Back to Top" button

    // Language Switcher
    'lang.en': 'EN', // English language code
    'lang.es': 'ES', // Spanish language code
  },
  // English translations
  en: {
    // Intro Component
    'intro.logoAlt': 'Homepage',
    'intro.pretitle': 'Nice to meet you.',
    'intro.mainTitle': 'I am crafting <br> something innovative <br> and unique for you.',
    'intro.launchingLabel': 'Launching in',
    'intro.daysLabel': 'Days',
    'intro.hoursLabel': 'Hours',
    'intro.minutesLabel': 'Minutes',
    'intro.secondsLabel': 'Seconds',
    'intro.followLabel': 'Follow me on',
    'intro.linkedinAriaLabel': 'Visit my LinkedIn profile',
    'intro.whatsappAriaLabel': 'Contact me via WhatsApp',
    'intro.scrollLabel': 'Scroll to discover more',
    // Details Component
    'details.mainTitle': 'Hi, I Am Miguel Lozano.',
    'details.tabNavAriaLabel': 'Section Navigation',
    'details.tabAboutLabel': 'About Me',
    'details.tabServicesLabel': 'Services',
    'details.tabContactLabel': 'Contact',
    'details.aboutTitle': 'My Journey.',
    'details.aboutContent': `<p class="lead">I am Miguel Lozano, a Full Stack Developer with advanced expertise in modern technologies. Certified by Google and Meta, I am committed to delivering high-quality, scalable, and secure digital solutions. My mission is to transform ideas into functional realities that enhance user experience and operational efficiency.</p><p>With a strong foundation in both Front-End and Back-End development, I combine technical skills with strategic vision to deliver comprehensive applications tailored to diverse needs.</p>`,
    'details.servicesTitle': 'What I Offer.',
    'details.servicesContent': `<p>As an independent developer, I provide personalized services for both technical and non-technical users, including:</p><ul>
      <li><strong>Front-End Development:</strong> Modern and interactive interfaces using technologies like Next.js, Nuxt.js, TypeScript, and Livewire.</li>
      <li><strong>Back-End Development:</strong> Robust and secure solutions with Laravel, Symfony, Node.js, and NestJS.</li>
      <li><strong>API Integration:</strong> RESTful APIs, GraphQL, and real-time solutions with WebSockets.</li>
      <li><strong>Infrastructure and DevOps:</strong> Docker containerization, deployments on AWS, Google Cloud, and Azure, and CI/CD pipelines with GitHub Actions and GitLab CI.</li>
      <li><strong>Database Management:</strong> Design, optimization, and administration of relational databases like MySQL and PostgreSQL, as well as NoSQL databases like MongoDB and Firebase.</li>
      <li><strong>Cloud Storage and Management:</strong> Configuration and management of cloud storage solutions, including S3, Google Cloud Storage, and Azure Blob Storage, ensuring scalability and high availability.</li>
      <li><strong>Server Management:</strong> Configuration, monitoring, and maintenance of Linux and Windows servers, ensuring optimal performance and security.</li>
      <li><strong>Operating Systems:</strong> Implementation and support in Linux-based environments (Ubuntu, Debian, CentOS) and Windows Server, tailored to users needs.</li>
      <li><strong>Cybersecurity:</strong> Advanced authentication (JWT, OAuth2), protection against threats (XSS, CSRF, SQL Injection), and data encryption.</li>
      <li><strong>Automated Testing:</strong> Quality assurance with PHPUnit, Pest, Jest, and Cypress.</li>
    </ul>`,
    'details.contactTitle': 'Get in Touch.',
    'details.contactContent': `<p>Have a project in mind? I’m here to help you turn your ideas into exceptional digital solutions. Reach out, and let’s work together to create something amazing.</p><p><strong>Phone:</strong> +57 313 469 2221<br><strong>Email:</strong> desarrollo@developmi.com<br><strong>Location:</strong> Bogotá, Colombia</p>`,
    'details.footerCopyright': '© 2025 Developmi. All rights reserved.',
    'details.backToTop': 'Back to Top',
    // Language Switcher
    'lang.en': 'EN',
    'lang.es': 'ES',
  },
} as const;