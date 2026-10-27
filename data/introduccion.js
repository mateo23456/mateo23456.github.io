window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span> Contexto del Proyecto
    </div>
    <p>Esta sección describe el escenario real que debes resolver. Léela con atención: entender bien el negocio y sus problemas es la mitad del trabajo. Todo tu análisis posterior partirá de aquí.</p>
</div>

<h3>1.1. Descripción de la Empresa</h3>
<p><strong>Logística Sagunt S.L.</strong> es una empresa dedicada desde 2001 a la <strong>operación logística, almacenaje y distribución de mercancías</strong> para pymes del sector alimentario y de hostelería. Está situada en el <strong>polígono del Puerto de Sagunto (Valencia)</strong>, a unos 30 minutos del centro. Cuenta con una plantilla de <strong>45 empleados</strong> repartidos entre oficinas, almacén y flota de reparto, un almacén de 4.000 m² y factura alrededor de <strong>6 millones de euros al año</strong>.</p>

<p>La empresa creció incorporando tecnología por piezas: un <strong>servidor Windows Server</strong> con Active Directory y carpetas compartidas, <strong>dos servidores Ubuntu</strong> (web de seguimiento de pedidos y sistema de intercambio de datos con clientes), un <strong>NAS</strong> para almacenamiento y unos <strong>38 equipos</strong> (sobremesas, portátiles, dos tablets en almacén y tres terminales de lectura de códigos de barras). La persona responsable de sistemas es <strong>técnico/a único/a</strong> y no tiene documentación: todo el conocimiento está "en su cabeza".</p>

<div class="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <div class="text-3xl font-bold text-blue-600 mb-2">45</div>
        <div class="text-sm text-slate-600">Empleados/as</div>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <div class="text-3xl font-bold text-green-600 mb-2">38</div>
        <div class="text-sm text-slate-600">Equipos en red</div>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <div class="text-3xl font-bold text-purple-600 mb-2">6M€</div>
        <div class="text-sm text-slate-600">Facturación anual</div>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <div class="text-3xl font-bold text-orange-600 mb-2">2001</div>
        <div class="text-sm text-slate-600">Año de fundación</div>
    </div>
</div>

