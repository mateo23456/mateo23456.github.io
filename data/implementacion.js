window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span> Fase de Implementación
    </div>
    <p>Aquí es donde el proyecto cobra vida. Tu laboratorio primero, el código después. Este documento es un <strong>cuaderno de trabajo</strong>: te guía para que implementes sin perderte, pero <strong>el código lo escribes tú</strong>.</p>
</div>

<h3>6.1. Montaje del Laboratorio</h3>
<p>Antes de tocar nada, monta un entorno de pruebas donde puedas romper cosas sin miedo:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🪟 Máquina 1: Windows Server</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Active Directory con los departamentos de prueba</li>
            <li>PowerShell 5.1+ con módulos de AD</li>
            <li>Programador de Tareas configurado</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🐧 Máquina 2: Ubuntu Server</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Servicios simulados (web, correo local de pruebas)</li>
            <li>cron activo y carpeta de logs</li>
            <li>Carpetas de origen y destino para backups</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">🐍 Estación de desarrollo</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Editor (VS Code) con extensiones de Bash/PowerShell/Python</li>
            <li>Git y repositorio remoto (GitHub/GitLab)</li>
            <li>Python con entorno virtual y librerías</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span> ¡Atención!
    </div>
    <p>Nunca pruebes scripts de alta/baja de usuarios ni borrados contra datos reales sin autorización expresa del profesorado. En el laboratorio usarás <strong>siempre datos ficticios</strong>.</p>
</div>

<h3>6.2. Diario de Implementación</h3>
<p>Documenta cada hito como un profesional. Rellena una fila por sesión relevante (mínimo 10):</p>

<div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm">
    <table class="w-full text-sm">
        <thead class="bg-slate-50 border-b border-slate-100">
            <tr>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Fecha</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Tarea realizada</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Problemas encontrados</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Solución / Commit</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-slate-50 text-slate-600 text-xs">
            <tr>
                <td class="px-6 py-4 font-mono">[Fecha]</td>
                <td class="px-6 py-4 font-bold">[Ej: Creación del repositorio y estructura]</td>
                <td class="px-6 py-4">[Ej: conflicto de .gitignore]</td>
                <td class="px-6 py-4 font-mono">[hash del commit]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-mono">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4 font-mono">[...]</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>6.3. Estándares de Código</h3>
<p>Aplica buenas prácticas de código limpio en los tres lenguajes. Investiga estas reglas y aplícalas:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">🐧 Bash</h4>
        <ul class="list-disc pl-6 space-y-2 text-xs text-slate-600">
            <li>Shebang correcto (<code class="text-sm">#!/usr/bin/env bash</code>)</li>
            <li>Modo estricto: <code class="text-sm">set -euo pipefail</code></li>
            <li>Variables entre comillas siempre</li>
            <li>Funciones con nombres verbales</li>
            <li>Pasar por ShellCheck sin errores</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🪟 PowerShell</h4>
        <ul class="list-disc pl-6 space-y-2 text-xs text-slate-600">
            <li><code class="text-sm">[CmdletBinding()]</code> y parámetros con validación</li>
            <li>Errores con <code class="text-sm">try/catch</code> y <code class="text-sm">$ErrorActionPreference</code></li>
            <li>Salidas estructuradas (objetos, no solo texto)</li>
            <li>Comentarios basados en ayudas (<code class="text-sm">.SYNOPSIS</code>)</li>
            <li>Pasar por PSScriptAnalyzer sin errores graves</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🐍 Python</h4>
        <ul class="list-disc pl-6 space-y-2 text-xs text-slate-600">
            <li>PEP 8: nombres en snake_case, 79-100 caracteres</li>
            <li>Funciones cortas con docstring</li>
            <li>Manejo de excepciones específico (nunca <code class="text-sm">except:</code> vacío)</li>
            <li>Dependencias declaradas en <code class="text-sm">requirements.txt</code></li>
            <li>Codificación UTF-8 y rutas con <code class="text-sm">pathlib</code></li>
        </ul>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📝</span> Ejemplo de Bloque de Código Correcto (Bash)
    </div>
    <p class="text-sm mb-2">Estructura mínima de un script con manejo de errores y registro. Úsala como referencia y escríbela tú:</p>
    <div class="callout callout-success my-4">
<pre class="text-xs overflow-x-auto">
#!/usr/bin/env bash
set -euo pipefail

LOG="/var/log/sagunt/backup.log"
umask 077

registrar() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG"
}

