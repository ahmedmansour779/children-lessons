import {
    image1_1, image1_2_1, image1_2_2, image1_2_3, image1_2_4, image1_3_1, image1_3_2, image1_3_3, image1_3_4, image1_3_5, image1_4_1, image1_4_2, image1_4_3, image1_4_4, image1_4_5, image1_5_1, image1_5_2, image1_5_3, image1_t_1, image1_t_2, image1_t_3, image1_t_4, image1_t_5, image1_t_6, image1_t_7
} from "./image/1.js"
import {
    image2_1_1, image2_2_1, image2_2_2, image2_2_3, image2_2_4, image2_2_5, image2_3_1, image2_3_2, image2_3_3, image2_3_4, image2_t_1, image2_t_2, image2_t_3, image2_t_4, image2_t_5, image2_t_6, image2_t_7
} from "./image/2.js"
import {
    image3_1_1,
    image3_2_1,
    image3_2_2,
    image3_2_3,
    image3_3_1,
    image3_4_1,
    image3_5_1,
    image3_6_1,
    image3_6_2,
    image3_t_1,
    image3_t_2,
    image3_t_3,
    image3_t_4,
    image3_t_5,
    image3_t_6,
    image3_t_7
} from "./image/3.js"
import {
    image4_1_1,
    image4_2_1,
    image4_3_1,
    image4_3_2,
    image4_4_1,
    image4_4_2,
    image4_4_3,
    image4_t_1,
    image4_t_2,
    image4_t_3,
    image4_t_4,
    image4_t_5
} from "./image/4.js"
import {
    image5_1_1,
    image5_2_1,
    image5_2_2,
    image5_2_3,
    image5_2_4,
    image5_2_5,
    image5_2_6,
    image5_3_1,
    image5_3_2,
    image5_3_3,
    image5_3_4,
    image5_3_5,
    image5_3_6,
    image5_t_1,
    image5_t_2,
    image5_t_3,
    image5_t_4,
    image5_t_5,
    image5_t_6,
    image5_t_7
} from "./image/5.js"

// audios
import {
    audio1_1, audio1_2, audio1_3, audio1_4
} from "./audio/1.js"
import {
    audio2_1, audio2_2
} from "./audio/2.js"
import {
    audio3_1, audio3_2, audio3_3, audio3_4, audio3_5, audio3_6
} from "./audio/3.js"
import {
    audio4_1, audio4_2, audio4_3
} from "./audio/4.js"
import {
    audio5_1, audio5_2, audio5_3
} from "./audio/5.js"

const lessons = [
    {
        id: 1,
        title1: "الحرائق",
        title2: "ماذا يعني الحريق",
        title3: "ما هي أسباب الحريق",
        title4: "أدوات أطفاء الحريق",
        titleEnd: "هيا بنا الي بيتنا الدائري",
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
        title2: "ماذا افعل عند اندلاع الحريق",
        title3: "تصرفات غير صحيحه عند حدوث الحريق يجب ان ابتعد عنها",
        titleEnd: "هيا بنا الي بيتنا الدائري",
        imagePage1: image2_1_1,
        imagePage2: [image2_2_1, image2_2_2, image2_2_3, image2_2_4, image2_2_5],
        imagePage3: [image2_3_1, image2_3_2, image2_3_3, image2_3_4],
        imageFalse: [image1_5_1, image1_5_2, image1_5_3],
        imageTrue: [image2_t_1, image2_t_2, image2_t_3, image2_t_4, image2_t_5, image2_t_6, image2_t_7],
        allImage: [image2_t_3, image2_t_4, image1_5_1, image2_t_1, image2_t_2, image1_5_2, image2_t_5, image2_t_6, image1_5_3, image2_t_7],
        audio1: audio2_1,
        audio2: audio2_1,
        audio3: audio2_2,
        pages: 4,
        circleParts: 7
    },
    {
        id: 3,
        title1: "رجل الإطفاء",
        title2: "وظيفه رجل الإطفاء",
        title3: "ادوات رجل الاطفاء",
        title4: "زي رجل الإطفاء",
        title5: "سياره رجل الإطفاء",
        title6: "طريقه الوصول لرجل الإطفاء",
        titleEnd: "هيا بنا الي بيتنا الدائري",
        imagePage1: image3_1_1,
        imagePage2: [image3_2_1, image3_2_2, image3_2_3],
        imagePage3: [image3_3_1],
        imagePage4: [image3_4_1],
        imagePage5: [image3_5_1],
        imagePage6: [image3_6_1, image3_6_2],
        imageTrue: [image3_t_1, image3_t_2, image3_t_3, image3_t_4, image3_t_5, image3_t_6, image3_t_7],
        allImage: [image3_t_1, image3_t_2, image3_t_3, image3_t_4, image3_t_5, image3_t_6, image3_t_7],
        audio1: audio3_1,
        audio2: audio3_2,
        audio3: audio3_3,
        audio4: audio3_4,
        audio5: audio3_5,
        audio6: audio3_6,
        pages: 7,
        circleParts: 7,
    },
    {
        id: 4,
        title1: "التزاحم",
        title2: "ماذا تعني كلمه تزاحم",
        title3: "اماكن لا يجب التزاحم فيها في الروضه",
        titleEnd: "هيا بنا الي بيتنا الدائري",
        imagePage1: image4_1_1,
        imagePage2: [image4_2_1],
        imagePage3: [image4_3_1, image4_3_2],
        imagePage4: [image4_4_1, image4_4_2, image4_4_3],
        imageTrue: [image4_t_1, image4_t_2, image4_t_3, image4_t_4, image4_t_5],
        allImage: [image4_t_1, image4_t_2, image4_t_3, image4_t_4, image4_t_5],
        audio1: audio4_1,
        audio2: audio4_2,
        audio3: audio4_3,
        pages: 4,
        circleParts: 5,
    },
    {
        id: 5,
        title1: "أدوات اللعب",
        title2: "ما هي ادوات اللعب داخل الروضه",
        title3: "كيفيه استخدام الالعاب بشكل سليم",
        titleEnd: "هيا بنا الي بيتنا الدائري",
        imagePage1: image5_1_1,
        imagePage2: [image5_2_1, image5_2_2, image5_2_3, image5_2_4, image5_2_5, image5_2_6],
        imagePage3: [image5_3_1, image5_3_2, image5_3_3, image5_3_4, image5_3_5, image5_3_6],
        imageTrue: [image5_t_1, image5_t_2, image5_t_3, image5_t_4, image5_t_5, image5_t_6, image5_t_7],
        allImage: [image5_t_1, image5_t_2, image5_t_3, image5_t_4, image5_t_5, image5_t_6, image5_t_7],
        audio1: audio5_1,
        audio2: audio5_2,
        audio3: audio5_3,
        pages: 4,
        circleParts: 7
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