window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📐</span> Arquitectura de la Solución
    </div>
    <p>Esta es la fase de los planos. Antes de programar nada, debes decidir <strong>cómo se organiza la suite</strong>, qué script hace qué y cómo fluyen los datos. Un buen diseño evita rehacer el código después.</p>
</div>

<h3>5.1. Arquitectura General</h3>
<p>Describe el modelo general de tu solución: una suite de scripts distribuida en tres lenguajes, orquestada por planificadores de tareas y con registro centralizado. Es imprescindible incluir un <strong>diagrama de arquitectura</strong> que muestre: los servidores (Windows/Ubuntu), dónde se ejecuta cada script, a dónde van los logs y cómo salen las alertas.</p>

<div class="p-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-center mb-12">
    <span class="text-slate-400 font-bold uppercase tracking-widest text-xs">[ Espacio para el Diagrama de Arquitectura de la Suite ]</span>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🛠️</span> Herramientas para el diagrama
    </div>
    <p>Puedes dibujar tu arquitectura con <strong>draw.io (diagrams.net)</strong>, que es gratuito y funciona en el navegador. Incluye leyenda, el lenguaje de cada script (Bash/PowerShell/Python), el planificador que lo ejecuta y hacia dónde van los datos (logs, correo, CSV).</p>
</div>

<h3>5.2. Estructura del Repositorio</h3>
<p>Define cómo organizas los archivos. Una estructura clara es la diferencia entre una carpeta de scripts y una suite profesional. Propón una estructura tipo y ajústala a tus necesidades:</p>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
automatizacion-sagunt/
├── README.md                  ← Visión general, requisitos y cómo usarla
├── LICENSE
├── .gitignore
├── docs/
│   ├── runbook.md             ← Guía operativa paso a paso
│   ├── diagrama-arquitectura.png
│   └── politica-backups.md
├── windows/
│   ├── usuarios/
│   │   ├── alta-usuario.ps1
│   │   ├── baja-usuario.ps1
│   │   └── modulos/            ← Funciones compartidas
│   ├── inventario/
│   │   └── generar-inventario.ps1
│   └── tareas/                 ← Exportaciones del Programador de Tareas
├── linux/
│   ├── backups/
│   │   └── backup-diario.sh
│   ├── monitorizacion/
│   │   └── comprobar-servicios.sh
│   └── logs/
│       └── rotar-logs.sh
├── informes/
│   ├── generar-informe-semanal.py
│   └── requirements.txt
├── tests/
│   ├── test-backup.sh
│   └── test-informe.py
└── config/
    ├── umbrales.ini            ← Umbrales y rutas (sin credenciales)
    └── departamentos.csv       ← Mapa departamento → grupos AD
</pre>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Crea tu propia estructura de carpetas y justifica cada decisión. Responde:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>¿Por qué separas <code class="text-sm">windows/</code> y <code class="text-sm">linux/</code>?</li>
        <li>¿Dónde guardas la configuración y por qué <strong>fuera</strong> del código?</li>
        <li>¿Cómo evitas que las credenciales aparezcan en Git? (revisa <code class="text-sm">.gitignore</code>)</li>
    </ul>
</div>

<h3>5.3. Diseño de los Scripts Individuales</h3>
<p>Para cada script principal, define su contrato. Completa la tabla con tus scripts (mínimo 5):</p>

