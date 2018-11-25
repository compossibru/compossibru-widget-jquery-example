const $ = require('jquery');

exports.default = (containerId) => {
    $(document).ready(() => {
        const $app = $(`#${containerId}`);
        $app.html('<div>Loading...</div>');

        $.ajax({
            method: 'GET',
            url: 'https://api.github.com/orgs/github/public_members',
            dataType: 'json',
            success: function (data) {

                let html = '<ul>';
                $.each(data, function (index, item) {
                    html += `<li>${item.login}</li>`;
                });
                html += '</ul>';

                setTimeout(() => {
                    $app.html(html);
                }, 1000);
            }
        });
    });
};
