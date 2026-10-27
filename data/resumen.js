window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Objetivo de esta Sección
    </div>
    <p>El resumen es lo primero que leerá el tribunal. Debe ser breve pero completo: en menos de una página tiene que entender <strong>qué</strong> has hecho, <strong>para quién</strong>, <strong>por qué</strong> y <strong>cómo</strong>. Redáctalo al final, cuando ya tengas todo el proyecto cerrado.</p>
</div>

<h3>Guía para Redactar el Resumen Ejecutivo</h3>
<p>Un buen resumen responde a estas cuatro preguntas clave:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🎯 ¿QUÉ has automatizado?</h4>
        <p class="text-sm text-slate-600">Describe en una frase la suite de scripts (Bash, PowerShell y Python) y las tareas que cubre.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🏢 ¿PARA QUIÉN?</h4>
        <p class="text-sm text-slate-600">Identifica la empresa cliente (Logística Sagunt S.L.), su sector y su tamaño.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">⚠️ ¿POR QUÉ era necesario?</h4>
        <p class="text-sm text-slate-600">Explica las tareas manuales que consumen horas del técnico y los riesgos de errores humanos.</p>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2">🛠️ ¿CÓMO lo has hecho?</h4>
        <p class="text-sm text-slate-600">Nombra las tecnologías: scripts Bash, PowerShell, Python, cron, Programador de Tareas, Git, ShellCheck.</p>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
    <div class="p-6 bg-blue-50/60 rounded-3xl border border-blue-100">
        <h4 class="text-blue-700 font-bold mb-2">Castellano</h4>
        <p class="text-xs text-slate-600 italic m-0">[Escribe aquí el resumen en castellano. Máximo 200 palabras.]</p>
    </div>
    <div class="p-6 bg-indigo-50/60 rounded-3xl border border-indigo-100">
        <h4 class="text-indigo-700 font-bold mb-2">Valencià</h4>
        <p class="text-xs text-slate-600 italic m-0">[Escriu ací el resum en valencià. Màxim 200 paraules.]</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200">
        <h4 class="text-slate-700 font-bold mb-2">English</h4>
        <p class="text-xs text-slate-600 italic m-0">[Write the abstract in English here. Maximum 200 words.]</p>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo de Redacción
    </div>
    <p>Escribe el resumen <strong>en pasado</strong> ("se implementó", "se automatizó") para las cosas ya terminadas y en <strong>presente</strong> para el resultado final ("la suite permite..."). Usa las mismas palabras clave que aparecerán en tu memoria.</p>
</div>

<h3>Estructura Sugerida para el Resumen</h3>
<p>Sigue este esquema para redactar tu resumen (300-400 palabras):</p>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
Párrafo 1: Contexto y Problemática (80-100 palabras)
├── Presentación de Logística Sagunt S.L. (Sagunto, 45 empleados)
├── Tareas manuales del técnico: altas de usuario, backups USB, inventario en Excel
└── Riesgos: errores humanos, pérdida de datos, horas de trabajo improductivas

Párrafo 2: Solución Propuesta (100-120 palabras)
├── Suite de scripts: Bash (Ubuntu), PowerShell (Windows Server), Python (informes)
├── Automatización con cron y Programador de Tareas + registro de ejecuciones
├── Control de versiones con Git y documentación en un repositorio
└── Herramientas de calidad: ShellCheck, pruebas automáticas, logs

Párrafo 3: Resultados y Beneficios (100-120 palabras)
├── Reducción del tiempo de tareas manuales del técnico (-70%)
├── Altas de usuario de horas a minutos con verificación automática
├── Copias de seguridad diarias automatizadas con notificación por correo
└── Inventario actualizado y monitorización con alertas tempranas

Párrafo 4: Palabras Clave (5-8 términos)
└── Bash, PowerShell, Python, cron, automatización, Git, ShellCheck, RGPD
</pre>
</div>

<h3>Ejemplo de Resumen para tu Proyecto</h3>
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span> Ejemplo: Automatización de tareas en Logística Sagunt S.L.
    </div>
    <p class="text-sm text-slate-700">
        <strong>Logística Sagunt S.L.</strong> es una empresa de operaciones logísticas y almacenaje situada en el puerto de Sagunto (Valencia), con <strong>45 empleados</strong>, un almacén de 4.000 m² y una facturación anual cercana a los <strong>6 millones de euros</strong>. Su equipo de sistemas está formado por <strong>una sola persona</strong> que dedica unas <strong>10 horas semanales</strong> a tareas repetitivas: crear usuarios a mano en Active Directory, realizar copias de seguridad en discos USB sin verificar, mantener un inventario de equipos en un Excel desactualizado y elaborar cada lunes un informe de estado de servicios por correo.
        <br><br>
        Este proyecto diseña e implanta una <strong>suite de scripts de automatización</strong> organizada en un repositorio Git. Se desarrollan scripts en <strong>PowerShell</strong> para altas y bajas de usuarios, generación de inventario y gestión de grupos; scripts en <strong>Bash</strong> para copias de seguridad automáticas, comprobación de espacio en disco y monitorización de servicios en los servidores Ubuntu; y un script en <strong>Python</strong> que consolida los informes en CSV y los envía por correo. Las ejecuciones se programan con <strong>cron</strong> y el <strong>Programador de Tareas</strong>, dejando trazabilidad en archivos de registro.
        <br><br>
        Los resultados esperados incluyen una <strong>reducción del 70%</strong> del tiempo dedicado a tareas manuales, altas de usuario completadas en menos de 10 minutos con verificación automática, copias de seguridad diarias con notificación de éxito o fallo según la regla 3-2-1, inventario al día del 100% de los equipos y detección de incidencias en menos de 15 minutos. Todo queda documentado y versionado, eliminando la dependencia del conocimiento de una sola persona y mejorando el cumplimiento del <strong>RGPD</strong> en la gestión de cuentas.
        <br><br>
        <strong>Palabras clave:</strong> Bash, PowerShell, Python, cron, automatización, Git, ShellCheck, copias de seguridad, monitorización, RGPD.
    </p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Redacta tu resumen siguiendo estos criterios:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Extensión:</strong> 300-400 palabras (aproximadamente 1 página)</li>
        <li><strong>Estilo:</strong> Formal pero claro, evita jerga que no puedas explicar</li>
        <li><strong>Formato:</strong> Párrafos separados y negritas en los conceptos clave</li>
        <li><strong>Palabras clave:</strong> 5-8 términos al final, separados por comas</li>
        <li><strong>Extra:</strong> Incluye la versión en valenciano y en inglés en el mismo bloque</li>
    </ul>
</div>
`;
