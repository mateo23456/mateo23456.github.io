window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span> Herramientas de Apoyo
    </div>
    <p>Esta sección es tu <strong>caja de herramientas</strong>. Conocer y usar las herramientas adecuadas multiplica tu productividad y da calidad profesional al proyecto.</p>
</div>

<h3>8.1. Entorno de Desarrollo</h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">📝 Editor de código</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li><strong>VS Code</strong> con extensiones: ShellCheck, PowerShell, Python, GitLens</li>
            <li>Alternativas: Notepad++, vim, PowerShell ISE</li>
            <li>Activa el resaltado de sintaxis y la autocompletación</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">Control de versiones</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li><strong>Git</strong> local + remoto en <strong>GitHub/GitLab/Gitea</strong></li>
            <li>Cliente gráfico opcional: GitKraken, SourceTree, GitHub Desktop</li>
            <li>Revisa el historial y usa <code class="text-sm">git diff</code> antes de cada commit</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">🐍 Python</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li><strong>Entorno virtual</strong> (<code class="text-sm">venv</code>) por proyecto</li>
            <li>Librerías habituales: <code class="text-sm">pandas</code>, <code class="text-sm">openpyxl</code>, <code class="text-sm">smtplib</code></li>
            <li>Gestor de dependencias: <code class="text-sm">pip + requirements.txt</code></li>
        </ul>
    </div>
</div>

<h3>8.2. Herramientas de Calidad y Pruebas</h3>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Herramienta</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Para qué sirve</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Cuándo usarla</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">ShellCheck</td>
            <td class="p-4 border border-slate-200 text-sm">Analiza scripts Bash y detecta errores y malas prácticas</td>
            <td class="p-4 border border-slate-200 text-sm">Antes de cada commit de un .sh</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">PSScriptAnalyzer</td>
            <td class="p-4 border border-slate-200 text-sm">Analiza scripts PowerShell según guías de estilo</td>
            <td class="p-4 border border-slate-200 text-sm">Durante el desarrollo de cada .ps1</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Bats / Pester / pytest</td>
            <td class="p-4 border border-slate-200 text-sm">Frameworks de pruebas para Bash, PowerShell y Python</td>
            <td class="p-4 border border-slate-200 text-sm">Al añadir o cambiar una función</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">crontab / Programador de Tareas</td>
            <td class="p-4 border border-slate-200 text-sm">Programan la ejecución automática periódica</td>
            <td class="p-4 border border-slate-200 text-sm">Fase final, tras validar en manual</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">less / Get-Content / texto plano</td>
            <td class="p-4 border border-slate-200 text-sm">Lectura cómoda de los logs de ejecución</td>
            <td class="p-4 border border-slate-200 text-sm">Diariamente, al revisar alertas</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">draw.io (diagrams.net)</td>
            <td class="p-4 border border-slate-200 text-sm">Diagramas de arquitectura y flujos</td>
            <td class="p-4 border border-slate-200 text-sm">Fase de diseño y memoria final</td>
        </tr>
    </tbody>
</table>

<h3>8.3. Plantillas y Recursos Reutilizables</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">🧩 Recursos que te conviene crear</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Plantilla de script con cabecera, manejo de errores y log</li>
            <li>Plantilla de commit y de README</li>
            <li>Plantilla de casos de prueba</li>
            <li>Archivo de configuración común (umbrales, rutas, departamentos)</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🌐 Recursos de consulta</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Documentación oficial: Microsoft Learn, GNU Bash Manual, docs.python.org</li>
            <li>INCIBE: guías de ciberseguridad y código seguro</li>
            <li>Proveedores de correo SMTP para alertas (revisa límites y autenticación)</li>
            <li>Comunidades: Stack Overflow, Reddit r/sysadmin</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Prepara una <strong>tabla de herramientas</strong> personal con: herramienta, versión instalada, para qué la usas en este proyecto y dónde está documentada. Incluye al menos <strong>8 herramientas</strong>.</p>
</div>
`;
