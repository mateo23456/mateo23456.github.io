window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span> Justificación Estratégica
    </div>
    <p>¿Es posible llevar a cabo el proyecto? Aquí demuestras que tu propuesta es <strong>viable técnica, económica y temporalmente</strong>. Es la parte de "negocio" que todo tribunal valora, incluso en un ciclo técnico.</p>
</div>

<h3>3.1. Análisis DAFO</h3>
<p>El análisis DAFO estudia la situación actual de Logística Sagunt: sus <strong>debilidades</strong> y <strong>fortalezas</strong> internas, y las <strong>amenazas</strong> y <strong>oportunidades</strong> del entorno. Complétalo con tus propias ideas, no te limites a los ejemplos.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
    <div class="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
        <h4 class="text-red-700 font-bold mb-3 flex items-center gap-2"><span>🔴</span> Debilidades (internas)</h4>
        <ul class="text-xs text-red-800 space-y-2 pl-4">
            <li>Ej: "Un solo técnico de sistemas y tareas 100% manuales."</li>
            <li>Ej: "Cero documentación: los procesos viven en la cabeza del técnico."</li>
            <li>[Añade 2-3 debilidades más]</li>
        </ul>
    </div>
    <div class="p-6 bg-amber-50/50 border border-amber-100 rounded-3xl">
        <h4 class="text-amber-700 font-bold mb-3 flex items-center gap-2"><span>🟠</span> Amenazas (externas)</h4>
        <ul class="text-xs text-amber-800 space-y-2 pl-4">
            <li>Ej: "Un fallo del técnico durante semanas deja la empresa sin soporte."</li>
            <li>Ej: "Errores manuales con datos personales que pueden derivar en sanción RGPD."</li>
            <li>[Añade 2-3 amenazas más]</li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl">
        <h4 class="text-emerald-700 font-bold mb-3 flex items-center gap-2"><span>🟢</span> Fortalezas (internas)</h4>
        <ul class="text-xs text-emerald-800 space-y-2 pl-4">
            <li>Ej: "Infraestructura ya montada: servidores Windows y Ubuntu estables."</li>
            <li>Ej: "El alumnado conoce el entorno real del laboratorio del ciclo."</li>
            <li>[Añade 2-3 fortalezas más]</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50/50 border border-blue-100 rounded-3xl">
        <h4 class="text-blue-700 font-bold mb-3 flex items-center gap-2"><span>🔵</span> Oportunidades (externas)</h4>
        <ul class="text-xs text-blue-800 space-y-2 pl-4">
            <li>Ej: "Software libre (Bash, Python, Git) sin coste de licencias."</li>
            <li>Ej: "Ayudas a la digitalización de pymes (Kit Digital u otras)."</li>
            <li>[Añade 2-3 oportunidades más]</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🔁</span> Del DAFO al CAME
    </div>
    <p>Una vez tengas el DAFO, conviértelo en un plan de acción CAME: <strong>C</strong>orregir las debilidades, <strong>A</strong>frontar las amenazas, <strong>M</strong>antener las fortalezas y <strong>E</strong>xplotar las oportunidades. Propón al menos una acción concreta por cada letra.</p>
</div>

<h3>3.2. Viabilidad Económica</h3>
<p>Estima el coste de tu solución. La buena noticia: casi todo el software es libre, así que el mayor coste será <strong>tu tiempo de trabajo</strong>. Ajusta las cifras a una pyme real y no te olvides de valorar las horas ahorradas.</p>

<div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm">
    <table class="w-full text-sm">
        <thead class="bg-slate-50 border-b border-slate-100">
            <tr>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Recurso</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Descripción</th>
                <th class="px-6 py-4 text-right font-bold text-slate-500 uppercase tracking-widest text-[10px]">Coste Estimado</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-slate-50 text-slate-600">
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700 text-xs">Hardware / laboratorio</td>
                <td class="px-6 py-4 text-xs">Máquinas virtuales de prueba, disco para NAS de backup</td>
                <td class="px-6 py-4 text-right font-mono text-xs">[____] €</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700 text-xs">Software / Licencias</td>
                <td class="px-6 py-4 text-xs">Bash, PowerShell, Python, Git, ShellCheck (software libre: 0 €)</td>
                <td class="px-6 py-4 text-right font-mono text-xs">[____] €</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700 text-xs">Mano de obra (implantación)</td>
                <td class="px-6 py-4 text-xs">Horas de análisis, diseño, programación y pruebas</td>
                <td class="px-6 py-4 text-right font-mono text-xs">[____] €</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700 text-xs">Formación del personal</td>
                <td class="px-6 py-4 text-xs">Documentación, runbook y traspaso de conocimiento</td>
                <td class="px-6 py-4 text-right font-mono text-xs">[____] €</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-bold text-slate-700 text-xs">Mantenimiento anual</td>
                <td class="px-6 py-4 text-xs">Revisión de scripts, actualizaciones y mejoras</td>
                <td class="px-6 py-4 text-right font-mono text-xs">[____] €/año</td>
            </tr>
            <tr class="bg-slate-50/50 font-bold">
                <td colspan="2" class="px-6 py-4 text-right text-xs uppercase">Total Inversión Inicial</td>
                <td class="px-6 py-4 text-right font-mono text-blue-600">[____] €</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💰</span> Retorno de la Inversión (ROI) y Ahorro de Horas
    </div>
    <p>Investiga cómo calcular el ROI. Pista para tu caso: el técnico dedica unas <strong>10 horas semanales</strong> a tareas manuales. Si automatizas el 70%, ahorras unas <strong>7 horas semanales</strong> (≈ 365 horas al año). Multiplica esas horas por el coste horario de un técnico de sistemas y compáralo con la inversión. Además, cuantifica las <strong>pérdidas evitadas</strong>: ¿cuánto cuesta una tarde sin el servidor de pedidos? ¿cuánto podría costar una sanción RGPD por permisos mal revocados?</p>
</div>

<h3>3.3. Viabilidad Técnica y Temporal</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🔧 Viabilidad técnica</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Dominas ya los fundamentos de Bash/PowerShell o necesitas formación previa?</li>
            <li>¿Puedes montar un laboratorio virtual con Windows Server y Ubuntu?</li>
            <li>¿Los servidores reales permiten instalar lo necesario (cron, módulos de PowerShell)?</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">⏳ Viabilidad temporal</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Encaja el trabajo en el calendario del proyecto (≈96 h)?</li>
            <li>¿Qué fases son críticas y no se pueden solapar (laboratorio antes de scripts)?</li>
            <li>¿Qué harás si un script no funciona como esperabas a mitad de plazo?</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Elabora un <strong>diagrama de Gantt</strong> de tu proyecto que incluya:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Todas las fases y tareas desglosadas (mínimo 15 tareas)</li>
        <li>La duración en horas de cada una</li>
        <li>Las dependencias entre tareas (por ejemplo, laboratorio antes de scripts, scripts antes de la programación con cron)</li>
        <li>Los hitos o entregables principales</li>
    </ul>
</div>
`;
