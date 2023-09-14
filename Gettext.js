Object.defineProperty(window, '_', {value: (msgid) => {
    return (window.messages ?? {})[msgid] ?? msgid;
}, configurable: false, writable: false});
Object.freeze(window._);

Object.defineProperty(window, 'ngettext', {value: (singular, plural, value) => {
    // Extremely simplified, does not work for all locales
    let msgid = plural;
    if (parseInt(value) === 1) {
        msgid = singular;
    }

    return _(msgid);
}, configurable: false, writable: false});
Object.freeze(window.ngettext);

Object.defineProperty(window, 'sprintf', {value: (format, ...values) => {
    // Extremely simplified as well
    for (const value of values) {
        format = format.replace(/%s|%d/, value)
    }

    // Escaped percentage sign in regular sprintf
    format = format.replace('%%', '%');

    return format;
},configurable: false, writable: false});
Object.freeze(window.sprintf);