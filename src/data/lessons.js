import {
    image1_1, image1_2_1, image1_2_2, image1_2_3, image1_2_4, image1_3_1, image1_3_2, image1_3_3, image1_3_4, image1_3_5, image1_4_1, image1_4_2, image1_4_3, image1_4_4, image1_4_5, image1_5_1, image1_5_2, image1_5_3, image1_t_1, image1_t_2, image1_t_3, image1_t_4, image1_t_5, image1_t_6, image1_t_7
} from "./image/1.js"
import {
    image2_1_1, image2_2_1, image2_2_2, image2_2_3, image2_2_4, image2_2_5, image2_3_1, image2_3_2, image2_3_3, image2_3_4, image2_t_1, image2_t_2, image2_t_3, image2_t_4, image2_t_5, image2_t_6, image2_t_7
} from "./image/2.js"

// audios
import {
    audio1_1, audio1_2, audio1_3, audio1_4
} from "./audio/1.js"
import {
    audio2_1, audio2_2
} from "./audio/2.js"
import {
    audio3_1, audio3_2, audio3_3, audio3_4, audio3_5, audio3_6, audio3_7
} from "./audio/3.js"

const lessons = [
    {
        id: 1,
        title1: "الحرائق",
        title2: "ماذا يعني الحريق",
        title3: "ما هي أسباب الحريق",
        title4: "أدوات أطفاء الحريق",
        titleEnd: "هيا بنا نلعب",
        imagePage1: image1_1,
        imagePage2: [image1_2_1, image1_2_2, image1_2_3, image1_2_4],
        imagePage3: [image1_3_1, image1_3_2, image1_3_3, image1_3_4, image1_3_5],
        imagePage4: [image1_4_1, image1_4_2, image1_4_3, image1_4_4, image1_4_5],
        imageFalse: [image1_5_1, image1_5_2, image1_5_3],
        imageTrue: [image1_t_1, image1_t_2, image1_t_3, image1_t_4, image1_t_5, image1_t_6, image1_t_7],
        allImage: [image1_5_1, image1_t_2, image1_t_3, image1_t_4, image1_5_3, image1_t_1, image1_5_2, image1_t_6, image1_t_7, image1_t_5],
        audio1: audio1_1,
        audio2: audio1_2,
        audio3: audio1_3,
        audio4: audio1_4,
        pages: 5,
        circleParts: 7
    },
    {
        id: 2,
        title1: "ماذا افعل عند اندلاع الحريق",
        title2: "تصرفات غير صحيحه عند حدوث الحريق يجب ان ابتعد عنها",
        title3: "",
        titleEnd: "هيا بنا نلعب",
        imagePage1: image2_1_1,
        imagePage2: [image2_2_1, image2_2_2, image2_2_3, image2_2_4, image2_2_5],
        imagePage3: [image2_3_1, image2_3_2, image2_3_3, image2_3_4],
        imageFalse: [image1_5_1, image1_5_2, image1_5_3],
        imageTrue: [image2_t_1, image2_t_2, image2_t_3, image2_t_4, image2_t_5, image2_t_6, image2_t_7],
        allImage: [image2_t_3, image2_t_4, image1_5_1, image2_t_1, image2_t_2, image1_5_2, image2_t_5, image2_t_6, image1_5_3, image2_t_7],
        audio1: audio2_1,
        audio2: audio2_2,
        pages: 4,
        circleParts: 7
    },
    {
        id: 3,
        title1: "رجل الإطفاء",
        audio1: audio3_1,
        audio2: audio3_2,
        audio3: audio3_3,
        audio4: audio3_4,
        audio5: audio3_5,
        audio6: audio3_6,
        audio7: audio3_7,
    },
    {
        id: 4,
        title1: "التزاحم",
    },
    {
        id: 5,
        title1: "أدوات اللعب داخل الروضة",
    },
    {
        id: 6,
        title1: "أماكن اللعب داخل الروضة",
    },
    {
        id: 7,
        title1: "ما هي الكهرباء",
    },
    {
        id: 8,
        title1: "نصائح للتعامل مع الكهرباء",
    },
    {
        id: 9,
        title1: "حيوانات الغابة السعيدة والتطعيمات",
    },
    {
        id: 10,
        title1: "ما هي تطعيماتي المهمة",
    },
    {
        id: 11,
        title1: "يلا بينا نأخذ التطعيمات",
    },
    {
        id: 12,
        title1: "الوقاية من الأمراض",
    },
    {
        id: 13,
        title1: "الوقاية من الأمراض الغير معدية",
    },
    {
        id: 14,
        title1: "الوقاية من الأمراض المعدية",
    },
    {
        id: 15,
        title1: "الاصابات السطحية",
    },
    {
        id: 16,
        title1: "طرق التعامل مع الاصابات السطحية",
    },
    {
        id: 17,
        title1: "مصدر الكهرباء في منزلنا",
    },
    {
        id: 18,
        title1: "كيف اتعامل مع الأجهزة الكهربائية في منزلي",
    },
    {
        id: 19,
        title1: "ما هي الأدوات الحادة في منزلي",
    },
    {
        id: 20,
        title1: "أبتعد عن الأدوات الحادة",
    },
    {
        id: 21,
        title1: "احذر المواد القابله للأشتعال",
    },
    {
        id: 22,
        title1: "الهواتف الذكية",
    },
    {
        id: 23,
        title1: "الأنترنت",
    },
    {
        id: 24,
        title1: "سلوكيات الطريق",
    },
    {
        id: 25,
        title1: "أشارات المرور",
    },
    {
        id: 26,
        title1: "هيا بنا نلعب",
    },
    {
        id: 27,
        title1: "أهمية أشارات المرور في حياتنا",
    },
    {
        id: 28,
        title1: "شرطي المرور",
    },
    {
        id: 29,
        title1: "الأماكن العامة",
    },
    {
        id: 30,
        title1: "ماذا افعل عند جلوسي في وسائل المواصلات",
    },
]

export default lessons