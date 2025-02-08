# bem-modules

BEM classname transformer for CSS modules.

## Quick Start

To get started, you need to install the package:

```bash
npm install bem-modules --save-dev
```

And use it in your components:

```scss
/* components/Card/Card.module.sass */

.card {
    color: white;
    background-color: blue;

    &--variant {
        &-red {
            background-color: red;
        }
    }

    &__title {
        color: green;
        font-size: 1.5rem;

        &--small {
            font-size: 1rem;
        }
    }
}
```

```tsx
// components/Card/Card.tsx

import { transformer } from "bem-modules";

import styles from "./Card.module.sass";

const bem = transformer(styles);

export const Card = () => {
    return (
        <div className={bem({ variant: "red" })}>
            <div className={bem("title")}>Card Title</div>
            <div className={bem("title", { small: true })}>Small Card Title</div>
        </div>
    );
};
```
