// Funciones de modal genérica
function openModal2(modalId, event) {
    if (event) event.preventDefault();
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        history.pushState({ modalOpen: true }, '');
        setTimeout(function() { lucide.createIcons(); }, 100);
    }
}

// Aliases para compatibilidad con onclick existentes
function openModal(event) { openModal2('nominaModal', event); }
function openVacacionesModal(event) { openModal2('vacacionesModal', event); }
function openCajaModal(event) { openModal2('cajaModal', event); }
function openDirectorioModal(event) { openModal2('directorioModal', event); }
function openPrestamosModal(event) { openModal2('prestamosModal', event); }

function closeModal(modalId) {
    if (modalId) {
        var modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('active');
    } else {
        document.querySelectorAll('.modal.active').forEach(function(modal) {
            modal.classList.remove('active');
        });
    }
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Manejar boton "back" del navegador (Android)
window.addEventListener('popstate', function(event) {
    var openModalEl = document.querySelector('.modal.active');
    if (openModalEl) {
        closeModal();
    }
});

// Calendario Carousel
var calendarioMeses = [
    { archivo: 'ene_26.jpeg', nombre: 'Enero 2026' },
    { archivo: 'feb_26.jpeg', nombre: 'Febrero 2026' },
    { archivo: 'mar_26.jpeg', nombre: 'Marzo 2026' },
    { archivo: 'abr_26.jpeg', nombre: 'Abril 2026' },
    { archivo: 'may_26.jpeg', nombre: 'Mayo 2026' },
    { archivo: 'jun_26.jpeg', nombre: 'Junio 2026' },
    { archivo: 'jul_26.jpeg', nombre: 'Julio 2026' },
    { archivo: 'ago_26.jpeg', nombre: 'Agosto 2026' },
    { archivo: 'sep_26.jpeg', nombre: 'Septiembre 2026' },
    { archivo: 'oct_26.jpeg', nombre: 'Octubre 2026' },
    { archivo: 'nov_26.jpeg', nombre: 'Noviembre 2026' },
    { archivo: 'dic_26.jpeg', nombre: 'Diciembre 2026' }
];
var mesActual = 0;

function actualizarCalendario() {
    var img = document.getElementById('calendarioImg');
    var titulo = document.getElementById('calendarioMesTitle');
    var contador = document.getElementById('calendarioContador');
    var btns = document.querySelectorAll('.calendario-mes-btn');

    img.src = 'img/recursos/calendario_26/' + calendarioMeses[mesActual].archivo;
    img.alt = 'Calendario ' + calendarioMeses[mesActual].nombre;
    titulo.textContent = calendarioMeses[mesActual].nombre;
    contador.textContent = (mesActual + 1) + ' / 12';

    btns.forEach(function(btn, i) {
        btn.classList.toggle('active', i === mesActual);
    });
}

function cambiarMes(dir) {
    mesActual = (mesActual + dir + 12) % 12;
    actualizarCalendario();
}

function irAMes(index) {
    mesActual = index;
    actualizarCalendario();
}

// Swipe en móvil para el calendario
(function() {
    var container = document.getElementById('calendarioImgContainer');
    if (!container) return;
    var startX = 0;
    var startY = 0;

    container.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener('touchend', function(e) {
        var diffX = e.changedTouches[0].clientX - startX;
        var diffY = e.changedTouches[0].clientY - startY;
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX < 0) cambiarMes(1);
            else cambiarMes(-1);
        }
    }, { passive: true });
})();

// Flechas del teclado cuando el modal calendario está abierto
document.addEventListener('keydown', function(e) {
    var modal = document.getElementById('nominaModal');
    if (modal && modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') cambiarMes(-1);
        if (e.key === 'ArrowRight') cambiarMes(1);
    }
});

// Inicializar iconos de Lucide
lucide.createIcons();
