window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span> Anexos Técnicos
    </div>
    <p>Los anexos recogen las plantillas, checklists y materiales de apoyo que usarás durante el proyecto. Cópialos, ajústalos y adjunta aquí tus evidencias finales.</p>
</div>

<h3>11.1. Plantilla de Cabecera de Script</h3>
<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# ============================================================
# Script:      nombre-del-script.sh
# Descripción: Qué hace y para qué (1-2 frases)
# Autoría:     [Nombre] - IES Serra Perenxisa - SMR 2º
# Fecha:       AAAA-MM-DD
# Versión:     v1.0
# Uso:         ./nombre-del-script.sh [argumentos]
# Salidas:     0 = éxito | 1 = error | 2 = uso incorrecto
# ============================================================
</pre>
</div>

<h3>11.2. Checklist de Calidad por Script</h3>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Comprobación</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">¿Hecho?</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 text-sm">Cabecera completa con autoría, versión y uso</td>
            <td class="p-4 border border-slate-200">☐</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 text-sm">Pasa ShellCheck / PSScriptAnalyzer / py_compile sin errores</td>
            <td class="p-4 border border-slate-200">☐</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 text-sm">Manejo de errores y códigos de salida definidos</td>
            <td class="p-4 border border-slate-200">☐</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 text-sm">Registra cada ejecución en un log con fecha y resultado</td>
            <td class="p-4 border border-slate-200">☐</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 text-sm">Sin credenciales ni datos personales en el código</td>
            <td class="p-4 border border-slate-200">☐</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 text-sm">Ayuda disponible (--help o Get-Help)</td>
            <td class="p-4 border border-slate-200">☐</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 text-sm">Pruebas pasadas con datos ficticios (al menos 2 casos)</td>
            <td class="p-4 border border-slate-200">☐</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 text-sm">Documentado en el README y versionado en Git</td>
            <td class="p-4 border border-slate-200">☐</td>
        </tr>
    </tbody>
</table>

<h3>11.3. Plantilla de Mensaje de Commit</h3>
<div class="callout callout-success my-6">
<pre class="text-xs overflow-x-auto">
tipo(alcance): descripción breve en imperativo

- Detalle opcional 1
- Detalle opcional 2

Refs: RF-01 (requisito relacionado)
</pre>
</div>
<p class="text-sm">Tipos recomendados: <code class="text-sm">feat</code> (nueva funcionalidad), <code class="text-sm">fix</code> (corrección), <code class="text-sm">docs</code> (documentación), <code class="text-sm">test</code> (pruebas), <code class="text-sm">chore</code> (mantenimiento).</p>

<h3>11.4. Registro de Pruebas (Evidencia)</h3>
<div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm">
    <table class="w-full text-sm">
        <thead class="bg-slate-50 border-b border-slate-100">
            <tr>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">ID</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Script</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Caso</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Resultado</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Evidencia (log/captura)</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-slate-50 text-slate-600 text-xs">
            <tr>
                <td class="px-6 py-4 font-mono font-bold text-blue-600">TP-01</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[Pass/Fail]</td>
                <td class="px-6 py-4">[archivo/foto]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-mono font-bold text-blue-600">TP-02</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-mono font-bold text-blue-600">TP-03</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>11.5. Glosario de Términos</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <ul class="text-sm text-slate-700 space-y-3">
            <li><strong>Script:</strong> programa de texto ejecutado línea a línea por un intérprete.</li>
            <li><strong>cron:</strong> planificador de tareas de Linux/Unix.</li>
            <li><strong>Runbook:</strong> manual operativo paso a paso ante situaciones habituales.</li>
            <li><strong>Commit:</strong> guardado atómico de cambios en Git con mensaje descriptivo.</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <ul class="text-sm text-slate-700 space-y-3">
            <li><strong>ShellCheck:</strong> analizador estático de scripts Bash.</li>
            <li><strong>RPO:</strong> Recovery Point Objective, máxima pérdida de datos aceptable.</li>
            <li><strong>SLA:</strong> Service Level Agreement, nivel de servicio acordado.</li>
            <li><strong>Mínimo privilegio:</strong> cada usuario/script solo con los permisos necesarios.</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Añade a los anexos tus <strong>evidencias definitivas</strong>: salidas de ShellCheck, capturas del Programador de Tareas y cron, logs de ejecuciones de prueba, CSV de inventario generado y el resultado de la restauración de un backup.</p>
</div>
`;