<h4>Departamentos y necesidades</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Departamento</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Personas</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Datos que maneja</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Dirección y Administración</td>
            <td class="p-4 border border-slate-200">6</td>
            <td class="p-4 border border-slate-200 text-sm">Facturación, nóminas, datos de clientes y transportistas (RGPD)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Logística y almacén</td>
            <td class="p-4 border border-slate-200">24</td>
            <td class="p-4 border border-slate-200 text-sm">Pedidos, inventario, albaranes, terminales de lectura</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Flota y reparto</td>
            <td class="p-4 border border-slate-200">10</td>
            <td class="p-4 border border-slate-200 text-sm">Rutas, hojas de ruta, incidencias de entrega</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Comercial</td>
            <td class="p-4 border border-slate-200">3</td>
            <td class="p-4 border border-slate-200 text-sm">Clientes, tarifas, propuestas</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Sistemas (1 persona)</td>
            <td class="p-4 border border-slate-200">1</td>
            <td class="p-4 border border-slate-200 text-sm">Servidores, usuarios, backups, incidencias, soporte a usuarios</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-error">
    <div class="callout-title">
        <span>🔥</span> Problemática Crítica
    </div>
    <p class="mb-3">Las tareas de sistemas de Logística Sagunt se hacen <strong>totalmente a mano</strong> y eso ya está costando dinero, tiempo y seguridad:</p>
    <ul class="space-y-3">
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Altas y bajas de usuario manuales (3 h/semana)</strong>
                <span class="text-xs text-slate-600">Cada alta de empleado implica crear la cuenta, asignar grupos, permisos de carpetas, buzón y configurar el portátil paso a paso. Un alta completa lleva unas 4 horas y se repite 1-2 veces por semana.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Copias de seguridad en USB sin verificación (riesgo real)</strong>
                <span class="text-xs text-slate-600">Se arrastran carpetas a un disco USB "cuando hay tiempo". No hay registro de ejecuciones ni comprobación de restauración. El año pasado se perdieron 3 días de trabajo de un usuario al fallar el único disco.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Inventario de equipos desactualizado</strong>
                <span class="text-xs text-slate-600">El Excel de inventario no se actualiza desde hace 8 meses: faltan 6 equipos, hay 4 dados de baja que siguen listados y nadie sabe qué software hay instalado en cada máquina.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Sin monitorización ni alertas</strong>
                <span class="text-xs text-slate-600">Cuando el servidor de pedidos se cae, lo descubre un usuario de almacén al no poder imprimir albaranes: media tarde perdida. La media de detección de incidencias es de 3 horas.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Informe semanal manual (1,5 h cada lunes)</strong>
                <span class="text-xs text-slate-600">Cada lunes se copian datos de cuatro sitios distintos a un Excel y se mandan por correo. Casi siempre hay errores de copia y el informe llega tarde.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Conocimiento sin documentar: riesgo de dependencia</strong>
                <span class="text-xs text-slate-600">Si el técnico se ausenta una semana, nadie sabe cómo se hacen las copias, qué carpetas hay compartidas ni cómo se crean los usuarios. Sin scripts ni runbook, la empresa queda "a ciegas".</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Errores humanos con impacto directo (RGPD)</strong>
                <span class="text-xs text-slate-600">En dos altas de este año, un usuario nuevo mantuvo durante días los permisos del departamento anterior y pudo ver nóminas ajenas. El RGPD exige revocar accesos de forma fiable y demostrable.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Disco del servidor de correo al 92%</strong>
                <span class="text-xs text-slate-600">Nadie detecta el llenado progresivo de discos hasta que un servicio falla. No hay comprobaciones automáticas de espacio ni de servicios.</span>
            </div>
        </li>
    </ul>
</div>

<h3>1.2. Propuesta Técnica</h3>
<p>Se propone <strong>automatizar las tareas repetitivas de administración de sistemas mediante una suite de scripts</strong>, documentada, versionada y con trazabilidad completa. La solución se apoya en cuatro pilares:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span>🪟</span> Scripts en PowerShell (Windows Server)
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Altas, bajas y modificación de usuarios de Active Directory</li>
            <li>Asignación automática de grupos y permisos por departamento</li>
            <li>Inventario de equipos (hardware, software, disco) por WMI/CIM</li>
            <li>Generación de informes de cuentas y permisos</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <span>🐧</span> Scripts en Bash (Ubuntu Server)
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Copias de seguridad automáticas con verificación y retención</li>
            <li>Comprobación de espacio en disco y de servicios activos</li>
            <li>Rotación y limpieza de logs con registro de ejecución</li>
            <li>Alertas por correo ante fallos o umbrales superados</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-3 flex items-center gap-2">
            <span>🐍</span> Scripts en Python (informes y consolidación)
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Consolidación de datos de inventario y estado en CSV/Excel</li>
            <li>Informe semanal automático enviado por correo</li>
            <li>Parseo de logs para detectar errores recurrentes</li>
            <li>Base para pruebas unitarias y crecimiento futuro</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-3 flex items-center gap-2">
            <span>⚙️</span> Orquestación, control de versiones y calidad
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Programación con cron (Linux) y Programador de Tareas (Windows)</li>
            <li>Repositorio Git con README, licencia y estructura clara</li>
            <li>Calidad con ShellCheck, validación de sintaxis y pruebas</li>
            <li>Archivos de registro (logs) de cada ejecución</li>
        </ul>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🔗</span> Cómo encajan los módulos del ciclo
    </div>
    <p>Este proyecto es <strong>intermodular</strong>: para resolverlo necesitarás aplicar lo aprendido en <strong>Sistemas Operativos en Red</strong> (usuarios, grupos, permisos, Programador de Tareas), <strong>Servicios en Red</strong> (correo, servicios de red, cron), <strong>Seguridad Informática</strong> (credenciales, RGPD, registros de auditoría), <strong>Montaje y Mantenimiento</strong> (inventario de hardware) y <strong>Aplicaciones Ofimáticas</strong> (informes CSV/Excel). La parte de programación se apoya en la lógica de scripts que ya has ido practicando a lo largo del ciclo.</p>
