// This is the pnpm lockfile from the encoded package.json

export const lockfile = `
lockfileVersion: 5.4

specifiers:
  '@vanilla-extract/css': ^1.9.5
  '@vanilla-extract/esbuild-plugin': ^2.2.1
  esbuild: ^0.17.8

dependencies:
  '@vanilla-extract/css': 1.10.0
  '@vanilla-extract/esbuild-plugin': 2.2.2
  esbuild: 0.17.11

packages:

  /@ampproject/remapping/2.2.0:
    resolution: {integrity: sha512-qRmjj8nj9qmLTQXXmaR1cck3UXSRMPrbsLJAasZpF+t3riI71BXed5ebIOYwQntykeZuhjsdweEc9BxH5Jc26w==}
    engines: {node: '>=6.0.0'}
    dependencies:
      '@jridgewell/gen-mapping': 0.1.1
      '@jridgewell/trace-mapping': 0.3.17
    dev: false

  /@babel/code-frame/7.18.6:
    resolution: {integrity: sha512-TDCmlK5eOvH+eH7cdAFlNXeVJqWIQ7gW9tY1GJIpUtFb6CmjVyq2VM3u71bOyR8CRihcCgMUYoDNyLXao3+70Q==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/highlight': 7.18.6
    dev: false

  /@babel/compat-data/7.21.0:
    resolution: {integrity: sha512-gMuZsmsgxk/ENC3O/fRw5QY8A9/uxQbbCEypnLIiYYc/qVJtEV7ouxC3EllIIwNzMqAQee5tanFabWsUOutS7g==}
    engines: {node: '>=6.9.0'}
    dev: false

  /@babel/core/7.21.0:
    resolution: {integrity: sha512-PuxUbxcW6ZYe656yL3EAhpy7qXKq0DmYsrJLpbB8XrsCP9Nm+XCg9XFMb5vIDliPD7+U/+M+QJlH17XOcB7eXA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@ampproject/remapping': 2.2.0
      '@babel/code-frame': 7.18.6
      '@babel/generator': 7.21.1
      '@babel/helper-compilation-targets': 7.20.7_@babel+core@7.21.0
      '@babel/helper-module-transforms': 7.21.2
      '@babel/helpers': 7.21.0
      '@babel/parser': 7.21.2
      '@babel/template': 7.20.7
      '@babel/traverse': 7.21.2
      '@babel/types': 7.21.2
      convert-source-map: 1.9.0
      debug: 4.3.4
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@babel/generator/7.21.1:
    resolution: {integrity: sha512-1lT45bAYlQhFn/BHivJs43AiW2rg3/UbLyShGfF3C0KmHvO5fSghWd5kBJy30kpRRucGzXStvnnCFniCR2kXAA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.21.2
      '@jridgewell/gen-mapping': 0.3.2
      '@jridgewell/trace-mapping': 0.3.17
      jsesc: 2.5.2
    dev: false

  /@babel/helper-compilation-targets/7.20.7_@babel+core@7.21.0:
    resolution: {integrity: sha512-4tGORmfQcrc+bvrjb5y3dG9Mx1IOZjsHqQVUz7XCNHO+iTmqxWnVg3KRygjGmpRLJGdQSKuvFinbIb0CnZwHAQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/compat-data': 7.21.0
      '@babel/core': 7.21.0
      '@babel/helper-validator-option': 7.21.0
      browserslist: 4.21.5
      lru-cache: 5.1.1
      semver: 6.3.0
    dev: false

  /@babel/helper-environment-visitor/7.18.9:
    resolution: {integrity: sha512-3r/aACDJ3fhQ/EVgFy0hpj8oHyHpQc+LPtJoY9SzTThAsStm4Ptegq92vqKoE3vD706ZVFWITnMnxucw+S9Ipg==}
    engines: {node: '>=6.9.0'}
    dev: false

  /@babel/helper-function-name/7.21.0:
    resolution: {integrity: sha512-HfK1aMRanKHpxemaY2gqBmL04iAPOPRj7DxtNbiDOrJK+gdwkiNRVpCpUJYbUT+aZyemKN8brqTOxzCaG6ExRg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/template': 7.20.7
      '@babel/types': 7.21.2
    dev: false

  /@babel/helper-hoist-variables/7.18.6:
    resolution: {integrity: sha512-UlJQPkFqFULIcyW5sbzgbkxn2FKRgwWiRexcuaR8RNJRy8+LLveqPjwZV/bwrLZCN0eUHD/x8D0heK1ozuoo6Q==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.21.2
    dev: false

  /@babel/helper-module-imports/7.18.6:
    resolution: {integrity: sha512-0NFvs3VkuSYbFi1x2Vd6tKrywq+z/cLeYC/RJNFrIX/30Bf5aiGYbtvGXolEktzJH8o5E5KJ3tT+nkxuuZFVlA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.21.2
    dev: false

  /@babel/helper-module-transforms/7.21.2:
    resolution: {integrity: sha512-79yj2AR4U/Oqq/WOV7Lx6hUjau1Zfo4cI+JLAVYeMV5XIlbOhmjEk5ulbTc9fMpmlojzZHkUUxAiK+UKn+hNQQ==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-environment-visitor': 7.18.9
      '@babel/helper-module-imports': 7.18.6
      '@babel/helper-simple-access': 7.20.2
      '@babel/helper-split-export-declaration': 7.18.6
      '@babel/helper-validator-identifier': 7.19.1
      '@babel/template': 7.20.7
      '@babel/traverse': 7.21.2
      '@babel/types': 7.21.2
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@babel/helper-plugin-utils/7.20.2:
    resolution: {integrity: sha512-8RvlJG2mj4huQ4pZ+rU9lqKi9ZKiRmuvGuM2HlWmkmgOhbs6zEAw6IEiJ5cQqGbDzGZOhwuOQNtZMi/ENLjZoQ==}
    engines: {node: '>=6.9.0'}
    dev: false

  /@babel/helper-simple-access/7.20.2:
    resolution: {integrity: sha512-+0woI/WPq59IrqDYbVGfshjT5Dmk/nnbdpcF8SnMhhXObpTq2KNBdLFRFrkVdbDOyUmHBCxzm5FHV1rACIkIbA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.21.2
    dev: false

  /@babel/helper-split-export-declaration/7.18.6:
    resolution: {integrity: sha512-bde1etTx6ZyTmobl9LLMMQsaizFVZrquTEHOqKeQESMKo4PlObf+8+JA25ZsIpZhT/WEd39+vOdLXAFG/nELpA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.21.2
    dev: false

  /@babel/helper-string-parser/7.19.4:
    resolution: {integrity: sha512-nHtDoQcuqFmwYNYPz3Rah5ph2p8PFeFCsZk9A/48dPc/rGocJ5J3hAAZ7pb76VWX3fZKu+uEr/FhH5jLx7umrw==}
    engines: {node: '>=6.9.0'}
    dev: false

  /@babel/helper-validator-identifier/7.19.1:
    resolution: {integrity: sha512-awrNfaMtnHUr653GgGEs++LlAvW6w+DcPrOliSMXWCKo597CwL5Acf/wWdNkf/tfEQE3mjkeD1YOVZOUV/od1w==}
    engines: {node: '>=6.9.0'}
    dev: false

  /@babel/helper-validator-option/7.21.0:
    resolution: {integrity: sha512-rmL/B8/f0mKS2baE9ZpyTcTavvEuWhTTW8amjzXNvYG4AwBsqTLikfXsEofsJEfKHf+HQVQbFOHy6o+4cnC/fQ==}
    engines: {node: '>=6.9.0'}
    dev: false

  /@babel/helpers/7.21.0:
    resolution: {integrity: sha512-XXve0CBtOW0pd7MRzzmoyuSj0e3SEzj8pgyFxnTT1NJZL38BD1MK7yYrm8yefRPIDvNNe14xR4FdbHwpInD4rA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/template': 7.20.7
      '@babel/traverse': 7.21.2
      '@babel/types': 7.21.2
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@babel/highlight/7.18.6:
    resolution: {integrity: sha512-u7stbOuYjaPezCuLj29hNW1v64M2Md2qupEKP1fHc7WdOA3DgLh37suiSrZYY7haUB7iBeQZ9P1uiRF359do3g==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-validator-identifier': 7.19.1
      chalk: 2.4.2
      js-tokens: 4.0.0
    dev: false

  /@babel/parser/7.21.2:
    resolution: {integrity: sha512-URpaIJQwEkEC2T9Kn+Ai6Xe/02iNaVCuT/PtoRz3GPVJVDpPd7mLo+VddTbhCRU9TXqW5mSrQfXZyi8kDKOVpQ==}
    engines: {node: '>=6.0.0'}
    hasBin: true
    dependencies:
      '@babel/types': 7.21.2
    dev: false

  /@babel/plugin-syntax-typescript/7.20.0_@babel+core@7.21.0:
    resolution: {integrity: sha512-rd9TkG+u1CExzS4SM1BlMEhMXwFLKVjOAFFCDx9PbX5ycJWDoWMcwdJH9RhkPu1dOgn5TrxLot/Gx6lWFuAUNQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.21.0
      '@babel/helper-plugin-utils': 7.20.2
    dev: false

  /@babel/runtime/7.21.0:
    resolution: {integrity: sha512-xwII0//EObnq89Ji5AKYQaRYiW/nZ3llSv29d49IuxPhKbtJoLP+9QUUZ4nVragQVtaVGeZrpB+ZtG/Pdy/POw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      regenerator-runtime: 0.13.11
    dev: false

  /@babel/template/7.20.7:
    resolution: {integrity: sha512-8SegXApWe6VoNw0r9JHpSteLKTpTiLZ4rMlGIm9JQ18KiCtyQiAMEazujAHrUS5flrcqYZa75ukev3P6QmUwUw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/code-frame': 7.18.6
      '@babel/parser': 7.21.2
      '@babel/types': 7.21.2
    dev: false

  /@babel/traverse/7.21.2:
    resolution: {integrity: sha512-ts5FFU/dSUPS13tv8XiEObDu9K+iagEKME9kAbaP7r0Y9KtZJZ+NGndDvWoRAYNpeWafbpFeki3q9QoMD6gxyw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/code-frame': 7.18.6
      '@babel/generator': 7.21.1
      '@babel/helper-environment-visitor': 7.18.9
      '@babel/helper-function-name': 7.21.0
      '@babel/helper-hoist-variables': 7.18.6
      '@babel/helper-split-export-declaration': 7.18.6
      '@babel/parser': 7.21.2
      '@babel/types': 7.21.2
      debug: 4.3.4
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@babel/types/7.21.2:
    resolution: {integrity: sha512-3wRZSs7jiFaB8AjxiiD+VqN5DTG2iRvJGQ+qYFrs/654lg6kGTQWIOFjlBo5RaXuAZjBmP3+OQH4dmhqiiyYxw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-string-parser': 7.19.4
      '@babel/helper-validator-identifier': 7.19.1
      to-fast-properties: 2.0.0
    dev: false

  /@emotion/hash/0.9.0:
    resolution: {integrity: sha512-14FtKiHhy2QoPIzdTcvh//8OyBlknNs2nXRwIhG904opCby3l+9Xaf/wuPvICBF0rc1ZCNBd3nKe9cd2mecVkQ==}
    dev: false

  /@esbuild/android-arm/0.16.17:
    resolution: {integrity: sha512-N9x1CMXVhtWEAMS7pNNONyA14f71VPQN9Cnavj1XQh6T7bskqiLLrSca4O0Vr8Wdcga943eThxnVp3JLnBMYtw==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/android-arm/0.17.11:
    resolution: {integrity: sha512-CdyX6sRVh1NzFCsf5vw3kULwlAhfy9wVt8SZlrhQ7eL2qBjGbFhRBWkkAzuZm9IIEOCKJw4DXA6R85g+qc8RDw==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/android-arm/0.17.6:
    resolution: {integrity: sha512-bSC9YVUjADDy1gae8RrioINU6e1lCkg3VGVwm0QQ2E1CWcC4gnMce9+B6RpxuSsrsXsk1yojn7sp1fnG8erE2g==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/android-arm64/0.16.17:
    resolution: {integrity: sha512-MIGl6p5sc3RDTLLkYL1MyL8BMRN4tLMRCn+yRJJmEDvYZ2M7tmAf80hx1kbNEUX2KJ50RRtxZ4JHLvCfuB6kBg==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/android-arm64/0.17.11:
    resolution: {integrity: sha512-QnK4d/zhVTuV4/pRM4HUjcsbl43POALU2zvBynmrrqZt9LPcLA3x1fTZPBg2RRguBQnJcnU059yKr+bydkntjg==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/android-arm64/0.17.6:
    resolution: {integrity: sha512-YnYSCceN/dUzUr5kdtUzB+wZprCafuD89Hs0Aqv9QSdwhYQybhXTaSTcrl6X/aWThn1a/j0eEpUBGOE7269REg==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/android-x64/0.16.17:
    resolution: {integrity: sha512-a3kTv3m0Ghh4z1DaFEuEDfz3OLONKuFvI4Xqczqx4BqLyuFaFkuaG4j2MtA6fuWEFeC5x9IvqnX7drmRq/fyAQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/android-x64/0.17.11:
    resolution: {integrity: sha512-3PL3HKtsDIXGQcSCKtWD/dy+mgc4p2Tvo2qKgKHj9Yf+eniwFnuoQ0OUhlSfAEpKAFzF9N21Nwgnap6zy3L3MQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/android-x64/0.17.6:
    resolution: {integrity: sha512-MVcYcgSO7pfu/x34uX9u2QIZHmXAB7dEiLQC5bBl5Ryqtpj9lT2sg3gNDEsrPEmimSJW2FXIaxqSQ501YLDsZQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/darwin-arm64/0.16.17:
    resolution: {integrity: sha512-/2agbUEfmxWHi9ARTX6OQ/KgXnOWfsNlTeLcoV7HSuSTv63E4DqtAc+2XqGw1KHxKMHGZgbVCZge7HXWX9Vn+w==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/darwin-arm64/0.17.11:
    resolution: {integrity: sha512-pJ950bNKgzhkGNO3Z9TeHzIFtEyC2GDQL3wxkMApDEghYx5Qers84UTNc1bAxWbRkuJOgmOha5V0WUeh8G+YGw==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/darwin-arm64/0.17.6:
    resolution: {integrity: sha512-bsDRvlbKMQMt6Wl08nHtFz++yoZHsyTOxnjfB2Q95gato+Yi4WnRl13oC2/PJJA9yLCoRv9gqT/EYX0/zDsyMA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/darwin-x64/0.16.17:
    resolution: {integrity: sha512-2By45OBHulkd9Svy5IOCZt376Aa2oOkiE9QWUK9fe6Tb+WDr8hXL3dpqi+DeLiMed8tVXspzsTAvd0jUl96wmg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/darwin-x64/0.17.11:
    resolution: {integrity: sha512-iB0dQkIHXyczK3BZtzw1tqegf0F0Ab5texX2TvMQjiJIWXAfM4FQl7D909YfXWnB92OQz4ivBYQ2RlxBJrMJOw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/darwin-x64/0.17.6:
    resolution: {integrity: sha512-xh2A5oPrYRfMFz74QXIQTQo8uA+hYzGWJFoeTE8EvoZGHb+idyV4ATaukaUvnnxJiauhs/fPx3vYhU4wiGfosg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/freebsd-arm64/0.16.17:
    resolution: {integrity: sha512-mt+cxZe1tVx489VTb4mBAOo2aKSnJ33L9fr25JXpqQqzbUIw/yzIzi+NHwAXK2qYV1lEFp4OoVeThGjUbmWmdw==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/freebsd-arm64/0.17.11:
    resolution: {integrity: sha512-7EFzUADmI1jCHeDRGKgbnF5sDIceZsQGapoO6dmw7r/ZBEKX7CCDnIz8m9yEclzr7mFsd+DyasHzpjfJnmBB1Q==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/freebsd-arm64/0.17.6:
    resolution: {integrity: sha512-EnUwjRc1inT4ccZh4pB3v1cIhohE2S4YXlt1OvI7sw/+pD+dIE4smwekZlEPIwY6PhU6oDWwITrQQm5S2/iZgg==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/freebsd-x64/0.16.17:
    resolution: {integrity: sha512-8ScTdNJl5idAKjH8zGAsN7RuWcyHG3BAvMNpKOBaqqR7EbUhhVHOqXRdL7oZvz8WNHL2pr5+eIT5c65kA6NHug==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/freebsd-x64/0.17.11:
    resolution: {integrity: sha512-iPgenptC8i8pdvkHQvXJFzc1eVMR7W2lBPrTE6GbhR54sLcF42mk3zBOjKPOodezzuAz/KSu8CPyFSjcBMkE9g==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/freebsd-x64/0.17.6:
    resolution: {integrity: sha512-Uh3HLWGzH6FwpviUcLMKPCbZUAFzv67Wj5MTwK6jn89b576SR2IbEp+tqUHTr8DIl0iDmBAf51MVaP7pw6PY5Q==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-arm/0.16.17:
    resolution: {integrity: sha512-iihzrWbD4gIT7j3caMzKb/RsFFHCwqqbrbH9SqUSRrdXkXaygSZCZg1FybsZz57Ju7N/SHEgPyaR0LZ8Zbe9gQ==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-arm/0.17.11:
    resolution: {integrity: sha512-M9iK/d4lgZH0U5M1R2p2gqhPV/7JPJcRz+8O8GBKVgqndTzydQ7B2XGDbxtbvFkvIs53uXTobOhv+RyaqhUiMg==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-arm/0.17.6:
    resolution: {integrity: sha512-7YdGiurNt7lqO0Bf/U9/arrPWPqdPqcV6JCZda4LZgEn+PTQ5SMEI4MGR52Bfn3+d6bNEGcWFzlIxiQdS48YUw==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-arm64/0.16.17:
    resolution: {integrity: sha512-7S8gJnSlqKGVJunnMCrXHU9Q8Q/tQIxk/xL8BqAP64wchPCTzuM6W3Ra8cIa1HIflAvDnNOt2jaL17vaW+1V0g==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-arm64/0.17.11:
    resolution: {integrity: sha512-Qxth3gsWWGKz2/qG2d5DsW/57SeA2AmpSMhdg9TSB5Svn2KDob3qxfQSkdnWjSd42kqoxIPy3EJFs+6w1+6Qjg==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-arm64/0.17.6:
    resolution: {integrity: sha512-bUR58IFOMJX523aDVozswnlp5yry7+0cRLCXDsxnUeQYJik1DukMY+apBsLOZJblpH+K7ox7YrKrHmJoWqVR9w==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-ia32/0.16.17:
    resolution: {integrity: sha512-kiX69+wcPAdgl3Lonh1VI7MBr16nktEvOfViszBSxygRQqSpzv7BffMKRPMFwzeJGPxcio0pdD3kYQGpqQ2SSg==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-ia32/0.17.11:
    resolution: {integrity: sha512-dB1nGaVWtUlb/rRDHmuDQhfqazWE0LMro/AIbT2lWM3CDMHJNpLckH+gCddQyhhcLac2OYw69ikUMO34JLt3wA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-ia32/0.17.6:
    resolution: {integrity: sha512-ujp8uoQCM9FRcbDfkqECoARsLnLfCUhKARTP56TFPog8ie9JG83D5GVKjQ6yVrEVdMie1djH86fm98eY3quQkQ==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-loong64/0.16.17:
    resolution: {integrity: sha512-dTzNnQwembNDhd654cA4QhbS9uDdXC3TKqMJjgOWsC0yNCbpzfWoXdZvp0mY7HU6nzk5E0zpRGGx3qoQg8T2DQ==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-loong64/0.17.11:
    resolution: {integrity: sha512-aCWlq70Q7Nc9WDnormntGS1ar6ZFvUpqr8gXtO+HRejRYPweAFQN615PcgaSJkZjhHp61+MNLhzyVALSF2/Q0g==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-loong64/0.17.6:
    resolution: {integrity: sha512-y2NX1+X/Nt+izj9bLoiaYB9YXT/LoaQFYvCkVD77G/4F+/yuVXYCWz4SE9yr5CBMbOxOfBcy/xFL4LlOeNlzYQ==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-mips64el/0.16.17:
    resolution: {integrity: sha512-ezbDkp2nDl0PfIUn0CsQ30kxfcLTlcx4Foz2kYv8qdC6ia2oX5Q3E/8m6lq84Dj/6b0FrkgD582fJMIfHhJfSw==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-mips64el/0.17.11:
    resolution: {integrity: sha512-cGeGNdQxqY8qJwlYH1BP6rjIIiEcrM05H7k3tR7WxOLmD1ZxRMd6/QIOWMb8mD2s2YJFNRuNQ+wjMhgEL2oCEw==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-mips64el/0.17.6:
    resolution: {integrity: sha512-09AXKB1HDOzXD+j3FdXCiL/MWmZP0Ex9eR8DLMBVcHorrWJxWmY8Nms2Nm41iRM64WVx7bA/JVHMv081iP2kUA==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-ppc64/0.16.17:
    resolution: {integrity: sha512-dzS678gYD1lJsW73zrFhDApLVdM3cUF2MvAa1D8K8KtcSKdLBPP4zZSLy6LFZ0jYqQdQ29bjAHJDgz0rVbLB3g==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-ppc64/0.17.11:
    resolution: {integrity: sha512-BdlziJQPW/bNe0E8eYsHB40mYOluS+jULPCjlWiHzDgr+ZBRXPtgMV1nkLEGdpjrwgmtkZHEGEPaKdS/8faLDA==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-ppc64/0.17.6:
    resolution: {integrity: sha512-AmLhMzkM8JuqTIOhxnX4ubh0XWJIznEynRnZAVdA2mMKE6FAfwT2TWKTwdqMG+qEaeyDPtfNoZRpJbD4ZBv0Tg==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-riscv64/0.16.17:
    resolution: {integrity: sha512-ylNlVsxuFjZK8DQtNUwiMskh6nT0vI7kYl/4fZgV1llP5d6+HIeL/vmmm3jpuoo8+NuXjQVZxmKuhDApK0/cKw==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-riscv64/0.17.11:
    resolution: {integrity: sha512-MDLwQbtF+83oJCI1Cixn68Et/ME6gelmhssPebC40RdJaect+IM+l7o/CuG0ZlDs6tZTEIoxUe53H3GmMn8oMA==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-riscv64/0.17.6:
    resolution: {integrity: sha512-Y4Ri62PfavhLQhFbqucysHOmRamlTVK10zPWlqjNbj2XMea+BOs4w6ASKwQwAiqf9ZqcY9Ab7NOU4wIgpxwoSQ==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-s390x/0.16.17:
    resolution: {integrity: sha512-gzy7nUTO4UA4oZ2wAMXPNBGTzZFP7mss3aKR2hH+/4UUkCOyqmjXiKpzGrY2TlEUhbbejzXVKKGazYcQTZWA/w==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-s390x/0.17.11:
    resolution: {integrity: sha512-4N5EMESvws0Ozr2J94VoUD8HIRi7X0uvUv4c0wpTHZyZY9qpaaN7THjosdiW56irQ4qnJ6Lsc+i+5zGWnyqWqQ==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-s390x/0.17.6:
    resolution: {integrity: sha512-SPUiz4fDbnNEm3JSdUW8pBJ/vkop3M1YwZAVwvdwlFLoJwKEZ9L98l3tzeyMzq27CyepDQ3Qgoba44StgbiN5Q==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-x64/0.16.17:
    resolution: {integrity: sha512-mdPjPxfnmoqhgpiEArqi4egmBAMYvaObgn4poorpUaqmvzzbvqbowRllQ+ZgzGVMGKaPkqUmPDOOFQRUFDmeUw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-x64/0.17.11:
    resolution: {integrity: sha512-rM/v8UlluxpytFSmVdbCe1yyKQd/e+FmIJE2oPJvbBo+D0XVWi1y/NQ4iTNx+436WmDHQBjVLrbnAQLQ6U7wlw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/linux-x64/0.17.6:
    resolution: {integrity: sha512-a3yHLmOodHrzuNgdpB7peFGPx1iJ2x6m+uDvhP2CKdr2CwOaqEFMeSqYAHU7hG+RjCq8r2NFujcd/YsEsFgTGw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/netbsd-x64/0.16.17:
    resolution: {integrity: sha512-/PzmzD/zyAeTUsduZa32bn0ORug+Jd1EGGAUJvqfeixoEISYpGnAezN6lnJoskauoai0Jrs+XSyvDhppCPoKOA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/netbsd-x64/0.17.11:
    resolution: {integrity: sha512-4WaAhuz5f91h3/g43VBGdto1Q+X7VEZfpcWGtOFXnggEuLvjV+cP6DyLRU15IjiU9fKLLk41OoJfBFN5DhPvag==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/netbsd-x64/0.17.6:
    resolution: {integrity: sha512-EanJqcU/4uZIBreTrnbnre2DXgXSa+Gjap7ifRfllpmyAU7YMvaXmljdArptTHmjrkkKm9BK6GH5D5Yo+p6y5A==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/openbsd-x64/0.16.17:
    resolution: {integrity: sha512-2yaWJhvxGEz2RiftSk0UObqJa/b+rIAjnODJgv2GbGGpRwAfpgzyrg1WLK8rqA24mfZa9GvpjLcBBg8JHkoodg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/openbsd-x64/0.17.11:
    resolution: {integrity: sha512-UBj135Nx4FpnvtE+C8TWGp98oUgBcmNmdYgl5ToKc0mBHxVVqVE7FUS5/ELMImOp205qDAittL6Ezhasc2Ev/w==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/openbsd-x64/0.17.6:
    resolution: {integrity: sha512-xaxeSunhQRsTNGFanoOkkLtnmMn5QbA0qBhNet/XLVsc+OVkpIWPHcr3zTW2gxVU5YOHFbIHR9ODuaUdNza2Vw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/sunos-x64/0.16.17:
    resolution: {integrity: sha512-xtVUiev38tN0R3g8VhRfN7Zl42YCJvyBhRKw1RJjwE1d2emWTVToPLNEQj/5Qxc6lVFATDiy6LjVHYhIPrLxzw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/sunos-x64/0.17.11:
    resolution: {integrity: sha512-1/gxTifDC9aXbV2xOfCbOceh5AlIidUrPsMpivgzo8P8zUtczlq1ncFpeN1ZyQJ9lVs2hILy1PG5KPp+w8QPPg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/sunos-x64/0.17.6:
    resolution: {integrity: sha512-gnMnMPg5pfMkZvhHee21KbKdc6W3GR8/JuE0Da1kjwpK6oiFU3nqfHuVPgUX2rsOx9N2SadSQTIYV1CIjYG+xw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/win32-arm64/0.16.17:
    resolution: {integrity: sha512-ga8+JqBDHY4b6fQAmOgtJJue36scANy4l/rL97W+0wYmijhxKetzZdKOJI7olaBaMhWt8Pac2McJdZLxXWUEQw==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/win32-arm64/0.17.11:
    resolution: {integrity: sha512-vtSfyx5yRdpiOW9yp6Ax0zyNOv9HjOAw8WaZg3dF5djEHKKm3UnoohftVvIJtRh0Ec7Hso0RIdTqZvPXJ7FdvQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/win32-arm64/0.17.6:
    resolution: {integrity: sha512-G95n7vP1UnGJPsVdKXllAJPtqjMvFYbN20e8RK8LVLhlTiSOH1sd7+Gt7rm70xiG+I5tM58nYgwWrLs6I1jHqg==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/win32-ia32/0.16.17:
    resolution: {integrity: sha512-WnsKaf46uSSF/sZhwnqE4L/F89AYNMiD4YtEcYekBt9Q7nj0DiId2XH2Ng2PHM54qi5oPrQ8luuzGszqi/veig==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/win32-ia32/0.17.11:
    resolution: {integrity: sha512-GFPSLEGQr4wHFTiIUJQrnJKZhZjjq4Sphf+mM76nQR6WkQn73vm7IsacmBRPkALfpOCHsopSvLgqdd4iUW2mYw==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/win32-ia32/0.17.6:
    resolution: {integrity: sha512-96yEFzLhq5bv9jJo5JhTs1gI+1cKQ83cUpyxHuGqXVwQtY5Eq54ZEsKs8veKtiKwlrNimtckHEkj4mRh4pPjsg==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/win32-x64/0.16.17:
    resolution: {integrity: sha512-y+EHuSchhL7FjHgvQL/0fnnFmO4T1bhvWANX6gcnqTjtnKWbTvUMCpGnv2+t+31d7RzyEAYAd4u2fnIhHL6N/Q==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/win32-x64/0.17.11:
    resolution: {integrity: sha512-N9vXqLP3eRL8BqSy8yn4Y98cZI2pZ8fyuHx6lKjiG2WABpT2l01TXdzq5Ma2ZUBzfB7tx5dXVhge8X9u0S70ZQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@esbuild/win32-x64/0.17.6:
    resolution: {integrity: sha512-n6d8MOyUrNp6G4VSpRcgjs5xj4A91svJSaiwLIDWVWEsZtpN5FA9NlBbZHDmAJc2e8e6SF4tkBD3HAvPF+7igA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@jridgewell/gen-mapping/0.1.1:
    resolution: {integrity: sha512-sQXCasFk+U8lWYEe66WxRDOE9PjVz4vSM51fTu3Hw+ClTpUSQb718772vH3pyS5pShp6lvQM7SxgIDXXXmOX7w==}
    engines: {node: '>=6.0.0'}
    dependencies:
      '@jridgewell/set-array': 1.1.2
      '@jridgewell/sourcemap-codec': 1.4.14
    dev: false

  /@jridgewell/gen-mapping/0.3.2:
    resolution: {integrity: sha512-mh65xKQAzI6iBcFzwv28KVWSmCkdRBWoOh+bYQGW3+6OZvbbN3TqMGo5hqYxQniRcH9F2VZIoJCm4pa3BPDK/A==}
    engines: {node: '>=6.0.0'}
    dependencies:
      '@jridgewell/set-array': 1.1.2
      '@jridgewell/sourcemap-codec': 1.4.14
      '@jridgewell/trace-mapping': 0.3.17
    dev: false

  /@jridgewell/resolve-uri/3.1.0:
    resolution: {integrity: sha512-F2msla3tad+Mfht5cJq7LSXcdudKTWCVYUgw6pLFOOHSTtZlj6SWNYAp+AhuqLmWdBO2X5hPrLcu8cVP8fy28w==}
    engines: {node: '>=6.0.0'}
    dev: false

  /@jridgewell/set-array/1.1.2:
    resolution: {integrity: sha512-xnkseuNADM0gt2bs+BvhO0p78Mk762YnZdsuzFV018NoG1Sj1SCQvpSqa7XUaTam5vAGasABV9qXASMKnFMwMw==}
    engines: {node: '>=6.0.0'}
    dev: false

  /@jridgewell/sourcemap-codec/1.4.14:
    resolution: {integrity: sha512-XPSJHWmi394fuUuzDnGz1wiKqWfo1yXecHQMRf2l6hztTO+nPru658AyDngaBe7isIxEkRsPR3FZh+s7iVa4Uw==}
    dev: false

  /@jridgewell/trace-mapping/0.3.17:
    resolution: {integrity: sha512-MCNzAp77qzKca9+W/+I0+sEpaUnZoeasnghNeVc41VZCEKaCH73Vq3BZZ/SzWIgrqE4H4ceI+p+b6C0mHf9T4g==}
    dependencies:
      '@jridgewell/resolve-uri': 3.1.0
      '@jridgewell/sourcemap-codec': 1.4.14
    dev: false

  /@vanilla-extract/babel-plugin-debug-ids/1.0.2:
    resolution: {integrity: sha512-LjnbQWGeMwaydmovx8jWUR8BxLtLiPyq0xz5C8G5OvFhsuJxvavLdrBHNNizvr1dq7/3qZGlPv0znsvU4P44YA==}
    dependencies:
      '@babel/core': 7.21.0
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@vanilla-extract/css/1.10.0:
    resolution: {integrity: sha512-s/EFfLDKbU1c2jnELNl+l14AufvIyryDh09ZZxRRqKjRKitiKvEjoiUy964pGKmfHngc9O0mkbzqrbhWaH+96Q==}
    dependencies:
      '@emotion/hash': 0.9.0
      '@vanilla-extract/private': 1.0.3
      ahocorasick: 1.0.2
      chalk: 4.1.2
      css-what: 5.1.0
      cssesc: 3.0.0
      csstype: 3.1.1
      deep-object-diff: 1.1.9
      deepmerge: 4.3.0
      media-query-parser: 2.0.2
      outdent: 0.8.0
    dev: false

  /@vanilla-extract/esbuild-plugin/2.2.2:
    resolution: {integrity: sha512-P2tlhBpAnoA4fx0xaYm8mcKBzorcyLC0O/c7ZpJL3aIKh6kdxdjDhOoWEXC2NuGJepEFsv0dXGJ99l424NvTKA==}
    dependencies:
      '@vanilla-extract/integration': 6.2.1
    transitivePeerDependencies:
      - '@types/node'
      - less
      - sass
      - stylus
      - sugarss
      - supports-color
      - terser
    dev: false

  /@vanilla-extract/integration/6.2.1:
    resolution: {integrity: sha512-+xYJz07G7TFAMZGrOqArOsURG+xcYvqctujEkANjw2McCBvGEK505RxQqOuNiA9Mi9hgGdNp2JedSa94f3eoLg==}
    dependencies:
      '@babel/core': 7.21.0
      '@babel/plugin-syntax-typescript': 7.20.0_@babel+core@7.21.0
      '@vanilla-extract/babel-plugin-debug-ids': 1.0.2
      '@vanilla-extract/css': 1.10.0
      esbuild: 0.17.6
      eval: 0.1.6
      find-up: 5.0.0
      javascript-stringify: 2.1.0
      lodash: 4.17.21
      mlly: 1.2.0
      outdent: 0.8.0
      vite: 4.1.4
      vite-node: 0.28.5
    transitivePeerDependencies:
      - '@types/node'
      - less
      - sass
      - stylus
      - sugarss
      - supports-color
      - terser
    dev: false

  /@vanilla-extract/private/1.0.3:
    resolution: {integrity: sha512-17kVyLq3ePTKOkveHxXuIJZtGYs+cSoev7BlP+Lf4916qfDhk/HBjvlYDe8egrea7LNPHKwSZJK/bzZC+Q6AwQ==}
    dev: false

  /acorn/8.8.2:
    resolution: {integrity: sha512-xjIYgE8HBrkpd/sJqOGNspf8uHG+NOHGOw6a/Urj8taM2EXfdNAH2oFcPeIFfsv3+kz/mJrS5VuMqbNLjCa2vw==}
    engines: {node: '>=0.4.0'}
    hasBin: true
    dev: false

  /ahocorasick/1.0.2:
    resolution: {integrity: sha512-hCOfMzbFx5IDutmWLAt6MZwOUjIfSM9G9FyVxytmE4Rs/5YDPWQrD/+IR1w+FweD9H2oOZEnv36TmkjhNURBVA==}
    dev: false

  /ansi-styles/3.2.1:
    resolution: {integrity: sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==}
    engines: {node: '>=4'}
    dependencies:
      color-convert: 1.9.3
    dev: false

  /ansi-styles/4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}
    dependencies:
      color-convert: 2.0.1
    dev: false

  /browserslist/4.21.5:
    resolution: {integrity: sha512-tUkiguQGW7S3IhB7N+c2MV/HZPSCPAAiYBZXLsBhFB/PCy6ZKKsZrmBayHV9fdGV/ARIfJ14NkxKzRDjvp7L6w==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true
    dependencies:
      caniuse-lite: 1.0.30001464
      electron-to-chromium: 1.4.328
      node-releases: 2.0.10
      update-browserslist-db: 1.0.10_browserslist@4.21.5
    dev: false

  /buffer-from/1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}
    dev: false

  /cac/6.7.14:
    resolution: {integrity: sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==}
    engines: {node: '>=8'}
    dev: false

  /caniuse-lite/1.0.30001464:
    resolution: {integrity: sha512-oww27MtUmusatpRpCGSOneQk2/l5czXANDSFvsc7VuOQ86s3ANhZetpwXNf1zY/zdfP63Xvjz325DAdAoES13g==}
    dev: false

  /chalk/2.4.2:
    resolution: {integrity: sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==}
    engines: {node: '>=4'}
    dependencies:
      ansi-styles: 3.2.1
      escape-string-regexp: 1.0.5
      supports-color: 5.5.0
    dev: false

  /chalk/4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0
    dev: false

  /color-convert/1.9.3:
    resolution: {integrity: sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==}
    dependencies:
      color-name: 1.1.3
    dev: false

  /color-convert/2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}
    dependencies:
      color-name: 1.1.4
    dev: false

  /color-name/1.1.3:
    resolution: {integrity: sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==}
    dev: false

  /color-name/1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}
    dev: false

  /convert-source-map/1.9.0:
    resolution: {integrity: sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==}
    dev: false

  /css-what/5.1.0:
    resolution: {integrity: sha512-arSMRWIIFY0hV8pIxZMEfmMI47Wj3R/aWpZDDxWYCPEiOMv6tfOrnpDtgxBYPEQD4V0Y/958+1TdC3iWTFcUPw==}
    engines: {node: '>= 6'}
    dev: false

  /cssesc/3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true
    dev: false

  /csstype/3.1.1:
    resolution: {integrity: sha512-DJR/VvkAvSZW9bTouZue2sSxDwdTN92uHjqeKVm+0dAqdfNykRzQ95tay8aXMBAAPpUiq4Qcug2L7neoRh2Egw==}
    dev: false

  /debug/4.3.4:
    resolution: {integrity: sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true
    dependencies:
      ms: 2.1.2
    dev: false

  /deep-object-diff/1.1.9:
    resolution: {integrity: sha512-Rn+RuwkmkDwCi2/oXOFS9Gsr5lJZu/yTGpK7wAaAIE75CC+LCGEZHpY6VQJa/RoJcrmaA/docWJZvYohlNkWPA==}
    dev: false

  /deepmerge/4.3.0:
    resolution: {integrity: sha512-z2wJZXrmeHdvYJp/Ux55wIjqo81G5Bp4c+oELTW+7ar6SogWHajt5a9gO3s3IDaGSAXjDk0vlQKN3rms8ab3og==}
    engines: {node: '>=0.10.0'}
    dev: false

  /electron-to-chromium/1.4.328:
    resolution: {integrity: sha512-DE9tTy2PNmy1v55AZAO542ui+MLC2cvINMK4P2LXGsJdput/ThVG9t+QGecPuAZZSgC8XoI+Jh9M1OG9IoNSCw==}
    dev: false

  /esbuild/0.16.17:
    resolution: {integrity: sha512-G8LEkV0XzDMNwXKgM0Jwu3nY3lSTwSGY6XbxM9cr9+s0T/qSV1q1JVPBGzm3dcjhCic9+emZDmMffkwgPeOeLg==}
    engines: {node: '>=12'}
    hasBin: true
    requiresBuild: true
    optionalDependencies:
      '@esbuild/android-arm': 0.16.17
      '@esbuild/android-arm64': 0.16.17
      '@esbuild/android-x64': 0.16.17
      '@esbuild/darwin-arm64': 0.16.17
      '@esbuild/darwin-x64': 0.16.17
      '@esbuild/freebsd-arm64': 0.16.17
      '@esbuild/freebsd-x64': 0.16.17
      '@esbuild/linux-arm': 0.16.17
      '@esbuild/linux-arm64': 0.16.17
      '@esbuild/linux-ia32': 0.16.17
      '@esbuild/linux-loong64': 0.16.17
      '@esbuild/linux-mips64el': 0.16.17
      '@esbuild/linux-ppc64': 0.16.17
      '@esbuild/linux-riscv64': 0.16.17
      '@esbuild/linux-s390x': 0.16.17
      '@esbuild/linux-x64': 0.16.17
      '@esbuild/netbsd-x64': 0.16.17
      '@esbuild/openbsd-x64': 0.16.17
      '@esbuild/sunos-x64': 0.16.17
      '@esbuild/win32-arm64': 0.16.17
      '@esbuild/win32-ia32': 0.16.17
      '@esbuild/win32-x64': 0.16.17
    dev: false

  /esbuild/0.17.11:
    resolution: {integrity: sha512-pAMImyokbWDtnA/ufPxjQg0fYo2DDuzAlqwnDvbXqHLphe+m80eF++perYKVm8LeTuj2zUuFXC+xgSVxyoHUdg==}
    engines: {node: '>=12'}
    hasBin: true
    requiresBuild: true
    optionalDependencies:
      '@esbuild/android-arm': 0.17.11
      '@esbuild/android-arm64': 0.17.11
      '@esbuild/android-x64': 0.17.11
      '@esbuild/darwin-arm64': 0.17.11
      '@esbuild/darwin-x64': 0.17.11
      '@esbuild/freebsd-arm64': 0.17.11
      '@esbuild/freebsd-x64': 0.17.11
      '@esbuild/linux-arm': 0.17.11
      '@esbuild/linux-arm64': 0.17.11
      '@esbuild/linux-ia32': 0.17.11
      '@esbuild/linux-loong64': 0.17.11
      '@esbuild/linux-mips64el': 0.17.11
      '@esbuild/linux-ppc64': 0.17.11
      '@esbuild/linux-riscv64': 0.17.11
      '@esbuild/linux-s390x': 0.17.11
      '@esbuild/linux-x64': 0.17.11
      '@esbuild/netbsd-x64': 0.17.11
      '@esbuild/openbsd-x64': 0.17.11
      '@esbuild/sunos-x64': 0.17.11
      '@esbuild/win32-arm64': 0.17.11
      '@esbuild/win32-ia32': 0.17.11
      '@esbuild/win32-x64': 0.17.11
    dev: false

  /esbuild/0.17.6:
    resolution: {integrity: sha512-TKFRp9TxrJDdRWfSsSERKEovm6v30iHnrjlcGhLBOtReE28Yp1VSBRfO3GTaOFMoxsNerx4TjrhzSuma9ha83Q==}
    engines: {node: '>=12'}
    hasBin: true
    requiresBuild: true
    optionalDependencies:
      '@esbuild/android-arm': 0.17.6
      '@esbuild/android-arm64': 0.17.6
      '@esbuild/android-x64': 0.17.6
      '@esbuild/darwin-arm64': 0.17.6
      '@esbuild/darwin-x64': 0.17.6
      '@esbuild/freebsd-arm64': 0.17.6
      '@esbuild/freebsd-x64': 0.17.6
      '@esbuild/linux-arm': 0.17.6
      '@esbuild/linux-arm64': 0.17.6
      '@esbuild/linux-ia32': 0.17.6
      '@esbuild/linux-loong64': 0.17.6
      '@esbuild/linux-mips64el': 0.17.6
      '@esbuild/linux-ppc64': 0.17.6
      '@esbuild/linux-riscv64': 0.17.6
      '@esbuild/linux-s390x': 0.17.6
      '@esbuild/linux-x64': 0.17.6
      '@esbuild/netbsd-x64': 0.17.6
      '@esbuild/openbsd-x64': 0.17.6
      '@esbuild/sunos-x64': 0.17.6
      '@esbuild/win32-arm64': 0.17.6
      '@esbuild/win32-ia32': 0.17.6
      '@esbuild/win32-x64': 0.17.6
    dev: false

  /escalade/3.1.1:
    resolution: {integrity: sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==}
    engines: {node: '>=6'}
    dev: false

  /escape-string-regexp/1.0.5:
    resolution: {integrity: sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==}
    engines: {node: '>=0.8.0'}
    dev: false

  /eval/0.1.6:
    resolution: {integrity: sha512-o0XUw+5OGkXw4pJZzQoXUk+H87DHuC+7ZE//oSrRGtatTmr12oTnLfg6QOq9DyTt0c/p4TwzgmkKrBzWTSizyQ==}
    engines: {node: '>= 0.8'}
    dependencies:
      require-like: 0.1.2
    dev: false

  /find-up/5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0
    dev: false

  /fsevents/2.3.2:
    resolution: {integrity: sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /function-bind/1.1.1:
    resolution: {integrity: sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==}
    dev: false

  /gensync/1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}
    dev: false

  /globals/11.12.0:
    resolution: {integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==}
    engines: {node: '>=4'}
    dev: false

  /has-flag/3.0.0:
    resolution: {integrity: sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==}
    engines: {node: '>=4'}
    dev: false

  /has-flag/4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}
    dev: false

  /has/1.0.3:
    resolution: {integrity: sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==}
    engines: {node: '>= 0.4.0'}
    dependencies:
      function-bind: 1.1.1
    dev: false

  /is-core-module/2.11.0:
    resolution: {integrity: sha512-RRjxlvLDkD1YJwDbroBHMb+cukurkDWNyHx7D3oNB5x9rb5ogcksMC5wHCadcXoo67gVr/+3GFySh3134zi6rw==}
    dependencies:
      has: 1.0.3
    dev: false

  /javascript-stringify/2.1.0:
    resolution: {integrity: sha512-JVAfqNPTvNq3sB/VHQJAFxN/sPgKnsKrCwyRt15zwNCdrMMJDdcEOdubuy+DuJYYdm0ox1J4uzEuYKkN+9yhVg==}
    dev: false

  /js-tokens/4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}
    dev: false

  /jsesc/2.5.2:
    resolution: {integrity: sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==}
    engines: {node: '>=4'}
    hasBin: true
    dev: false

  /json5/2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true
    dev: false

  /jsonc-parser/3.2.0:
    resolution: {integrity: sha512-gfFQZrcTc8CnKXp6Y4/CBT3fTc0OVuDofpre4aEeEpSBPV5X5v4+Vmx+8snU7RLPrNHPKSgLxGo9YuQzz20o+w==}
    dev: false

  /locate-path/6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}
    dependencies:
      p-locate: 5.0.0
    dev: false

  /lodash/4.17.21:
    resolution: {integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==}
    dev: false

  /lru-cache/5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}
    dependencies:
      yallist: 3.1.1
    dev: false

  /media-query-parser/2.0.2:
    resolution: {integrity: sha512-1N4qp+jE0pL5Xv4uEcwVUhIkwdUO3S/9gML90nqKA7v7FcOS5vUtatfzok9S9U1EJU8dHWlcv95WLnKmmxZI9w==}
    dependencies:
      '@babel/runtime': 7.21.0
    dev: false

  /mlly/1.2.0:
    resolution: {integrity: sha512-+c7A3CV0KGdKcylsI6khWyts/CYrGTrRVo4R/I7u/cUsy0Conxa6LUhiEzVKIw14lc2L5aiO4+SeVe4TeGRKww==}
    dependencies:
      acorn: 8.8.2
      pathe: 1.1.0
      pkg-types: 1.0.2
      ufo: 1.1.1
    dev: false

  /ms/2.1.2:
    resolution: {integrity: sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==}
    dev: false

  /nanoid/3.3.4:
    resolution: {integrity: sha512-MqBkQh/OHTS2egovRtLk45wEyNXwF+cokD+1YPf9u5VfJiRdAiRwB2froX5Co9Rh20xs4siNPm8naNotSD6RBw==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true
    dev: false

  /node-releases/2.0.10:
    resolution: {integrity: sha512-5GFldHPXVG/YZmFzJvKK2zDSzPKhEp0+ZR5SVaoSag9fsL5YgHbUHDfnG5494ISANDcK4KwPXAx2xqVEydmd7w==}
    dev: false

  /outdent/0.8.0:
    resolution: {integrity: sha512-KiOAIsdpUTcAXuykya5fnVVT+/5uS0Q1mrkRHcF89tpieSmY33O/tmc54CqwA+bfhbtEfZUNLHaPUiB9X3jt1A==}
    dev: false

  /p-limit/3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}
    dependencies:
      yocto-queue: 0.1.0
    dev: false

  /p-locate/5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}
    dependencies:
      p-limit: 3.1.0
    dev: false

  /path-exists/4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}
    dev: false

  /path-parse/1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}
    dev: false

  /pathe/1.1.0:
    resolution: {integrity: sha512-ODbEPR0KKHqECXW1GoxdDb+AZvULmXjVPy4rt+pGo2+TnjJTIPJQSVS6N63n8T2Ip+syHhbn52OewKicV0373w==}
    dev: false

  /picocolors/1.0.0:
    resolution: {integrity: sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==}
    dev: false

  /pkg-types/1.0.2:
    resolution: {integrity: sha512-hM58GKXOcj8WTqUXnsQyJYXdeAPbythQgEF3nTcEo+nkD49chjQ9IKm/QJy9xf6JakXptz86h7ecP2024rrLaQ==}
    dependencies:
      jsonc-parser: 3.2.0
      mlly: 1.2.0
      pathe: 1.1.0
    dev: false

  /postcss/8.4.21:
    resolution: {integrity: sha512-tP7u/Sn/dVxK2NnruI4H9BG+x+Wxz6oeZ1cJ8P6G/PZY0IKk4k/63TDsQf2kQq3+qoJeLm2kIBUNlZe3zgb4Zg==}
    engines: {node: ^10 || ^12 || >=14}
    dependencies:
      nanoid: 3.3.4
      picocolors: 1.0.0
      source-map-js: 1.0.2
    dev: false

  /regenerator-runtime/0.13.11:
    resolution: {integrity: sha512-kY1AZVr2Ra+t+piVaJ4gxaFaReZVH40AKNo7UCX6W+dEwBo/2oZJzqfuN1qLq1oL45o56cPaTXELwrTh8Fpggg==}
    dev: false

  /require-like/0.1.2:
    resolution: {integrity: sha512-oyrU88skkMtDdauHDuKVrgR+zuItqr6/c//FXzvmxRGMexSDc6hNvJInGW3LL46n+8b50RykrvwSUIIQH2LQ5A==}
    dev: false

  /resolve/1.22.1:
    resolution: {integrity: sha512-nBpuuYuY5jFsli/JIs1oldw6fOQCBioohqWZg/2hiaOybXOft4lonv85uDOKXdf8rhyK159cxU5cDcK/NKk8zw==}
    hasBin: true
    dependencies:
      is-core-module: 2.11.0
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0
    dev: false

  /rollup/3.19.1:
    resolution: {integrity: sha512-lAbrdN7neYCg/8WaoWn/ckzCtz+jr70GFfYdlf50OF7387HTg+wiuiqJRFYawwSPpqfqDNYqK7smY/ks2iAudg==}
    engines: {node: '>=14.18.0', npm: '>=8.0.0'}
    hasBin: true
    optionalDependencies:
      fsevents: 2.3.2
    dev: false

  /semver/6.3.0:
    resolution: {integrity: sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==}
    hasBin: true
    dev: false

  /source-map-js/1.0.2:
    resolution: {integrity: sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==}
    engines: {node: '>=0.10.0'}
    dev: false

  /source-map-support/0.5.21:
    resolution: {integrity: sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==}
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1
    dev: false

  /source-map/0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}
    dev: false

  /supports-color/5.5.0:
    resolution: {integrity: sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==}
    engines: {node: '>=4'}
    dependencies:
      has-flag: 3.0.0
    dev: false

  /supports-color/7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}
    dependencies:
      has-flag: 4.0.0
    dev: false

  /supports-preserve-symlinks-flag/1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}
    dev: false

  /to-fast-properties/2.0.0:
    resolution: {integrity: sha512-/OaKK0xYrs3DmxRYqL/yDc+FxFUVYhDlXMhRmv3z915w2HF1tnN1omB354j8VUGO/hbRzyD6Y3sA7v7GS/ceog==}
    engines: {node: '>=4'}
    dev: false

  /ufo/1.1.1:
    resolution: {integrity: sha512-MvlCc4GHrmZdAllBc0iUDowff36Q9Ndw/UzqmEKyrfSzokTd9ZCy1i+IIk5hrYKkjoYVQyNbrw7/F8XJ2rEwTg==}
    dev: false

  /update-browserslist-db/1.0.10_browserslist@4.21.5:
    resolution: {integrity: sha512-OztqDenkfFkbSG+tRxBeAnCVPckDBcvibKd35yDONx6OU8N7sqgwc7rCbkJ/WcYtVRZ4ba68d6byhC21GFh7sQ==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'
    dependencies:
      browserslist: 4.21.5
      escalade: 3.1.1
      picocolors: 1.0.0
    dev: false

  /vite-node/0.28.5:
    resolution: {integrity: sha512-LmXb9saMGlrMZbXTvOveJKwMTBTNUH66c8rJnQ0ZPNX+myPEol64+szRzXtV5ORb0Hb/91yq+/D3oERoyAt6LA==}
    engines: {node: '>=v14.16.0'}
    hasBin: true
    dependencies:
      cac: 6.7.14
      debug: 4.3.4
      mlly: 1.2.0
      pathe: 1.1.0
      picocolors: 1.0.0
      source-map: 0.6.1
      source-map-support: 0.5.21
      vite: 4.1.4
    transitivePeerDependencies:
      - '@types/node'
      - less
      - sass
      - stylus
      - sugarss
      - supports-color
      - terser
    dev: false

  /vite/4.1.4:
    resolution: {integrity: sha512-3knk/HsbSTKEin43zHu7jTwYWv81f8kgAL99G5NWBcA1LKvtvcVAC4JjBH1arBunO9kQka+1oGbrMKOjk4ZrBg==}
    engines: {node: ^14.18.0 || >=16.0.0}
    hasBin: true
    peerDependencies:
      '@types/node': '>= 14'
      less: '*'
      sass: '*'
      stylus: '*'
      sugarss: '*'
      terser: ^5.4.0
    peerDependenciesMeta:
      '@types/node':
        optional: true
      less:
        optional: true
      sass:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true
    dependencies:
      esbuild: 0.16.17
      postcss: 8.4.21
      resolve: 1.22.1
      rollup: 3.19.1
    optionalDependencies:
      fsevents: 2.3.2
    dev: false

  /yallist/3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}
    dev: false

  /yocto-queue/0.1.0:
    resolution: {integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==}
    engines: {node: '>=10'}
    dev: false
`.trim();