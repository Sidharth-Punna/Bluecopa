import { writable } from 'svelte/store';
import type { Movie } from '$lib/types/movies';
const mockMovies: Movie[] = [
    {
        id: 1,
        title: 'Inception',
        poster:
            'https://a.ltrbxd.com/resized/sm/upload/sv/95/s9/4j/inception-0-1000-0-1500-crop.jpg?v=30d7224316',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/vi/ms/z2/gw/inception-1200-1200-675-675-crop-000000.jpg?v=7e41f271da',
        description:
            'A skilled thief who specializes in extracting corporate secrets through dream-sharing technology is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
        releaseDate: '2010',
        genre: 'Sci-Fi',
        director: 'Christopher Nolan',
        reviews: [
            { rating: 5, comment: 'A mind-blowing masterpiece of cinematic imagination!' },
            { rating: 4, comment: 'Stunning visual effects and complex narrative.' },
            {
                rating: 5,
                comment: 'Nolan at his absolute best - a film that demands multiple viewings.'
            },
            { rating: 3, comment: 'Interesting concept, but a bit confusing.' }
        ]
    },
    {
        id: 2,
        title: 'Interstellar',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/r4/0u/oq/0i/interstellar-1200-1200-675-675-crop-000000.jpg?v=fc649141b5',
        poster:
            'https://a.ltrbxd.com/resized/film-poster/1/1/7/6/2/1/117621-interstellar-0-1000-0-1500-crop.jpg?v=7ad89e6666',
        description:
            'In a future where Earth is becoming uninhabitable, a former NASA pilot is recruited for a secret mission through a newly discovered wormhole, seeking a new home for humanity and confronting the mysteries of space, time, and human survival.',
        releaseDate: '2014',
        genre: 'Sci-Fi',
        director: 'Christopher Nolan',
        reviews: [
            { rating: 5, comment: 'Absolutely breathtaking - a perfect blend of science and emotion.' },
            { rating: 4, comment: 'Visually stunning with a powerful soundtrack.' },
            { rating: 5, comment: 'One of the most profound sci-fi films of the decade.' },
            { rating: 3, comment: 'Beautiful but sometimes overwhelming.' }
        ]
    },
    {
        id: 3,
        title: 'Dunkirk',
        poster:
            'https://a.ltrbxd.com/resized/sm/upload/md/nb/pu/3i/bOXBV303Fgkzn2K4FeKDc0O31q4-0-1000-0-1500-crop.jpg?v=7307b1ff5b',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/l9/2l/7p/rz/dunkirk-2017-1200-1200-675-675-crop-000000.jpg?v=53e6d125e1',
        description:
            'During the early stages of World War II, hundreds of thousands of Allied soldiers are trapped on the beaches of Dunkirk, facing seemingly impossible evacuation. The film follows the desperate rescue mission from three perspectives: land, sea, and air.',
        releaseDate: '2017',
        genre: 'War',
        director: 'Christopher Nolan',
        reviews: [
            { rating: 4, comment: 'Intense and claustrophobic - a technical marvel.' },
            { rating: 5, comment: 'Nolan redefines the war film genre with this masterpiece.' },
            { rating: 5, comment: 'Minimal dialogue, maximum impact. Pure cinematic brilliance.' },
            { rating: 3, comment: 'Impressive technique, but emotionally distant.' }
        ]
    },
    {
        id: 4,
        title: 'Tenet',
        poster:
            'https://a.ltrbxd.com/resized/sm/upload/pq/9f/sr/vt/aCIFMriQh8rvhxpN1IWGgvH0Tlg-0-1000-0-1500-crop.jpg?v=f3165fe17f',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/5m/00/ad/bl/tenet-1200-1200-675-675-crop-000000.jpg?v=2f1c9ecacd',
        description:
            'A secret agent is recruited into a mysterious organization that manipulates time, tasked with preventing a global catastrophe that threatens the entire existence of humanity through a technology that can reverse the flow of time.',
        releaseDate: '2020',
        genre: 'Action',
        director: 'Christopher Nolan',
        reviews: [
            { rating: 4, comment: 'Incredibly ambitious and technically brilliant.' },
            {
                rating: 3,
                comment: 'Fascinating concept, but requires multiple viewings to understand.'
            },
            {
                rating: 5,
                comment: 'A cinematic puzzle that challenges and rewards intellectual viewers.'
            },
            { rating: 2, comment: 'Confusing and hard to follow.' }
        ]
    },
    {
        id: 5,
        title: 'Memento',
        poster:
            'https://a.ltrbxd.com/resized/sm/upload/v1/3q/s4/aa/memento-0-1000-0-1500-crop.jpg?v=80f0732247',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/za/7s/m0/sh/memento-1200-1200-675-675-crop-000000.jpg?v=d37b27369d',
        description:
            "A man suffering from short-term memory loss attempts to track down his wife's murderer, using an elaborate system of Polaroid photos, tattoos, and notes to compensate for his inability to form new memories.",
        releaseDate: '2000',
        genre: 'Thriller',
        director: 'Christopher Nolan',
        reviews: [
            {
                rating: 5,
                comment: 'A groundbreaking film that changed my understanding of narrative cinema!'
            },
            { rating: 4, comment: 'Brilliantly constructed mystery.' },
            { rating: 5, comment: `Nolan's early work proves his genius - absolutely mind-blowing` },
            { rating: 3, comment: 'Interesting concept, but can be frustrating.' }
        ]
    },
    {
        id: 6,
        title: 'Arrival',
        poster:
            'https://a.ltrbxd.com/resized/sm/upload/3u/dy/qd/qd/4Iu5f2nv7huqvuYkmZvSPOtbFjs-0-1000-0-1500-crop.jpg?v=0fc28fdf2c',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/oa/m7/ho/3a/arrival-2016-1200-1200-675-675-crop-000000.jpg?v=a5173b53c7',
        description:
            'When mysterious alien spacecraft land around the world, a renowned linguist is recruited by the military to establish communication and prevent global conflict, uncovering a revolutionary way of understanding language and time.',
        releaseDate: '2016',
        genre: 'Sci-Fi',
        director: 'Denis Villeneuve',
        reviews: [
            { rating: 5, comment: 'A deeply thoughtful and innovative approach to alien contact.' },
            { rating: 4, comment: 'Beautifully crafted and intellectually stimulating.' },
            {
                rating: 5,
                comment: 'Redefines the alien encounter genre with emotional depth and intelligence.'
            },
            { rating: 3, comment: 'Slow-paced but ultimately rewarding.' }
        ]
    },
    {
        id: 7,
        title: 'Blade Runner 2049',
        poster:
            'https://a.ltrbxd.com/resized/film-poster/2/6/5/4/3/9/265439-blade-runner-2049-0-1000-0-1500-crop.jpg?v=86735e0bb8',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/aj/h8/ku/9n/blade-runner-2049-1200-1200-675-675-crop-000000.jpg?v=5263a1d801',
        description: `A new blade runner, K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos, leading him on a quest to find Rick Deckard, a former blade runner who has been missing for decades.`,
        releaseDate: '2017',
        genre: 'Sci-Fi',
        director: 'Denis Villeneuve',
        reviews: [
            { rating: 5, comment: 'Visually breathtaking.' },
            { rating: 4, comment: 'A worthy sequel.' },
            { rating: 5, comment: "Expands the original's philosophical depth." },
            { rating: 3, comment: 'Beautiful but slow-paced.' }
        ]
    },
    {
        id: 8,
        title: 'Sicario',
        poster:
            'https://a.ltrbxd.com/resized/film-poster/1/9/7/6/2/8/197628-sicario-0-1000-0-1500-crop.jpg?v=06d4163bb2',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/21/i8/nu/tn/sicario-2015-1200-1200-675-675-crop-000000.jpg?v=1e124ce215',
        description:
            'An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico, becoming increasingly entangled in a dangerous and morally ambiguous mission.',
        releaseDate: '2015',
        genre: 'Crime',
        director: 'Denis Villeneuve',
        reviews: [
            { rating: 4, comment: 'Tense and gripping.' },
            { rating: 5, comment: 'Brilliant performances.' },
            { rating: 5, comment: 'Uncompromising look at the drug war.' },
            { rating: 3, comment: 'Intense but emotionally draining.' }
        ]
    },
    {
        id: 9,
        title: 'Prisoners',
        poster:
            'https://a.ltrbxd.com/resized/sm/upload/iw/eg/4g/nm/3w79tTsv6tmlT8Jww6snyPrgVok-0-1000-0-1500-crop.jpg?v=778c7ae8b8',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/j1/lk/so/8x/xJXjSQbQxyYkX2YA1wlllYYpoaP-1200-1200-675-675-crop-000000.jpg?v=4940a86b89',
        description:
            'When two young girls mysteriously disappear on Thanksgiving, a desperate father takes matters into his own hands, launching a frantic search that pushes him to moral and legal extremes while a determined detective follows a complex web of clues.',
        releaseDate: '2013',
        genre: 'Thriller',
        director: 'Denis Villeneuve',
        reviews: [
            { rating: 5, comment: 'Intense and thought-provoking.' },
            { rating: 4, comment: 'Keeps you on the edge of your seat.' },
            { rating: 5, comment: 'Haunting exploration of parental desperation.' },
            { rating: 3, comment: 'Emotionally challenging.' }
        ]
    },
    {
        id: 10,
        title: 'Enemy',
        poster:
            'https://a.ltrbxd.com/resized/sm/upload/sj/00/0d/n1/aQkyFHzNzZoMhxZ7c0IaK8BljED-0-1000-0-1500-crop.jpg?v=338dcff82c',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/n5/fr/vv/nu/enemy-1200-1200-675-675-crop-000000.jpg?v=dd461490dd',
        description:
            'A mild-mannered college professor discovers his exact look-alike in a movie and becomes obsessed with tracking him down, uncovering a disturbing and surreal connection that challenges his understanding of identity and reality.',
        releaseDate: '2013',
        genre: 'Mystery',
        director: 'Denis Villeneuve',
        reviews: [
            { rating: 4, comment: 'Haunting and surreal.' },
            { rating: 3, comment: 'Bizarre but intriguing.' },
            { rating: 5, comment: 'A mind-bending psychological thriller.' },
            { rating: 2, comment: 'Confusing and unsettling.' }
        ]
    },
    {
        id: 11,
        title: 'Pulp Fiction',
        poster:
            'https://a.ltrbxd.com/resized/film-poster/5/1/4/4/4/51444-pulp-fiction-0-1000-0-1500-crop.jpg?v=dee19a8077',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/z6/e0/vw/uy/pulp-fiction-65-1200-1200-675-675-crop-000000.jpg?v=bb1e151d8b',
        description:
            'Multiple interconnected stories unfold in Los Angeles, following a group of criminals, including two hitmen, a boxer, a gangster and his wife, and a pair of diner bandits, whose lives become entangled in unexpected and violent ways.',
        releaseDate: '1994',
        genre: 'Crime',
        director: 'Quentin Tarantino',
        reviews: [
            { rating: 5, comment: 'Iconic and unforgettable.' },
            { rating: 4, comment: 'Sharp dialogue and style.' },
            { rating: 5, comment: 'Revolutionized modern cinema.' },
            { rating: 3, comment: 'Unique but not for everyone.' }
        ]
    },
    {
        id: 12,
        title: 'Reservoir Dogs',
        poster:
            'https://a.ltrbxd.com/resized/sm/upload/u0/4o/op/yx/g7spS2Y4SZoQoC6Hn7zoqEqdYqR-0-1000-0-1500-crop.jpg?v=6d1aaa720c',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/h1/5c/b8/1r/reservior-dogs-1200-1200-675-675-crop-000000.jpg?v=d56abbd818',
        description:
            'A gritty crime thriller following a group of criminals whose meticulously planned heist spirals into chaos, exposing tensions, mistrust, and brutal confrontations.',
        releaseDate: '1992',
        genre: 'Crime',
        director: 'Quentin Tarantino',
        reviews: [
            { rating: 5, comment: 'Tense and raw.' },
            { rating: 4, comment: 'Brilliant debut film.' },
            { rating: 5, comment: 'Intense performances with razor-sharp dialogue.' },
            { rating: 4, comment: 'A masterclass in non-linear storytelling.' },
            { rating: 3, comment: 'Grim and gripping, but a bit too violent for some tastes.' }
        ]
    },
    {
        id: 13,
        title: 'Kill Bill: Vol. 1',
        poster:
            'https://a.ltrbxd.com/resized/sm/upload/sw/w2/ep/v4/9O50TVszkz0dcP5g6Ej33UhR7vw-0-1000-0-1500-crop.jpg?v=5a65f5202f',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/7d/ip/0u/xg/kill-bill-vol-1-150-1200-1200-675-675-crop-000000.jpg?v=6546ee1a2d',
        description:
            'An epic revenge tale of a betrayed assassin, weaving through stylized action sequences, martial arts showdowns, and vivid cinematic homages.',
        releaseDate: '2003',
        genre: 'Action',
        director: 'Quentin Tarantino',
        reviews: [
            { rating: 5, comment: 'Stylish and thrilling.' },
            { rating: 4, comment: 'Non-stop action.' },
            { rating: 5, comment: 'Visually stunning with iconic fight choreography.' },
            { rating: 4, comment: 'A bloody, beautiful ballet of revenge.' },
            { rating: 3, comment: 'Over-the-top but undeniably entertaining.' }
        ]
    },
    {
        id: 14,
        title: 'Inglourious Basterds',
        poster:
            'https://a.ltrbxd.com/resized/film-poster/4/1/3/5/2/41352-inglourious-basterds-0-1000-0-1500-crop.jpg?v=0c74c673e0',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/3k/ei/4w/1h/inglourious-basterds-1200-1200-675-675-crop-000000.jpg?v=8d8456f504',
        description:
            'Set in Nazi-occupied France, this audacious war film intertwines the brutal missions of a rogue squad with a plot for vengeance, fueled by sharp wit and explosive confrontations.',
        releaseDate: '2009',
        genre: 'War',
        director: 'Quentin Tarantino',
        reviews: [
            { rating: 5, comment: 'Tarantino at his best.' },
            { rating: 4, comment: 'Sharp and bold.' },
            { rating: 5, comment: 'Unforgettable characters and masterful tension-building.' },
            { rating: 4, comment: 'A darkly humorous, violent twist on history.' },
            { rating: 3, comment: 'Brilliant dialogue, but pacing felt slow in parts.' }
        ]
    },
    {
        id: 15,
        title: 'Django Unchained',
        poster:
            'https://a.ltrbxd.com/resized/film-poster/5/2/5/1/6/52516-django-unchained-0-1000-0-1500-crop.jpg?v=f02aed63a3',
        backdrop:
            'https://a.ltrbxd.com/resized/sm/upload/ke/2v/n9/i6/django-unchained-1200-1200-675-675-crop-000000.jpg?v=a67979b487',
        description:
            'A bold, revenge-fueled Western where a freed slave embarks on a perilous mission to rescue his wife, crossing paths with ruthless villains and unlikely allies.',
        releaseDate: '2012',
        genre: 'Western',
        director: 'Quentin Tarantino',
        reviews: [
            { rating: 5, comment: 'Bold and unflinching.' },
            { rating: 4, comment: 'Gripping story.' },
            { rating: 5, comment: 'A daring blend of action, dark humor, and social commentary.' },
            { rating: 4, comment: 'Powerful performances with Tarantino’s signature style.' },
            { rating: 3, comment: 'Entertaining but the violence might be excessive for some.' }
        ]
    },
   
];

export const movies = writable<Movie[]>([]);
movies.set(mockMovies);
