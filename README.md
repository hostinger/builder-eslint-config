<p align="center"><a href="https://zyro.com" rel="nofollow"><img src="https://raw.githubusercontent.com/zyro-inc/public-assets/master/Logo/JPG/Zyro%20Logo%20White.jpg" alt="Zyro logo" style="max-width:100%;" width="200"></a></p>
<h1 align="center"><b>@hostinger/builder-eslint-config</b></h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/hostinger/builder-eslint-config#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/hostinger/builder-eslint-config/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> ESLint config, which follows the Zyro style guide

### 🏠 [Homepage](https://github.com/hostinger/builder-eslint-config#readme)

## Install

**NPM**

```sh
npm i -D @hostinger/eslint-config-builder
```

**YARN**

```sh
yarn add -D @hostinger/eslint-config-builder
```

If `vue` config is going to be used, make sure you have `eslint-plugin-vue` installed

```sh
npm i -D eslint-plugin-vue
```

## Usage

- **For JS projects**

```js
	extends: ['@hostinger/builder'],
```

- **For Vue 3 projects**

```js
	extends: ['@hostinger/builder/vue'],
```

## Rules

- [Common rules](https://github.com/hostinger/builder-eslint-config/blob/master/eslint-config-zyro.js)
- [Vue rules](https://github.com/hostinger/builder-eslint-config/blob/master/vue.js)

## Author

👤 **Zyro team (https://zyro.com/)**

- Website: https://zyro.com
- Github: [@hostinger](https://github.com/hostinger)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/hostinger/builder-eslint-config/issues).

### Development

In order to test out changes to the eslint config, you should link it to your project

```sh
# Inside builder-eslint-config directory
npm/yarn link

# Inside your project directory
npm/yarn link @hostinger/builder-eslint-config
```

Restart ESLint server in your editor to initialize ESLint with the new config

You can then make changes to `builder-eslint-config` and they should automatically reflect in your project

After you're done testing, you can unlink the package

```sh
# Inside your project directory
npm/yarn unlink @hostinger/builder-eslint-config

# Then you need to restore the package from the repository
npm install / yarn --check-files
```

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Zyro team (https://zyro.com/)](https://github.com/hostinger).<br />
This project is [ISC](https://en.wikipedia.org/wiki/ISC_license) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

```

```
