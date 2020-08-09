function buildAndRedirectUrl() {
    const url = window.location.href;

    const query = url.split('?');

    window.setTimeout(() => {
        window.location.href = "/study?" + query[1];
    }, 2000);
}

buildAndRedirectUrl();