# Template Parcel

> A template for static single page, based on parcel.js, typescript and sass.

## Usage

### Installation

```
$ clone git@github.com:HuijiFE/template-parcel-ts.git /path/to/my/project
$ cd /path/to/my/project
$ npm run frame
```

### Development

```
$ npm start
```

Configure the port: edit the package.json and replace the port number in the script "start".

### Production

* Build the index.html, it's including the index.ts and index.scss files

```
$ npm run build
```

* Only build the script file index.ts

```
$ npm run build:ts
```

* Only build the style sheet file index.scss

```
$ npm run build:scss
```

* Build script and style sheet together

```
& npm run build:lib
```

The files will be output to the directory "dist" in the project.
