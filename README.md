# Gettext
Very basic gettext functions for JS that only does basic string matching.

## Usage
```
// Include the library here somehow

window.messages = {'Foo':'Bar','%d foo':'%d item','%d foos','%d items'};
console.log(_('Foo')); // Outputs 'Bar'
console.log(sprintf(ngettext('%d foo, '%d foos', 1), 1); // Outputs '1 item'
console.log(sprintf(ngettext('%d foo, '%d foos', 2), 2); // Outputs '2 items'
```

No options, no nothing. Change locale by changing the `messages`-variable