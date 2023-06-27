import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translations: {
          //POP-UP
          FormTitle:"DEMANDER LA DEVIS",
          //Q1
          FormQuestion1Title:"Type de voiture",
          FormQuestion1:"Quel type de voiture avez vous?",
          FormQuestion1Choice1:"Voitures/vehicules utilitaires",
          FormQuestion1Choice2:"Camion/poids lourds",
          FormQuestion1Choice3:"Vehicules de transports de personne",
          FormQuestion1Choice4:"Engins de chantiers/ engins d'agricole /tracteur..",
          FormQuestion1Choice5:"Scooters/motos",
          FormQuestion1Choice6:"Loisirs (bateaux. Quad camping ..)",
          //Q2
          FormQuestion2Title:"Produit/Pack",
          FormQuestion2:"Quel pack/produit vous voulez achetez?",
          FormQuestion2Choice1:"Pack Gold",
          FormQuestion2Choice2:"Pack Silver",
          FormQuestion2Choice3:"Produit Gestion De Park",
          FormQuestion2Choice4:"Produit GPS",
          FormQuestion2Choice5:"Produit Boutton SOS",
          FormQuestion2Choice6:"Produit Identification Du Chauffeur",
          //Q3
          FormQuestion3Title:"Information",
          FormQuestion3:"Information",
          FormQuestion3Choice1:"Full Name",
          FormQuestion3Choice2:"Phone Number",
          FormQuestion3Choice3:"Email Address",
          //Buttons
          Continue:"Continuer",
          Back:"Retourner",
          Send:"Envoyer",
          //Thanks
          FormDoneTitle:"Demande envoyée",
          FormDoneBody:"Votre demande a été envoyée.",
          //ABOUT
          Who: "QUI EST FAST TRACK?",
          About:"Société spécialisée dans le développement et la commercialisation de technologie de géo-localisation et géo-management. Présente sur le marché des GPS avec une approche unique et différenciée, orientée à 100% vers la satisfaction et la recherche du succès de chacun de nos clients.",
        //VALUES
          Values:"NOS VALEURS",
        MoneyTitle:"RÉALISEZ DES ÉCONOMIES",
        MoneyBody:"● Réduction des kilomètres parcourus <br/> ● Réduction des frais d'usage <br/> ● Réduction/suppression des usages hors cadre professionnel <br/> ● Baisse de la sinistralité",
        ServiceTitle:"AMÉLIOREZ VOTRE QUALITÉ DE SERVICE",
        ServiceBody:"● Visibilité sur les statuts des différentes missions <br/> ● Rapidité d'intervention <br/> ● Capacité à gérer les imprévus <br/> ● Possibilité d'informer vos clients en temps réel et ainsi démontrer votre réactivité",
        ProductivityTitle:"AUGMENTEZ VOTRE PRODUCTIVITÉ",
        ProductivityBody:"● Réduction des temps de parcours <br/> ● Réduction des délais d'intervention <br/> ● Respect du plan de travail <br/> ● Gain de réactivité grâce à la communication instantanée avec votre personnel itinérant",
        ProtectionTitle:"PROTÉGEZ VOS BIENS",
        ProtectionBody:"● Protegez efficacement vos véhicules et marchandises <br/> ● Sécurisez vos biens d'un simple clic <br/> ● Soyez alerté en temps réel <br/> ● Agissez avec rapidité et précision <br/> ● Bénéficiez de services additionnels <br/> ● Envois d'alertes automatiques et instantanées par SMS",
        //PACKS
        PacksTitle:"NOS PACKS",
        Packs1Title:"Light",
        Packs1Body:"Boitier GPS Simple <br/> Géolocalisation en temps réel <br/> Historique de trajet <br/> Alertes de dépassements de vitesse",
        Packs2Title:"Gold",
        Packs2Title2:"Plus Populaire",
        Packs2Body:"Boitier GPS Simple <br/> Géolocalisation en temps réel <br/> Historique de trajet <br/> Alertes de dépassements de vitesse",
        PacksButton:"CONTACTER",
        //PRODUCTS
        ProductsTitle:"NOS PRODUITS",
        Products1Title:"Gestion de Parc",
        Products1Body:"*Suivi des entretiens <br/> *Suivi de vidange <br/> *Suivi de filtre <br/> *Suivi de pneus <br/> *Suivie de vignettes <br/> *Suivie de assurance <br/> *Suivie de carburant <br/> *Coordination avec le kilometrage prélevé du GPS <br/> *Tableau de bord des entretients <br/> *Alertes d'entretiens <br/> *Optimisation des déplacements",
        Products2Title:"GPS",
        Products2Body:"*Geolocalisation 24/7 depuis n'importe quel terminal <br/> *Immobilisation a distance des vehicules <br/> *Gestion automatisée des amendes et des entretiens <br/> *Interface simple et ergonomique <br/> *Système de geofencing unique et breveté <br/> *Operateur historique international <br/> *Localisation des vehicules en temps réel <br/> *Suivi des consommations de carburant <br/> *Gestion des temps de conduite <br/> *Accessible sur les smartphones",
        Products3Title:"Bouton SOS",
        Products3Body:"* Service semi-automatisé eCall <br/> * Alerter les secours manuellement en cas d'accident <br/> * Detecter si vous etes inconscient <br/> * Alerte automatique s'il detecte que vous risquez d'etre inconscient",
        Products4Title:"Identification Du Chauffeur",
        Products4Body:"* Rapports faciles à générer par véhicule ainsi que par conducteur <br/> * Suivez l'activité du conducteur <br/> * Controlez si le conducteur est autorisé à conduire le véhicule <br/> * Suivez le comportement conducteur <br/> * Badges RFID <br/> * Detectez le responsable en cas de sinistre",
        Client:"Nos Clients",
        Email:"CONTACT",
        Num:"NUMERO TELEPHONE",
        Devis:"DEMANDER LA DEVIS",
        Con:"SE CONNECTER",
        Nombre:"Nombre",
        Tell:"Teléphone",
        Emaill:"Email",
        Slogan:"Always By <br/>Your Side.",
      }
      },
      tn: {
        translations: {
                    //POP-UP
                    FormTitle:"اطلب اقتباس",
                    //Q1
                    FormQuestion1Title:"نوع السيارة",
                    FormQuestion1:"ما نوع السيارة التي لديك؟",
                    FormQuestion1Choice1:"السيارات / مركبات الخدمات",
                    FormQuestion1Choice2:"شاحنة / واجب ثقيل",
                    FormQuestion1Choice3:"مركبات نقل الركاب",
                    FormQuestion1Choice4:"آلات البناء / الآلات الزراعية / جرار ..",
                    FormQuestion1Choice5:"سكوتر / دراجات نارية",
                    FormQuestion1Choice6:"أوقات الفراغ (القوارب. التخييم الرباعي ..)",
                    //Q2
                    FormQuestion2Title:"المنتج / العبوة",
                    FormQuestion2:"ما هي العبوة / المنتج الذي تريد شراءه؟",
                    FormQuestion2Choice1:"الباقة الذهبية",
                    FormQuestion2Choice2:"الباقة الفضية",
                    FormQuestion2Choice3:"منتج إدارة المنتزهات",
                    FormQuestion2Choice4:"منتج GPS",
                    FormQuestion2Choice5:"زر المنتج SOS",
                    FormQuestion2Choice6:"تعريف برنامج تشغيل المنتج",
                    //Q3
                    FormQuestion3Title:"معلومة",
                    FormQuestion3:"معلومة",
                    FormQuestion3Choice1:"الاسم الكامل",
                    FormQuestion3Choice2:"رقم الهاتف",
                    FormQuestion3Choice3:"عنوان البريد الالكترونى",
                    //Buttons
                    Continue:"يكمل",
                    Back:"يواجه",
                    Send:"إرسال",
                    //Thanks
                    FormDoneTitle:"تم ارسال الطلب",
                    FormDoneBody:"تم ارسال طلبك.",
                    //ABOUT
          Who: "من هو FAST TRACK؟",
          About:"شركتنا مختصة في التتبع عبر الأقمار الاصطناعية، نوفرولكم منتوج عالمي بتقنيات حديثة و جودة قوية. تستحفظ على كرهبتك،لعزاز عليك و خاصة رزقك بش المال مايكونش سايب. و هكا عينيك تكون محلولة علاهم الكل. و آخر حاجة باش تكون مطمان معانا هو انو وقت ماتحتاجنا في مصلحة ما بعد البيع تلقانا حداك في أقل من 24  ساعة",
          //VALUES
          Values:"قيمنا",
          MoneyTitle:"تحقيق التوفير",
          MoneyBody:"● تقليص عدد الكيلومترات المقطوعة <br/> ● رسوم مخفضة للمستخدم <br/> ● الحد / القضاء على الاستخدامات غير المهنية <br/> ● انخفاض في المطالبات",
        ServiceTitle:"تحسين جودة الخدمة الخاصة بك",
        ServiceBody:"● رؤية على أوضاع البعثات المختلفة <br/> ● سرعة التدخل <br/> ● القدرة على إدارة الطوارئ <br/> ● القدرة على إبلاغ عملائك في الوقت الفعلي وبالتالي إظهار استجابتك",
        ProductivityTitle:"زيادة إنتاجيتك",
        ProductivityBody:"● تقليص أوقات الرحلات <br/> ● تقليل أوقات التدخل <br/> ● الامتثال لخطة العمل <br/> ● زيادة الاستجابة بفضل الاتصال الفوري مع موظفيك المتنقلين",
        ProtectionTitle:"حماية الممتلكات الخاصة بك",
        ProtectionBody:"● حماية المركبات والبضائع الخاصة بك بشكل فعال <br/> ● تأمين الأصول الخاصة بك بنقرة واحدة <br/> ● يتم تنبيهك في الوقت الحقيقي <br/> ● العمل بسرعة ودقة <br/> ● الاستفادة من الخدمات الإضافية <br/> ● إرسال تنبيهات تلقائية وفورية عن طريق الرسائل القصيرة",
        //PACKS
        PacksTitle:"باقاتنا",
        Packs1Title:"خفيفة",
        Packs1Body:"وحدة Pro GPS <br/> تحديد الموقع الجغرافي في الوقت الحقيقي <br/> تاريخ الرحلة <br/> تنبيهات السرعة",
        Packs2Title:"ذهب",
        Packs2Title2:"الأكثر شهرة",
        Packs2Body:"وحدة Pro GPS <br/> تحديد الموقع الجغرافي في الوقت الحقيقي <br/> تاريخ الرحلة <br/> تنبيهات السرعة",
        PacksButton:"اتصل",
        //PRODUCTS
        ProductsTitle:"منتجاتنا",
        Products1Title:"إدارة المنتزهات",
        Products1Body:"* متابعة المقابلات <br/> * مراقبة الزيت <br/> * تتبع الفلتر <br/> * تتبع الاطارات <br/> * تتبع الصورة المصغرة <br/> * متابعة التأمين <br/> * تتبع الوقود <br/> * لوحة المقابلة الشخصية <br/> * تنبيهات المقابلة <br/> * تحسين السفر",
        Products2Title:"نظام التموضع العالمي",
        Products2Body:"* 24/7 تحديد الموقع الجغرافي من أي محطة <br/> * تجميد المركبات عن بعد <br/> * الإدارة الآلية للغرامات والصيانة <br/> * واجهة بسيطة ومريحة <br/> * نظام سياج جغرافي فريد وحاصل على براءة اختراع <br/> * مشغل دولي شاغل الوظيفة <br/> * موقع السيارة في الوقت الحقيقي <br/> * مراقبة استهلاك الوقود <br/> * إدارة وقت القيادة <br/> * متوفر على الهواتف الذكية",
        Products3Title:"زر إس أو إس",
        Products3Body:"* خدمة eCall شبه الآلية <br/> * تنبيه خدمات الطوارئ يدويًا في حالة وقوع حادث <br/> * كشف إذا كنت فاقدا للوعي <br/> * تنبيه تلقائي إذا اكتشف أنك معرض لخطر فقدان الوعي",
        Products4Title:"معرف السائق",
        Products4Body:"* من السهل إنشاء تقارير لكل مركبة وكذلك لكل سائق <br/> * تتبع نشاط السائق <br/> * تحقق مما إذا كان السائق مخولاً لقيادة السيارة <br/> * تتبع سلوك السائق <br/> * شارات RFID <br/> * الكشف عن الشخص المسؤول في حال وجود مطالبة",
        Client:"عملاء",
        Email:"اتصل",
        Num:"رقم الهاتف",
        Devis:"اطلب اقتباس",
        Con:"يتصل",
        Nombre:"رقم",
        Tell:"هاتف",
        Emaill:"البريد الإلكتروني",
        Slogan:"دائما بجانبك",
      }
      }
    },
    fallbackLng: "tn",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;