// 首頁「常見問題」：用問句做標題、每段答案獨立成立，方便搜索引擎與 AI 直接引用
// 佔位符：{{tools}} 工具總數、{{lines}} 線路數、{{own}} 自建工具數、{{third}} 第三方數、{{date}} 最後更新日
// 答案只寫可以核實的事實；站點數據處理方式改變時，同步更新這裡與 /privacy/
import type { Locale } from './routes';

export interface FaqCopy {
  title: string;
  updated: string;
  items: [question: string, answer: string][];
}

export const FAQ: Record<Locale, FaqCopy> = {
  en: {
    title: 'Questions about OumaShu',
    updated: 'Updated {{date}}',
    items: [
      ['What is OumaShu?', 'OumaShu (櫻滿集) is a free directory of {{tools}} online tools, grouped into {{lines}} lines like a train map: image, video, audio, text, learning, games and more. Each tool opens straight in the browser, with nothing to install and no account to create.'],
      ['Are the tools free? Do I need an account?', 'Yes, every tool listed is free to use and none needs an OumaShu account. OumaShu itself is paid for by Google AdSense ads. A few third-party sites may offer optional accounts or paid extras of their own.'],
      ['Are my files uploaded?', 'Most image, text and audio tools built for OumaShu process files locally in your browser, so the files never leave your device. Tools that need a server by nature, such as AI conversation practice or the temporary chat room, send data to their own servers. Third-party sites follow their own privacy policies.'],
      ['Who makes OumaShu?', 'OumaShu is built and maintained by Rollkey, an independent developer (@Rollkey4 on X). {{own}} of the {{tools}} tools are Rollkey’s own projects; the other {{third}} are third-party sites, marked “3rd Party”.'],
      ['How are tools chosen, and how current is the list?', 'A tool is listed only if it is free, works in a web browser and needs no sign-up to try. Each entry is checked when it is added or changed. The list was last updated on {{date}}.'],
    ],
  },
  'zh-CN': {
    title: '关于 OumaShu 的常见问题',
    updated: '更新于 {{date}}',
    items: [
      ['OumaShu 是什么？', 'OumaShu（櫻滿集）是一个免费在线工具导航站，收录 {{tools}} 个工具，像电车线路图一样分成 {{lines}} 条线路：图片、视频、音频、文本、学习、游戏等。每个工具都在浏览器里直接打开，无需安装，也不用注册账号。'],
      ['工具免费吗？需要注册吗？', '是的，收录的每个工具都可以免费使用，也都不需要 OumaShu 账号。OumaShu 本身靠 Google AdSense 广告维持运营。少数第三方网站可能提供它们自己的可选账号或付费功能。'],
      ['我的文件会被上传吗？', 'OumaShu 自建的大部分图片、文本和音频工具都在你的浏览器本地处理文件，文件不会离开你的设备。本身就需要服务器的工具，比如 AI 口语陪练和临时聊天室，会把数据发送到它们自己的服务器。第三方网站遵循各自的隐私政策。'],
      ['OumaShu 是谁做的？', 'OumaShu 由独立开发者 Rollkey（X 上的 @Rollkey4）开发和维护。{{tools}} 个工具中有 {{own}} 个是 Rollkey 自己的项目，另外 {{third}} 个是第三方网站，标有“第三方”。'],
      ['工具是怎么挑选的？列表多久更新一次？', '只有免费、能在浏览器里使用、无需注册就能试用的工具才会被收录。每个条目在新增或变更时都会检查一遍。列表最近一次更新于 {{date}}。'],
    ],
  },
  'zh-TW': {
    title: '關於 OumaShu 的常見問題',
    updated: '更新於 {{date}}',
    items: [
      ['OumaShu 是什麼？', 'OumaShu（櫻滿集）是一個免費線上工具導覽站，收錄 {{tools}} 個工具，像電車路線圖一樣分成 {{lines}} 條路線：圖片、影片、音訊、文字、學習、遊戲等。每個工具都在瀏覽器裡直接開啟，免安裝，也不用註冊帳號。'],
      ['工具免費嗎？需要註冊嗎？', '是的，收錄的每個工具都可以免費使用，也都不需要 OumaShu 帳號。OumaShu 本身靠 Google AdSense 廣告維持營運。少數第三方網站可能提供它們自己的選用帳號或付費功能。'],
      ['我的檔案會被上傳嗎？', 'OumaShu 自建的大部分圖片、文字和音訊工具都在你的瀏覽器本機處理檔案，檔案不會離開你的裝置。本身就需要伺服器的工具，例如 AI 口說練習和臨時聊天室，會把資料傳到它們自己的伺服器。第三方網站遵循各自的隱私政策。'],
      ['OumaShu 是誰做的？', 'OumaShu 由獨立開發者 Rollkey（X 上的 @Rollkey4）開發與維護。{{tools}} 個工具中有 {{own}} 個是 Rollkey 自己的專案，另外 {{third}} 個是第三方網站，標有「第三方」。'],
      ['工具是怎麼挑選的？列表多久更新一次？', '只有免費、能在瀏覽器裡使用、免註冊就能試用的工具才會被收錄。每個項目在新增或變更時都會檢查一遍。列表最近一次更新於 {{date}}。'],
    ],
  },
  'ja-JP': {
    title: 'OumaShu についてのよくある質問',
    updated: '{{date}} 更新',
    items: [
      ['OumaShu とは？', 'OumaShu（櫻滿集）は、{{tools}} 個の無料オンラインツールを集めたディレクトリです。電車の路線図のように {{lines}} 路線（画像、動画、音声、テキスト、学習、ゲームなど）に分けています。どのツールもブラウザですぐに開け、インストールもアカウント登録も不要です。'],
      ['無料ですか？アカウントは必要ですか？', 'はい。掲載しているツールはすべて無料で使え、OumaShu のアカウントも必要ありません。OumaShu は Google AdSense の広告で運営しています。一部のサードパーティサイトには、任意のアカウントや有料機能があることがあります。'],
      ['ファイルはアップロードされますか？', 'OumaShu が作った画像・テキスト・音声ツールの多くは、ファイルをブラウザ内で処理するため、ファイルが端末の外に出ることはありません。AI 会話練習や一時チャットルームのように、仕組み上サーバーが必要なツールは、それぞれのサーバーにデータを送ります。サードパーティサイトにはそれぞれのプライバシーポリシーが適用されます。'],
      ['OumaShu を作っているのは誰ですか？', 'OumaShu は個人開発者の Rollkey（X: @Rollkey4）が開発・運営しています。{{tools}} 個のツールのうち {{own}} 個は Rollkey 自身のプロジェクトで、残りの {{third}} 個は「サードパーティ」と表示した外部サイトです。'],
      ['ツールはどう選んでいますか？いつ更新されましたか？', '無料で、Web ブラウザで動き、登録なしで試せるツールだけを掲載しています。追加・変更のたびに各項目を確認しています。最終更新日は {{date}} です。'],
    ],
  },
  ar: {
    title: 'أسئلة عن OumaShu',
    updated: 'آخر تحديث {{date}}',
    items: [
      ['ما هو OumaShu؟', 'OumaShu (櫻滿集) دليل مجاني يضم {{tools}} أداة على الإنترنت، مقسّمة إلى {{lines}} خطًا مثل خريطة القطارات: الصور والفيديو والصوت والنصوص والتعلّم والألعاب وغيرها. تُفتح كل أداة مباشرة في المتصفح، دون تثبيت ودون إنشاء حساب.'],
      ['هل الأدوات مجانية؟ هل أحتاج إلى حساب؟', 'نعم، كل الأدوات المدرجة مجانية ولا تحتاج أي منها إلى حساب في OumaShu. يموَّل OumaShu نفسه من إعلانات Google AdSense. قد تقدّم بعض مواقع الطرف الثالث حسابات اختيارية أو ميزات مدفوعة خاصة بها.'],
      ['هل تُرفع ملفاتي؟', 'معظم أدوات الصور والنصوص والصوت التي صُنعت لـ OumaShu تعالج الملفات داخل متصفحك، فلا تغادر الملفات جهازك. أما الأدوات التي تحتاج بطبيعتها إلى خادم، مثل التدرّب على المحادثة بالذكاء الاصطناعي أو غرفة الدردشة المؤقتة، فترسل البيانات إلى خوادمها. وتخضع مواقع الطرف الثالث لسياسات الخصوصية الخاصة بها.'],
      ['من يصنع OumaShu؟', 'يطوّر OumaShu ويديره Rollkey، وهو مطوّر مستقل (@Rollkey4 على X). من بين {{tools}} أداة، {{own}} من مشاريع Rollkey الخاصة، و{{third}} مواقع طرف ثالث موسومة بـ «طرف ثالث».'],
      ['كيف تُختار الأدوات، ومتى حُدّثت القائمة؟', 'لا تُدرج الأداة إلا إذا كانت مجانية وتعمل في متصفح الويب ويمكن تجربتها دون تسجيل. يُراجع كل إدخال عند إضافته أو تغييره. آخر تحديث للقائمة كان في {{date}}.'],
    ],
  },
  ru: {
    title: 'Вопросы об OumaShu',
    updated: 'Обновлено {{date}}',
    items: [
      ['Что такое OumaShu?', 'OumaShu (櫻滿集) — бесплатный каталог из {{tools}} онлайн-инструментов, разбитых на {{lines}} линий, как на схеме метро: изображения, видео, аудио, текст, учёба, игры и другое. Каждый инструмент открывается прямо в браузере, без установки и без регистрации.'],
      ['Инструменты бесплатные? Нужна ли регистрация?', 'Да, все инструменты в каталоге бесплатны, и ни одному не нужен аккаунт OumaShu. Сам OumaShu существует за счёт рекламы Google AdSense. Некоторые сторонние сайты могут предлагать собственные необязательные аккаунты или платные функции.'],
      ['Мои файлы загружаются на сервер?', 'Большинство инструментов OumaShu для изображений, текста и аудио обрабатывают файлы прямо в браузере, так что файлы не покидают ваше устройство. Инструменты, которым по своей природе нужен сервер, например разговорная практика с ИИ или временный чат, отправляют данные на свои серверы. Сторонние сайты действуют по своим политикам конфиденциальности.'],
      ['Кто делает OumaShu?', 'OumaShu разрабатывает и поддерживает Rollkey, независимый разработчик (@Rollkey4 в X). Из {{tools}} инструментов {{own}} — собственные проекты Rollkey, остальные {{third}} — сторонние сайты с пометкой «Сторонний».'],
      ['Как отбираются инструменты и когда обновлялся список?', 'В каталог попадают только бесплатные инструменты, которые работают в браузере и которые можно попробовать без регистрации. Каждая запись проверяется при добавлении или изменении. Последнее обновление списка: {{date}}.'],
    ],
  },
};
