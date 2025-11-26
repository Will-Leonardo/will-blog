#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 加载题目库
function loadQuestionBank() {
    const jsonPath = path.join(__dirname, 'question-bank.json');

    if (fs.existsSync(jsonPath)) {
        try {
            const content = fs.readFileSync(jsonPath, 'utf-8');
            return JSON.parse(content);
        } catch (error) {
            console.error('❌ 读取题目库失败:', error.message);
            console.log('使用内置题目库...');
            return getBuiltInQuestionBank();
        }
    } else {
        console.log('⚠️  未找到 question-bank.json，使用内置题目库...');
        return getBuiltInQuestionBank();
    }
}

// 内置题目库（作为备用）
function getBuiltInQuestionBank() {
    return {
        // Vue/React 框架原理
        framework: [{
                title: 'Vue3 的响应式原理和 Vue2 有什么区别？Proxy 相比 Object.defineProperty 的优势是什么？',
                hasCode: false
            },
            {
                title: 'Vue 的 nextTick 原理是什么？什么时候需要使用 nextTick？请说明其实现机制。',
                hasCode: false
            },
            {
                title: 'React 的虚拟 DOM 和 Vue 的虚拟 DOM 有什么区别？请说明 diff 算法的差异。',
                hasCode: false
            },
            {
                title: 'Vue 的 keep-alive 组件是如何实现的？它如何缓存组件状态？',
                hasCode: false
            },
            {
                title: '请解释 React Hooks 的实现原理，为什么 Hooks 不能在条件语句中使用？',
                hasCode: false
            },
            {
                title: 'Vue 的 computed 和 watch 的区别是什么？它们的实现原理分别是什么？',
                hasCode: false
            },
            {
                title: '请解释 Vue 的组件通信方式，父子组件、兄弟组件、跨级组件如何通信？',
                hasCode: false
            },
            {
                title: 'React 的 Fiber 架构是什么？它解决了什么问题？',
                hasCode: false
            },
            {
                title: 'Vue 的模板编译原理是什么？template 如何转换为 render 函数？',
                hasCode: false
            },
            {
                title: '请解释 React 的合成事件（SyntheticEvent）机制，为什么要使用合成事件？',
                hasCode: false
            }
        ],

        // 浏览器原理与性能
        browser: [{
                title: '请解释一下浏览器的事件循环机制，宏任务和微任务的区别是什么？请给出执行顺序分析。',
                hasCode: false
            },
            {
                title: '前端性能优化有哪些策略？请结合实际项目经验，说说你用过哪些优化手段，效果如何？',
                hasCode: false
            },
            {
                title: '浏览器渲染原理是什么？请详细说明从输入 URL 到页面渲染的完整过程。',
                hasCode: false
            },
            {
                title: '什么是重排（reflow）和重绘（repaint）？如何减少重排和重绘？',
                hasCode: false
            },
            {
                title: '请解释浏览器的同源策略，什么是跨域？有哪些跨域解决方案？',
                hasCode: false
            },
            {
                title: '浏览器缓存机制有哪些？强缓存和协商缓存的区别是什么？',
                hasCode: false
            },
            {
                title: '请解释浏览器的垃圾回收机制，V8 引擎的垃圾回收算法是什么？',
                hasCode: false
            },
            {
                title: '前端内存泄漏的原因有哪些？如何排查和避免内存泄漏？',
                hasCode: false
            },
            {
                title: '什么是关键渲染路径（Critical Rendering Path）？如何优化？',
                hasCode: false
            },
            {
                title: '请解释浏览器的工作线程，Web Worker 和 Service Worker 的区别是什么？',
                hasCode: false
            }
        ],

        // 工程化
        engineering: [{
                title: '什么是 Webpack 的 Tree Shaking？它是如何工作的？在什么情况下 Tree Shaking 会失效？',
                hasCode: false
            },
            {
                title: 'Webpack 和 Vite 的区别是什么？Vite 为什么开发时更快？',
                hasCode: false
            },
            {
                title: 'Webpack 的构建流程是什么？loader 和 plugin 的区别是什么？',
                hasCode: false
            },
            {
                title: '请解释模块化的发展历程，CommonJS、AMD、ES Module 的区别是什么？',
                hasCode: false
            },
            {
                title: '如何优化 Webpack 的打包速度和体积？有哪些具体的优化策略？',
                hasCode: false
            },
            {
                title: '什么是代码分割（Code Splitting）？如何实现按需加载？',
                hasCode: false
            },
            {
                title: '请解释 Babel 的编译原理，它如何将 ES6+ 代码转换为 ES5？',
                hasCode: false
            },
            {
                title: '如何实现前端项目的 CI/CD？你使用过哪些 CI/CD 工具？',
                hasCode: false
            },
            {
                title: '前端项目的版本管理策略是什么？如何管理依赖版本？',
                hasCode: false
            },
            {
                title: '如何实现前端项目的错误监控和性能监控？',
                hasCode: false
            }
        ],

        // 网络协议
        network: [{
                title: 'HTTP/2 相比 HTTP/1.1 有哪些改进？HTTP/3 又带来了什么新特性？',
                hasCode: false
            },
            {
                title: 'TCP 和 UDP 的区别是什么？TCP 的三次握手和四次挥手过程是什么？',
                hasCode: false
            },
            {
                title: 'HTTPS 的实现原理是什么？SSL/TLS 握手过程是怎样的？',
                hasCode: false
            },
            {
                title: 'HTTP 状态码有哪些？301、302、304 的区别是什么？',
                hasCode: false
            },
            {
                title: '请解释 HTTP 的缓存机制，Cache-Control 和 Expires 的区别是什么？',
                hasCode: false
            },
            {
                title: '什么是 CDN？CDN 的工作原理是什么？如何选择合适的 CDN？',
                hasCode: false
            },
            {
                title: 'WebSocket 和 HTTP 的区别是什么？WebSocket 是如何建立连接的？',
                hasCode: false
            },
            {
                title: '请解释 RESTful API 的设计原则，什么是 RESTful 风格？',
                hasCode: false
            },
            {
                title: '什么是 GraphQL？它和 RESTful API 的区别是什么？',
                hasCode: false
            },
            {
                title: '请解释 CORS 预检请求（preflight request）的机制，什么情况下会触发？',
                hasCode: false
            }
        ],

        // 算法与数据结构
        algorithm: [{
                title: '请实现一个深拷贝函数，需要考虑哪些边界情况？如何处理循环引用？',
                hasCode: true
            },
            {
                title: '请实现一个防抖（debounce）和节流（throttle）函数，并说明它们的应用场景。',
                hasCode: true
            },
            {
                title: '请实现一个 Promise，要求支持 then、catch、finally 方法。',
                hasCode: true
            },
            {
                title: '请实现一个函数，实现数组的扁平化，支持指定深度。',
                hasCode: true
            },
            {
                title: '请实现一个函数，实现数组去重，要求考虑多种数据类型。',
                hasCode: true
            },
            {
                title: '请实现一个函数，实现 call、apply、bind 方法。',
                hasCode: true
            },
            {
                title: '请实现一个函数，实现 instanceof 的功能。',
                hasCode: true
            },
            {
                title: '请实现一个函数，实现 new 操作符的功能。',
                hasCode: true
            },
            {
                title: '请实现一个函数，实现数组的 reduce 方法。',
                hasCode: true
            },
            {
                title: '请实现一个函数，实现链表的反转。',
                hasCode: true
            }
        ],

        // 项目实战
        project: [{
                title: '请设计一个前端权限管理系统，如何实现路由权限、按钮权限、接口权限的控制？',
                hasCode: false
            },
            {
                title: '前端如何进行错误监控和上报？如何区分 JS 错误、资源加载错误、Promise 错误等？',
                hasCode: false
            },
            {
                title: '请解释一下前端路由的实现原理？hash 路由和 history 路由的区别是什么？各自的优缺点？',
                hasCode: false
            },
            {
                title: '如何实现一个状态管理方案？请对比 Vuex、Pinia、Redux 的差异。',
                hasCode: false
            },
            {
                title: '请设计一个前端组件库，需要考虑哪些方面？如何实现组件的按需加载？',
                hasCode: false
            },
            {
                title: '如何实现前端的国际化（i18n）方案？需要考虑哪些问题？',
                hasCode: false
            },
            {
                title: '如何实现一个微前端架构？qiankun、single-spa 等框架的原理是什么？',
                hasCode: false
            },
            {
                title: '请设计一个前端数据可视化方案，如何实现大数据量的渲染优化？',
                hasCode: false
            },
            {
                title: '如何实现一个前端拖拽系统？需要考虑哪些技术点？',
                hasCode: false
            },
            {
                title: '请设计一个前端埋点系统，如何实现无侵入式的数据采集？',
                hasCode: false
            }
        ],

        // TypeScript
        typescript: [{
                title: 'TypeScript 的类型系统有哪些特性？泛型、联合类型、交叉类型的区别是什么？',
                hasCode: false
            },
            {
                title: 'TypeScript 的装饰器（Decorator）是什么？如何使用？',
                hasCode: false
            },
            {
                title: 'TypeScript 的 namespace 和 module 的区别是什么？',
                hasCode: false
            },
            {
                title: '如何实现 TypeScript 的类型推断？请举例说明。',
                hasCode: false
            },
            {
                title: 'TypeScript 的声明文件（.d.ts）是什么？如何编写？',
                hasCode: false
            }
        ],

        // 测试
        testing: [{
                title: '前端单元测试有哪些框架？Jest、Vitest 的区别是什么？',
                hasCode: false
            },
            {
                title: '如何编写 Vue/React 组件的单元测试？需要考虑哪些场景？',
                hasCode: false
            },
            {
                title: '什么是 E2E 测试？Cypress、Playwright 的区别是什么？',
                hasCode: false
            }
        ]
    };
}

