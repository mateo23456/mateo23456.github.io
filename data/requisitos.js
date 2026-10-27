window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Análisis de Requisitos
    </div>
    <p>Aquí defines <strong>qué debe hacer</strong> tu suite de scripts, sin decir todavía cómo. Un buen análisis de requisitos evita que a mitad del proyecto descubras que te faltaba una funcionalidad clave.</p>
</div>

<h3>4.1. Análisis Funcional</h3>
<p>Los requisitos funcionales describen <strong>funciones concretas</strong> del sistema. Redáctalos usando <strong>verbos de acción</strong> y asegurándote de que son verificables. Te proponemos estas familias de requisitos; amplíalas y detállalas:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h4 class="text-blue-600 font-bold mb-3">👤 Gestión de usuarios</h4>
        <ul class="list-disc pl-6 space-y-2 text-xs text-slate-600">
            <li>El script de altas <strong>creará</strong> la cuenta, <strong>asignará</strong> grupos por departamento y <strong>comprobará</strong> el resultado.</li>
            <li>El script de bajas <strong>desactivará</strong> la cuenta y <strong>revocará</strong> permisos según RGPD.</li>
            <li>[Añade requisitos adicionales]</li>
        </ul>
    </div>
    <div class="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h4 class="text-blue-600 font-bold mb-3">💾 Copias de seguridad</h4>
        <ul class="list-disc pl-6 space-y-2 text-xs text-slate-600">
            <li>El script de backup <strong>copiará</strong> las rutas definidas, <strong>verificará</strong> la integridad y <strong>notificará</strong> por correo.</li>
            <li>Aplicará <strong>retención</strong> (borrará copias anteriores según política).</li>
            <li>[Añade requisitos adicionales]</li>
        </ul>
    </div>
    <div class="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h4 class="text-blue-600 font-bold mb-3">📊 Inventario e informes</h4>
        <ul class="list-disc pl-6 space-y-2 text-xs text-slate-600">
            <li>El script de inventario <strong>recopilará</strong> hardware y software y <strong>exportará</strong> CSV/Excel.</li>
            <li>El informe semanal <strong>consolidará</strong> datos y <strong>enviará</strong> el correo los lunes.</li>
            <li>[Añade requisitos adicionales]</li>
        </ul>
    </div>
    <div class="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h4 class="text-blue-600 font-bold mb-3">🔔 Monitorización y alertas</h4>
        <ul class="list-disc pl-6 space-y-2 text-xs text-slate-600">
            <li>El script de comprobación <strong>verificará</strong> discos y servicios y <strong>alertará</strong> si se superan umbrales.</li>
            <li>Cada ejecución <strong>registrará</strong> fecha, resultado y errores en un log.</li>
            <li>[Añade requisitos adicionales]</li>
        </ul>
    </div>
</div>

