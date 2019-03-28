// flow-typed signature: 4ce791916afd06d3661db568e63c1fd3
// flow-typed version: <<STUB>>/pug_v^2.0.0-beta11

/**
 * This is an autogenerated libdef stub for:
 *
 *   'pug'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */


declare module 'pug' {
  declare type PugOptions = {
    filename?: string,
    basedir?: string,
    doctype?: string,
    pretty?: boolean | string,
    filters?: {
      [filterName: string]: Function
    },
    self?: boolean,
    debug?: boolean,
    compileDebug?: boolean,
    globals?: string[],
    cache?: boolean,
    inlineRuntimeFunctions?: boolean,
    name?: string
  };
  declare type PugLocals = {
    [varName: string]: any
  }
  declare type PugGenerator = (locals?: PugLocals) => string;
  declare type PugExports = {
    compileFile(path: string, options?: PugOptions): PugGenerator
  };
  declare module.exports: PugExports;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'pug/examples/attributes' {
  declare module.exports: any;
}

declare module 'pug/examples/code' {
  declare module.exports: any;
}

declare module 'pug/examples/dynamicscript' {
  declare module.exports: any;
}

declare module 'pug/examples/each' {
  declare module.exports: any;
}

declare module 'pug/examples/extend' {
  declare module.exports: any;
}

declare module 'pug/examples/form' {
  declare module.exports: any;
}

declare module 'pug/examples/includes' {
  declare module.exports: any;
}

declare module 'pug/examples/layout-debug' {
  declare module.exports: any;
}

declare module 'pug/examples/layout' {
  declare module.exports: any;
}

declare module 'pug/examples/mixins' {
  declare module.exports: any;
}

declare module 'pug/examples/rss' {
  declare module.exports: any;
}

declare module 'pug/examples/text' {
  declare module.exports: any;
}

declare module 'pug/examples/whitespace' {
  declare module.exports: any;
}

declare module 'pug/lib/index' {
  declare module.exports: any;
}

declare module 'pug/register' {
  declare module.exports: any;
}

declare module 'pug/support/benchmark' {
  declare module.exports: any;
}

declare module 'pug/test/cases/auxiliary/includable' {
  declare module.exports: any;
}

declare module 'pug/test/cases/javascript-new-lines' {
  declare module.exports: any;
}

declare module 'pug/test/duplicate-block/index.test' {
  declare module.exports: any;
}

declare module 'pug/test/error.reporting.test' {
  declare module.exports: any;
}

declare module 'pug/test/examples.test' {
  declare module.exports: any;
}

declare module 'pug/test/output-es2015/attr' {
  declare module.exports: any;
}

declare module 'pug/test/output/attrs-data' {
  declare module.exports: any;
}

declare module 'pug/test/output/attrs' {
  declare module.exports: any;
}

declare module 'pug/test/output/attrs.js' {
  declare module.exports: any;
}

declare module 'pug/test/output/attrs.unescaped' {
  declare module.exports: any;
}

declare module 'pug/test/output/basic' {
  declare module.exports: any;
}

declare module 'pug/test/output/blanks' {
  declare module.exports: any;
}

declare module 'pug/test/output/block-code' {
  declare module.exports: any;
}

declare module 'pug/test/output/block-expansion' {
  declare module.exports: any;
}

declare module 'pug/test/output/block-expansion.shorthands' {
  declare module.exports: any;
}

declare module 'pug/test/output/blockquote' {
  declare module.exports: any;
}

declare module 'pug/test/output/blocks-in-blocks' {
  declare module.exports: any;
}

declare module 'pug/test/output/blocks-in-if' {
  declare module.exports: any;
}

declare module 'pug/test/output/case-blocks' {
  declare module.exports: any;
}

declare module 'pug/test/output/case' {
  declare module.exports: any;
}

declare module 'pug/test/output/classes-empty' {
  declare module.exports: any;
}

declare module 'pug/test/output/classes' {
  declare module.exports: any;
}

declare module 'pug/test/output/code.conditionals' {
  declare module.exports: any;
}

declare module 'pug/test/output/code.escape' {
  declare module.exports: any;
}

declare module 'pug/test/output/code.iteration' {
  declare module.exports: any;
}

declare module 'pug/test/output/code' {
  declare module.exports: any;
}

declare module 'pug/test/output/comments-in-case' {
  declare module.exports: any;
}

declare module 'pug/test/output/comments' {
  declare module.exports: any;
}

declare module 'pug/test/output/comments.source' {
  declare module.exports: any;
}

declare module 'pug/test/output/doctype.custom' {
  declare module.exports: any;
}

declare module 'pug/test/output/doctype.default' {
  declare module.exports: any;
}

declare module 'pug/test/output/doctype.keyword' {
  declare module.exports: any;
}

declare module 'pug/test/output/each.else' {
  declare module.exports: any;
}

declare module 'pug/test/output/escape-chars' {
  declare module.exports: any;
}

declare module 'pug/test/output/escape-test' {
  declare module.exports: any;
}

declare module 'pug/test/output/escaping-class-attribute' {
  declare module.exports: any;
}

declare module 'pug/test/output/extends-duplicate-block' {
  declare module.exports: any;
}

declare module 'pug/test/output/filter-in-include' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters-empty' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters.coffeescript' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters.custom' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters.include.custom' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters.include' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters.inline' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters.less' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters.markdown' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters.nested' {
  declare module.exports: any;
}