</div>

<h3>1.3. Objetivos SMART</h3>
<p>Los objetivos del proyecto siguen la metodología SMART (Específicos, Medibles, Alcanzables, Relevantes y Temporales):</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Objetivo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Métrica</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Plazo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Automatizar altas de usuario</td>
            <td class="p-4 border border-slate-200 text-sm">Alta completa en &lt; 10 min (hoy: 4 h) con verificación automática</td>
            <td class="p-4 border border-slate-200">4 semanas</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Automatizar copias de seguridad</td>
            <td class="p-4 border border-slate-200 text-sm">Backups diarios con log y notificación; RPO &lt; 24 h (regla 3-2-1)</td>
            <td class="p-4 border border-slate-200">3 semanas</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Inventariar los 38 equipos</td>
            <td class="p-4 border border-slate-200 text-sm">100% de equipos con inventario generado por script y actualizado</td>
            <td class="p-4 border border-slate-200">3 semanas</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Reducir tareas manuales del técnico</td>
            <td class="p-4 border border-slate-200 text-sm">De 10 h/semana a menos de 3 h/semana (-70%)</td>
            <td class="p-4 border border-slate-200">2 meses</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Monitorizar servicios y discos</td>
            <td class="p-4 border border-slate-200 text-sm">Detección de incidencias en &lt; 15 min con alerta por correo</td>
            <td class="p-4 border border-slate-200">4 semanas</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Documentar y versionar todo</td>
            <td class="p-4 border border-slate-200 text-sm">100% de los scripts en un repositorio Git con README y runbook</td>
            <td class="p-4 border border-slate-200">6 semanas</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Nota para el Alumnado
    </div>
    <p>Esta introducción es el <strong>contexto de partida</strong>. A lo largo del proyecto deberás:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Justificar por qué un enfoque de scripts documentados es mejor que seguir a mano</li>
        <li>Diseñar la estructura de la suite y el flujo de ejecución de cada script</li>
        <li>Implementar y probar los scripts en un laboratorio antes de aplicarlos</li>
        <li>Demostrar con pruebas y registros que todo funciona y es trazable</li>
        <li>Presupuestar el ahorro de horas y analizar la viabilidad económica</li>
    </ul>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎓</span> Orientaciones para el Profesorado
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2 text-sm">
        <li>Proyecto pensado para <strong>96 horas</strong> (segundo curso), integrador de casi todos los módulos del ciclo.</li>
        <li>Se recomienda montar un <strong>laboratorio virtual</strong> (VirtualBox/VMware): un Windows Server y un Ubuntu Server de prueba antes de tocar nada real.</li>
        <li>Valorar especialmente la <strong>trazabilidad</strong> (logs, Git) y la <strong>calidad del código</strong>, no solo que "funcione una vez".</li>
        <li>El alumnado debe entregar: repositorio, evidencias de pruebas, memoria y presentación al tribunal.</li>
    </ul>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🧑‍💻</span> Sugerencias para que el Alumnado Complete el Desarrollo
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2 text-sm">
        <li>Empieza por <strong>un script pequeño que ya sepas hacer</strong> (por ejemplo, comprobar espacio en disco) y ve añadiendo complejidad.</li>
        <li>Usa <strong>datos de prueba falsos</strong> en el laboratorio; nunca pruebes altas reales sin autorización.</li>
        <li>Commit tras cada avance: Git es tu "deshacer" profesional.</li>
        <li>Documenta <strong>mientras escribes</strong>, no al final: un README sin actualizar no vale.</li>
        <li>Pide retroalimentación al profesorado en cada hito intermedio.</li>
    </ul>
</div>
`;
