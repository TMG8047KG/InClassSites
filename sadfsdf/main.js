document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnClick').addEventListener('click', function () {
        alert('Аз се появявам при единично кликване.');
    });

    document.getElementById('btnDblClick').addEventListener('dblclick', function () {
        alert('Аз се появявам при двукратно кликване.');
    });

    document.getElementById('btnMouseDown').addEventListener('mousedown', function () {
        alert('Аз се появявам при натискане на бутона.');
    });

    document.getElementById('btnMouseMove').addEventListener('mousemove', function () {
        alert('Аз се появявам при минаване на мишката през мен.');
    });

    document.getElementById('btnMouseOut').addEventListener('mouseout', function () {
        alert('Аз се появявам след минаване на мишката през мен.');
    });

    document.getElementById('btnMouseOver').addEventListener('mouseover', function () {
        alert('Аз се появявам при първото преминаване на мишката през мен.');
    });

    document.getElementById('btnMouseUp').addEventListener('mouseup', function () {
        alert('Аз се появявам след натискане.');
    });

    document.getElementById('btnWheel').addEventListener('wheel', function () {
        alert('Аз се появявам при използване на колелото на мишката.');
    });

    const multipleEventsButton = document.getElementById('btnMultiple');
    multipleEventsButton.addEventListener('click', function () {
        console.log('onclick');
    });
    multipleEventsButton.addEventListener('mousedown', function () {
        console.log('onmousedown');
    });
    multipleEventsButton.addEventListener('mouseup', function () {
        console.log('onmouseup');
    });

    document.getElementById('btnTwoAlerts').addEventListener('click', function () {
        alert('Първо съобщение!');
        alert('Второ съобщение!');
    });

    let counter = 0;
    document.getElementById('btnCounter').addEventListener('click', function () {
        counter++;
        alert('Броячът е: ' + counter);
    });
});