declare module 'pug/test/output/filters.stylus' {
  declare module.exports: any;
}

declare module 'pug/test/output/html' {
  declare module.exports: any;
}

declare module 'pug/test/output/html5' {
  declare module.exports: any;
}

declare module 'pug/test/output/include-extends-from-root' {
  declare module.exports: any;
}

declare module 'pug/test/output/include-extends-of-common-template' {
  declare module.exports: any;
}

declare module 'pug/test/output/include-extends-relative' {
  declare module.exports: any;
}

declare module 'pug/test/output/include-only-text-body' {
  declare module.exports: any;
}

declare module 'pug/test/output/include-only-text' {
  declare module.exports: any;
}

declare module 'pug/test/output/include-with-text-head' {
  declare module.exports: any;
}

declare module 'pug/test/output/include-with-text' {
  declare module.exports: any;
}

declare module 'pug/test/output/include.script' {
  declare module.exports: any;
}

declare module 'pug/test/output/include.yield.nested' {
  declare module.exports: any;
}

declare module 'pug/test/output/includes-with-ext-js' {
  declare module.exports: any;
}

declare module 'pug/test/output/includes' {
  declare module.exports: any;
}

declare module 'pug/test/output/inheritance.alert-dialog' {
  declare module.exports: any;
}

declare module 'pug/test/output/inheritance.defaults' {
  declare module.exports: any;
}

declare module 'pug/test/output/inheritance.extend.include' {
  declare module.exports: any;
}

declare module 'pug/test/output/inheritance.extend' {
  declare module.exports: any;
}

declare module 'pug/test/output/inheritance.extend.mixins.block' {
  declare module.exports: any;
}

declare module 'pug/test/output/inheritance.extend.mixins' {
  declare module.exports: any;
}

declare module 'pug/test/output/inheritance.extend.recursive' {
  declare module.exports: any;
}

declare module 'pug/test/output/inheritance.extend.whitespace' {
  declare module.exports: any;
}

declare module 'pug/test/output/inheritance' {
  declare module.exports: any;
}

declare module 'pug/test/output/inline-tag' {
  declare module.exports: any;
}

declare module 'pug/test/output/intepolated-elements' {
  declare module.exports: any;
}

declare module 'pug/test/output/interpolated-mixin' {
  declare module.exports: any;
}

