function openPageInNewTab(url, type) {
    analytics.logEvent('sns-page-open', {
        type
    });
    window.open(url, '_blank');
}