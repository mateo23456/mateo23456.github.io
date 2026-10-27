window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>⚙️</span> Administración y Mantenimiento
    </div>
    <p>Un proyecto no termina cuando "funciona": termina cuando <strong>funciona para siempre</strong>. Aquí defines cómo se mantiene, quién es responsable y qué pasa cuando algo falla.</p>
</div>

<h3>7.1. Modelo de Mantenimiento</h3>
<p>Define el ciclo de vida de tu suite. Quién revisa los scripts, cada cuánto y qué pasa cuando cambian las cosas (nuevo empleado, nuevo servidor, cambio de política):</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">📅 Mantenimiento preventivo</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Revisión mensual de logs y ejecuciones fallidas</li>
            <li>Prueba trimestral de restauración de backups</li>
            <li>Revisión semestral de permisos y cuentas inactivas</li>
        </ul>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-2">🔧 Mantenimiento correctivo</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Corrección de fallos detectados por alertas</li>
            <li>Adaptación a cambios de la infraestructura</li>
            <li>Actualización de dependencias (Python, módulos)</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🚀 Mantenimiento evolutivo</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Nuevos scripts según necesidades de la empresa</li>
            <li>Mejoras de rendimiento y legibilidad</li>
            <li>Migración a herramientas superiores (ej. Ansible)</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Elabora un <strong>plan de mantenimiento anual</strong> en forma de calendario: qué se revisa, quién lo hace, con qué herramienta y qué evidencia se deja. Recuerda que en la empresa solo hay un técnico: el plan debe ser realista.</p>
</div>

<h3>7.2. Gestión de Versiones con Git</h3>
<p>El repositorio es la columna vertebral del proyecto. Define tus convenciones:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Elemento</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Convención que propones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Ramas</td>
            <td class="p-4 border border-slate-200 text-sm">Ej: <code class="text-sm">main</code> estable, <code class="text-sm">develop</code>, <code class="text-sm">feature/nuevo-script</code></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Mensajes de commit</td>
            <td class="p-4 border border-slate-200 text-sm">Ej: tipo (feat/fix/docs) + descripción corta: <code class="text-sm">feat(backup): añade verificación de integridad</code></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Etiquetas (tags)</td>
            <td class="p-4 border border-slate-200 text-sm">Versiones <code class="text-sm">v1.0</code>, <code class="text-sm">v1.1</code> en cada entrega a producción</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Protección de main</td>
            <td class="p-4 border border-slate-200 text-sm">Solo se fusiona con revisión; los tests deben pasar antes</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Secretos</td>
            <td class="p-4 border border-slate-200 text-sm">Nunca en el repo: variables de entorno o gestor de secretos; revisión del .gitignore</td>
        </tr>
    </tbody>
</table>

<h3>7.3. Documentación y Runbook</h3>
<p>La documentación es lo que permite que otra persona opere tu suite sin ti. Debe incluir:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-white border border-slate-200 rounded-3xl">
        <h4 class="text-blue-600 font-bold mb-3">📖 Documentos imprescindibles</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li><strong>README.md</strong>: qué es, requisitos, instalación rápida, ejemplos</li>
            <li><strong>Runbook</strong>: procedimiento paso a paso ante incidencias comunes</li>
            <li><strong>Guía de cada script</strong>: parámetros, ejemplos, códigos de salida</li>
            <li><strong>Política de backups</strong>: qué, cuándo, dónde, retención, restauración</li>
        </ul>
    </div>
    <div class="p-6 bg-white border border-slate-200 rounded-3xl">
        <h4 class="text-blue-600 font-bold mb-3">🗺️ Contenido mínimo del Runbook</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Qué hacer si falla el backup nocturno (cómo leer el log)</li>
            <li>Cómo dar de alta/baja un usuario con el script</li>
            <li>Cómo restaurar un archivo desde la copia de seguridad</li>
            <li>A quién avisar y en qué plazo ante cada tipo de fallo</li>
        </ul>
    </div>
</div>

<h3>7.4. Gestión de Incidencias y SLA</h3>
<p>Define cómo se responde cuando algo falla en producción:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Incidencia</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Prioridad</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Respuesta máxima</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Acción inicial</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Backup nocturno fallido</td>
            <td class="p-4 border border-slate-200 text-sm">Alta</td>
            <td class="p-4 border border-slate-200 text-sm">[Defínelo tú: ej. 1 h]</td>
            <td class="p-4 border border-slate-200 text-sm">Leer log, reintentar, escalar si persiste</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Servidor de pedidos caído</td>
            <td class="p-4 border border-slate-200 text-sm">Crítica</td>
            <td class="p-4 border border-slate-200 text-sm">[Defínelo tú]</td>
            <td class="p-4 border border-slate-200 text-sm">Aviso automático + procedimiento del runbook</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Disco al 90% de uso</td>
            <td class="p-4 border border-slate-200 text-sm">Media</td>
            <td class="p-4 border border-slate-200 text-sm">[Defínelo tú]</td>
            <td class="p-4 border border-slate-200 text-sm">Identificar consumidores y limpiar con script</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Script de informe con error</td>
            <td class="p-4 border border-slate-200 text-sm">Baja</td>
            <td class="p-4 border border-slate-200 text-sm">[Defínelo tú]</td>
            <td class="p-4 border border-slate-200 text-sm">Revisar log, corregir en rama y volver a lanzar</td>
        </tr>
    </tbody>
</table>

<h3>7.5. Cumplimiento RGPD y Auditoría</h3>
<div class="callout callout-error">
    <div class="callout-title">
        <span>🔐</span> Obligaciones con los Datos Personales
    </div>
    <p>Tus scripts tratan datos de empleados. Debes garantizar:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Minimización:</strong> solo los datos estrictamente necesarios en cada script</li>
        <li><strong>Revocación fiable:</strong> al dar de baja a un empleado, el script desactiva la cuenta y retira permisos, dejando constancia</li>
        <li><strong>Registro de auditoría:</strong> quién ejecutó qué script, cuándo y con qué resultado</li>
        <li><strong>Conservación:</strong> logs con antigüedad definida y sin datos personales de más</li>
        <li><strong>Acceso restringido:</strong> el repositorio y los logs, solo para personal autorizado</li>
    </ul>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Prepara un <strong>checklist de auditoría interna</strong> (10-15 puntos) que permita comprobar en 30 minutos que la suite cumple con RGPD y buenas prácticas. Incluye cómo se evidencia cada punto.</p>
</div>
`;
