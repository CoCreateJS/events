# [2.0.0](https://github.com/CoCreateJS/events/compare/v1.32.0...v2.0.0) (2026-11-02)


### chore

* record package identity migration as breaking ([89862b1](https://github.com/CoCreateJS/events/commit/89862b12e9aed7c293874dbf6511e0fe013a8177))


### BREAKING CHANGES

* Consumers must install @cocreate/events and use the renamed CoCreateJS repository identity; the previous package and repository identities are no longer supported.

# [1.32.0](https://github.com/CoCreateJS/events/compare/v1.31.2...v1.32.0) (2026-11-02)


### Bug Fixes

* add Deno specific entries to .gitignore ([ffae6e4](https://github.com/CoCreateJS/events/commit/ffae6e40ad0b00d8f44f0814f724117d09b47285))
* bump [@cocreate](https://github.com/cocreate) dependencies ([52aba92](https://github.com/CoCreateJS/events/commit/52aba92cbd2b158c2eff8dec19e0ab33c8d44796))
* bump [@cocreate](https://github.com/cocreate) package versions ([47454fd](https://github.com/CoCreateJS/events/commit/47454fd215e910ad7825358d9a5091b86c6de13f))
* bump versions ([df5672c](https://github.com/CoCreateJS/events/commit/df5672c8d4bb7488274e89fcfe3eef5410adb8a6))
* bump versions ([399a2fb](https://github.com/CoCreateJS/events/commit/399a2fb4768728486c4050158b9241fce469b929))
* enhance editor insertion handling and boundary resolution in CoCreateEvents ([7247d4a](https://github.com/CoCreateJS/events/commit/7247d4a37fe695da80691824869a10100736d8b9))
* improve event handling and selector updates in CoCreateEvents ([0b5c19e](https://github.com/CoCreateJS/events/commit/0b5c19e587357d1ad7534fedffa1dbd51fb2337b))
* remove trailing slash from node_modules entry in .gitignore ([d784a84](https://github.com/CoCreateJS/events/commit/d784a84d190e4e81de1566ad5bcbd27931f36f2c))
* resolve editor property paths and insertions ([82ecf22](https://github.com/CoCreateJS/events/commit/82ecf221c2ff53f968b98d1e1b526800dfe82676))
* resolve event property names without case sensitivity ([18caa25](https://github.com/CoCreateJS/events/commit/18caa255982882f62665007f5c176ef5314283d7))
* update git url ([e60d29b](https://github.com/CoCreateJS/events/commit/e60d29bdfb398b9c91621c6b1f4faa2241d046fc))
* update GitHub Actions to use latest versions and sync package.json description ([a2d84bf](https://github.com/CoCreateJS/events/commit/a2d84bf1962539d86e842f45acd9a84d316730c8))
* update README to reflect @cocreate/events module details ([a5ca752](https://github.com/CoCreateJS/events/commit/a5ca752cdaa736890dce2e338fe5996d44efdee2))
* update README to reflect @cocreate/events module details ([48a4262](https://github.com/CoCreateJS/events/commit/48a4262d78b5a80e00f46816d827616ecd3e2aa5))


### Features

* attribute name contains $ the name will be used as a property of the element ([9b57a6a](https://github.com/CoCreateJS/events/commit/9b57a6abf0e829be8852e6aa649236902ced4f81))
* expose resize width to attribute expressions ([cd6aca2](https://github.com/CoCreateJS/events/commit/cd6aca2364798fae5c9f15dcf44589224a9450c1))
* replace uuid import and usage with utils ([b8346f1](https://github.com/CoCreateJS/events/commit/b8346f1e1e3f5b5ca0ba4546dc3d85be8d7a54a4))
* support AST event attribute maps ([4a78c6a](https://github.com/CoCreateJS/events/commit/4a78c6a0da556bdf771a1645884613c7868d19a3))
* support declarative element method bindings ([4b09c26](https://github.com/CoCreateJS/events/commit/4b09c2652ff215ecde0c525c9edd97ce8f65412e))
* support error event prefixes ([a245a2b](https://github.com/CoCreateJS/events/commit/a245a2b52cea9d6b4c2f03e2b78e05ebbed2c8b0))
* support ordered assignments in event prefix objects ([85dd85c](https://github.com/CoCreateJS/events/commit/85dd85ccf829abe532f851eb285be661303f7eb4))

## [1.31.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.31.1...v1.31.2) (2026-07-19)


### Bug Fixes

* set default branch to main ([502cecb](https://github.com/CoCreateJS/CoCreate-events/commit/502cecb18cb93f5302de496db76ba596c11f39e7))

## [1.31.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.31.0...v1.31.1) (2026-07-17)


### Bug Fixes

* bump dependencies ([877691a](https://github.com/CoCreateJS/CoCreate-events/commit/877691ac04ba34c6838944cc238567af3101419d))

# [1.31.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.30.2...v1.31.0) (2026-07-17)


### Bug Fixes

* update import path for getAttribute to include file extension ([9dd6bf0](https://github.com/CoCreateJS/CoCreate-events/commit/9dd6bf094c712582c746b95c9376b410a3d8bf4c))


### Features

* update automated workflow and release configuration for improved semantic release handling ([413dba3](https://github.com/CoCreateJS/CoCreate-events/commit/413dba3a5e141937fe53dc271bdf377445809bd3))

## [1.30.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.30.1...v1.30.2) (2026-07-11)


### Bug Fixes

* bump package versions ([d91a27d](https://github.com/CoCreateJS/CoCreate-events/commit/d91a27dd75f1b027ceed6b914f57415804ee8568))
* removed post install and add add packages to apprved list ([54d1833](https://github.com/CoCreateJS/CoCreate-events/commit/54d1833e70b460993647f19b1517d54a14600a4a))
* semantic version handling ([aee37b5](https://github.com/CoCreateJS/CoCreate-events/commit/aee37b53737328890a570f251d4dd4b77a99dbb6))

## [1.30.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.30.0...v1.30.1) (2026-03-05)


### Bug Fixes

* operator $value should trigger getValue() instead of being treated as a literal string ([7198b2d](https://github.com/CoCreateJS/CoCreate-events/commit/7198b2d3aa65899a22889cb1d6a3638baca442c5))

# [1.30.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.29.1...v1.30.0) (2026-02-15)


### Features

* streamline event initialization and update handling with dash notation ([aaf434a](https://github.com/CoCreateJS/CoCreate-events/commit/aaf434a56eab97dc9581833ba5e277946e2a79c7))

## [1.29.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.29.0...v1.29.1) (2026-02-04)


### Bug Fixes

* formating ([1f8b5fc](https://github.com/CoCreateJS/CoCreate-events/commit/1f8b5fc191b407b70720124ad504c7b8416ab08e))

# [1.29.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.28.0...v1.29.0) (2026-01-17)


### Features

* setInterval attribute ([f64f9bc](https://github.com/CoCreateJS/CoCreate-events/commit/f64f9bcc93248c0451b8dcc468d1f0162f3101ea))

# [1.28.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.27.4...v1.28.0) (2026-01-17)


### Bug Fixes

* update worklow ([e8f4c2d](https://github.com/CoCreateJS/CoCreate-events/commit/e8f4c2dc8c3a799adf0be238bab5a4ed9ac08915))


### Features

* once attribute for intersectionObserver ([e58bfee](https://github.com/CoCreateJS/CoCreate-events/commit/e58bfeec8122a176179ec1b9a03557dbe80765d8))

## [1.27.4](https://github.com/CoCreateJS/CoCreate-events/compare/v1.27.3...v1.27.4) (2025-10-11)


### Bug Fixes

* add support for blur event initialization in CoCreateEvents ([8c2aec3](https://github.com/CoCreateJS/CoCreate-events/commit/8c2aec3cf145fdce8abf65463332c09c6c3c57c5))
* enhance conditional processing with else-if support and improve number parsing ([053f322](https://github.com/CoCreateJS/CoCreate-events/commit/053f3220fa8f98d20a02e6f3faa32340869b8e49))

## [1.27.3](https://github.com/CoCreateJS/CoCreate-events/compare/v1.27.2...v1.27.3) (2025-09-07)


### Bug Fixes

* improve event handling and element manipulation in CoCreateEvents ([ae6b58a](https://github.com/CoCreateJS/CoCreate-events/commit/ae6b58a7c0dc313b426a2614b6cb141735dffbbb))

## [1.27.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.27.1...v1.27.2) (2025-05-01)


### Bug Fixes

* update [@cocreate](https://github.com/cocreate) dependencies ([7d405b5](https://github.com/CoCreateJS/CoCreate-events/commit/7d405b51a40165f9b1a30fdf6cc6279aaba2289b))

## [1.27.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.27.0...v1.27.1) (2025-04-30)


### Bug Fixes

* added css-loader ([bc0861e](https://github.com/CoCreateJS/CoCreate-events/commit/bc0861e3c58e72dee5c02353142528243e40bf4c))
* build error ([f2f1774](https://github.com/CoCreateJS/CoCreate-events/commit/f2f1774b4808abe3953e4279cef509c1daab7ee7))
* update query attributes ([5acc01b](https://github.com/CoCreateJS/CoCreate-events/commit/5acc01b00729265f24be91a5255e51a31f2496d3))
* updated cocreate modules versions ([a3c9613](https://github.com/CoCreateJS/CoCreate-events/commit/a3c9613380c4eae9bcca2b6290d09627b4bd468e))
* webpack.config and devdependencies ([0e101a7](https://github.com/CoCreateJS/CoCreate-events/commit/0e101a79632f4fc09c73b6b8382f56fb6c6a8647))

# [1.27.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.26.0...v1.27.0) (2025-04-11)


### Bug Fixes

* console.log() ([2174c1e](https://github.com/CoCreateJS/CoCreate-events/commit/2174c1e0a9fa0b777e073de30aed4f29ec59f8f6))
* formating ([58b8550](https://github.com/CoCreateJS/CoCreate-events/commit/58b8550c96c30153a94e24ce93b39914eed2fba3))
* removed console.log() ([f44cb8f](https://github.com/CoCreateJS/CoCreate-events/commit/f44cb8fdfec3b3b1787e830cd1b3bab3a1ef3fa5))
* renamed prefix-delay to prefix-setTimout ([84e511a](https://github.com/CoCreateJS/CoCreate-events/commit/84e511af8bcb521e5e8e7bc481a6f202fca04930))
* Selctor === "" returning null ([c49bc35](https://github.com/CoCreateJS/CoCreate-events/commit/c49bc35cd8a8ff9232229ee64d71bc4e32d3d6fc))
* selectors ([ccb2dee](https://github.com/CoCreateJS/CoCreate-events/commit/ccb2dee2a682bcdf601047f0783c5c44ebcfe5ed))
* update observer obseve param to type and and attributeName to attributeFilter ([44372d4](https://github.com/CoCreateJS/CoCreate-events/commit/44372d4ceba70360507cd0c94df43f4ee877be99))


### Features

* support "*-preventDefault", "*-stopPropagation", "*-stopImmediatePropagation" ([5b10663](https://github.com/CoCreateJS/CoCreate-events/commit/5b106633f425001ca6ec7d65dc0bd00ad6368b64))

# [1.26.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.25.0...v1.26.0) (2025-01-18)


### Bug Fixes

* removed ovserver from local storage ([b07e5f7](https://github.com/CoCreateJS/CoCreate-events/commit/b07e5f7ef2d6f8a39dc77a56a63f078d0576f85a))


### Features

* added focus ([0b81f3e](https://github.com/CoCreateJS/CoCreate-events/commit/0b81f3edff2c254281cb5a1028d2396b3b86e9e8))
* intersection handling ([dea8872](https://github.com/CoCreateJS/CoCreate-events/commit/dea887246eb0489022450fd135418dc42767fd59))

# [1.25.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.24.0...v1.25.0) (2024-12-14)


### Bug Fixes

* add prefix-action to selector ([5a74600](https://github.com/CoCreateJS/CoCreate-events/commit/5a74600927d519d2c03220eeec5eee649885283b))
* domEditor handling ([466d565](https://github.com/CoCreateJS/CoCreate-events/commit/466d565e9c2dde109326b37fb34c2e50219c191b))
* formating ([ed056bd](https://github.com/CoCreateJS/CoCreate-events/commit/ed056bd45c14d56612ceee539456a9ad1cd8da7c))
* prevent loop caused by actions firing prefix with no query elements ([d696c35](https://github.com/CoCreateJS/CoCreate-events/commit/d696c35407779e9be5c706cc97a8d83eaa3a75dd))


### Features

* <prefix>-once attribute to fire event once, if el.isConnected = false return ([17d5a14](https://github.com/CoCreateJS/CoCreate-events/commit/17d5a141a0ec2fcc63dccf9397e5860907949631))
* Add `<eventname>-delay` to delay event execution and validate DOM presence ([0eb5fc9](https://github.com/CoCreateJS/CoCreate-events/commit/0eb5fc9d2127dad62530821216b9696854aac05b))

# [1.24.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.23.0...v1.24.0) (2024-11-04)


### Bug Fixes

* check for value attibutes has empty string indicating that the a value attribute exists and that the value will not be retrieved using getValue() ([c79a0b3](https://github.com/CoCreateJS/CoCreate-events/commit/c79a0b338378b46613e9ba3b5b98c71e040ecbc7))
* if events ([afaf496](https://github.com/CoCreateJS/CoCreate-events/commit/afaf496cf01eb6a013e050952a08a530d5e63e67))
* observer taget has been renamed to selector ([fae2134](https://github.com/CoCreateJS/CoCreate-events/commit/fae2134873fea89480a7c28920d4277691d7109a))
* pretier.config.js and file formating ([f31afac](https://github.com/CoCreateJS/CoCreate-events/commit/f31afac19f6e4875866f6e090e2aa861a453639c))
* selected group handling ([975008a](https://github.com/CoCreateJS/CoCreate-events/commit/975008a568f8983772a76ae843298fb5cfcc807c))
* temporarily commented checking for parent events ([09d0394](https://github.com/CoCreateJS/CoCreate-events/commit/09d0394b946306862153ca5164b08e1440cbbb63))


### Features

* add prettier.config.js and format files ([558b874](https://github.com/CoCreateJS/CoCreate-events/commit/558b8748cb2ba34d479680acb1c25f359283d817))
* add prettier.config.js and format files ([9920bd7](https://github.com/CoCreateJS/CoCreate-events/commit/9920bd7ebe78ddeb41524377307b08b6271f45b8))
* handle action and replace ([25fc93c](https://github.com/CoCreateJS/CoCreate-events/commit/25fc93cc8846a4571903e556ec16acd9acf74be1))
* improved gropu support ([a4b10f8](https://github.com/CoCreateJS/CoCreate-events/commit/a4b10f82a4fbefb42d08346a72bd4731d3c8b71c))

# [1.23.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.22.1...v1.23.0) (2024-09-21)


### Bug Fixes

* observer-target attribute ([92593d3](https://github.com/CoCreateJS/CoCreate-events/commit/92593d32c4b53fe97dab511e44dd1c9f345d708e))


### Features

* *-insert-adjacent attribute to apply value using insertAdjacentHTML() ([3d2151d](https://github.com/CoCreateJS/CoCreate-events/commit/3d2151d91d56ad53df006343e4f18b3aa1a99b1d))

## [1.22.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.22.0...v1.22.1) (2024-08-24)


### Bug Fixes

* parse flag ([53ce700](https://github.com/CoCreateJS/CoCreate-events/commit/53ce700cca7d90919b933d102cda5f73fe3261c5))

# [1.22.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.21.0...v1.22.0) (2024-06-19)


### Features

* $template condition checks for {{}} ([bd7219a](https://github.com/CoCreateJS/CoCreate-events/commit/bd7219a03b5d1b04772596872af15351bfd5f999))

# [1.21.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.20.1...v1.21.0) (2024-06-12)


### Bug Fixes

* bump cocreate dependencies ([c4ae1f6](https://github.com/CoCreateJS/CoCreate-events/commit/c4ae1f6fd54fc9de71ffd039014c86d2b490d985))
* svg icon class ([26265ec](https://github.com/CoCreateJS/CoCreate-events/commit/26265ece8a975bb0901f3243baddf9d0e4bb35ff))


### Features

* send event details to setValue to process mouseout logic ([9b5b499](https://github.com/CoCreateJS/CoCreate-events/commit/9b5b4998c3a24f68df41c6fabd69fa2fec80b8fc))

## [1.20.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.20.0...v1.20.1) (2024-05-19)


### Bug Fixes

* getValue from element else fallback to value ([c8e06af](https://github.com/CoCreateJS/CoCreate-events/commit/c8e06afb6d88ab382cead8065dea88cdec3300ca))

# [1.20.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.19.5...v1.20.0) (2024-05-08)


### Bug Fixes

* onEvent must liten at the document level, if no value allow comaparion of if esle conditions ([57d1f91](https://github.com/CoCreateJS/CoCreate-events/commit/57d1f91123d598b720030503412dd23fb6e38e51))


### Features

* attribute *-on to apply an event name. The operation will pause and await the event to resolve before continuing ([0d8db13](https://github.com/CoCreateJS/CoCreate-events/commit/0d8db13ed1ee63d9b2e67d8ebdd50e60408303d7))
* support condition tur or false ([6a9f6fc](https://github.com/CoCreateJS/CoCreate-events/commit/6a9f6fcffe65028f4e6bb66fc1afd9f160297743))

## [1.19.5](https://github.com/CoCreateJS/CoCreate-events/compare/v1.19.4...v1.19.5) (2024-04-29)


### Bug Fixes

* bump cocreate dependencies ([ab88e6e](https://github.com/CoCreateJS/CoCreate-events/commit/ab88e6e5b055e0d33673570846653ce4beb985a5))

## [1.19.4](https://github.com/CoCreateJS/CoCreate-events/compare/v1.19.3...v1.19.4) (2024-03-18)


### Bug Fixes

* ifValue defaults to value or <prefix>-if-value ([74a35c5](https://github.com/CoCreateJS/CoCreate-events/commit/74a35c5b17644caa52c40ce2ca931cbafe161a28))

## [1.19.3](https://github.com/CoCreateJS/CoCreate-events/compare/v1.19.2...v1.19.3) (2024-02-20)


### Bug Fixes

* handle values that are not string ([7b1374b](https://github.com/CoCreateJS/CoCreate-events/commit/7b1374b984673f541b99d7deb29af990b88e962c))

## [1.19.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.19.1...v1.19.2) (2024-02-18)


### Bug Fixes

* condition "false" ([9bbd374](https://github.com/CoCreateJS/CoCreate-events/commit/9bbd374254ec8a421493618a5a9ad4e45e9b2830))

## [1.19.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.19.0...v1.19.1) (2024-02-05)


### Bug Fixes

* Removed https://cdn.CoCreateJS.com/latest/CoCreate.min.css ([f3a773f](https://github.com/CoCreateJS/CoCreate-events/commit/f3a773fe9173b1bf19225f082fcc373e1e6b403a))

# [1.19.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.18.0...v1.19.0) (2024-01-30)


### Bug Fixes

* prefix-if-value to containg resize observer value ([fc561e7](https://github.com/CoCreateJS/CoCreate-events/commit/fc561e73cbcbbb28d0dc8126ce124742f48e9a4b))


### Features

* handle resize observer event and if and else attributes conditions ([233e370](https://github.com/CoCreateJS/CoCreate-events/commit/233e3700741f0f4792559b2ff6ecd6719a5321c0))

# [1.18.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.17.0...v1.18.0) (2024-01-17)


### Features

* handle localstorage-set attribute ([663ce65](https://github.com/CoCreateJS/CoCreate-events/commit/663ce65227b3223a35576fd8618652ab21f344ca))

# [1.17.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.16.0...v1.17.0) (2023-11-25)


### Bug Fixes

* update licensing details ([f09acf6](https://github.com/CoCreateJS/CoCreate-events/commit/f09acf61c247be8a9ac39e46804847be2077c488))


### Features

* upgrade dependencies for latest features and fixes ([8ce26ba](https://github.com/CoCreateJS/CoCreate-events/commit/8ce26ba5ce86bccf0848a75cc8e61a03c8f2f2be))

# [1.16.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.15.0...v1.16.0) (2023-11-25)


### Bug Fixes

* update nav, edit button and css path ([c337796](https://github.com/CoCreateJS/CoCreate-events/commit/c3377964291ce3f8550aee83be005f65acf1a254))


### Features

* upgrade dependencies for latest features and fixes ([e947635](https://github.com/CoCreateJS/CoCreate-events/commit/e947635700005fa424ab4bd337338f1070514c00))

# [1.15.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.14.2...v1.15.0) (2023-11-19)


### Bug Fixes

* if localstorage return if no key or value ([c6b2fc1](https://github.com/CoCreateJS/CoCreate-events/commit/c6b2fc166e6214dd9a3cb3a61cb309b2fd9cf34f))


### Features

* update dependecies for th latest features and bug fixes ([2e03eed](https://github.com/CoCreateJS/CoCreate-events/commit/2e03eed38fe82d0b7ae98da30a2894a1aa12be62))

## [1.14.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.14.1...v1.14.2) (2023-11-12)


### Bug Fixes

* bump dependencies for latest features ([7681b6f](https://github.com/CoCreateJS/CoCreate-events/commit/7681b6f128c06a06a8162039e2da887f978f42cd))

## [1.14.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.14.0...v1.14.1) (2023-11-09)


### Bug Fixes

* meta name typo ([5d896fb](https://github.com/CoCreateJS/CoCreate-events/commit/5d896fb644f5f005c4a7a91f15caab63ee3aed9a))
* removed unused code ([9a302bc](https://github.com/CoCreateJS/CoCreate-events/commit/9a302bcc92ee35117029772c9fe1d638d75ea881))
* update host ([bd0d438](https://github.com/CoCreateJS/CoCreate-events/commit/bd0d4381d5ab2d5c7069d9489c9d400830ec81e5))

# [1.14.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.13.8...v1.14.0) (2023-11-03)


### Bug Fixes

* favicon.ico path ([d4dd07c](https://github.com/CoCreateJS/CoCreate-events/commit/d4dd07c2532b9bb2c69f50770165a0daa73ce2cb))
* update dependencies to the lates versions ([bca4417](https://github.com/CoCreateJS/CoCreate-events/commit/bca44178630f52bced0864850228da8310630958))


### Features

* trigger prefix event on target elements ([f8a96df](https://github.com/CoCreateJS/CoCreate-events/commit/f8a96dff58771fc2cd91653cb9281443b54c1599))

## [1.13.8](https://github.com/CoCreateJS/CoCreate-events/compare/v1.13.7...v1.13.8) (2023-10-25)


### Bug Fixes

* bump dependencies ([bee4795](https://github.com/CoCreateJS/CoCreate-events/commit/bee4795595054791a183c60fb29e148da9ec94c7))

## [1.13.7](https://github.com/CoCreateJS/CoCreate-events/compare/v1.13.6...v1.13.7) (2023-10-17)


### Bug Fixes

* await getValue() ([2d6cefa](https://github.com/CoCreateJS/CoCreate-events/commit/2d6cefaa39dbc655030938ed01fab04f6af0125f))

## [1.13.6](https://github.com/CoCreateJS/CoCreate-events/compare/v1.13.5...v1.13.6) (2023-10-14)


### Bug Fixes

* bump dependencies ([fceb02f](https://github.com/CoCreateJS/CoCreate-events/commit/fceb02fb6e9a484192814cdd7f721ba4473c41c1))

## [1.13.5](https://github.com/CoCreateJS/CoCreate-events/compare/v1.13.4...v1.13.5) (2023-10-09)


### Bug Fixes

* bump dependencies ([755044b](https://github.com/CoCreateJS/CoCreate-events/commit/755044b0a2c966bfd94decde375907d596cca45c))

## [1.13.4](https://github.com/CoCreateJS/CoCreate-events/compare/v1.13.3...v1.13.4) (2023-10-09)


### Bug Fixes

* bump dependencies ([81e5eca](https://github.com/CoCreateJS/CoCreate-events/commit/81e5eca865a223a3e4aad87c1dd612c69d1d860c))

## [1.13.3](https://github.com/CoCreateJS/CoCreate-events/compare/v1.13.2...v1.13.3) (2023-10-09)


### Bug Fixes

* bump cocreate dependency versions ([6591b59](https://github.com/CoCreateJS/CoCreate-events/commit/6591b59d689786579f68f357c1b33188c1f579f1))
* bump dependencies ([ef3ba88](https://github.com/CoCreateJS/CoCreate-events/commit/ef3ba888a64500fe7c0085f4d09516f7d5a437d3))

## [1.13.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.13.1...v1.13.2) (2023-09-18)


### Bug Fixes

*  Add path and pathname ([cc953b3](https://github.com/CoCreateJS/CoCreate-events/commit/cc953b35003e99771d4cb3e25f817c941ed21185))
* Update CoCreate depndencies to latest versions ([c993d8b](https://github.com/CoCreateJS/CoCreate-events/commit/c993d8b0072f8ffba4f8a4ab0e48f0b4ae2a0a09))

## [1.13.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.13.0...v1.13.1) (2023-08-21)


### Bug Fixes

* bump dependencies ([f422b18](https://github.com/CoCreateJS/CoCreate-events/commit/f422b18756bcffc973c8a7e739fec664b3c1218e))

# [1.13.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.12.1...v1.13.0) (2023-08-21)


### Features

* Update cocreate dependencies for the latest features and bug fixes ([0647366](https://github.com/CoCreateJS/CoCreate-events/commit/0647366009209dfdfebfe30a87decad512062998))

## [1.12.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.12.0...v1.12.1) (2023-08-21)


### Bug Fixes

* /dist/CoCreate.js updated to https://CoCreateJS.com/dist/CoCreate.js ([b14f66d](https://github.com/CoCreateJS/CoCreate-events/commit/b14f66d70bfa6f4ca1f5149db894ab7b082af132))
* replace cdn with /dist ([05937e7](https://github.com/CoCreateJS/CoCreate-events/commit/05937e7c870e55bcdecd362bf196f38400a86389))
* update file uploader ([e5dc52e](https://github.com/CoCreateJS/CoCreate-events/commit/e5dc52e144d70faa1410a0ca4e8cba53b5c764c4))

# [1.12.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.11.0...v1.12.0) (2023-08-17)


### Features

* bump cocreate dependencies for the latest updates and features ([4a90da4](https://github.com/CoCreateJS/CoCreate-events/commit/4a90da4ec717d0e12f86ccc291a0ef9759c88595))

# [1.11.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.20...v1.11.0) (2023-08-16)


### Bug Fixes

* crud attributes renamed ([4ccbb56](https://github.com/CoCreateJS/CoCreate-events/commit/4ccbb5688f21482e43b21ac972acbd138fd6b7ed))
* replace -target -selector ([632e507](https://github.com/CoCreateJS/CoCreate-events/commit/632e507cae88ddf4f22c363ccff2e8784c0f23d7))
* updated actions callback data object ([6dae7f6](https://github.com/CoCreateJS/CoCreate-events/commit/6dae7f668ee5d75da90d70554c59f5e207b1325d))
* webpack.config and package.json make use of mode=production instead of process.env ([f21e9d2](https://github.com/CoCreateJS/CoCreate-events/commit/f21e9d278575ad86f6c34a768c4abb2ed6ff2bc3))


### Features

* Custom events initialization to handle multiple event names. ([342fa7a](https://github.com/CoCreateJS/CoCreate-events/commit/342fa7a7a401b9d65e8317743ea90b14c8d6c133))
* name attribute and variable renamed to key ([7a3f3a8](https://github.com/CoCreateJS/CoCreate-events/commit/7a3f3a8c0dd79e7ae40ea261efba362403dcbc5e))
* Refactor CoCreateEvents code to use queryElements instead of queryDocumentSelectorAll ([f176c8d](https://github.com/CoCreateJS/CoCreate-events/commit/f176c8d016234c920a59277fea060eb5bb61a2d8))

## [1.10.20](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.19...v1.10.20) (2023-06-14)


### Bug Fixes

* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([e40c060](https://github.com/CoCreateJS/CoCreate-events/commit/e40c060b8dbabdc7455088013abdce1345317aac))

## [1.10.19](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.18...v1.10.19) (2023-06-11)


### Bug Fixes

* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([96eca9a](https://github.com/CoCreateJS/CoCreate-events/commit/96eca9a013430b9044320ae9890b3fad36365dc2))

## [1.10.18](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.17...v1.10.18) (2023-06-11)


### Bug Fixes

* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([25470d2](https://github.com/CoCreateJS/CoCreate-events/commit/25470d25fdf0d7b63e8843b4f285aaa1faab3eac))

## [1.10.17](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.16...v1.10.17) (2023-06-11)


### Bug Fixes

* testing workflow ([b0710de](https://github.com/CoCreateJS/CoCreate-events/commit/b0710de87c5e5da934e2f706c3f2ea3589e2f139))

## [1.10.16](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.15...v1.10.16) (2023-06-11)


### Bug Fixes

* testing workflow ([b1aa30c](https://github.com/CoCreateJS/CoCreate-events/commit/b1aa30c7b4b9f6a0cd0608f7334ecd13d7ae1841))

## [1.10.15](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.14...v1.10.15) (2023-06-11)


### Bug Fixes

* testing workflow ([ea54ad3](https://github.com/CoCreateJS/CoCreate-events/commit/ea54ad34aeeacf86c8169c96a907f8c5c5e67ee0))
* testing workflow ([9652e7e](https://github.com/CoCreateJS/CoCreate-events/commit/9652e7e8bcc7354b0a70ddba3cc6198fa27d55da))

## [1.10.14](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.13...v1.10.14) (2023-06-11)


### Bug Fixes

* testing workflow ([3727fd7](https://github.com/CoCreateJS/CoCreate-events/commit/3727fd7e23be0ae5832cc0b8141e3005baa8b176))

## [1.10.13](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.12...v1.10.13) (2023-06-11)


### Bug Fixes

* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([09f07aa](https://github.com/CoCreateJS/CoCreate-events/commit/09f07aaf056508497f5a5b59d0be90b3c0025a15))

## [1.10.12](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.11...v1.10.12) (2023-06-11)


### Bug Fixes

* postintall error ([9b91bab](https://github.com/CoCreateJS/CoCreate-events/commit/9b91bab64e165624ee37a9bfe8a14a1d7928ed16))

## [1.10.11](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.10...v1.10.11) (2023-06-11)


### Bug Fixes

* @cocreate/cli moved to dependencies ([6a67a20](https://github.com/CoCreateJS/CoCreate-events/commit/6a67a206fdb8fcc20adef23c3c14640f5960bff4))

## [1.10.10](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.9...v1.10.10) (2023-06-11)


### Bug Fixes

* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([d81419c](https://github.com/CoCreateJS/CoCreate-events/commit/d81419ccf9cec52a9dbb309dcd2525a12bfdea0d))

## [1.10.9](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.8...v1.10.9) (2023-06-11)


### Bug Fixes

* renamed hosts to host. the value can be a string or an array of strings ([54c33f1](https://github.com/CoCreateJS/CoCreate-events/commit/54c33f14d741c14c4a867a4b6adbb2ec27ebf4e3))

## [1.10.8](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.7...v1.10.8) (2023-06-10)


### Bug Fixes

* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([dbad9c7](https://github.com/CoCreateJS/CoCreate-events/commit/dbad9c712b6a045edc1623e84e9c93aeb41cf0fe))

## [1.10.7](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.6...v1.10.7) (2023-06-10)


### Bug Fixes

* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([9310447](https://github.com/CoCreateJS/CoCreate-events/commit/9310447e74f36f18ed832f7c93e006bfde41a55e))

## [1.10.6](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.5...v1.10.6) (2023-06-04)


### Bug Fixes

* Refactor CoCreate.config.js to remove hard-coded credentials ([37feb89](https://github.com/CoCreateJS/CoCreate-events/commit/37feb890afe320fd7190c0d408727b0b310f6ed8))

## [1.10.5](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.4...v1.10.5) (2023-06-04)


### Bug Fixes

* replaced secert GITHUB_TOKEN with GITHUB ([0047dda](https://github.com/CoCreateJS/CoCreate-events/commit/0047dda307fecc079482155010109b07468cad5a))
* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([415f0ab](https://github.com/CoCreateJS/CoCreate-events/commit/415f0ab7b41f7507708149be6704591397657417))

## [1.10.4](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.3...v1.10.4) (2023-06-04)


### Bug Fixes

* **semantic-release:** worklow error solved by running node version 14 ([a08bcab](https://github.com/CoCreateJS/CoCreate-events/commit/a08bcabf03c9f5ed1fb4bb21a9eda49bfc074fca))

## [1.10.3](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.2...v1.10.3) (2023-06-02)


### Bug Fixes

* format demo html ([7a646c2](https://github.com/CoCreateJS/CoCreate-events/commit/7a646c2531d8e3833be2e5d5ff5945219720ee49))
* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([f5f8bb5](https://github.com/CoCreateJS/CoCreate-events/commit/f5f8bb5c7be2167b76ca3ab0c99ea9fdeee9c7d0))

## [1.10.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.1...v1.10.2) (2023-05-21)


### Bug Fixes

* Update dependencies versions for [@cocreate](https://github.com/cocreate) libraries ([89dcb00](https://github.com/CoCreateJS/CoCreate-events/commit/89dcb00e3c7b9e805694672d9cc79924f81f207f))

## [1.10.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.10.0...v1.10.1) (2023-05-19)


### Bug Fixes

* update packages to latest version. This commit updates various packages in the dependencies section of the package.json file to their latest published versions, thereby fixing multiple bugs and improving overall performance. ([b0e4c79](https://github.com/CoCreateJS/CoCreate-events/commit/b0e4c79a269261f2d5cbf2c2f0bfd7cbb7beea52))

# [1.10.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.9.4...v1.10.0) (2023-05-18)


### Bug Fixes

* apikey renamed to key ([75296fb](https://github.com/CoCreateJS/CoCreate-events/commit/75296fb44dfab0c599700498e389147755ffbf05))


### Features

* Refactor CoCreateEvents and add custom event functionality ([be5e630](https://github.com/CoCreateJS/CoCreate-events/commit/be5e63069d1b1249bea59d3bd5c29db5272837fc))

## [1.9.4](https://github.com/CoCreateJS/CoCreate-events/compare/v1.9.3...v1.9.4) (2023-05-06)


### Bug Fixes

* bump [@cocreate](https://github.com/cocreate) dependencies ([918fd60](https://github.com/CoCreateJS/CoCreate-events/commit/918fd60e652b4f9e1d2c124b033583673f8194c4))

## [1.9.3](https://github.com/CoCreateJS/CoCreate-events/compare/v1.9.2...v1.9.3) (2023-05-01)


### Bug Fixes

* prevent duplicate events listeners ([a247b0c](https://github.com/CoCreateJS/CoCreate-events/commit/a247b0c78fa553139a66f63eb230488a4a35cca5))

## [1.9.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.9.1...v1.9.2) (2023-05-01)


### Bug Fixes

* update manifest.json to manifest.webmanifest ([d228a3e](https://github.com/CoCreateJS/CoCreate-events/commit/d228a3ef19b7b8663df6b808b05ba0ea62bc6dc5))

## [1.9.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.9.0...v1.9.1) (2023-05-01)


### Bug Fixes

* replace fontawesome with svg ([11ed649](https://github.com/CoCreateJS/CoCreate-events/commit/11ed649b3a40be52f44bf6f2aa4b1c567f75df05))

# [1.9.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.8.4...v1.9.0) (2023-04-30)


### Bug Fixes

* fullscreen target updated to fullscreen fullscreen-target ([a6c2acb](https://github.com/CoCreateJS/CoCreate-events/commit/a6c2acb8870ba52e916939a4d6cb7e0fddc5249b))
* package-lock.json and pnpm-lock.yaml added to .gitignore ([b93d0c3](https://github.com/CoCreateJS/CoCreate-events/commit/b93d0c3cb06498be033c4117b2501e17e3556840))
* removed toogle fullscreen icons. now using css content ([c3fff41](https://github.com/CoCreateJS/CoCreate-events/commit/c3fff41dfdfcd67f876b66a29abf41fca3e8d59e))
* typo originalHTML to originalHtml ([3ac8d14](https://github.com/CoCreateJS/CoCreate-events/commit/3ac8d143b7d5fbcb4985844414d0fbb18e4f7f79))
* typo originalHTML to originalHtml ([fa694cb](https://github.com/CoCreateJS/CoCreate-events/commit/fa694cb50e63b92c8e60895e1c1c632ebdab9f3f))


### Features

* localStorage attributes ([e2f5089](https://github.com/CoCreateJS/CoCreate-events/commit/e2f5089975428f96bf155f58e3581502122562f8))
* observer -key attributes ([7b5c218](https://github.com/CoCreateJS/CoCreate-events/commit/7b5c218756249f6017b1bf03c39fb6ba8d5fa87b))

## [1.8.4](https://github.com/CoCreateJS/CoCreate-events/compare/v1.8.3...v1.8.4) (2023-04-24)


### Bug Fixes

* updated worrkflows to v3 and node version 16 ([8d52380](https://github.com/CoCreateJS/CoCreate-events/commit/8d52380cf7ecf091d17aa0f4007306b5d851ceaa))

## [1.8.3](https://github.com/CoCreateJS/CoCreate-events/compare/v1.8.2...v1.8.3) (2023-04-24)


### Bug Fixes

* workflow node version updated  16 ([5c66cc6](https://github.com/CoCreateJS/CoCreate-events/commit/5c66cc68b6dd19ede734e93aced6bb7d1c4c6822))

## [1.8.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.8.1...v1.8.2) (2023-04-24)


### Bug Fixes

* bump [@cocreate](https://github.com/cocreate) dependencies ([38a0d0b](https://github.com/CoCreateJS/CoCreate-events/commit/38a0d0b3ebb4bd00bb1b28c499d0b3bd8eac077b))

## [1.8.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.8.0...v1.8.1) (2023-04-24)


### Bug Fixes

* bump cdn to 1.50.3 ([50ab2af](https://github.com/CoCreateJS/CoCreate-events/commit/50ab2affccfcf03b04131eaf5083145812655ff2))
* removed uglifyjs-webpack-plugin ([911ba0c](https://github.com/CoCreateJS/CoCreate-events/commit/911ba0cddfe1c13f7c9e305252fe8cc49896acae))

# [1.8.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.7.1...v1.8.0) (2023-04-24)


### Bug Fixes

* add @cocreate/element-prototype, bump cdn to 1.50.0 ([2c56a43](https://github.com/CoCreateJS/CoCreate-events/commit/2c56a43d98e562953dc85110b636276133fc4e95))


### Features

* added pwa manifest ([84fbafc](https://github.com/CoCreateJS/CoCreate-events/commit/84fbafcbd1bdfb30ed5e3a6a3c9ae390df47defe))

## [1.7.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.7.0...v1.7.1) (2023-04-24)


### Bug Fixes

* remove console.log ([f5d4517](https://github.com/CoCreateJS/CoCreate-events/commit/f5d45174c0769751bcb6b85fb277f6e7ee9a52b9))

# [1.7.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.12...v1.7.0) (2023-04-13)


### Bug Fixes

* add cdn ([62fda1b](https://github.com/CoCreateJS/CoCreate-events/commit/62fda1b4d8e2a7cbf6d9e9734cd78287a5c1a04a))


### Features

* handling of array value from getValue ([0332e3c](https://github.com/CoCreateJS/CoCreate-events/commit/0332e3cdf6b565725df959acb203065a37456f0f))

## [1.6.12](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.11...v1.6.12) (2023-04-11)


### Bug Fixes

* bump cdn to 1.49.2 ([42a1f59](https://github.com/CoCreateJS/CoCreate-events/commit/42a1f59bdf66aaa16ffc29775551391176d55492))

## [1.6.11](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.10...v1.6.11) (2023-04-11)


### Bug Fixes

* bump cdn to 1.49.1 ([94a7a70](https://github.com/CoCreateJS/CoCreate-events/commit/94a7a707f0ae77e1a549e68835f642adcbb09b44))
* bump dependencies ([a564cda](https://github.com/CoCreateJS/CoCreate-events/commit/a564cdae3a6f2d6799d89673ae88ff291d3fd19f))

## [1.6.10](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.9...v1.6.10) (2023-04-11)


### Bug Fixes

*  bump [@cocreate](https://github.com/cocreate) dependencies ([f6a6b1c](https://github.com/CoCreateJS/CoCreate-events/commit/f6a6b1c8cf4952a7d9fc187fed496333330257c4))

## [1.6.9](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.8...v1.6.9) (2023-04-11)


### Bug Fixes

* bump cdn to 1.49.0' ([ce456b1](https://github.com/CoCreateJS/CoCreate-events/commit/ce456b102bc87627deaa06a86777ed883cd7ebba))
* renamed domains to hosts ([438db97](https://github.com/CoCreateJS/CoCreate-events/commit/438db971a5071a62b1982df97e44b661f4abdbc8))

## [1.6.8](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.7...v1.6.8) (2023-03-30)


### Bug Fixes

* bump [@cocreate](https://github.com/cocreate) dependencies' ([f9abb87](https://github.com/CoCreateJS/CoCreate-events/commit/f9abb874dfa1c3459f0989d0b3cfa5eeb696496f))
* bump cdn to 1.48.2' ([0f7afb3](https://github.com/CoCreateJS/CoCreate-events/commit/0f7afb3cd3f29f70e4d43da4b49eccb51c71bf02))

## [1.6.7](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.6...v1.6.7) (2023-03-18)


### Bug Fixes

* add missing package @cocreate/observer ([4416382](https://github.com/CoCreateJS/CoCreate-events/commit/4416382e802a4a72139db0c79d559d92533f115b))
* bumped cdn to v1.48.1' ([881c583](https://github.com/CoCreateJS/CoCreate-events/commit/881c583b4d9305bedc80b123cdc8e2e4e6327ab7))

## [1.6.6](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.5...v1.6.6) (2023-03-16)


### Bug Fixes

* bump dependencies' ([978312e](https://github.com/CoCreateJS/CoCreate-events/commit/978312ed6c8b9326771f0b4157f5088fe59be75c))

## [1.6.5](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.4...v1.6.5) (2023-03-16)


### Bug Fixes

* filter-sort-direction ([d27f890](https://github.com/CoCreateJS/CoCreate-events/commit/d27f89030f096baea5fe703252290096c2c602b0))

## [1.6.4](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.3...v1.6.4) (2023-03-16)


### Bug Fixes

* el typo ([7b0ec3a](https://github.com/CoCreateJS/CoCreate-events/commit/7b0ec3a2dc04580efb4850d60ef63adcfbfe5f28))

## [1.6.3](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.2...v1.6.3) (2023-03-16)


### Bug Fixes

* bump dependencies' ([4299e33](https://github.com/CoCreateJS/CoCreate-events/commit/4299e337d8bed359ab081ece2faeb77caecaebef))

## [1.6.2](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.1...v1.6.2) (2023-03-16)


### Bug Fixes

* remove set-value demo ([6df371c](https://github.com/CoCreateJS/CoCreate-events/commit/6df371cabd6745359abac5a2028e8c0749143cc8))

## [1.6.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.6.0...v1.6.1) (2023-03-16)


### Bug Fixes

* events undefined ([113384c](https://github.com/CoCreateJS/CoCreate-events/commit/113384c5a7b300daf4ab7cc74d25ab9cdb2fbf8c))

# [1.6.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.5.0...v1.6.0) (2023-03-16)


### Features

* replaced get-value and set-value with a super charged version of CoCreate-events ([5407615](https://github.com/CoCreateJS/CoCreate-events/commit/54076157dc1e3ae764bc1e8d8ce4a84786501449))

# [1.5.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.4.1...v1.5.0) (2023-03-15)


### Bug Fixes

* add events per element and observer to detect newely added elements ([dcbaa38](https://github.com/CoCreateJS/CoCreate-events/commit/dcbaa38a09fa75ddcf3c969c708fa1dbcf2e3ce4))


### Features

* attribute for targeting parent and sibling elements ([842be58](https://github.com/CoCreateJS/CoCreate-events/commit/842be58541401574cd4d093d08468abe39decf9b))

## [1.4.1](https://github.com/CoCreateJS/CoCreate-events/compare/v1.4.0...v1.4.1) (2023-02-21)


### Bug Fixes

* improved key usage ([a92e1f2](https://github.com/CoCreateJS/CoCreate-events/commit/a92e1f25d7b4c83dfa0beb9a7526c9ca3dc184fe))

# [1.4.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.3.0...v1.4.0) (2023-02-19)


### Features

* debonce ([43748c4](https://github.com/CoCreateJS/CoCreate-events/commit/43748c45b9e76f58aaf1ad11d16964422c028bbc))

# [1.3.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.2.0...v1.3.0) (2023-02-11)


### Features

* define and replace a key ([f321bba](https://github.com/CoCreateJS/CoCreate-events/commit/f321bbad58ed361b5d7185cf5fe33e6c4ed79d2b))

# [1.2.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.1.0...v1.2.0) (2023-02-02)


### Features

* add @cocreate/actions, events bubble up and triggers parent events ([9946b30](https://github.com/CoCreateJS/CoCreate-events/commit/9946b302b5ed19e3f20d850f0734dde6e28852fe))

# [1.1.0](https://github.com/CoCreateJS/CoCreate-events/compare/v1.0.0...v1.1.0) (2023-02-02)


### Features

* supports actions for defined events ([08e9a47](https://github.com/CoCreateJS/CoCreate-events/commit/08e9a4721660a3ba5f508fe3dbf840ec8f1a4a01))

# 1.0.0 (2023-02-01)


### Features

* initial release ([151bb63](https://github.com/CoCreateJS/CoCreate-events/commit/151bb637d2f5247edcb0577e74f9ec61c18de7ec))