<div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm">
    <table class="w-full text-sm">
        <thead class="bg-slate-50 border-b border-slate-100">
            <tr>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Script</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Lenguaje / SO</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Entradas</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Salidas</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Planificador</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-slate-50 text-slate-600 text-xs">
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700">alta-usuario.ps1</td>
                <td class="px-6 py-4">PowerShell / Windows</td>
                <td class="px-6 py-4">Datos del empleado, departamento</td>
                <td class="px-6 py-4">Cuenta AD + log de auditoría</td>
                <td class="px-6 py-4">Bajo demanda</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700">backup-diario.sh</td>
                <td class="px-6 py-4">Bash / Ubuntu</td>
                <td class="px-6 py-4">Rutas definidas en config</td>
                <td class="px-6 py-4">Copia en NAS + log + correo</td>
                <td class="px-6 py-4">cron (diario)</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700">[Script 3]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700">[Script 4]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700">[Script 5]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🧩</span> Patrón de Diseño Recomendado para Cada Script
    </div>
    <p class="text-sm mb-2">Estructura recomendada (investígala y adáptala):</p>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
        <div class="p-3 bg-blue-50 rounded-xl text-center text-xs font-bold text-blue-700">1. Cabecera y licencia</div>
        <div class="p-3 bg-blue-50 rounded-xl text-center text-xs font-bold text-blue-700">2. Config y argumentos</div>
        <div class="p-3 bg-blue-50 rounded-xl text-center text-xs font-bold text-blue-700">3. Funciones con una tarea</div>
        <div class="p-3 bg-blue-50 rounded-xl text-center text-xs font-bold text-blue-700">4. Manejo de errores</div>
        <div class="p-3 bg-blue-50 rounded-xl text-center text-xs font-bold text-blue-700">5. Registro y código de salida</div>
    </div>
</div>

<h3>5.4. Diseño de Seguridad y Manejo de Credenciales</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
        <h4 class="font-bold text-red-800 mb-2">🛡️ Qué NO hacer jamás</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Contraseñas escritas dentro del script o en el repositorio</li>
            <li>Logs con datos personales completos ni contraseñas</li>
            <li>Ejecutar todo como administrador/root por comodidad</li>
            <li>Scripts destructivos sin confirmación ni copia previa</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">✅ Qué SÍ hacer</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Credenciales desde variables de entorno o almacén seguro (Credential Manager, secretos de Git)</li>
            <li>Permisos mínimos: cada script solo con lo que necesita</li>
            <li>Registro de auditoría: quién ejecutó qué y cuándo</li>
            <li>Pruebas primero en laboratorio con datos falsos</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🛡️</span> Tarea para el Alumnado
    </div>
    <p>Redacta tu <strong>política de credenciales</strong> y tu <strong>política de registros (logs)</strong>. Debes indicar dónde se guardan las contraseñas, quién tiene acceso, cuánto se conservan los logs y cómo se evita que contengan datos personales. No basta con decir "uso buenas prácticas": hay que justificarlo.</p>
</div>

<h3>5.5. Flujo de Ejemplo: Alta de Usuario</h3>
<p>Dibuja el flujo completo de la tarea más importante. Este esquema es solo una pista; detállalo con las decisiones reales de tu script:</p>

<div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl my-6">
    <div class="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-600">
        <span class="px-4 py-2 bg-white border border-slate-200 rounded-xl">Solicitud (RRHH)</span>
        <span class="text-slate-400">→</span>
        <span class="px-4 py-2 bg-white border border-slate-200 rounded-xl">Validar datos</span>
        <span class="text-slate-400">→</span>
        <span class="px-4 py-2 bg-white border border-slate-200 rounded-xl">Crear cuenta + grupos</span>
        <span class="text-slate-400">→</span>
        <span class="px-4 py-2 bg-white border border-slate-200 rounded-xl">Permisos de carpetas</span>
        <span class="text-slate-400">→</span>
        <span class="px-4 py-2 bg-white border border-slate-200 rounded-xl">Verificación</span>
        <span class="text-slate-400">→</span>
        <span class="px-4 py-2 bg-green-100 border border-green-200 rounded-xl text-green-700">Log + notificación</span>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🎨</span> Tarea para el Alumnado
    </div>
    <p>Completa los diagramas de flujo de <strong>al menos 3 scripts</strong> (por ejemplo: alta de usuario, backup diario e informe semanal). Indica las decisiones (¿el departamento existe? ¿hay espacio en el NAS?) y los caminos de error.</p>
</div>
`;
