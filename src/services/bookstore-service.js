export default class BookstoreService {
    data = [
        {
            id: 57,
            title: 'Хоббит, или туда и обратно',
            author: 'Толкин Дж.',
            price: 153,
            country: 'foreign literature',
            coverImage: "2412538_detail.jpg",
            count: 1,
        },
        {
            id: 54,
            title: 'Убить пересмешника',
            author: 'Харпер Ли',
            price: 237,
            country: 'foreign literature',
            coverImage: "2622192_detail.jpg",
            count: 1,
        },
        {
            id: 36,
            title: 'О мышах и людях',
            author: 'Джон Стейнбек',
            price: 127,
            country: 'foreign literature',
            coverImage: "2612850_detail.jpg",
            count: 1,
        },
        {
            id: 39,
            title: 'Заводной апельсин',
            author: 'Энтони Бёрджесс',
            price: 178,
            country: 'foreign literature',
            coverImage: "2596266_detail.jpg",
            count: 1,
        },
        {
            id: 47,
            title: 'Мы',
            author: 'Замятин Е.И.',
            price: 133,
            country: 'russian literature',
            coverImage: "2667182_detail.jpg",
            count: 1,
        },
        {
            id: 55,
            title: 'Алхимик',
            author: 'Пауло Коэльо',
            price: 129,
            country: 'foreign literature',
            coverImage: "2450235_detail.jpg",
            count: 1,
        },
        {
            id: 64,
            title: 'Автостопом по галактике',
            author: 'Дуглас Адамс',
            price: 192,
            country: 'foreign literature',
            coverImage: "2421138_detail.jpg",
            count: 1,
        },
    ]

    getBooks = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.data), 800)
        })
    }
};