
# P14 Plugin React Dialog

Création d'une librairie React (composant dialog)


## Installation

Install dialog_popup with npm

```bash
  npm i dialog_popup
```
    
## Usage/Examples

### Importer le plugin :
```javascript
import Modal from 'dialog_popup'

```

### Creation du state dans le composant :
```
const [show, setShow] = useState(false);
```

### Rendu : 
```
<Modal title="My Modal" onValidate={() => setShow(false)} show={show}>
 This is the modal
</Modal>
```

### Example d'usage :
```
import React, { useState } from "react";
import Modal from "dialog_popup";

export default function App() {
  const [show, setShow] = useState(false);


  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal title="My Modal" onValidate={() => setShow(false)} onCancel={cancelAction} show={show}>
        This is the modal
      </Modal>
    </div>
  );
}
```
## Authors

- [@RemiPHILIPPOT](https://www.github.com/RemiPHILIPPOT)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://linktr.ee/rphilippot)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/rphilippot)


