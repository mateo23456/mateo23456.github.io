window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.conclusiones = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span> Cierre del Proyecto
    </div>
    <p>Las conclusiones no son un resumen repetido: son tu <strong>valoración crítica</strong> de lo aprendido, lo que salió bien y lo que harías distinto. Es la sección que demuestra que has crecido como técnico/a.</p>
</div>

<h3>9.1. Cumplimiento de Objetivos</h3>
<p>Vuelve a tus objetivos SMART (sección 1.3) y evalúa uno por uno. Sé honesto/a: un objetivo no cumplido bien explicado vale más que uno cumplido a medias sin decirlo.</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Objetivo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">¿Cumplido?</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Evidencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Altas de usuario &lt; 10 min</td>
            <td class="p-4 border border-slate-200 text-sm">[Sí / Parcial / No]</td>
            <td class="p-4 border border-slate-200 text-sm">[Ej: cronometraje + log de la prueba]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Backups diarios con log y notificación</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Inventario del 100% de equipos</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Reducción del 70% de tareas manuales</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Detección de incidencias &lt; 15 min</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">100% de scripts documentados en Git</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
            <td class="p-4 border border-slate-200 text-sm">[...]</td>
        </tr>
    </tbody>
</table>

<h3>9.2. Aprendizajes por Módulo</h3>
<p>Conecta lo aprendido con cada módulo del ciclo. Este ejercicio demuestra la naturaleza <strong>intermodular</strong> del proyecto:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🖥️ Sistemas Operativos en Red</h4>
        <p class="text-xs text-slate-600 m-0">[Qué has aplicado: usuarios AD, permisos, Programador de Tareas...] y qué te llevas de este módulo.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🌐 Servicios en Red</h4>
        <p class="text-xs text-slate-600 m-0">[Correo SMTP para alertas, cron, servicios monitorizados...] y qué te llevas.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">🛡️ Seguridad Informática</h4>
        <p class="text-xs text-slate-600 m-0">[Credenciales seguras, mínimo privilegio, RGPD, registros de auditoría...] y qué te llevas.</p>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-2">🔩 Montaje y Mantenimiento</h4>
        <p class="text-xs text-slate-600 m-0">[Inventario de hardware por script, diagnóstico de discos...] y qué te llevas.</p>
    </div>
</div>

<h3>9.3. Dificultades y Mejoras Futuras</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50/50 rounded-2xl border border-red-100">
        <h4 class="font-bold text-red-800 mb-2">🚧 Dificultades encontradas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>[Ej: "Los permisos de ejecución de PowerShell bloquearon mis pruebas..."]</li>
            <li>[Ej: "Diseñar el manejo de errores en Bash me costó más de lo previsto..."]</li>
            <li>[Añade 2-3 más]</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🔮 Mejoras futuras</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>[Ej: "Panel web sencillo para ver el estado de las ejecuciones"]</li>
            <li>[Ej: "Migrar la orquestación a Ansible a medida que crezca la suite"]</li>
            <li>[Añade 2-3 más]</li>
        </ul>
    </div>
</div>

<h3>9.4. Autoevaluación</h3>
<div class="callout callout-success">
    <div class="callout-title">
        <span>🪞</span> Preguntas para tu Reflexión Final
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>¿Serías capaz de explicar cada script a un compañero sin mirar el código?</li>
        <li>¿Qué parte del proyecto te resultó más difícil y cómo la superaste?</li>
        <li>¿Usarías esta misma metodología (Git, tests, documentación) en tu próximo proyecto?</li>
        <li>¿Qué módulo del ciclo te ha resultado más útil en este proyecto y por qué?</li>
        <li>Si tuvieras otras 40 horas, ¿qué mejorarías primero?</li>
    </ul>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Entregables Finales (Recordatorio)
    </div>
    <p>Comprueba que tienes todo preparado para el tribunal:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>📦 <strong>Repositorio Git</strong> completo con README, scripts, config y tests</li>
        <li>📄 <strong>Memoria del proyecto</strong> (este documento) actualizada</li>
        <li>📊 <strong>Evidencias</strong>: logs, salidas de pruebas, capturas, Gantt</li>
        <li>🗺️ <strong>Diagramas</strong>: arquitectura y flujos de al menos 3 scripts</li>
        <li>📋 <strong>Runbook</strong> operativo para la empresa</li>
        <li>🎤 <strong>Presentación</strong> al tribunal (10-15 minutos)</li>
    </ul>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎓</span> Orientación para el Profesorado (Evaluación)
    </div>
    <p class="text-sm">Se sugiere valorar con una rúbrica equilibrada:</p>
    <table class="w-full text-xs mt-2">
        <thead class="bg-blue-50">
            <tr>
                <th class="p-3 text-left font-bold">Criterio</th>
                <th class="p-3 text-left font-bold">Peso orientativo</th>
            </tr>
        </thead>
        <tbody>
            <tr><td class="p-3 border-t border-slate-100">Análisis y diseño (contexto, requisitos, arquitectura)</td><td class="p-3 border-t border-slate-100">25%</td></tr>
            <tr><td class="p-3 border-t border-slate-100">Calidad del código y pruebas</td><td class="p-3 border-t border-slate-100">30%</td></tr>
            <tr><td class="p-3 border-t border-slate-100">Documentación, Git y trazabilidad</td><td class="p-3 border-t border-slate-100">20%</td></tr>
            <tr><td class="p-3 border-t border-slate-100">Presentación y defensa ante el tribunal</td><td class="p-3 border-t border-slate-100">15%</td></tr>
            <tr><td class="p-3 border-t border-slate-100">Trabajo en equipo, plazos y autonomía</td><td class="p-3 border-t border-slate-100">10%</td></tr>
        </tbody>
    </table>
</div>
`;
