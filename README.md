﻿#  Space Component Modal in Typescript

# Dialog modal message
![made-with-node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![made-with-react](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=FFFFFF) ![made-with-sass](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) 
![GitHub repo size](https://img.shields.io/github/repo-size/Spacelnvader/space_component_modal) 


A customizable react modal with your message in typescript.   
  

## Installation

First you must install React and Typescript, then:

```npm install space_component_modal```  
or  
```yarn add space_component_modal```

## Usage
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Dialog from 'space_component_modal';

const SomeComponent = () => {
  return (
    <div>
      <Dialog text="Your Message" showDialog={true} />
    </div>
  )
};
```

## Props
|Label|Type|Required|Default|
|:----|:----:|:------:|:----:|
|text|string|yes|N/A|
|showDialog|boolean|no|false|
|duration|number|no|500|
|className|string|no|N/A|
|onClose|function|no|N/A|

## License  
ISC
