//commitlint.config.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
    },
    prompt: {
        alias: { fd: "docs: fix typos" },
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围（可选）:',
            customScope: '请输入自定义的提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
            footerPrefixsSelect: '选择关联issue前缀（可选）:',
            customFooterPrefixs: '输入自定义issue前缀 :',
            footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
            confirmCommit: '是否提交或修改commit ?'
        },
        types: [
            { value: "✨feat", name: "feat:       新的内容", emoji: ":sparkles:" },
            { value: "🐛fix", name: "fix:        修复一个Bug", emoji: ":bug:" },
            { value: "📝docs", name: "docs:       变更的只有文档", emoji: ":memo:" },
            { value: "💄style", name: "style:      空格, 分号等格式修复", emoji: ":lipstick:" },
            { value: "♻refactor", name: "refactor: ️   代码重构，注意和特性、修复区分开", emoji: ":recycle:" },
            { value: '⚡️perf', name: "perf:     ️  提升性能", emoji: ":zap:" },
            { value: "✅test", name: "test:       添加一个测试", emoji: ":white_check_mark:" },
            { value: "📦️build", name: "build:       Changes that affect the build system or external dependencies", emoji: ":package:" },
            { value: "🎡ci", name: "ci:         Changes to our CI configuration files and scripts", emoji: ":ferris_wheel:" },
            { value: "🔨chore", name: "chore:      开发工具变动(构建、脚手架工具等)", emoji: ":hammer:" },
            { value: "⏪revert", name: "revert:   ️  代码回退", emoji: ":rewind:" }
        ],
        useEmoji: true,
        emojiAlign: "center",
        themeColorCode: "",
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: "bottom",
        customScopesAlias: "custom",
        emptyScopesAlias: "empty",
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: "|",
        skipQuestions: [],
        issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
        customIssuePrefixsAlign: "top",
        emptyIssuePrefixsAlias: "skip",
        customIssuePrefixsAlias: "custom",
        allowCustomIssuePrefixs: true,
        allowEmptyIssuePrefixs: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: "",
        defaultIssues: "",
        defaultScope: "",
        defaultSubject: ""
    }
};
