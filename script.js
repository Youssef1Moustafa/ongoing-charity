 // 🔹 بيانات السور وروابط الـ MP3
  const SURAHS = [
    {
      name: "سورة الكهف",
      src: "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/018.mp3"
    },
    {
      name: "سورة الملك",
      src: "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/067.mp3"
    },
    {
      name: "سورة الرحمن",
      src: "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/055.mp3"
    },
   {
      name: "سورة يس",
      src: "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/036.mp3"
    }
  ];

  const SQ = s => document.querySelector(s);
  const surahWrap = SQ("#surahCards");

  SURAHS.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "card-sm";
    el.innerHTML = `
      <div class="title">${s.name}</div>
      <div class="row">
        <audio id="audio-${i}" controls src="${s.src}"></audio>
      </div>
    `;
    surahWrap.appendChild(el);
  });

  // ---------- بيانات الأدعية والأذكار ----------
  const DUAS = [
    {cat:"", text:"اللهم انهم لم يضروا احد فلا تحرمهم من جنتك ولذة النظر الي وجهك الكريم اللهم ارحمهم بقدر ما تمنينا لهم في البقاء اللهم ازقهم من النعيم وما وعدت به المؤمنين اللهم ارحمهم واجعلهم من الضاحكين المستبشرين بجنتك يارب العالمين اللهم اغفر لهم بعدد ما سبح خلقك وبعدد ما لبي حجاجك يارب يا رحيم."},
    {cat:"", text:"اللهمّ يمّن كتابهم، ويسّر حسابهم، وثقّل بالحسنات ميزانهم، وثبّت على الصّراط أقدامهم، وأسكنهم في أعلى الجنّات، بجوار حبيبك ومصطفاك صلّى الله عليه وسلّم. اللهمّ أمّنهم من فزع يوم القيامة، ومن هول يوم القيامة، واجعلهم نفساً آمنةً مطمئنّةً، ولقّنهم حجّتهم. اللهمّ اجعلهم في بطن القبر مطمئنّين، وعند قيام الأشهاد آمنين، وبجود رضوانك واثقين، وإلى أعلى درجاتك سابقين."},
      {cat:"", text:"اللهمّ افسح لهم في قبرهم مدّ بصرهم، وافرش قبرهم من فراش الجنّة. اللهمّ أعذهم من عذاب القبر، وجاف ِالأرض عن جنبيهم. اللهمّ املأ قبرهم بالرّضا، والنّور، والفسحة، والسّرور. اللهمّ إنّهم في ذمّتك وحبل جوارك، فقِهِم فتنة القبر، وعذاب النّار، وأنت أهل الوفاء والحقّ، فاغفر لهم وارحمهم، إنّك أنت الغفور الرّحيم."},
      {cat:"", text:"اللهم اجزهم عن الاحسان احسانا وعن الاسائه عفو وغفرانا واللهم ان كانوا محسنين فزد من حسناتهم وان كانوا مسيئين فتجاوز عن سيئاتهم واللهم ادخلهم الجنه من غير  مناقشه حساب ولا سابقه عذاب واللهم آنسهم في وحدتهم وفي وحشتهم وفي غربتهم."},
      {cat:"", text:"(اللهم أنت ربهم، وأنت خلقتهم، وأنت هديتهم للإسلام، وأنت قبضت أرواحهم، وأنت أعلم بسرهم وعلانيتهم، جئنا شفعاء فاغفر لهم، اللهمّ أبدلهم داراً خيراً من دارهم، وأهلاً خيراً من أهلهم، وأدخلهم الجنّة، وأعذهم من عذاب القبر، ومن عذاب النّار. اللهمّ عاملهم بما أنت أهله، ولا تعاملهم بما هم أهله."},
      {cat:"", text:" 'اللهمّ إنّهم كانوا لكتابك تاليين وسامعين، فشفّع فيهم القرآن، وارحمهم من النّيران، واجعلهم يا رحمن يرتقوا في الجنّة إلى آخر آية قرؤها أو سمعوها، اللهمّ ارزقهم بكلّ حرفٍ في القرآن حلاوةً، وبكلّ كلمة كرامةً، وبكلّ اّية سعادةً، وبكلّ سورة سلامةً، وبكل جُزءٍ جزاءً، اللهمّ إنّهم صبروا على البلاء فلم يجزعو، فامنحهم درجة الصّابرين، الذين يوفّون أجورهم بغير حساب، فإنّك القائل: 'إنّما يوفّى الصّابرون أجرهم بغير حساب."}
    ];

    const AZKAR = [
      {title:"", text:"اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ."},
      {title:"", text:"اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍمُسْتَقِيمٍ."},
      {title:"", text:"اللهم إني أعوذ بك من العجز والكسل، والجبن والبخل،  والهرم وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها، أنت وليها ومولاها اللهم إني أعوذ بك من علم لا ينفع ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها"},
      {title:"", text:"اللهم لك أسلمت، وبك آمنت، وعليك توكلت، وإليك خاصمت، وبك حاكمت، فاغفر لي ما قدمت وما أخرت، وأسررت وأعلنت، وما أنت أعلم به مني،لاإله إلا أنت"}

    ];

    const RANDOM_AZKAR = [
      "سبحان الله", "الحمد لله", "الله أكبر", "لا إله إلا الله",
      "لا حول ولا قوة إلا بالله", "سبحان الله وبحمده", "أستغفر الله العظيم"
    ];

    // ---------- أدوات عامة ----------
    const qs = s => document.querySelector(s);
    const qsa = s => [...document.querySelectorAll(s)];
    const save = (k,v)=>localStorage.setItem(k,JSON.stringify(v));
    const load = (k,def)=>{try{const v=JSON.parse(localStorage.getItem(k));return v??def;}catch{return def;}};

    // ---------- عدّاد التسبيح ----------
    const counts = load("tasbeeh-counts",{subhan:0,hamd:0,akbar:0,ha:0});
    function renderCounts(){
      qs("#c-subhan").textContent = counts.subhan;
      qs("#c-hamd").textContent   = counts.hamd;
      qs("#c-akbar").textContent  = counts.akbar;
      qs("#c-ha").textContent  = counts.ha;
      qs("#total").textContent    = counts.subhan + counts.hamd + counts.akbar + counts.ha;
    }
    renderCounts();

    qsa("#tasbeeh .controls .pill").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const key = btn.dataset.key;
        if(btn.hasAttribute("data-reset")) counts[key]=0;
        else counts[key] = Math.max(0, counts[key] + parseInt(btn.dataset.delta,10));
        save("tasbeeh-counts",counts);
    -    renderCounts();
      });
    });

    qs("#exportTasbeeh").addEventListener("click",()=>{
      const data = [
        `سبحان الله: ${counts.subhan}`,
        `الحمد لله: ${counts.hamd}`,
        `الله أكبر: ${counts.akbar}`,
        `لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير: ${counts.ha}`,
        `الإجمالي: ${counts.subhan+counts.hamd+counts.akbar+counts.ha}`
      ].join("\n");
      const blob = new Blob([data],{type:"text/plain;charset=utf-8"});
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "tasbeeh_counts.txt";
      a.click();
      URL.revokeObjectURL(a.href);
    });

    // ---------- بطاقات الأدعية ----------
    const duaWrap = qs("#duaCards");
    DUAS.forEach((d,i)=>{
      const el = document.createElement("div");
      el.className = "card-sm";
      el.innerHTML = `
        <div class="title">${d.cat}</div>
        <div class="text">${d.text}</div>
        <div class="row">
          <button class="pill copy-btn">نسخ</button>
        </div>
      `;
      el.querySelector(".copy-btn").addEventListener("click", ()=>{
        navigator.clipboard.writeText(d.text).then(()=>{
          const b = el.querySelector(".copy-btn");
          const old = b.textContent;
          b.textContent = "✓ تم النسخ";
          setTimeout(()=>b.textContent = old, 1500);
        });
      });
      duaWrap.appendChild(el);
    });

    // ---------- مكتبة الأذكار ----------
    const azkarWrap = qs("#azkarCards");
    AZKAR.forEach(z=>{
      const el = document.createElement("div");
      el.className = "card-sm";
      el.innerHTML = `
        <div class="title">${z.title}</div>
        <div class="text">${z.text}</div>
        <div class="row">
          <button class="pill copy">نسخ الذكر</button>
        </div>
      `;
      el.querySelector(".copy").addEventListener("click", ()=>{
        navigator.clipboard.writeText(z.text).then(()=>{
          const b = el.querySelector(".copy");
          const old = b.textContent;
          b.textContent = "✓ تم النسخ";
          setTimeout(()=>b.textContent = old, 1500);
        });
      });
      azkarWrap.appendChild(el);
    });

    // ---------- شجرة الأجر التفاعلية ----------
    const leavesGroup = qs("#leaves");
    const leafCountEl = qs("#leafCount");
    const treeState = load("tree-leaves",{count:0});
    leafCountEl.textContent = treeState.count;

    // توليد أوراق في أماكن مختلفة
    function makeLeaf(cx, cy){
      const g = document.createElementNS("http://www.w3.org/2000/svg","g");
      g.setAttribute("class","leaf");
      const path = document.createElementNS("http://www.w3.org/2000/svg","path");
      path.setAttribute("d","M0 0 C 12 -8, 28 -8, 36 0 C 28 8, 12 8, 0 0 Z");
      path.setAttribute("fill","#22c55e");
      g.setAttribute("transform",`translate(${cx} ${cy}) rotate(${(Math.random()*40-20).toFixed(1)})`);
      g.appendChild(path);

      g.addEventListener("click", ()=>{
        // اختيار ذكر عشوائي
        const dhikr = RANDOM_AZKAR[Math.floor(Math.random()*RANDOM_AZKAR.length)];
        // زيادة عداد الإجمالي + إظهار تلميح
        treeState.count += 1; save("tree-leaves",treeState);
        leafCountEl.textContent = treeState.count;

        // إضافة للعدّادات إذا ينطبق
        if(dhikr==="سبحان الله") counts.subhan++;
        else if(dhikr==="الحمد لله") counts.hamd++;
        else if(dhikr==="الله أكبر") counts.akbar++;
        else if(dhikr==="لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شئ قدير") counts.ha++;
        save("tasbeeh-counts",counts); renderCounts();

        // توست بسيط
        const toast = document.createElement("div");
        toast.textContent = `ذكرت: ${dhikr} ✓`;
        Object.assign(toast.style,{
          position:"fixed",left:"50%",transform:"translateX(-50%)",
          bottom:"22px",background:"#0ea5e9",color:"#fff",padding:"10px 14px",
          borderRadius:"12px",boxShadow:"var(--shadow)",zIndex:99,fontWeight:"700"
        });
        document.body.appendChild(toast);
        setTimeout(()=>toast.remove(),1500);
      });

      leavesGroup.appendChild(g);
    }

    // توزيع إحداثيات الأوراق
    const coords = [
      [190,100],[220,120],[250,90],[280,110],[310,95],
      [390,95],[420,120],[450,100],[480,115],[510,95],
      [240,200],[270,185],[300,205],[410,205],[450,195],[490,210]
    ];
    coords.forEach(([x,y])=>makeLeaf(x,y));

    // ---------- تحسين الوصول ----------
    // زر إظهار الإجمالي (محفّز لإعادة الحساب)
    qs("#totalBtn").addEventListener("click", ()=>renderCounts());

    // ---------- تخصيص الاسم (اختياري) ----------
    // يمكنك تعديل العنوان بسرعة بإضافة ?name=اسم
    (function setNameFromQuery(){
      const params = new URLSearchParams(location.search);
      const name = params.get("name");
      if(name){
        document.title = `صدقة جارية لروح ${name}`;
        const h1 = document.querySelector(".hero h1");
        h1.textContent = `صدقة جارية لروح ${name} (رحمها الله)`;
      }

    })();


