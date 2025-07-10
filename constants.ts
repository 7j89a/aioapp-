
import { Course } from './types';

export const COURSES: Course[] = [
    {
        id: 1, title: 'أساسيات الرياضيات', description: 'تعلم الأساسيات الرياضية من الصفر حتى الاحتراف', questions_count: 10, difficulty: 'مبتدئ', category: 'رياضيات', icon: '🔢', rating: 4.8, students: 1250, is_free: true,
        questions: [
            { question: 'ما هو ناتج 15 + 25؟', options: ['35', '40', '45', '50'], correct: 1, explanation: 'ناتج جمع 15 + 25 = 40' },
            { question: 'ما هو الجذر التربيعي للعدد 64؟', options: ['6', '7', '8', '9'], correct: 2, explanation: 'الجذر التربيعي لـ 64 هو 8 لأن 8 × 8 = 64' },
            { question: 'ما هو ناتج 12 × 8؟', options: ['84', '96', '104', '112'], correct: 1, explanation: 'ناتج ضرب 12 × 8 = 96' },
            { question: 'ما هو ناتج 100 ÷ 4؟', options: ['20', '25', '30', '35'], correct: 1, explanation: 'ناتج قسمة 100 ÷ 4 = 25' },
            { question: 'ما هو ناتج 7²؟', options: ['14', '21', '49', '56'], correct: 2, explanation: 'ناتج 7² = 7 × 7 = 49' },
            { question: 'ما هو ناتج 3 + 4 × 2؟', options: ['10', '11', '14', '16'], correct: 1, explanation: 'حسب ترتيب العمليات: 4 × 2 = 8، ثم 3 + 8 = 11' },
            { question: 'كم عدد الأضلاع في المثلث؟', options: ['2', '3', '4', '5'], correct: 1, explanation: 'المثلث له 3 أضلاع' },
            { question: 'ما هو ناتج 50% من 200؟', options: ['50', '100', '150', '200'], correct: 1, explanation: '50% من 200 = 0.5 × 200 = 100' },
            { question: 'ما هو العدد الأولي من بين هذه الأعداد؟', options: ['4', '6', '7', '8'], correct: 2, explanation: 'العدد 7 هو عدد أولي لأنه لا يقبل القسمة إلا على 1 وعلى نفسه' },
            { question: 'ما هو ناتج 2³؟', options: ['6', '8', '9', '12'], correct: 1, explanation: 'ناتج 2³ = 2 × 2 × 2 = 8' }
        ]
    },
    {
        id: 2, title: 'قواعد اللغة العربية', description: 'إتقان قواعد النحو والصرف في اللغة العربية', questions_count: 10, difficulty: 'متوسط', category: 'لغة عربية', icon: '📚', rating: 4.9, students: 980, is_free: false,
        questions: [
            { question: 'ما هو إعراب كلمة "محمد" في جملة "جاء محمد"؟', options: ['مبتدأ', 'فاعل', 'مفعول به', 'خبر'], correct: 1, explanation: 'محمد فاعل مرفوع وعلامة رفعه الضمة' },
            { question: 'ما هو جمع كلمة "كتاب"؟', options: ['كتب', 'كتابات', 'كتابين', 'أكتاب'], correct: 0, explanation: 'جمع كتاب هو كتب' },
            { question: 'ما هو مثنى كلمة "قلم"؟', options: ['قلمان', 'قلمين', 'أقلام', 'قلوم'], correct: 0, explanation: 'مثنى قلم في حالة الرفع هو قلمان' },
            { question: 'ما هو نوع الجملة "اقرأ الكتاب"؟', options: ['اسمية', 'فعلية', 'شرطية', 'استفهامية'], correct: 1, explanation: 'الجملة فعلية لأنها تبدأ بفعل أمر' },
            { question: 'ما هو إعراب "الطالب" في "الطالب مجتهد"؟', options: ['فاعل', 'مبتدأ', 'خبر', 'مفعول'], correct: 1, explanation: 'الطالب مبتدأ مرفوع وعلامة رفعه الضمة' },
            { question: 'ما هو ضد كلمة "كبير"؟', options: ['عظيم', 'صغير', 'طويل', 'قصير'], correct: 1, explanation: 'ضد كبير هو صغير' },
            { question: 'ما هو جذر كلمة "مكتبة"؟', options: ['ك ت ب', 'م ك ت', 'ت ب ة', 'ك ت م'], correct: 0, explanation: 'جذر مكتبة هو ك ت ب' },
            { question: 'ما هو نوع "ما" في "ما أجمل السماء"؟', options: ['استفهامية', 'تعجبية', 'نافية', 'موصولة'], correct: 1, explanation: 'ما هنا تعجبية في أسلوب التعجب' },
            { question: 'ما هو إعراب "سريعاً" في "جرى الولد سريعاً"؟', options: ['فاعل', 'مفعول به', 'حال', 'صفة'], correct: 2, explanation: 'سريعاً حال منصوب وعلامة نصبه الفتحة' },
            { question: 'ما هو نوع الهمزة في كلمة "أحمد"؟', options: ['همزة وصل', 'همزة قطع', 'همزة متوسطة', 'همزة متطرفة'], correct: 1, explanation: 'همزة أحمد همزة قطع لأنها تُنطق في بداية الكلام' }
        ]
    },
    {
        id: 3, title: 'الفيزياء الأساسية', description: 'مفاهيم الفيزياء الأساسية والتطبيقات العملية', questions_count: 10, difficulty: 'متقدم', category: 'علوم', icon: '⚛️', rating: 4.7, students: 650, is_free: false,
        questions: [
            { question: 'ما هي وحدة قياس القوة في النظام الدولي؟', options: ['جول', 'نيوتن', 'واط', 'باسكال'], correct: 1, explanation: 'وحدة قياس القوة هي النيوتن (N)' },
            { question: 'ما هي سرعة الضوء في الفراغ؟', options: ['300,000 كم/ث', '3,000,000 كم/ث', '30,000 كم/ث', '300 كم/ث'], correct: 0, explanation: 'سرعة الضوء في الفراغ حوالي 300,000 كم/ث' },
            { question: 'ما هو قانون نيوتن الأول؟', options: ['F = ma', 'قانون الجذب العام', 'قانون القصور الذاتي', 'قانون الطاقة'], correct: 2, explanation: 'قانون نيوتن الأول هو قانون القصور الذاتي' },
        ]
    },
    {
        id: 4, title: 'التاريخ الإسلامي', description: 'رحلة عبر التاريخ الإسلامي العريق', questions_count: 10, difficulty: 'متوسط', category: 'تاريخ', icon: '🏛️', rating: 4.6, students: 850, is_free: false,
        questions: [
             { question: 'في أي عام هجري كانت غزوة بدر؟', options: ['1 هـ', '2 هـ', '3 هـ', '4 هـ'], correct: 1, explanation: 'غزوة بدر كانت في السنة الثانية للهجرة' },
             { question: 'من هو أول خليفة راشد؟', options: ['عمر بن الخطاب', 'أبو بكر الصديق', 'عثمان بن عفان', 'علي بن أبي طالب'], correct: 1, explanation: 'أبو بكر الصديق رضي الله عنه هو أول الخلفاء الراشدين' },
        ]
    },
    {
        id: 5, title: 'الجغرافيا العامة', description: 'استكشاف عجائب الجغرافيا الطبيعية والبشرية', questions_count: 10, difficulty: 'مبتدئ', category: 'جغرافيا', icon: '🌍', rating: 4.4, students: 720, is_free: false,
        questions: [
            { question: 'ما هي أكبر قارة في العالم؟', options: ['أفريقيا', 'آسيا', 'أوروبا', 'أمريكا الشمالية'], correct: 1, explanation: 'آسيا هي أكبر قارة في العالم من حيث المساحة والسكان' },
            { question: 'ما هو أطول نهر في العالم؟', options: ['النيل', 'الأمازون', 'الميسيسيبي', 'اليانغتسي'], correct: 0, explanation: 'نهر النيل هو أطول نهر في العالم بطول حوالي 6650 كم' },
        ]
    }
];
