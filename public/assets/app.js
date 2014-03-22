(function() {
    "use strict";

    var updateMarkedPreview = function(text) {
        $.post('/notes', { edit: text }).done(function(data) {
            document.querySelector('#markedPreview').innerHTML = data.markedPreview;
        });
    };

    document.querySelector('#edit').addEventListener('keyup', function(e) {
        var text = e.originalTarget.value;
        updateMarkedPreview(text);
    });

    updateMarkedPreview(document.querySelector('#edit').value);

    $('textarea.textarea-transition').autosize({append: "\n"});
})();