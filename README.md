# Prototype Using the Joy-As Framework

## Preface
- Protocol: a defined set of rules and regulations that determine how data is transmitted between interfaces.

## What Is This
Joy-As is a reactive jsx framework that runs apps in the client. Application state is represented and manipulated through distributed graph data storage (aka: Gun.js).
App navigation occurs by rendering sections of the DOM as the ``` location.hash ``` changes.
Joy-As applications can communicate with other JOY-As applications via peer Websocket connections.
Jquery & Gun available for use globally.
## Notes

### TODO: 
    - Reduce the code base by consolidating 
        - src/lib/vendors 
        - src/lib/chain ==> src/lib/joy-as
        - get index.html as empty as humanly possible
    - Css
        - apply tailwind rules to [src/styles/input.css]
        - tweak tailwind.config.cjs
    - Joy-As/ JS
        - Migrate from vite to esbuild.
        - JSDoc comments for intellisense
        - Base jsx components 
            - Meta/ Links
            - a 
            - button
            - form

        - Scripts
            - directory generator
            - build
            - server
                - dev/ hot reload
                - config
                - GUN relay
                - inject Joy-As during build
    - Video 
    - LLM incorporation
