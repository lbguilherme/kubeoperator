module.exports = {
  "env": {
    "es2020": true,
    "jest": true,
    "node": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "globals": {
    "BigInt": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-import",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",

    /* TypeScript rules */
    "@typescript-eslint/array-type": ["error", {
      "default": "array-simple"
    }],
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/brace-style": "error",
    "@typescript-eslint/naming-convention": [
      "warn",
      { "selector": "variableLike", "format": ["camelCase"] }
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-floating-promises": ["warn", {
      "ignoreVoid": true
    }],
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": ["error"],
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/semi": ["error", "always", {
      "omitLastInOneLineBlock": false
    }],
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "error",

    /* Code Rules */
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "consistent-return": "error",
    "curly": "error",
    "default-case": "error",
    "dot-notation": "error",
    "eqeqeq": ["error", "always"],
    "global-require": "error",
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "guard-for-in": "error",
    "no-alert": "error",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-constructor-return": "error",
    "no-div-regex": "error",
    "no-dupe-else-if": "error",
    "no-else-return": "error",
    "no-empty-function": ["error", {
      "allow": ["constructors"]
    }],
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-import-assign": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "off",
    "no-restricted-modules": ["error", "moment"],
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-setter-return": "error",
    "no-shadow": "error",
    "no-sync": ["warn", {
      "allowAtRootLevel": true
    }],
    "no-template-curly-in-string": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-void": "error",
    "prefer-named-capture-group": "warn",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "radix": "error",
    "require-atomic-updates": "off",
    "require-unicode-regexp": "error",
    "strict": "error",
    "wrap-iife": ["error", "any"],
    "yoda": "error",

    /* Style Rules */
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "block-spacing": "error",
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "eol-last": ["error", "always"],
    "func-name-matching": ["error", "always"],
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "declaration"],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    "key-spacing": ["error", {
      "beforeColon": false
    }],
    "keyword-spacing": "off",
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": ["error", "always"],
    "max-depth": ["error", 5],
    "max-nested-callbacks": ["error", 10],
    "max-params": ["error", 10],
    "max-statements-per-line": ["error", {
      "max": 2
    }],
    "multiline-comment-style": ["warn", "starred-block"],
    "new-parens": "error",
    "newline-per-chained-call": "off",
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": ["error", "properties"],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "padded-blocks": ["error", {
      "classes": "never"
    }],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": ["const", "let"],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": ["const", "let"],
        "next": ["const", "let", "var"]
      },
      {
        "blankLine": "always",
        "prev": "directive",
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": "directive",
        "next": "directive"
      },
      {
        "blankLine": "always",
        "prev": "break",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "block-like",
        "next": "*"
      }
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    "rest-spread-spacing": ["error", "never"],
    "semi-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "semi-style": ["error", "last"],
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": true
    }],
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", {
      "int32Hint": false
    }],
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    "switch-colon-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "yield-star-spacing": ["error", "before"]
  }
}