// 加载题目库
const questionBank = loadQuestionBank();

// 简单的确定性随机数生成器（基于种子）
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// 根据日期生成固定序列的题目（确保每天题目不同）
function getQuestionsForDate(dateStr) {
    // 将日期字符串转换为数字种子
    const date = new Date(dateStr);
    let seed = date.getTime();

    // 使用简单的哈希函数确保每天题目不同
    const categories = Object.keys(questionBank);
    const selectedQuestions = [];
    const selectedTitles = new Set(); // 用于去重

    // 从每个类别中按比例选择题目
    const questionCountPerCategory = {
        framework: 2,
        browser: 2,
        engineering: 1,
        network: 1,
        algorithm: 2,
        project: 1,
        typescript: 0.5, // 偶尔出现
        testing: 0.5 // 偶尔出现
    };

    let questionIndex = 0;

    // 先按类别选择题目
    categories.forEach(category => {
        const questions = questionBank[category];
        const count = questionCountPerCategory[category];

        // 处理小数（概率选择）
        const random = seededRandom(seed + questionIndex);
        const actualCount = random < (count % 1) ? Math.ceil(count) : Math.floor(count);

        for (let i = 0; i < actualCount && selectedQuestions.length < 10; i++) {
            // 使用日期种子和索引生成伪随机数
            const index = Math.floor(seededRandom(seed + questionIndex * 1000) * questions.length);
            const question = questions[index];

            // 检查是否已选择（通过标题去重）
            if (!selectedTitles.has(question.title)) {
                selectedQuestions.push(question);
                selectedTitles.add(question.title);
            }
            questionIndex++;
        }
    });

    // 如果题目不够10个，从所有类别中随机补充
    const allQuestions = [];
    categories.forEach(category => {
        allQuestions.push(...questionBank[category]);
    });

    while (selectedQuestions.length < 10 && questionIndex < 10000) {
        const randomIndex = Math.floor(seededRandom(seed + questionIndex * 3000) * allQuestions.length);
        const question = allQuestions[randomIndex];

        if (!selectedTitles.has(question.title)) {
            selectedQuestions.push(question);
            selectedTitles.add(question.title);
        }
        questionIndex++;
    }

    return selectedQuestions.slice(0, 10);
}