declare module 'pug/test/output/interpolation.escape' {
  declare module.exports: any;
}

declare module 'pug/test/output/layout.append' {
  declare module.exports: any;
}

declare module 'pug/test/output/layout.append.without-block' {
  declare module.exports: any;
}

declare module 'pug/test/output/layout.multi.append.prepend.block' {
  declare module.exports: any;
}

declare module 'pug/test/output/layout.prepend' {
  declare module.exports: any;
}

declare module 'pug/test/output/layout.prepend.without-block' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixin-at-end-of-file' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixin-block-with-space' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixin-hoist' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixin-via-include' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixin.attrs' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixin.block-tag-behaviour' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixin.blocks' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixin.merge' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixins-unused' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixins' {
  declare module.exports: any;
}

declare module 'pug/test/output/mixins.rest-args' {
  declare module.exports: any;
}

declare module 'pug/test/output/namespaces' {
  declare module.exports: any;
}

declare module 'pug/test/output/nesting' {
  declare module.exports: any;
}

declare module 'pug/test/output/pipeless-comments' {
  declare module.exports: any;
}

declare module 'pug/test/output/pipeless-filters' {
  declare module.exports: any;
}

declare module 'pug/test/output/pipeless-tag' {
  declare module.exports: any;
}

declare module 'pug/test/output/pre' {
  declare module.exports: any;
}

declare module 'pug/test/output/quotes' {
  declare module.exports: any;
}

declare module 'pug/test/output/regression.1794' {
  declare module.exports: any;
}

declare module 'pug/test/output/regression.784' {
  declare module.exports: any;
}

declare module 'pug/test/output/script.whitespace' {
  declare module.exports: any;
}

declare module 'pug/test/output/scripts' {
  declare module.exports: any;
}

declare module 'pug/test/output/scripts.non-js' {
  declare module.exports: any;
}

declare module 'pug/test/output/self-closing-html' {
  declare module.exports: any;
}

declare module 'pug/test/output/single-period' {
  declare module.exports: any;
}

declare module 'pug/test/output/source' {
  declare module.exports: any;
}

declare module 'pug/test/output/styles' {
  declare module.exports: any;
}

declare module 'pug/test/output/tag.interpolation' {
  declare module.exports: any;
}

declare module 'pug/test/output/tags.self-closing' {
  declare module.exports: any;
}

declare module 'pug/test/output/template' {
  declare module.exports: any;
}

declare module 'pug/test/output/text-block' {
  declare module.exports: any;
}

declare module 'pug/test/output/text' {
  declare module.exports: any;
}

declare module 'pug/test/output/utf8bom' {
  declare module.exports: any;
}

declare module 'pug/test/output/vars' {
  declare module.exports: any;
}

declare module 'pug/test/output/while' {
  declare module.exports: any;
}

declare module 'pug/test/output/xml' {
  declare module.exports: any;
}

declare module 'pug/test/output/yield-before-conditional-head' {
  declare module.exports: any;
}

declare module 'pug/test/output/yield-before-conditional' {
  declare module.exports: any;
}

declare module 'pug/test/output/yield-head' {
  declare module.exports: any;
}

declare module 'pug/test/output/yield-title-head' {
  declare module.exports: any;
}

declare module 'pug/test/output/yield-title' {
  declare module.exports: any;
}

declare module 'pug/test/output/yield' {
  declare module.exports: any;
}

declare module 'pug/test/pug.test' {
  declare module.exports: any;
}

declare module 'pug/test/run-es2015.test' {
  declare module.exports: any;
}

declare module 'pug/test/run-syntax-errors.test' {
  declare module.exports: any;
}

declare module 'pug/test/run-utils' {
  declare module.exports: any;
}

declare module 'pug/test/run.test' {
  declare module.exports: any;
}

