# Template Parcel

> A template for static single page, based on parcel.js, typescript and sass.

## Usage

### Installation

```bash
clone git@github.com:HuijiFE/template-parcel-ts.git my-project
cd my-project
yarn
```

> NOTE: It is recommend that `yarn` be used for installing dependencies.

### Development

```bash
yarn serve
```

Configure the port: edit the package.json and replace the port number in the script "start".

### Production

* Build the index.html, it's including the index.ts and index.scss files

```bash
yarn build
```

* Only build the script file index.ts

```bash
yarn build:ts
```

* Only build the stylesheet file index.scss

```bash
yarn build:scss
```

* Build script and style sheet together

```bash
yarn build:lib
```

The files will be output to the directory "dist" in the project.
