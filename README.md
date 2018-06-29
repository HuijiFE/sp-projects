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

Configure the port and public url: edit the package.json and replace the port number in the script "start".

### Production

- Build the index.html, it's including the script and style files

```bash
yarn build
```

- Only build the script file index.ts

```bash
yarn build:script
```

- Only build the stylesheet file index.scss

```bash
yarn build:style
```

- Build script and style sheet together

```bash
yarn build:assets
```

The files will be output to the directory "dist" in the project.
