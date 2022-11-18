import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function() {
   var w = window;
   if (w.ChannelIO) {
     return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
   }
   var ch = function() {
     ch.c(arguments);
   };
   ch.q = [];
   ch.c = function(args) {
     ch.q.push(args);
   };
   w.ChannelIO = ch;
   function l() {
     if (w.ChannelIOInitialized) {
       return;
     }
     w.ChannelIOInitialized = true;
     var s = document.createElement('script');
     s.type = 'text/javascript';
     s.async = true;
     s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
     s.charset = 'UTF-8';
     var x = document.getElementsByTagName('script')[0];
     x.parentNode.insertBefore(s, x);
   }
   if (document.readyState === 'complete') {
     l();
   } else if (window.attachEvent) {
     window.attachEvent('onload', l);
   } else {
     window.addEventListener('DOMContentLoaded', l, false);
     window.addEventListener('load', l, false);
   }
 })();
 ChannelIO('boot', {
   "pluginKey": "b37cac95-4a25-4605-b144-07702697602b"
 });
`,
        }}
      />
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
