window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['estado-arte'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span> Propósito de esta Sección
    </div>
    <p>Demuestra que has <strong>investigado el mercado</strong> antes de decidir. No se trata de inventar la rueda, sino de comparar las soluciones que ya existen (Bash, PowerShell, Python, Ansible...) y justificar por qué eliges las tuyas para Logística Sagunt.</p>
</div>

<h3>2.1. Ámbitos de Investigación</h3>
<p>Antes de escribir una sola línea de código, investiga qué se usa hoy en empresas similares a Logística Sagunt para automatizar la administración de sistemas. Céntrate en estos cuatro ámbitos:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h4 class="text-blue-600 font-bold mb-3">💻 Lenguajes de scripting</h4>
        <p class="text-xs text-slate-500 leading-relaxed m-0">¿Qué lenguaje para cada tarea? Compara <strong>Bash</strong>, <strong>PowerShell</strong>, <strong>Python</strong> y <strong>Batch</strong>. ¿En qué brilla cada uno y en qué falla?</p>
    </div>
    <div class="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h4 class="text-blue-600 font-bold mb-3">⏰ Programación de tareas</h4>
        <p class="text-xs text-slate-500 leading-relaxed m-0">¿Cómo se ejecutan solas las tareas? Compara <strong>cron/systemd timers</strong> (Linux), <strong>Programador de Tareas</strong> y <strong>Group Policy Scheduled Tasks</strong> (Windows).</p>
    </div>
    <div class="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h4 class="text-blue-600 font-bold mb-3">🛠️ Herramientas de automatización</h4>
        <p class="text-xs text-slate-500 leading-relaxed m-0">¿Más allá del script suelto? Investiga <strong>Ansible</strong>, <strong>DSC</strong> (Desired State Configuration) y gestores de configuración. ¿Merece la pena en una pyme con un solo técnico?</p>
    </div>
    <div class="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h4 class="text-blue-600 font-bold mb-3">🔍 Control de calidad y versiones</h4>
        <p class="text-xs text-slate-500 leading-relaxed m-0">¿Cómo se mantienen los scripts profesionales? Investiga <strong>Git/GitHub/GitLab</strong>, <strong>ShellCheck</strong>, <strong>PSScriptAnalyzer</strong>, <strong>pytest</strong> y la integración continua básica.</p>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🔎</span> Dónde investigar
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Documentación oficial: Microsoft Learn (PowerShell), GNU Bash Manual, docs.python.org, docs.ansible.com</li>
        <li>Buenas prácticas: INCIBE, OWASP (para el manejo de credenciales), guías de scripting seguro de SANS</li>
        <li>Comunidades: Stack Overflow, Reddit r/sysadmin y r/PowerShell, Server Fault</li>
        <li>Casos reales de automatización en pymes logísticas y de distribución</li>
    </ul>
</div>

<h3>2.2. Análisis de Soluciones Existentes</h3>
<p>Rellena esta tabla comparando las alternativas que has encontrado. Añade tantas filas como soluciones quieras valorar (mínimo cuatro).</p>

<div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm">
    <table class="w-full text-sm">
        <thead class="bg-slate-50 border-b border-slate-100">
            <tr>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Solución / Tecnología</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Puntos Fuertes</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Limitaciones</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Coste</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-slate-50">
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700">[Solución 1: ej. Bash]</td>
                <td class="px-6 py-4 text-emerald-600 text-xs">[Ej: nativo de Linux, ligero, potente...]</td>
                <td class="px-6 py-4 text-red-400 text-xs">[Ej: menos legible, manejo de errores incómodo...]</td>
                <td class="px-6 py-4 text-slate-500 text-xs">[Gratis / €]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700">[Solución 2: ej. PowerShell]</td>
                <td class="px-6 py-4 text-emerald-600 text-xs">[...]</td>
                <td class="px-6 py-4 text-red-400 text-xs">[...]</td>
                <td class="px-6 py-4 text-slate-500 text-xs">[...]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700">[Solución 3: ej. Ansible]</td>
                <td class="px-6 py-4 text-emerald-600 text-xs">[...]</td>
                <td class="px-6 py-4 text-red-400 text-xs">[...]</td>
                <td class="px-6 py-4 text-slate-500 text-xs">[...]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700">[Solución 4: ej. Python]</td>
                <td class="px-6 py-4 text-emerald-600 text-xs">[...]</td>
                <td class="px-6 py-4 text-red-400 text-xs">[...]</td>
                <td class="px-6 py-4 text-slate-500 text-xs">[...]</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Elabora una tabla comparativa con al menos estas cuatro categorías y <strong>una fila por tecnología</strong>. Para cada una indica:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Ventajas</strong> técnicas (rendimiento, ecosistema, documentación)</li>
        <li><strong>Inconvenientes</strong> (curva de aprendizaje, mantenimiento, dependencias)</li>
        <li><strong>Adecuación</strong> a una pyme con un solo técnico de sistemas</li>
        <li><strong>Decisión</strong>: ¿la descartas o la eliges? ¿Por qué?</li>
    </ul>
</div>

<h3>2.3. Normativa y Buenas Prácticas Aplicables</h3>
<p>Investiga qué normas y buenas prácticas debería cumplir tu suite de scripts:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Norma / Guía</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Qué aporta a tu proyecto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">RGPD (UE 2016/679)</td>
            <td class="p-4 border border-slate-200 text-sm">Los scripts crean cuentas y tratan datos personales: minimiza datos, registra quién ejecuta qué y revoca accesos al dar de baja.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">LOPDGDD (LO 3/2018)</td>
            <td class="p-4 border border-slate-200 text-sm">Aplica el RGPD en España: auditoría de permisos y registro de accesos demostrables.</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">ENS (RD 3/2020)</td>
            <td class="p-4 border border-slate-200 text-sm">Marco de seguridad para administraciones y empresas: medidas de control de acceso, registro y continuidad aplicables a tu runbook.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Regla de backup 3-2-1</td>
            <td class="p-4 border border-slate-200 text-sm">Buen estándar del sector: 3 copias, en 2 soportes, 1 fuera de la empresa; tus scripts de backup deben poder justificarlo.</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Principio del mínimo privilegio</td>
            <td class="p-4 border border-slate-200 text-sm">Los scripts no deben ejecutarse con permisos de administrador salvo cuando sea imprescindible, y las credenciales nunca en claro en el código.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">CIS Benchmarks</td>
            <td class="p-4 border border-slate-200 text-sm">Guías de configuración segura de Windows y Linux que pueden inspirar tus scripts de comprobación de hardening.</td>
        </tr>
    </tbody>
</table>

<h3>2.4. Aportaciones del Proyecto</h3>
<div class="callout callout-success">
    <div class="callout-title">
        <span>✨</span> Tu Propuesta de Valor
    </div>
    <p>Explica qué diferencia tu propuesta de las soluciones estándar. Por ejemplo: una suite <strong>a medida, de código abierto y sin licencias</strong>, pensada para un técnico único, con documentación en castellano, pruebas automáticas y adaptada a la realidad de una pyme logística. Justifica por qué esa combinación es mejor <em>para Logística Sagunt</em> y no en abstracto.</p>
</div>
`;