// Filename aliases
declare module 'pug/examples/attributes.js' {
  declare module.exports: $Exports<'pug/examples/attributes'>;
}
declare module 'pug/examples/code.js' {
  declare module.exports: $Exports<'pug/examples/code'>;
}
declare module 'pug/examples/dynamicscript.js' {
  declare module.exports: $Exports<'pug/examples/dynamicscript'>;
}
declare module 'pug/examples/each.js' {
  declare module.exports: $Exports<'pug/examples/each'>;
}
declare module 'pug/examples/extend.js' {
  declare module.exports: $Exports<'pug/examples/extend'>;
}
declare module 'pug/examples/form.js' {
  declare module.exports: $Exports<'pug/examples/form'>;
}
declare module 'pug/examples/includes.js' {
  declare module.exports: $Exports<'pug/examples/includes'>;
}
declare module 'pug/examples/layout-debug.js' {
  declare module.exports: $Exports<'pug/examples/layout-debug'>;
}
declare module 'pug/examples/layout.js' {
  declare module.exports: $Exports<'pug/examples/layout'>;
}
declare module 'pug/examples/mixins.js' {
  declare module.exports: $Exports<'pug/examples/mixins'>;
}
declare module 'pug/examples/rss.js' {
  declare module.exports: $Exports<'pug/examples/rss'>;
}
declare module 'pug/examples/text.js' {
  declare module.exports: $Exports<'pug/examples/text'>;
}
declare module 'pug/examples/whitespace.js' {
  declare module.exports: $Exports<'pug/examples/whitespace'>;
}
declare module 'pug/lib/index.js' {
  declare module.exports: $Exports<'pug/lib/index'>;
}
declare module 'pug/register.js' {
  declare module.exports: $Exports<'pug/register'>;
}
declare module 'pug/support/benchmark.js' {
  declare module.exports: $Exports<'pug/support/benchmark'>;
}
declare module 'pug/test/cases/auxiliary/includable.js' {
  declare module.exports: $Exports<'pug/test/cases/auxiliary/includable'>;
}
declare module 'pug/test/cases/javascript-new-lines.js' {
  declare module.exports: $Exports<'pug/test/cases/javascript-new-lines'>;
}
declare module 'pug/test/duplicate-block/index.test.js' {
  declare module.exports: $Exports<'pug/test/duplicate-block/index.test'>;
}
declare module 'pug/test/error.reporting.test.js' {
  declare module.exports: $Exports<'pug/test/error.reporting.test'>;
}
declare module 'pug/test/examples.test.js' {
  declare module.exports: $Exports<'pug/test/examples.test'>;
}
declare module 'pug/test/output-es2015/attr.js' {
  declare module.exports: $Exports<'pug/test/output-es2015/attr'>;
}
declare module 'pug/test/output/attrs-data.js' {
  declare module.exports: $Exports<'pug/test/output/attrs-data'>;
}
declare module 'pug/test/output/attrs.js' {
  declare module.exports: $Exports<'pug/test/output/attrs'>;
}
declare module 'pug/test/output/attrs.js.js' {
  declare module.exports: $Exports<'pug/test/output/attrs.js'>;
}
declare module 'pug/test/output/attrs.unescaped.js' {
  declare module.exports: $Exports<'pug/test/output/attrs.unescaped'>;
}
declare module 'pug/test/output/basic.js' {
  declare module.exports: $Exports<'pug/test/output/basic'>;
}
declare module 'pug/test/output/blanks.js' {
  declare module.exports: $Exports<'pug/test/output/blanks'>;
}
declare module 'pug/test/output/block-code.js' {
  declare module.exports: $Exports<'pug/test/output/block-code'>;
}
declare module 'pug/test/output/block-expansion.js' {
  declare module.exports: $Exports<'pug/test/output/block-expansion'>;
}
declare module 'pug/test/output/block-expansion.shorthands.js' {
  declare module.exports: $Exports<'pug/test/output/block-expansion.shorthands'>;
}
declare module 'pug/test/output/blockquote.js' {
  declare module.exports: $Exports<'pug/test/output/blockquote'>;
}
declare module 'pug/test/output/blocks-in-blocks.js' {
  declare module.exports: $Exports<'pug/test/output/blocks-in-blocks'>;
}
declare module 'pug/test/output/blocks-in-if.js' {
  declare module.exports: $Exports<'pug/test/output/blocks-in-if'>;
}
declare module 'pug/test/output/case-blocks.js' {
  declare module.exports: $Exports<'pug/test/output/case-blocks'>;
}
declare module 'pug/test/output/case.js' {
  declare module.exports: $Exports<'pug/test/output/case'>;
}
declare module 'pug/test/output/classes-empty.js' {
  declare module.exports: $Exports<'pug/test/output/classes-empty'>;
}
declare module 'pug/test/output/classes.js' {
  declare module.exports: $Exports<'pug/test/output/classes'>;
}
declare module 'pug/test/output/code.conditionals.js' {
  declare module.exports: $Exports<'pug/test/output/code.conditionals'>;
}
declare module 'pug/test/output/code.escape.js' {
  declare module.exports: $Exports<'pug/test/output/code.escape'>;
}
declare module 'pug/test/output/code.iteration.js' {
  declare module.exports: $Exports<'pug/test/output/code.iteration'>;
}
declare module 'pug/test/output/code.js' {
  declare module.exports: $Exports<'pug/test/output/code'>;
}
declare module 'pug/test/output/comments-in-case.js' {
  declare module.exports: $Exports<'pug/test/output/comments-in-case'>;
}
declare module 'pug/test/output/comments.js' {
  declare module.exports: $Exports<'pug/test/output/comments'>;
}
declare module 'pug/test/output/comments.source.js' {
  declare module.exports: $Exports<'pug/test/output/comments.source'>;
}
declare module 'pug/test/output/doctype.custom.js' {
  declare module.exports: $Exports<'pug/test/output/doctype.custom'>;
}
declare module 'pug/test/output/doctype.default.js' {
  declare module.exports: $Exports<'pug/test/output/doctype.default'>;
}
declare module 'pug/test/output/doctype.keyword.js' {
  declare module.exports: $Exports<'pug/test/output/doctype.keyword'>;
}
declare module 'pug/test/output/each.else.js' {
  declare module.exports: $Exports<'pug/test/output/each.else'>;
}
declare module 'pug/test/output/escape-chars.js' {
  declare module.exports: $Exports<'pug/test/output/escape-chars'>;
}
declare module 'pug/test/output/escape-test.js' {
  declare module.exports: $Exports<'pug/test/output/escape-test'>;
}
declare module 'pug/test/output/escaping-class-attribute.js' {
  declare module.exports: $Exports<'pug/test/output/escaping-class-attribute'>;
}
declare module 'pug/test/output/extends-duplicate-block.js' {
  declare module.exports: $Exports<'pug/test/output/extends-duplicate-block'>;
}
declare module 'pug/test/output/filter-in-include.js' {
  declare module.exports: $Exports<'pug/test/output/filter-in-include'>;
}
declare module 'pug/test/output/filters-empty.js' {
  declare module.exports: $Exports<'pug/test/output/filters-empty'>;
}
declare module 'pug/test/output/filters.coffeescript.js' {
  declare module.exports: $Exports<'pug/test/output/filters.coffeescript'>;
}
declare module 'pug/test/output/filters.custom.js' {
  declare module.exports: $Exports<'pug/test/output/filters.custom'>;
}
declare module 'pug/test/output/filters.include.custom.js' {
  declare module.exports: $Exports<'pug/test/output/filters.include.custom'>;
}
declare module 'pug/test/output/filters.include.js' {
  declare module.exports: $Exports<'pug/test/output/filters.include'>;
}
declare module 'pug/test/output/filters.inline.js' {
  declare module.exports: $Exports<'pug/test/output/filters.inline'>;
}
declare module 'pug/test/output/filters.less.js' {
  declare module.exports: $Exports<'pug/test/output/filters.less'>;
}
declare module 'pug/test/output/filters.markdown.js' {
  declare module.exports: $Exports<'pug/test/output/filters.markdown'>;
}
declare module 'pug/test/output/filters.nested.js' {
  declare module.exports: $Exports<'pug/test/output/filters.nested'>;
}
declare module 'pug/test/output/filters.stylus.js' {
  declare module.exports: $Exports<'pug/test/output/filters.stylus'>;
}
declare module 'pug/test/output/html.js' {
  declare module.exports: $Exports<'pug/test/output/html'>;
}
declare module 'pug/test/output/html5.js' {
  declare module.exports: $Exports<'pug/test/output/html5'>;
}
declare module 'pug/test/output/include-extends-from-root.js' {
  declare module.exports: $Exports<'pug/test/output/include-extends-from-root'>;
}
declare module 'pug/test/output/include-extends-of-common-template.js' {
  declare module.exports: $Exports<'pug/test/output/include-extends-of-common-template'>;
}
declare module 'pug/test/output/include-extends-relative.js' {
  declare module.exports: $Exports<'pug/test/output/include-extends-relative'>;
}
declare module 'pug/test/output/include-only-text-body.js' {
  declare module.exports: $Exports<'pug/test/output/include-only-text-body'>;
}
declare module 'pug/test/output/include-only-text.js' {
  declare module.exports: $Exports<'pug/test/output/include-only-text'>;
}
declare module 'pug/test/output/include-with-text-head.js' {
  declare module.exports: $Exports<'pug/test/output/include-with-text-head'>;
}
declare module 'pug/test/output/include-with-text.js' {
  declare module.exports: $Exports<'pug/test/output/include-with-text'>;
}
declare module 'pug/test/output/include.script.js' {
  declare module.exports: $Exports<'pug/test/output/include.script'>;
}
declare module 'pug/test/output/include.yield.nested.js' {
  declare module.exports: $Exports<'pug/test/output/include.yield.nested'>;
}
declare module 'pug/test/output/includes-with-ext-js.js' {
  declare module.exports: $Exports<'pug/test/output/includes-with-ext-js'>;
}
declare module 'pug/test/output/includes.js' {
  declare module.exports: $Exports<'pug/test/output/includes'>;
}
declare module 'pug/test/output/inheritance.alert-dialog.js' {
  declare module.exports: $Exports<'pug/test/output/inheritance.alert-dialog'>;
}
declare module 'pug/test/output/inheritance.defaults.js' {
  declare module.exports: $Exports<'pug/test/output/inheritance.defaults'>;
}
declare module 'pug/test/output/inheritance.extend.include.js' {
  declare module.exports: $Exports<'pug/test/output/inheritance.extend.include'>;
}
declare module 'pug/test/output/inheritance.extend.js' {
  declare module.exports: $Exports<'pug/test/output/inheritance.extend'>;
}
declare module 'pug/test/output/inheritance.extend.mixins.block.js' {
  declare module.exports: $Exports<'pug/test/output/inheritance.extend.mixins.block'>;
}
declare module 'pug/test/output/inheritance.extend.mixins.js' {
  declare module.exports: $Exports<'pug/test/output/inheritance.extend.mixins'>;
}
declare module 'pug/test/output/inheritance.extend.recursive.js' {
  declare module.exports: $Exports<'pug/test/output/inheritance.extend.recursive'>;
}
declare module 'pug/test/output/inheritance.extend.whitespace.js' {
  declare module.exports: $Exports<'pug/test/output/inheritance.extend.whitespace'>;
}
declare module 'pug/test/output/inheritance.js' {
  declare module.exports: $Exports<'pug/test/output/inheritance'>;
}
declare module 'pug/test/output/inline-tag.js' {
  declare module.exports: $Exports<'pug/test/output/inline-tag'>;
}
declare module 'pug/test/output/intepolated-elements.js' {
  declare module.exports: $Exports<'pug/test/output/intepolated-elements'>;
}
declare module 'pug/test/output/interpolated-mixin.js' {
  declare module.exports: $Exports<'pug/test/output/interpolated-mixin'>;
}
declare module 'pug/test/output/interpolation.escape.js' {
  declare module.exports: $Exports<'pug/test/output/interpolation.escape'>;
}
declare module 'pug/test/output/layout.append.js' {
  declare module.exports: $Exports<'pug/test/output/layout.append'>;
}
declare module 'pug/test/output/layout.append.without-block.js' {
  declare module.exports: $Exports<'pug/test/output/layout.append.without-block'>;
}
declare module 'pug/test/output/layout.multi.append.prepend.block.js' {
  declare module.exports: $Exports<'pug/test/output/layout.multi.append.prepend.block'>;
}
declare module 'pug/test/output/layout.prepend.js' {
  declare module.exports: $Exports<'pug/test/output/layout.prepend'>;
}
declare module 'pug/test/output/layout.prepend.without-block.js' {
  declare module.exports: $Exports<'pug/test/output/layout.prepend.without-block'>;
}
declare module 'pug/test/output/mixin-at-end-of-file.js' {
  declare module.exports: $Exports<'pug/test/output/mixin-at-end-of-file'>;
}
declare module 'pug/test/output/mixin-block-with-space.js' {
  declare module.exports: $Exports<'pug/test/output/mixin-block-with-space'>;
}
declare module 'pug/test/output/mixin-hoist.js' {
  declare module.exports: $Exports<'pug/test/output/mixin-hoist'>;
}
declare module 'pug/test/output/mixin-via-include.js' {
  declare module.exports: $Exports<'pug/test/output/mixin-via-include'>;
}
declare module 'pug/test/output/mixin.attrs.js' {
  declare module.exports: $Exports<'pug/test/output/mixin.attrs'>;
}
declare module 'pug/test/output/mixin.block-tag-behaviour.js' {
  declare module.exports: $Exports<'pug/test/output/mixin.block-tag-behaviour'>;
}
declare module 'pug/test/output/mixin.blocks.js' {
  declare module.exports: $Exports<'pug/test/output/mixin.blocks'>;
}
declare module 'pug/test/output/mixin.merge.js' {
  declare module.exports: $Exports<'pug/test/output/mixin.merge'>;
}
declare module 'pug/test/output/mixins-unused.js' {
  declare module.exports: $Exports<'pug/test/output/mixins-unused'>;
}
declare module 'pug/test/output/mixins.js' {
  declare module.exports: $Exports<'pug/test/output/mixins'>;
}
declare module 'pug/test/output/mixins.rest-args.js' {
  declare module.exports: $Exports<'pug/test/output/mixins.rest-args'>;
}
declare module 'pug/test/output/namespaces.js' {
  declare module.exports: $Exports<'pug/test/output/namespaces'>;
}
declare module 'pug/test/output/nesting.js' {
  declare module.exports: $Exports<'pug/test/output/nesting'>;
}
declare module 'pug/test/output/pipeless-comments.js' {
  declare module.exports: $Exports<'pug/test/output/pipeless-comments'>;
}
declare module 'pug/test/output/pipeless-filters.js' {
  declare module.exports: $Exports<'pug/test/output/pipeless-filters'>;
}
declare module 'pug/test/output/pipeless-tag.js' {
  declare module.exports: $Exports<'pug/test/output/pipeless-tag'>;
}
declare module 'pug/test/output/pre.js' {
  declare module.exports: $Exports<'pug/test/output/pre'>;
}
declare module 'pug/test/output/quotes.js' {
  declare module.exports: $Exports<'pug/test/output/quotes'>;
}
declare module 'pug/test/output/regression.1794.js' {
  declare module.exports: $Exports<'pug/test/output/regression.1794'>;
}
declare module 'pug/test/output/regression.784.js' {
  declare module.exports: $Exports<'pug/test/output/regression.784'>;
}
declare module 'pug/test/output/script.whitespace.js' {
  declare module.exports: $Exports<'pug/test/output/script.whitespace'>;
}
declare module 'pug/test/output/scripts.js' {
  declare module.exports: $Exports<'pug/test/output/scripts'>;
}
declare module 'pug/test/output/scripts.non-js.js' {
  declare module.exports: $Exports<'pug/test/output/scripts.non-js'>;
}
declare module 'pug/test/output/self-closing-html.js' {
  declare module.exports: $Exports<'pug/test/output/self-closing-html'>;
}
declare module 'pug/test/output/single-period.js' {
  declare module.exports: $Exports<'pug/test/output/single-period'>;
}
declare module 'pug/test/output/source.js' {
  declare module.exports: $Exports<'pug/test/output/source'>;
}
declare module 'pug/test/output/styles.js' {
  declare module.exports: $Exports<'pug/test/output/styles'>;
}
declare module 'pug/test/output/tag.interpolation.js' {
  declare module.exports: $Exports<'pug/test/output/tag.interpolation'>;
}
declare module 'pug/test/output/tags.self-closing.js' {
  declare module.exports: $Exports<'pug/test/output/tags.self-closing'>;
}
declare module 'pug/test/output/template.js' {
  declare module.exports: $Exports<'pug/test/output/template'>;
}
declare module 'pug/test/output/text-block.js' {
  declare module.exports: $Exports<'pug/test/output/text-block'>;
}
declare module 'pug/test/output/text.js' {
  declare module.exports: $Exports<'pug/test/output/text'>;
}
declare module 'pug/test/output/utf8bom.js' {
  declare module.exports: $Exports<'pug/test/output/utf8bom'>;
}
declare module 'pug/test/output/vars.js' {
  declare module.exports: $Exports<'pug/test/output/vars'>;
}
declare module 'pug/test/output/while.js' {
  declare module.exports: $Exports<'pug/test/output/while'>;
}
declare module 'pug/test/output/xml.js' {
  declare module.exports: $Exports<'pug/test/output/xml'>;
}
declare module 'pug/test/output/yield-before-conditional-head.js' {
  declare module.exports: $Exports<'pug/test/output/yield-before-conditional-head'>;
}
declare module 'pug/test/output/yield-before-conditional.js' {
  declare module.exports: $Exports<'pug/test/output/yield-before-conditional'>;
}
declare module 'pug/test/output/yield-head.js' {
  declare module.exports: $Exports<'pug/test/output/yield-head'>;
}
declare module 'pug/test/output/yield-title-head.js' {
  declare module.exports: $Exports<'pug/test/output/yield-title-head'>;
}
declare module 'pug/test/output/yield-title.js' {
  declare module.exports: $Exports<'pug/test/output/yield-title'>;
}
declare module 'pug/test/output/yield.js' {
  declare module.exports: $Exports<'pug/test/output/yield'>;
}
declare module 'pug/test/pug.test.js' {
  declare module.exports: $Exports<'pug/test/pug.test'>;
}
declare module 'pug/test/run-es2015.test.js' {
  declare module.exports: $Exports<'pug/test/run-es2015.test'>;
}
declare module 'pug/test/run-syntax-errors.test.js' {
  declare module.exports: $Exports<'pug/test/run-syntax-errors.test'>;
}
declare module 'pug/test/run-utils.js' {
  declare module.exports: $Exports<'pug/test/run-utils'>;
}
declare module 'pug/test/run.test.js' {
  declare module.exports: $Exports<'pug/test/run.test'>;
}