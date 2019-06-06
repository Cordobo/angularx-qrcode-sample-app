# angularx-qrcode sample app
Angular8 demo app with a working implementation of angularx-qrcode.

angularx-qrcode is an Angular4/5/6/6.1/7/7.1/8 QRCode generator Component library for QR Codes (Quick Response) with AOT support.

angularx-qrcode Repository: https://github.com/Cordobo/angularx-qrcode

## Installation

1. Install angular globally:

    ```npm install -g @angular/cli```
2. Clone the **"angularx-qrcode-sample-app"** repository. The "master" repository contains the Angular 8 demo app,
use the branch "angular5", "angular6", "angular6_1", "angular7" or "angular7_1" for a demo app with support for your respective version
3. Run `npm install` to install all dev dependencies.

## Serve

1. Run `ng serve --open`
2. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

0. Using Angular 8? See known issues for a workaround
1. Run `ng build` to build the project.
2. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
3. Run `npm run dev` to startup a server with your build on `http://localhost:3000/`

## Known issues in Angular 8

Set the target in your `tsconfig.json` from `es2015` to `es5`:

```"target": "es5"```

## License
(MIT License)

Copyright (c) 2019, [Andreas Jacob (Cordobo.com)](http://cordobo.com/)