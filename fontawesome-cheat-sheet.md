#font awesome icon management

instalacion de iconos en react:
```Node
npm i --save @fortawesome/fontawesome-svg-core
``` Free icons styles
npm i --save @fortawesome/pro-solid-svg-icons
npm i --save @fortawesome/pro-regular-svg-icons
```` for components
npm i --save @fortawesome/react-fontawesome@latest


````
Cómo utilizar los iconos en react:
https://fontawesome.com/v5/docs/web/use-with/react

```React
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faEnvelope} from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon={faStar}/>

```