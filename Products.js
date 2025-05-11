 const productsData = [
  
  {
    id: 1,
    title: "لپ تاپ ایسوس مدل VivoBook R565EA",
    description: "صفحه نمایش 15.6 اینچی Full HD، پردازنده Core i3، حافظه SSD",
    price: 19500000,
    discount: 10,
    image: "laptop-1-6.jpg",
    category: "laptop"

  },
  {
    id: 2,
    title: "لپ تاپ لنوو مدل IdeaPad 3",
    description: "پردازنده Ryzen 5، رم 8 گیگ، هارد SSD، مناسب برای کارهای نیمه‌سنگین",
    price: 23500000,
    discount: 12,
    image: "macbook.jpg",
        category: "laptop"


  },
  {
    id: 3,
    title: "لپ تاپ HP مدل Pavilion x360",
    description: "صفحه نمایش لمسی، قابلیت چرخش 360 درجه، مناسب برای طراحی",
    price: 28900000,
    discount: 15,
    image: "ssssssss.webp",
    category: "laptop"

  },
  {
    id: 4,
    title: "لپ تاپ اپل مدل MacBook Air M1",
    description: "تراشه M1، عمر باتری فوق‌العاده، طراحی باریک و سبک",
    price: 43500000,
    discount: 5,
    image: "lapbig.png",
    category: "laptop"

  },
  {
    id: 5,
    title: "لپ تاپ MSI مدل GF63 Thin",
    description: "مناسب برای گیمینگ سبک، گرافیک GTX، پردازنده Core i5 نسل 10",
    price: 32500000,
    discount: 8,
    image: "laptop-1-6.jpg",
    category: "laptop"

  },

  

  {
    id: 17,
    title: "گوشی هوشمند چندلایه مدل KX-7",
    description: "مجهز به فناوری پیشرفته برای عملکرد بالا در چند وظیفه به‌صورت همزمان.",
    price: 81663969,
    image: "1517449_150.jpg",
    category: "phone",
    quantity: 0,
    isBestSeller: true,
    discount: 0
  },
  {
    id: 18,
    title: "گوشی موبایل آیفون 14 - 128 گیگابایت",
    description: "آیفون 14 با طراحی حرفه‌ای، دوربین دوگانه و تراشه قدرتمند A15 Bionic.",
    price: 58876851,
    image: "iphone14.jpg",
    category: "phone",
    quantity: 0,
    isBestSeller: true,
    discount: 25
  },
  {
    id: 19,
    title: "گوشی اقتصادی مدل ZX Lite",
    description: "مناسب برای استفاده روزمره با قیمت مقرون‌به‌صرفه و باتری بادوام.",
    price: 42740810,
    image: "small-phone.png",
    category: "phone",
    quantity: 0,
    isBestSeller: false,
    discount: 20
  },
  {
    id: 20,
    title: "گوشی آیفون 14 پرو مکس - 256 گیگابایت",
    description: "پرچمدار اپل با صفحه‌نمایش Super Retina XDR و دوربین حرفه‌ای.",
    price: 14082101,
    image: "iphone Pro Max.jpg",
    category: "phone",
    quantity: 0,
    isBestSeller: true,
    discount: 10
  },
  {
    id: 21,
    title: "گوشی آیفون 14 - 256 گیگابایت",
    description: "تجربه‌ای سریع و روان با فضای ذخیره‌سازی بیشتر و کیفیت ساخت بالا.",
    price: 66085676,
    image: "iphone14.jpg",
    category: "phone",
    quantity: 0,
    isBestSeller: true,
    discount: 20
  },





  {
    id: 31,
    title: "هدفون بی‌سیم سونی",
    description: "هدفونی با کیفیت صدای عالی و طراحی ارگونومیک برای استفاده روزمره.",
    price: 82304202,
    image: "sony.jpg",
    category: "headPhone",
    quantity: 0,
    isBestSeller: false,
    discount: 15
  },
  {
    id: 32,
    title: "هدفون دور گوشی پایونیر",
    description: "مناسب برای گوش دادن طولانی مدت با صدای شفاف و بیس قوی.",
    price: 45885675,
    image: "pyef25kr_thumb3.jpg",
    category: "headPhone",
    quantity: 0,
    isBestSeller: false,
    discount: 10
  },
  {
    id: 33,
    title: "هدفون بلوتوث سونی مدل حرفه‌ای",
    description: "قابل استفاده در تمام شرایط با قابلیت کاهش نویز و کیفیت بالا.",
    price: 66057002,
    image: "sony.jpg",
    category: "headPhone",
    quantity: 0,
    isBestSeller: false,
    discount: 15
  },
  {
    id: 34,
    title: "هدفون گیمینگ سونی",
    description: "طراحی شده برای گیمرها با صدای دالبی و میکروفون حرفه‌ای.",
    price: 13096979,
    image: "sony.jpg",
    category: "headPhone",
    quantity: 0,
    isBestSeller: true,
    discount: 25
  },
  {
    id: 35,
    title: "هدفون ارگونومیک پایونیر",
    description: "سبک و راحت برای استفاده روزانه، همراه با کیفیت صدای رضایت‌بخش.",
    price: 7756495,
    image: "pyef25kr_thumb3.jpg",
    category: "headPhone",
    quantity: 0,
    isBestSeller: true,
    discount: 20
  },
  {
    id: 36,
    title: "هدفون بی‌سیم حرفه‌ای",
    description: "دارای طراحی دوگانه برای کاربری معمولی و حرفه‌ای با صدای فراگیر.",
    price: 45472891,
    image: "9490611.jpg",
    category: "headPhone",
    quantity: 0,
    isBestSeller: true,
    discount: 10
  },


  

  {
    id: 56,
    title: "ساعت هوشمند اساسی و مبتنی بر اکتشاف",
    description: "یک راه‌حل ارتباطی مدرن و مؤثر که به شرکت‌ها کمک می‌کند تا داده‌ها و اطلاعات را به شکلی بهینه و با کمترین هزینه به اشتراک بگذارند.",
    price: 80353634,
    image: "galaxywatch.jpg",
    category: "watch",
    quantity: 0,
    isBestSeller: false,
    discount: 0
  },
  {
    id: 57,
    title: "ساعت هوشمند با ظرفیت ملموس پیشرفته",
    description: "ظرفیت فیزیکی و کارایی پیشرفته‌ای که به کاربران این امکان را می‌دهد تا از دستگاه‌های هوشمند خود بهره‌وری بیشتری داشته باشند.",
    price: 82343579,
    image: "osrnkg3z_thumb3.jpg",
    category: "watch",
    quantity: 0,
    isBestSeller: true,
    discount: 25
  },
  {
    id: 58,
    title: "ساعت هوشمند نسل آینده با شبیه‌سازی واکنشی",
    description: "دستگاهی که به سرعت واکنش نشان می‌دهد و امکانات شبیه‌سازی نسل بعد را فراهم می‌کند تا تجربه کاربری بهتری ارائه دهد.",
    price: 10768801,
    image: "osrnkg3z_thumb3.jpg",
    category: "watch",
    quantity: 0,
    isBestSeller: true,
    discount: 0
  },
  {
    id: 59,
    title: "ساعت هوشمند با هوش مصنوعی حساس به زمینه و قابل اشتراک‌گذاری",
    description: "هوش مصنوعی حساس به زمینه که قابلیت اشتراک‌گذاری دارد و می‌تواند به طور هوشمند با نیازهای مختلف کاربران هماهنگ شود.",
    price: 11184206,
    image: "u44hs139_30801-31826326!1_thsm.jpg",
    category: "watch",
    quantity: 0,
    isBestSeller: true,
    discount: 20
  },
  {
    id: 60,
    title: "ساعت هوشمند با ساختار یکنواخت پایش‌شده",
    description: "یک ساختار یکنواخت و پایش‌شده که تضمین می‌کند همه‌چیز در هماهنگی و سازگاری با یکدیگر عمل می‌کند.",
    price: 87918761,
    image: "nody-عکس-ساعت-هوشمند-1725190086.jpg",
    category: "watch",
    quantity: 0,
    isBestSeller: false,
    discount: 25
  },



 

  {
    id: 71,
    title: "تلویزیون با پیاده‌سازی کامل و تنظیم‌شده",
    description: "این تلویزیون دارای تنظیمات پیشرفته‌ای است که کیفیت تصویر و صدا را به صورت خودکار بهینه می‌کند.",
    price: 14394179,
    image: "280x280.jpg",
    category: "tv",
    quantity: 0,
    isBestSeller: false,
    discount: 10
  },
  {
    id: 72,
    title: "تلویزیون با مجموعه ابزار مدولار رو در رو",
    description: "این تلویزیون دارای امکانات متعدد و طراحی مدولار است که به شما این امکان را می‌دهد تا ویژگی‌ها و قابلیت‌ها را متناسب با نیاز خود تنظیم کنید.",
    price: 89788603,
    image: "lg-oled.jpg",
    category: "tv",
    quantity: 0,
    isBestSeller: true,
    discount: 0
  },
  {
    id: 73,
    title: "تلویزیون با هسته یکنواخت هم‌افزایشی",
    description: "این تلویزیون به فناوری‌های پیشرفته برای ارتقاء تجربه دیداری و شنیداری شما مجهز است.",
    price: 72837530,
    image: "tv.jpg",
    category: "tv",
    quantity: 0,
    isBestSeller: true,
    discount: 0
  },
  {
    id: 74,
    title: "تلویزیون با راه‌حل چندلایه و شفاف",
    description: "این تلویزیون با فناوری‌های پیشرفته‌ای که چندین لایه از کیفیت تصویر و صدا را به صورت همزمان به نمایش می‌گذارد، تجربه‌ای بی‌نظیر به شما ارائه می‌دهد.",
    price: 48157992,
    image: "tv-long.jpg",
    category: "tv",
    quantity: 0,
    isBestSeller: false,
    discount: 10
  },
  {
    id: 75,
    title: "تلویزیون با سلسله‌مراتب نامتقارن مجازی",
    description: "این تلویزیون از فناوری‌های پیشرفته‌ای برخوردار است که به صورت مجازی ویژگی‌ها و امکانات مختلف را به کاربران ارائه می‌دهد.",
    price: 66895070,
    image: "nice-tv.jpg",
    category: "tv",
    quantity: 0,
    isBestSeller: true,
    discount: 20
  },




  

  {
    id: 86,
    title: "کنسول بازی با وفاداری مشتری مبتنی بر محتوا",
    description: "این کنسول بازی با طراحی خاص خود، تجربه‌ای منحصر به فرد از وفاداری مشتری به ارمغان می‌آورد.",
    price: 89928991,
    image: "ps5.jpg",
    category: "playStions",
    quantity: 0,
    isBestSeller: false,
    discount: 15
  },
  {
    id: 87,
    title: "کنسول بازی با روش شناسی میان‌رده سازگار",
    description: "این کنسول بازی به شما امکان می‌دهد تا تجربه بازی خود را با روش‌های پیشرفته و سازگار تنظیم کنید.",
    price: 16220161,
    image: "ps1.jpg",
    category: "playStions",
    quantity: 0,
    isBestSeller: false,
    discount: 10
  },
  {
    id: 88,
    title: "کنسول بازی با سلسله‌مراتب پیش‌زمینه ایمن",
    description: "این کنسول بازی دارای سیستم حفاظتی پیشرفته است که امنیت و عملکرد بهتری را در بازی‌ها فراهم می‌کند.",
    price: 60048560,
    image: "ps0.jpg",
    category: "playStions",
    quantity: 0,
    isBestSeller: false,
    discount: 25
  },
  {
    id: 89,
    title: "کنسول بازی با هاب حداکثری سازگار",
    description: "این کنسول بازی با هاب‌های متعدد و سازگاری بالا، تجربه‌ای بی‌نظیر از بازی را به کاربران ارائه می‌دهد.",
    price: 57324228,
    image: "ps1.jpg",
    category: "playStions",
    quantity: 0,
    isBestSeller: false,
    discount: 20
  },
  {
    id: 90,
    title: "کنسول بازی با پاراللیزم دوطرفه چندجانبه",
    description: "این کنسول بازی با بهره‌گیری از فناوری‌های پیشرفته، عملکرد بی‌نظیری در بازی‌های چندجانبه ارائه می‌دهد.",
    price: 14016592,
    image: "ps0.jpg",
    category: "playStions",
    quantity: 0,
    isBestSeller: false,
    discount: 20
  }

]

export default productsData