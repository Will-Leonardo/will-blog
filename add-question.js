#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 题目类别
const categories = {
  '1': 'framework',
  '2': 'browser',
  '3': 'engineering',
  '4': 'network',
  '5': 'algorithm',
  '6': 'project',
  '7': 'typescript',
  '8': 'testing'
};

const categoryNames = {
  'framework': 'Vue/React 框架原理',
  'browser': '浏览器原理与性能',
  'engineering': '工程化',
  'network': '网络协议',
  'algorithm': '算法与数据结构',
  'project': '项目实战',
  'typescript': 'TypeScript',
  'testing': '测试'
};

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提问函数
function question(query) {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
}

// 加载题目库
function loadQuestionBank() {
  const jsonPath = path.join(__dirname, 'question-bank.json');
  
  if (!fs.existsSync(jsonPath)) {
    console.error('❌ 未找到 question-bank.json 文件');
    process.exit(1);
  }
  
  try {
    const content = fs.readFileSync(jsonPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('❌ 读取题目库失败:', error.message);
    process.exit(1);
  }
}

// 保存题目库
function saveQuestionBank(questionBank) {
  const jsonPath = path.join(__dirname, 'question-bank.json');
  
  try {
    // 格式化 JSON，保持可读性
    const content = JSON.stringify(questionBank, null, 2);
    fs.writeFileSync(jsonPath, content, 'utf-8');
    console.log('✅ 题目已保存到 question-bank.json');
  } catch (error) {
    console.error('❌ 保存题目库失败:', error.message);
    process.exit(1);
  }
}

// 主函数
async function main() {
  console.log('📝 添加前端面试题\n');
  console.log('请选择题目类别：');
  console.log('1. Vue/React 框架原理');
  console.log('2. 浏览器原理与性能');
  console.log('3. 工程化');
  console.log('4. 网络协议');
  console.log('5. 算法与数据结构');
  console.log('6. 项目实战');
  console.log('7. TypeScript');
  console.log('8. 测试');
  console.log('');
  
  // 选择类别
  const categoryChoice = await question('请输入类别编号 (1-8): ');
  const category = categories[categoryChoice];
  
  if (!category) {
    console.error('❌ 无效的类别编号');
    rl.close();
    process.exit(1);
  }
  
  console.log(`\n✅ 已选择类别: ${categoryNames[category]}\n`);
  
  // 输入题目
  const title = await question('请输入题目: ');
  if (!title.trim()) {
    console.error('❌ 题目不能为空');
    rl.close();
    process.exit(1);
  }
  
  // 是否需要代码
  const needsCode = await question('是否需要代码实现？(y/n): ');
  const hasCode = needsCode.toLowerCase() === 'y' || needsCode.toLowerCase() === 'yes';
  
  // 题目来源
  const source = await question('题目来源 (例如: 掘金、牛客网、真实面试等，直接回车使用"真实面试题"): ') || '真实面试题';
  
  // 创建题目对象
  const newQuestion = {
    title: title.trim(),
    hasCode: hasCode,
    source: source.trim()
  };
  
  // 加载题目库
  const questionBank = loadQuestionBank();
  
  // 检查是否已存在相同题目
  const existingQuestions = questionBank[category] || [];
  const isDuplicate = existingQuestions.some(q => q.title === newQuestion.title);
  
  if (isDuplicate) {
    console.log('⚠️  该题目已存在，是否继续添加？(y/n): ');
    const confirm = await question('');
    if (confirm.toLowerCase() !== 'y' && confirm.toLowerCase() !== 'yes') {
      console.log('❌ 已取消添加');
      rl.close();
      return;
    }
  }
  
  // 添加到题目库
  if (!questionBank[category]) {
    questionBank[category] = [];
  }
  questionBank[category].push(newQuestion);
  
  // 保存题目库
  saveQuestionBank(questionBank);
  
  console.log(`\n✅ 题目已成功添加到 ${categoryNames[category]} 类别`);
  console.log(`📊 当前该类别共有 ${questionBank[category].length} 道题目`);
  
  // 询问是否继续添加
  const continueAdd = await question('\n是否继续添加题目？(y/n): ');
  if (continueAdd.toLowerCase() === 'y' || continueAdd.toLowerCase() === 'yes') {
    rl.close();
    main();
  } else {
    console.log('\n👋 再见！');
    rl.close();
  }
}

// 运行脚本
main().catch(error => {
  console.error('❌ 发生错误:', error.message);
  rl.close();
  process.exit(1);
});

