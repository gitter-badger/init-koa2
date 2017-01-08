const PrettyError = require('pretty-error').start();

PrettyError.appendStyle({
   'pretty-error > header > title > kind': {
      padding: '0 2',
      marginRight: '1'
   },
   'pretty-error > header > colon': {
      color: 'red'
   },
   'pretty-error > header > message': {
      color: 'bright-white',
      background: 'cyan',
      padding: '0 3'
   },

   'pretty-error > trace > item': {
      background: 'black',
      marginLeft: 2,
      marginBottom: 0,
      bullet: '"<grey>o</grey>"'
   },

   'pretty-error > trace > item > header > pointer > file': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > pointer > colon': {
      color: 'cyan',
      padding: '0 1'
   },

   'pretty-error > trace > item > header > pointer > line': {
      color: 'bright-red'
   },

   'pretty-error > trace > item > header > what': {
      color: 'bright-white',
      paddingRight: 4,
      paddingBottom: 4
   }
});
