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

// Inicializar iconos de Lucide
lucide.createIcons();
