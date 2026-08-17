(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const _={home:"الرئيسية",findDoctor:"ابحث عن طبيب",trends:"الجديد",aboutUs:"من نحن",contactUs:"اتصل بنا",settings:"الإعدادات",marketplace:"سوق التجهيزات",login:"تسجيل الدخول",signup:"تسجيل جديد",logout:"تسجيل الخروج",langToggle:"English",dashboard:"لوحة التحكم"},X={title:"دليل أطباء الأسنان",subtitle:"ابحث عن أفضل أطباء الأسنان بالقرب منك",whoAreYou:"من أنت؟",patient:"أنا مريض",patientDesc:"ابحث عن أطباء الأسنان واحجز موعدك",doctor:"أنا طبيب",doctorDesc:"أدر ملفك الشخصي وتواصل مع الموردين"},Z={heroTitle:"ابحث عن طبيب الأسنان المناسب",heroSubtitle:"آلاف الأطباء المعتمدين بانتظارك",searchPlaceholder:"ابحث عن طبيب أسنان...",featuredDoctors:"أطباء مميزون",trendingServices:"خدمات رائجة",viewAll:"عرض الكل"},ee={title:"البحث عن طبيب",searchPlaceholder:"ابحث بالاسم أو التخصص...",filters:"الفلاتر",serviceType:"نوع الخدمة",rating:"التقييم",allRatings:"جميع التقييمات",area:"المنطقة",viewList:"عرض قائمة",viewCard:"عرض بطاقات",viewMap:"عرض خريطة",results:"نتيجة",noResults:"لا توجد نتائج مطابقة"},te={orthodontics:"تقويم الأسنان",surgery:"جراحة الأسنان",pediatric:"طب أسنان الأطفال",cosmetic:"تجميل الأسنان",cleaning:"تنظيف وتلميع",other:"أخرى"},ie={experience:"سنوات الخبرة",credentials:"الشهادات",specializations:"التخصصات",contactInfo:"معلومات التواصل",phone:"الهاتف",address:"العنوان",website:"الموقع الإلكتروني",businessHours:"ساعات العمل",callNow:"اتصل الآن",getDirections:"احصل على الاتجاهات",visitWebsite:"زيارة الموقع",reviews:"التقييمات",averageRating:"متوسط التقييم",addReview:"أضف تقييم",writeReview:"اكتب تقييمك",submitReview:"إرسال التقييم",reviewPlaceholder:"شاركنا تجربتك مع هذا الطبيب...",back:"رجوع"},ae={title:"الجديد في طب الأسنان",subtitle:"اكتشف أحدث التقنيات والعلاجات في عالم طب الأسنان",hollywoodSmile:"ابتسامة هوليود",teethWhitening:"تبييض الأسنان",dentalImplants:"زراعة الأسنان",invisibleBraces:"التقويم الشفاف",readMore:"اقرأ المزيد"},oe={title:"من نحن",mission:"مهمتنا",missionText:"نسعى لربط المرضى بأفضل أطباء الأسنان في الأردن، وتوفير تجربة بحث سهلة وموثوقة تساعدهم على اتخاذ القرار الصحيح لصحة أسنانهم.",vision:"رؤيتنا",visionText:"أن نكون المنصة الرائدة في مجال طب الأسنان في المنطقة العربية، ونساهم في تحسين جودة الرعاية الصحية للأسنان من خلال التكنولوجيا.",values:"قيمنا",team:"فريقنا",statsTitle:"أرقامنا تتحدث",doctors:"أطباء مسجلون",patients:"مرضى سعداء",cities:"مدن",reviews:"تقييمات"},se={title:"اتصل بنا",subtitle:"نسعد بتواصلك معنا! أرسل لنا رسالتك وسنرد عليك في أقرب وقت.",name:"الاسم",email:"البريد الإلكتروني",subject:"الموضوع",message:"الرسالة",send:"إرسال",success:"تم إرسال رسالتك بنجاح!",phone:"الهاتف",address:"العنوان",followUs:"تابعنا"},ne={loginTitle:"تسجيل الدخول",signupTitle:"تسجيل جديد",emailOrLicense:"البريد الإلكتروني / رقم الرخصة",password:"كلمة المرور",login:"دخول",signup:"تسجيل",personalInfo:"البيانات الشخصية",fullName:"الاسم الكامل",phone:"رقم الهاتف",clinicInfo:"بيانات العيادة",clinicName:"اسم العيادة",clinicAddress:"العنوان",clinicHours:"ساعات العمل",clinicPhone:"رقم هاتف العيادة",verification:"التحقق",licenseNumber:"رقم الرخصة الطبية",licenseDoc:"صورة الرخصة",uploadFile:"رفع الملف",forgotPassword:"نسيت كلمة المرور؟",professionalDetails:"التفاصيل المهنية",specialty:"التخصص",selectSpecialty:"اختر تخصصك",syrianSyndicateId:"رقم العضوية في نقابة أطباء الأسنان السورية",uploadIdPhoto:"تحميل صورة الهوية النقابية",uploadInstruction:"انقر للتحميل أو اسحب الملف هنا",uploadLimits:"PNG, JPG حتى 5 ميغابايت",signupSuccess:"تم إنشاء الحساب! يرجى انتظار موافقة المسؤول."},re={welcome:"مرحباً",profileViews:"مشاهدات الملف",totalReviews:"التقييمات",yourRating:"تقييمك",settings:"الإعدادات",settingsDesc:"عدّل ملفك الشخصي ومعلومات العيادة",marketplace:"سوق التجهيزات",marketplaceDesc:"تصفح الموردين والمعدات الطبية",recentActivity:"النشاط الأخير",welcomeDoctor:"مرحباً بك مجدداً، د.",subtitle:"إليك نظرة عامة على أداء ملفك الشخصي.",settingsTitle:"إعدادات الملف الشخصي",settingsDescShort:"تحديث معلوماتك، مواعيدك، وصورك.",marketplaceTitle:"سوق تجهيزات الأسنان",marketplaceDescShort:"ابحث عن الموردين والمعدات في حمص.",activity1:"تقييم جديد بـ 5 نجوم من سارة م.",activity2:"تمت مشاهدة ملفك من قبل 15 مريضاً اليوم",activity3:"لقد قمت بالرد على تقييم خالد ي.",timeHours2:"قبل ساعتين",timeHours5:"قبل 5 ساعات",timeDay1:"قبل يوم واحد"},le={title:"الإعدادات",editProfile:"تعديل الملف الشخصي",profilePicture:"الصورة الشخصية",changePicture:"تغيير الصورة",personalInfo:"البيانات الشخصية",name:"الاسم",bio:"السيرة الذاتية",credentials:"الشهادات",specializations:"التخصصات",yearsExperience:"سنوات الخبرة",contactInfo:"معلومات التواصل",address:"العنوان",phone:"الهاتف",website:"الموقع الإلكتروني",hours:"ساعات العمل",saveChanges:"حفظ التغييرات",saved:"تم الحفظ بنجاح!",back:"رجوع",fullNameEn:"الاسم الكامل (بالإنكليزية)",fullNameAr:"الاسم الكامل (بالعربية)",bioEn:"السيرة الذاتية (بالإنكليزية)",bioAr:"السيرة الذاتية (بالعربية)",contactLocation:"التواصل والموقع",areaInHoms:"المنطقة في حمص",addressEn:"العنوان التفصيلي (بالإنكليزية)",addressAr:"العنوان التفصيلي (بالعربية)",mapLocation:"موقع الخريطة (الإحداثيات)",latitude:"خط العرض",longitude:"خط الطول",getCurrentLocation:"جلب الموقع الحالي",saving:"جاري الحفظ...",areaMahatta:"المحطة",areaInshaat:"الإنشاءات",areaGhouta:"الغوطة",am:"صباحاً",pm:"مساءً"},de={title:"سوق التجهيزات",searchPlaceholder:"ابحث عن موردين...",equipmentTypes:"أنواع المعدات",xray:"أجهزة الأشعة",dentalChairs:"كراسي الأسنان",surgicalInstruments:"الأدوات الجراحية",dailySupplies:"المستهلكات اليومية",sterilization:"أجهزة التعقيم",dentalDrills:"أجهزة الحفر",other:"أخرى",rating:"التقييم",location:"الموقع",viewList:"عرض قائمة",viewCard:"عرض بطاقات",viewMap:"عرض خريطة",results:"نتيجة",all:"جميع الفئات",tools:"أدوات يدوية",materials:"مواد طب الأسنان",sterilizationSimple:"التعقيم",subtitle:"ابحث عن أفضل المعدات والمستلزمات لعيادتك في حمص.",suppliersFound:"موردين تم العثور عليهم",noSuppliers:"لم يتم العثور على موردين",noSuppliersDesc:"جرّب فئة أخرى أو مصطلح بحث آخر."},ce={companyName:"اسم الشركة",yearsInBusiness:"سنوات العمل",location:"الموقع",specialization:"التخصص",productCatalog:"كتالوج المنتجات",reviews:"التقييمات",contactInfo:"معلومات التواصل",connectWhatsApp:"تواصل عبر واتساب",requestQuote:"طلب عرض سعر",sendEmail:"إرسال بريد إلكتروني",back:"رجوع",notFound:"المورد غير موجود",backToMarketplace:"العودة إلى سوق التجهيزات",contactSupplier:"الاتصال بالمورد",whatsapp:"واتساب",requestQuotation:"طلب عرض سعر",itemsNeeded:"المواد المطلوبة",sendRequest:"إرسال الطلب",quoteSuccess:"تم إرسال طلب عرض السعر بنجاح!"},pe={loading:"جارِ التحميل...",error:"حدث خطأ",search:"بحث",filter:"فلتر",clear:"مسح",all:"الكل",stars:"نجوم",showMore:"عرض المزيد",showLess:"عرض أقل",closed:"مغلق",back:"رجوع"},ue={description:"دليلك الشامل لأطباء الأسنان",quickLinks:"روابط سريعة",support:"الدعم",followUs:"تابعنا",rights:"جميع الحقوق محفوظة"},ge={sun:"الأحد",mon:"الإثنين",tue:"الثلاثاء",wed:"الأربعاء",thu:"الخميس",fri:"الجمعة",sat:"السبت"},me={nav:_,landing:X,patientHome:Z,findDoctor:ee,serviceTypes:te,doctorProfile:ie,trends:ae,about:oe,contact:se,auth:ne,dashboard:re,settings:le,marketplace:de,supplierProfile:ce,common:pe,footer:ue,days:ge},ve={home:"Home",findDoctor:"Find a Doctor",trends:"Trends",aboutUs:"About Us",contactUs:"Contact Us",settings:"Settings",marketplace:"Marketplace",login:"Login",signup:"Sign Up",logout:"Logout",langToggle:"العربية",dashboard:"Dashboard"},he={title:"Dentist Directory",subtitle:"Find the best dentists near you",whoAreYou:"Who are you?",patient:"I'm a Patient",patientDesc:"Find dentists and book your appointment",doctor:"I'm a Doctor",doctorDesc:"Manage your profile and connect with suppliers"},ye={heroTitle:"Find the Right Dentist for You",heroSubtitle:"Thousands of verified dentists are waiting for you",searchPlaceholder:"Search for a dentist...",featuredDoctors:"Featured Doctors",trendingServices:"Trending Services",viewAll:"View All"},fe={title:"Find a Doctor",searchPlaceholder:"Search by name or specialty...",filters:"Filters",serviceType:"Service Type",rating:"Rating",allRatings:"All Ratings",area:"Area",viewList:"List View",viewCard:"Card View",viewMap:"Map View",results:"results",noResults:"No matching results found"},be={orthodontics:"Orthodontics",surgery:"Dental Surgery",pediatric:"Pediatric Dentistry",cosmetic:"Cosmetic Dentistry",cleaning:"Cleaning & Polishing",other:"Other"},xe={experience:"Years of Experience",credentials:"Credentials",specializations:"Specializations",contactInfo:"Contact Information",phone:"Phone",address:"Address",website:"Website",businessHours:"Business Hours",callNow:"Call Now",getDirections:"Get Directions",visitWebsite:"Visit Website",reviews:"Reviews",averageRating:"Average Rating",addReview:"Add Review",writeReview:"Write Your Review",submitReview:"Submit Review",reviewPlaceholder:"Share your experience with this doctor...",back:"Back"},we={title:"What's New in Dentistry",subtitle:"Discover the latest technologies and treatments in the world of dentistry",hollywoodSmile:"Hollywood Smile",teethWhitening:"Teeth Whitening",dentalImplants:"Dental Implants",invisibleBraces:"Invisible Braces",readMore:"Read More"},$e={title:"About Us",mission:"Our Mission",missionText:"We strive to connect patients with the best dentists in Jordan, providing an easy and reliable search experience that helps them make the right decision for their dental health.",vision:"Our Vision",visionText:"To be the leading platform in dentistry across the Arab region, contributing to improving the quality of dental healthcare through technology.",values:"Our Values",team:"Our Team",statsTitle:"Our Numbers Speak",doctors:"Registered Doctors",patients:"Happy Patients",cities:"Cities",reviews:"Reviews"},ke={title:"Contact Us",subtitle:"We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.",name:"Name",email:"Email",subject:"Subject",message:"Message",send:"Send",success:"Your message has been sent successfully!",phone:"Phone",address:"Address",followUs:"Follow Us"},Se={loginTitle:"Login",signupTitle:"Sign Up",emailOrLicense:"Email / License Number",password:"Password",login:"Login",signup:"Sign Up",personalInfo:"Personal Information",fullName:"Full Name",phone:"Phone Number",clinicInfo:"Clinic Information",clinicName:"Clinic Name",clinicAddress:"Address",clinicHours:"Working Hours",clinicPhone:"Clinic Phone Number",verification:"Verification",licenseNumber:"Medical License Number",licenseDoc:"License Document",uploadFile:"Upload File",forgotPassword:"Forgot Password?",professionalDetails:"Professional Details",specialty:"Specialty",selectSpecialty:"Select your specialty",syrianSyndicateId:"Syrian Dental Syndicate ID",uploadIdPhoto:"Upload ID Photo",uploadInstruction:"Click to upload or drag and drop",uploadLimits:"PNG, JPG up to 5MB",signupSuccess:"Account created! Please wait for admin approval."},Le={welcome:"Welcome",profileViews:"Profile Views",totalReviews:"Total Reviews",yourRating:"Your Rating",settings:"Settings",settingsDesc:"Edit your profile and clinic information",marketplace:"Marketplace",marketplaceDesc:"Browse suppliers and medical equipment",recentActivity:"Recent Activity",welcomeDoctor:"Welcome back, Dr.",subtitle:"Here's an overview of your profile performance.",settingsTitle:"Profile Settings",settingsDescShort:"Update your information, hours, and photos.",marketplaceTitle:"Dental Marketplace",marketplaceDescShort:"Find suppliers and equipment in Homs.",activity1:"New 5-star review from Sara M.",activity2:"Profile viewed by 15 patients today",activity3:"You replied to a review from Khaled Y.",timeHours2:"2 hours ago",timeHours5:"5 hours ago",timeDay1:"1 day ago"},ze={title:"Settings",editProfile:"Edit Profile",profilePicture:"Profile Picture",changePicture:"Change Picture",personalInfo:"Personal Information",name:"Name",bio:"Bio",credentials:"Credentials",specializations:"Specializations",yearsExperience:"Years of Experience",contactInfo:"Contact Information",address:"Address",phone:"Phone",website:"Website",hours:"Working Hours",saveChanges:"Save Changes",saved:"Saved successfully!",back:"Back",fullNameEn:"Full Name (English)",fullNameAr:"Full Name (Arabic)",bioEn:"Bio (English)",bioAr:"Bio (Arabic)",contactLocation:"Contact & Location",areaInHoms:"Area in Homs",addressEn:"Detailed Address (English)",addressAr:"Detailed Address (Arabic)",mapLocation:"Map Location (Coordinates)",latitude:"Latitude",longitude:"Longitude",getCurrentLocation:"Get Current Location",saving:"Saving...",areaMahatta:"Al-Mahatta",areaInshaat:"Inshaat",areaGhouta:"Ghouta",am:"AM",pm:"PM"},De={title:"Marketplace",searchPlaceholder:"Search for suppliers...",equipmentTypes:"Equipment Types",xray:"X-ray Machines",dentalChairs:"Dental Chairs",surgicalInstruments:"Surgical Instruments",dailySupplies:"Daily Supplies",sterilization:"Sterilization Equipment",dentalDrills:"Dental Drills",other:"Other",rating:"Rating",location:"Location",viewList:"List View",viewCard:"Card View",viewMap:"Map View",results:"results",all:"All Categories",tools:"Hand Tools",materials:"Dental Materials",sterilizationSimple:"Sterilization",subtitle:"Find the best equipment and supplies for your clinic in Homs.",suppliersFound:"Suppliers Found",noSuppliers:"No suppliers found",noSuppliersDesc:"Try a different category or search term."},Ce={companyName:"Company Name",yearsInBusiness:"Years in Business",location:"Location",specialization:"Specialization",productCatalog:"Product Catalog",reviews:"Reviews",contactInfo:"Contact Information",connectWhatsApp:"Connect via WhatsApp",requestQuote:"Request a Quote",sendEmail:"Send Email",back:"Back",notFound:"Supplier Not Found",backToMarketplace:"Back to Marketplace",contactSupplier:"Contact Supplier",whatsapp:"WhatsApp",requestQuotation:"Request Quotation",itemsNeeded:"Items needed",sendRequest:"Send Request",quoteSuccess:"Quote request sent successfully!"},Ee={loading:"Loading...",error:"An error occurred",search:"Search",filter:"Filter",clear:"Clear",all:"All",stars:"stars",showMore:"Show More",showLess:"Show Less",closed:"Closed",back:"Back"},Pe={description:"Your comprehensive guide to dentists",quickLinks:"Quick Links",support:"Support",followUs:"Follow Us",rights:"All rights reserved"},Ie={sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},Te={nav:ve,landing:he,patientHome:ye,findDoctor:fe,serviceTypes:be,doctorProfile:xe,trends:we,about:$e,contact:ke,auth:Se,dashboard:Le,settings:ze,marketplace:De,supplierProfile:Ce,common:Ee,footer:Pe,days:Ie},Ae={ar:me,en:Te};let E=localStorage.getItem("lang")||"ar";function P(i){E=i,localStorage.setItem("lang",i),document.documentElement.lang=i,document.documentElement.dir=i==="ar"?"rtl":"ltr",document.body.style.fontFamily=i==="ar"?"'Cairo', sans-serif":"'Inter', sans-serif",window.dispatchEvent(new CustomEvent("languageChanged",{detail:{lang:i}}))}function e(i){const t=i.split(".");let a=Ae[E];for(const o of t)a=a==null?void 0:a[o];return a||i}function g(){return E}function qe(){P(E)}const I={currentRole:localStorage.getItem("userRole")||null,isLoggedIn:localStorage.getItem("isLoggedIn")==="true",doctorName:localStorage.getItem("doctorName")||"د. أحمد",searchFilters:{query:"",serviceType:"all",rating:"all",area:""},marketplaceFilters:{query:"",equipmentType:"all",rating:"all",location:""},currentView:"card",marketplaceView:"card"},F=new Map;function h(i){return I[i]}function f(i,t){const a=I[i];I[i]=t,i==="currentRole"&&(t?localStorage.setItem("userRole",t):localStorage.removeItem("userRole")),i==="isLoggedIn"&&localStorage.setItem("isLoggedIn",String(t)),i==="doctorName"&&localStorage.setItem("doctorName",t),F.has(i)&&F.get(i).forEach(o=>o(t,a))}function Me(){f("currentRole",null),f("isLoggedIn",!1),localStorage.removeItem("userRole"),localStorage.removeItem("isLoggedIn")}const T={};let D=null;function y(i,t){T[i]=t}function b(i,t={}){const a=Object.keys(t).length?"?"+new URLSearchParams(t).toString():"",o=`#${i}${a}`;window.location.hash===o?A():window.location.hash=o}function Fe(){const i=window.location.hash.slice(1),[,t]=i.split("?");return t?Object.fromEntries(new URLSearchParams(t)):{}}function He(){return(window.location.hash.slice(1)||"/").split("?")[0]}async function A(){const i=He(),t=document.getElementById("app");D&&(D(),D=null);let a=T[i];if(!a){for(const[n,d]of Object.entries(T))if(n.includes(":")){const l=n.split("/"),c=i.split("/");if(l.length===c.length&&l.every((u,m)=>u.startsWith(":")||u===c[m])){a=d;const u={};l.forEach((m,k)=>{m.startsWith(":")&&(u[m.slice(1)]=c[k])}),window.__routeParams=u;break}}}if(!a){b("/");return}if((["/doctor/dashboard","/doctor/settings","/doctor/marketplace"].some(n=>i.startsWith(n))||i.startsWith("/supplier/"))&&!h("isLoggedIn")){b("/doctor/auth");return}t.classList.add("page-transition-exit"),await new Promise(n=>setTimeout(n,200));const s=await a();if(s&&s.render){t.innerHTML="";const n=s.render();typeof n=="string"?t.innerHTML=n:n instanceof HTMLElement&&t.appendChild(n),s.afterRender&&s.afterRender(),s.cleanup&&(D=s.cleanup)}t.classList.remove("page-transition-exit"),t.classList.add("page-transition-enter"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.remove("page-transition-enter")})}),window.scrollTo({top:0,behavior:"smooth"}),window.lucide&&setTimeout(()=>window.lucide.createIcons(),100),Re()}function Re(){const i=document.querySelectorAll(".animate-on-scroll");if(!i.length)return;const t=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),t.unobserve(o.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});i.forEach(a=>t.observe(a))}function Be(){if(window.addEventListener("hashchange",A),window.location.hash)A();else{const i=h("currentRole");i==="patient"?window.location.hash="#/patient/home":i==="doctor"&&h("isLoggedIn")?window.location.hash="#/doctor/dashboard":window.location.hash="#/"}}function je(){return{render(){const i=g();return`
        <div class="landing-page" style="position: relative; min-height: 100vh; overflow: hidden; display: flex; align-items: center; justify-content: center;">
          <!-- Background -->
          <div class="landing-bg" style="position: absolute; inset: 0; background: var(--bg-light); z-index: 0;"></div>
          
          <!-- Decorative Elements -->
          <div style="position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(192,225,210,0.35); top: -100px; left: -100px; filter: blur(50px); animation: float 8s ease-in-out infinite;"></div>
          <div style="position: absolute; width: 300px; height: 300px; border-radius: 50%; background: rgba(220,155,155,0.25); bottom: -50px; right: -50px; filter: blur(40px); animation: float 6s ease-in-out infinite reverse;"></div>
          <div style="position: absolute; top: 40%; left: 10%; font-size: 40px; opacity: 0.15; animation: float 5s ease-in-out infinite; color: var(--primary-dark);">🩺</div>

          <!-- Language Toggle -->
          <div style="position: absolute; top: 24px; right: 24px; z-index: 20;">
            <button class="btn btn-ghost" id="landing-lang-toggle" data-lang="${i==="ar"?"en":"ar"}" style="color: var(--text-primary); border: 1px solid var(--border); backdrop-filter: blur(10px);">
              <i data-lucide="globe" style="width: 18px; height: 18px; margin: 0 8px;"></i>
              ${i==="ar"?"English":"العربية"}
            </button>
          </div>

          <!-- Content -->
          <div class="landing-content container" style="position: relative; z-index: 10; text-align: center; color: var(--text-primary);">
            
            <div style="margin-bottom: 60px; animation: fadeInDown 0.8s ease;">
              <h1 class="landing-title" style="font-size: clamp(40px, 8vw, 64px); font-weight: 800; margin-bottom: 16px; text-shadow: 0 2px 10px rgba(0,0,0,0.05); line-height: 1.2; color: var(--text-primary);">
                ${e("landing.title")}
              </h1>
              <p class="landing-subtitle" style="font-size: clamp(18px, 4vw, 24px); max-width: 600px; margin: 0 auto; font-weight: 500; color: var(--text-secondary);">
                ${e("landing.subtitle")}
              </p>
            </div>

            <div style="margin-bottom: 48px; animation: fadeIn 1s ease 0.3s both;">
              <h2 style="font-size: 28px; margin-bottom: 32px; font-weight: 600; color: var(--text-primary);">${e("landing.whoAreYou")}</h2>
              
              <div class="role-cards" style="display: flex; gap: 32px; justify-content: center; flex-wrap: wrap;">
                
                <!-- Patient Card -->
                <div class="role-card" id="role-patient" style="background: var(--bg-card-solid); border: 2px solid var(--border); border-radius: 24px; padding: 40px 32px; width: 280px; cursor: pointer; transition: all 0.3s; box-shadow: var(--shadow-md); color: var(--text-primary);">
                  <div class="role-card-icon" style="width: 80px; height: 80px; background: var(--bg-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--primary-dark); box-shadow: var(--shadow-sm);">
                    <i data-lucide="user" style="width: 40px; height: 40px;"></i>
                  </div>
                  <h3 class="role-card-title" style="font-size: 24px; margin-bottom: 12px; color: var(--text-primary);">${e("landing.patient")}</h3>
                  <p class="role-card-desc" style="font-size: 16px; margin: 0; color: var(--text-secondary);">${e("landing.patientDesc")}</p>
                </div>

                <!-- Doctor Card -->
                <div class="role-card" id="role-doctor" style="background: var(--bg-card-solid); border: 2px solid var(--border); border-radius: 24px; padding: 40px 32px; width: 280px; cursor: pointer; transition: all 0.3s; box-shadow: var(--shadow-md); color: var(--text-primary);">
                  <div class="role-card-icon" style="width: 80px; height: 80px; background: var(--bg-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--accent-dark); box-shadow: var(--shadow-sm);">
                    <i data-lucide="stethoscope" style="width: 40px; height: 40px;"></i>
                  </div>
                  <h3 class="role-card-title" style="font-size: 24px; margin-bottom: 12px; color: var(--text-primary);">${e("landing.doctor")}</h3>
                  <p class="role-card-desc" style="font-size: 16px; margin: 0; color: var(--text-secondary);">${e("landing.doctorDesc")}</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      `},afterRender(){const i=document.getElementById("role-patient"),t=document.getElementById("role-doctor"),a=document.getElementById("landing-lang-toggle");i&&(i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-10px) scale(1.02)",i.style.borderColor="var(--primary-dark)",i.style.background="var(--bg-light)"}),i.addEventListener("mouseleave",()=>{i.style.transform="",i.style.borderColor="var(--border)",i.style.background="var(--bg-card-solid)"}),i.addEventListener("click",()=>{f("currentRole","patient"),b("/patient/home")})),t&&(t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-10px) scale(1.02)",t.style.borderColor="var(--accent-dark)",t.style.background="var(--bg-light)"}),t.addEventListener("mouseleave",()=>{t.style.transform="",t.style.borderColor="var(--border)",t.style.background="var(--bg-card-solid)"}),t.addEventListener("click",()=>{f("currentRole","doctor"),b("/doctor/auth")})),a&&a.addEventListener("click",o=>{P(o.currentTarget.dataset.lang)})}}}function x(){const i=h("isLoggedIn"),t=g(),a=window.location.hash.slice(1).split("?")[0]||"/",o=a.startsWith("/doctor/")||a.startsWith("/supplier/"),r=o?"doctor":"patient";let s=[];r==="patient"?s=[{path:"/patient/home",label:e("nav.home")},{path:"/patient/find-doctor",label:e("nav.findDoctor")},{path:"/patient/trends",label:e("nav.trends")},{path:"/about",label:e("nav.aboutUs")},{path:"/contact",label:e("nav.contactUs")}]:r==="doctor"&&(i?s=[{path:"/doctor/dashboard",label:e("nav.dashboard")},{path:"/doctor/marketplace",label:e("nav.marketplace")},{path:"/doctor/settings",label:e("nav.settings")}]:s=[{path:"/doctor/auth",label:e("nav.login")}]);const n=s.map(c=>`<a href="javascript:void(0)" class="navbar-link ${a===c.path?"active":""}" data-route="${c.path}">${c.label}</a>`).join(""),d=t==="ar"?"English":"العربية",l=t==="ar"?"en":"ar";return`
    <nav class="navbar">
      <div class="container flex-between" style="height: 100%;">
        <a href="#/" class="navbar-brand" style="cursor: pointer;">
          <span class="navbar-brand-text" style="font-weight: bold; font-size: 20px; cursor: pointer;">${e("landing.title")}</span>
        </a>
        
        <div class="navbar-links desktop-only">
          ${n}
        </div>
        
        <div class="navbar-actions">
          <!-- Theme toggle button removed -->
          <button class="btn btn-ghost btn-sm lang-toggle" data-lang="${l}">
            <i data-lucide="globe" style="width:16px;height:16px;margin:0 4px"></i>
            <span class="desktop-only">${d}</span>
          </button>
          
          ${i&&o?`
            <button class="btn btn-secondary btn-sm logout-btn desktop-only">
              ${e("nav.logout")||"Logout"}
            </button>
          `:""}
          
          <button class="mobile-menu-btn btn btn-icon btn-ghost mobile-only">
            <i data-lucide="menu"></i>
          </button>
        </div>
      </div>
    </nav>
    
    <div class="mobile-drawer">
      <div class="mobile-drawer-header flex-between">
        <a href="#/" class="navbar-brand" style="cursor: pointer;">
          <span class="navbar-brand-text" style="font-weight: bold; font-size: 20px; cursor: pointer;">${e("landing.title")}</span>
        </a>
        <button class="mobile-close-btn btn btn-icon btn-ghost">
          <i data-lucide="x"></i>
        </button>
      </div>
      <div class="mobile-drawer-links">
        ${n}
        ${i&&o?`
          <a href="javascript:void(0)" class="navbar-link logout-btn" style="color:var(--accent)">
            ${e("nav.logout")||"Logout"}
          </a>
        `:""}
      </div>
    </div>
  `}function $(){const i=document.querySelector(".navbar"),t=document.querySelector(".mobile-menu-btn"),a=document.querySelector(".mobile-close-btn"),o=document.querySelector(".mobile-drawer"),r=document.querySelector(".lang-toggle"),s=document.querySelectorAll(".logout-btn"),n=document.querySelectorAll(".navbar-link[data-route]");window.addEventListener("scroll",()=>{window.scrollY>50?i==null||i.classList.add("scrolled"):i==null||i.classList.remove("scrolled")}),t==null||t.addEventListener("click",()=>{o==null||o.classList.add("active")}),a==null||a.addEventListener("click",()=>{o==null||o.classList.remove("active")}),r==null||r.addEventListener("click",d=>{const l=d.currentTarget.dataset.lang;P(l)}),s.forEach(d=>{d.addEventListener("click",()=>{Me(),b("/")})}),n.forEach(d=>{d.addEventListener("click",l=>{l.preventDefault();const c=l.currentTarget.dataset.route;o==null||o.classList.remove("active"),b(c)})})}function w(){return`
    <footer class="footer">
      <div class="container">
        <div class="grid grid-4" style="gap: 32px; margin-bottom: 40px;">
          
          <div class="footer-section">
            <div class="footer-brand" style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
              <span style="font-weight: bold; font-size: 20px; color: var(--primary-dark);">${e("landing.title")}</span>
            </div>
            <p style="line-height: 1.6;">
              ${e("footer.description")}
            </p>
          </div>
          
          <div class="footer-section">
            <h4 style="color: var(--text-primary); margin-bottom: 16px; font-size: 18px;">${e("footer.quickLinks")}</h4>
            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px;">
              <li><a href="#/patient/home" style="text-decoration: none; transition: color 0.3s;">${e("nav.home")}</a></li>
              <li><a href="#/patient/find-doctor" style="text-decoration: none; transition: color 0.3s;">${e("nav.findDoctor")}</a></li>
              <li><a href="#/patient/trends" style="text-decoration: none; transition: color 0.3s;">${e("nav.trends")}</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 style="color: var(--text-primary); margin-bottom: 16px; font-size: 18px;">${e("footer.support")}</h4>
            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px;">
              <li><a href="#/about" style="text-decoration: none; transition: color 0.3s;">${e("nav.aboutUs")}</a></li>
              <li><a href="#/contact" style="text-decoration: none; transition: color 0.3s;">${e("nav.contactUs")}</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 style="color: var(--text-primary); margin-bottom: 16px; font-size: 18px;">${e("footer.followUs")}</h4>
            <div style="display: flex; gap: 16px;">
              <a href="#" style="transition: color 0.3s;" aria-label="Facebook"><i data-lucide="facebook"></i></a>
              <a href="#" style="transition: color 0.3s;" aria-label="Twitter"><i data-lucide="twitter"></i></a>
              <a href="#" style="transition: color 0.3s;" aria-label="Instagram"><i data-lucide="instagram"></i></a>
            </div>
          </div>
          
        </div>
        
        <div class="footer-bottom" style="padding-top: 24px; border-top: 1px solid var(--border); text-align: center; color: var(--text-muted); font-size: 14px;">
          &copy; ${new Date().getFullYear()} ${e("landing.title")}. ${e("footer.rights")||"All rights reserved."}
        </div>
      </div>
    </footer>
  `}function S({title:i,subtitle:t,showSearch:a=!1,searchPlaceholder:o="",gradient:r="var(--gradient-hero)"}){return`
    <section class="hero-section" style="background: ${r}; position: relative; overflow: hidden; padding: 100px 0 60px; color: white;">
      <!-- Decorative background elements -->
      <div style="position: absolute; width: 300px; height: 300px; border-radius: 50%; background: rgba(255,255,255,0.1); top: -100px; right: -50px; filter: blur(40px); animation: float 6s ease-in-out infinite;"></div>
      <div style="position: absolute; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.05); bottom: 20px; left: 10%; filter: blur(30px); animation: float 8s ease-in-out infinite reverse;"></div>
      
      <div class="container" style="position: relative; z-index: 10; text-align: center;">
        <h1 class="hero-title animate-on-scroll stagger-1" style="font-size: clamp(32px, 5vw, 48px); font-weight: 700; margin-bottom: 16px; text-shadow: 0 4px 12px rgba(0,0,0,0.1);">${i}</h1>
        ${t?`<p class="hero-subtitle animate-on-scroll stagger-2" style="font-size: clamp(16px, 3vw, 20px); opacity: 0.9; max-width: 600px; margin: 0 auto 32px;">${t}</p>`:""}
        
        ${a?`
          <div class="hero-search animate-on-scroll stagger-3" style="max-width: 600px; margin: 0 auto;">
            <div class="search-bar" style="display: flex; background: var(--bg-card); backdrop-filter: blur(10px); border-radius: 50px; padding: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
              <input type="text" id="hero-search-input" placeholder="${o}" style="flex: 1; border: none; background: transparent; padding: 12px 24px; font-size: 16px; outline: none; color: var(--text-primary);">
              <button class="btn btn-primary btn-icon" id="hero-search-btn" style="border-radius: 50%; width: 48px; height: 48px;">
                <i data-lucide="search"></i>
              </button>
            </div>
          </div>
        `:""}
      </div>
    </section>
  `}function C(i,t="md"){let a="";for(let o=1;o<=5;o++)i>=o?a+=`<i data-lucide="star" class="star-filled ${t}"></i>`:i>=o-.5?a+=`<i data-lucide="star-half" class="star-filled ${t}"></i>`:a+=`<i data-lucide="star" class="star-empty ${t}"></i>`;return`<div class="rating-stars" style="display: flex; gap: 2px;">${a}</div>`}function Ne(i=0){let t="";for(let a=1;a<=5;a++){const o=i>=a;t+=`
      <i data-lucide="star" 
         class="star-input-icon ${o?"star-filled":"star-empty"} md cursor-pointer" 
         data-rating="${a}" 
         style="transition: all 0.2s;">
      </i>`}return`<div class="star-input-container" style="display: flex; gap: 4px;" data-value="${i}">${t}</div>`}function We(i,t){const a=i.querySelector(".star-input-container");if(!a)return;const o=a.querySelectorAll(".star-input-icon");let r=parseInt(a.dataset.value)||0;function s(n){o.forEach((d,l)=>{l<n?(d.classList.add("star-filled"),d.classList.remove("star-empty")):(d.classList.add("star-empty"),d.classList.remove("star-filled"))})}o.forEach((n,d)=>{n.addEventListener("mouseenter",()=>{s(d+1)}),n.addEventListener("mouseleave",()=>{s(r)}),n.addEventListener("click",()=>{r=d+1,a.dataset.value=r,s(r),t&&t(r)})})}function R(i){const t=g(),a=i.name[t],o=i.specialty[t],r=i.location[t];return`
    <div class="card card-hover doctor-card" style="display: flex; flex-direction: column; height: 100%; padding: clamp(16px, 3vw, 24px); text-align: center; gap: clamp(10px, 2vw, 16px); cursor: pointer;" onclick="window.location.hash='#/doctor-profile/${i.id}'">
      <div class="doctor-photo-wrapper" style="margin: 0 auto; position: relative;">
        <img src="${i.photo}" alt="${a}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 4px solid var(--bg-card-solid); box-shadow: var(--shadow-sm);">
        <div class="rating-badge" style="position: absolute; bottom: 0; right: 0; background: var(--bg-card-solid); border-radius: 20px; padding: 2px 8px; font-size: 12px; font-weight: bold; display: flex; align-items: center; gap: 4px; box-shadow: var(--shadow-sm); color: var(--text-primary);">
          <i data-lucide="star" class="star-filled" style="width: 12px; height: 12px;"></i> ${i.rating}
        </div>
      </div>
      
      <div class="doctor-info" style="flex: 1;">
        <h3 style="font-size: 18px; margin-bottom: 4px; color: var(--text-primary);">${a}</h3>
        <span class="badge badge-secondary" style="margin-bottom: 12px; display: inline-block;">${o}</span>
        
        <div class="doctor-meta" style="display: flex; flex-direction: column; gap: 8px; font-size: 14px; color: var(--text-secondary); margin-bottom: 16px;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 4px;">
            <i data-lucide="map-pin" style="width: 14px; height: 14px;"></i> ${r}
          </div>
          <div style="display: flex; align-items: center; justify-content: center; gap: 4px;">
            <i data-lucide="briefcase" style="width: 14px; height: 14px;"></i> ${i.experience} ${e("doctorProfile.experience")||"Years Exp."}
          </div>
        </div>
      </div>
      
      <button class="btn btn-primary" style="width: 100%;" onclick="window.location.hash='#/doctor-profile/${i.id}'">
        ${e("common.showMore")||"View Profile"}
      </button>
    </div>
  `}function Ue(i){const t=g(),a=i.name[t],o=i.specialty[t],r=i.location[t];return`
    <div class="card card-hover doctor-list-item" style="display: flex; flex-wrap: wrap; padding: clamp(12px, 2vw, 16px); gap: clamp(12px, 2vw, 24px); align-items: center; cursor: pointer;" onclick="window.location.hash='#/doctor-profile/${i.id}'">
      <img src="${i.photo}" alt="${a}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover;">
      
      <div class="doctor-info" style="flex: 1;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <h3 style="font-size: 18px; margin-bottom: 4px; color: var(--text-primary);">${a}</h3>
            <span class="badge badge-secondary">${o}</span>
          </div>
          <div class="rating-display" style="text-align: right;">
            <div style="display: flex; align-items: center; gap: 4px; font-weight: bold; font-size: 16px;">
              <i data-lucide="star" class="star-filled" style="width: 16px; height: 16px;"></i> ${i.rating}
            </div>
            <div style="font-size: 12px; color: var(--text-secondary);">${i.reviewCount} ${e("doctorProfile.reviews")}</div>
          </div>
        </div>
        
        <div style="display: flex; gap: clamp(8px, 2vw, 16px); font-size: 14px; color: var(--text-secondary); flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 4px;">
            <i data-lucide="map-pin" style="width: 14px; height: 14px;"></i> ${r}
          </div>
          <div style="display: flex; align-items: center; gap: 4px;">
            <i data-lucide="briefcase" style="width: 14px; height: 14px;"></i> ${i.experience} ${e("doctorProfile.experience")}
          </div>
        </div>
      </div>
      
      <button class="btn btn-primary" onclick="window.location.hash='#/doctor-profile/${i.id}'">
        ${e("common.showMore")||"View Profile"}
      </button>
    </div>
  `}const M=[{id:1,name:{ar:"د. أحمد الخالدي",en:"Dr. Ahmad Al-Khalidi"},specialty:{ar:"تقويم الأسنان",en:"Orthodontics"},specialtyKey:"orthodontics",photo:"https://ui-avatars.com/api/?name=Ahmad+Khalidi&size=200&background=6C63FF&color=fff",rating:4.8,reviewCount:124,experience:15,location:{ar:"حمص - المحطة",en:"Homs - Al-Mahatta"},lat:34.725,lng:36.711,phone:"+963933123456",address:{ar:"شارع المحطة الرئيسي، عمارة الأطباء، الطابق 3",en:"Main Al-Mahatta St., Doctors Building, 3rd Floor"},website:"https://example.com",hours:{sat:"09:00 - 17:00",sun:"09:00 - 17:00",mon:"09:00 - 17:00",tue:"09:00 - 17:00",wed:"09:00 - 17:00",thu:"09:00 - 14:00",fri:"مغلق / Closed"},credentials:{ar:["بكالوريوس طب أسنان - جامعة دمشق","ماجستير تقويم - جامعة البعث"],en:["BDS - Damascus University","MSc Orthodontics - Al-Baath University"]},bio:{ar:"طبيب أسنان متخصص في تقويم الأسنان مع خبرة تزيد عن 15 عاماً في علاج الحالات المعقدة في حمص.",en:"Dentist specialized in orthodontics with over 15 years of experience treating complex cases in Homs."},reviews:[{name:{ar:"سارة محمد",en:"Sara Mohammad"},rating:5,comment:{ar:"طبيب ممتاز وعيادة نظيفة جداً",en:"Excellent doctor and very clean clinic"},date:"2024-03-15"}]},{id:2,name:{ar:"د. فاطمة العمري",en:"Dr. Fatima Al-Omari"},specialty:{ar:"تجميل الأسنان",en:"Cosmetic Dentistry"},specialtyKey:"cosmetic",photo:"https://ui-avatars.com/api/?name=Fatima+Omari&size=200&background=FF6B9D&color=fff",rating:4.9,reviewCount:203,experience:12,location:{ar:"حمص - الإنشاءات",en:"Homs - Inshaat"},lat:34.72,lng:36.702,phone:"+963944123456",address:{ar:"شارع البرازيل، مجمع العيادات الطبي، الطابق 2",en:"Brazil St., Medical Clinics Complex, 2nd Floor"},website:"https://example.com",hours:{sat:"10:00 - 18:00",sun:"10:00 - 18:00",mon:"10:00 - 18:00",tue:"10:00 - 18:00",wed:"10:00 - 18:00",thu:"10:00 - 15:00",fri:"مغلق / Closed"},credentials:{ar:["بكالوريوس طب أسنان - جامعة البعث","دبلوم تجميل الأسنان - جامعة حلب"],en:["BDS - Al-Baath University","Diploma in Cosmetic Dentistry - Aleppo University"]},bio:{ar:"متخصصة في تجميل الأسنان وابتسامة هوليود مع خبرة 12 عاماً في أحدث التقنيات التجميلية.",en:"Specialist in cosmetic dentistry and Hollywood Smile with 12 years of experience in the latest cosmetic techniques."},reviews:[{name:{ar:"لينا خالد",en:"Lina Khaled"},rating:5,comment:{ar:"ابتسامتي تغيرت تماماً! شكراً دكتورة فاطمة",en:"My smile completely changed! Thank you Dr. Fatima"},date:"2024-04-01"}]},{id:3,name:{ar:"د. محمد الزعبي",en:"Dr. Mohammad Al-Zoubi"},specialty:{ar:"جراحة الأسنان",en:"Dental Surgery"},specialtyKey:"surgery",photo:"https://ui-avatars.com/api/?name=Mohammad+Zoubi&size=200&background=00D9A6&color=fff",rating:4.7,reviewCount:98,experience:20,location:{ar:"حمص - الغوطة",en:"Homs - Ghouta"},lat:34.735,lng:36.695,phone:"+963955123456",address:{ar:"شارع الغوطة الرئيسي، بناية 12",en:"Main Ghouta St., Building 12"},website:"https://example.com",hours:{sat:"08:00 - 16:00",sun:"08:00 - 16:00",mon:"08:00 - 16:00",tue:"08:00 - 16:00",wed:"08:00 - 16:00",thu:"08:00 - 13:00",fri:"مغلق / Closed"},credentials:{ar:["بكالوريوس طب أسنان - جامعة دمشق","بورد سوري في جراحة الفم والوجه والفكين"],en:["BDS - Damascus University","Syrian Board in Oral & Maxillofacial Surgery"]},bio:{ar:"جراح أسنان ذو خبرة واسعة في جراحات الفم والفكين وزراعة الأسنان.",en:"Experienced dental surgeon in oral and maxillofacial surgery and dental implants."},reviews:[{name:{ar:"خالد يوسف",en:"Khaled Yousef"},rating:5,comment:{ar:"أجرى لي عملية زراعة ناجحة جداً",en:"Performed a very successful implant surgery"},date:"2024-01-10"}]},{id:4,name:{ar:"د. نور الحسن",en:"Dr. Nour Al-Hasan"},specialty:{ar:"طب أسنان الأطفال",en:"Pediatric Dentistry"},specialtyKey:"pediatric",photo:"https://ui-avatars.com/api/?name=Nour+Hasan&size=200&background=FFB347&color=fff",rating:4.9,reviewCount:156,experience:10,location:{ar:"حمص - الحميدية",en:"Homs - Al-Hamidiyah"},lat:34.733,lng:36.715,phone:"+963966123456",address:{ar:"شارع الحميدية، مقابل الكنيسة، الطابق 1",en:"Al-Hamidiyah St., Opposite the Church, 1st Floor"},website:"https://example.com",hours:{sat:"09:00 - 17:00",sun:"09:00 - 17:00",mon:"09:00 - 17:00",tue:"09:00 - 17:00",wed:"09:00 - 17:00",thu:"09:00 - 14:00",fri:"مغلق / Closed"},credentials:{ar:["بكالوريوس طب أسنان - جامعة البعث","ماجستير طب أسنان الأطفال"],en:["BDS - Al-Baath University","MSc Pediatric Dentistry"]},bio:{ar:"طبيبة أسنان متخصصة في علاج أسنان الأطفال بأحدث الأساليب.",en:"Dentist specialized in pediatric dental care with the latest techniques."},reviews:[{name:{ar:"هالة سمير",en:"Hala Samir"},rating:5,comment:{ar:"أفضل طبيبة أسنان أطفال",en:"Best pediatric dentist"},date:"2024-03-28"}]},{id:5,name:{ar:"د. يزن القاسم",en:"Dr. Yazan Al-Qasem"},specialty:{ar:"تنظيف وتلميع",en:"Cleaning & Polishing"},specialtyKey:"cleaning",photo:"https://ui-avatars.com/api/?name=Yazan+Qasem&size=200&background=4ECDC4&color=fff",rating:4.5,reviewCount:87,experience:8,location:{ar:"حمص - الدبلان",en:"Homs - Al-Dablan"},lat:34.728,lng:36.71,phone:"+963988123456",address:{ar:"شارع الدبلان، مجمع الأندلس، الطابق 4",en:"Al-Dablan St., Al-Andalus Complex, 4th Floor"},website:"https://example.com",hours:{sat:"08:30 - 16:30",sun:"08:30 - 16:30",mon:"08:30 - 16:30",tue:"08:30 - 16:30",wed:"08:30 - 16:30",thu:"08:30 - 13:00",fri:"مغلق / Closed"},credentials:{ar:["بكالوريوس طب أسنان - جامعة تشرين"],en:["BDS - Tishreen University"]},bio:{ar:"متخصص في تنظيف الأسنان الاحترافي والعناية بصحة الفم.",en:"Specialist in professional teeth cleaning and oral health care."},reviews:[{name:{ar:"فيصل ناصر",en:"Faisal Naser"},rating:4,comment:{ar:"تنظيف ممتاز ونتيجة واضحة",en:"Excellent cleaning and visible results"},date:"2024-04-05"}]},{id:6,name:{ar:"د. عبدالله الرواشدة",en:"Dr. Abdullah Al-Rawashdeh"},specialty:{ar:"أخرى",en:"Other"},specialtyKey:"other",photo:"https://ui-avatars.com/api/?name=Abdullah+Rawashdeh&size=200&background=0EA5E9&color=fff",rating:4.2,reviewCount:58,experience:9,location:{ar:"حمص - الوعر",en:"Homs - Al-Waer"},lat:34.74,lng:36.68,phone:"+963999123456",address:{ar:"حي الوعر، مقابل المشفى، الطابق 2",en:"Al-Waer, Opposite the Hospital, 2nd Floor"},website:"https://example.com",hours:{sat:"09:00 - 18:00",sun:"09:00 - 18:00",mon:"09:00 - 18:00",tue:"09:00 - 18:00",wed:"09:00 - 18:00",thu:"09:00 - 15:00",fri:"مغلق / Closed"},credentials:{ar:["بكالوريوس طب أسنان - جامعة حلب"],en:["BDS - Aleppo University"]},bio:{ar:"طبيب أسنان عام متخصص في علاج العصب وحشوات الأسنان.",en:"General dentist specialized in root canal treatment and dental fillings."},reviews:[{name:{ar:"جمال إبراهيم",en:"Jamal Ibrahim"},rating:4,comment:{ar:"علاج العصب كان بدون ألم",en:"Root canal was painless"},date:"2024-02-08"}]}],B=[{id:1,title:{ar:"ابتسامة هوليود",en:"Hollywood Smile"},description:{ar:"تعرف على أحدث تقنيات ابتسامة هوليود وكيف يمكنها تغيير ابتسامتك بالكامل في زيارات قليلة.",en:"Learn about the latest Hollywood Smile techniques and how they can completely transform your smile in just a few visits."},fullContent:{ar:"ابتسامة هوليود هي واحدة من أكثر إجراءات تجميل الأسنان شيوعاً في العالم العربي. تتضمن العملية تركيب قشور خزفية رقيقة (فينير) على الأسنان الأمامية لمنحها مظهراً مثالياً من حيث اللون والشكل والتناسق. أصبحت هذه التقنية متاحة الآن بأسعار معقولة في الأردن، حيث يستخدم أطباء الأسنان أحدث المواد والتقنيات الرقمية لتصميم ابتسامة طبيعية ومتناسقة. تستغرق العملية عادةً من 2 إلى 3 جلسات، ويمكن أن تدوم القشور الخزفية لمدة 10 إلى 15 سنة مع العناية المناسبة.",en:"Hollywood Smile is one of the most popular cosmetic dental procedures in the Arab world. The process involves placing thin porcelain veneers on the front teeth to give them a perfect appearance in terms of color, shape, and symmetry. This technique is now available at affordable prices in Jordan, where dentists use the latest materials and digital technologies to design a natural and harmonious smile. The procedure typically takes 2 to 3 sessions, and porcelain veneers can last 10 to 15 years with proper care."},category:"cosmetic",image:"https://ui-avatars.com/api/?name=HS&size=400&background=FF6B9D&color=fff&font-size=0.5",icon:"sparkles"},{id:2,title:{ar:"تبييض الأسنان",en:"Teeth Whitening"},description:{ar:"اكتشف أحدث طرق تبييض الأسنان الآمنة والفعالة للحصول على ابتسامة مشرقة وبيضاء.",en:"Discover the latest safe and effective teeth whitening methods for a bright, white smile."},fullContent:{ar:"تبييض الأسنان أصبح من أكثر العلاجات التجميلية طلباً في عيادات الأسنان. تتوفر اليوم تقنيات متعددة تشمل التبييض بالليزر الذي يمنح نتائج فورية في جلسة واحدة، والتبييض المنزلي باستخدام قوالب مخصصة وجل تبييض احترافي. تعتمد التقنيات الحديثة على مواد آمنة لا تضر بمينا الأسنان، وتستطيع تفتيح لون الأسنان بعدة درجات. ينصح أطباء الأسنان بإجراء تنظيف احترافي قبل التبييض للحصول على أفضل النتائج، كما يُنصح بتجنب الأطعمة والمشروبات الملونة لمدة 48 ساعة بعد العلاج.",en:"Teeth whitening has become one of the most requested cosmetic treatments in dental clinics. Today, multiple techniques are available including laser whitening that provides immediate results in a single session, and at-home whitening using custom trays and professional whitening gel. Modern techniques rely on safe materials that do not harm tooth enamel and can lighten teeth by several shades. Dentists recommend professional cleaning before whitening for the best results, and advise avoiding colored foods and drinks for 48 hours after treatment."},category:"cosmetic",image:"https://ui-avatars.com/api/?name=TW&size=400&background=FFB347&color=fff&font-size=0.5",icon:"sun"},{id:3,title:{ar:"زراعة الأسنان",en:"Dental Implants"},description:{ar:"كل ما تحتاج معرفته عن زراعة الأسنان الحديثة وأنواعها ومميزاتها.",en:"Everything you need to know about modern dental implants, their types, and advantages."},fullContent:{ar:"زراعة الأسنان هي الحل الأمثل والأكثر تقدماً لتعويض الأسنان المفقودة. تتكون الزرعة من برغي تيتانيوم يُغرس في عظم الفك ليحل محل جذر السن، ثم يُركب عليه تاج خزفي يشبه السن الطبيعي تماماً. التقنيات الحديثة مثل الزراعة الفورية تسمح بتركيب السن في نفس يوم الجراحة. تتميز زراعة الأسنان بنسبة نجاح تتجاوز 95% وتدوم مدى الحياة مع العناية المناسبة. يستخدم أطباء الأسنان في الأردن أحدث أنظمة الزراعة العالمية مثل Straumann وNobel Biocare.",en:"Dental implants are the most advanced and optimal solution for replacing missing teeth. An implant consists of a titanium screw that is placed into the jawbone to replace the tooth root, then a porcelain crown that looks exactly like a natural tooth is mounted on top. Modern techniques such as immediate loading allow the tooth to be placed on the same day as surgery. Dental implants have a success rate exceeding 95% and can last a lifetime with proper care. Dentists in Jordan use the latest global implant systems such as Straumann and Nobel Biocare."},category:"surgery",image:"https://ui-avatars.com/api/?name=DI&size=400&background=6C63FF&color=fff&font-size=0.5",icon:"cog"},{id:4,title:{ar:"التقويم الشفاف",en:"Invisible Braces"},description:{ar:"التقويم الشفاف: البديل العصري للتقويم المعدني التقليدي لأسنان مستقيمة دون أسلاك.",en:"Invisible braces: the modern alternative to traditional metal braces for straight teeth without wires."},fullContent:{ar:"التقويم الشفاف أو الإنفزلاين أحدث ثورة في عالم تقويم الأسنان. يعتمد على سلسلة من القوالب البلاستيكية الشفافة المصممة بتقنية ثلاثية الأبعاد لتحريك الأسنان تدريجياً إلى مواضعها الصحيحة. يتميز التقويم الشفاف بأنه غير مرئي تقريباً، ويمكن إزالته أثناء الأكل وتنظيف الأسنان، مما يجعله خياراً مثالياً للبالغين والمراهقين. تتراوح مدة العلاج عادةً بين 6 أشهر وسنتين حسب حالة الأسنان. يتوفر التقويم الشفاف الآن لدى العديد من أطباء الأسنان المعتمدين في الأردن بأسعار تنافسية.",en:"Invisible braces, or Invisalign, have revolutionized the world of orthodontics. They rely on a series of clear plastic aligners designed with 3D technology to gradually move teeth into their correct positions. Invisible braces are nearly invisible, and can be removed while eating and brushing teeth, making them an ideal choice for adults and teenagers. Treatment duration typically ranges from 6 months to 2 years depending on the dental condition. Clear aligners are now available from many certified dentists in Jordan at competitive prices."},category:"orthodontics",image:"https://ui-avatars.com/api/?name=IB&size=400&background=4ECDC4&color=fff&font-size=0.5",icon:"eye"},{id:5,title:{ar:"طب الأسنان بالليزر",en:"Laser Dentistry"},description:{ar:"تعرف على استخدامات الليزر في طب الأسنان الحديث وكيف يجعل العلاج أسرع وأقل ألماً.",en:"Learn about the uses of laser in modern dentistry and how it makes treatment faster and less painful."},fullContent:{ar:"دخل الليزر عالم طب الأسنان ليغير العديد من الإجراءات التقليدية. يُستخدم الليزر اليوم في علاج اللثة وتجميلها، وتبييض الأسنان، وعلاج التسوس دون الحاجة للحفر التقليدي في كثير من الحالات. من أهم مميزات الليزر أنه يقلل الألم بشكل كبير ويُسرّع عملية الشفاء ويقلل النزيف. كما يُستخدم في إزالة الأنسجة الزائدة وتعقيم قنوات الجذر. أصبحت عيادات الأسنان في الأردن تتبنى هذه التقنية بشكل متزايد لتقديم تجربة علاجية أفضل وأكثر راحة للمرضى.",en:"Laser has entered the world of dentistry to transform many traditional procedures. Today, laser is used in gum treatment and contouring, teeth whitening, and cavity treatment without the need for traditional drilling in many cases. Among the most important advantages of laser are that it significantly reduces pain, speeds up the healing process, and minimizes bleeding. It is also used for removing excess tissue and sterilizing root canals. Dental clinics in Jordan are increasingly adopting this technology to provide a better and more comfortable treatment experience for patients."},category:"other",image:"https://ui-avatars.com/api/?name=LD&size=400&background=A855F7&color=fff&font-size=0.5",icon:"bolt"},{id:6,title:{ar:"طب الأسنان الرقمي",en:"Digital Dentistry"},description:{ar:"كيف تُحدث التقنيات الرقمية ثورة في طب الأسنان من التشخيص إلى العلاج.",en:"How digital technologies are revolutionizing dentistry from diagnosis to treatment."},fullContent:{ar:"طب الأسنان الرقمي يمثل مستقبل الرعاية الصحية للأسنان. يشمل استخدام الماسحات الضوئية ثلاثية الأبعاد لأخذ بصمات رقمية دقيقة بدلاً من القوالب التقليدية، وتصميم التركيبات والتيجان باستخدام برامج CAD/CAM وتصنيعها في نفس اليوم. كما تُستخدم الطابعات ثلاثية الأبعاد لإنتاج نماذج دراسية وقوالب تقويم شفاف. أحدثت هذه التقنيات نقلة نوعية في دقة التشخيص وسرعة العلاج وراحة المريض. العديد من عيادات الأسنان المتطورة في عمّان تعتمد الآن على هذه التقنيات لتقديم أفضل رعاية ممكنة.",en:"Digital dentistry represents the future of dental healthcare. It includes the use of 3D scanners for taking precise digital impressions instead of traditional molds, designing restorations and crowns using CAD/CAM software and manufacturing them on the same day. 3D printers are also used to produce study models and clear aligner trays. These technologies have made a quantum leap in diagnostic accuracy, treatment speed, and patient comfort. Many advanced dental clinics in Amman now rely on these technologies to provide the best possible care."},category:"other",image:"https://ui-avatars.com/api/?name=DD&size=400&background=0EA5E9&color=fff&font-size=0.5",icon:"cpu"}];function Ve(){return{render(){const t=[...M].sort((s,n)=>n.rating-s.rating).slice(0,4).map(s=>`
        <div style="flex: 0 0 min(280px, 80vw);">
          ${R(s)}
        </div>
      `).join(""),a=g(),r=B.slice(0,3).map(s=>`
        <div class="trend-card card card-hover" style="border-radius: 16px; overflow: hidden; cursor: pointer;">
          <div style="height: 200px; position: relative;">
            <img src="${s.image}" alt="${s.title[a]}" style="width: 100%; height: 100%; object-fit: cover;">
            <div style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.45);"></div>
            <h3 style="position: absolute; bottom: 16px; left: 16px; right: 16px; color: white; margin: 0; font-size: 20px;">${s.title[a]}</h3>
          </div>
          <div style="padding: 16px;">
            <p style="color: var(--text-secondary); margin: 0; font-size: 14px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${s.description[a]}
            </p>
          </div>
        </div>
      `).join("");return`
        ${x()}
        
        <div class="page-wrapper">
          ${S({title:e("patientHome.heroTitle"),subtitle:e("patientHome.heroSubtitle"),showSearch:!0,searchPlaceholder:e("patientHome.searchPlaceholder")})}

          <!-- Featured Doctors -->
          <section class="section container">
            <div class="section-header animate-on-scroll stagger-1" style="margin-bottom: clamp(24px, 4vw, 40px); display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
              <div>
                <h2 style="font-size: clamp(22px, 4vw, 32px); margin: 0;">${e("patientHome.featuredDoctors")}</h2>
                <div style="width: 60px; height: 4px; background: var(--primary); border-radius: 2px; margin-top: 12px;"></div>
              </div>
              <button class="btn btn-ghost" id="view-all-doctors-btn">
                ${e("patientHome.viewAll")} <i data-lucide="${g()==="ar"?"arrow-left":"arrow-right"}" style="width: 16px; height: 16px;"></i>
              </button>
            </div>
            
            <div class="animate-on-scroll stagger-2" style="display: flex; gap: clamp(12px, 2vw, 24px); overflow-x: auto; padding-bottom: 16px; margin: 0 -12px; padding: 12px; scrollbar-width: none; -webkit-overflow-scrolling: touch;">
              ${t}
            </div>
          </section>

          <!-- Trending Services -->
          <section class="section container" style="background: var(--bg-card); border-radius: clamp(16px, 3vw, 32px); padding: clamp(24px, 5vw, 60px) clamp(16px, 4vw, 40px); margin-bottom: clamp(30px, 5vw, 60px);">
            <div class="section-header animate-on-scroll stagger-1" style="margin-bottom: clamp(24px, 4vw, 40px); display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
              <div>
                <h2 style="font-size: clamp(22px, 4vw, 32px); margin: 0;">${e("patientHome.trendingServices")}</h2>
                <div style="width: 60px; height: 4px; background: var(--secondary); border-radius: 2px; margin-top: 12px;"></div>
              </div>
              <button class="btn btn-ghost" id="view-all-trends-btn">
                ${e("patientHome.viewAll")} <i data-lucide="${g()==="ar"?"arrow-left":"arrow-right"}" style="width: 16px; height: 16px;"></i>
              </button>
            </div>
            
            <div class="grid grid-3 animate-on-scroll stagger-2" style="gap: clamp(16px, 2vw, 24px);">
              ${r}
            </div>
          </section>

          <!-- Stats Section -->
          <section class="section container animate-on-scroll stagger-3" style="margin-bottom: clamp(40px, 6vw, 80px);">
            <div style="background: var(--gradient-hero); border-radius: clamp(16px, 3vw, 24px); padding: clamp(24px, 5vw, 48px); color: var(--primary-dark); display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: clamp(16px, 3vw, 32px); text-align: center;">
              <div>
                <div style="font-size: clamp(28px, 5vw, 48px); font-weight: bold; margin-bottom: 8px;">500+</div>
                <div style="font-size: clamp(14px, 2vw, 18px); opacity: 0.9;">${e("about.doctors")}</div>
              </div>
              <div>
                <div style="font-size: clamp(28px, 5vw, 48px); font-weight: bold; margin-bottom: 8px;">10k+</div>
                <div style="font-size: clamp(14px, 2vw, 18px); opacity: 0.9;">${e("about.patients")}</div>
              </div>
              <div>
                <div style="font-size: clamp(28px, 5vw, 48px); font-weight: bold; margin-bottom: 8px;">15</div>
                <div style="font-size: clamp(14px, 2vw, 18px); opacity: 0.9;">${e("about.cities")}</div>
              </div>
              <div>
                <div style="font-size: clamp(28px, 5vw, 48px); font-weight: bold; margin-bottom: 8px;">50k+</div>
                <div style="font-size: clamp(14px, 2vw, 18px); opacity: 0.9;">${e("about.reviews")}</div>
              </div>
            </div>
          </section>

        </div>
        
        ${w()}
      `},afterRender(){$();const i=document.getElementById("hero-search-btn"),t=document.getElementById("hero-search-input"),a=document.getElementById("view-all-doctors-btn"),o=document.getElementById("view-all-trends-btn"),r=document.querySelectorAll(".trend-card"),s=()=>{const n=t==null?void 0:t.value.trim();n?b("/patient/find-doctor",{q:n}):b("/patient/find-doctor")};i==null||i.addEventListener("click",s),t==null||t.addEventListener("keypress",n=>{n.key==="Enter"&&s()}),a==null||a.addEventListener("click",()=>{b("/patient/find-doctor")}),o==null||o.addEventListener("click",()=>{b("/patient/trends")}),r.forEach(n=>{n.addEventListener("click",()=>{b("/patient/trends")})})}}}function Oe({searchPlaceholder:i,filters:t}){const a=t.map(o=>{const r=o.options?o.options.map(s=>`<option value="${s.value}">${s.label}</option>`).join(""):"";return o.type==="input"?`
        <div class="filter-group">
          <input type="text" class="input" id="filter-${o.key}" placeholder="${o.label}">
        </div>
      `:`
      <div class="filter-group">
        <select class="select" id="filter-${o.key}">
          <option value="all" disabled selected>${o.label}</option>
          <option value="all">${e("common.all")||"All"}</option>
          ${r}
        </select>
      </div>
    `}).join("");return`
    <div class="search-filter-container container" style="margin-top: -30px; position: relative; z-index: 20;">
      <div class="card" style="padding: 24px;">
        
        <div class="search-filter-input-row">
          <div style="flex: 1; position: relative;">
            <i data-lucide="search" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-secondary);"></i>
            <input type="text" id="main-search-input" class="input" placeholder="${i}" style="width: 100%; padding-left: 48px; padding-right: 48px; height: 56px; font-size: 16px; border-radius: 28px;">
          </div>
          <button class="btn btn-primary" id="main-search-btn" style="border-radius: 28px; padding: 0 32px;">
            ${e("common.search")||"Search"}
          </button>
        </div>

        <div class="filters-bar">
          <div style="font-weight: bold; color: var(--text-secondary); display: flex; align-items: center; gap: 8px;">
            <i data-lucide="filter" style="width: 18px; height: 18px;"></i>
            ${e("common.filter")||"Filter:"}
          </div>
          
          ${a}
          
          <button class="btn btn-ghost btn-sm" id="clear-filters-btn" style="margin-left: auto;">
            ${e("common.clear")||"Clear"}
          </button>
        </div>

      </div>
    </div>
  `}function Ye(i,t){const a=i.querySelector("#main-search-input"),o=i.querySelector("#main-search-btn"),r=i.querySelector("#clear-filters-btn"),s=i.querySelectorAll(".select"),n=i.querySelectorAll(".filter-group .input");let d;a==null||a.addEventListener("input",l=>{clearTimeout(d),d=setTimeout(()=>{t.onSearch&&t.onSearch(l.target.value)},300)}),a==null||a.addEventListener("keydown",l=>{l.key==="Enter"&&(clearTimeout(d),t.onSearch&&t.onSearch(l.target.value))}),o==null||o.addEventListener("click",()=>{t.onSearch&&t.onSearch((a==null?void 0:a.value)||"")}),s.forEach(l=>{l.addEventListener("change",c=>{const p=c.target.id.replace("filter-","");t.onFilter&&t.onFilter(p,c.target.value)})}),n.forEach(l=>{l.addEventListener("input",c=>{clearTimeout(d),d=setTimeout(()=>{const p=c.target.id.replace("filter-","");t.onFilter&&t.onFilter(p,c.target.value)},300)})}),r==null||r.addEventListener("click",()=>{a&&(a.value=""),s.forEach(l=>l.value="all"),n.forEach(l=>l.value=""),t.onClear&&t.onClear()})}function j(i){return`
    <div class="view-toggle-bar" style="display: flex; background: var(--bg-card); padding: 4px; border-radius: 8px; border: 1px solid var(--border);">
      <button class="btn btn-ghost btn-sm btn-icon ${i==="list"?"active":""}" data-view="list" style="${i==="list"?"background: var(--primary); color: white;":""}" title="${e("findDoctor.viewList")||"List View"}">
        <i data-lucide="list"></i>
      </button>
      <button class="btn btn-ghost btn-sm btn-icon ${i==="card"?"active":""}" data-view="card" style="${i==="card"?"background: var(--primary); color: white;":""}" title="${e("findDoctor.viewCard")||"Card View"}">
        <i data-lucide="grid"></i>
      </button>
      <button class="btn btn-ghost btn-sm btn-icon ${i==="map"?"active":""}" data-view="map" style="${i==="map"?"background: var(--primary); color: white;":""}" title="${e("findDoctor.viewMap")||"Map View"}">
        <i data-lucide="map"></i>
      </button>
    </div>
  `}function N(i,t){const a=i.querySelectorAll(".view-toggle-bar button");a.forEach(o=>{o.addEventListener("click",r=>{const s=r.currentTarget.dataset.view;a.forEach(n=>{n.classList.remove("active"),n.style.background="transparent",n.style.color=""}),r.currentTarget.classList.add("active"),r.currentTarget.style.background="var(--primary)",r.currentTarget.style.color="white",t&&t(s)})})}function W(){return`
    <div id="leaflet-map" class="map-container" style="width: 100%; height: 600px; border-radius: 16px; box-shadow: var(--shadow-md); z-index: 1;"></div>
  `}function U(i,t,a="doctor",o){if(!window.L)return console.error("Leaflet library not loaded."),null;if(!document.getElementById(i))return null;const d=L.map(i).setView([34.7304,36.7136],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(d);const l=g(),c=[],p=`
    <div style="background: var(--primary); color: white; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 3px solid white;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    </div>
  `,u=`
    <div style="background: var(--secondary); color: white; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 3px solid white;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    </div>
  `,m=L.divIcon({html:p,className:"custom-map-marker",iconSize:[36,36],iconAnchor:[18,36],popupAnchor:[0,-36]}),k=L.divIcon({html:u,className:"custom-map-marker",iconSize:[36,36],iconAnchor:[18,36],popupAnchor:[0,-36]});if(t.forEach(v=>{if(!v.lat||!v.lng)return;const z=v.name[l],Y=a==="doctor"?v.specialty[l]:v.specialization[l],K=a==="doctor"?v.photo:v.logo,Q=a==="doctor"?m:k,G=`
      <div class="map-popup-card" style="text-align: center; width: 220px;">
        <a href="#/${a==="doctor"?"doctor-profile":"supplier"}/${v.id}" style="display: block; text-decoration: none; color: inherit; cursor: pointer;">
          <img src="${K}" alt="${z}" style="width: 60px; height: 60px; border-radius: ${a==="doctor"?"50%":"12px"}; margin-bottom: 8px;">
          <h4 style="margin: 0 0 4px; font-size: 16px; font-family: inherit; color: var(--primary);">${z}</h4>
        </a>
        <span class="badge ${a==="doctor"?"badge-secondary":"badge-primary"}" style="margin-bottom: 8px; display: inline-block;">${Y}</span>
        <div style="margin-bottom: 12px; display: flex; justify-content: center;">
          ${C(v.rating,"sm")}
        </div>
        <a href="#/${a==="doctor"?"doctor-profile":"supplier"}/${v.id}" class="btn btn-primary btn-sm" style="width: 100%; display: block; text-align: center; text-decoration: none; box-sizing: border-box;">
          ${e("common.showMore")||"View Details"}
        </a>
      </div>
    `,J=L.marker([v.lat,v.lng],{icon:Q}).bindPopup(G,{minWidth:220}).addTo(d);c.push(J)}),c.length>0){const v=new L.featureGroup(c);d.fitBounds(v.getBounds(),{padding:[50,50]})}return setTimeout(()=>{d.invalidateSize()},100),d}function Ke(){return{render(){const i=Fe();i.q?f("searchFilters",{...h("searchFilters"),query:i.q}):f("searchFilters",{query:"",serviceType:"all",rating:"all",area:""});const t=[{key:"serviceType",label:e("findDoctor.serviceType"),options:[{value:"orthodontics",label:e("serviceTypes.orthodontics")},{value:"surgery",label:e("serviceTypes.surgery")},{value:"pediatric",label:e("serviceTypes.pediatric")},{value:"cosmetic",label:e("serviceTypes.cosmetic")},{value:"cleaning",label:e("serviceTypes.cleaning")},{value:"other",label:e("serviceTypes.other")}]},{key:"rating",label:e("findDoctor.rating"),options:[{value:"5",label:`5 ${e("common.stars")}`},{value:"4",label:`4+ ${e("common.stars")}`},{value:"3",label:`3+ ${e("common.stars")}`}]},{key:"area",label:e("findDoctor.area"),type:"input"}];return`
        ${x()}
        
        <div class="page-wrapper find-doctor-page" style="background: var(--bg-light);">
          ${S({title:e("findDoctor.title"),gradient:"var(--gradient-hero)"})}
          
          ${Oe({searchPlaceholder:e("patientHome.searchPlaceholder"),filters:t})}

          <div class="container section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
              <h3 style="font-size: 20px; font-weight: 600;" id="results-count">
                ${e("common.loading")}
              </h3>
              ${j(h("currentView")||"card")}
            </div>

            <div id="results-container">
              <!-- Results rendered here by JS -->
            </div>
          </div>
        </div>
        
        ${w()}
      `},afterRender(){$();const i=document.querySelector(".find-doctor-page"),t=document.getElementById("results-container"),a=document.getElementById("results-count"),o=g(),r=()=>{const n=h("searchFilters"),d=h("currentView")||"card";let l=M.filter(c=>{const p=c.name[o].toLowerCase().includes(n.query.toLowerCase())||c.specialty[o].toLowerCase().includes(n.query.toLowerCase()),u=n.serviceType==="all"||c.specialtyKey===n.serviceType,m=n.rating==="all"||c.rating>=parseInt(n.rating),k=!n.area||c.location[o].toLowerCase().includes(n.area.toLowerCase());return p&&u&&m&&k});if(a.textContent=`${l.length} ${e("findDoctor.results")||"Results found"}`,l.length===0){t.innerHTML=`
            <div class="no-results" style="text-align: center; padding: 60px 20px;">
              <div style="width: 80px; height: 80px; background: rgba(0,0,0,0.05); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--text-secondary);">
                <i data-lucide="search-x" style="width: 40px; height: 40px;"></i>
              </div>
              <h3 style="font-size: 24px; margin-bottom: 8px;">${e("findDoctor.noResults")||"No doctors found"}</h3>
              <p style="color: var(--text-secondary);">${e("common.clear")||"Try clearing filters"}</p>
            </div>
          `,window.lucide&&window.lucide.createIcons();return}d==="card"?t.innerHTML=`
            <div class="results-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
              ${l.map(c=>R(c)).join("")}
            </div>
          `:d==="list"?t.innerHTML=`
            <div class="results-list" style="display: flex; flex-direction: column; gap: 16px;">
              ${l.map(c=>Ue(c)).join("")}
            </div>
          `:d==="map"&&(t.innerHTML=W(),setTimeout(()=>{U("leaflet-map",l,"doctor")},0)),window.lucide&&window.lucide.createIcons()};r(),Ye(i,{onSearch:n=>{f("searchFilters",{...h("searchFilters"),query:n}),r()},onFilter:(n,d)=>{f("searchFilters",{...h("searchFilters"),[n]:d}),r()},onClear:()=>{f("searchFilters",{query:"",serviceType:"all",rating:"all",area:""}),r()}});const s=document.getElementById("main-search-input");s&&h("searchFilters").query&&(s.value=h("searchFilters").query),N(i,n=>{f("currentView",n),r()})}}}function V(i,t,a){const o=g(),r=i.length?i.map(s=>{const n=s.name[o],d=s.comment[o];return`
      <div class="review-item" style="padding: 16px 0; border-bottom: 1px solid var(--border);">
        <div style="display: flex; gap: 16px; align-items: flex-start;">
          <div class="avatar" style="width: 48px; height: 48px; border-radius: 50%; background: var(--gradient-hero); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 20px;">
            ${n?n.charAt(0):"?"}
          </div>
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <h4 style="margin: 0; font-size: 16px;">${n}</h4>
              <span style="color: var(--text-secondary); font-size: 12px;">${s.date}</span>
            </div>
            <div style="margin-bottom: 8px;">
              ${C(s.rating,"sm")}
            </div>
            <p style="margin: 0; color: var(--text-secondary); line-height: 1.5; font-size: 14px;">
              ${d}
            </p>
          </div>
        </div>
      </div>
    `}).join(""):`<p style="color: var(--text-secondary); text-align: center; padding: 24px;">${e("doctorProfile.noReviews")||"No reviews yet."}</p>`;return`
    <div class="profile-reviews card" style="padding: 24px;">
      <h3 style="margin-bottom: 24px; font-size: 20px;">${e("doctorProfile.reviews")}</h3>
      
      <div class="reviews-summary" style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid var(--border);">
        <div style="font-size: 48px; font-weight: bold; color: var(--text-primary); line-height: 1;">
          ${t.toFixed(1)}
        </div>
        <div>
          <div style="margin-bottom: 4px;">${C(t)}</div>
          <div style="color: var(--text-secondary); font-size: 14px;">${a} ${e("doctorProfile.reviews")}</div>
        </div>
        <div style="margin-left: auto;">
          <button class="btn btn-primary" id="toggle-review-form-btn">
            ${e("doctorProfile.writeReview")||"Write a Review"}
          </button>
        </div>
      </div>

      <div id="add-review-form-container" style="display: none; background: var(--bg-light); padding: 24px; border-radius: 12px; margin-bottom: 32px;">
        <h4 style="margin-bottom: 16px;">${e("doctorProfile.addReview")||"Add a Review"}</h4>
        <div class="form-group" style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px;">${e("common.rating")||"Rating"}</label>
          ${Ne(0)}
        </div>
        <div class="form-group" style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px;">${e("contact.message")||"Message"}</label>
          <textarea id="review-comment-input" class="textarea" rows="4" placeholder="${e("doctorProfile.reviewPlaceholder")||"Share your experience..."}" style="width: 100%; border-radius: 8px; border: 1px solid var(--border); padding: 12px;"></textarea>
        </div>
        <button class="btn btn-primary" id="submit-review-btn">
          ${e("doctorProfile.submitReview")||"Submit Review"}
        </button>
      </div>

      <div class="reviews-list">
        ${r}
      </div>
    </div>
  `}function O(i){const t=i.querySelector("#toggle-review-form-btn"),a=i.querySelector("#add-review-form-container"),o=i.querySelector("#submit-review-btn"),r=i.querySelector("#review-comment-input");let s=0;We(i,n=>{s=n}),t==null||t.addEventListener("click",()=>{const n=a.style.display==="none";a.style.display=n?"block":"none"}),o==null||o.addEventListener("click",()=>{if(s===0||!r.value.trim()){alert(e("common.error")||"Please provide a rating and comment.");return}alert(e("settings.saved")||"Review submitted successfully!"),a.style.display="none",r.value=""})}function Qe(){return{render(){var c;const i=parseInt((c=window.__routeParams)==null?void 0:c.id),t=M.find(p=>p.id===i);if(!t)return`
          ${x()}
          <div class="page-wrapper flex-center" style="min-height: 60vh;">
            <div style="text-align: center;">
              <h2>Doctor Not Found</h2>
              <button class="btn btn-primary" onclick="window.location.hash='/patient/find-doctor'">Back to Search</button>
            </div>
          </div>
          ${w()}
        `;const a=g(),o=t.name[a],r=t.specialty[a],s=t.location[a],n=t.address[a],d=t.bio[a],l=t.credentials[a];return`
        ${x()}
        
        <div class="page-wrapper doctor-profile-page" style="background: var(--bg-light); padding-bottom: 80px;">
          
          <div class="profile-hero">
            <button class="btn btn-ghost" style="position: absolute; top: 24px; inset-inline-start: 24px; color: white;" onclick="window.history.back()">
              <i data-lucide="${a==="ar"?"arrow-right":"arrow-left"}"></i> ${e("doctorProfile.back")||"Back"}
            </button>
            
            <div class="container" style="position: relative; height: 100%;">
              <img src="${t.photo}" alt="${o}" class="profile-photo">
            </div>
          </div>
          
          <div class="container" style="padding-top: 100px;">
            <div style="margin-bottom: 40px;">
              <h1 class="profile-name" style="font-size: 32px; margin-bottom: 8px;">${o}</h1>
              <div class="profile-specialties" style="display: flex; gap: 8px; margin-bottom: 16px;">
                <span class="badge badge-secondary">${r}</span>
              </div>
              <p style="color: var(--text-secondary); max-width: 800px; font-size: 16px; line-height: 1.6;">${d}</p>
            </div>

            <div class="profile-stats grid grid-3" style="gap: 24px; margin-bottom: 40px;">
              <div class="card" style="padding: 24px; text-align: center;">
                <div style="font-size: 32px; font-weight: bold; color: var(--primary); margin-bottom: 4px;">${t.experience}</div>
                <div style="color: var(--text-secondary); font-size: 14px;">${e("doctorProfile.experience")}</div>
              </div>
              <div class="card" style="padding: 24px; text-align: center;">
                <div style="font-size: 32px; font-weight: bold; color: var(--primary); margin-bottom: 4px;">${t.reviewCount}</div>
                <div style="color: var(--text-secondary); font-size: 14px;">${e("doctorProfile.reviews")}</div>
              </div>
              <div class="card" style="padding: 24px; text-align: center;">
                <div style="font-size: 32px; font-weight: bold; color: var(--primary); margin-bottom: 4px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                  ${t.rating} <i data-lucide="star" class="star-filled" style="width: 24px; height: 24px; color: gold;"></i>
                </div>
                <div style="color: var(--text-secondary); font-size: 14px;">${e("doctorProfile.averageRating")}</div>
              </div>
            </div>

            <div class="grid grid-2 profile-info-grid" style="gap: 32px; align-items: flex-start; margin-bottom: 40px;">
              
              <div style="display: flex; flex-direction: column; gap: 32px;">
                <!-- Contact Info -->
                <div class="profile-contact-card card" style="padding: 32px;">
                  <h3 style="margin-bottom: 24px; font-size: 20px;">${e("doctorProfile.contactInfo")}</h3>
                  
                  <div style="display: flex; flex-direction: column; gap: 24px;">
                    <div style="display: flex; gap: 16px; align-items: center;">
                      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(108,99,255,0.1); color: var(--primary); display: flex; align-items: center; justify-content: center;"><i data-lucide="phone"></i></div>
                      <div style="flex: 1;">
                        <div style="color: var(--text-secondary); font-size: 12px;">${e("doctorProfile.phone")}</div>
                        <div style="font-weight: 500;" dir="ltr">${t.phone}</div>
                      </div>
                      <a href="tel:${t.phone}" class="btn btn-secondary btn-sm contact-action-btn">${e("doctorProfile.callNow")||"Call"}</a>
                    </div>
                    
                    <div style="display: flex; gap: 16px; align-items: center;">
                      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(108,99,255,0.1); color: var(--primary); display: flex; align-items: center; justify-content: center;"><i data-lucide="map-pin"></i></div>
                      <div style="flex: 1;">
                        <div style="color: var(--text-secondary); font-size: 12px;">${e("doctorProfile.address")}</div>
                        <div style="font-weight: 500;">${s} <br> ${n}</div>
                      </div>
                      <a href="https://maps.google.com/?q=${t.lat},${t.lng}" target="_blank" class="btn btn-secondary btn-sm contact-action-btn">${e("doctorProfile.getDirections")||"Map"}</a>
                    </div>

                    <div style="display: flex; gap: 16px; align-items: center;">
                      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(108,99,255,0.1); color: var(--primary); display: flex; align-items: center; justify-content: center;"><i data-lucide="globe"></i></div>
                      <div style="flex: 1;">
                        <div style="color: var(--text-secondary); font-size: 12px;">${e("doctorProfile.website")}</div>
                        <div style="font-weight: 500;">${t.website}</div>
                      </div>
                      <a href="${t.website}" target="_blank" class="btn btn-secondary btn-sm contact-action-btn">${e("doctorProfile.visitWebsite")||"Visit"}</a>
                    </div>
                  </div>
                </div>

                <!-- Credentials -->
                <div class="card" style="padding: 32px;">
                  <h3 style="margin-bottom: 24px; font-size: 20px;">${e("doctorProfile.credentials")}</h3>
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px;">
                    ${l.map(p=>`
                      <li style="display: flex; gap: 12px; align-items: flex-start;">
                        <i data-lucide="award" style="color: var(--secondary); flex-shrink: 0; margin-top: 2px;"></i>
                        <span>${p}</span>
                      </li>
                    `).join("")}
                  </ul>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="card profile-hours" style="padding: 32px;">
                <h3 style="margin-bottom: 24px; font-size: 20px;">${e("doctorProfile.businessHours")}</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  ${Object.entries(t.hours).map(([p,u])=>`
                    <div style="display: flex; justify-content: space-between; padding-bottom: 16px; border-bottom: 1px dashed var(--border);">
                      <span style="font-weight: 500;">${e(`days.${p}`)||p}</span>
                      <span style="color: ${u.includes("مغلق")||u.includes("Closed")?"var(--accent)":"var(--text-secondary)"};" dir="ltr">${u}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

            </div>

            <!-- Reviews -->
            ${V(t.reviews||[],t.rating,t.reviewCount)}

          </div>
        </div>
        
        ${w()}
      `},afterRender(){$();const i=document.querySelector(".doctor-profile-page");i&&O(i)}}}function Ge(){return{render(){const i=g(),t=B.map((a,o)=>`
        <div class="trend-card card card-hover animate-on-scroll stagger-${o%3+1}" style="border-radius: 16px; overflow: hidden; cursor: pointer;">
          <div style="height: 240px; position: relative; overflow: hidden;">
            <img src="${a.image}" alt="${a.title[i]}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" class="trend-img">
            <div style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.45);"></div>
            
            <div style="position: absolute; top: 16px; right: 16px;">
              <span class="trend-tag badge badge-primary" style="backdrop-filter: blur(4px); background: rgba(var(--primary-rgb), 0.9); border: none;">${e(`trends.${a.category}`)||a.category}</span>
            </div>

            <div style="position: absolute; bottom: 24px; left: 24px; right: 24px;">
              <h3 style="color: white; margin: 0; font-size: 24px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${a.title[i]}</h3>
            </div>
          </div>
          <div style="padding: 24px;">
            <p style="color: var(--text-secondary); margin: 0 0 16px; font-size: 15px; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
              ${a.description[i]}
            </p>
            <div style="color: var(--primary); font-weight: 600; display: flex; align-items: center; gap: 8px;">
              ${e("trends.readMore")||"Read More"} <i data-lucide="${i==="ar"?"arrow-left":"arrow-right"}" style="width: 16px; height: 16px;"></i>
            </div>
          </div>
        </div>
      `).join("");return`
        ${x()}
        
        <div class="page-wrapper trends-page" style="background: var(--bg-light); padding-bottom: 80px;">
          ${S({title:e("trends.title"),subtitle:e("trends.subtitle")||"Explore the latest technologies and services in modern dentistry.",gradient:"var(--gradient-hero)"})}
          
          <div class="container section">
            <div class="trends-grid grid grid-3" style="gap: 32px;">
              ${t}
            </div>
          </div>
        </div>
        
        ${w()}
      `},afterRender(){$(),document.querySelectorAll(".trend-card").forEach(t=>{const a=t.querySelector(".trend-img");t.addEventListener("mouseenter",()=>{a&&(a.style.transform="scale(1.1)")}),t.addEventListener("mouseleave",()=>{a&&(a.style.transform="scale(1)")}),t.addEventListener("click",()=>{alert("Full article view would open here.")})})}}}function Je(){return{render(){const i=[{icon:"shield-check",title:"Quality",desc:"We ensure all listed doctors meet our high quality standards."},{icon:"heart",title:"Care",desc:"Patient well-being is at the center of everything we do."},{icon:"zap",title:"Innovation",desc:"We continuously improve our platform to serve you better."}];return`
        ${x()}
        
        <div class="page-wrapper about-page">
          ${S({title:e("about.title"),gradient:"var(--gradient-hero)"})}
          
          <div class="container">
            <!-- Mission Section -->
            <section class="mission-section animate-on-scroll stagger-1">
              <div class="mission-content">
                <div class="mission-text">
                  <h2 style="font-size: 32px; margin-bottom: 24px;">${e("about.mission")}</h2>
                  <p style="font-size: 18px; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px;">
                    ${e("about.missionText")||"Our mission is to connect patients with the best dental care professionals, making finding and booking appointments seamless and transparent. We believe everyone deserves a healthy, beautiful smile."}
                  </p>
                  <h2 style="font-size: 32px; margin-bottom: 24px;">${e("about.vision")}</h2>
                  <p style="font-size: 18px; line-height: 1.8; color: var(--text-secondary);">
                    ${e("about.visionText")||"To be the most trusted and comprehensive dental directory in the region, empowering both patients and practitioners."}
                  </p>
                </div>
                <div class="mission-graphic" style="position: relative; overflow: hidden;">
                  <div style="position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800') center/cover; opacity: 0.8; mix-blend-mode: overlay;"></div>
                  <div style="position: absolute; inset: 0; background: rgba(192, 225, 210, 0.75);"></div>
                </div>
              </div>
            </section>

            <!-- Values Section -->
            <section class="section animate-on-scroll stagger-2">
              <div class="section-header" style="text-align: center; margin-bottom: 48px;">
                <h2 style="font-size: 32px;">${e("about.values")||"Our Core Values"}</h2>
              </div>
              <div class="values-grid">
                ${i.map((t,a)=>`
                  <div class="value-card card card-hover">
                    <div class="value-icon">
                      <i data-lucide="${t.icon}" style="width: 32px; height: 32px;"></i>
                    </div>
                    <h3 style="font-size: 24px; margin-bottom: 16px;">${t.title}</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6;">${t.desc}</p>
                  </div>
                `).join("")}
              </div>
            </section>

            <!-- Team Section -->
            <section class="section animate-on-scroll stagger-3">
              <div class="section-header" style="text-align: center; margin-bottom: 48px;">
                <h2 style="font-size: 32px;">${e("about.team")||"Meet Our Team"}</h2>
              </div>
              <div class="team-grid">
                ${[1,2,3,4].map(t=>`
                  <div class="team-card">
                    <img src="https://ui-avatars.com/api/?name=Team+Member+${t}&size=200&background=F8F9FE&color=6C63FF" class="team-avatar" alt="Team Member">
                    <h4 style="font-size: 20px; margin-bottom: 4px;">Team Member ${t}</h4>
                    <div style="color: var(--primary); font-weight: 500;">Role ${t}</div>
                  </div>
                `).join("")}
              </div>
            </section>
          </div>

          <!-- Stats Section -->
          <section class="stats-section animate-on-scroll">
            <div class="container">
              <div class="stats-grid">
                <div>
                  <div class="stat-number">500+</div>
                  <div>${e("about.doctors")}</div>
                </div>
                <div>
                  <div class="stat-number">10,000+</div>
                  <div>${e("about.patients")}</div>
                </div>
                <div>
                  <div class="stat-number">15</div>
                  <div>${e("about.cities")}</div>
                </div>
                <div>
                  <div class="stat-number">50k+</div>
                  <div>${e("about.reviews")}</div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        ${w()}
      `},afterRender(){$()}}}function _e(){return{render(){return`
        ${x()}
        
        <div class="page-wrapper contact-page" style="background: var(--bg-light);">
          ${S({title:e("contact.title"),subtitle:e("contact.subtitle")||"We are here to help. Send us a message and we will respond as soon as possible.",gradient:"var(--gradient-hero)"})}
          
          <div class="container" style="margin-top: -40px; position: relative; z-index: 10;">
            <div class="contact-grid">
              
              <!-- Form Card -->
              <div class="contact-form-card card animate-on-scroll stagger-1">
                <h3 style="font-size: 24px; margin-bottom: 24px;">${e("contact.title")}</h3>
                
                <form id="contact-form">
                  <div class="form-group">
                    <label for="name">${e("contact.name")}</label>
                    <input type="text" id="name" class="input" required style="width: 100%;">
                  </div>
                  
                  <div class="form-group">
                    <label for="email">${e("contact.email")}</label>
                    <input type="email" id="email" class="input" required style="width: 100%;">
                  </div>
                  
                  <div class="form-group">
                    <label for="subject">${e("contact.subject")}</label>
                    <input type="text" id="subject" class="input" required style="width: 100%;">
                  </div>
                  
                  <div class="form-group">
                    <label for="message">${e("contact.message")}</label>
                    <textarea id="message" class="textarea" rows="5" required style="width: 100%;"></textarea>
                  </div>
                  
                  <button type="submit" class="btn btn-primary" style="width: 100%; height: 50px; font-size: 16px;">
                    ${e("contact.send")||"Send Message"}
                  </button>
                </form>

                <div id="contact-success" class="form-success">
                  <div style="width: 60px; height: 60px; background: var(--secondary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                    <i data-lucide="check" style="width: 32px; height: 32px;"></i>
                  </div>
                  <h4 style="font-size: 20px; margin-bottom: 8px;">${e("contact.success")||"Message Sent!"}</h4>
                  <p>We will get back to you shortly.</p>
                </div>
              </div>

              <!-- Info Card -->
              <div class="animate-on-scroll stagger-2">
                <div class="contact-info-card">
                  <h3 style="font-size: 24px; margin-bottom: 32px;">${e("doctorProfile.contactInfo")||"Contact Information"}</h3>
                  
                  <div class="contact-info-item">
                    <div class="contact-info-icon"><i data-lucide="phone"></i></div>
                    <div>
                      <div style="font-size: 14px; opacity: 0.8; margin-bottom: 4px;">${e("contact.phone")||"Phone"}</div>
                      <div style="font-size: 18px; font-weight: 500;" dir="ltr">+963 933 123 456</div>
                    </div>
                  </div>
                  
                  <div class="contact-info-item">
                    <div class="contact-info-icon"><i data-lucide="mail"></i></div>
                    <div>
                      <div style="font-size: 14px; opacity: 0.8; margin-bottom: 4px;">${e("contact.email")||"Email"}</div>
                      <div style="font-size: 18px; font-weight: 500;">support@dentists-homs.sy</div>
                    </div>
                  </div>
                  
                  <div class="contact-info-item">
                    <div class="contact-info-icon"><i data-lucide="map-pin"></i></div>
                    <div>
                      <div style="font-size: 14px; opacity: 0.8; margin-bottom: 4px;">${e("contact.address")||"Address"}</div>
                      <div style="font-size: 18px; font-weight: 500;">حمص، شارع المحطة الرئيسي<br>Homs, Main Al-Mahatta St.</div>
                    </div>
                  </div>

                  <div style="margin-top: 40px;">
                    <h4 style="font-size: 18px; margin-bottom: 16px;">${e("contact.followUs")||"Follow Us"}</h4>
                    <div style="display: flex; gap: 16px;">
                      <a href="#" style="width: 48px; height: 48px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; transition: background 0.3s;"><i data-lucide="facebook"></i></a>
                      <a href="#" style="width: 48px; height: 48px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; transition: background 0.3s;"><i data-lucide="instagram"></i></a>
                    </div>
                  </div>
                </div>

                <div class="contact-map">
                  <!-- Embed a static map or iframe of Homs -->
                  <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=36.68,34.70,36.75,34.75&layer=mapnik&marker=34.7304,36.7136" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        ${w()}
      `},afterRender(){$();const i=document.getElementById("contact-form"),t=document.getElementById("contact-success");i==null||i.addEventListener("submit",a=>{a.preventDefault(),i.style.display="none",t.classList.add("active")})}}}function Xe(){return{render(){const i=g();return`
        <div class="auth-page">
          <!-- Language Toggle -->
          <div style="position: absolute; top: 24px; right: 24px; z-index: 20;">
            <button class="btn btn-ghost" id="auth-lang-toggle" data-lang="${i==="ar"?"en":"ar"}" style="color: white; border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px);">
              <i data-lucide="globe" style="width: 18px; height: 18px; margin: 0 8px;"></i>
              ${i==="ar"?"English":"العربية"}
            </button>
            <button class="btn btn-ghost" onclick="window.history.back()" style="color: white; margin-left: 8px;">
              <i data-lucide="x" style="width: 18px; height: 18px;"></i>
            </button>
          </div>

          <div class="auth-container card" style="background: white;">
            
            <div style="text-align: center; padding: 32px 32px 0;">
              <div style="width: 64px; height: 64px; background: var(--primary); color: var(--primary-dark); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                <i data-lucide="user" style="width: 32px; height: 32px;"></i>
              </div>
              <h2 style="font-size: 24px; margin-bottom: 8px;">${e("landing.doctor")}</h2>
              <p style="color: var(--text-secondary);">${e("landing.title")}</p>
            </div>

            <div class="auth-tabs" style="margin-top: 24px;">
              <div class="auth-tab active" data-target="login">${e("nav.login")||"Login"}</div>
              <div class="auth-tab" data-target="signup">${e("nav.signup")||"Sign Up"}</div>
            </div>

            <div class="auth-form-wrapper">
              
              <!-- Login Form -->
              <form id="login-form" class="auth-form active">
                <div class="form-group">
                  <label>${e("contact.email")||"Email"}</label>
                  <input type="email" class="input" style="width: 100%;" required value="doctor@example.com">
                </div>
                <div class="form-group">
                  <label>${e("auth.password")}</label>
                  <input type="password" class="input" style="width: 100%;" required value="password">
                </div>
                <div style="text-align: right; margin-bottom: 24px;">
                  <a href="javascript:void(0)" style="color: var(--primary); font-size: 14px;">${e("auth.forgotPassword")}</a>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; height: 48px; font-size: 16px;">
                  ${e("nav.login")||"Login"}
                </button>
              </form>

              <!-- Signup Form -->
              <form id="signup-form" class="auth-form">
                <div class="auth-section-title">${e("auth.personalInfo")}</div>
                <div class="form-group">
                  <label>${e("contact.name")}</label>
                  <input type="text" class="input" style="width: 100%;" required>
                </div>
                <div class="form-group">
                  <label>${e("contact.email")}</label>
                  <input type="email" class="input" style="width: 100%;" required>
                </div>
                <div class="form-group">
                  <label>${e("auth.password")}</label>
                  <input type="password" class="input" style="width: 100%;" required>
                </div>
                
                <div class="auth-section-title">${e("auth.professionalDetails")}</div>
                <div class="form-group">
                  <label>${e("auth.specialty")}</label>
                  <select class="select" style="width: 100%;" required>
                    <option value="" disabled selected>${e("auth.selectSpecialty")}</option>
                    <option value="orthodontics">${e("serviceTypes.orthodontics")}</option>
                    <option value="surgery">${e("serviceTypes.surgery")}</option>
                    <option value="pediatric">${e("serviceTypes.pediatric")}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>${e("auth.syrianSyndicateId")}</label>
                  <input type="text" class="input" style="width: 100%;" required>
                </div>
                
                <div class="form-group">
                  <label>${e("auth.uploadIdPhoto")}</label>
                  <div class="file-upload">
                    <i data-lucide="upload-cloud"></i>
                    <div>${e("auth.uploadInstruction")}</div>
                    <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">${e("auth.uploadLimits")}</div>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%; height: 48px; font-size: 16px; margin-top: 24px;">
                  ${e("nav.signup")||"Sign Up"}
                </button>
              </form>

            </div>
          </div>
        </div>
      `},afterRender(){const i=document.getElementById("auth-lang-toggle");i&&i.addEventListener("click",s=>{P(s.currentTarget.dataset.lang)});const t=document.querySelectorAll(".auth-tab"),a=document.querySelectorAll(".auth-form");t.forEach(s=>{s.addEventListener("click",()=>{t.forEach(n=>n.classList.remove("active")),a.forEach(n=>n.classList.remove("active")),s.classList.add("active"),document.getElementById(`${s.dataset.target}-form`).classList.add("active")})});const o=document.getElementById("login-form"),r=document.getElementById("signup-form");o==null||o.addEventListener("submit",s=>{s.preventDefault(),f("isLoggedIn",!0),b("/doctor/dashboard")}),r==null||r.addEventListener("submit",s=>{s.preventDefault(),alert(e("auth.signupSuccess")),t[0].click()})}}}function Ze(){return{render(){const i=[{label:e("dashboard.profileViews"),value:"1,248",icon:"eye",color:"#4D7A65"},{label:e("dashboard.totalReviews"),value:"124",icon:"star",color:"#D4AF37"},{label:e("dashboard.yourRating"),value:"4.8",icon:"award",color:"#A66060"}],t=[{text:e("dashboard.activity1"),time:e("dashboard.timeHours2"),icon:"star"},{text:e("dashboard.activity2"),time:e("dashboard.timeHours5"),icon:"eye"},{text:e("dashboard.activity3"),time:e("dashboard.timeDay1"),icon:"message-circle"}];return`
        ${x()}
        
        <div class="page-wrapper dashboard-page" style="background: var(--bg-light); min-height: calc(100vh - 72px);">
          <div class="container">
            
            <div class="dashboard-welcome">
              <h1 class="animate-on-scroll stagger-1">${e("dashboard.welcomeDoctor")||"Welcome back, Dr. "} ${h("doctorName")||""}</h1>
              <p class="animate-on-scroll stagger-2" style="color: var(--text-secondary); font-size: 18px;">${e("dashboard.subtitle")||"Here's an overview of your profile performance."}</p>
            </div>

            <!-- Stats -->
            <div class="dashboard-stats animate-on-scroll stagger-3">
              ${i.map(a=>`
                <div class="stat-card card">
                  <div class="stat-card-icon" style="background: ${a.color}20; color: ${a.color};">
                    <i data-lucide="${a.icon}" style="width: 24px; height: 24px;"></i>
                  </div>
                  <div class="stat-card-info">
                    <div class="stat-card-value">${a.value}</div>
                    <div class="stat-card-label">${a.label}</div>
                  </div>
                </div>
              `).join("")}
            </div>

            <div class="grid grid-2" style="gap: 32px; align-items: flex-start;">
              
              <!-- Navigation Cards -->
              <div class="dashboard-nav-cards animate-on-scroll stagger-4" style="display: grid; grid-template-columns: 1fr; margin: 0;">
                
                <div class="nav-card card card-hover" onclick="window.location.hash='/doctor/settings'">
                  <div class="nav-card-icon" style="background: var(--gradient-hero);">
                    <i data-lucide="settings"></i>
                  </div>
                  <div class="nav-card-content">
                    <h3>${e("dashboard.settingsTitle")||e("nav.settings")||"Profile Settings"}</h3>
                    <p>${e("dashboard.settingsDescShort")||"Update your information, hours, and photos."}</p>
                  </div>
                  <div class="nav-card-arrow"><i data-lucide="chevron-${g()==="ar"?"left":"right"}"></i></div>
                </div>

                <div class="nav-card card card-hover" onclick="window.location.hash='/doctor/marketplace'">
                  <div class="nav-card-icon" style="background: var(--gradient-warm);">
                    <i data-lucide="shopping-bag"></i>
                  </div>
                  <div class="nav-card-content">
                    <h3>${e("dashboard.marketplaceTitle")||e("nav.marketplace")||"Dental Marketplace"}</h3>
                    <p>${e("dashboard.marketplaceDescShort")||"Find suppliers and equipment in Homs."}</p>
                  </div>
                  <div class="nav-card-arrow"><i data-lucide="chevron-${g()==="ar"?"left":"right"}"></i></div>
                </div>

              </div>

              <!-- Activity Feed -->
              <div class="activity-feed card animate-on-scroll stagger-5" style="margin: 0;">
                <h3 style="margin-bottom: 24px; font-size: 20px;">${e("dashboard.recentActivity")||"Recent Activity"}</h3>
                ${t.map(a=>`
                  <div class="activity-item">
                    <div class="activity-icon">
                      <i data-lucide="${a.icon}" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div class="activity-content">
                      <p class="activity-text">${a.text}</p>
                      <span class="activity-time">${a.time}</span>
                    </div>
                  </div>
                `).join("")}
              </div>

            </div>

          </div>
        </div>
        
        ${w()}
      `},afterRender(){$()}}}function et(){return{render(){return`
        ${x()}
        
        <div class="page-wrapper settings-page">
          <div class="container">
            
            <div class="settings-header animate-on-scroll">
              <button class="btn btn-ghost btn-icon" onclick="window.history.back()">
                <i data-lucide="arrow-left"></i>
              </button>
              <h1 style="margin: 0; font-size: 28px;">${e("nav.settings")||"Profile Settings"}</h1>
            </div>

            <!-- Profile Info Section -->
            <div class="settings-section card active animate-on-scroll stagger-1">
              <div class="settings-section-header">
                <span><i data-lucide="user" style="width: 20px; height: 20px; margin-inline-end: 8px; vertical-align: middle;"></i> ${e("settings.personalInfo")||"Personal Information"}</span>
                <i data-lucide="chevron-down" class="settings-section-arrow"></i>
              </div>
              <div class="settings-section-content">
                
                <div class="profile-pic-upload">
                  <img src="https://ui-avatars.com/api/?name=Ahmad+Khalidi&size=200&background=6C63FF&color=fff" alt="Profile">
                  <div class="profile-pic-overlay">
                    <i data-lucide="camera" style="width: 32px; height: 32px;"></i>
                  </div>
                </div>

                <div class="settings-form-row">
                  <div class="form-group">
                    <label>${e("settings.fullNameEn")||"Full Name (English)"}</label>
                    <input type="text" class="input" value="Dr. Ahmad Al-Khalidi" style="width: 100%;">
                  </div>
                  <div class="form-group">
                    <label>${e("settings.fullNameAr")||"Full Name (Arabic)"}</label>
                    <input type="text" class="input" value="د. أحمد الخالدي" style="width: 100%;" dir="rtl">
                  </div>
                </div>

                <div class="settings-form-row">
                  <div class="form-group">
                    <label>${e("auth.specialty")||"Specialty"}</label>
                    <select class="select" style="width: 100%;">
                      <option value="orthodontics" selected>${e("serviceTypes.orthodontics")}</option>
                      <option value="surgery">${e("serviceTypes.surgery")}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>${e("settings.yearsExperience")||"Years of Experience"}</label>
                    <input type="number" class="input" value="15" style="width: 100%;">
                  </div>
                </div>

                <div class="form-group">
                  <label>${e("settings.bioEn")||"Bio (English)"}</label>
                  <textarea class="textarea" rows="3" style="width: 100%;">Dentist specialized in orthodontics with over 15 years of experience treating complex cases in Homs.</textarea>
                </div>
                
                <div class="form-group">
                  <label>${e("settings.bioAr")||"Bio (Arabic)"}</label>
                  <textarea class="textarea" rows="3" style="width: 100%;" dir="rtl">طبيب أسنان متخصص في تقويم الأسنان مع خبرة تزيد عن 15 عاماً في علاج الحالات المعقدة في حمص.</textarea>
                </div>

              </div>
            </div>

            <!-- Contact & Location -->
            <div class="settings-section card animate-on-scroll stagger-2">
              <div class="settings-section-header">
                <span><i data-lucide="map-pin" style="width: 20px; height: 20px; margin-inline-end: 8px; vertical-align: middle;"></i> ${e("settings.contactLocation")||"Contact & Location"}</span>
                <i data-lucide="chevron-down" class="settings-section-arrow"></i>
              </div>
              <div class="settings-section-content">
                
                <div class="settings-form-row">
                  <div class="form-group">
                    <label>${e("settings.phone")||"Phone Number"}</label>
                    <input type="tel" class="input" value="+963933123456" style="width: 100%;" dir="ltr">
                  </div>
                  <div class="form-group">
                    <label>${e("settings.areaInHoms")||"Area in Homs"}</label>
                    <select class="select" style="width: 100%;">
                      <option value="mahatta" selected>${e("settings.areaMahatta")}</option>
                      <option value="inshaat">${e("settings.areaInshaat")}</option>
                      <option value="ghouta">${e("settings.areaGhouta")}</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label>${e("settings.addressEn")||"Detailed Address (English)"}</label>
                  <input type="text" class="input" value="Main Al-Mahatta St., Doctors Building, 3rd Floor" style="width: 100%;">
                </div>

                <div class="form-group">
                  <label>${e("settings.addressAr")||"Detailed Address (Arabic)"}</label>
                  <input type="text" class="input" value="شارع المحطة الرئيسي، عمارة الأطباء، الطابق 3" style="width: 100%;" dir="rtl">
                </div>

                <div class="form-group">
                  <label>${e("settings.mapLocation")||"Map Location (Coordinates)"}</label>
                  <div style="display: flex; gap: 16px;">
                    <input type="text" class="input" value="34.7250" placeholder="${e("settings.latitude")||"Latitude"}" style="flex: 1;">
                    <input type="text" class="input" value="36.7110" placeholder="${e("settings.longitude")||"Longitude"}" style="flex: 1;">
                    <button class="btn btn-secondary btn-icon" title="${e("settings.getCurrentLocation")||"Get Current Location"}"><i data-lucide="map-pin"></i></button>
                  </div>
                </div>

              </div>
            </div>

            <!-- Business Hours -->
            <div class="settings-section card animate-on-scroll stagger-3">
              <div class="settings-section-header">
                <span><i data-lucide="clock" style="width: 20px; height: 20px; margin-inline-end: 8px; vertical-align: middle;"></i> ${e("settings.hours")||"Business Hours"}</span>
                <i data-lucide="chevron-down" class="settings-section-arrow"></i>
              </div>
              <div class="settings-section-content">
                
                ${["sat","sun","mon","tue","wed","thu","fri"].map(i=>{const t=i==="fri";return`
                    <div class="hours-grid">
                      <div style="font-weight: 500;">${e(`days.${i}`)}</div>
                      <div>
                        <select class="select" style="width: 100%;" ${t?"disabled":""}>
                          <option value="09:00" ${t?"":"selected"}>09:00 ${e("settings.am")}</option>
                          <option value="closed" ${t?"selected":""}>${e("common.closed")||"Closed"}</option>
                        </select>
                      </div>
                      <div>
                        <select class="select" style="width: 100%;" ${t?"disabled":""}>
                          <option value="17:00" ${t?"":"selected"}>05:00 ${e("settings.pm")}</option>
                          <option value="closed" ${t?"selected":""}>${e("common.closed")||"Closed"}</option>
                        </select>
                      </div>
                    </div>
                  `}).join("")}

              </div>
            </div>

          </div>
        </div>

        <div class="save-bar">
          <div class="container" style="display: flex; justify-content: flex-end; width: 100%; max-width: 800px; padding: 0;">
            <button class="btn btn-primary" id="save-settings-btn" style="min-width: 150px;">
              <i data-lucide="save" style="margin-inline-end: 8px;"></i> ${e("settings.saveChanges")||"Save Changes"}
            </button>
          </div>
        </div>
        
        ${w()}
      `},afterRender(){$(),document.querySelectorAll(".settings-section-header").forEach(a=>{a.addEventListener("click",()=>{a.parentElement.classList.toggle("active")})});const t=document.getElementById("save-settings-btn");t==null||t.addEventListener("click",()=>{const a=t.innerHTML;t.innerHTML=`<i class="lucide-loader" style="margin-inline-end: 8px; animation: spin 1s linear infinite;">↻</i> ${e("settings.saving")||"Saving..."}`,setTimeout(()=>{t.innerHTML=`<i class="lucide-check" style="margin-inline-end: 8px;"></i> ${e("settings.saved")||"Saved!"}`,t.style.background="var(--secondary)",setTimeout(()=>{t.innerHTML=a,t.style.background=""},2e3)},1e3)})}}}function tt(i){const t=g(),a=i.name[t],o=i.specialization[t],r=i.location[t];return`
    <div class="card card-hover supplier-card" style="display: flex; flex-direction: column; height: 100%; padding: 24px; text-align: center; gap: 16px;">
      <div class="supplier-logo-wrapper" style="margin: 0 auto; position: relative;">
        <img src="${i.logo}" alt="${a}" style="width: 100px; height: 100px; border-radius: 16px; object-fit: cover; border: 4px solid white; box-shadow: var(--shadow-sm);">
        <div class="rating-badge" style="position: absolute; bottom: -8px; right: -8px; background: white; border-radius: 20px; padding: 2px 8px; font-size: 12px; font-weight: bold; display: flex; align-items: center; gap: 4px; box-shadow: var(--shadow-sm);">
          <i data-lucide="star" class="star-filled" style="width: 12px; height: 12px;"></i> ${i.rating}
        </div>
      </div>
      
      <div class="supplier-info" style="flex: 1;">
        <h3 style="font-size: 18px; margin-bottom: 4px; color: var(--text-primary);">${a}</h3>
        <span class="badge badge-primary" style="margin-bottom: 12px; display: inline-block;">${o}</span>
        
        <div class="supplier-meta" style="display: flex; flex-direction: column; gap: 8px; font-size: 14px; color: var(--text-secondary); margin-bottom: 16px;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 4px;">
            <i data-lucide="map-pin" style="width: 14px; height: 14px;"></i> ${r}
          </div>
          <div style="display: flex; align-items: center; justify-content: center; gap: 4px;">
            <i data-lucide="clock" style="width: 14px; height: 14px;"></i> ${i.yearsInBusiness} ${e("supplierProfile.yearsInBusiness")}
          </div>
        </div>
      </div>
      
      <button class="btn btn-secondary" style="width: 100%;" onclick="window.location.hash='/supplier/${i.id}'">
        ${e("common.showMore")||"View Profile"}
      </button>
    </div>
  `}function it(i){const t=g(),a=i.name[t],o=i.specialization[t],r=i.location[t];return`
    <div class="card card-hover supplier-list-item" style="display: flex; padding: 16px; gap: 24px; align-items: center;">
      <img src="${i.logo}" alt="${a}" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover;">
      
      <div class="supplier-info" style="flex: 1;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <h3 style="font-size: 18px; margin-bottom: 4px; color: var(--text-primary);">${a}</h3>
            <span class="badge badge-primary">${o}</span>
          </div>
          <div class="rating-display" style="text-align: right;">
            <div style="display: flex; align-items: center; gap: 4px; font-weight: bold; font-size: 16px;">
              <i data-lucide="star" class="star-filled" style="width: 16px; height: 16px;"></i> ${i.rating}
            </div>
            <div style="font-size: 12px; color: var(--text-secondary);">${i.reviewCount} ${e("doctorProfile.reviews")}</div>
          </div>
        </div>
        
        <div style="display: flex; gap: 16px; font-size: 14px; color: var(--text-secondary);">
          <div style="display: flex; align-items: center; gap: 4px;">
            <i data-lucide="map-pin" style="width: 14px; height: 14px;"></i> ${r}
          </div>
          <div style="display: flex; align-items: center; gap: 4px;">
            <i data-lucide="clock" style="width: 14px; height: 14px;"></i> ${i.yearsInBusiness} ${e("supplierProfile.yearsInBusiness")}
          </div>
        </div>
      </div>
      
      <button class="btn btn-secondary" onclick="window.location.hash='/supplier/${i.id}'">
        ${e("common.showMore")||"View Profile"}
      </button>
    </div>
  `}const q=[{id:1,name:{ar:"شركة المعدات الطبية السورية",en:"Syrian Medical Equipment Co."},logo:"https://ui-avatars.com/api/?name=SME&size=200&background=00D9A6&color=fff&bold=true",specialization:{ar:"أجهزة الأشعة",en:"X-ray Machines"},specializationKey:"xray",rating:4.5,reviewCount:67,yearsInBusiness:20,location:{ar:"حمص - حسياء الصناعية",en:"Homs - Hisyah Industrial"},lat:34.45,lng:36.75,phone:"+963911223344",email:"info@sme.com",address:{ar:"المدينة الصناعية في حسياء",en:"Hisyah Industrial City"},website:"https://example.com",whatsapp:"+963911223344",products:[{name:{ar:"جهاز أشعة بانورامي",en:"Panoramic X-ray Machine"},price:"$12,000",image:"https://ui-avatars.com/api/?name=PXR&size=200&background=6C63FF&color=fff",description:{ar:"جهاز أشعة بانورامي رقمي عالي الدقة",en:"High-resolution digital panoramic X-ray machine"}}],reviews:[{name:{ar:"د. محمد عبدالله",en:"Dr. Mohammad Abdullah"},rating:5,comment:{ar:"خدمة ممتازة وأسعار منافسة",en:"Excellent service and competitive prices"},date:"2024-02-20"}]},{id:2,name:{ar:"مؤسسة حمص لمستلزمات الأسنان",en:"Homs Dental Supplies Est."},logo:"https://ui-avatars.com/api/?name=HDS&size=200&background=FF6B9D&color=fff&bold=true",specialization:{ar:"المستهلكات اليومية",en:"Daily Supplies"},specializationKey:"dailySupplies",rating:4.8,reviewCount:112,yearsInBusiness:15,location:{ar:"حمص - طريق الشام",en:"Homs - Damascus Road"},lat:34.71,lng:36.72,phone:"+963922334455",email:"sales@hds.sy",address:{ar:"طريق الشام، دوار الرئيس",en:"Damascus Rd, President Roundabout"},website:"https://example.com",whatsapp:"+963922334455",products:[{name:{ar:"كمامات طبية",en:"Medical Masks"},price:"$10",image:"https://ui-avatars.com/api/?name=Mask&size=200&background=00D9A6&color=fff",description:{ar:"علبة كمامات 50 قطعة",en:"Box of 50 masks"}}],reviews:[{name:{ar:"د. لينا أحمد",en:"Dr. Lina Ahmad"},rating:5,comment:{ar:"توصيل سريع",en:"Fast delivery"},date:"2024-01-10"}]}];function at(){return{render(){const i=[{id:"all",name:e("marketplace.all")||"All Categories"},{id:"xray",name:e("marketplace.xray")||"X-Ray & Imaging"},{id:"chairs",name:e("marketplace.dentalChairs")||"Dental Chairs"},{id:"tools",name:e("marketplace.tools")||"Hand Tools"},{id:"materials",name:e("marketplace.materials")||"Dental Materials"},{id:"sterilization",name:e("marketplace.sterilizationSimple")||"Sterilization"},{id:"dailySupplies",name:e("marketplace.dailySupplies")||"Daily Supplies"}];return`
        ${x()}
        
        <div class="page-wrapper marketplace-page" style="background: var(--bg-light);">
          ${S({title:e("nav.marketplace")||"Dental Marketplace",subtitle:e("marketplace.subtitle")||"Find the best equipment and supplies for your clinic in Homs.",showSearch:!0,searchPlaceholder:e("marketplace.searchPlaceholder")||"Search suppliers or products...",gradient:"var(--gradient-warm)"})}
          
          <div class="container section" style="margin-top: -60px; position: relative; z-index: 10;">
            
            <!-- Category Chips -->
            <div class="category-chips animate-on-scroll stagger-1">
              ${i.map((t,a)=>`
                <div class="category-chip ${a===0?"active":""}" data-category="${t.id}">
                  ${t.name}
                </div>
              `).join("")}
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding: 16px; background: white; border-radius: 12px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 20px; font-weight: 600; margin: 0;" id="supplier-count">
                ${q.length} ${e("marketplace.suppliersFound")||"Suppliers Found"}
              </h3>
              ${j(h("marketplaceView")||"card")}
            </div>

            <div id="suppliers-container" class="animate-on-scroll stagger-2">
              <!-- Rendered via JS -->
            </div>

          </div>
        </div>
        
        ${w()}
      `},afterRender(){$();const i=document.getElementById("suppliers-container"),t=document.getElementById("supplier-count"),a=document.getElementById("hero-search-input"),o=document.getElementById("hero-search-btn"),r=document.querySelectorAll(".category-chip");let s="all",n="";const d=()=>{const c=h("marketplaceView")||"card",p=g(),u=q.filter(m=>{const k=s==="all"||m.specializationKey===s,v=m.name[p].toLowerCase().includes(n.toLowerCase())||m.products.some(z=>z.name[p].toLowerCase().includes(n.toLowerCase()));return k&&v});if(t.textContent=`${u.length} ${e("marketplace.suppliersFound")||"Suppliers Found"}`,u.length===0){i.innerHTML=`
            <div class="no-results" style="text-align: center; padding: 60px 20px; background: white; border-radius: 16px;">
              <div style="width: 80px; height: 80px; background: rgba(0,0,0,0.05); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--text-secondary);">
                <i data-lucide="search-x" style="width: 40px; height: 40px;"></i>
              </div>
              <h3 style="font-size: 24px; margin-bottom: 8px;">${e("marketplace.noSuppliers")||"No suppliers found"}</h3>
              <p style="color: var(--text-secondary);">${e("marketplace.noSuppliersDesc")||"Try a different category or search term."}</p>
            </div>
          `,window.lucide&&window.lucide.createIcons();return}c==="card"?i.innerHTML=`
            <div class="supplier-grid">
              ${u.map(m=>tt(m)).join("")}
            </div>
          `:c==="list"?i.innerHTML=`
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${u.map(m=>it(m)).join("")}
            </div>
          `:c==="map"&&(i.innerHTML=W(),setTimeout(()=>{U("leaflet-map",u,"supplier")},0)),window.lucide&&window.lucide.createIcons()};d();const l=()=>{n=(a==null?void 0:a.value)||"",d()};o==null||o.addEventListener("click",l),a==null||a.addEventListener("keypress",c=>{c.key==="Enter"&&l()}),r.forEach(c=>{c.addEventListener("click",()=>{r.forEach(p=>p.classList.remove("active")),c.classList.add("active"),s=c.dataset.category,d()})}),N(document.querySelector(".marketplace-page"),c=>{f("marketplaceView",c),d()})}}}function ot(){return{render(){var d;const i=parseInt((d=window.__routeParams)==null?void 0:d.id),t=q.find(l=>l.id===i);if(!t)return`
          ${x()}
          <div class="page-wrapper flex-center" style="min-height: 60vh;">
            <div style="text-align: center;">
              <h2>${e("supplierProfile.notFound")||"Supplier Not Found"}</h2>
              <button class="btn btn-primary" onclick="window.location.hash='/doctor/marketplace'">${e("supplierProfile.backToMarketplace")||"Back to Marketplace"}</button>
            </div>
          </div>
          ${w()}
        `;const a=g(),o=t.name[a],r=t.specialization[a],s=t.location[a],n=t.address[a];return`
        ${x()}
        
        <div class="page-wrapper supplier-profile-page" style="background: var(--bg-light);">
          
          <div class="supplier-hero">
            <div class="supplier-hero-bg" style="background-image: url('https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=1600');"></div>
            <div class="supplier-hero-overlay"></div>
            <button class="btn btn-ghost" style="position: absolute; top: 24px; inset-inline-start: 24px; color: white; z-index: 10;" onclick="window.history.back()">
              <i data-lucide="${a==="ar"?"arrow-right":"arrow-left"}"></i> ${e("common.back")||"Back"}
            </button>
          </div>
          
          <div class="container">
            
            <div class="supplier-header">
              <img src="${t.logo}" alt="${o}" class="supplier-logo-large">
              <div class="supplier-title-area">
                <h1 class="supplier-name">${o}</h1>
                <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                  <span class="badge badge-primary">${r}</span>
                  <div style="display: flex; align-items: center; gap: 4px; background: white; padding: 4px 12px; border-radius: 20px; box-shadow: var(--shadow-sm);">
                    ${C(t.rating,"sm")} 
                    <span style="font-weight: bold; margin-inline-start: 4px;">${t.rating}</span>
                    <span style="color: var(--text-secondary); font-size: 14px;">(${t.reviewCount})</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-3" style="gap: 32px; margin-bottom: 40px; align-items: start;">
              
              <div style="grid-column: span 2;">
                <h2 style="font-size: 24px; margin-bottom: 24px;">${e("supplierProfile.productCatalog")||"Product Catalog"}</h2>
                
                <div class="product-catalog">
                  ${t.products.map(l=>`
                    <div class="product-card card card-hover">
                      <div class="product-card-inner" style="position: relative;">
                        <img src="${l.image}" alt="${l.name[a]}" class="product-image">
                        <div class="product-price">${l.price}</div>
                        <h3 style="font-size: 18px; margin: 0 0 8px;">${l.name[a]}</h3>
                        <p style="color: var(--text-secondary); font-size: 14px; margin: 0; line-height: 1.5;">${l.description[a]}</p>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div>
                <div class="card" style="padding: 32px; position: sticky; top: 100px;">
                  <h3 style="font-size: 20px; margin-bottom: 24px;">${e("supplierProfile.contactSupplier")||"Contact Supplier"}</h3>
                  
                  <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px;">
                    <div style="display: flex; gap: 16px; align-items: flex-start;">
                      <i data-lucide="map-pin" style="color: var(--primary); margin-top: 2px;"></i>
                      <div>
                        <div style="font-weight: 500; margin-bottom: 4px;">${s}</div>
                        <div style="color: var(--text-secondary); font-size: 14px;">${n}</div>
                      </div>
                    </div>
                    
                    <div style="display: flex; gap: 16px; align-items: center;">
                      <i data-lucide="phone" style="color: var(--primary);"></i>
                      <div style="font-weight: 500;" dir="ltr">${t.phone}</div>
                    </div>
                    
                    <div style="display: flex; gap: 16px; align-items: center;">
                      <i data-lucide="mail" style="color: var(--primary);"></i>
                      <div style="font-weight: 500;">${t.email}</div>
                    </div>
                  </div>

                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <button class="connect-btn connect-whatsapp" onclick="window.open('https://wa.me/${t.whatsapp.replace(/[^0-9]/g,"")}', '_blank')">
                      <i data-lucide="message-circle"></i> ${e("supplierProfile.whatsapp")||"WhatsApp"}
                    </button>
                    <button class="connect-btn connect-quote" id="request-quote-btn">
                      <i data-lucide="file-text"></i> ${e("supplierProfile.requestQuote")||"Request a Quote"}
                    </button>
                  </div>

                  <div id="quote-form" class="quote-form-container card" style="background: var(--bg-light); border: 1px solid var(--border); box-shadow: none;">
                    <h4 style="margin-bottom: 16px;">${e("supplierProfile.requestQuotation")||"Request Quotation"}</h4>
                    <div class="form-group">
                      <label>${e("supplierProfile.itemsNeeded")||"Items needed"}</label>
                      <textarea class="textarea" rows="3" style="width: 100%;"></textarea>
                    </div>
                    <button class="btn btn-primary" style="width: 100%;" id="send-quote-btn">${e("supplierProfile.sendRequest")||"Send Request"}</button>
                  </div>
                </div>
              </div>

            </div>

            <!-- Reviews -->
            ${V(t.reviews||[],t.rating,t.reviewCount)}

          </div>
        </div>
        
        ${w()}
      `},afterRender(){$();const i=document.querySelector(".supplier-profile-page");i&&O(i);const t=document.getElementById("request-quote-btn"),a=document.getElementById("quote-form"),o=document.getElementById("send-quote-btn");t==null||t.addEventListener("click",()=>{a.classList.toggle("active")}),o==null||o.addEventListener("click",()=>{alert(e("supplierProfile.quoteSuccess")||"Quote request sent successfully!"),a.classList.remove("active")})}}}function H(){qe(),y("/",je),y("/patient/home",Ve),y("/patient/find-doctor",Ke),y("/doctor-profile/:id",Qe),y("/patient/trends",Ge),y("/about",Je),y("/contact",_e),y("/doctor/auth",Xe),y("/doctor/dashboard",Ze),y("/doctor/settings",et),y("/doctor/marketplace",at),y("/supplier/:id",ot),Be(),window.addEventListener("languageChanged",()=>{const t=new HashChangeEvent("hashchange");window.dispatchEvent(t)});const i=document.getElementById("initial-loader");i&&(i.style.opacity="0",setTimeout(()=>i.remove(),300)),console.log("🦷 Dental Directory initialized!")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",H):H();