main() {
    registrar "INICIO backup diario"
    # ... copia, verificación y notificación ...
    registrar "FIN backup diario: OK"
}

main "$@"
</pre>
    </div>
</div>

<h3>6.4. Aseguramiento de Calidad y Pruebas</h3>
<p>Un script "que funciona en mi máquina" no es un script profesional. Realiza estas pruebas y registra sus resultados:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tipo de prueba</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Qué comprueba</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Herramienta / Cómo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Estática</td>
            <td class="p-4 border border-slate-200 text-sm">Errores de sintaxis y malas prácticas sin ejecutar</td>
            <td class="p-4 border border-slate-200 text-sm">ShellCheck, PSScriptAnalyzer, python -m py_compile</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Unitaria</td>
            <td class="p-4 border border-slate-200 text-sm">Que cada función hace lo que promete con datos de prueba</td>
            <td class="p-4 border border-slate-200 text-sm">Bats (Bash), Pester (PowerShell), pytest (Python)</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">De integración</td>
            <td class="p-4 border border-slate-200 text-sm">Que los scripts juntos cubren el flujo completo (ej: alta + verificación)</td>
            <td class="p-4 border border-slate-200 text-sm">Ejecución en laboratorio con datos ficticios</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Estrés / límites</td>
            <td class="p-4 border border-slate-200 text-sm">Comportamiento con disco lleno, permisos denegados, red caída</td>
            <td class="p-4 border border-slate-200 text-sm">Simulación de fallos y revisión de códigos de salida</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">De regresión</td>
            <td class="p-4 border border-slate-200 text-sm">Que un cambio no rompe lo que ya funcionaba</td>
            <td class="p-4 border border-slate-200 text-sm">Suite de tests ejecutada tras cada modificación</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Para cada script principal:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Escribe al menos <strong>2 casos de prueba</strong> (uno correcto y uno de error)</li>
        <li>Ejecuta las herramientas de calidad y <strong>adjunta la salida</strong> limpia</li>
        <li>Registra los <strong>códigos de salida</strong> (exit codes) que devuelve cada escenario</li>
        <li>Guarda capturas o logs como <strong>evidencia</strong> para el tribunal</li>
    </ul>
</div>

<h3>6.5. Programación de Ejecuciones Automáticas</h3>
<p>Una vez probados los scripts, prográmalos para que se ejecuten solos. Investiga cómo se hace en cada sistema:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">⏰ En Ubuntu (cron / systemd timers)</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Define la frecuencia de cada tarea (diaria, semanal, cada 15 min)</li>
            <li>Redirige la salida al archivo de log correspondiente</li>
            <li>Comprueba con <code class="text-sm">systemctl list-timers</code> o <code class="text-sm">crontab -l</code></li>
            <li>Considera systemd timers si necesitas más control (dependencias, reintentos)</li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-2">⏰ En Windows (Programador de Tareas)</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Crea tareas con disparador (hora, evento, inicio de sesión)</li>
            <li>Especifica el usuario con el que corre y su nivel de privilegios</li>
            <li>Configura reintentos y acción si falla</li>
            <li>Exporta la tarea XML a <code class="text-sm">windows/tareas/</code> para versionarla</li>
        </ul>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🏁</span> Hitos de Implementación
    </div>
    <p>Sigue este orden para no atascarte (ajústalo a tu planificación):</p>
    <ol class="list-decimal pl-6 space-y-2 mt-2 text-sm">
        <li>Laboratorio virtual montado y verificado</li>
        <li>Repositorio Git con estructura y primer README</li>
        <li>Script de comprobación de disco (el más sencillo) funcionando con logs</li>
        <li>Script de backup diario con verificación y notificación</li>
        <li>Script de inventario de equipos</li>
        <li>Scripts de PowerShell para usuarios de Active Directory</li>
        <li>Script Python de informe semanal</li>
        <li>Programación con cron y Programador de Tareas</li>
        <li>Suite de pruebas y evidencias completas</li>
        <li>Documentación final: runbook y guía de uso</li>
    </ol>
</div>
`;