<div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm">
    <table class="w-full text-sm">
        <thead class="bg-slate-50 border-b border-slate-100">
            <tr>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">ID</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Requisito Funcional</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Prioridad</th>
                <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">¿Cómo se verifica?</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-slate-50 text-slate-600 text-xs">
            <tr>
                <td class="px-6 py-4 font-mono font-bold text-blue-600">RF-01</td>
                <td class="px-6 py-4 font-bold">[Ej: Dar de alta un usuario con su departamento]</td>
                <td class="px-6 py-4">[Alta/Media/Baja]</td>
                <td class="px-6 py-4">[Ej: Ejecutar con datos de prueba y comprobar en AD]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-mono font-bold text-blue-600">RF-02</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-mono font-bold text-blue-600">RF-03</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-mono font-bold text-blue-600">RF-04</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-mono font-bold text-blue-600">RF-05</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
                <td class="px-6 py-4">[...]</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa la tabla con <strong>mínimo 8 requisitos funcionales</strong>. Cada requisito debe:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Empezar por un <strong>verbo de acción</strong> (creará, verificará, exportará, alertará...)</li>
        <li>Ser <strong>verificable</strong>: si no puedes probarlo, reescríbelo</li>
        <li>Tener <strong>prioridad</strong> (MoSCoW: Must, Should, Could, Won't)</li>
    </ul>
</div>

<h3>4.2. Requisitos No Funcionales</h3>
<p>Los requisitos no funcionales describen <strong>de cómo</strong> debe ser el sistema. Son los que separan un script casero de una herramienta profesional:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Categoría</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo de requisito para tu proyecto</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tu requisito concreto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Fiabilidad</td>
            <td class="p-4 border border-slate-200 text-sm">Un fallo en un script no debe dejar el resto sin ejecutar; habrá manejo de errores.</td>
            <td class="p-4 border border-slate-200 text-sm text-slate-400">[_______]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Rendimiento</td>
            <td class="p-4 border border-slate-200 text-sm">El inventario de los 38 equipos debe completarse en menos de 15 minutos.</td>
            <td class="p-4 border border-slate-200 text-sm text-slate-400">[_______]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Seguridad</td>
            <td class="p-4 border border-slate-200 text-sm">Ninguna contraseña en claro en el código ni en los logs; uso de credenciales seguras.</td>
            <td class="p-4 border border-slate-200 text-sm text-slate-400">[_______]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Usabilidad</td>
            <td class="p-4 border border-slate-200 text-sm">Cada script pedirá confirmación antes de acciones destructivas y mostrará ayuda (--help).</td>
            <td class="p-4 border border-slate-200 text-sm text-slate-400">[_______]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Mantenibilidad</td>
            <td class="p-4 border border-slate-200 text-sm">Código comentado, funciones con una responsabilidad y guía de estilo consistente.</td>
            <td class="p-4 border border-slate-200 text-sm text-slate-400">[_______]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Trazabilidad</td>
            <td class="p-4 border border-slate-200 text-sm">Toda ejecución queda registrada con fecha, usuario, resultado y errores en un log.</td>
            <td class="p-4 border border-slate-200 text-sm text-slate-400">[_______]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Portabilidad</td>
            <td class="p-4 border border-slate-200 text-sm">Los scripts Linux deben funcionar en Ubuntu 22.04+ sin dependencias exóticas.</td>
            <td class="p-4 border border-slate-200 text-sm text-slate-400">[_______]</td>
        </tr>
    </tbody>
</table>

<h3>4.3. Métricas de Rendimiento y Pruebas de Aceptación</h3>
<p>Define de forma <strong>medible</strong> cuándo consideras que un script cumple su función. Estas son las métricas clave que deberás probar y documentar:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">⏱️ Tiempo de ejecución</h4>
        <p class="text-xs text-slate-600 m-0">Ej: alta de usuario &lt; 10 min; inventario &lt; 15 min; backup completo &lt; 40 min.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">✅ Tasa de éxito</h4>
        <p class="text-xs text-slate-600 m-0">Ej: 20 ejecuciones de prueba seguidas sin errores; 0 ejecuciones silenciosamente fallidas.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">🔔 Detección de incidencias</h4>
        <p class="text-xs text-slate-600 m-0">Ej: desde que un servicio cae hasta que llega el correo de alerta: menos de 15 minutos.</p>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>✅</span> Plantilla de Pruebas de Aceptación
    </div>
    <p class="text-sm mb-2">Para cada requisito, rellena una fila. Este será tu evidencia ante el tribunal:</p>
    <table class="w-full text-xs">
        <thead class="bg-blue-50">
            <tr>
                <th class="p-3 text-left font-bold">Caso de prueba</th>
                <th class="p-3 text-left font-bold">Datos de entrada</th>
                <th class="p-3 text-left font-bold">Resultado esperado</th>
                <th class="p-3 text-left font-bold">Resultado real</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="p-3 border-t border-slate-100">[Ej: TP-01 Alta usuario departamento Almacén]</td>
                <td class="p-3 border-t border-slate-100">[Nombre, usuario, departamento]</td>
                <td class="p-3 border-t border-slate-100">[Cuenta creada + grupos correctos]</td>
                <td class="p-3 border-t border-slate-100">[☐ Pass / ☐ Fail]</td>
            </tr>
            <tr>
                <td class="p-3 border-t border-slate-100">[TP-02 ...]</td>
                <td class="p-3 border-t border-slate-100">[...]</td>
                <td class="p-3 border-t border-slate-100">[...]</td>
                <td class="p-3 border-t border-slate-100">[...]</td>
            </tr>
        </tbody>
    </table>
</div>
`;
