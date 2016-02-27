window.addEventListener('message', function(event) {
    switch (event.data) {
        case 'is-shower-defined': return window.parent.postMessage(typeof window.shower !== 'undefined', '*');
        case 'shower-next': return shower._turnNextSlide();
        case 'shower-prev': return shower._turnPreviousSlide();
        case 'shower-zoomIn': return shower.enterSlideMode();
        case 'shower-zoomOut': return shower.enterListMode();
        default: return window.parent.postMessage('unrecognized command', '*');
    }
});