export async function AuthorizedLayout(props: { child: string }): Promise<string> {
  return (
    <>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HTML5 Boilerplate</title>
        <link
          rel="stylesheet"
          href="http://localhost:3000/styles.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="http://localhost:3000/tailwind-config.js"></script>
      </head>
    
      <body>
        <div id="root">
          {props.child as 'safe'}
        </div>
        <script src="https://unpkg.com/htmx.org@2.0.0" integrity="sha384-wS5l5IKJBvK6sPTKa2WZ1js3d947pvWXbPJ1OmWfEuxLgeHcEbjUUA5i9V5ZkpCw" crossorigin="anonymous"></script>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      </body>
    </html>
    </>
  );
}