// 生成文档内容
function generateDocument(dateStr, questions) {
    const dayNumber = Math.floor((new Date(dateStr).getTime() - new Date('2025-11-04').getTime()) / (1000 * 60 * 60 * 24)) + 1;

    let content = `---
title: 前端面试刷题记录 - Day ${dayNumber}
date: ${dateStr}
categories: 
 - 面试刷题
---

## ${dateStr} 刷题记录

`;

    questions.forEach((q, index) => {
        content += `### 题目 ${index + 1}：${q.title}

::: details 参考答案

:::


`;

        if (q.hasCode) {
            content += `**代码实现：**

\`\`\`js

\`\`\`

`;
        }

        content += `---

`;
    });


    return content;
}

// 主函数
function main() {
    // 获取日期参数，如果没有则使用今天
    const dateArg = process.argv[2];
    let dateStr;

    if (dateArg) {
        // 验证日期格式
        const date = new Date(dateArg);
        if (isNaN(date.getTime())) {
            console.error('❌ 日期格式错误，请使用 YYYY-MM-DD 格式');
            process.exit(1);
        }
        dateStr = dateArg;
    } else {
        // 使用今天的日期
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        dateStr = `${year}-${month}-${day}`;
    }

    // 生成题目
    const questions = getQuestionsForDate(dateStr);

    // 生成文档内容
    const content = generateDocument(dateStr, questions);

    // 确定文件路径
    const year = dateStr.split('-')[0];
    const filePath = path.join(__dirname, 'blogs', year, `${dateStr}.md`);
    const dirPath = path.dirname(filePath);

    // 检查文件是否已存在
    if (fs.existsSync(filePath)) {
        console.log(`⚠️  文件已存在: ${filePath}`);
        console.log('是否覆盖？(y/n)');
        // 简单处理：直接覆盖
        console.log('自动覆盖文件...');
    }

    // 确保目录存在
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, {
            recursive: true
        });
    }

    // 写入文件
    fs.writeFileSync(filePath, content, 'utf-8');

    console.log(`✅ 成功生成刷题记录: ${filePath}`);
    console.log(`📝 共 ${questions.length} 道题目`);

    // 显示题目统计
    const stats = {};
    questions.forEach(q => {
        const source = q.source || '未知';
        stats[source] = (stats[source] || 0) + 1;
    });
    console.log('📊 题目来源统计:', stats);
}

// 运行脚本
main();